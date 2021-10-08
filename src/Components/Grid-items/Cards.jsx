import styled from "styled-components";

function Cards() {
    const images = [
        { img: "https://picsum.photos/250/350", title: "text", desc: "desc" },
        { img: "https://picsum.photos/250/350", title: "asd", desc: "rtr" },
        { img: "https://picsum.photos/250/350", title: "asd", desc: "rer" },

    ]
    return <Container>
        {
            images.map((x) => {
                return <div>
                    <div><img className="imgItem" src={x.img} ></img></div>
                    <div>{x.title}</div>
                    <div>{x.desc}</div>
                </div>
            })
        }
    </Container>
}
const Container = styled.div`
    margin-bottom: 1rem;
    display: flex;
    .imgItem{
        border-radius:2rem;
        margin-right:3rem;
    }
    @media (max-width:786px){
        .imgItem{
            width: 120px;
            height: 200px;
            border-radius:1rem;
            margin-right:1rem;
        }
    }
`
export default Cards;