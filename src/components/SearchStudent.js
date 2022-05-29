import axios from 'axios'
import React, { useState } from 'react'

const SearchStudent = () => {
    const deleteData=(id)=>{
        const data={"_id":id}
        console.log(data)
        axios.post("http://localhost:5006/api/studentsearch",data).then(
            (response)=>{
                if(response.data.status=="success")
                {
                   alert("Successfully deleted")
                }
                else
                {  
                    alert("failed to delete")

                }

        })
    }




    const [data,setData]=useState([{"rollNo":"","name":"","class":"","parentName":"","mobile":"","address":""}])
    var [admno,setAdmno]=useState("")
    const subData=()=>{
        const data={"admno":admno}
        console.log(data)
        axios.post("http://localhost:5006/api/studentsearch",data).then(
            (response)=>{
                console.log(response.data)
                setData(response.data)

        })
    }
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <label for="" className="form-label">Admission No</label>
                       <input onChange={(e)=>{setAdmno(e.target.value)}} placeholder="Eneter admission number" type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <button onClick={subData} className="btn btn-primary">SEARCH</button>
                    </div>
                    </div>
                    {data.map((value,key)=>{
                        return <div className='row g-3'>
                           <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                               <label for="" className="form-label">Roll No</label>
                               <input value={value.rollNo} type="text" className='form-control'/>
                           </div>
                           <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                               <label for="" className="form-label">Name</label>
                               <input value={value.name} type="text" className='form-control'/>
                           </div>
                           <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                               <label for="" className="form-label">Class</label>
                               <input value={value.class} type="text" className='form-control'/>
                           </div>
                           <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                               <label for="" className="form-label">Parent Name</label>
                               <input value={value.parentName} type="text" className='form-control'/>
                           </div>
                           <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                               <label for="" className="form-label">Mobile</label>
                               <input value={value.mobile} type="text" className='form-control'/>
                           </div>
                           <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                               <label for="" className="form-label">Address</label>
                               <textarea value={value.address} name="" id="" cols="30" rows="10" className='form-control'></textarea>
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

export default SearchStudent