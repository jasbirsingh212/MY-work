//npm init
//npm install --save-dev electron
// creat main.js
// creat html file
//


const {app,BrowserWindow}=require('electron');
const ejse =require("ejs-electron"); 

ejse.data({
    pagename : "MS EXCEL 2020",
    rows : 101,
    cols: 26
})

function createWindow(){

    const win=new BrowserWindow({
        width:800,
        height:600,
        show:false
    });

    win.loadFile('EXCEL_CLONE.ejs').then(function(){
       win.removeMenu();
        win.maximize();
        win.show();
        win.webContents.openDevTools();
    });

}

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


app.whenReady().then(createWindow);
