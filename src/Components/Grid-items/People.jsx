import styled from "styled-components";

function People() {
    const images = [1, 2, 3, 4, 5]
    return <Container>
        <div className="focused">
            <img className="focusedImg" src="https://picsum.photos/100" alt="" />
            <span className="listName">name</span>
        </div>
        <div className="list">
            {
                images.map(() => {
                    return <img className="listImages" src="https://picsum.photos/51" alt="" />
                })
            }
        </div>
    </Container>
}
const Container = styled.div`
    border-radius: 1.2rem;
    display: flex;
    padding: 1rem 1rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .focused{
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 2rem;
    }
    .focusedImg{
        margin-bottom: 1rem;
        border-radius: 50%;
        margin-top:1rem;
        
    }
    .listImages{
        border-radius: 50%;
        margin-left:0.7rem ;
    }
    .list{
        
    }
`
export default People;