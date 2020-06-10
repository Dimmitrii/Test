//without replications/без повторений
const arrOfObjFilterByProp = (arr,prop)=>{
    let filteredArrByProp = [];
    arr.map(item=>{
       return filteredArrByProp.push(item[prop]);
    })
    filteredArrByProp = filteredArrByProp.filter(function(item,index,arr){return arr.indexOf(item)===index});
    filteredArrByProp.sort();
    return filteredArrByProp;
}

export default arrOfObjFilterByProp;