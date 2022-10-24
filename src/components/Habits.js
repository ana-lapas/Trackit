import styled from "styled-components"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../AuthContext"
import axios from "axios"
import Navbar from "./NavBarTop"
import Habit from "./Habit"
import BarraInferior from "./BarraInferior"
import { DIAS } from "./DiaSemana"
import DiaS from "./DiaS"

function Habits() {
  const { token, infosUsuario, setInfosUsuario, userHabits, setUserHabits, form, setForm } = useContext(AuthContext)
  const [bodyArrumar, setBody] = useState({ name: "", days: [] })
  const [showCreateHabitCard, setShowCreateHabitCard] = useState(0)
  const [habitName, setHabitName] = useState("")
  const [selected, setSelected] = useState([])
  const [day, setDay] = useState([])
  const [habitosNovos, setHabitosNovos] = useState(false)
  //deletar habitos
  function deleteHabit(id) {
    const confirmacao = window.confirm("tem certeza que deseja excluir esse hábito?");
    if (confirmacao === true) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
      promise.then(res => {
        setUserHabits(userHabits.filter(habit => habit.id !== id))
      })
      promise.catch(err => console.log(err.data.message))
    }
  }

  //Criando os habitos
  function createHabits(e) {
    const { name, value } = e.target
    setHabitName({ ...habitName, name: value })

  }
  function clean() {
    DIAS[0].isClicked = false
    DIAS[1].isClicked = false
    DIAS[2].isClicked = false
    DIAS[3].isClicked = false
    DIAS[4].isClicked = false
    DIAS[6].isClicked = false
    DIAS[5].isClicked = false
    setSelected([])
    setHabitName("")
    setDay([])
  }
  function postNewHabit() {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }

    const body = {
      name: habitName.name,
      days: day,
    }

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)

    promise.then((res) => { //verificar se o hábito está junto dos outros      
      setShowCreateHabitCard(0) //esconder o card d criar hábito
      setHabitosNovos(!habitosNovos)
      clean() //limpar o input e o dia da semana
    })

    promise.catch((err) => {
      alert(err.response.data.message)
    })
  }
  //verificar os dias
  function handleDay(dia) {
    dia.isClicked = !dia.isClicked;
    if (dia.isClicked) {
      const filteredDays = selected.filter((d) => !(d.id === dia.id));
      setSelected([...filteredDays]);
      setDay([...day, dia.id])
      return;
    }
    setSelected([...selected, dia]);
    return;
  }

  //Pegando os hábitos
  useEffect(() => {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const promise = axios.get(URL, config)

    promise.then((res) => {
      setUserHabits(res.data)
      console.log(res.data)
      console.log(userHabits)
      console.log("Deu certo a importação do habito")
    })

    promise.catch((err) => console.log(err.response.data))
  }, [habitosNovos])
  return (<>
    <Navbar />
    <Container>
      <Card>
        <p>Meus Hábitos</p>
        <button onClick={() => setShowCreateHabitCard(1)}>+</button>
      </Card>
      {(showCreateHabitCard === 0) ? "" :
        <NewHabitCard>
          <input name="name" value={habitName.name} onChange={createHabits}
            type="text" placeholder="nome do hábito" />
          <DiasDaSemanaB>
            <DiaS DIAS={DIAS} handleDay={handleDay} setSelected={setSelected} selected={selected} />
          </DiasDaSemanaB>

          <div className="right">
            <button className="cancelar" onClick={() => setShowCreateHabitCard(0)}>Cancelar</button>
            <button className="salvar" onClick={postNewHabit}>Salvar</button>
          </div>
        </NewHabitCard>}

      {(userHabits.length === 0) ?
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        : (userHabits.map((habit) => (<Habit id={habit.id} name={habit.name} days={habit.days} deleteHabit={deleteHabit} />)))}
    </Container>
    <BarraInferior />
  </>)
}
export default Habits;

const Container = styled.div`
  width: 375px;
  padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  font-family: 'Lexend-deca', sans-serif;
  background-color: #e5e5e5;
  p{
    color: #666666;
    margin-left: 17px;
    font-size: 17.98px;
  line-height: 22px;
  }
`
const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;  
  margin-top: 70px;
  font-family: 'Lexend-deca', sans-serif;
  margin-bottom: 20px;
  p{
    color: #126BA5;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    text-align: left;
  } 
 
  button{
    width: 40px;
    height: 35px;
    border: none;
    background: #52B6FF;
    border-radius: 4.7px;
    font-size: 27px;
    line-height: 34px;
    color: #FFFFFF;
  }
`
const NewHabitCard = styled.div`
    width: 340px;
    height: 180px;
    left: 17px;
    top: 147px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    background-color: #ffffff;
    margin-bottom: 29px;    
    font-family: 'Lexend-deca', sans-serif;    
    font-weight: 400;

  input {
    height: 45px;
    width: 303px;
    padding-left: 10px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-left: 10px;
    margin-bottom: 5px;
    font-size: 20px;
    line-height: 25px;
    text-align: left;
    color: #dbdbdb;
  }
  
  .right{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: row;
    width: 100%;      
      button {
      border: none;
      margin-left: 5px;
      border-radius:5px;
      width: 85px;
      height: 35px;
      font-family: 'Lexend Deca', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      margin-right: 16px;
  } }
  .salvar{
    background-color: #52b6ff;
    color: #ffffff;}
  .cancelar{
    background-color: #ffffff;
    color: #52b6ff;}`
const DiasDaSemanaB = styled.div`
margin-left: 10px;
display: flex;
width:270px;

*:not(:last-child) {
  margin-right: 4px;
}
.unselected{
  background-color: #ffffff;
  color: #dbdbdb;
}
.selected{
  background-color: #cfcfcf;
  color: #ffffff;
}`
