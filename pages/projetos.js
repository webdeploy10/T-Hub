import Navbar from "../components/navbar";
import Header from "../components/headers";
import axios from 'axios';
import { React, Component } from "react";

class Projects extends Component {

    constructor() {
        super();

        this.state = {
            projects: [{ nome: "Loading..." }],
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "https://api.github.com/users/thiagoneves2/repos",
        })
            .then((response) => {

                var aux = [];


                response.data.map((value, index) => {

                    if (value.name !== "thiagoneves2") {
                        aux.push({
                            nome: value.name,
                            link: value.html_url,
                            descricao: value.description
                        });
                    }
                })

                this.setState({
                    projects: aux
                })
            })
            .catch((response) => {
                this.setState({
                    projects: [{
                        nome: "There was an error with the API",
                        link: "#",
                        descricao: "",
                    }],
                })
            });
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
                        <ul class="list-group">
                            {this.state.projects.map((value, index) => {
                                return (
                                    <>
                                        <li class="list-group-item"><h2><a style={{ textDecoration: "none", color: "inherit" }} href={value.link}>{value.nome}</a></h2>
                                            <br />
                                            {value.descricao}
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </center>
            </div>)
    }
}

export default Projects;
