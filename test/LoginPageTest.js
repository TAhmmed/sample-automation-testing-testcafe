import { LoginPage } from "../page/LoginPage";
import { DashboardPage } from "../page/DashboardPage";

fixture `Login Page Test Fixture`
    .meta('Creation Date', '22/January/2019')
    .meta('Created By', 'Nugroho Santoso')
    .page ``; //masukkan URL

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

test('LP_01', async t => {
    await t
        .maximizeWindow()
        .expect(loginPage.loginPageTitle().visible).ok()
        .typeText(loginPage.emailTxtBox(), '')
        .typeText(loginPage.passwordTxtBox(), '')
        .click(loginPage.logInBtn())
        .expect(dashboardPage.dashboardPageTitle().visible).ok()
});

test('LP_02', async t => {
    await t
        .maximizeWindow()
        .expect(loginPage.loginPageTitle().visible).ok()
        .typeText(loginPage.emailTxtBox(), 'invalid.user@lala.com')
        .typeText(loginPage.passwordTxtBox(), 'validPassword')
        .click(loginPage.logInBtn())
        .expect(loginPage.loginPageTitle().visible).ok()
});

test('LP_03', async t => {
    await t
        .maximizeWindow()
        .expect(loginPage.loginPageTitle().visible).ok()
        .typeText(loginPage.emailTxtBox(), 'valid.user@lala.com')
        .typeText(loginPage.passwordTxtBox(), 'invalidPassword')
        .click(loginPage.logInBtn())
        .expect(loginPage.loginPageTitle().visible).ok()
});

test('LP_04', async t => {
    await t
        .maximizeWindow()
        .expect(loginPage.loginPageTitle().visible).ok()
        .typeText(loginPage.emailTxtBox(), 'invalid.user@lala.com')
        .typeText(loginPage.passwordTxtBox(), 'invalidPassword')
        .click(loginPage.logInBtn())
        .expect(loginPage.loginPageTitle().visible).ok()
});