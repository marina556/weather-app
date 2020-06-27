import React from 'react';
import './ListData.css'
const ListData =(props)=>{
    // const {data}=props;
    return(
        <div className="datalist">
            {props.data.name && <div><span>City Name : </span>{props.data.name}</div>}
            {props.data.cou && <div><span>Country : </span>{props.data.cou}</div>}
            {props.data.temp && <div><span>Tempreture : </span>{props.data.temp}</div>}
            {props.data.humidity && <div><span>Humidity : </span>{props.data.humidity}</div>}
            {props.data.description && <div><span>description : </span>{props.data.description}</div>}
            {props.data.error && <div><span>Error : </span>{props.data.error}</div>}
        
        </div>
    )

}

export default ListData