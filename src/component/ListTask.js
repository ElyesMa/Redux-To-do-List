import Task from "./Task";
import {useSelector} from 'react-redux'
const ListTask = () => {
    const filter=useSelector(state=>state.TaskReducer.filter)
    const Tasks= useSelector((state)=>{
        switch (filter) {
            case "Done": return  state.TaskReducer.initState.filter((state)=>state.isDone=== true) 
            case "NotDone": return  state.TaskReducer.initState.filter((state)=>state.isDone=== false) 
            default :return state.TaskReducer.initState
        }})


	return (
       
            
        <div style={{display:"flex" ,flexDirection:"column" ,  verticalAlign: "middle" ,textAlign:"left" }}>
            {Tasks.map((el,i)=>(
                <div key={i} style={{display:"flex" ,flexDirection:"row",fontSize:25 , justifyContent:"space-arround", lineHeight:"normal"}}>
                {i+1}
                <Task task={el} key={i}/>   
                </div>
            ))}
        </div>
        
	);
};

export default ListTask;