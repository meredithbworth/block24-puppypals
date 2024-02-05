import './App.css'
import { puppyList } from './data'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
// console.log(featuredPup);
//console.log("1", puppies);
// setPuppies([]);
// console.log("2", puppies);
  return (
    <div>
      {puppies.map((puppy) => {
     return <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
   })}
     {featPupId && (
        <div> 
          <h2 className= 'chosenPuppy'>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
