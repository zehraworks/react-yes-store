import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { Header } from "./components/Header";
import { db } from "./firebase.config";
import { ref, set } from "firebase/database";
import data from "./data/data";

function App() {
  // set(ref(db, `/products`), data);
  return (
    <>
      <Header />
      {useRoutes(routes)}
    </>
  );
}

export default App;
