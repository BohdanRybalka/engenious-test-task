import {BasePage} from "./BasePage";
import {Page} from "@playwright/test";
import {RegistrationLoginPage} from "./RegistrationLoginPage";
import {HomePage} from "./HomePage";
import {NavigationPanel} from "./NavigationPanel";


export class App extends BasePage {
    registrationLoginPage: RegistrationLoginPage;
    homePage: HomePage;
    navigationPanel: NavigationPanel;

    constructor(page: Page) {
        super(page);

        this.registrationLoginPage = new RegistrationLoginPage(page);
        this.homePage = new HomePage(page);
        this.navigationPanel = new NavigationPanel(page);
    }
}