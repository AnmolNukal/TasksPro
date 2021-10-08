import Sidebar from "./Components/Sidebar";
import "./App.css";
import Search from "./Components/Search";
import Grid from "./Components/Grid";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Container>
        <Sidebar />
        <div className="gridArea">
          <Search />
          <Grid />
        </div>
      </Container >
    </div>
  );
}

const Container = styled.div`
      display: flex;
      background-color: #DCDCDC;
      .gridArea{
        display: inline;
        width: 100%;
        background: linear-gradient(
          to right bottom,
          rgba(255,255,255,0.7),
          rgba(255,255,252,0.3)
        );
        backdrop-filter:blur(6rem);
      }
`
export default App;
