
import AuthProvider, { AuthContext } from './AuthContext';
import GlobalStyle from './GlobalStyle'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginI from "./components/Login"
import Cadastro from "./components/Cadastro"
import Habits from "./components/Habits"
import Today from './components/Today';
import Historico from './components/Historico'
/*TODO MENU INFERIOR 
            */
function App() {

  return (<>
    <BrowserRouter >
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<LoginI />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/historico" element={<Historico />}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </>);
}

export default App;