
import { useRef } from 'react';
import { useState } from 'react';


function List() {
    const [cars , setCars] = useState ([]);
    const [newCar , setNewCar] = useState ("");
    const focusInput = useRef();

    const newItem = (event) => {
        setNewCar(event.target.value);

    }

    const addCar = ()=>{

        if(newCar === ""){
            alert("Empty Input Field Not Allowed")
        }
        else{
            const finalList = [...cars , newCar]
            setCars(finalList)
            setNewCar("")
            focusInput.current.focus();

        }


        
    }

    const deleteCar = (index) => {
        // const res = cars.filter((singCar) =>{
        //     return singCar !== delCar;
        // })

        // setCars(res)
        const newCarsArray = cars.toSpliced(index , 1)
        setCars(newCarsArray)
    }

    const entered =(event)=>{
        if(event.key === "Enter"){
            addCar();
        }

    }



    return(
        <div>
            <input type="text" placeholder="Enter Any Name" onChange={newItem} onKeyUp={entered} value={newCar} ref={focusInput} />
            <button onClick={addCar}>Add Me</button>

            <ul>
                {
                    cars.map ((delCar , index )=>{
                        return <li key={index}>{delCar}
                        <button onClick={ ()=>{deleteCar(index)} }> X </button>
                        </li>
                    })
                }
            </ul>
        </div>
    );
}
export default List;