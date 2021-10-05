import styled from "styled-components";

function Hero() {
    return <Container>
        <div className="searchDateSettings">
            <input className="search" type="text" placeholder="   Search" />
            <span>December 11 2021 %</span>
        </div>
    </Container >
}

const Container = styled.div`
    width: 80%;
    margin: 0 0 0 20%;
    background-color: gray;
    .searchDateSettings{
        display: flex;
        justify-content: space-between;
        padding-top:4rem;
        padding:4rem 8rem;
    }
    .search{
        width: 50%;
        height: 2.2rem;
        border-radius: 1rem;
        border-style: none;
    }
`

export default Hero