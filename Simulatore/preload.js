const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('close', {
  close: () => ipcRenderer.invoke('close'),
})