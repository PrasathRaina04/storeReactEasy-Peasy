import axios from 'axios';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useState, useEffect } from "react"
import PostMethod from './PostMethod';
export function JsonPractice(){
    const {jsonPracticeList} = useStoreState((state)=>state.jsonModel);
    const {setJsonPracticeList}= useStoreActions((actions)=> actions.jsonModel)
const[userdata, setUserdata]=useState([])
const [showModel, setShowModel] = useState(false)
const [post, setPost] = useState([])
const [selectPost, setSelectPost] = useState([])
const [data, setData] = useState({
    title: "",
    body: ""
})



    useEffect( () => {
      fetchData();
    },[setUserdata]);
    async function fetchData() {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
      axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
      console.log(res.data);
      setUserdata(res.data);
      setJsonPracticeList(res.data);
      })
    //   const res = await response.json();
    //   console.log(res);
    // setUserdata(res);
    // setJsonPracticeList(res);
    }

    async function handleCreateButton(){

        const addPost = () => {
            console.log("data", data)
            const postData = {
                userId: (post.length + 1),
                id: (post.length + 1),
                title: data.title,
                body: data.body
            }
            axios.post('https://jsonplaceholder.typicode.com/posts', postData)
                .then((response) => {
                    console.log("successfully add")
                    setData({
                        title: "",
                        body: ""
                    })
                    setMsg("Add successfully")
                }).catch(() => {
                    setMsg("error")
                })
        }
    }



    async function handleEditButton(item){
      axios.put("https://jsonplaceholder.typicode.com/users/${selectPost.id}")
      .then((response) => {
        console.log("successfully add")
        setData({
            title: "",
            body: ""
        })
        setMsg("Edit successfully")
      }).catch(() => {
        setMsg("error")
      })

}
async function handleDeleteButton(item){
  axios.delete("https://jsonplaceholder.typicode.com/users/${selectPost.id}")
  .then((response) => {
      console.log("successfully add")
      setData({
          title: "",
          body: ""
      })
      setMsg("delete successfully")
  }).catch(() => {
      setMsg("error")
  })

}

    return(
        <>
        <div className="container">
<div className="row mb-5">
    <div className="col-8 col-xl-9 text-center mx-auto">
        <h2><br /><strong>user id</strong><br /></h2>
        <p className="w-lg-50"><br />Here You can find the groups of Brands that meet a similar consumer need or that can substitute for each<br /></p>
    </div>
    <div className="col align-self-center" style={{ textAlign: "center", }}>
        <a className="btn btn-outline-info btn-lg" role="button" onClick={()=>setShowModel(true)}>Create New UserId</a>
    </div>
</div>
<div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
       {jsonPracticeList.map((item) => (
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
                        <div className="row">
                                <div className="col"><button className="btn btn-primary" onClick={() => handleEditButton(item)} type="button">Edit</button></div>
                                <div className="col"><button className="btn btn-primary" type="button" onClick={() => handleDeleteButton(item)} >Delete</button></div>
                            </div>
                    </div>
                </div>
               
            </div>
        </div>
    ))}
</div>
</div>
{showModel && <div className="modal fade show" id="modal-1" role="dialog" tabindex="-1" style={{ display:"block", }}>
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Edit Product Details</h4>
                <button
                onClick={()=>setShowModel(false)}
                className="btn-close"
                type="button"
                aria-label="Close"
                data-bs-dismiss="modal" />
                   </div>
                 <div className="modal-body">
             <PostMethod data={data} setData={setData} setShowModel={setShowModel} userdata={userdata} setUserdata={setUserdata}/>

           
                </div>

                </div>
                </div>
                </div>}
        </>


    )
}