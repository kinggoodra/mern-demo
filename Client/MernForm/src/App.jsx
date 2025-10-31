import { Route, Routes } from "react-router";
import Login from "./login";
import SignUp from "./signup";
import Dashboard from "./dashboard";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>

    </>
  );
}

export default App;
