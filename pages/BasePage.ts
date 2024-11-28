import { type Page } from '@playwright/test';

export class BasePage {
    page: Page;
    url = '/';

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToPage() {
        return this.page.goto(this.url);
    }
}
