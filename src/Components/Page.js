import CoreConcept from "./CoreConcepts";
import TabButton from "./TabButton";
import './Page.css';
import {useState} from "react";


function Page(){

    const [selectedTopic , setSelectedTopic] = useState('Please click a Button');
    function HandleClick(selectedButton){
            setSelectedTopic(selectedButton)
        console.log(selectedTopic);

    }
    return(
        <div className = "App-header">
            <header>React Application</header>
            <section id = "core-concepts">
                <h2 className="h2InCoreConcepts">Core Concepts</h2>

                <ul>
                    <CoreConcept title = "Components" decription = "Core UI Building Block"/>
                    <CoreConcept title = "JSX" decription = "Learn JSX"/>
                    <CoreConcept title = "State" decription = "Learn State"/>
                </ul>
            </section>
            <section id = "examples">
                <h2>Examples</h2>
                <menu>
                   <TabButton onClick = {() => HandleClick('Components')} description = "Hey Component">Component</TabButton>
                    <TabButton onClick = {() => HandleClick('JSX')} description = "Hey JSX">JSX</TabButton>
                    <TabButton onClick = {() => HandleClick('State')} description = "Hey State">State</TabButton>
                    <TabButton onClick = {() => HandleClick('Props')} description = "Hey Props">Props</TabButton>
                </menu>
                {selectedTopic}
            </section>
        </div>

    );
}

export default Page;
