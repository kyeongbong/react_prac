import React, {useState} from "react";
// import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import Detail from "./Detail";

export default function MainHeader() {

    

    const 요일 = {
        0 : "일",
        1 : "월",
        2 : "화",
        3 : "수",
        4 : "목",
        5 : "금",
        6 : "토",
    };

        const week = Object.keys(요일).map((_d, idx) => 요일[_d])

        console.log(week)

        const week_days = Object.keys(요일).map((_d, idx) => {

            let today = new Date().getDay();

            let d =
            today + parseInt(_d) > 6
                ? today + parseInt(_d) - 7
                : today + parseInt(_d);

            return 요일[d];
        });

        console.log(week_days)


    const navigate = useNavigate();

    const week_rates = week_days.map((w, idx) => {
        return {
        day: w,
        rate:
            Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
            Math.ceil(1),
        };
    });

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
                                    () => {navigate( `/Detail/${w.day}` )}}> </div>
                                
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
