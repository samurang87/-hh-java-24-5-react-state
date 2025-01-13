/*Step 1: Use your Rick and Morty project and create a new branch, possibly "react-form".

Step 2: Create a new component to create a new character.

Step 3: Create a form and for the most important attributes of a character, an input
field, and save the values in a state accordingly.

Step 4: Add a button to the form to save the entered values as a new character.
Use the 'onSubmit' function and make sure that the new character is added to the list
of all characters in App.tsx through a callback function.

Bonus

Step 1: Modify the Character-Card so that when clicked, it redirects to "/characters/{id}".

Step 2: Create another route that navigates to the "CharacterDetailCard" component on
the path "/characters/:id". The CharacterDetailCard should receive a list of all
characters as a prop, and based on the ID, it should find and display
the correct character.

Create a new route, for example, "/characters/add", which displays your component
for creating new characters.
Expand your Gallery so that the user can leave comments for each character.

Take a look at the documentation of the Rick&Morty API. There is pagination for the
characters (https://rickandmortyapi.com/api/character/?page=1).
Add two buttons that allow loading the previous or next page of characters and display
them in your application.*/

import {ChangeEvent, FormEvent, useState} from "react";

type NewCharacterProps = {
    addCharacter: (character: {id: string; name: string; status: string; species: string; originName: string}) => void;
};

export default function NewCharacter ({addCharacter}: NewCharacterProps) {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        status: '',
        species: '',
        originName: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addCharacter(formData);
        setFormData({
            id: '',
            name: '',
            status: '',
            species: '',
            originName: ''
        });
    };

    return (
        <div>
            <h2>Create a new character</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">Id</label>
                <input type="text" id="id" name="id" value={formData.id} onChange={handleChange}/>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                <label htmlFor="status">Status</label>
                <input type="text" id="status" name="status" value={formData.status} onChange={handleChange}/>
                <label htmlFor="species">Species</label>
                <input type="text" id="species" name="species" value={formData.species} onChange={handleChange}/>
                <label htmlFor="origin">Origin</label>
                <input type="text" id="origin" name="originName" value={formData.originName} onChange={handleChange}/>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
