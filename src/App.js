import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./components/Home/Home";
import Followers from "./view/Followers/Followers";
import Following from "./view/Followin/Following";
import SingleUser from "./view/singleuser/SingleUser";
import Repo from "./view/Repo/Repo"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/users/:name/repo" exact element={<Repo/>}/>
        <Route path="/users/:name/followers" exact element={<Followers />}/>
        <Route path="/users/:name/following" exact element={<Following/>}/>
        <Route path="/users/:userName" exact element={<SingleUser />}/>


      </Routes>
    </BrowserRouter>
  )

  
  
}

export default App