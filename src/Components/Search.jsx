import styled from "styled-components";

function Search() {
    return <Container>
        <div className="searchDateSettings">
            <input className="search" type="text" placeholder="Search" />
            <span>December 11 2021 %</span>
        </div>
    </Container >
}

const Container = styled.div`
    .searchDateSettings{
        display: flex;
        justify-content: space-between;
        padding:3rem 4em 2rem 4rem;
        @media (max-width:786px){
           
        }
    }
    @media (max-width:786px){
        margin:0;
    }
    .search{
        width: 50%;
        height: 2.2rem;
        border-radius: 1rem;
        border-style: none;
    }
`

export default Search;