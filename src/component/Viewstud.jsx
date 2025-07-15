import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const Viewstud = () => {
  const [stud, changeStud] = useState(

   
{"status":"success","data":[]}



  )

const fetchData=()=>{

  axios.get("http://18.144.111.41/view_all_students.php").then(

(response)=>{
  changeStud(response.data)

}


  ).catch()
}

useEffect(()=>{fetchData()},[])




  
  return (
    <div style={{
  backgroundImage: "url('https://wallpapers.com/images/featured/blue-color-background-9u7nhq72leu6xf5w.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh"
}}>
      <NavigationBar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">

<div className="row">
  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    
   <h2>Student Details</h2>

<table 
  border="1" 
  cellSpacing="0" 
  cellPadding="8" 
  style={{
    margin: "20px auto",
    width: "80%",
    borderCollapse: "collapse",  // VERY important!
    fontFamily: "sans-serif",
    fontSize: "14px"
  }}
>
  <thead style={{ backgroundColor: "#f0f0f0" }}>
    <tr>
      <th style={{ border: "1px solid #000" }}>Id</th>
      <th style={{ border: "1px solid #000" }}>Name</th>
      <th style={{ border: "1px solid #000" }}>Roll No</th>
      <th style={{ border: "1px solid #000" }}>Admission No</th>
      <th style={{ border: "1px solid #000" }}>College</th>
    </tr>
  </thead>
  <tbody>
    {stud.data.map((value, index) => (
      <tr key={index}>
        <td style={{ border: "1px solid #000", verticalAlign: "top" }}>{value.id}</td>
        <td style={{ border: "1px solid #000", verticalAlign: "top" }}>{value.name}</td>
        <td style={{ border: "1px solid #000", verticalAlign: "top" }}>{value.roll_number}</td>
        <td style={{ border: "1px solid #000", verticalAlign: "top" }}>{value.admission_number}</td>
        <td style={{ border: "1px solid #000", verticalAlign: "top", whiteSpace: "pre-wrap" }}>{value.college}</td>
      </tr>
    ))}
  </tbody>
</table>
             
                      
                        
</div>






















</div>

                


            </div>

</div>



          </div>
        </div>
      </div>


















  
  )
}

export default Viewstud