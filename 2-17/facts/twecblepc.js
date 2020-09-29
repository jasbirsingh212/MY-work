function powercreator(eo)
{
    let powfn=function(base)
    {
        return Math.pow(base,eo.data);
    }
    return powfn;
}
let obj={
    data:0
};
obj.data=2;
let squarer = powercreator(obj);
let fiveptwo = squarer(5);
console.log(fiveptwo);

obj.data=(3*5);
//let five = squarer(2);
console.log(squarer(5));
//function approch not done