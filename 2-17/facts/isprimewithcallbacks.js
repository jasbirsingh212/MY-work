
var cp=require('child_process');

function isprime(num,succesCB,faliureCB)
{
        for(let div=2;(div*div)<=num;div++)
        {
            if(num%div==0)
            {
                faliureCB();
                return;
            }

        }
        succesCB();
}
function s(){
    console.log("sucess");
    cp.exec('start chrome : https://www.youtube.com/watch?v=tlqqOgXXqsg');
}
function f(){                                   //to open paint cmd : mspaint,iexplore,notepad,web.whatsapp.com,youtube.com
    console.log("faliure");
    cp.exec('start chrome : https://www.pepcoding.com/#');
}

isprime(23, s , f);


//user1
// function u1Happy(num)
// {
//     console.log(`${num} is prime and u1 is happy`);
// }

// function u1Sad(num)
// {
//     console.log(`${num} is prime and u1 is sad`);
// }
//let a=21;
//isprime(21, f1, f2);
// isprime(a, function(num)
// {
//     console.log(" sucess ");
//     //exec('open chrome https://www.youtube.com/watch?v=tlqqOgXXqsg');
// }, function(num)
// { console.log(" faliure ");
   // exec('open YouTube https://www.youtube.com/watch?v=D8HDFn_PgE4');

//});
// let a=17;
// console.log(`is ${a} prime?` + " "+ isprime(a));
// let b=12;
// console.log(`is ${b} prime?` + " "+ isprime(b));

// function s(){
//     console.log("sucess");
//     cp.exec('chrome  google.com');
// }
// function f(){
//     console.log("faliure");
//     cp.exec('chrome  facebook.com');
// }

// isprime(17, s , f);
