import logo from "../logo.svg";
import './CoreConcepts.css';

function CoreConcept(props){
    return (
        <li>
            <img src = {logo} alt={props.title}/>
            <h3>{props.title}</h3>
            <p>{props.decription}</p>
        </li>

    );
}

export default CoreConcept;