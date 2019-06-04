import React from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Row from "./components/Row";
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";


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
        url: "https://images.unsplash.com/photo-1559523899-fc37c5bb0d56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        clicked: false
    },
    {
        id: 4,
        url: "",
        clicked: false
    },
    {
        id: 5,
        url: "",
        clicked: false
    },
    {
        id: 6,
        url: "",
        clicked: false
    },
    {
        id: 7,
        url: "",
        clicked: false
    },
    {
        id: 8,
        url: "",
        clicked: false
    },
    {
        id: 9,
        url: "",
        clicked: false
    },
    {
        id: 10,
        url: "",
        clicked: false
    },
    {
        id: 11,
        url: "",
        clicked: false
    },
    {
        id: 12,
        url: "",
        clicked: false
    },
    {
        id: 13,
        url: "",
        clicked: false
    },
    {
        id: 14,
        url: "",
        clicked: false
    },
    {
        id: 15,
        url: "",
        clicked: false
    },
    {
        id: 16,
        url: "",
        clicked: false
    }
];

class App extends React.Component {

    state = {
        score: 0,
        topScore: 0,
        images: images
    }


    handleImageClick = (id) => {
        
        console.log(id);
        
        var images = this.state.images

        images.sort(() => Math.random() - 0.5);


        this.setState({
            score: 1,
            topScore: 1,
            images: images
        })
    }



    // react component lifecycle method
    render(){
        return(
            //fragment container
            <>
                <nav class="navbar navbar-expand-lg navbar-dark bg-success">
                    <a class="navbar-brand" href="#">Click-Game</a>
                    <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                    
                    </ul>
                    <span class="font-score">
                        Score: <span id="score">{this.state.score}</span> | Top Score: <span id="top-score">{this.state.topScore}</span>
                    </span>
                    </div>
                </nav>
                <Jumbotron></Jumbotron>
                <Container>

                    <Row>
                    <div className="col-12">
                    {this.state.images.map(each => {
                        return <div key={each.id} className="card">
                                <img onClick={() => this.handleImageClick(each.id)} src={each.url} alt=""/>
                            </div>
                    })}
                    </div>
                    </Row>
                   
                </Container>
                <Footer></Footer>
            </>
        )
    }
}

export default App;
