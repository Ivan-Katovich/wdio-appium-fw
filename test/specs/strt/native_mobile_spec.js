
describe('battle.net spec', () => {

    const WelcomeScreen = require('../../support/screens/welcomeScreen');
    const welcomScreen = new WelcomeScreen();

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

    it('Check welcome screen\'s pages', () => {
        expect(welcomScreen.isElementDisplayed('blizzardLogo')).toBe(true);
        expect(welcomScreen.isElementDisplayed('welcomeImage')).toBe(true);
        expect(welcomScreen.getElementText('welcomeText')).toBe('See what your friends are playing!');
        expect(welcomScreen.getElementText('infoText')).toBe('Quickly check which of your friends are online, in a game, and ready for an adventure.');
        expect(welcomScreen.isElementDisplayed('loginButton')).toBe(true);
        expect(welcomScreen.getElementText('loginButtonText')).toBe('Log In');
        welcomScreen.turnOver();
        expect(welcomScreen.isElementDisplayed('blizzardLogo')).toBe(true);
        expect(welcomScreen.isElementDisplayed('welcomeImage')).toBe(true);
        expect(welcomScreen.getElementText('welcomeText')).toBe('Keep in touch!');
        expect(welcomScreen.getElementText('infoText')).toBe('Chat with your Blizzard friends or leave a message if they\'re offline.');
        expect(welcomScreen.isElementDisplayed('loginButton')).toBe(true);
        expect(welcomScreen.getElementText('loginButtonText')).toBe('Log In');
        welcomScreen.turnOver();
        expect(welcomScreen.isElementDisplayed('blizzardLogo')).toBe(true);
        expect(welcomScreen.isElementDisplayed('welcomeImage')).toBe(true);
        expect(welcomScreen.getElementText('welcomeText')).toBe('Make friends on the go!');
        expect(welcomScreen.getElementText('infoText')).toBe('At a cafe, on the train, or even at BlizzCon - expand your friends list anytime, anywhere.');
        expect(welcomScreen.isElementDisplayed('loginButton')).toBe(true);
        expect(welcomScreen.getElementText('loginButtonText')).toBe('Log In');
    });

});