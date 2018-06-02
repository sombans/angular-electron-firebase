const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow({
        width:1200,
        height:800,
        icon:__dirname+'/img/dent.png',
        backgroundColor: '#112211'
    });

    win.loadURL(`file:${__dirname}/dist/dent/index.html`)

    win.webContents.openDevTools(); 

    win.on('clossed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})