import React, {useState} from "react";
// import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import Detail from "./Detail";

export default function MainHeader() {

    

    let [ 요일 , 요일변경 ] = useState(['월', '화', '수', '목', '금', '토', '일'])

    const navigate = useNavigate();

    const week_rates = 요일.map((w, idx) => {
        return {
        day: w,
        rate:
            Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
            Math.ceil(1),
        };
    });
    console.log(week_rates)

    let weeks = {
        float : 'left', 
        fontWeight: 'bold', 
        margin : '10px', 
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
        <div style={{
            height: "90vh",
            width: "348px",
            margin: "20px auto",
            border: "1px solid gainsboro",
            borderRadius: "10px",
        }}>
            <div>
                <p style = {{
                    fontSize : '20px', 
                    fontWeight: 'bold', 
                    width: "348px", 
                    display : 'flex',
                    justifyContent : 'center'}}>

                    나의 일주일은?
                </p>
            </div>
            
            

            
        {week_rates.map((w, idx) =>{
            
            return (
                <div style={{display : "flex", marginLeft : "30px"}}>
                        <p style = {weeks}>{ w.day }</p>
                    <div>
                        <div style={weekBox}>
                            <div>
                            
                                {Array.from({ length: 5 }, (item, idx) => {
                                return (
                                <div
                                    key={idx}
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "30px",
                                        margin: "5px",
                                        float : 'left',
                                        textAlign : 'center',
                                    backgroundColor: w.rate < idx ? "#ddd" : "#ffeb3b",
                                    }}
                                ></div>
                                );
                                })}
                                <div style = {triangle} onClick = {
                                    () => {navigate('/Detail', { 날짜들 : w.day});}
                                    
                                } id = "dayday"> </div>
                                
                            </div>  
                        </div>                            
                    </div>
                </div>
            
            )
        })
    }
            
        </div>
    )
    
}
