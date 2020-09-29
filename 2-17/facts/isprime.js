let num=13;
for(let div=2;div*div<=num;div++)
{
    if(num%div==0)
    {
        console.log(num+"  is not prime ");
        return;
    }
    //div++;
}

console.log(num+" is prime ");