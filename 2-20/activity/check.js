
let request= require('request');
let cheerio= require('cheerio');
let fs= require('fs');
let seriesid=process.argv[2];
let scoreid=process.argv[3];
let url=`https://www.espncricinfo.com/series/${seriesid}/scorecard/${scoreid}/`

request(url,function(error,response,html){
    if(error==null && response.statuscode==200)
    {
        let co=cheerio.load(html)
        console.log(html);
    }
});
