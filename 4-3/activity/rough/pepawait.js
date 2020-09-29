let fs= require("fs");
let cd=require("chromedriver");
let swd=require("selenium-webdriver");
let bldr=new swd.Builder();
let driver= bldr.forBrowser("chrome").build();

let  cfile= process.argv[2];
let  mfile= process.argv[3];
let cname=process.argv[4];

let username ,password;

(async function(){

    try{

    let credentials=await fs.promises.readFile(cfile,'utf-8');
    let obj=JSON.parse(credentials);
    username=obj.user;
    password=obj.pwd;
    let logurl=obj.url;
    console.log(username);
    console.log(password);

    await driver.get(logurl);
    
    console.log("url opened");
    let userip=await driver.findElement(swd.By.css("input[type=email]"));
    await userip.sendKeys(username);
    console.log("user name entered");
    let passip= await driver.findElement(swd.By.css("input[type=password]"));
    await passip.sendKeys(password);
    console.log("pasword entered");


    let btnclick= await driver.findElement(swd.By.css("button[type=submit]")); 
    await btnclick.click();
    console.log("logged in");

    let fresource = await driver.findElement(swd.By.css("a[target =_blank]"));
    let resource=await fresource.getAttribute('href');
    await fresource.click();

    console.log("resousces opened");

    // let mycourse= await driver.findElement(swd.By.css(""));
    // let crs= await mycourse.getAttribute('href');
    // await mycourse.click();

    
    console.log("placement program opened");


    }
    catch(err)
    {
        console.log(err);
    }
})();


