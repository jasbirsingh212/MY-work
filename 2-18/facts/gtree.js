let ls=0;
function size(node)
{
    if(node==null)
    {
        return 0;
    }
    for(let i=0;i<node.children.length;i++)
    {
        ls=size(node.children[i]);

    }
    return ls+1;
}

function sum()
{

}

function max()
{

}

function min()
{

}
function display(node)
{
    let str=node.data+ "- >";

    for(let i=0;i<node.children.length;i++)
    {
        str+=node.children[i].data+",";
    }
console.log(str+=".");

    for(let i=0;i<node.children.length;i++)
    {
        display(node.children[i]);
    }
}


let root={

    data:10,
    children:[{
        data:20,
        children:[{
            data:50,
        children:[]
        },{
            data:60,
        children:[]
        }]
    },{
        data:30,
        children:[{
            data:70,
        children:[]
        },{
            data:80,
        children:[{
            data:110,
        children:[]
        },{
            data:120,
        children:[]
        }]
        },{
            data:90,
        children:[]
        }]
    },{
        data:40,
        children:[{
            data:100,
            children:[]
        }]
    }]
}

display(root);
console.log(size(root));