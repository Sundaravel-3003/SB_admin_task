import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react';

function ViewUser() {
   const params = useParams();
   const [searchParams] = useSearchParams();
   useEffect(() => {
     console.log(searchParams.get('status'));
   }, [])
   

  return (
    <div className='container'>
      <div className='row'>
      <div className='col-lg-12'>
            ID : {params.id}
         </div>
         <div className='col-lg-6'>
            UserName : person1
         </div>
         <div className='col-lg-6'>
            Email : Person1
         </div>
         <div className='col-lg-6'>
            Country : Person1
         </div>
         <div className='col-lg-6'>
            State : Person1
         </div>
         <div className='col-lg-6'>
            Area : Person1
         </div>
         <div className='col-lg-6'>
            DoB : Person1
         </div>
         <div className='col-lg-6'>
            Phone : Person1
         </div>
         <div className='col-lg-6'>
            Gender : Person1
         </div>
      </div>
    </div>
  )
}

export default ViewUser