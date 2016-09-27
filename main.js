(function () {
    /**
     * Main Electron process
     */

    'use strict';

    const {app} = require('electron')
    const {BrowserWindow} = require('electron')
    var applicationMenu = require('./browser/application-menu');

    app.on('ready', function () {

        global.aureliaRoot = __dirname  + '/client/';

        applicationMenu.setup();

        let mainWindow = new BrowserWindow({
            width: 900,
            height: 700,
            "min-width": 400,
            "min-height": 300,
            center: true,
            resizable: true
        });

        mainWindow.loadURL('file://' + __dirname + '/client/index.html');

    });
})();