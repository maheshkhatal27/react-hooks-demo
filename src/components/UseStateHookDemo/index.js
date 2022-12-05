import React,{useState} from "react"

const UseStateHookDemo=()=>{
// const [count,setCount] =useState(0)
// const [name,setName]= useState({firstName:"",lastName:""})
const[items,setItems]=useState([])

const addItem=()=>{
    setItems([...items,{
        id:items.length,
        value:Math.floor(Math.random() * 10) +1
    }])
}

    return (
// these are different ways to deal with array,objects, count variable etc.
            <div>
            <button onClick={addItem}>Add an Item</button>
                <ul>
                    {items.map(eachItem=>(
                        <li key={eachItem.id}>{eachItem.value}</li>
                    ))}
                </ul>
            </div>

               /* <div><form>
                    <input type="text" value={name.firstName} onChange={(e)=>setName({...name,firstName:e.target.value})} />
                    <input type="text" value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})} />
                </form></div> */


       /* <div>
        <p>{count}</p>
            <button onClick={()=> count===10? (alert("Well Done!!")):setCount(prevCount=>prevCount+1)}>Increase Click</button>
            <button onClick={()=>
             count ===0 ? count=0 :  
            setCount(prevCount=>prevCount-1)}>Decrease Click</button>
        </div> */
    )
}

export default UseStateHookDemo