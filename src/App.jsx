import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return <div className="App">
    <Header/>
    {useRoutes(routes)}
    </div>;
}

export default App;
