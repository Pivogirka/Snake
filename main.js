const { app, BrowserWindow } = require("electron");
const path = require("path");
const fs = require("fs");

process.env.NODE_DEV = "development";
// process.env.NODE_DEV = "production";
//dev tools
const isDev = process.env.NODE_DEV !== "production";
//
const createMainWindow = () => {
    const mainWindow = new BrowserWindow({
        title: "The snake game",
        width: isDev ? 1400 : 513,
        height: 607,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    //dev tools
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
    //

    mainWindow.loadFile(path.join(__dirname, "./public/index.html"));
};

app.whenReady().then(() => {
    createMainWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
