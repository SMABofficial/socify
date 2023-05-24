import { useState } from "react";


function Home(){
    const [fruits , setFruits] = useState (["Apple" , "jusice", "water" , "peach"]) ;
    const [textInput , setTextInput] = useState ("");



const inputUpdate = (event) => {
console.log(event.target.value)

}
const addItem = () => {

}


    return(
        <div>
           <input type="text" onChange={inputUpdate}/>
           <button onChange={addItem}> add</button>
        </div>
    )
}
export default Home;