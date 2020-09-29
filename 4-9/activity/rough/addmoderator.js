let fs=require("fs");
let cd=require('chromedriver');
let swd=require('selenium-webdriver');
let bldr=new swd.Builder();
let driver=  bldr.forBrowser('chrome').build();

let cfile=process.argv[2];
let usermod=process.argv[3];

( async function(){

    try{

        await driver.manage().setTimeouts({
            implicit :10000,
            pageLoad : 10000
        }) 

    let content=await fs.promises.readFile(cfile, 'utf-8');
    let obj=JSON.parse(content);
    let user=obj.user;
    let pwd=obj.pwd;
    let url=obj.url;

    await driver.get(url);
    let usel = await driver.findElement(swd.By.css("#input-1"));
    let pwdel= await driver.findElement(swd.By.css ("#input-2"));

    await usel.sendKeys(user);
    await pwdel.sendKeys(pwd);

    let btnclick=await driver.findElement(swd.By.css(".auth-button"));
    await btnclick.click();

    let adminbtn= await driver.findElement(swd.By.css("a[data-analytics=NavBarProfileDropDownAdministration]"));
    let adminurl= await adminbtn.getAttribute("href");

    await driver.get(adminurl);

    let managetab= await driver.findElements(swd.By.css("ul.nav-tabs li"));
    await managetab[1].click();

    let curl=await driver.getCurrentUrl();
    console.log(curl);

    let qidx=0;
    let questionelement= await getquestionelement(curl,qidx);
    while(questionelement != undefined)
    {
        await handlequestion(questionelement);
        qidx++;

        questionelement= await getquestionelement(curl,qidx);
    }



    }
    catch(err)
    {
        console.log(err);
    }
})();

async function getquestionelement(curl,qidx)
{   
    await driver.get(curl);

    let pidx= parseInt(qidx/10);
    qidx=qidx%10;
    console.log(pidx +"  "+ qidx);


    let paginationbtns =await driver.findElements(swd.By.css(".pagination li"));
    let nextpagebtn=paginationbtns[paginationbtns.length-2];
    let classonnextpagebtn=await nextpagebtn.getAttribute("class");
    for(let i=0;i<pidx;i++)
    {
        if(classonnextpagebtn!='disabled')
        {
        await nextpagebtn.click();

        paginationbtns =await driver.findElements(swd.By.css(".pagination li"));
        nextpagebtn=paginationbtns[paginationbtns.length-2];
        classonnextpagebtn=await nextpagebtn.getAttribute("class");
        }
        else
        {
            return undefined;
        }
    }

    let questionelements= await driver.findElements(swd.By.css(".backbone.block-center"));
    if(qidx<questionelements.length)
    {
        return questionelements[qidx];
    }
    else
    {
        return undefined;
    }


        

}

async function handlequestion(questionelement)
{
    let qurl = await questionelement.getAttribute('href');
    console.log(qurl);
    await questionelement.click();

    await driver.wait(swd.until.elementLocated(swd.By.css("span.tag")));

    let moderatortab= await  driver.findElement(swd.By.css("li[data-tab=moderators]"));
    await moderatortab.click();

    let moderatortextbox= await driver.findElement(swd.By.css('#moderator'));
    await moderatortextbox.sendKeys(usermod);
    await moderatortextbox.sendKeys(swd.Key.ENTER);

    let btnsave= await driver.findElement(swd.By.css('.save-challenge'));
    await btnsave.click();

}

// //solution -1 sleep main thread not reliable;
// function sleepSync(duration){

//     let curr=Date.now();
//     let limit =curr + duration;
//     while(curr<limit)
//     {
//         curr=Date.now();
//     }
// }
// sleepSync(10000);
// solution -2 jugaad approach;
// solution -3 tag read /load approach; 