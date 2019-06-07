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
    },
    {
        id: 16,
        url: "https://images.unsplash.com/flagged/photo-1551337192-c7893e023548?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
        clicked: false
    }
];

class App extends React.Component {

    //set state values
    state = {
        score: 0,
        topScore: 0,
        images: images,
        guessed: ""

    };

    //function to shuffle array
    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    //function for when image is clicked.
    handleImageClick = (id) => {
        
        //check id
        console.log(id);

        //grab image clicked
        let imageClicked = this.state.images.find(img => img.id === id);

        //decide which operation to do depending on if the image clicked is true or false
        //true: reset game    ,   false: continue
        imageClicked.clicked ? this.resetGame() : this.continueGame(id);
        
        //grab new array that is shuffled from old array
        let newArray = this.shuffleArray(this.state.images);

        //set the state to the new shuffled array
        this.setState({
            images: newArray
        });

    };

    continueGame = (id) => {

        //set score state to one higher
        this.setState({
            score: this.state.score + 1
        });

          //set new high score if higher
          if (this.state.score >= this.state.topScore) {
            this.setState({
                topScore: this.state.score + 1
            });
        };

        // grab the images from array as a new array to send back with updates
        let clickedImage = this.state.images;

        // grab the img of the id clicked
        let imgId = clickedImage.find(img => img.id === id);

        //switch the clicked value to true of that image
        imgId.clicked = true;

        // set state of that image clicked to true
        this.setState({
            images: clickedImage,
            guessed: "You guessed correctly!"
        });
    };

    //function to reset game
    resetGame = () => {

        //shake the div containing all 
        // $(".images-grid").effect("shake");

        //reset score to zero
        this.setState({
            score: 0
        });

        //reset all images to have clicked status of false
        let newImages = this.state.pictures;
        this.state.images.map(each => (
            each.clicked = false
        ));

        //set state to new images 
        this.setState({
            images: newImages,
            guessed: "You guessed incorrectly! New Game!"
        });
        
    };

    // react component lifecycle method
    render(){
        return(
            //fragment container
            <>

                {/* Navbar containing score */}
                <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-info">
                    <div className="col">
                        <a className="navbar-brand" href="#">Clicky Game</a>
                    </div>
                    <div className="col text-center text-danger">
                        <h3>{this.state.guessed}</h3>
                    </div>
                    <div className="col text-right">
                        <span className="font-score text-light">
                            <h3>Score: <span id="score">{this.state.score}</span> | Top Score: <span id="top-score">{this.state.topScore}</span></h3>
                        </span>
                    </div>
                </nav>
   
                {/* Jumbotron for main header and instructions */}
                <Jumbotron></Jumbotron>

                {/* Main content display of cards */}
                <Container>
                    <Row>

                       {/* @#$@#$@#$#@$  Ask how to make images show in rows*/}
                        <div className="images-grid center">

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
