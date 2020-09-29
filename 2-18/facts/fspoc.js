let fs= require("fs");
let path=require("path");

function viewasTree(rpath,indent)
{
    let stats=fs.lstatSync(rpath);
    if(stats.isDirectory()==false)
    {
        console.log(indent+path.basename(rpath)+"*");
    }
    else
    {
        console.log(indent+path.basename(rpath));
        let children=fs.readdirSync(rpath);
        for(let i=0;i<children.length;i++)
        {
            let cpath=path.join(rpath,children[i]);
            viewasTree(cpath,indent+"----");
        }


    }

}
//console.log("hi its new test");
viewasTree("./d10"," ");