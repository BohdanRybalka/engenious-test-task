import {BasePage} from "./BasePage";


export class RegistrationLoginPage extends BasePage {
    url = 'login';

    elements = {
        registrationFormLink: this.page.locator('a[href="/registration"]', { hasText: 'Registration' }),
        loginFormLink: this.page.locator('a[href="/login"]', { hasText: 'Login' }),
        emailInput: this.page.locator('input[name="email"]'),
        passwordInput: this.page.locator('input[name="password"]'),
        loginBtn: this.page.locator('button[type="submit"]'),
    };

    async clickOnLoginBtn() {
        return this.elements.loginBtn.click();
    }

    async fillInPassword(password: string) {
        return this.elements.passwordInput.fill(password);
    };

    async fillInEmail(email: string) {
        return this.elements.emailInput.fill(email);
    };

    async clickOnLoginFormLink() {
        return this.elements.loginFormLink.click();
    }

    async clickOnRegistrationFormLink() {
        return this.elements.registrationFormLink.click();
    }
}