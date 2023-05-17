// Questo deve sempre stare in cima per caricare le variabili d'ambiente all'avvio:
require('dotenv').config()

// costanti:
const clockID = process.env.CLOCK_ID ?? 'placeholder-id (should be set in .env)';
const { Data, swim } = require('./swimLib')

// MAIN
console.log('Activities for clock:', clockID)

const { app, BrowserWindow, ipcMain } = require('electron')

const createWindow = () => {
    const path = require('path');
    const win = new BrowserWindow({
        width: 800,
        height: 900,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            preload: (path.join(__dirname, 'preload.js'))
        },
    })
    ipcMain.handle

    win.loadFile(path.join(__dirname, 'ui/arm.html'))
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit()
})