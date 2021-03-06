const electron = require('electron')
// Module to control application life.
const app = electron.app
const protocol = electron.protocol
const ipcMain = electron.ipcMain
const powerSaveBlocker = electron.powerSaveBlocker

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const isDevelopment = process.env.NODE_ENV === 'development'

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function devToolsLog(s) {
  console.log(s)
  if (mainWindow && mainWindow.webContents) {
    mainWindow.webContents.executeJavaScript(`console.log(${JSON.stringify(s)})`)
  }
}

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 320, height: 610, titleBarStyle: 'hidden'})

  let fileUrl = null;
  if(isDevelopment) {
    fileUrl = `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`;
  } else {
    fileUrl = require('url').format({
      protocol: 'file',
      slashes: true,
      pathname: require('path').join(__dirname, 'index.html')
    });
  }

  mainWindow.loadURL(fileUrl);

  // Open the DevTools in dev environment.
  // if (isDevelopment) {
    mainWindow.webContents.openDevTools();
    try {
      BrowserWindow.addDevToolsExtension('/Users/shekhar.joshi/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.2.4_0');
      BrowserWindow.addDevToolsExtension('/Users/shekhar.joshi/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.2_0');
    } catch(err) {}
  // }

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('start-persistent-connection', (event, arg) => {
  event.sender.send('debug-data', {
    'sample-debug-data': electron.app.getPath('userData'),
    "process": process,
  });
})

ipcMain.on('prevent-display-sleep', (event, arg) => {
  console.log(arg);
})
