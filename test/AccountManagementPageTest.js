import { LoginPage } from "../page/LoginPage";
import { DashboardPage } from "../page/DashboardPage";
import { AccountManagementPage } from "../page/AccountManagementPage";

fixture `Account Management Page Test Fixture`
    .page ``; //masukkan URL

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const accountManagementPage = new AccountManagementPage();

test('AMP_01', async t => {
    await t
        .maximizeWindow()
        .expect(loginPage.loginPageTitle().visible).ok()
        .typeText(loginPage.emailTxtBox(), '')
        .typeText(loginPage.passwordTxtBox(), '')
        .click(loginPage.logInBtn())
        .expect(dashboardPage.dashboardPageTitle().visible).ok()
        .click(dashboardPage.accountTab())
        .click(dashboardPage.accountManagementSubTab())
        .expect(accountManagementPage.accountManagementSubTabTitle().visible).ok()
        .typeText(accountManagementPage.searchTxtBox(), '')
        .click(accountManagementPage.viewBtn('', 5))
        .expect(accountManagementPage.accountManagementDetailSubTabTitle().visible).ok()
        .expect(accountManagementPage.userIdName('').visible).ok()
});