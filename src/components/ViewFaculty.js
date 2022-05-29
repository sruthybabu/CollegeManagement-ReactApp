import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const ViewFaculty = () => {
  const deleteData=(id)=>{
    const data={"_id":id}
    console.log(data)
    axios.post("http://localhost:5006/api/facultydelete",data).then(
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


    var [viewfaculty,setViewfaculty]=useState([])
    var [loadstatus,setLoadstatus]=useState(true)
    axios.get("http://localhost:5006/api/facultiesview").then(
      (response)=>{
        console.log(response.data)
        setViewfaculty(response.data)
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
                         {loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> : <table className="table table-primary table-striped">
  <thead className='table-success'>
    <tr>
      <th scope="col">Faculty Name</th>
      <th scope="col">Education</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Address</th>
      <th scope="col">Pincode</th>
      <th scope="col">District</th>
      <th scope="col">Action</th>
      
      
    </tr>
  </thead>
  <tbody>
    {viewfaculty.map((value,key)=>{
      return <tr>
      <td>{value.facultyName}</td>
      <td>{value.education}</td>
      <td>{value.mobileNo}</td>
      <td>{value.facultyaddress}</td>
      <td>{value.pinCode}</td>
      <td>{value.district}</td>
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

export default ViewFaculty