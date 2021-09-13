import React,{useState,useEffect} from "react";
import {NativeSelect,FormControl} from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { countriesData } from "../../api";

const CountryPicker=({handleChange})=>{
    const[fetchedCountries,setfetchedCountries]=useState([]);
    useEffect(()=>{
        const fetchApi=async()=>{
            setfetchedCountries(await countriesData());
        }
        fetchApi();
    },[setfetchedCountries])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;