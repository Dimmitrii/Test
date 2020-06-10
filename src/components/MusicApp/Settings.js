import React from 'react'

import arrOfObjFilterByProp from "../../utils/arrOfObjFilterByProp";

const selectStyle = { width: "150px",height: "35px",margin: "5px 0 15px 0",borderColor: "#9e9e9e" }

function MusicSettings(props){

    return (
        <div style={{float: "left",margin:"0 0 0 30px",color:"#9e9e9e",fontWeight:"bold"}} onChange={props.onChange}>
            Singer:
            <br/>

            <select style={selectStyle} value={props.singer} name="singer">
                <option value="">All</option>
                {arrOfObjFilterByProp(props.currentSongs,"singer").map((item,index)=><option key={index}>{item}</option>)}
            </select>
            <br/>

            Genre:
            <br/>

            <select style={selectStyle} value={props.genre} name="genre">
                <option value="">All</option>
                {arrOfObjFilterByProp(props.currentSongs,"genre").map((item,index)=><option key={index}>{item}</option>)}
            </select>
            <br/>

            Year:
            <br/>

            <select style={selectStyle} value={props.year} name="year">
                <option value="">All</option>
                {arrOfObjFilterByProp(props.currentSongs,"year").map((item,index)=><option key={index}>{item}</option>)}
            </select>
        </div>
    )
}

export default  MusicSettings;