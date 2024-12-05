import './App.css';
import MyButton from './Components/MyButton';


const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  margin:"20px",
  fontFamily: "Arial"
};
function App(){
  
  return(
    <>
      
        <h1 style={{color:"red"}}>Welcome to my app</h1>
        <h2 style={mystyle}>This is my 1st styling array</h2>
        <h3>this is coming from App.css</h3>
        <h4>This is also from app.css</h4>
        
        <MyButton />
      
    
    
    </>
  )
}


export default App;