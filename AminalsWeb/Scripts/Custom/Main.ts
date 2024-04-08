//import { Person } from "../Custom/Models/Person";

export class PageView {
    // public User: Person;

    public constructor(username: string) {
        console.log(`Hello ${username}!`);
    }
}


$((): void => {
    //const _person = new Person("Planet", "Earth");
    const viewModel = new PageView("Miss Kaite");
    ko.applyBindings(viewModel); // This makes Knockout get to work

    console.log('hi kaite');
    console.log(viewModel);
});

