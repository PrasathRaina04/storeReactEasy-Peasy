import { useStoreState, useStoreActions } from 'easy-peasy';
import React from "react";


const Note = () => {

  const count = useStoreState((state)=>state.count);
  const addCount=useStoreActions((actions)=>actions.addCount);
  const subCount=useStoreActions((actions)=>actions.subCount);
    return (
      <div>
     <h1>Count : {count}</h1>
     <button onClick={()=>addCount()}>+1</button>
        <button onClick={()=>subCount()}>-1</button>
 </div>
    );
  };
  
  export default Note;