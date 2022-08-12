import Home from "./routes/Home"
import { Route, Routes} from "react-router-dom"
import { Fragment } from "react";

function App() {
  return (
    <Routes>
      <Fragment>
        <Route exact path="/snap" element={<Home/>}/>
      </Fragment>
    </Routes>
  );
}

export default App;
