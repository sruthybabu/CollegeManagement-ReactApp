import axios from 'axios'
import React, { useState } from 'react'

const AddStudent = () => {
    var [admno,setAdmno]=useState("")
    var [rollno,setRollno]=useState("")
    var [name,setName]=useState("")
    var [classes,setClass]=useState("")
    var [parentname,setParentname]=useState("")
    var [mobile,setMobile]=useState("")
    var [address,setAddress]=useState("")
    const subData=()=>{
        const data={"admno":admno,"rollNo":rollno,"name":name,"class":classes,"parentName":parentname,"mobile":mobile,"address":address}
        console.log(data)
        axios.post("http://localhost:5006/api/studentadd",data).then(
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
                    <label for="" className="form-label">Admission No</label>
                    <input onChange={(e)=>{setAdmno(e.target.value)}} placeholder="Eneter admission number" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Roll No</label>
                    <input onChange={(e)=>{setRollno(e.target.value)}} placeholder="Enter roll number" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Class</label>
                    <input onChange={(e)=>{setClass(e.target.value)}} placeholder="Enter your mobile no" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Parent Name</label>
                    <input onChange={(e)=>{setParentname(e.target.value)}} placeholder="Enter parent name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Mobile</label>
                   <input onChange={(e)=>{setMobile(e.target.value)}} placeholder="Enter mobile no" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                    <textarea onChange={(e)=>{setAddress(e.target.value)}} placeholder="Enter adress"  name="" id="" cols="30" rows="10" class="form-control"></textarea>
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

export default AddStudent