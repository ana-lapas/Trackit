import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { AuthContext } from "../AuthContext"
import { CircularProgressbarWithChildren,  buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

function BarraInferior(){
    const { infosUsuario, userHabits, habToday,userHabitsToday, progress, setProgress} = useContext(AuthContext)
    setProgress((((userHabitsToday.length)/(habToday.length))*100))
    return(
        <>
        <Footer>
            <Link to="/habitos">
                <div><p>Hábitos</p></div>
            </Link> 
            
            <Link to="/hoje">
                <div className="circle">
                    <CircularProgressbarWithChildren 
                    value={progress}
                    text={"Hoje"}
                    background                
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                    })}/>
                </div>
            </Link>
            
            <Link to="/historico">
                <div><p>Historico</p></div> 
            </Link> 
        </Footer>
        </>
    )
}
export default BarraInferior;

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    height: 70px;
    background-color: #ffffff;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    a {
        text-decoration: none;
    }
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
    .circle{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #ffffff;
        width: 91px;
        height: 91px;
        margin-bottom:10px;
        p{
            position: fixed;
        }
    }
`