import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import BarraInferior from "./BarraInferior";
import Navbar from "./NavBarTop";

function Historico(){
    return(<>
    <Navbar />
    <Container>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver seu histórico aqui!</p>
    </Container>    
    <BarraInferior />
    </>)
}
export default Historico;
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
    margin-bottom: 17px;
  } 
  p{
    color: #666666;
    font-size: 18px;
    font-weight: 400;
    line-height: 22.5px;
  }`