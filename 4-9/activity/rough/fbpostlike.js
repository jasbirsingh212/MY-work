let fs=require('fs');
let puppeteer=require('puppeteer');
const { start } = require('repl');//??
const { maxHeaderSize } = require('http');//?

let cfile=process.argv[2];
let pagename=process.argv[3];
let nol=process.argv[4];

(async function (){

    const browser=await puppeteer.launch({//?
        headless : false,
        defaultViewport :null,
        slowMo : 40,
        args : ['--start-maximized', '--disable-notifications']
    });

    let content= await fs.promises.readFile(cfile,'utf-8');
    let obj=JSON.parse(content);
    let user=obj.user;
    let password=obj.pwd;
    let url=obj.url;

    let pages= await browser.pages();
    let page=pages[0];
    await page.goto(url,{
        waitUntil : 'networkidle0'//?
    });
    await page.waitFor(2000);
    await page.waitForSelector('#email',{
        visible : true
    });

    await page.type('#email',user);
    await page.type('#pass',password);
    await page.click("#loginbutton");
    await page.waitForSelector('[data-testid=search_input]',{
        visible : true
    });

    await page.type('[data-testid=search_input]',pagename);
    //await page.keyboard('ArrowDown');
    await page.keyboard.press('Enter');
    await page.waitForSelector('div._6v_0._4ik4._4ik5 a',{
         visible : true
     })
    
    await page.click('div._6v_0._4ik4._4ik5 a');
   // console.log("done");
    await page.waitForSelector('[data-key=tab_posts]',{
     visible : true
     });

     await page.click('[data-key=tab_posts]');
     await page.waitForSelector('#pagelet_timeline_main_column ._1xnd > ._4-u2._4-u8');
     let idx=0;

     do{
         let elements=await page.$$('#pagelet_timeline_main_column ._1xnd > ._4-u2._4-u8');
         //console.log(elements.length + elements[0]);
         await serveelement(elements[idx]);
         idx++;
         await page.waitForSelector('.uiMorePagerLoader',{
             hidden : true
         });
     }while(idx<nol);

})();

async function serveelement(el)
{
    let toclick=await el.$('._666k');
    await toclick.click();
}



