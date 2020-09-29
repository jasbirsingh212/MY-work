//solution -1 sleep main thread not reliable;
function sleepSync(duration){

    let curr=Date.now();
    let limit =curr + duration;
    while(curr<limit)
    {
        curr=Date.now();
    }
}
console.log("going to sleep");
sleepSync(10000);
console.log("coming to sleep");