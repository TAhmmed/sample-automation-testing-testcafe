import { BasePage } from "./BasePage";

export class DashboardPage extends BasePage{
    dashboardPageTitle(){
        return this.selectElementWithText('li', 'Content Management System')
    }

    accountTab(){
        return this.selectElementWithText('a', 'Account')
    }

    accountManagementSubTab(){
        return this.selectElementWithText('a', 'Account Management')
    }
}