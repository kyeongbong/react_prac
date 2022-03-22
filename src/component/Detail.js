import { Link } from "react-router-dom";
import { useState } from "react";
import MainHeader from "./MainHeader"


export default function Detail() {

    const [rate, setRate] = useState(0);
    

    return (
        <div style={{
            height: "90vh",
            width: "348px",
            margin: "20px auto",
            border: "1px solid gainsboro",
            borderRadius: "10px",
            paddingTop: "30px",
        }}>
            <h3 style={{ textAlign: "center" }}>
            <span
            style={{
                color: "#fff",
                fontWeight: "900",
                background: "orange",
                padding: "0.2rem",
                borderRadius: "5px",
            }}
            >
            요일
            </span>{" "}
            평점 남기기
        </h3>
            <div style = { {width : '200px', height: '40px', margin : '15px auto'} }>
                {Array.from({ length: 5 }, (item, idx) => {
                return (
                <div
                    key={idx}
                    onClick={() => {
                    setRate(idx + 1);
                    }}
                    style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "30px",
                    margin: "5px",
                    float : 'left',
                    textAlign : 'center',
                    backgroundColor: rate < idx + 1 ? "#ddd" : "#ffeb3b",
                    }}
                >
                    😡
                </div>
                );
            })}
            </div>
            <Link to ="/"><button style={{
            width: "80%",
            backgroundColor: "#eee",
            border: "none",
            borderRadius: "5px",
            padding: "1rem",
            color: "#999",
            margin: '15px auto',
            display:'block',
            
        }}>어림없어 돌아가</button></Link>
        </div>
    )
}