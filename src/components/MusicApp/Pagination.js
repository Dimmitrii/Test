import React from 'react'

const leftMenu = {float: "left", margin: "0 0 0 10px"};
const rightMenu = {float: "right", margin: "0 10px 0 0"};
const partOfMenu = {float: "left", margin: "0 5px 0 0", cursor:"pointer"};    

function MusicPagination(props) {
    return (
        <div style={{ position: "fixed", backgroundColor: "#e7e7e7", width: "100%", height: "5%",  top: "95%" }}>
            <div style={leftMenu} name="currentPage" onClick={props.onClick}>
                {props.pages.map((item,index)=>{
                    return  <div style={{...partOfMenu,backgroundColor: item===+props.currentPage ? "#ff616b":null}} title="currentPage" key={index}>{item}</div> 
                })}
            </div>
            <div style={rightMenu} name="songsPerPage" onClick={props.onClick}>
                {props.varietyOfPostsPerPage.map((item,index)=>{
                    return <div style={{...partOfMenu,backgroundColor: item===props.songsPerPage? "#ff616b"
                    :item===+props.songsPerPage ? "#ff616b":null}} title="songsPerPage" key={index}>{item}</div> 
                })}
            </div>
        </div>
    )
}

export default MusicPagination;