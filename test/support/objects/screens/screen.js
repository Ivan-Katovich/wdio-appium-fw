
class Screen {
    constructor(os){
        this.os = os;
    }

    turnOver(){
        const dims = driver.getSessions()[0].capabilities.deviceScreenSize.split('x');
        const high = dims[1];
        const width = dims[0];

        browser.touchAction([
            { action: 'press', x: width-50, y: high/2 },
            // { action: 'wait', ms: 1000 },
            { action: 'moveTo', x: 50, y: high/2 },
            'release'
        ]);

        // driver.touchPerform([
        //     { action: 'press', options: { x: width-50, y: high/2 }},
        //     { action: 'moveTo', options: { x: 50, y: high/2 }},
        //     { action: 'release' }
        // ]);

        // browser.execute('mobile: scroll', { direction: 'left' }) // for webdriverIO less than v5
    }

    getElementText(elementName){
        return $(this.selectors[elementName][this.os]).getText();
    }

    isElementDisplayed(elementName){
        return $(this.selectors[elementName][this.os]).isDisplayed();
    }

    clickElement(elementName){
        $(this.selectors[elementName][this.os]).click();
    }

    getElementAttribute(elementName, attribute){
        return $(this.selectors[elementName][this.os]).getAttribute(attribute);
    }

    waitForElementVisible(elementName, timeout = 5000){
        // $(this.selectors[elementName].android).waitForDisplayed(timeout);
        browser.waitUntil(() => this.isElementDisplayed(elementName), timeout, `Element '${elementName}' is not displayed.`, 300);
    }

    waitForElementDisappeared(elementName, timeout = 5000){
        browser.waitUntil(() => !this.isElementDisplayed(elementName), timeout, `Element '${elementName}' is still displayed.`, 300);
    }
}

module.exports=Screen;