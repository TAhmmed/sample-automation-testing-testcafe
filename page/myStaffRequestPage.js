import { BasePage } from "./BasePage";

export class MyStaffRequestPage extends BasePage{
    myStaffRequestTxtView(){
        return this.selectElementWithText('p', 'My Staff Requests')
    }
}