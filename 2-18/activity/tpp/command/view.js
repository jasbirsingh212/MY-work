
let fs=require("fs");
let path=require("path");
//let displayerror=require(".\\tpp\\command\\utilities\\handlerror.js");
module.exports=function view()
{
    switch(arguments[1])
    {
        case "-l":
            viewaslist(arguments[0])
            //console.log("show as list");
            break;
        case "-t":
            viewastree(arguments[0]," ")
            //console.log("show as tree");
            break;
        case "-h":
            viewashistory(arguments[0])
            //console.log("show as history");
            break;
        default:
            displayerror();

    }
}

function displayerror()
{
    console.log("in dafault");
}

// function viewaslist(src)
// {
//     console.log(`view ${src} as a List`);
// }

// function viewastree(src)
// {
//     console.log(`view ${src} as a Tree`);
// }

function viewaslist(rpath)
{
    let stats=fs.lstatSync(rpath)
    if(stats.isDirectory()==false)
    {
        console.log(rpath+"*");
    }
    else
    {
        console.log(rpath);
        let children=fs.readdirSync(rpath);
        for(let i=0;i<children.length;i++)
        {
            let cpath=path.join(rpath,children[i]);
            viewaslist(cpath);
        }


    }

}


function viewastree(rpath,indent)
{
    let stats=fs.lstatSync(rpath)
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
            viewastree(cpath,indent+"----");
        }


    }

}

function viewashistory(src)
{
    console.log(`view ${src}'s history`);
}