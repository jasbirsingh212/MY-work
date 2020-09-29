let fs=require('fs');
let chrome=require('chromedriver');
let swd=require('selenium-webdriver');
const { resolve } = require('path');
let build=new swd.Builder();
let driver=build.forBrowser('chrome').build();

let cfile=process.argv[2];
let mfile=process.argv[3];
let cname=process.argv[4];

let username,password;

let gcrselements,gci=0; 

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
}).then(function(){
    //console.log("resources opened");
    let siteoverlayelementwillbefoundpromise=driver.findElement(swd.By.css("div#siteOverlay"));
    return siteoverlayelementwillbefoundpromise;
}).then(function(soe){

    let willwaitforsotohidepromise=driver.wait(swd.until.elementIsNotVisible(soe));
    return willwaitforsotohidepromise;
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
            resolve();
        }).catch(function(){
            reject();
        })
    })
}
console.log("programm end");
