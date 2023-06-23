import React, { useContext, useEffect } from 'react'
import { UserContext } from './Userprovider'
import { Button, Card } from 'react-bootstrap'
import { imageUrl } from './links'

function Comedy() {
  const  {commov}=useContext(UserContext)

  
  return (
    <div>
        {commov.map((cmov)=>{
            return(
                <Card style={{ width: '18rem',height:"auto" ,float:'left' ,margin:"30px",border:"2px solid blue"}}>
                <Card.Img variant="top" src={imageUrl+cmov.poster_path} />
                <Card.Body>
                  <Card.Title>{cmov.name}</Card.Title>
                  <h6>{cmov.first_air_date}</h6>
                  {/* <Card.Text>
                    {cmov.overview}
                  </Card.Text> */}
                  <Button variant="primary">view details</Button>
                </Card.Body>
              </Card>   
            )
        })}
        
    </div>
  )
}

export default Comedy