import Days from "./Days";

export default function Header() {

    let onedays = ['월', '화', '수', '목', '금', '토', '일']

    let today = new Date();

    let day = today.getDay();
    console.log(day)

    let weeks = {
        float : 'left', 
        fontWeight: 'bold', 
        margin : '10px', 
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
            
            

            {
                onedays.map(function(a){
                    return (
                        <div style={{display : "flex", marginLeft : "30px"}}>
                            <p style = {weeks}>{ a }</p>
                            <Days></Days>
                        </div>
                        
                    )
                })
            }
            
        </div>
    )
    
}