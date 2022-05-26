import React from 'react'
import Header from './Header'

const ViewStudent = () => {
    var viewstudent=[
        {
            "admno":1001,
            "rollNo":1,
            "name":"Adhi",
            "class":"BSc cs",
            "parentName":"lal",
            "mobile":8976543210,
            "address":"adhi villa"
        },
        {
            "admno":1002,
            "rollNo":2,
            "name":"Anu",
            "class":"BSc cs",
            "parentName":"Raju",
            "mobile":8945329012,
            "address":"anu villa"
        },
        {
            "admno":1003,
            "rollNo":3,
            "name":"Arun",
            "class":"BSc cs",
            "parentName":"lal",
            "mobile":8976543210,
            "address":"arun villa"
        }
    ]
  return (
    <div>
        <Header/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                         <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">Admission No</th>
      <th scope="col">Roll No</th>
      <th scope="col">Name</th>
      <th scope="col">Class</th>
      <th scope="col">Parent Name</th>
      <th scope="col">Mobile No</th>
      <th scope="col">Address</th>
      
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
    </tr>
    })}   
  </tbody>
</table>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default ViewStudent