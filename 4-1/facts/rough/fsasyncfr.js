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

fs.readFile('./VID_20200209_093843.mp4',function(error,content){
    if(error)
    {
        handlefaliure(error);
    }
    else{
        handlesuccess(content);
    }
});

console.log('20');