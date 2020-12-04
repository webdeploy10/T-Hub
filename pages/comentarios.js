import Navbar from "../components/navbar";
import Header from "../components/headers";

function SobrePage(){
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
                <input type="text" class="form-control" id="inputEmail4" placeholder="Name"/>
                </div>
                <div class="form-group col-md-6">
                <label for="inputPassword4">Email</label>
                <input type="email" class="form-control" id="inputPassword4" placeholder="Email"/>
                </div>
            </div>
            <div className="form-row">
                <label for="Comment">Comment</label>
                <textarea className="form-control" id="Comment" placeholder="Your comment goes here"></textarea>
            </div>
            <br/>
            <button type="submit" class="btn btn-success">Send</button>
            </form>
            </div>
        </div>
        </center>
    </div>)
}

export default SobrePage;