var data = [{
id:1,
name:'sanni'
},
{
    id:2,
    name:'raju'
},
{
    id:3,
    name:'bhim'
}];


export default function fetchUsersAsync(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve(data),2000)
    })
};