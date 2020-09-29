//console.log(process.argv);
//console.log(process.argv[2]);

// function view()
// {
//     switch(arguments[1])
//     {
//         case "-l":
//             console.log("show as list");
//             break;
//         case "-t":
//             console.log("show as tree");
//             break;
//         case "-h":
//             console.log("show as history");
//             break;
//         default:
//             displayIA();

//     }
// }

let view= require(".\\tpp\\command\\view.js");
let treefy= require(".\\tpp\\command\\treefy.js");
let untreefy= require(".\\tpp\\command\\untreefy.js");
let monitor= require(".\\tpp\\command\\monitor.js");
let help= require(".\\tpp\\command\\help.js");
//let displayerror= require(".\\tpp\\command\\utilities\\handlerror.js");
switch(process.argv[2])
{
    case 'view':
        view(process.argv[3],process.argv[4]);
        //console.log("in view case");
        break;
    case 'treefy':
        treefy(process.argv[3],process.argv[4]);
        //console.log("in treefy case");
        break;
    case 'untreefy':
        untreefy(process.argv[3],process.argv[4]);
        //console.log("in untreefy case");
        break;
    case 'monitor':
        monitor(process.argv[3],process.argv[4]);
        //console.log("in monitor case");
        break;
    case 'help':
       help(process.argv[3],process.argv[4]);
        //console.log("in help case");
        break;
    default:

        //console.log("in default case");
        displayerror();
}

function displayerror()
{
    console.log("in dafault");
}