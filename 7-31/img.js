function uploadimage()
{
    let fileinput=document.getElementById("file-upload");
    fileinput.click();

    fileinput.addEventListener("change",function(){
        let imgobj=fileinput.files[0];
        console.log(imgobj);

        const objectURL=window.URL.createObjectURL(imgobj);
        let img=document.createElement("img");
        img.setAttribute("class","uploaded-img");
        img.setAttribute("src",objectURL);
        let textbox=createbox();
        textbox.appendChild(img);
        //document.body.appendChild(img);
    })
}

function downloadimg()
{
    let a =document.createElement("a");
    let url=board.toDataURL("image/png");
    a.download = "file.png";
    a.href =url;

    a.click();
    a.remove();
}