import React from 'react'
import MusicSettings from "./Settings";
import MusicItem from "./Item";
import MusicPagination from './Pagination';

import getNumberForPagination from "../../utils/getNumbersForPagination";
import music from "./music.json";

const thStyle = { height: "35px", textAlign: "left", padding: "0 0 0 5px", cursor: "pointer" }
const varietyOfPostsPerPage=[5,10,25,50,"infinity scrolling"];

class MusicPage extends React.Component{

    state = {
        currentPage:1,
        songsPerPage:5,
        genre:"",
        year:"",
        singer:"",
        infinityPage:1,
        isSingerSort:false,
        isGenreSort:false,
        isYearSort:false,
        isSongSort:false,
    };

    infinityScrolling = ()=>{
        if(window.pageYOffset + document.documentElement.clientHeight === document.documentElement.scrollHeight ){
            this.setState({infinityPage:this.state.infinityPage+1});
        }
    }

    handlePaginationClick = (e)=>{
        const { textContent, title } = e.target;
        const { songsPerPage, currentPage } = this.state;
        if(title === "" || textContent === "..." ){
            return;
        }    
        if(title === "songsPerPage"){
            if(textContent === songsPerPage){
                return;
            } 
            this.setState({currentPage:1,genre:"",year:"",singer:""});
        }
        if(title === "currentPage"){
            if(textContent === currentPage){
                return;
            } 
            this.setState({genre:"",year:"",singer:""});
        }
        if(textContent === "infinity scrolling" && songsPerPage !== "infinity scrolling"){
            window.addEventListener("scroll",this.infinityScrolling);
        }
        if(textContent !== "infinity scrolling" && songsPerPage === "infinity scrolling"){
            window.removeEventListener("scroll",this.infinityScrolling);
            this.setState({infinityPage:1})
        } 
        this.setState({[title]:textContent});
    }

    handleSortClick = (e)=>{
        const { title } = e.target;
        if(title === ""){
            return;
        }
        if(this.state[title] === true){
            this.setState({[title]:!this.state[title]})
        }else if(this.state[title] === false){
            this.setState({ isGenreSort: false, isSingerSort: false, isSongSort: false, isYearSort:false, [title]: !this.state[title]});
        }
        this.setState({[title]:!this.state[title]});
    }

    handleSelectChange = (e)=>{
        const { value, name } = e.target;
        if(!!name === false){
            return;
        }else if(value === "All"){
            return;
        }
        this.setState({[name]:value});
    }

    showedSongs = ()=>{
        const { currentPage, songsPerPage, year, singer, genre, isYearSort, isGenreSort, isSongSort, isSingerSort } = this.state;

        let currentSongs = music.slice((currentPage-1)*songsPerPage,currentPage*songsPerPage);

        if(songsPerPage === "infinity scrolling"){
            currentSongs = music.slice(0,30*this.state.infinityPage);
        }
        if(year !== ""){
            currentSongs = currentSongs.filter(item => item.year === +year);
        }
        if(singer !== ""){
            currentSongs = currentSongs.filter(item => item.singer === singer);
        }
        if(genre !== ""){
            currentSongs = currentSongs.filter(item => item.genre === genre);
        }
        if(isGenreSort === true){
            currentSongs.sort((a, b) => a.genre > b.genre ? 1 : -1);
        }
        if(isSingerSort === true){
            currentSongs.sort((a, b) => a.singer > b.singer ? 1 : -1);
        }
        if(isSongSort === true){
            currentSongs.sort((a, b) => a.song > b.song ? 1 : -1);
        }
        if(isYearSort === true){
            currentSongs.sort((a, b) => a.year > b.year ? 1 : -1);
        }
        // console.log(currentSongs)
        return currentSongs;
    }

    render(){
        console.log(this.state)
        const { currentPage, songsPerPage, year, singer, genre, infinityPage } = this.state;
        
        const currentSongs = music.slice((currentPage-1)*songsPerPage,currentPage*songsPerPage);

        const showedSongs = this.showedSongs();

        const musicItems = showedSongs.map((item,index)=>{
            return(
                <MusicItem key={index} tdStyle={thStyle} index={index} song={item.song} singer={item.singer} year={item.year} genre={item.genre}/>
            );
        });
        return (
        <>
            <div style={{width:"860px",margin:"0 auto"}}>
                <table style={{ float: "left" }}>
                    <tbody>
                        <tr style={{ backgroundColor: "#e7e7e7" }} onClick={this.handleSortClick}>
                            <th style={{ ...thStyle, width:"150px" }} title="isSingerSort">Singer</th>
                            <th style={{ ...thStyle, width:"250px" }} title="isSongSort">Song</th>
                            <th style={{ ...thStyle, width:"150px" }} title="isGenreSort">Genre</th>
                            <th style={{ ...thStyle, width:"100px" }} title="isYearSort">Year</th>
                        </tr>
                        {musicItems}
                    </tbody>
                </table>
                <MusicSettings currentSongs={currentSongs.length ? currentSongs : music.slice(0,30*infinityPage)} onChange={this.handleSelectChange} genre={genre} year={year} singer={singer} />
            </div>
            <MusicPagination varietyOfPostsPerPage={varietyOfPostsPerPage} pages={getNumberForPagination(music.length,songsPerPage,currentPage)} songsPerPage={songsPerPage} currentPage={currentPage} onClick={this.handlePaginationClick}/>
        </>
        )
    }
}

export default MusicPage;