import React from "react";
import Hello from "./components/Hello";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Row from "./components/Row";
import ImageCard from "./components/ImageCard";

const App = () => {

  return (
    <div>
        <Nav></Nav>
        <Container>
            <Row>
                <div className="jumbotron col-12 text-center">
                    <Hello />
                </div>
            </Row>
        </Container>
    </div>
   
  );
}

export default App;
