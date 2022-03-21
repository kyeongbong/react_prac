import { Link } from "react-router-dom";

export default function Days() {

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

    let triangle = {
        width: '0px', 
        height : '0px', 
        borderLeft : '25px solid purple', 
        borderTop: '15px solid transparent', 
        borderBottom: '15px solid transparent', 
        float : 'left', 
        margin : '5px'
    };

    let weekBox = {
        width : '250px',
        height : '40px',
        display : 'flex',
        justifyContent : 'center',
        marginBottom : '10px',
        float : 'left'
    };

    return (
        <div>
            <div style={weekBox}>
                <div>
                
                { scores.map(function(){
                    return (<div style = {grayScore} onClick = { cy }></div>)
                }) }
                <Link to = "/Detail"> <div style = {triangle}></div> </Link>
                </div>  
            </div>

            
        </div>

        
    );
}