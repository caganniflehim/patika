const users=[
    {
    Name:"mehmet",
    age:10,
   },
   {
    Name:"mehmet",
    age:29,
   },
   {
    Name:"sevilay",
    age:31,
   },
];

/*push map find filter some every includes*/ 

//push
/*users.push('esma');
users.push("çağan");
console.log(users);
*/
//map
/*users.map((item)=>{
    console.log(item);
})
*/
//find
/*const result=users.find((item)=>item.Name === "mehmet" && item.age>20);
console.log(result);
*/

//filter
/*const filtered=users.filter((item)=> item.Name==="mehmet"&& item.age<=20);
console.log(filtered);
*/
//sum
/*const some=users.some((item)=> item.age===11);
console.log(some);
*/
//every
/*const every =users.every((item)=> item.age>20)
console.log(every);
*/
//includes
const meyveler=["elma","armut","muz"];

const isIncluded=meyveler.includes("muz");
console.log(isIncluded);



