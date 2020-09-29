let fs=require('fs');

function handlesuccess(content)
{
    console.log('success  - ' + content.length);

}

function handlefaliure(fm)
{
    console.log('faliure  - ' + fm);
    
}

console.log('10');

//async call will only remeber the  name of file and function to call
//later and start the work in background

let rp= fs.promises.readFile('./VID_20200209_093843.mp4');
rp.then(handlesuccess).catch(handlefaliure);

console.log('20');