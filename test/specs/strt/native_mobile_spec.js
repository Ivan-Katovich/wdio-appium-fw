describe('battle.net spec', () => {
    it('start test', () => {
        console.log('0000000000000000');
        browser.pause(3000);
        console.log(driver.getCurrentActivity());
        const selector = 'new UiSelector().resourceId("com.blizzard.messenger:id/login_linear_layout")';
        const selector2 = 'new UiSelector().className("android.widget.TextView")';
        console.log('11111111111111111111111');
        // const loginBtn = $('#login_linear_layout');
        const loginBtn = $('android='+selector);
        console.log(loginBtn.$('android='+selector).getText());
        loginBtn.click();
        console.log('2222222222222222222222');
        browser.pause(10000);
        console.log('333333333333333333333333');
    });
});