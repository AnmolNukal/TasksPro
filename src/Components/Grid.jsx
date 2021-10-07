import styled from "styled-components";
import Tab from "./Grid-items/Tab";
import Cards from "./Grid-items/Cards";

function Grid() {
    return <Container>
        <div className="tab"><Tab /></div>
        <div className="people">PEOPLE</div>
        <div className="cards"><Cards /></div>
        <div className="perfomance">PERF</div>
        <div className="stats">STATS</div>
        <div className="projectSchedule">PRO</div>
    </Container>

}

const Container = styled.div`
    padding: 0rem 4rem;
    display: grid;
    grid-template-columns: repeat(8,1fr);
    grid-auto-rows: minmax(80px,auto);
    grid-gap: 1rem;
    .tab{
        grid-column : span 6;
        grid-row : span 1;
    }
    .people{
        grid-column : span 2;
        grid-row : span 3;
        background-color:purple;
    }
    .cards{
        grid-column: span 6 ;
        grid-row : span 4;
        background-color:grey;
    }
    
    .stats{
        grid-column: span 6 ;
        grid-row : span 1;
        background-color:green;
    } 
    .projectSchedule{
        grid-column: span 6 ;
        grid-row : span 2;
        background-color:yellow;
    }
    .perfomance{
        grid-column: span 2 ;
        grid-row : span 5;
        background-color:blue;
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