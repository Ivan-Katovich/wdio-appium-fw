const WelcomeScreen = require('./screens/welcomeScreen');
const LoadingScreen = require('./screens/loadingScreen');
const LoginScreen = require('./screens/loginScreen');

class App {
    constructor(){
        this.os = process.env.npm_config_platform;
        console.log(`testing of mobile app through '${this.os}' platform`);
        this.currentScreen = null;
        this.welcomScreenObj = null;
        this.loadingScreenObj = null;
        this.loginScreenObj = null;
    }

    getScreen(screenName){
        const screens = {
            welcome: WelcomeScreen,
            loading: LoadingScreen,
            login: LoginScreen
        };
        if(!this[`${screenName}ScreenObj`]){
            this[`${screenName}ScreenObj`] = new screens[screenName](this.os);
        }
        this.currentScreen = this[`${screenName}ScreenObj`];
        return this.currentScreen;
    }

    get welcomeScreen(){
        return this.welcomScreenObj ? this.welcomScreenObj : new WelcomeScreen(this.os);
    }

    get loadingScreen(){
        return this.loadingScreenObj ? this.loadingScreenObj : new LoadingScreen(this.os);
    }

    get loginScreen(){
        return this.loginScreenObj ? this.loginScreenObj : new LoginScreen(this.os);
    }
}

module.exports = App;