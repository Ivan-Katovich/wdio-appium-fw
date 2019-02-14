const App = require('../../support/objects/app');
const memory = require('../../support/memory');

describe('battle.net spec', () => {

    let app = null;

    beforeEach(() => {
        if(memory.counter){
            driver.reset();
        }
        app = new App();
        memory.counter++
    });

    it('start test', () => {
        console.log(driver.getCurrentActivity());
        const selector = 'new UiSelector().resourceId("com.blizzard.messenger:id/login_linear_layout")';
        const selector2 = 'new UiSelector().className("android.widget.TextView")';
        const loginBtn = $('android='+selector);
        console.log(loginBtn.$('android='+selector2).getText());
        loginBtn.click();
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

    it('Login with non email account', () => {
        app.welcomeScreen.clickElement('loginButton');
        app.loadingScreen.waitForElementDisappeared('loadingSpinner',20000);
        app.loginScreen.logIn('123','password');
        expect(app.loginScreen.isElementDisplayed('jsError')).toBe(true);
        expect(app.loginScreen.getElementAttribute('jsErrorText','contentDescription')).toBe('Blizzard Account usernames are email addresses.');
    });

});