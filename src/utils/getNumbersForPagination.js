const getNumbersForPagination = (length,postPerPage,currrentPage)=>{
    const pages = [];
    const numberOfPages = Math.ceil(length/postPerPage);
    for(let i=1;i<numberOfPages+1;i++){
        pages.push(i);
    }
    // console.log(length);
    if(currrentPage <4 && pages.length<4){
        return [pages[0],pages[1],pages[2]]
    }
    else if(currrentPage<3 && pages.length>3){
        return [pages[0],pages[1],pages[2],"...",pages[pages.length-1]];
    }
    else if(currrentPage<pages[pages.length-2]){
        return [pages[0],"...",pages[currrentPage-2],pages[currrentPage-1],pages[currrentPage],"...",pages[pages.length-1]];
    }
    else{
        return [pages[0],"...",pages[currrentPage-2],pages[currrentPage-1],pages[currrentPage]];
    }
}

export default getNumbersForPagination;