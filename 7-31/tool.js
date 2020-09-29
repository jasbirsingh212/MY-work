//const { contextBridge } = require("electron");

let activetool="pencil";
let penciloptions=document.getElementById("p-options");
let eraseroptions=document.getElementById("e-options");
let tools=document.querySelectorAll(".tool-img");

for(let i=0;i<tools.length;i++)
{
    tools[i].addEventListener("click",function(e){

     //   console.log(e);

        //element on which event occured

        let elem=e.currentTarget;

        let toolname=elem.getAttribute("id");

        if(toolname == "eraser")
        {
            if(activetool == "eraser")
            {
                eraseroptions.classList.add("show");
            }
            else{
                activetool ="eraser"
                penciloptions.classList.remove("show");
                ctx.strokeStyle="white";
            }
        }
        else if(toolname == "pencil")
        {
            if(activetool == "pencil")
            {
               penciloptions.classList.add("show"); 
            }
            else{
                activetool = "pencil";
                eraseroptions.classList.remove("show");
                ctx.strokeStyle="black";
            }
        }
        else if (toolname == "sticky")
        {
            createsticky();
        }
        else if(toolname == "upload")
        {
            uploadimage();
        }
        else if (toolname == "download")
        {
            downloadimg();
        }
        else if(toolname == "undo")
        {
            undofn();
        }
        else if(toolname == "redo")
        {
            redofn();
        }

    })
}

function handlecolorchange(color){
    ctx.strokeStyle=color;
}

let allslider=document.querySelectorAll(".slider");
for(let i=0;i<allslider.length;i++)
{
    allslider[i].addEventListener("change",function(e){

     //   console.log(e);

        //element on which event occured

        let elem=e.currentTarget;
        let newsize=elem.value;
        ctx.lineWidth=newsize;

    })
}




