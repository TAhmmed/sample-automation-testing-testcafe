import { BasePage } from "./BasePage";

export class AccountManagementPage extends BasePage{
    accountManagementSubTabTitle(){
        return this.selectElementWithText('li', 'Account Management')
    }

    searchTxtBox(){
        return this.selectElement('input[placeholder="Search"]')
    }

    viewBtn(text, index){
        return this.selectSiblingIndex('td', text, index)
    }

    accountManagementDetailSubTabTitle(){
        return this.selectElementWithText('li', 'Detail')
    }

    userIdName(text){
        return this.selectElementWithText('p', text)
    }
}