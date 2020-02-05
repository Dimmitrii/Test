const obj = {
    name : "Vasia1",
    age : "221",
    motherName: "Tania1",
    hasCar: true
}
fetch("http://localhost:3000/datab" ,{
    method : "POST",
    body: JSON.stringify(obj)
    // headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     'Content-Type': 'application/json'
    // },
    // mode : "no-cors",
}
);
// fetch("http://localhost:3000/data" ,{
//     method : "GET",
//     // body: JSON.stringify(obj)
//     // headers: {
//     //     "Access-Control-Allow-Origin": "*",
//     //     'Content-Type': 'application/json'
//     // },
//     // mode : "no-cors",
// }
// )
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
// console.log(data);
// })