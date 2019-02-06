const App = require('../../support/objects/app');

describe('battle.net spec', () => {

    let app = null;
    let isFirst = true;

    beforeEach(() => {
        if(!isFirst){
            driver.reset();
        }
        app = new App();
        isFirst = false;
    });

    xit('start test', () => {
        console.log('0000000000000000');
        browser.pause(3000);
        console.log(driver.getCurrentActivity());
        const selector = 'new UiSelector().resourceId("com.blizzard.messenger:id/login_linear_layout")';
        const selector2 = 'new UiSelector().className("android.widget.TextView")';
        console.log('11111111111111111111111');
        // const loginBtn = $('#login_linear_layout');
        const loginBtn = $('android='+selector);
        console.log(loginBtn.$('android='+selector2).getText());
        loginBtn.click();
        console.log('2222222222222222222222');
        browser.pause(10000);
        console.log('333333333333333333333333');
    });

    it('Go to login page', () => {
        app.welcomeScreen.clickElement('loginButton');
        app.loadingScreen.isElementDisplayed('loadingSpinner');
        app.loadingScreen.waitForElementDisappeared('loadingSpinner',20000);
        expect(app.loginScreen.isElementDisplayed('navigateBackArrow')).toBe(true);
        expect(app.loginScreen.getElementText('screenName')).toBe('Log In');
        expect(app.loginScreen.isElementDisplayed('regionPicker')).toBe(true);
        expect(app.loginScreen.getElementText('regionName')).toBe('Europe');
        expect(app.loginScreen.isElementDisplayed('accountName')).toBe(true);
        expect(app.loginScreen.isElementDisplayed('password')).toBe(true);
        expect(app.loginScreen.isElementDisplayed('submitButton')).toBe(true);
        expect(app.loginScreen.isElementDisplayed('facebookButton')).toBe(true);
        expect(app.loginScreen.isElementDisplayed('googleButton')).toBe(true);
        expect(app.loginScreen.isElementDisplayed('signUpLink')).toBe(true);
        expect(app.loginScreen.isElementDisplayed('loginSupportLink')).toBe(true);
    });

    it('Check welcome screen\'s pages', () => {
        expect(app.welcomeScreen.isElementDisplayed('blizzardLogo')).toBe(true);
        expect(app.welcomeScreen.isElementDisplayed('welcomeImage')).toBe(true);
        expect(app.welcomeScreen.getElementText('welcomeText')).toBe('See what your friends are playing!');
        expect(app.welcomeScreen.getElementText('infoText')).toBe('Quickly check which of your friends are online, in a game, and ready for an adventure.');
        expect(app.welcomeScreen.isElementDisplayed('loginButton')).toBe(true);
        expect(app.welcomeScreen.getElementText('loginButtonText')).toBe('Log In');
        app.welcomeScreen.turnOver();
        expect(app.welcomeScreen.isElementDisplayed('blizzardLogo')).toBe(true);
        expect(app.welcomeScreen.isElementDisplayed('welcomeImage')).toBe(true);
        expect(app.welcomeScreen.getElementText('welcomeText')).toBe('Keep in touch!');
        expect(app.welcomeScreen.getElementText('infoText')).toBe('Chat with your Blizzard friends or leave a message if they\'re offline.');
        expect(app.welcomeScreen.isElementDisplayed('loginButton')).toBe(true);
        expect(app.welcomeScreen.getElementText('loginButtonText')).toBe('Log In');
        app.welcomeScreen.turnOver();
        expect(app.welcomeScreen.isElementDisplayed('blizzardLogo')).toBe(true);
        expect(app.welcomeScreen.isElementDisplayed('welcomeImage')).toBe(true);
        expect(app.welcomeScreen.getElementText('welcomeText')).toBe('Make friends on the go!');
        expect(app.welcomeScreen.getElementText('infoText')).toBe('At a cafe, on the train, or even at BlizzCon - expand your friends list anytime, anywhere.');
        expect(app.welcomeScreen.isElementDisplayed('loginButton')).toBe(true);
        expect(app.welcomeScreen.getElementText('loginButtonText')).toBe('Log In');
    });

});