function isprime(num)
{
//let num=13;
for(let div=2;div*div<=num;div++)
{
    if(num%div==0)
    {
        //console.log(num+"  is not prime ");
        return false;
    }
    //div++;
}
return true;
//console.log(num+" is prime ");
}

let a=17;
console.log(`is ${a} prime?` + " "+ isprime(a));
let b=12;
console.log(`is ${b} prime?` + " "+ isprime(b));