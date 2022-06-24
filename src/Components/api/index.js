import React, { useState, useEffect } from 'react';
import './data.json'


function fetchData() {
    const [data,setData]=useState([]);
    const getData=()=>{
      fetch('data.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])
    return { Pname, Tagline, Reviews, Price, Status, Delete };
  }
  
  export default fetchData;