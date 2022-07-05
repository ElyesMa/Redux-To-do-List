import Form from 'react-bootstrap/Form';
import { filterTask } from '../actions/taskactions'; 
import { useDispatch } from 'react-redux'

const Filter = () => {
const dispatch = useDispatch();
let check=false
  return (
    <div style={{display:"flex" ,justifyContent:"space-evenly",fontSize:20 , fontWeight:900}}>
    <>Filter by :  </>
      <Form.Check style={{height:5}}
            id="Done"
            label="Done"
            isValid
            onClick={()=>{
            check=!check
            document.getElementById("NotDone").disabled=check
            check===true?dispatch(filterTask("Done")):dispatch(filterTask("off"))

          }}
            
          />

      <Form.Check 
            id="NotDone"
            label="Not Done"
            isInvalid
            onClick={()=>{
            check=!check
            document.getElementById("Done").disabled=check
            check===true?dispatch(filterTask("NotDone")):dispatch(filterTask("off"))

          }}
          />

    </div>
  )
}

export default Filter