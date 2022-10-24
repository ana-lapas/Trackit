import styled from "styled-components"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../AuthContext"
import axios from "axios"
import vetor from "./Vector.png"
//verificar como pintar os dias
function Habit({id, name, days, deleteHabit}){
  console.log(id)
  console.log(name)
  console.log(days)
  const diasSelected=[{id: 0, dia: "D", isClicked: false },
    {id: 1, dia: "S", isClicked: false},
    {id: 2, dia: "T", isClicked: false},
    {id: 3, dia: "Q", isClicked: false},
    {id: 4, dia: "Q", isClicked: false},
    {id: 5, dia: "S", isClicked: false},
    {id: 6, dia: "S", isClicked: false}]
    return(
        <>
        <Container>
          <div>
            <p>{name}</p>
            <img src={vetor} onClick={() => deleteHabit(id)} alt=""/>
          </div>
            
          <div>
            <DiaSelecionado >{diasSelected[0].dia}</DiaSelecionado>
            <DiaSelecionado >{diasSelected[1].dia}</DiaSelecionado>
            <DiaSelecionado >{diasSelected[2].dia}</DiaSelecionado>
            <DiaSelecionado >{diasSelected[3].dia}</DiaSelecionado>
            <DiaSelecionado >{diasSelected[4].dia}</DiaSelecionado>
            <DiaSelecionado >{diasSelected[5].dia}</DiaSelecionado>
            <DiaSelecionado >{diasSelected[6].dia}</DiaSelecionado>
          </div>
          
                 
          
        </Container>
        
        </>
    )
}
export default Habit;
const Container = styled.div`
  width:375px;
  height: 91px;
  display: flex;
  flex-direction: column;  
  justify-content: space-around;
  align-items: flex-start; 
  background-color: #ffffff;
  margin-top: 10px;
  font-family: 'Lexend-deca', sans-serif;
  border-radius: 5px;

  p {
    padding-left:15px;
    padding-top:10px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #666666;
  }
  
  img {
    height:15px;
    width: 15px;
    margin-right: 15px;
  }

  button{
    width: 30px;
    height: 30px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    background-color: #ffffff;
    color: #dbdbdb;
    font-size: 20px;
    line-height: 25px;
  }
`
const DiaSelecionado = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  background-color:${(prop) => prop.isClicked ? "#dbdbdb" : "#ffffff"};
  color: ${(prop) => prop.isClicked ? "#ffffff" : "#dbdbdb"};
  font-size: 20px;
  line-height: 25px;
  margin-right: 5px;
`
