import styled from "styled-components";
import { useState } from "react"

function Sidebar() {
    const [active, setActive] = useState();
    const [sidebar, changeSidebar] = useState(true);
    const items = [
        { title: "Dashboard", icon: "fas fa-home" },
        { title: "My Task", icon: "fas fa-check-circle" },
        { title: "Message", icon: "fas fa-envelope" },
        { title: "Notification", icon: "fas fa-bell" },
        { title: "Statistics", icon: "fas fa-chart-bar" },
        { title: " My File", icon: "fas fa-folder-open" }
    ]
    return <div>
        <Container>
            <div className="logo"> Rightwork</div>
            <div className="sidebarItems">
                {
                    items.map((item, index) => {
                        return <div onClick={() => { setActive(index); }} className={active === index ? "active item" : "item"}>
                            <i className={item.icon}></i>{item.title}
                        </div>
                    })
                }
            </div>
            <span onClick={() => changeSidebar(!sidebar)} className="exit"><i class="fas fa-sign-out-alt"></i></span>
        </Container>
    </div >

}

const Container = styled.div`
    background-color: #e9e9e9;
    color:black;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 4rem;
    .exit{
        position: relative;
        top:10rem;
        font-size: 1.5rem;
        cursor: pointer;
    }
    .active{
        color:#d3570f;
    }
    .item{
        padding: 1.5rem 0rem;
        cursor:pointer;
    }
    .logo{
        padding: 3rem 1rem;
        font-size: 1.3rem;
        font-weight: 600;
        text-align: center;
    }

    @media (max-width:768px){
        display: none;
        width: 100%;

    }
    .sidebarItems{
       .fas{
           padding-right: 0.5rem;
       }
    }
    
`
export default Sidebar;