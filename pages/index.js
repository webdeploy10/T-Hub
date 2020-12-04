import Headers from "../components/headers";
import Navbar from "../components/navbar";
import Image from "next/image";

function HomePage(){
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
        </center>
    </div>)
}

export default HomePage;