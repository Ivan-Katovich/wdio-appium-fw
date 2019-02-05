
class Screen {
    constructor(){}

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
}

module.exports=Screen;