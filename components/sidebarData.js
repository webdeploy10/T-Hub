import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as ImIcons from "react-icons/im";
import * as GoIcons from "react-icons/go";
export const SidebarData = [
    {
        title: 'home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'projects',
        path: 'projetos',
        icon: <ImIcons.ImBooks />,
        cName: 'nav-text'
    }, {
        title: 'about',
        path: 'sobre',
        icon: <IoIcons.IoMdInformationCircle />,
        cName: 'nav-text'
    },
    {
        title: 'comment',
        path: 'comentarios',
        icon: <FaIcons.FaCommentAlt />,
        cName: 'nav-text'
    },
    {
        title: "contact",
        path: 'contact',
        icon: <AiIcons.AiFillPhone />,
        cName: 'nav-text',
    },
    {
        title: "statistics",
        path: 'statistics',
        icon: <GoIcons.GoGraph />,
        cName: 'nav-text',
    }
]