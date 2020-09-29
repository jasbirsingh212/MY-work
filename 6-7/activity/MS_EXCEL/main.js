//npm init
//npm install --save-dev electron
// creat main.js
// creat html file
//


const {app,BrowserWindow}=require('electron');
const ejse =require("ejs-electron"); 


ejse.data({
    pagename : "MS EXCEL",
    pageheader :"MS EXCEL 2020",
    rows : 100,
    cols: 27
})
app.whenReady().then(function(){
    const win=new BrowserWindow({
        width:800,
        height:600,
        show:false
    });

    win.loadFile('MS_EXCEL.ejs').then(function(){
        win.maximize();
        win.show();
    });


});

app.on('window-all-closed',() => {
    if(process.platform !== 'darwin' )
    {
        app.quit()

    }
});

app.on('activate',()=>{

    if(BrowserWindow.getAllWindows().length===0)
    {
        createWindow();
    }

});














