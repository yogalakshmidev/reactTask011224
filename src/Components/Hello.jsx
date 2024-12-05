import Header  from "./Header";
import Description from "./Description";
const Hello = () =>{
  
  const getData = (data)=>{
    console.log(data);
    
  }
  return (
  
    <>
    
    <Header
    getData={getData} />
     <Description />

      
    </>
  )
}

export default Hello;