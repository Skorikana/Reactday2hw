import Form from "./Components/Form";
import ValidCard from "./Components/Valid"
import './App.css';
import {useState, useEffect} from "react";

export default function App() {
   const[cardNum, setCardNum] = useState(null);

   const correct =(number) =>{
    let sum =0;
    const newNum =number.toString().split("");
    const result = newNum.reverse().map(Number);
    for(let i=1; i< result.length; i +=2){
      result[i]=result[i] *2;
      if (result[i] > 9){
       const array = result[i].toString().split("").map(Number); 
       array.forEach((i) =>{
       sum += i; 
      });
    }
   }
  }
 return (
    <div className="App">
     <h3>CREDIT CARD CHECK</h3>
      <Form cardSearch={correct} />
     <ValidCard response ={cardNum}/>
     </div>
  );
 }