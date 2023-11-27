import React from "react";
import PeopleIcon from '@mui/icons-material/People';
import ListAltIcon from '@mui/icons-material/ListAlt';
import RoomIcon from '@mui/icons-material/Room';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LogoutIcon from '@mui/icons-material/Logout';
export const SideMap =[
    {
        title:"Manage Profile",
        icon:<PeopleIcon />,
        link:"/Profile",
    },
    {
        title:"My Orders",
        icon:<ListAltIcon />,
        link:"/Orders",
    },
    {
        title:"Address Block",
        icon:<RoomIcon />,
        link:"/Address",
    },
    {
        title:"Need Help",
        icon:<LiveHelpIcon />,
        link:"/NeedHelp",
    },
    {
        title:"Logout",
        icon:<LogoutIcon />,
        link:"/login",
    },
];
