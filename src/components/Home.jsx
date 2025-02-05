import React from "react"
import Button from 'react-bootstrap/Button';

function Home(){
return(
    <div id="homePage" className="d-flex align-items-center justify-content-center text-white text-center">
        <h1 className="fw-light">Cristiano Ronaldo</h1>
        <p className="fw-light fs-5">Football Legend | Record-Breaker | Global Icon</p>
        <Button variant="primary">Learn More</Button>
    </div>
)
}
export default Home