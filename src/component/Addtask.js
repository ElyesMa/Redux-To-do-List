import { useSelector ,useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { addTask,editTask,saveTask } from '../actions/taskactions';
import { Button } from 'react-bootstrap';

const Addtask = () => {
  const dispatch = useDispatch();
  const Edit=useSelector(state=>state.TaskReducer.Edit)
  const [newTASK, setnewTASK] = useState("")
  useEffect(() => {
    if (Edit[0]!==""){
      document.getElementById("input").value=Edit[0].description;}
    
  });

  return (
    <div style={{display:"flex" ,flexDirection:"row", justifyContent:"space-arround"}}>
      <input id="input"  value={newTASK} placeholder='Add new task' onChange={(e)=>{setnewTASK(e.target.value)}}/>
      <Button variant="primary" onClick={()=>{newTASK!==""&& Edit[0]===""?
      dispatch(addTask(newTASK))
      :
      newTASK!==""?dispatch(saveTask(newTASK)):dispatch(saveTask(Edit[0].description)) 
      dispatch(editTask(""))   
      setnewTASK("")
      }}>
      {Edit[0]!==""?"Save":"Add"}</Button>


    </div>
  )
}

export default Addtask