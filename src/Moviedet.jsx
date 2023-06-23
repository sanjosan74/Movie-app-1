import React, { useContext, useEffect } from 'react'
import { UserContext } from './Userprovider'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { LatestMoviesUrl,imageUrl } from './links'
import { Link } from 'react-router-dom'
function Moviedet(props) {
  const  {ban,setBan}=useContext(UserContext)
const {movie,setMovie}=useContext(UserContext)
// console.log(props);
    // useEffect(() => {
    // setBan(false)
    // }, [ban])

  useEffect(() => {
    console.log(22);
    setBan(false)
    
  }, [])
  


console.log(movie)
    
const bg=imageUrl+ movie.backdrop_path;
    
  return (
    
      <div  style={{backgroundImage: `url(${bg})`,padding:"40px"}}>    

<Container >
      <Row>
        <Card style={{ width: '30rem',height:"40rem",margin:'auto',marginLeft:"140px",marginTop:"0px",padding:"3px" }}>
      <Card.Img style={{height:"40rem"}} variant="top" src={imageUrl+movie.poster_path} />
      </Card>

      <Card style={{width:"30rem",height:"300px",margin:"100px",backgroundColor:'black',color:'white'}}>
      <Card.Body >
        <Card.Title>{movie.title}</Card.Title><br></br>
        <Card.Text>
          Language:{movie.original_language}<br></br>
         {movie.overview}
        </Card.Text>
        {/* <Button variant="success" ><Link to='/'>Back to Home</Link></Button> */}
      </Card.Body>
    </Card>

    </Row>
    </Container>
    </div>
   
  )
}

export default Moviedet