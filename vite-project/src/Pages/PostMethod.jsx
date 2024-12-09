import React from 'react'
import { useState } from "react";
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';
const PostMethod = (props) => {
  const {jsonPracticeList} = useStoreState((state)=>state.jsonModel);
  const {setJsonPracticeList}= useStoreActions((actions)=> actions.jsonModel)

    const [users, setUsers] = useState({
      id:props.userdata.length+1,
        name: "",
        email: ""
    })

     function handleUserInput(inputType, e){
      switch (inputType) {
        case "userName":
          setUsers({ name: e.target.value });
          break;
        case "userEmail":
          setUsers({ email: e.target.value });
          break;
        
      }
    }

function handleSubmit()
{
  setUsers(...props.userdata, users)
  async (users) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        users
      );
      setUsers((prevUsers) => [...prevUsers, response.data]);
      console.log("Successful");

    } catch (error) {
      console.error(error);
    }
  };
}

  return (
    <div>
 
<div className="row">
        <div className="col">
       
        </div>
      </div>
      <div className="row gy-3 text-center d-flex flex-row justify-content-center">
        <div className="col-auto">
          <label className="form-label float-start form-label form-label" for="productname">Enter Name</label>
          <input type="text" onChange={(e) => handleUserInput("userName", e)} className="form-control" placeholder="Enter  name" />
        </div>
        <div className="col-auto">
          <label className="form-label float-start form-label form-label">Enter Email Address</label>
          <input type="email" onChange={(e) => handleUserInput("userEmail", e)} className="form-control" placeholder="Enter Email address" />
         </div>
      <div className="row d-flex justify-content-center" style={{ marginTop: "28px", }}>
        <div className="col-3" style={{ textAlign: "center", }}><button onClick={() => handleSubmit()} className="btn btn-success" type="button" style={{ textAlign: "center", }}>Create</button></div>
        <div className="col-3" style={{ textAlign: "center", }}><button className="btn btn-danger" type="button" style={{ textAlign: "center", }} onClick={()=>props.setShowModel(false)}>cancel</button></div>
      </div>
      </div>

    </div>



  )
}

export default PostMethod
