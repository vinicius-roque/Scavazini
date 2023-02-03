import Router from "./routes";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));