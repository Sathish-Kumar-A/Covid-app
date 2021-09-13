import React from "react";
import styles from "./App.module.css";
import { fetchData } from "./api";


import {Cards,Charts,CountryPicker} from "./Components";

class App extends React.Component{
    state={
        data:{},
        country:""
    }

    async componentDidMount(){
        const fetchDetail=await fetchData();
        this.setState({data:fetchDetail});
    }
    handleChange=async(country)=>{
        const fetchCountryData=await fetchData(country);
        this.setState({data:fetchCountryData,country:country});
    }
    render(){
        return (
            <div className={styles.container}>
                <img src="https://i.ibb.co/7QpKsCX/image.png"/>
                <Cards data={this.state.data}/>
                <CountryPicker handleChange={this.handleChange}/>
                <Charts data={this.state.data} country={this.state.country}/>
               
            </div>
        )
    }
    }

export default App;