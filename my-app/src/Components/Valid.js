export default function ValidCard(props){
return(
    <div>
       {props.response === "Good" ? (
        <div className ="valid">
            <p>{props.response}</p>
            </div>
       ):(<div className ="invalid">
         <p>{props.response}</p>
        </div>
)}
</div>
 );
}          