import Navbar from "../components/navbar";
import Header from "../components/headers";

function SobrePage() {
    return (
        <div>
            <title>About</title>
            <Header />
            <Navbar />
            <br />
            <center>
                <div className="container">
                    <div class="jumbotron">
                        <div className="container">
                        </div>
                        <h1 class="display-4">About me!</h1>
                        <hr class="my-4" />
                        <p class="lead">Hello, my name is Thiago, I am a computer technician, 
                        and I am currently studying the course of electrical engineering at the University of São Paulo (USP).</p>
                    </div>
                </div>
            </center>
        </div>)
}

export default SobrePage;