import { App } from '../pages/App';
import { test as base } from '@playwright/test';

export const test = base.extend<{
    app: App;
}>({
    app: async ({ page }, use) => {
        await use(new App(page));
    }
});
