import axios from 'axios'
import React, { useState } from 'react'

const AddFaculty = () => {
    var [fname,setFname]=useState("")
    var [education,setEducation]=useState("")
    var [mobileno,setMobileno]=useState("")
    var [faddress,setFaddress]=useState("")
    var [pincode,setPincode]=useState("")
    var [district,setDistrict]=useState("")
    
    const subData=()=>{
        const data={"facultyName":fname,"education":education,"mobileNo":mobileno,"facultyaddress":faddress,"pinCode":pincode,"district":district}
        console.log(data)
        axios.post("http://localhost:5006/api/facultiesadd",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                {
                    alert("Successfully added")

                }
                else
                {
                    alert("Failed to store")
                }


            }
        )
    }
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Faculty Name</label>
                    <input onChange={(e)=>{setFname(e.target.value)}} placeholder="Eneter name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Education</label>
                    <input onChange={(e)=>{setEducation(e.target.value)}} placeholder="Enter education" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Mobile No</label>
                    <input onChange={(e)=>{setMobileno(e.target.value)}} placeholder="Enter mobile number" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                    <textarea onChange={(e)=>{setFaddress(e.target.value)}} placeholder="Enter adress"  name="" id="" cols="30" rows="10" class="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Pincode</label>
                    <input onChange={(e)=>{setPincode(e.target.value)}} placeholder="Enter parent name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">District</label>
                   <input onChange={(e)=>{setDistrict(e.target.value)}} placeholder="Enter mobile no" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
    </div>





    </div>
  )
}

export default AddFaculty