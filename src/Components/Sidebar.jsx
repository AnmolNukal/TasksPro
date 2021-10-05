import styled from "styled-components";
import { useState } from "react"

function Sidebar() {


    return <div>
        <Container>
            <div className="logo"> Rightwork</div>
            <div className="sidebarItems">
                <ul>
                    <li ><i class="fas fa-home"></i> Dashboard</li>
                    <li ><i class="fas fa-check-circle"> </i>  My Task</li>
                    <li ><i class="fas fa-envelope"></i> Message</li>
                    <li ><i class="fas fa-bell"></i> Notification</li>
                    <li ><i class="fas fa-chart-bar"></i> Statistics</li>
                    <li ><i class="fas fa-folder-open"></i> My File</li>
                </ul>
            </div>
        </Container>
    </div >

}

const Container = styled.div`
    background-color: #e9e9e9;
    color:black;
    width:20%;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    li{
        list-style-type : none;
        padding: 1.5rem 0rem;
        cursor: pointer;
        :active{
            color:orange;
        }
    }
    .logo{
        padding: 3rem 1rem;
        font-size: 1.3rem;
        font-weight: 600;
        text-align: center;
    }

    @media (max-width:768px){
        display: none;

    }
    .sidebarItems{
       .fas{
           padding-right: 0.5rem;
       }
    }
    
`
export default Sidebar;