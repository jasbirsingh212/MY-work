//const { promises } = require("fs");

//console.log("in background");
let allblockedurls=[];
const Time_allowed_per_day=10;

//getting current tab
//promisify

function doincurrenttab(){
    return new Promise(function (resolve,reject){
     chrome.tabs.query(
            {currentWindow : true, active : true},
            function(tabArray){resolve(tabArray[0]);}
        );
    })
}


function closetab(tabid)
{
    return new Promise(function(resolve,reject){
        chrome.tabs.remove(tabid,function(){
            resolve();
        })
    })
}

function savetostorage(key,value){
    return new Promise(function(resolve,reject){
        chrome.storage.sync.set({[key] : value}, function(){
                resolve();
        })
    })
}

function getfromstorage(key){
    return new Promise(function (resolve,reject){
        chrome.storage.sync.get([key],function(result){
            resolve(result[key]);
        })
    })
}


function getallkeys(){
    return new Promise (function (resolve,reject){
        chrome.storage.sync.get(null,function (items){
            var allkeys=Object.keys(items);
            console.log(allkeys);
            resolve(allkeys);
        })
    })
}


function setbadgetext(text){
    return new Promise(function (resolve,reject){
        chrome.browserAction.setBadgeText({text : text},function(){
            resolve();
        })
    })
}
// get current url hostname
function gethostname(url)
{
    let host=new URL(url).hostname;
    return host;
}

async function starter() {

    await savetostorage('www.facebook.com',0);

    allblockedurls=await getallkeys();

    //polling chrome api to get current tab every second
(async function polltogetcurrenttab(){
    let tab=await doincurrenttab();

    if(tab!==undefined)
    {
        let url=gethostname(tab.url);

        if(allblockedurls.indexOf(url) !=-1){

            let timespent=await getfromstorage(url);
            console.log(url +  " , " +timespent);

            await setbadgetext((Time_allowed_per_day - timespent) + "");
            if(timespent >= Time_allowed_per_day){
                await closetab(tab.id);
            }
            else{
                await savetostorage (url,timespent+1);
            }
        }
        else{
            await setbadgetext('');
        }
    }

    setTimeout(polltogetcurrenttab,1000);
})();

}

starter();


chrome.runtime.onMessage.addListener(
    async function (request,sender,sendresponse){
        if(request.blockurl != undefined){

            await savetostorage (request.blockurl,0);
            allblockedurls.push(request.blockurl);
        }
    });




