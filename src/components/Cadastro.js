import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import logo from "./logo.png";

function Cadastro(){
    const [form, setForm] = useState({ email: "", name: "",  image: "", password: "" })
    const navigate = useNavigate()
  
    function handleForm(e) {
      const {name, value} = e.target
      setForm({...form, [name]: value})
    }
      function createAccount() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const body = {...form}
    
        const promise = axios.post(URL, body)
    
        promise.then((res) => {
          console.log(res)
          navigate("/")
        })
    
        promise.catch((err) => {
          alert(err.response.data.message)
        })
      }
      return(
      <Container>
        <img src={logo} alt="" />
        <input
          name="email"
          value={form.email}
          onChange={handleForm}
          type="text"
          placeholder="E-mail"
        />
        <input
          name="password"
          value={form.password}
          onChange={handleForm}
          type="password"
          placeholder="Senha"
        />
        <input
          name="name"
          value={form.name}
          onChange={handleForm}
          type="text"
          placeholder="Nome"
        /> 
        <input
          name="image"
          value={form.image}
          onChange={handleForm}
          type="text"
          placeholder="Imagem"
        />
        <button onClick={createAccount}>Cadastrar</button>
        <Link to="/"><p>Já tem uma conta? Faça login</p></Link>
      </Container>)
}

export default Cadastro;

const Container = styled.div`
  width: 100%;
  padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  margin-top: 70px;
  font-family: 'Lexend-deca', sans-serif;

  img {
    height: 180px;
    width: 180px;
  }

  input {
    height: 45px;
    width: 303px;
    padding-left: 10px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-bottom: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #DBDBDB;
  }
  button{
    height: 45px;
    width: 313px;
    border: none;
    border-radius: 5px;
    background-color: #52B6FF;
    color: #ffffff;
    margin-bottom: 25px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
  }
  p {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
  }
`