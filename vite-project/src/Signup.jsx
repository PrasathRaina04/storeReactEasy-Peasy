

export function Signup()
{
   
    return(
        <>
       <form className="font-monospace" style={{ margin:"5rem", }}>
        <div className="row">
            <div className="col"><label className="form-label">First Name</label><input onChange={(e)=>handleInput("fName", e)} className="focus-ring form-control" type="text" autoFocus="" /></div>
            <div className="col"><label className="form-label">Last Name</label><input onChange={(e)=>handleInput("lName", e)} className="form-control" type="text" /></div>
        </div>
        <div className="row mt-4">
            <div className="col"><label className="form-label">Mobile number</label><input onChange={(e)=>handleInput("mNumber", e)} className="form-control" type="number" /></div>
            <div className="col"><label className="form-label">Email Id</label><input onChange={(e)=>handleInput("emailId", e)} className="form-control" type="email" /></div>
            <div className="col"><label className="form-label">Address</label><input onChange={(e)=>handleInput("address", e)} className="form-control" type="text" /></div>
        </div>
        <div className="row justify-content-center">
            <div className="col-4 mt-4"><label className="form-label">Pincode</label><input onChange={(e)=>handleInput("pincode", e)} className="form-control" type="number" /></div>
        </div>
        <div className="row text-center justify-content-center mt-4">
            <div className="col-4"><button onClick={()=>handleSignup()}  className="btn btn-primary d-block w-100" type="button">Sign Up</button></div>
        </div>
        </form>
 
        </>
    )
}