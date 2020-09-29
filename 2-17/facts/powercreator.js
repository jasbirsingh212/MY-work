// function powercreator(exp)
// {
//     let powfn=function(base)
//     {
//         return Math.pow(base,exp);
//     }
//     return powfn;
// }

// let squarer = powercreator(2);
// let fiveptwo = squarer(5);
// console.log(fiveptwo);

// let cuber = powercreator(3);
// let fivepcube = cuber(2);
// console.log(fivepcube);

// let penta = powercreator(5);
// let ans= penta(fivepcube);
// console.log(ans);

function powercreator()
 {
    let powfn=function(base,exp)
    {
        return Math.pow(base,exp);
    }
    return powfn;
}

let penta=powercreator();
let ans=penta(8,3);
console.log(ans);