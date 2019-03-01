const WelcomeScreen = require('./screens/welcomeScreen');
const LoadingScreen = require('./screens/loadingScreen');
const LoginScreen = require('./screens/loginScreen');

class App {
    constructor(){
        this.os = process.env.npm_config_platform;
        console.log(`testing of mobile app through '${this.os}' platform`);
        this.currentScreen = null;
        // this.welcomScreenObj = null;
        // this.loadingScreenObj = null;
        // this.loginScreenObj = null;
        this.screenArray = [];
    }

    getScreen(screenName){
        const screens = {
            welcome: WelcomeScreen,
            loading: LoadingScreen,
            login: LoginScreen
        };

        let screen = this.screenArray.find((scr) => scr.constructor === screens[screenName]);

        if(!screen){
            screen = new screens[screenName](this.os);
            this.screenArray.push(screen)
        }
        this.currentScreen = screen;
        return this.currentScreen;
    }

    get welcomeScreen(){
        let screen;
        if (this.currentScreen && this.currentScreen.constructor === WelcomeScreen) {
            screen = this.currentScreen;
        } else {
            screen = this.screenArray.find((scr) => scr.constructor === WelcomeScreen);
            this.currentScreen = screen;
        }
        if(!screen){
            screen = new WelcomeScreen(this.os);
            this.screenArray.push(screen);
            this.currentScreen = screen;
        }
        return screen;
    }

    get loadingScreen(){
        let screen;
        if (this.currentScreen && this.currentScreen.constructor === LoadingScreen) {
            screen = this.currentScreen;
        } else {
            screen = this.screenArray.find((scr) => scr.constructor === LoadingScreen);
            this.currentScreen = screen;
        }
        if(!screen){
            screen = new LoadingScreen(this.os);
            this.screenArray.push(screen);
            this.currentScreen = screen;
        }
        return screen;
    }

    get loginScreen(){
        let screen;
        if (this.currentScreen && this.currentScreen.constructor === LoginScreen) {
            screen = this.currentScreen;
        } else {
            screen = this.screenArray.find((scr) => scr.constructor === LoginScreen);
            this.currentScreen = screen;
        }
        if(!screen){
            screen = new LoginScreen(this.os);
            this.screenArray.push(screen);
            this.currentScreen = screen;
        }
        return screen;
    }
}

module.exports = App;