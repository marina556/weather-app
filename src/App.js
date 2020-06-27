import React from 'react';
import './App.css';
import Form from './components/Form/Form'
import ListData from './components/ListData/ListData'
import { Component } from 'react';

// const API_KEY = '58765b3e216b2a4e245094790b98c994';
const API_KEY="58765b3e216b2a4e245094790b98c994";
class App extends Component{
  state={
    name:'',
    cou:'',
    temp:'',  
    humidity:'',
    description:'',
    error:''
  }

  handelSubmit=async(e)=>{
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.Country.value;
    if (city && country){
      const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
      const data = await api.json();
      this.setState({
        name:data.name,
        cou:data.sys.country,
        temp:data.main.temp,  
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:""
      })
      console.log(city , country);
      console.log(data)
    }else{
      this.setState({
        name:'',
        cou:'',
        temp:'',  
        humidity:'',
        description:'',
        error:"please enter valid data"
      })
    }
  }

  render(){
    return (
      <div className="App">
        <Form handelSubmit={this.handelSubmit}/>
        <ListData data={this.state}/>
      </div>
    )
  }
}

export default App;
