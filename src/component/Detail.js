import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";

export default function Detail() {

    let scores = [ 1, 2, 3, 4, 5];

    let grayScore = {
        backgroundColor : '#eee', 
        height : '30px', 
        width : '30px', 
        borderRadius: '30px', 
        float : 'left',
        margin : '5px'
    };

    let cy = {
        backgroundColor : '#F0F', 
        height : '30px', 
        width : '30px', 
        borderRadius: '30px', 
        float : 'left',
        margin : '5px'
    };

    function cyy() {
        console.log('hi')
        scores.style.backgroundColor = '#F0F';
    }


    return (
        <div style={{
            height: "90vh",
            width: "348px",
            margin: "20px auto",
            border: "1px solid gainsboro",
            borderRadius: "10px",
            paddingTop: "30px",
        }}>
            <p style = {{fontSize : '20px', fontWeight: 'bold'}}> { MainHeader.a } </p>
            
            { scores.map(function(){
                    return (<div style = {grayScore} onClick = { cyy }></div>)
                }) }

            <Link to ="/"><button>어림없어 돌아가</button></Link>
        </div>
    )
}