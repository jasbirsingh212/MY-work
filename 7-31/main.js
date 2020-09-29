
const {app,BrowserWindow}=require('electron');
//const ejse =require("ejs-electron");
//const reload=require('electron-reload');
const path=require('path');



// ejse.data({
//     pagename : "MS EXCEL 2020",
//     rows : 101,
//     cols: 26
// })

function createWindow(){

    const win=new BrowserWindow({
        width:800,
        height:600,
        show:false,
        webPreferences :{
            nodeIntegration :true
        }
    });

    win.loadFile('OPEN_BOARD.html').then(function(){
       win.removeMenu();
        win.maximize();
        win.show();
        win.webContents.openDevTools();
    });

}

// reload(_dirname,{

//     electron : path.join(_dirname,"C:\Users\jasbi\WEB DEVELOPMENT\.vscode\7-16\activities\VSCODE_CLONE\node_modules\.bin\electron.cmd")

//  });

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
