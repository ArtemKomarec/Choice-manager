import './App.css';
import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import LoginComponent from "./components/Login/LoginComponent";
import Registration from "./components/Registration/Registration";
import About from "./components/About/About";
import checkEmail from "./components/Registration/CheckEmail";
import StartPage from "./components/StartPage/StartPage";
import Profile from "./components/ProfilePage/Profile";



function App(props) {
  console.log(props);
  return (
    <BrowserRouter>
      <div className="App">

        <div>
          <Route path={"/login"} render={() => <LoginComponent/>}/>
          <Route path={"/registration"} render={() => <Registration/>}/>
          <Route path={"/about"} render={() => <About devTeamData={props.appState.mainPage.devTeamData}/>}/>
          <Route path={"/checkEmail"} render={() => <checkEmail/>}/>
          <Route path={"/profile"} render={() => <Profile/>}/>
          <Route exact path={"/"} render={() => <StartPage/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
