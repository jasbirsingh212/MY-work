let fs=require('fs');
let puppeteer=require('puppeteer');
const { PageLoadStrategy } = require('selenium-webdriver/lib/capabilities');

let cfile=process.argv[2];
let useradd=process.argv[3];

(async function(){

    const browser= await puppeteer.launch({     // Search for Syntax
        headless :false,
        defaultViewport :null,
        slowMo : 40,
        args:['--start-maximized' , '--disable-notifications']
    });

    let content=await fs.promises.readFile(cfile, 'utf-8');
    let obj=JSON.parse(content);
    let user=obj.user;
    let pwd=obj.pwd;
    let url=obj.url;

    let pages=await browser.pages();
    let page=pages[0];
    page.goto(url,{
        waitUntil :"networkidle0"
    });
    await page.waitForSelector('.auth-button',{
        visible :true
    });

    await page.waitForSelector('#input-1', {visible: true, timeout: 3000 });
    await page.waitForSelector('#input-2', {visible: true, timeout: 3000 });
    
    await page.type('#input-1', user);
    await page.type('#input-2', pwd);

    await page.waitFor(2000);
    await page.click(".auth-button");
    await page.waitForNavigation({waitUntil : 'networkidle0'});
    await page.waitForSelector('.profile-menu .ui-icon-chevron-down.down-icon',{
        visible : true
    });

    await page.click('.profile-menu .ui-icon-chevron-down.down-icon');
    await page.click('[data-analytics=NavBarProfileDropDownAdministration]');
    await page.waitForNavigation({waitUntil : "networkidle0"})
    await page.waitForSelector('ul.nav-tabs',{
        visible : true
    })

    let managelis= await page.$$('ul.nav-tabs li');
    await managelis[1].click();
    await page.waitForSelector('.pagination li', {
        visible: true
    });

    let curl=page.url();

    let qidx=0;
    let questionelement=await getquestionelement(curl,qidx,page);
    while(questionelement!==undefined)
    {
        await handlequestion(questionelement,page);
        qidx++;
        questionelement= await getquestionelement(curl,qidx,page);

    }
})();

async function getquestionelement(curl,qidx,page)
{
    await page.goto(curl,{waitUntil : 'networkidle0'});
    await page.waitForSelector('ul.nav-tabs',{
        visible : true
    });

    let pidx=parseInt (qidx /10);
    qidx=qidx%10;
    console.log(pidx +" "+ qidx);

    await page.waitForSelector('.pagination li');
    let paginationbtns = await page.$$('.pagination li');
    console.log(paginationbtns.length);
    let nextpagebtn=paginationbtns[paginationbtns.length - 2];
    let classonnextpagebtn= await page.evaluate(function(el) {
        return el.getAttribute('class')
    },nextpagebtn);

    for(let i=0;i<pidx;i++)
    {
        if(classonnextpagebtn !== 'disabled')
        {
            await nextpagebtn.click();
            await page.waitForSelector('.pagination li',{
                visible :true
            })

            paginationbtns = await page.$$('.pagination li');
             nextpagebtn=paginationbtns[paginationbtns.length-2];
             classonnextpagebtn= await nextpagebtn.evaluate(function(el){
                return el.getAttribute('class')
            },nextpagebtn); 
        }
        else
        {
            return undefined;
        }
    }


    let questionelements= await page.$$('.backbone.block-center');
    if(qidx<questionelements.length)
    {
        return questionelements[qidx];
    }
    else
    {
        return undefined;
    }

}

async function handlequestion(questionelement,page)
{
    await questionelement.click();
    await page.waitForNavigation({waitUntil : 'networkidle0'});
    await page.waitForSelector('span.tag',{

        visible : true
    })

    await page.click('li[data-tab=moderators]');
    await page.waitForSelector('#moderator',{
        visible :true
    });

    await page.type('#moderator', useradd);
    await page.keyboard.press('Enter');
    await page .click('.save-challenge');
} 

