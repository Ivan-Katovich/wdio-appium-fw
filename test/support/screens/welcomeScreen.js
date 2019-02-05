const Screen = require('./screen');

class WelcomeScreen extends Screen {
    constructor(){
        super();
        this.selectors = {
            blizzardLogo: {
                android: 'android=new UiSelector().resourceId("com.blizzard.messenger:id/logo")',
                ios: 'ios=UIATarget...(selector for ios)'
            },
            welcomeImage: {
                android: 'android=new UiSelector().resourceId("com.blizzard.messenger:id/welcome_image_view")',
                ios: 'ios=UIATarget...(selector for ios)'
            },
            welcomeText: {
                android: 'android=new UiSelector().resourceId("com.blizzard.messenger:id/parent")' +
                '.childSelector(new UiSelector().className("android.widget.TextView").index(1))',
                ios: 'ios=UIATarget...(selector for ios)'
            },
            infoText: {
                android: 'android=new UiSelector().resourceId("com.blizzard.messenger:id/parent")' +
                '.childSelector(new UiSelector().className("android.widget.TextView").index(2))',
                ios: 'ios=UIATarget...(selector for ios)'
            },
            loginButton: {
                android: 'android=new UiSelector().resourceId("com.blizzard.messenger:id/login_linear_layout")',
                ios: 'ios=UIATarget...(selector for ios)'
            },
            loginButtonText: {
                android: 'android=new UiSelector().resourceId("com.blizzard.messenger:id/login_linear_layout")' +
                '.childSelector(new UiSelector().className("android.widget.TextView"))',
                ios: 'ios=UIATarget...(selector for ios)'
            },
        }
    }

    getElementText(elementName){
        return $(this.selectors[elementName].android).getText();
    }

    isElementDisplayed(elementName){
        return $(this.selectors[elementName].android).isDisplayed();
    }

}


module.exports=WelcomeScreen;