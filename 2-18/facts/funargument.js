function funn (a,b,c,d)
{
    console.log("-------------------------");
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(arguments);
    console.log(arguments.length);
    console.log('--------------------------------');
}

funn(10,20);
funn(10,20,"hello","by",7,9,0);