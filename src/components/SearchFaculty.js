import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const SearchFaculty = () => {
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



    const [data,setData]=useState([{"education":"","mobileNo":"","facultyaddress":"","pinCode":"","district":""}])
    var [fname,setFname]=useState("")
    const subData=()=>{
        const data={"facultyName":fname}
        console.log(data)
        axios.post("http://localhost:5006/api/facultysearch",data).then(
            (response)=>{
                console.log(response.data)
                setData(response.data)

        })
    }
  return (
    <div>
        <Header/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <label for="" className="form-label">Faculty Name</label>
                       <input onChange={(e)=>{setFname(e.target.value)}} placeholder="Eneter admission number" type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <button onClick={subData} className="btn btn-primary">SEARCH</button>
                    </div>
                    </div>
                    {data.map((value,key)=>{
                        return <div className='row g-3'>
                            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                                <label for="" className='form-label'>Education</label>
                                <input value={value.education} type="text" className='form-control'/>
                            </div>
                            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                                <label for="" className='form-label'>Mobile No</label>
                                <input value={value.mobileNo} type="text" className='form-control'/>
                            </div>
                            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                                <label for="" className='form-label'>Address</label>
                                <textarea value={value.facultyaddress} name="" id="" cols="30" rows="10" className='form-control'></textarea>
                            </div>
                            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                                <label for="" className='form-label'>Pincode</label>
                                <input value={value.pinCode} type="text" className='form-control'/>
                            </div>
                            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                                <label for="" className='form-label'>District</label>
                                <input value={value.district} type="text" className='form-control'/>
                            </div>
                            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                                 <button onClick={()=>{deleteData(value._id)}} className='btn btn-danger'>DELETE</button>
                            </div>

                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchFaculty