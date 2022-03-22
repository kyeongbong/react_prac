import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MainHeader from "./MainHeader"

export default function Detail() {

    // const { 날짜들 } = route.params;
    // console.log(날짜들)

    const navigate = useNavigate();

    const [rate, setRate] = useState(0);

    let [ 요일 , 요일변경 ] = useState(['월', '화', '수', '목', '금', '토', '일'])

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
                color: "purple",
                fontWeight: "900",
                padding: "0.2rem",
                borderRadius: "5px",
            }}
            >
            { MainHeader.dayday }요일
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
                    
                </div>
                );
            })}
            </div>
            <button style={{
            width: "80%",
            backgroundColor: "#eee",
            border: "none",
            borderRadius: "5px",
            padding: "1rem",
            color: "#999",
            margin: '15px auto',
            display:'block',
            
        }}
        onClick = {
            () => { navigate('/'); }
        }
        >등록하기</button>
        </div>
    )
}