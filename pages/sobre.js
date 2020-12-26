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
                        <p class="lead">I'm a programmer who's always looking for something new to learn, I stream sometimes on the purple platform
            (<a href="https://twitch.tv/thiaguinhodogral">Here it is</a>) where I usually play league of legend, sea of thieves, overwatch, or even program!
             That's it, in my twitch, you will find links for my steam and my youtube channel, hope you enjoy it!</p>
                    </div>
                </div>
            </center>
        </div>)
}

export default SobrePage;