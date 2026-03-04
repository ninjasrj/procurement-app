const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // This points to the folder where Angular builds the app
  win.loadFile(path.join(__dirname, 'dist/procurement-app/browser/index.html'));
}

app.whenReady().then(createWindow);