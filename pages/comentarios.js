import Navbar from "../components/navbar";
import Header from "../components/headers";
import { Component } from "react";
import axios from 'axios';

class Coment extends Component{

    constructor(){
        super();
        this.state = {
            comenter_email: "",
            comenter_name: "",
            coment: "",
        }
    }

    inserir = () => {

    axios.post('https://t-hub-api.herokuapp.com/coment/add',{
        data: this.state
    },{'content-type': 'application/json'}).then(function(response){
        alert("Dados inseridos com sucesso");
    }).catch(function(response){
        alert("Erro na insercao dos dados")
    })
    // axios({
    //         method: "POST",
    //         url: "https://t-hub-api.herokuapp.com/coment/add",
    //         data: this.state,
    //       }).then(function (response) {
    //           alert(response);
    //         }).catch(function (response) {
    //           alert(response);
    //         });
    }

    render(){
    return(
    <div>
        <title>Comment</title>
        <Header/>
        <Navbar/>
        <br/>
        <center>
        <div className="container">
        <div class="jumbotron">
            <div className="container">
            </div>
            <h1 class="display-4">Here you can leave a comment to me!</h1>
            <hr class="my-4"/>
            <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputEmail4">Name</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="Name"
                    onChange={(e)=>{
                        this.setState({
                            comenter_name: e.target.value,
                        })
                    }}
                />
                </div>
                <div class="form-group col-md-6">
                <label for="inputPassword4">Email</label>
                <input type="email" class="form-control" id="inputPassword4" placeholder="Email"
                    onChange={(e)=>{
                        this.setState({
                            comenter_email: e.target.value,
                        })
                    }}
                />
                </div>
            </div>
            <div className="form-row">
                <label for="Comment">Comment</label>
                <textarea className="form-control" id="Comment" placeholder="Your comment goes here"
                    onChange={(e)=>{
                        this.setState({
                            coment: e.target.value,
                        })
                    }}
                ></textarea>
            </div>
            <br/>
            <button type="submit" class="btn btn-success" onClick={this.inserir}>Send</button>
            </form>
            </div>
        </div>
        </center>
    </div>)
    }
}

export default Coment;