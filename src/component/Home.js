import { useState } from "react";


function Home(){
    const [fruits , setFruits] = useState ([]) ;
    const [textInput , setTextInput] = useState ("");



const inputUpdate = (event) => {
   
    setTextInput(event.target.value);

}




const addItem = () => {

    if(textInput === ""){
        alert("Not Allow")
    }
    else{
        const finalItems = [...fruits , textInput];
        setFruits(finalItems)
        setTextInput("")
    }
    
    
    


}


    return(
        <div>
           <input type="text" onChange={inputUpdate} value={textInput}  />
           <button onClick={addItem}> add</button>

          <ul>
            {
                fruits.map((item , index) => {
                    return <li key={index}>
                        {item}
                        <button >X</button>
                        </li>
                })
            }
          </ul>
        </div>
    )
}
export default Home;