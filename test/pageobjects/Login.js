const Page = require('../specs/page')
class LoginPage extends Page {

    get inputUsername () {
        return $("//input[@class='form-control login-input-user']");
    }

    get inputPassword () {
        return $("//input[@class='form-control login-input-pass']");
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get readHomePage(){
        return $("//div[@id='content-header']");
        
    }
    get usernameCredentials(){
        let loginuid = "svc_automatioaaa"
        //let user = atob(loginuid);
        
        return loginuid
    }
    get passwordCredentials(){
        let loginpw = "T3st Num3n"
        //let user = atob(loginpw);
        return loginpw
    }
    get userText(){
        return $("#nav_dropdown");
    }
    /*
     * a method to encapsule automation code to interact with the page
     */
    async login() {
        
        
        await this.inputUsername.setValue(this.usernameCredentials);
        await this.inputPassword.setValue(this.passwordCredentials);
        await this.btnSubmit.click();
        
    }
    async homePage(){

        browser.getTitle();
        await this.readHomePage.getText();
        


    }
    async validateUserName(){
        await this.userText.getText();
        await expect(this.userText).toHaveTextContaining('Automation User');
    }

    /*
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}
module.exports = new LoginPage();