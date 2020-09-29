const io= require("socket.io-client");
var socket =io.connect("http://localhost:3001");
console.log(socket);

let flag=false;
let paths = [];
let redoarr=[];

    board.addEventListener("mousedown",function(e){
        flag=true;
        ctx.beginPath();
        let {top}=getLocation(board);
        //console.log(top);
        ctx.moveTo(e.clientX, e.clientY - top);
    //console.log(`mousedown ${e.clientX} ${e.clientY}`);

        let mdid={
            x:e.clientX,
            y:e.clientY-top,
            color: ctx.strokeStyle,
            width : ctx.lineWidth,
            id:"down"
        }

        paths.push(mdid);
        redoarr=[];

        socket.emit("mousedown",mdid);

});

board.addEventListener("mousemove",function(e){
    if(flag)
    {
        let {top}=getLocation(board);
        ctx.lineTo(e.clientX, e.clientY - top);
        ctx.stroke();

        let mmid={
            x:e.clientX,
            y:e.clientY-top,
            color:ctx.strokeStyle,
            width:ctx.lineWidth,
            id:"move"
        }

        paths.push(mmid);
        socket.emit("mousemove",mmid);
    }
   // console.log(`mousemove ${e.clientX} ${e.clientY}`);
});

board.addEventListener("mouseup",function(e){
    flag=false;
    //console.log(`mouseup ${e.clientX} ${e.clientY}`);
});

function getLocation(board)
{
    let obj=board.getBoundingClientRect();
    //console.log(obj);
    return obj;
}

function undofn() {
    // clear
    //  last point pop
    if (paths.length > 0) {
        ctx.clearRect(0, 0, board.width, board.height);
        let recentpoint=paths.pop();
        redoarr.push(recentpoint);
        redraw();
    }
    // redraw
}

function redofn(){

    if(redoarr.length>0)
    {
        ctx.clearRect(0,0,board.width,board.height);
        paths.push(redoarr.pop());
        redraw();
    }
}

function redraw() {
    for (let i = 0; i < paths.length; i++) {
        let cPoint = paths[i];
        let {
            color, width, id, x, y
        } = cPoint;
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        if (id == "down") {
            ctx.beginPath();
            ctx.moveTo(x, y);
        } else if (id == "move") {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }
}


socket.on("onmousedown",function(point){

    let {
        color,width,id,x,y
    }=point;

    ctx.strokeStyle=color;
    ctx.lineWidth=width;
   
});


socket.on("onmousemove",function(point){

    let {
        color,width,id,x,y
    }=point;

    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.lineTo(x,y);
    ctx.stroke();
});