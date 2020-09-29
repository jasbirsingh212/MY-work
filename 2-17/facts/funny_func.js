function funny()
{
    return "Ha Ha";
}
let abc=funny();
console.log(abc);
console.log(typeof abc);

let funvar=funny;
let def=funvar();
console.log(def+" "+ typeof def);
console.log(typeof funvar);
console.log(typeof funny);
console.log(funny);
console.log(funvar==funny);
console.log(funvar +" "+typeof funvar);