import styled from "styled-components";

function Search() {
    return <Container>
        <div className="searchDateSettings">
            <input className="search" type="text" placeholder="" />
            <span className="date">December 11 2021 <i class="fas fa-sliders-h"></i></span>
        </div>
    </Container >
}

const Container = styled.div`
    .searchDateSettings{
        display: flex;
        justify-content: space-between;
        padding:3rem 4em 2rem 4rem;
    }
    @media (max-width:786px){
        .searchDateSettings{
            padding:0;
            margin:1rem 1rem;
        }
        .date{
            padding-top:0.5rem;
        }
    }
    .search{
        width: 50%;
        height: 2.2rem;
        border-radius: 1rem;
        border-style: none;
    }
`

export default Search;