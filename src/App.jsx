import React from "react";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Row from "./components/Row";
import Footer from "./components/Footer";
import "./App.css";


var images = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1559440165-f4c2c11f435b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        clicked: false
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1559526971-55f629b0b760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        clicked: false
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1554263022-02df49e88f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        clicked: false
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1559564207-09c99dc78a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        clicked: false
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1559403053-900e0c4abc8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        clicked: false
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1559157693-c34156e0f8c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        clicked: false
    },
    {
        id: 7,
        url: "https://images.unsplash.com/photo-1558754211-d78f781115b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        clicked: false
    },
    {
        id: 8,
        url: "https://images.unsplash.com/photo-1557962677-131278db2213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        clicked: false
    },
    {
        id: 9,
        url: "https://images.unsplash.com/photo-1557978556-b33c86cbeeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        clicked: false
    },
    {
        id: 10,
        url: "https://images.unsplash.com/photo-1557312309-a08700b45135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        clicked: false
    },
    {
        id: 11,
        url: "https://images.unsplash.com/flagged/photo-1557650454-65194af63bf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        clicked: false
    },
    {
        id: 12,
        url: "https://images.unsplash.com/photo-1446730853965-62433e868929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        clicked: false
    },
    {
        id: 13,
        url: "https://images.unsplash.com/photo-1491193348662-47874a96c621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        clicked: false
    },
    {
        id: 14,
        url: "https://images.unsplash.com/photo-1430026996702-608b84ce9281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        clicked: false
    },
    {
        id: 15,
        url: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        clicked: false
    }
];

class App extends React.Component {

    //set state values
    state = {
        score: 0,
        topScore: 0,
        images: images
    }

    //Function for when image is clicked.
    handleImageClick = (id) => {
        
        console.log(id);
        console.log(this.state.images)

        if(this.state.images.clicked === true) {

            this.setState({
                score: 0
            })

            window.location.reload();
        } else {
            //grab images from state
            var images = this.state.images

            //randomize images in array
            images.sort(() => Math.random() - 0.5);

            //%%%%%% set that value's clicked to true

            //set new state to updated score and new array of images to DOM
            this.setState({
                score: this.state.score + 1,
                topScore: this.state.score + 1,
                images: images
            })
        }
      
    }

    // react component lifecycle method
    render(){
        return(
            //fragment container
            <>

                {/* Navbar containing score */}
                <nav class="navbar navbar-expand-lg navbar-dark bg-success">
                    <a class="navbar-brand" href="#">Click-Game</a>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto"> </ul>

                        {/* Scoreboard */}
                        <span class="font-score">
                            Score: <span id="score">{this.state.score}</span> | Top Score: <span id="top-score">{this.state.topScore}</span>
                        </span>
                    </div>
                </nav>
   
                {/* Jumbotron for main header and instructions */}
                <Jumbotron></Jumbotron>

                {/* Main content display of cards */}
                <Container>
                    <Row>

                       {/* @#$@#$@#$#@$  Ask how to make images show in rows*/}
                        <div className="images-grid justify-content-center">

                            {/* Loop through all images in array and display each one */}
                            {this.state.images.map(each => {
                                return <div key={each.id} className="card">
                                        <img onClick={() => this.handleImageClick(each.id)} src={each.url} alt=""/>
                                    </div>
                            })}
                        </div>

                    </Row>
                </Container>

                {/* Footer */}
                <Footer></Footer>

            </>
        )
    }
}

export default App;
