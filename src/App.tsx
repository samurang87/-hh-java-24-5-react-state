/*
Step 1: Create a new React project with Vite and TypeScript.

Step 2: Use the data you can retrieve from this API: https://rickandmortyapi.com/api/character/

Save the data in a separate TypeScript file.
export const response = ...

import the data in your component and set the data as initial Value in your useState.

Step 3: Pass the state to components that will visualize this data.

Step 4: Create an input field in App.tsx that triggers the search.
Filter your search so that only the characters you searched for are displayed.

Step 5: Enhance your search to display an error message when a non-existent name is entered in the input field.

If you have already completed this task early, you can work on the bonus tasks.
* */

import {useState} from 'react'
import './App.css'
import {initialData} from './data'
import {CharacterComponent} from "./components/CharacterComponent.tsx";
import {Character} from "./types/Character.tsx";
import NewCharacter from "./components/NewCharacter.tsx";

function App() {
  const [rnm, setRnm] = useState(initialData);

  const addCharacter = (newCharacter: Character) => {
      setRnm([...rnm, newCharacter]);
  };


  return (
    <>
        <h1>Rick and Morty Characters</h1>
        <input
            type="text"
            placeholder="Search for a character"
            onChange={(e) => {
            const search = e.target.value
            const filtered = initialData.filter((char) =>
                char.name.toLowerCase().includes(search.toLowerCase())
            )
                setRnm(filtered);
            }}
        />
        {rnm.map((char) => (
            <CharacterComponent key={char.id} char={char}/>
        ))}
        <NewCharacter addCharacter={addCharacter} />
    </>
  )
}

export default App
