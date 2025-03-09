import React from "react"
import {Data} from "./Carddata"
import Cards from "./Cards";

function Card (){
    let keyss = Object.keys(Data[0]);
    // console.log("keyss",keyss)
    return (
        <>
        <Cards heading={keyss} data={Data}/>
        </>
    )
}
export default Card