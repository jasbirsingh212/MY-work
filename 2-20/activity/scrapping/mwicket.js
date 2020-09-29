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
        let rows=co('.scorecard-section.bowling tbody tr');
      fs.writeFileSync("./abc.html",co('.scorecard-section.bowling'));
           let mw=0;  
           let mwb='';
            rows.each(function(){
                let wckts=parseInt(co(co(this).find('td').get(5).html(),10));
                if (wckts>mw)
                {
                    mw=wckts;
                    mwb= co(this).find('td a').html();
                }
            });

            console.log(mwb);
    }
});
