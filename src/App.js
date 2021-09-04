import "./App.css";
import MaterialUIComponents from "./components/material-ui";
import Wrapper from "./components/material-ui/wrapper/Wrapper";
// import StyledComponents from "./components/styled-comp/index";
import AppBarComp from "./components/material-ui/app-bar/AppBarComp"

function App() {
    return (
        <Wrapper>
          <AppBarComp />
            <div className="App">
                <header className="App-header">
                    {/* <StyledComponents /> */}
                    <MaterialUIComponents />
                </header>
            </div>
        </Wrapper>
    );
}

export default App;
