let num=[3,8,12,17,24,31,42,67];
let nummap=num.map(function(num){

    if(num%2==0)
    {
        return (num-1);
    }
    return (num+1);
});

// for(let i=0;i<nummap.length;i++)
// {
//     console.log(nummap[i]);
// }

// let filtered=nummap.filter(function(num){

//     return((num%2)!=0);
//     // {
//     //     return num;
//     // }
// });
// function mymapping(num)
// {
// let mynummap=[];
// num.forEach(function(n){

//     if(n%2==0)
//     {
//         mynummap.push(n-1);
//     }
//     else
//     {
//     mynummap.push(n+1);
//     }
// });
// return mynummap;
// }

// function myfilter(mynummap)
// {
// let myfiltered=[];
// mynummap.forEach(function(n){

//     if(n%2!==0)
//     {
//     myfiltered.push(n);
//     }
//     // {
//     //     return num;
//     // }
// });
// return myfiltered;
// }
// //let nummap=num.map(x=>(x%2==0)?(x-1):(x+1))
// let mynummap=mymapping(num);
// let myfiltered=myfilter(mynummap);

// console.log(mynummap);
// console.log(myfiltered);

