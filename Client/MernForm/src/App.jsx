import { Route, Routes } from "react-router";
import Login from "./login";
import SignUp from "./signup";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
    </Routes>

    </>
  );
}

export default App;
