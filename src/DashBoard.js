import React, { useEffect, useState } from 'react'
import Card from './Card';
function DashBoard() {

    const [Counter,setCounter] = useState(0);
    useEffect(()=>{
        console.log("This code is shown for every mount");
    },[]);

    useEffect(()=>{
        return ()=>{
            console.log("This code is shown for every destroy");
        }
    },[])
    useEffect(()=>{
        console.log("This is shown for every time the component renders");
    },[Counter])



    return (

        <div class="container-fluid">


            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard{Counter}</h1>
                <button onClick={()=> setCounter(Counter+1)} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</button>
            </div>
            <div class="row">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    )
}

export default DashBoard;