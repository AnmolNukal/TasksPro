import styled from "styled-components";
import { useState } from "react"

function Tab() {
    const items = ["New Task", "Task List", "Timeline", "Progress Form", "More.."];
    const [active, setActive] = useState();
    return <Container>
        <div className="logo">Dashboard</div>
        <div className="itemList">{
            items.map((item, index) => {
                return <span onClick={() => { setActive(index); }} className={active === index ? "active items" : "items"}>{item}</span>
            })
        }
        </div>
    </Container>
}
const Container = styled.div`
    background-color: red;
    padding-bottom: 1rem;
    .items{
        padding-right: 3rem;
        cursor:pointer;
    }
    .active{
        color:white;
    }
    .logo{
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    @media (max-width:768px){
        display: flex;
        align-items: center;
        flex-direction: column;
        .logo{
            font-size: 1.3rem;
        }
        .items{
            padding:0;
            font-size: 0.7rem;
            padding-right: 0.5rem;
        }
        .itemList{
            display: flex;
        }
    }
`

export default Tab;