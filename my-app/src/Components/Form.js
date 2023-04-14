import {useState} from "react";

export default function Form(props){
    const[number, setNumber] = useState("");

    const handleChange =(event) =>{
        setNumber(event.target.value);
    };

    const handleSubmit =(event) =>{
        event.preventDefault();
        props.cardSearch(number);
    };
return(
    <div className ="input">
        <p>Enter card digits</p>
        <form onSubmit ={handleSubmit}>
            <input type ="number"
            onChange={handleChange}
            value={number}/>        
<input type ="submit" value ="submit" />
</form>
 </div>
);
}