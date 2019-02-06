const Screen = require('./screen');

class LoadingScreen extends Screen {
    constructor(os){
        super(os);
        this.selectors = {
            loadingSpinner: {
                android: 'android=new UiSelector().resourceId("com.blizzard.messenger:id/spinner_image_view")',
                ios: 'ios=UIATarget...(selector for ios)'
            },
        }
    }

}

module.exports = LoadingScreen;