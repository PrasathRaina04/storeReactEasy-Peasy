import { useStoreState, useStoreActions } from 'easy-peasy';
import { useState, useEffect } from "react"
export function JsonPractice(){
    const {jsonPracticeList} = useStoreState((state)=>state.jsonModel);
    const {setJsonPracticeList}= useStoreActions((actions)=> actions.jsonModel)
const[userdata, setUserdata]=useState([])


    useEffect( () => {
      fetchData();
    },[jsonPracticeList]);
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      // axios.get("https://jsonplaceholder.typicode.com/users").then((data)=>{
      // console.log(data.data);
      // })
      const res = await response.json();
      console.log(res);
    setUserdata(res);
    setJsonPracticeList(res);
    }

    return(
        <>

       {userdata.map((item) => (
        <div className="col item">
            <div className="card">
                <div className="card-body text-center d-flex flex-column align-items-center p-0">
                    <div className="row row-cols-1" style={{ margin: "0px", marginRight: "0px", marginBottom: "10px", marginTop: "0px", }}>
                        <div className="col">
                            <h4 className="card-title">{item.id}</h4>
                            <h4 className="card-title">{item.name}</h4>
                            <h4 className="card-title">{item.username}</h4>
                            <h4 className="card-title">{item.email}</h4>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    ))}

        </>


    )
}