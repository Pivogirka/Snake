const { contextBridge } = require("electron");
const path = require("path");

contextBridge.exposeInMainWorld("path", {
    join: (...args) => path.join(...args),
});
