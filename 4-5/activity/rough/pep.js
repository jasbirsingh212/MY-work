let fs=require('fs');
let chrome=require('chromedriver');
let swd=require('selenium-webdriver');
let path = require('path');
let build=new swd.Builder();
let driver=build.forBrowser('chrome').build();

let cfile=process.argv[2];
let mfile=process.argv[3];
let cname=process.argv[4];

let username,password;

let gcrselements,gci=0,gcodearea,gcontent; 
let gtestarea;
let gcrurl;
let cfilewillbereadpromise=fs.promises.readFile(cfile);
cfilewillbereadpromise.then(function(content){
          let credentials=JSON.parse(content);
          username=credentials.un;
          password=credentials.pwd;

         // let loginpagewillbeloadedpromise=driver.get("https://www.pepcoding.com/login");
        //  return loginpagewillbeloadedpromise;
}).then(function(){
    let towillbesetpromise=driver.manage().setTimeouts({
        implicit :10000
    });
    return towillbesetpromise;
}).then(function(){

    let loginpagewillbeloadedpromise=driver.get("https://www.pepcoding.com/login");
    return loginpagewillbeloadedpromise;

}).then(function(){
    let unewillbefoundpromise =driver.findElement(swd.By.css('input[type=email]'));
    let pwdewillbefoundpromise=driver.findElement(swd.By.css('input[type=password]'));
    let bothelementswillbefoundpromise=Promise.all([unewillbefoundpromise,pwdewillbefoundpromise]);
    return bothelementswillbefoundpromise;
}).then(function(elements){
    let usernamewillbeenteredpromise=elements[0].sendKeys(username);
    let pwdwillbeenteredpromise=elements[1].sendKeys(password);
    let bothvalueswillbeenteredpromise=Promise.all([usernamewillbeenteredpromise,pwdwillbeenteredpromise]);
    return bothvalueswillbeenteredpromise;
}).then(function (){

    let btnsubmitwillbefoundpromise=driver.findElement(swd.By.css('button[type=submit]'));
    return btnsubmitwillbefoundpromise;

}).then(function(btnsubmit){

    let btnsubmitwillbeclickedpromise=btnsubmit.click();
    return btnsubmitwillbeclickedpromise;
}).then(function(){
 //console.log("logged in");
 let rlinkwillbefoundpromise=driver.findElement(swd.By.css("div.resource  a"));
 return rlinkwillbefoundpromise;
}).then(function(rlinkelement){
    let rlinkhrefwillbereadpromise=rlinkelement.getAttribute('href');
    return rlinkhrefwillbereadpromise;
}).then(function(rlinkhref){
    let rpagewillbeloadedpromise=driver.get(rlinkhref);
    return rpagewillbeloadedpromise;
}).then(function(waitforoverlaytohide){
    //console.log("resources opened");
    
}).then(function(){
    let courseelementswillbefoundpromise=driver.findElements(swd.By.css('h2.courseInput'));
    return courseelementswillbefoundpromise;
}).then(function(crselements){
    gcrselements=crselements;
//console.log(gcrselements);
    let cetextpromises= [];

for(let i=0;i<gcrselements.length;i++)
{
    cetextpromises.push(gcrselements[i].getText());
}

let combinedtextpromiseforallcourseelements=Promise.all(cetextpromises);
return combinedtextpromiseforallcourseelements;

}).then(function(cetexts){

//console.log("123");
    for(let i=0;i<cetexts.length;i++)
    { //console.log("789");
        if(cname === cetexts[i])
        {
         // console.log("in if")
            gci=i;
            break;
        }
       
    }

let courseelementswillbeclickedpromise=gcrselements[gci].click();
 return courseelementswillbeclickedpromise;
}).then(function(){
let urlwillberetrievedpromise=driver.getCurrentUrl();
return urlwillberetrievedpromise;
}).then(function(url){
gcrurl=url;
let metadatafilewillbereadpromise=fs.promises.readFile(mfile);
return metadatafilewillbereadpromise;
}).then(function(content){

    metadata=JSON.parse(content);
    //console.log(metadata);
    return Promise.resolve(true);
}).then(function(){
    let pqp=solvequestion(metadata.questions[0]);
    for(let i=1;i<metadata.questions.length;i++)
    {
        pqp=pqp.then(function(){
            let cpq=solvequestion(metadata.questions[i]);
            return cpq;
        })
    }
    return pqp;
}).then(function(){
    console.log("well done");
}).catch(function(error){
    console.log(error);
})

function solvequestion(questions){
    return new Promise(function(resolve,reject){
        let questionwillbeloadedpromise=driver.get(questions.url);
        questionwillbeloadedpromise.then(function(){
            let editiortabwillbeselectedpromise=driver.findElement(swd.By.css(" .editorTab .lang"));
            return editiortabwillbeselectedpromise;
    }).then(function(editorTab){
        let editorwillbeclickedpromise= editorTab.click();
        return editorwillbeclickedpromise;
    }).then(function(){
        let textareawillbeselected=driver.findElement(swd.By.css(".ace_text-input"));
        return textareawillbeselected;
    }).then(function(codearea){
        gcodearea=codearea;
        let ctrlapromise=codearea.sendKeys(swd.Key.CONTROL + "a");
        return ctrlapromise;
    }).then(function(){
        let deletepromise=gcodearea.sendKeys(swd.Key.DELETE);
        return deletepromise;
    }).then(function(){
        let codefilewillbereadpromise=fs.promises.readFile(path.join(questions.path,"main.java"));
        return codefilewillbereadpromise;
    }).then(function(content){
        content=content+"";
        gcontent=content;
        let testinputareawillbeselected=driver.findElement(swd.By.css("#customInput"));
        return testinputareawillbeselected;
    }).then(function(testarea){
        gtestarea=testarea;
        let codewillbesubmittedpromise=testarea.sendKeys(gcontent);
        return codewillbesubmittedpromise;

    }).then(function(){
        let ctrlapromise=gtestarea.sendKeys(swd.Key.CONTROL + "a");
        return ctrlapromise;
    }).then(function(){
        let ctrlxpromise=gtestarea.sendKeys(swd.Key.CONTROL + "x");
        return ctrlxpromise;
    }).then(function(){
        let ctrlvpromise=gcodearea.sendKeys(swd.Key.CONTROL + "v");
        return ctrlvpromise;
    }).then(function(){
        let submitwillbeselectedpromise=driver.findElement(swd.By.css("#submitCode"));
        return submitwillbeselectedpromise;
    }).then(function(submitbtn){
        let submitbtnclickpromise=submitbtn.click();
        return submitbtnclickpromise;
    }).then(waitforoverlaytohide).then(function(){
        let litestcasewillbefoundpromise=driver.findElements(swd.By.css('#testCases'));
        return litestcasewillbefoundpromise;
    }).then(function(litestcases){
        let tchiddenelementswillbereadpromisearr=[];
        for(let i=0;i<litestcases.length;i++)
        {
            let tchiddenelementswillbereadpromise=litestcases[i].findElements(swd.By.css("input[type=hidden]"));
            tchiddenelementswillbereadpromisearr.push(tchiddenelementswillbereadpromise);
        }
        return Promise.all(tchiddenelementswillbereadpromisearr);
    }).then(function(tchiddenelements){
        let tcvaluewillbereadpromisearr=[];
        for(let i=0;i<tchiddenelements.length;i++)
        {
            tcinputwillbereadpromise=tchiddenelements[i][0].getAttribute('value');
            tceowillbereadpromise=tchiddenelements[i][1].getAttribute('value');
            tcaowillbereadpromise=tchiddenelements[i][2].getAttribute('value');
            let combinedpromise=Promise.all([tcinputwillbereadpromise,tceowillbereadpromise,tcaowillbereadpromise]);
            tcvaluewillbereadpromisearr.push(combinedpromise);
        }
        return Promise.all(tcvaluewillbereadpromisearr);
    }).then(function(testcases){
        let tcobj=testcases.map(function(testcase){
            return {
                input:testcase[0],
                exo:testcase[1],
                aco:testcase[2]
            }
        });
        let tcwillbewrittentofilepromise=fs.promises.writeFile(path.join(questions.path,"tc.json"),JSON.stringify(tcobj));
        return tcwillbewrittentofilepromise;
    }).then(function(){
        console.log("pasted");
    }).then(function(){
        resolve ();
     }).catch(function(err){
         reject(err);
     })
})

//openquestion function to click module click lecture click question for each question 

}
console.log("programm end");

function waitforoverlaytohide()
{
    return new Promise (function(resolve,reject){

        let siteoverlayelementwillbefoundpromise=driver.findElement(swd.By.css("div#siteOverlay"));
     siteoverlayelementwillbefoundpromise.then(function(soe){
    
        let willwaitforsotohidepromise=driver.wait(swd.until.elementIsNotVisible(soe),10000);
    willwaitforsotohidepromise
     .then(function(){
         resolve();
    }).catch(function(err){
        reject(err)
    })
})

})

}