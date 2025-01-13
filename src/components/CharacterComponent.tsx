import {Component} from "react";
import {Character} from "../types/Character.tsx";

export class CharacterComponent extends Component<{ char: Character }> {
    render() {
        return <div>
            <h2>{this.props.char.name}</h2>
            <p>{this.props.char.species}</p>
            <p>{this.props.char.status}</p>
            <p>{this.props.char.originName}</p>
        </div>;
    }
}