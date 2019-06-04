import React from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Row from "./components/Row";
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div>
        <Nav></Nav>

        <Jumbotron></Jumbotron>

        <Container>
      
            <Row>
                <ImageCard></ImageCard>
                <ImageCard></ImageCard>
                <ImageCard></ImageCard>
                <ImageCard></ImageCard>
            </Row>
            <Row>
                <ImageCard></ImageCard>
                <ImageCard></ImageCard>
                <ImageCard></ImageCard>
                <ImageCard></ImageCard>
            </Row>
            <Row>
                <ImageCard></ImageCard>
                <ImageCard></ImageCard>
                <ImageCard></ImageCard>
                <ImageCard></ImageCard>
            </Row>
            <Row>
                <ImageCard></ImageCard>
                <ImageCard></ImageCard>
                <ImageCard></ImageCard>
                <ImageCard></ImageCard>
            </Row>
        </Container>
        <Footer></Footer>
    </div>
   
  );
}

export default App;
