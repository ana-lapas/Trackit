import { useEffect, useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import BarraInferior from './BarraInferior';
import Navbar from './NavBarTop';
import { AuthContext } from "../AuthContext";
import HabitoDiario from './HabitoDiario'

function Today() {
  const { token, infosUsuario, setInfosUsuario, userHabits, setUserHabits, setProgress, progress,
    habToday, setHabToday, userHabitsToday, setUserHabitsToday } = useContext(AuthContext)
  const [controle, setControle] = useState(false)
  const [cores, setCores] = useState(false)

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)

    promise.then((res) => {
      setHabToday(res.data)
      confereProgresso(habToday, setUserHabitsToday, userHabitsToday, setProgress)
    })

    promise.catch((err) => console.log(err.response.data))
  }, [cores])

  //conferir habitos feitos
  function confereProgresso({ habToday, setUserHabitsToday, userHabitsToday, setProgress }) {
    for (let i = 0; i < habToday.length; i++) {
      let item = habToday[i];
      if (item.done === true) {
        setUserHabitsToday([...userHabitsToday, item])
      }
    }
    setProgress((((userHabitsToday.length) / (habToday.length)) * 100))
  }
  //marcar habito como feito
  function done(h) {
    console.log("Entrou no done")
    console.log(h)
    console.log(h.id)
    if (h.done === false) {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }

      const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/check`, null, config)

      promise.then((res) => {
        setCores(!cores)
        setUserHabitsToday([...userHabitsToday, h])
      })

      promise.catch((err) => {
        alert(err.response.data.message)
      })
    }
    else {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }

      const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/uncheck`, null, config)

      promise.then((res) => {
        setUserHabitsToday(userHabitsToday.filter(habit => habit.id !== h.id))
        setProgress(((userHabitsToday.length) / (habToday.length) * 100))
      })

      promise.catch((err) => {
        alert(err.response.data.message)
      })
    }

  }
  return (
    <>
      <Navbar />
      <Container>
        <div>
          <h1>Segunda</h1>
          <p>{(progress === 0) ? "Nenhum hábito concluído ainda" : <span>{progress}% dos hábitos concluídos</span>} </p>
        </div>
        {(habToday.length === 0) ? "" :
          (habToday.map((h) =>
            <HabitoDiario key={h.id} h={h} done={done} />))}
      </Container>
      <BarraInferior />
    </>
  )
}
export default Today;
const Container = styled.div`
  background-color: #e5e5e5;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;  
    margin-top: 100px;
    font-family: 'Lexend-deca', sans-serif;
    margin-bottom: 20px;
    margin-left: 18px;
  
  h1{
    color: #126BA5;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
  } 
  p{
    color: #bababa;
    font-size: 18px;
    font-weight: 400;
    line-height: 22.5px;
  }
  span{
    color: #8FC549;
  }`
