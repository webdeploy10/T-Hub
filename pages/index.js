import Headers from "../components/headers";
import Navbar from "../components/navbar";
import Image from "next/image";
import axios from "axios";
import { Component } from "react";

class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            response_t: [{
                comenter_name: "T-Hub",
                coment: "loading....",
            }]
        }
    }

    componentDidMount = () => {
        axios({
            method: "get",
            url: "https://t-hub-api.herokuapp.com/coment/",
        })
            .then((response) => {
                //alert(response);
                //console.log(response);
                this.setState({
                    response_t: response.data
                })
            })
            .catch(function (response) {
                //alert(response);
            });
    }


    render() {
        return (
            <div>
                <title>Home</title>
                <Headers />
                <Navbar />
                <br />
                <center>
                    <div className="container">
                        <div className="jumbotron">
                            <h1 className="display-4">Welcome!</h1>
                            <hr className="my-4" />
                            <p className="lead">Welcome to my website made with React, Next and Bootstrap,
                             my name is Thiago and this is my website. You can navigate through the pages with the sidebar!</p>
                        </div>
                    </div>


                    {this.state.response_t.map((item, index) => {
                        return (
                            <>
                                <div className="container">
                                    <div className="jumbotron">

                                        <h3 className="">{item.comenter_name}: </h3>
                                        <br />
                                        <br />
                                        <p className="">{item.coment}</p>
                                        <p className="">{item.createdAt}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </center>
            </div>)
    }
}

export default HomePage;