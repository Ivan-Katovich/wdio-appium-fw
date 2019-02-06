const Screen = require('./screen');

class LoginScreen extends Screen {
    constructor(os){
        super(os);
        this.selectors = {
            navigateBackArrow: {
                android: 'android=new UiSelector().description("Navigate up")',
                ios: 'ios=UIATarget...(selector for ios)'
            },
            screenName: {
                android: 'android=new UiSelector().resourceId("com.blizzard.messenger:id/toolbar")' +
                '.childSelector(new UiSelector().className("android.widget.TextView"))',
                ios: 'ios=UIATarget...(selector for ios)'
            },
            regionPicker: {
                android: 'android=new UiSelector().resourceId("com.blizzard.messenger:id/region_picker")',
                ios: 'ios=UIATarget...(selector for ios)'
            },
            regionName: {
                android: 'android=new UiSelector().resourceId("com.blizzard.messenger:id/region_picker")' +
                '.childSelector(new UiSelector().className("android.widget.TextView"))',
                ios: 'ios=UIATarget...(selector for ios)'
            },
            accountName: {
                android: 'android=new UiSelector().resourceId("accountName")',
                ios: 'ios=UIATarget...(selector for ios)'
            },
            password: {
                android: 'android=new UiSelector().resourceId("password")',
                ios: 'ios=UIATarget...(selector for ios)'
            },
            submitButton: {
                android: 'android=new UiSelector().resourceId("submit")',
                ios: 'ios=UIATarget...(selector for ios)'
            },
            facebookButton: {
                android: 'android=new UiSelector().resourceId("facebook")',
                ios: 'ios=UIATarget...(selector for ios)'
            },
            googleButton: {
                android: 'android=new UiSelector().resourceId("google")',
                ios: 'ios=UIATarget...(selector for ios)'
            },
            signUpLink: {
                android: 'android=new UiSelector().resourceId("signup")',
                ios: 'ios=UIATarget...(selector for ios)'
            },
            loginSupportLink: {
                android: 'android=new UiSelector().resourceId("loginSupport")',
                ios: 'ios=UIATarget...(selector for ios)'
            },
        }
    }

}

module.exports = LoginScreen;