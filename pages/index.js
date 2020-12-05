import Headers from "../components/headers";
import Navbar from "../components/navbar";
import Image from "next/image";
import axios from "axios";
import { Component } from "react";

class HomePage extends Component{

    constructor(){
        super();
        this.state={
            response_t: []
        }
    }

    componentDidMount = () =>{
        axios({
            method: "get",
            url: "http://localhost:5000/coment/",
        })
        .then((response)=> {
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


    render(){
    return(
    <div>
        <title>Home</title>
        <Headers/>
        <Navbar/>
        <br/>
        <center>
        <div className="container">
        <div class="jumbotron">
            <div className="container">
                <img src="/images/goku.jpg" alt="Goku saying Hi!" className="rounded"/>
            </div>
            <h1 class="display-4">Welcome!</h1>
            <hr class="my-4"/>
            <p class="lead">Welcome to my website made with React, Next and Bootstrap</p>
        </div>
        </div>

        <div className="container">
        <div class="jumbotron" style={{backgroundColor:"grey"}}>
            <hr class="my-4" color="white"/>
            <p  class="display-4" style={{color:"white"}}>Coments</p>
            <hr class="my-4" color="white"/>
        </div>
        </div>
        

        {this.state.response_t.map((item, index) =>{
            return(
                <>
                <br/>
                <div className="container">
                <div class="jumbotron">
                    
                    <h3 className="float-left">{item.comenter_name} Comented: </h3>
                    <br/>
                    <br/>
                    <p class="lead float-left">{item.coment}</p>
                <p className="float-right pt-3">{item.createdAt}</p>
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