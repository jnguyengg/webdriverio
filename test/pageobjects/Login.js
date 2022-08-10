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
        let loginuid = "c3ZjX2F1dG9tYXRpb24="
        let user = atob(loginuid);
        
        return user
    }
    get passwordCredentials(){
        let loginpw = "VDNzdCBOdW0zbg=="
        let user = atob(loginpw);
        return user
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