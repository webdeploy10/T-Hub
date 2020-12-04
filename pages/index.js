import Headers from "../components/headers";
import Navbar from "../components/navbar";
import Image from "next/image";

function HomePage(){
    return(
    <div>
        <Headers/>
        <Navbar/>
        <center>
        <div class="jumbotron">
            <div className="container">
                <Image src="/images/goku.jpg" width="400px" height="200px" alt="Goku saying Hi!" className="rounded"/>
            </div>
            <h1 class="display-4">Welcome!</h1>
            <hr class="my-4"/>
            <p class="lead">Welcome to my website made with React, Next and Bootstrap</p>
            </div>
        </center>
    </div>)
}

export default HomePage;