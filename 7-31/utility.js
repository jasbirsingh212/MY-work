function createbox()
{
    let stickypad= document.createElement("div");
    let navbar= document.createElement("div");
    let close= document.createElement("div");
    let minimize= document.createElement("div");
    let textbox= document.createElement("div");
//    let textarea= document.createElement("div");
    //let stickypad= document.createElement("div");

    stickypad.setAttribute("class","sticky-pad");
    navbar.setAttribute("class","navbar");
    close.setAttribute("class","close");
    minimize.setAttribute("class","minimize");
    textbox.setAttribute("class","textbox");

    stickypad.appendChild(navbar);
    stickypad.appendChild(textbox);
    navbar.appendChild(minimize);
    navbar.appendChild(close);
    //textbox.appendChild(textarea); 
    document.body.appendChild(stickypad);  

     
    close.addEventListener("click", function(){
        close.parentNode.parentNode.remove();
    })

    let flag =true;

    minimize.addEventListener("click",function(){

        if(flag == true)
        {
            textbox.style.display="none";
        }
        else{
            textbox.style.display="block";
        }

        flag=!flag;
    })

    let isstickydown =false;
    let initialx;
    let initialy;

    navbar.addEventListener("mousedown",function stickydown(e){

        if(e.target ==e.currentTarget)
        {
            initialx=e.clientX;
            initialy=e.clientY;
            isstickydown=true;
        }
    })

    navbar.addEventListener("mousemove", function stickymove(e){

        console.log(e.target);
        console.log(e.currentTarget);

        if(e.target == e.currentTarget)
        {
            if(isstickydown)
            {
                let finalx= e.clientX;
                let finaly=e.clientY;
                let diffx=finalx-initialx;
                let diffy=finaly -initialy;

                let {top,left}=stickypad.getBoundingClientRect();
                stickypad.style.top=(top+diffy)+"px";
                stickypad.style.left=(left+diffx)+"px";
                initialx=finalx;
                initialy=finaly;


            }
        }
    })

    navbar.addEventListener("mouseup",function stickyup(e){
        if(e.target == e.currentTarget)
        {
            isstickydown=false;
        }
    })

    navbar.addEventListener("mouseleave",function stickyup(e){
        if(e.target == e.currentTarget)
        {
            isstickydown=false;
        }
    })


    return textbox;
}