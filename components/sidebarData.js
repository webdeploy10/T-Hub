import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as ImIcons from "react-icons/im"; 

export const SidebarData =[
    {
        title: 'home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'projetos',
        path: 'projetos',
        icon: <ImIcons.ImBooks/>,
        cName: 'nav-text'
    },{
        title: 'sobre',
        path: 'sobre',
        icon: <IoIcons.IoMdInformationCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'comentarios',
        path: 'comentarios',
        icon: <FaIcons.FaCommentAlt/>,
        cName: 'nav-text'
    }
]