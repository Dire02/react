import React from "react";
import UserProfile from "./userProfile";
import TaskList from "./taskList";
import "./style.css";
function Home(){

    return(
        <div className="container">
            <UserProfile/>
            <TaskList/>
        </div>
    )
}
export default Home;