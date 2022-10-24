import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";

function Navbar(){
    const { infosUsuario } = useContext(AuthContext)
    return(
        <>
        <NavbarTop>
            <p>Trackit</p>
            <img src={infosUsuario.image} alt="" />
        </NavbarTop>
        </>
    )
}

export default Navbar;

const NavbarTop = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    p{
        font-family: 'Playball', cursive;
        font-weight:400;
        font-size: 39px;
        line-height: 48.7px;
        color: #ffffff;
        margin-left: 15px;
    }

    img {
        width:51px;
        height: 51px;
        border-radius: 100%;
        margin-right: 15px;
    }
`