import styled from "styled-components"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../AuthContext"
import axios from "axios"
function HabitoDiario({h, done}){
    return(
        <HabitoD key={h.id} h={h} onClick={() => done(h)}>
        <div>
          <h1>{h.name}</h1>
          <p>Sequência atual:<span className={h.done ? 'checked' : 'unchecked'}>{h.currentSequence}</span></p>
          <p>Seu recorde: {h.highestSequence}</p>
        </div>
        <div className={h.done ? 'checked' : 'unchecked'}><ion-icon name="checkbox"></ion-icon></div>

      </HabitoD> 
    )
}
export default HabitoDiario;
const HabitoD = styled.div`
width:375px;
height: 95px;
border-radius:5px;
background-color: #ffffff;
margin-bottom: 10px;
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
font-family: 'Lexend-deca', sans-serif;
color: #666666;
h1{
margin-top: 18px;
font-size: 20px;
font-weight: 400;
line-height: 25px;
margin-left: 15px;
}
p{      
font-size: 13px;
font-weight: 400;
line-height: 16px;
margin-left: 15px;
}
ion-icon{
font-size:70px;
z-index:0;
}
.checked{
 color: #8FC549;
}
.unchecked{
    color: "#ebebeb";
}
`