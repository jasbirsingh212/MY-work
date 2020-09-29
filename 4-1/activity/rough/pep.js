let cd=require("chromedriver");
let sd=require("selenium-webdriver");
let browser=new sd.Builder().forBrowser('chrome').build();

function login()
{

    let pageload=browser.get('http://www.pepcoding.com/login');
    pageload.then(function(){
        let username=browser.findElement(sd.By.css('input[type=email]')).sendKeys('jasbir212singh@gmail.com');

        return username;
    }).then(function(){
        let pwdenter=browser.findElement(sd.By.css('input[type=password]')).sendKeys('jassi@123#');

        return pwdenter;
    }).then(function(){
        let buttonclick=browser.findElement(sd.By.css('button[type=submit]')).click();
        
        return buttonclick;
    }).then(function(){
        console.log('button clickedd by computer you got logged in');
    });

}
login();
console.log("this is att");