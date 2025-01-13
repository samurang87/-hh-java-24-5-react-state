import {Character} from "../types/Character.tsx";
import axios from 'axios';
import {useEffect, useState} from "react";
import NewCharacter from "./NewCharacter.tsx";
import defaultCharacterImg from '../assets/default_character_img.jpeg';

async function fetchCharacters(): Promise<Character[]> {
    const url = 'https://rickandmortyapi.com/api/character/';

    try {
        const response = await axios.get(url);
        return response.data.results.map((char: any) => ({
            id: char.id.toString(),
            name: char.name,
            status: char.status,
            species: char.species,
            originName: char.origin.name,
            image: char.image,
        }));
    } catch (error) {
        console.error('Error fetching characters:', error);
        return [];
    }
}

function CharacterComponent({ char }: { char: Character }) {
    return (
        <div>
            <h2>{char.name}</h2>
            <img src={char.image || defaultCharacterImg} alt={char.name} />
            <p>{char.species}</p>
            <p>{char.status}</p>
            <p>{char.originName}</p>
        </div>
    );
}

function CharacterList() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function loadCharacters() {
            const data = await fetchCharacters();
            setCharacters(data);
        }
        loadCharacters().catch(error => console.error('Error loading characters:', error));
    }, []);

    const filteredCharacters = characters.filter((char) =>
        char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const addCharacter = (newCharacter: Character) => {
        setCharacters([...characters, newCharacter]);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a character"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredCharacters.map((char) => (
                <CharacterComponent key={char.id} char={char}/>
            ))}
            <NewCharacter addCharacter={addCharacter} />
        </div>
    );
}

export default CharacterList;