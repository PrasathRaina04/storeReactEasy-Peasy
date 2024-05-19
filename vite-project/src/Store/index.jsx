//We already imported these earlier
import { createStore, action } from 'easy-peasy';

//This is our store
const Store = createStore({

//This count holds the value of our count  
count:0,

//addCount is the action to increment count
  addCount:action((state,payload) =>{
    state.count+=1;
  }),

//subcount is the action to decrement count
  subCount:action((state,payload)=>{
    state.count-=1;
  }),
});

export default Store;