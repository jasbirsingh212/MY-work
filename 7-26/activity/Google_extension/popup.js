console.log("in popup ");

document.getElementById("button").onclick = function(){
    console.log("button clicked");

    let queryInfo ={
        active : true,
        currentWindow : true
    }

    chrome.tabs.query(queryInfo,function(tabs){
        console.log(tabs[0].id);

        let msg={
            data :true
        }

        chrome.tabs.sendMessage(tabs[0].id,msg,function(response){

        });
    });
}