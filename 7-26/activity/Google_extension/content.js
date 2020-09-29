//deals with the page 
console.log("In content");


let filenames=[
    
    "/images/Screenshot (110).png",
    "/images/Screenshot (150).png",
    "/images/Screenshot (157).png",
    "/images/Screenshot (158).png",
    "/images/Screenshot (159).png",
    "/images/Screenshot (160).png"
];

function dowork()
{

    let images=document.getElementsByTagName('img');
    console.log(images);

    for(let img of images)
    {
        let idx=Math.floor(Math.random() * filenames.length);
        let path=chrome.extension.getURL(filenames[idx]);
        console.log(path);
        img.src=path;
    }

}

chrome.runtime.onMessage.addListener(function(message,sender,sendresponce){
    if(message.data === true)
    {
        dowork();
    }
});