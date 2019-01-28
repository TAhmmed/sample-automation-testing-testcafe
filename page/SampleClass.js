import { BasePage } from "./BasePage";

export class SampleClass extends BasePage{
    getViewButton(text, index){
        return this.selectSiblingIndex('td', text, index)
    }

    selectEmailTxtBox(){
        return this.selectElement('input[placeholder="Username"]')
    }

    selectPasswordTxtBox(){
        return this.selectElement('input[placeholder="Password"]')
    }

    selectLoginBtn(){
        return this.selectElementWithText('button', 'Login')
    }
}