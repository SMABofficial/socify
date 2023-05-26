
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
        <div className='container'>
            <div className='text-center'>
             <h1 className='text-center heading'>To Do List</h1>
             </div>
        
            <div className='inputbtn'>
            <input type="text" placeholder="Enter Any Name" onChange={newItem} onKeyUp={entered} value={newCar} ref={focusInput} className='input' />
            <button onClick={addCar} className='btn btn-info'>Add Me</button>
            </div>
            <div>
            <ul className='list'>
                {
                    cars.map ((delCar , index )=>{
                        return  <li key={index} className='listItem'>{delCar}
                        <button onClick={ ()=>{deleteCar(index)} } className='btn btn-outline-danger'> X </button>
                        </li>
                    })
                }
            </ul>
            </div>
        </div>
      
    );
}
export default List;