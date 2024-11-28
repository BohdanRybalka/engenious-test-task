import {User} from "./models/User";
import {faker} from "@faker-js/faker/locale/ar";

export class UserFactory {
    public static createUser(customData?: Partial<User>): User {
        const defaultUser: User = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password({ length: 16}),
        };

        return { ...defaultUser, ...customData };
    }
}