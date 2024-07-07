import React from "react"
import "./ProfileNav.css"
import {SideMap} from "./ProfileNavData";
import { useNavigate } from "react-router-dom";
function ProfileNav()
{
    const navigator = useNavigate();

    const logout = () => {
        localStorage.clear();
    }
    return( 
        <div className="sidebar">
            <ul className="sidebarlist">
             {SideMap.map((val,key) => {
                return (
                <li key={key} 
                className="row"
                onClick={() => {if(val.link == "/login"){logout();} navigator(val.link)}}>
                    <div id="ico">{val.icon}</div>
                    <div id="tit">
                        {val.title}
                    </div>
                </li>
                );
            })}
            </ul>
        </div>
    );
}

export default ProfileNav;
