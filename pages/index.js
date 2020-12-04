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
            <h1 class="display-4">Olá, bem vindo à Home!</h1>
            <p class="lead">Bem vindo ao meu site, feito com react, next e bootstrap</p>
            <hr class="my-4"/>
            <p>Este projeto foi feito apenas com intuito educacional</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Botão</a>
            </div>
        </center>
    </div>)
}

export default HomePage;