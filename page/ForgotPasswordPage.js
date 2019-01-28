import { BasePage } from "./BasePage";

export class ForgotPasswordPage extends BasePage{
    emailTxtBox(){
        return this.selectElement('#id_email')
    }

    sendResetEmailBtn(){
        return this.selectElementWithText('button', 'Send reset email')
    }

    cancelBtn(){
        return this.selectElementWithText('button', 'Cancel')
    }

    returnToLoginBtn(){
        return this.selectElementWithText('a', 'Click here to return to login page')
    }
}