import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      {useRoutes(routes)}
    </>
  );
}

export default App;
