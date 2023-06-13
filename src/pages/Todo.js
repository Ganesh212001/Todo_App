import React, { useEffect, useState } from 'react'
import icon from '../images/icon.png'
import BottomLine from '../components/BottomLine/index'
import '../App.css'
import '../components/PrimaryBtn/PrimaryBtn.css'


    const getLocalItems = () => {
        let todo = localStorage.getItem('todos');
        console.log(todo);

        if (todo) {
            return JSON.parse(localStorage.getItem('todos'));
        } else {
            return [];
        }
    };

    const Todo = ({name}) => {
        const [inputData , setinputData] = useState ('');
        const [items , setItems] = useState (getLocalItems());

    const addItem = () => {
        if(!inputData) {
        }
        else{
            setItems([...items , inputData])
            setinputData('')
            }
        }

    const deleteItem = (e, ind) =>{
        const val = e.target['tabIndex']; 
        setItems(items.filter((elem, index) => index !== val))   
        }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(items))
    },[items]);
    
    return (
        <form className="flex">
            <div className='flex bg-purple-500 w-full h-screen back'>
                <div className="block h-screen bg-gray-500 w-60 mobile">
                    <img src={icon} alt="icon" className='flex justify-center mx-auto w-52 h-32 icon'/>
                        <h1 className='flex justify-center text-2xl font-bold text-white text'>{name}</h1><br />
                        <div className="cont">
                            <BottomLine/>
                        </div>
                </div>
                <div className='w-full'>
                    <div className="cont1 flex justify-center mt-20 ">
                        <h1 className='text-3xl font-bold text-white'>Create Your Todo List Here...</h1>
                    </div>
                    <div className="flex justify-center my-20 mx-4">
                        <input
                            className="w-96 px-4 py-2 border rounded-lg mr-2"
                            type="text"
                            placeholder='Add Items... '
                            value={inputData}
                            onChange={(e) => setinputData(e.target.value)}
                        />
                        <button className='primary-button' onClick={addItem}>
                            <i className="fa-sharp fa-solid fa-plus icon1" title='Add Item'></i>
                        </button>
                    </div>
                    <div className="flex flex-col items-center gap-8 justify-center bg-purple-500 w-full">
                    {
                        items.map((elem , ind) => {
                            return(
                                <>
                                        <div key={ind} className="flex mr-2 item col-span-1">
                                            <span className='p-2 text-white border w-80 mx-auto rounded mr-2'>{elem}</span>
                                            <button  className='primary-button1 block' onClick={(e , ind)=>{deleteItem(e , ind)}}>
                                                <i tabIndex={ind} className="fa-sharp fa-solid fa-trash icon1" title='Add Item'></i>
                                            </button>
                                        </div>  
                                </>
                            )
                        })
                    }
                        
                    </div>
                </div>
            </div>
        </form>
    )
    }

    export default Todo
