import Navbar from "../components/navbar";

function SobrePage(){
    return(
    <div>
        <Navbar/>
        <center>
        <div class="jumbotron">
            <div className="container">
            </div>
            <h1 class="display-4">About me!</h1>
            <hr class="my-4"/>
            <p class="lead">I'm a programer who's always looking for something new to learn, I stream sometimes in the purple platform 
            (<a href="https://twitch.tv/thiaguinhodogral">Here it is</a>) where I usually play leage of legend, sea of thieves, overwatch 
            or even programm! That's basicly it, in my twitch you will find links for my steam and my youtube channel, hope you enjoy!</p>
            </div>
        </center>
    </div>)
}

export default SobrePage;