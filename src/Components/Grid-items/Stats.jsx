import styled from "styled-components";

function Stats() {
    const content = [
        { icon: "far fa-user-circle", title: "Clients", statNum: "324" },
        { icon: "far fa-check-circle", title: "Current Task", statNum: "24" },
        { icon: "fas fa-sync", title: "Projects in Negotiations", statNum: "3" }
    ]
    return <Container>
        {
            content.map((x) => {
                return <div className="stat">
                    <div className="space">
                        <i class={x.icon}></i>
                        <span className="statTitle">{x.title}</span>
                        <span className="statNum">{x.statNum}</span>
                    </div>
                </div>
            })
        }
    </Container>
}

const Container = styled.div`
    display: flex;
    margin-top:1rem;
    align-items: center;
    .stat{
        display: flex;
        background-color:#F89880;
        border-radius: 1rem;
        padding:1rem 2rem;
        margin-right: 3.5rem;
        .statTitle{
            padding:0rem 2rem;
        }
    }

    @media (max-width:786px){
        display: flex;
        flex-direction: column;
        .stat{
            width: 100%;
            padding:1rem 0.5rem;
            margin:0 0 1rem 0;
            display: flex;
            justify-content: center;
            text-align: left;
        }
    }

`
export default Stats;