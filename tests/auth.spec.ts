import {test} from "../helpers/fixtures";
import {UserFactory} from "../helpers/data-providers/UserFactory";
import {expect} from "@playwright/test";


test.describe('Auth tests', () => {

    const user = UserFactory.createUser(
        { firstName: '', lastName: '', email: '', password: '' }
    );

    test('Should be possible to login with valid credentials', async ({ app }) => {
        await app.homePage.navigateToPage();
        await app.homePage.clickOnSignInBtn();

        await app.registrationLoginPage.clickOnLoginFormLink();
        await app.registrationLoginPage.fillInEmail(user.email);
        await app.registrationLoginPage.fillInPassword(user.password);
        await app.registrationLoginPage.clickOnLoginBtn();

        await app.homePage.clickOnBurgerMenuIcon();
        await expect(app.navigationPanel.elements.userCard,
            'Verify that user first name and last name are displayed on the navigation panel')
            .toContainText(`${user.firstName} ${user.lastName}`);
    });
});