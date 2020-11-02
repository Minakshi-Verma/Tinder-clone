import React, {useState} from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card'

function Tindercards() {  
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://specials-images.forbesimg.com/imageserve/5de82785e961e100078f2c1b/960x0.jpg?fit=scale'
        }
    ])
    
    //swiped and outOframe functions taken from https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js
    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        // setLastDirection(direction)        
      }
    
      const outOfFrame = (name) => {
        console.log(name + ' left the screen!')       
      }

    return (
        <div className= "tinderCards">
            <div className="tinderCards__cardContainer">
            {
                people.map(person=>(
                  <TinderCard
                  className='swipe' 
                  key={person.name}
                  preventSwipe={["up","down"]} 
                  onSwipe={(dir) => swiped(dir, person.name)} 
                  onCardLeftScreen={() => outOfFrame(person.name)}
                  >
                      <div
                          style={{backgroundImage:`url(${person.url})`}}
                          className="card">
                              <h3>{person.name}</h3>
                      </div>
                  </TinderCard>
                ))
            }
            </div>            
        </div>
    )
}
export default Tindercards
