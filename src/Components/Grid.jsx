import styled from "styled-components";
import Tab from "./Grid-items/Tab";
import Cards from "./Grid-items/Cards";
import People from "./Grid-items/People"
import Stats from "./Grid-items/Stats";
import Perf from "./Grid-items/Perf";
import ProjectSchedule from "./Grid-items/ProjectSchedule";

function Grid() {
    return <Container>
        <div className="tab"><Tab /></div>
        <div className="people"><People></People></div>
        <div className="cards"><Cards /></div>
        <div className="perfomance"><Perf /></div>
        <div className="stats"><Stats /></div>
        <div className="projectSchedule"><ProjectSchedule /></div>
    </Container>

}

const Container = styled.div`
    padding: 0rem 4rem;
    display: grid;
    grid-template-columns: repeat(8,1fr);
    grid-auto-rows: minmax(80px,auto);
    grid-gap: 0.7rem;
    .tab{
        grid-column : span 6;
        grid-row : span 1;
    }
    .people{
        grid-column : span 2;
        grid-row : span 3;
       
    }
    .cards{
        grid-column: span 6 ;
        grid-row : span 4;
    }
    
    .stats{
        grid-column: span 6 ;
        grid-row : span 1;
    } 
    .projectSchedule{
        grid-column: span 6 ;
        grid-row : span 2;
    }
    .perfomance{
        grid-column: span 2 ;
        grid-row : span 5;
    }
    @media (max-width:768px){
        .tab{
            grid-column : span 8;
            grid-row : span 1;
        }
        .cards{
            grid-column : span 8;
            grid-row :2;
        }
        .people{
            grid-column : span 8;
            grid-row :span 3;
        }
        .stats{
            grid-column : span 8;
            grid-row : span 3
        }
        .perfomance{
            grid-column : span 8;
            grid-row : span 4
        }
        .projectSchedule{
            grid-column : span 8;
            grid-row : span 3
        }
        padding:0 1rem;
    }
    
`
export default Grid;