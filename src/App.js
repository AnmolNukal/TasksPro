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
      .gridArea{
        display: inline;
        width: 100%;
      }
`
export default App;
