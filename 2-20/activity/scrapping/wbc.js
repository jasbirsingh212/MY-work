let request= require('request');
let cheerio= require('cheerio');
let fs= require('fs');
let seriesid=process.argv[2];
let matchid=process.argv[3];
let url=`https://www.espncricinfo.com/series/${seriesid}/matchid/${matchid}`

request(url,function(error,response,html){
    if(error==null && response.statusCode==200)
    {
        let co=cheerio.load(html);
        let wbc=co(co('.content.match-commentry_content .commentry-item.pre').get(0)).find('.description').text();
        console.log(wbc);

    }
});
