import styled from "styled-components";

const ProjectSchedule = () => {
    const date = [
        { day: "Su", "date": "15" },
        { day: "Mo", "date": "15" },
        { day: "Tu", "date": "15" },
        { day: "We", "date": "15" },
        { day: "Th", "date": "15" },
        { day: "Fr", "date": "15" },
        { day: "Sa", "date": "15" },
        { day: "Su", "date": "15" },
        { day: "Mo", "date": "15" },
        { day: "Tu", "date": "15" },
    ]
    return <Wrapper>
        <div className="topbar">
            <span>Project Schedule</span><span>December 11-2021</span>
        </div>
        <div className="dates">
            {
                date.map((x, index) => {
                    return <div className={index == 2 || index == 6 ? "cont active" : "cont"}>
                        <div className="bold">{x.day}</div>
                        <div>{x.date}</div>
                    </div>
                })
            }
        </div>
    </Wrapper>
}
const Wrapper = styled.div`
    width: 94%;
    @media (max-width:768px){
        width: 100%;
    }
    padding: 1rem 0;
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
    border-radius: 1rem;
    background-color: #fff;
    background-color: rgba(255,255,255,0.4);
    .topbar{
        display: flex;
        justify-content: space-around;
        padding: 1rem 2rem;
    }
    .bold{
        font-weight: 600;
    }
    .dates{
        display: flex;
        justify-content: space-around;
        padding: 1rem 2rem;
    }
    .active{
        color:#d3570f;
    }
`
export default ProjectSchedule;