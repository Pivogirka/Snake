const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("externalLibraries", {
    nodeVersion: () => process.versions.node,
});
