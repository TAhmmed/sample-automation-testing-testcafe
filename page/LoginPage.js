import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{
    loginPageTitle(){
        return this.selectElementWithText('h1', 'Login')
    }

    emailTxtBox(){
        return this.selectElement('input[placeholder="Username"]')
    }

    passwordTxtBox(){
        return this.selectElement('input[placeholder="Password"]')
    }

    logInBtn(){
        return this.selectElement('button').withText('Login')
    }

    forgotPasswordBtn(){
        return this.selectElement('a[href="#/forgot-password"]')
    }
}