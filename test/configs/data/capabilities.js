const path = require('path');

module.exports = {
    android: [{
        platformName: 'Android',
        appiumVersion: '1.10.0',
        deviceName: 'myDevice',
        app: path.resolve('./apkFiles/Battle.net Mobile Authenticator-8.apk'),
        appWaitActivity: 'com.blizzard.messenger.ui.welcome.WelcomeActivity',
        appWaitPackage: 'com.blizzard.messenger'
    }],
    ios: [{}]
};