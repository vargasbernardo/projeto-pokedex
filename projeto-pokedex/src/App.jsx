import Router from "./Router/Router";
import { GlobalStyles } from "./GolbalStyles";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <GlobalStyles />
      <Router />
    </GlobalState>
  );
}

export default App;
