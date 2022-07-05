import { MdDelete } from 'react-icons/md';
import {useDispatch} from 'react-redux'
import { deleteTask ,doneTask, editTask } from '../actions/taskactions'; 
import { AiOutlineEdit } from 'react-icons/ai'

const Task = ({task}) => {
  const dispatch = useDispatch();
  return (
    
    <div style={{display:"flex" ,flexDirection:"row",alignItems:"center" }}>
    <p style={{width:300}} className={task.isDone?"done":""}>{task.description}</p>
    <input
                    type="checkbox"
                    onChange={() => dispatch(doneTask(task.id))}
                    checked={task.isDone}
                />
    <MdDelete onClick={()=>{dispatch(deleteTask(task.id))}}/>
    <AiOutlineEdit onClick={()=>dispatch(editTask(task))}/> 
    </div>
  )
}

export default Task