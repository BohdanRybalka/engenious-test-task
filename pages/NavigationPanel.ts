import {BasePage} from "./BasePage";

export enum NavigationPanelElements {
    coursers = 'Coursers',
    paths = 'Paths',
    rating = 'Rating',
    mentorship = 'Mentorship',
    events = 'Events',
    blog = 'Blog',
    knowledgeBase = 'Knowledge-base',
}

export class NavigationPanel extends BasePage {
    elements = {
        section: (name: string) => this.page.locator('div[class*="NavMenu_innerItem"]', { hasText: name }),
        userCard: this.page.locator('div[class*="NavMenu_userBox"]')
    };

    async clickOnElement(name: NavigationPanelElements) {
        return this.elements.section(name).click();
    }
}