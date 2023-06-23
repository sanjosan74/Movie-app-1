import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { UserContext } from "./Userprovider";
import { createContext, useContext, useEffect, useState } from "react";
import { LatestMoviesUrl, imageUrl } from "./links";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Moviedet from "./Moviedet";


function Cardd(props) {
  // const userContext = createContext();

  const  {ban,setBan,movie,setMovie}=useContext(UserContext)
  const navigate =useNavigate()
  const [mov, setMov] = useState([]);

  useEffect(() => {
    axios.get(props.det).then((detail) => {
      setMov(detail.data.results);
    });

    setBan(true)
  }, [mov]);
function change(mov){
  console.log(mov);
  // console.log(888)
  setMovie(mov)
  navigate('/details')


}
  return (
    <div style={{backgroundColor:"#54B4D3"}}>
    <Container>
      <Row>
      
      {mov.map((mov) => {
        return (
          <Card
            style={{
              padding:"5px",
              width: "18rem",
              height: "auto",
              margin: "20px",
              border: "2px solid blue",
              backgroundColor:"black",
              color:"white"
            }}
          >
            <Card.Img variant="top" src={imageUrl + mov.backdrop_path} />
            <Card.Body >
              <Card.Title>{mov.original_title}</Card.Title>
              <h6>{mov.release_date}</h6>
              {/* <Card.Text>
          {mov.overview}
        </Card.Text> */}
              <Button onClick={()=>change(mov)} variant="info"  >View Details</Button>
            </Card.Body>
          </Card>
        );
      })}
      
      </Row>
    </Container>
    </div>
  );
}

export default Cardd;
