import styled from "styled-components";
import Chart from "../../Chart";

function Perf() {
    const percentages = [80, 30, 60, 70, 90, 100];
    return <Container>
        <div className="heading">
            <div className="text">Task Complete</div>
            <div className="icon"></div>
        </div>
        <div className="graph">
            {
                percentages.map((x) => {
                    return <div className="first">
                        <div className="fillup" style={{ height: x + "%", top: 100 - x + "%" }}> </div>
                    </div>
                })
            }
        </div>
        <div>
            <Chart />
        </div>
    </Container>
}

const Container = styled.div`
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
    border-radius: 1rem;
    background-color: #fff;
    background-color: rgba(255,255,255,0.4);
    opacity: 1;
    .heading{
        display: flex;
        justify-content: space-between;
        padding:1rem 2rem;
    }
    .first{
        height:150px;
        width: 27px;
        background-color: white;
        border-radius: 1rem;
        margin-right: 1rem;
    }
    .fillup{
        background: rgb(38,49,79);
        background: linear-gradient(45deg, rgba(38,49,79,1) 0%, rgba(79,94,128,1) 100%);
        height: 50%;
        border-radius: 1rem;
        position: relative;
        top:50%;
        
    }
    .seventy{
            height:70%;
            top:30%
    }
    .graph{
        display: flex;
        justify-content: center;
        padding-top:1.2rem;
        padding-left: 1rem;
    }
`


export default Perf;