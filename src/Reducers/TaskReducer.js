import {AddTask,DeleteTask,FilterTask,DoneTask,EditTask,SaveTask} from '../actions/type'
import { v4 as uuidv4 } from 'uuid';
let initState = 
[  {
    "id":uuidv4(),
    "description":"Meeting on tuesday ",
    "isDone":false
    },
    
    {
        "id":uuidv4(),
        "description":"Repair CAR",
        "isDone":false
    },

    {
        "id":uuidv4(),
        "description":"Buy Ticket",
        "isDone":false
    }
];
const TaskReducer = (state={initState ,filter:"",Edit:[""]}, action) => {
    switch (action.type) {
        case AddTask:return{
        ...state, initState: [...state.initState,{"id":uuidv4(),"description":action.payload,"isDone":false}]
        }
        case DeleteTask:return{
        ...state, initState: state.initState.filter((state)=>state.id!==action.payload)
        }
        case FilterTask : return{
         ...state, filter:action.payload
        }
        case DoneTask : return{
        ...state,initState:state.initState.map((el)=>(el.id===action.payload)?{...el,isDone:!el.isDone}:el)
        }
        case EditTask : return{
        ...state,Edit:[action.payload]
        }
        case SaveTask : return{
            ...state,initState:state.initState.map((el)=>(el.id===state.Edit[0].id)?{...el,description:action.payload}:el),
        }
        default :return state;

    }

};

export default TaskReducer

