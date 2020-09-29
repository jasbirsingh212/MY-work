document.getElementById('add-website').onclick = async function(){

    let url = document.getElementById('website').value;
    console.log(url);

    let message={ 'blockurl' : url};
    await sendurltobackground(message);
}

function sendurltobackground(message){
    return new Promise(function(resolve,reject){
        chrome.runtime.sendMessage(message, function (response){
            console.log(response);
        })
    })
}