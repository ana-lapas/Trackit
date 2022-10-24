import styled from "styled-components";

function DiaS({DIAS, handleDay}){
    console.log(DIAS)
    return(<>
        {DIAS.map((d, i) => <DiaButton 
        key={i} 
        isClicked={d.isClicked}
        onClick={()=>handleDay(d)}>
            {d.dia}
        </DiaButton>)}
    
    </>)
}
export default DiaS;

const DiaButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  background-color:${(prop) => prop.isClicked ? "#dbdbdb" : "#ffffff"};
  color: ${(prop) => prop.isClicked ? "#ffffff" : "#dbdbdb"};
  font-size: 20px;
  line-height: 25px;
`