import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const ViewStudent = () => {
  const deleteData=(id)=>{
    const data={"_id":id}
    console.log(data)
    axios.post("http://localhost:5006/api/Studentdelete",data).then(
        (response)=>{
            if(response.data.status=="success")
            {
                alert("Successfully deleted")
            }
            else
            {
                alert("Failed to delete")

            }
        })

}


    var [viewstudent,setViewstudent]=useState([])
    var [loadstatus,setLoadstatus]=useState(true)
    axios.get("http://localhost:5006/api/studentview").then(
      (response)=>{
        console.log(response.data)
        setViewstudent(response.data)
        setLoadstatus(false)

      }
    )
  return (
    <div>
        <Header/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                         {loadstatus ? <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div> : <table className="table table-primary table-striped">
  <thead className='table-success'>
    <tr>
      <th scope="col">Admission No</th>
      <th scope="col">Roll No</th>
      <th scope="col">Name</th>
      <th scope="col">Class</th>
      <th scope="col">Parent Name</th>
      <th scope="col">Mobile No</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>


      
    </tr>
  </thead>
  <tbody>
    {viewstudent.map((value,key)=>{
      return <tr>
      <td>{value.admno}</td>
      <td>{value.rollNo}</td>
      <td>{value.name}</td>
      <td>{value.class}</td>
      <td>{value.parentName}</td>
      <td>{value.mobile}</td>
      <td>{value.address}</td>
      <td><button onClick={()=>{deleteData(value._id)}} className='btn btn-danger'>DELETE</button></td>
    </tr>
    })}   
  </tbody>
</table>}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default ViewStudent