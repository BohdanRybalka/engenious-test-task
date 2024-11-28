import {BasePage} from "./BasePage";

export class HomePage extends BasePage {
    elements = {
        fastTrackYourAutomationTitle: this.page.locator('h1', { hasText: 'Fast-Track Your Test Automation' }),
        signInBtn: this.page.locator('button', { hasText: 'Sign In' }),
        burgerMenuIcon: this.page.locator('div[class^="Header_innerBurger"]'),
    };

    async clickOnBurgerMenuIcon() {
        return this.elements.burgerMenuIcon.click();
    }

    async clickOnSignInBtn() {
        return this.elements.signInBtn.click();
    }
}