import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import styled from "styled-components";
import logo from "./logo.png";
import { AuthContext } from "../AuthContext";
import { Audio } from 'react-loader-spinner'

function LoginI() {
  const { token, setToken, setInfosUsuario, form, setForm } = useContext(AuthContext)

  const navigate = useNavigate()

  function handleLogin(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function login(event) {
    event.preventDefault()
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

    const promise = axios.post(URL, form)

    promise.then((res) => {
      setToken(res.data.token)
      console.log(res)
      setInfosUsuario(res.data)
      navigate("/hoje")
    })

    promise.catch((err) => alert(err.response.data.message))

  }
  /* if(token.length === 0){
    return(
      <Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass />)
  } */

  return (
    <Container>
      <img src={logo} alt="" />
      <form onSubmit={login}>
        <input name="email"
          value={form.email}
          onChange={handleLogin}
          type="text"
          placeholder="e-mail"
          required
        />
        <input name="password"
          value={form.password}
          onChange={handleLogin}
          type="password"
          placeholder="senha"
          required
        />
        <button type="submit">Entrar</button>
        
      </form>

      <Link to="/cadastro"><p>Não possui uma conta? Cadastre-se</p></Link>
    </Container>
  )
}
export default LoginI;
const Container = styled.div`
  width: 100%;
  height: 667px;
  padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  font-family: 'Lexend-deca', sans-serif;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

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