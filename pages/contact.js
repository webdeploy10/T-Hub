import Navbar from "../components/navbar";
import Header from "../components/headers";
import { React, Component } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

class Contact extends Component {

    constructor() {
        super();
        this.state = {
            JSX_CSS: {
                textDecoration: "none",
                color: "black",
                fontSize: "50px"
            }
        }
    }

    render() {
        return (
            <div>
                <title>Projects</title>
                <Header />
                <Navbar />
                <br />
                <center>
                    <div className="container">
                        <ul className="list-group">
                            <a href="https://github.com/thiaguinho27" style={this.state.JSX_CSS}><li className="list-group-item"><AiIcons.AiFillGithub /> GitHub</li></a>
                            <a href="https://twitch.tv/thiaguinhodogral" style={this.state.JSX_CSS}><li className="list-group-item"><FaIcons.FaTwitch /> Twitch</li></a>
                        </ul>
                    </div>
                </center>
            </div>)
    }
}

export default Contact;