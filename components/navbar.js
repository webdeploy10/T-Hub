import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import {SidebarData} from './sidebarData';

import {IconContext} from 'react-icons';

function navbar(){
    const [sidebar, setSidebar] = useState(false);

    const showSidebar =()=>setSidebar(!sidebar);
    return(
        
        <div>

            <IconContext.Provider value={{color:'#fff'}}>

            <div className="navbar">
                <a href="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </a>
            </div>
            <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <a href="#" className="menu-bars">
                            <AiIcons.AiOutlineClose/>
                        </a>
                    </li>
                    {SidebarData.map((item,index) =>{
                        return(
                            <li key={index} className={item.cName}>
                                <a href={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </div>
    )
}

export default navbar;