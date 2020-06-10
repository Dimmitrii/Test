import React from 'react'

function MusicItem(props) {
    const {tdStyle} = props;

    return (
        <tr style={props.index%2 === 0 ? { backgroundColor:"#fefefe" } : { backgroundColor: "#e7e7e7" }}>
            <td style={{ ...tdStyle, width:"150px" }}>{props.singer}</td>
            <td style={{ ...tdStyle, width:"250px" }}>{props.song}</td>
            <td style={{ ...tdStyle, width:"150px" }}>{props.genre}</td>
            <td style={{ ...tdStyle, width:"100px" }}>{props.year}</td> 
        </tr>
    )
}

export default MusicItem;
