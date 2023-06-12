import { useState } from "react"
import "./Card.css"

function Card (props) {
    const styleCard={
        height: 500,
        width: 320,
        backgroundColor: "crimson",
        borderRadius: 5,
        padding: 5,
        marginBottom: 15,
        marginLeft:10
    }
   

    const [btn,setBtn] = useState(true);
    const likeHandle = ()=>{
        setBtn(!btn)
    }
    
    const [visible,setVisible] = useState(false);
    const handleClick = () => {
        setVisible((current) => !current);
    }
 
 
  return (
    <div style={styleCard}>
        <br></br>
        <h1>{props.namaGalaksi}</h1>
        <img src={props.foto} style={{widt
                : '31%',height : '31%'}}/>
        <div>
        {visible && <p>{props.des} </p>}
        <button onClick={()=>likeHandle()}>{btn? "Like":"Dislike"}</button>   
        <button onClick={handleClick}>Selengkapnya</button>
        </div>

    </div>
  )
}

export default Card