let fs=require('fs');

console.log('10');
//sync function will do the main task of reading in main thread,
//thus starving the cpu from actual work
//cpu is waiting for read to finish
let content=fs.readFileSync('./VID_20200209_093843.mp4').toString();

console.log(content.length);

console.log('20');