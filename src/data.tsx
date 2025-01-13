import {Character} from "./types/Character.tsx";

async function fetchCharacters(): Promise<Character[]> {
    const url = 'https://rickandmortyapi.com/api/character';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results.map((char: any) => ({
            id: char.id.toString(),
            name: char.name,
            status: char.status,
            species: char.species,
            originName: char.origin.name,
        }));
    } catch (error) {
        console.error('Error fetching characters:', error);
        return [];
    }
}

export const initialData = await fetchCharacters();