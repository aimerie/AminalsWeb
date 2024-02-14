// Here's my data model
class Person {
    public FirstName: string;
    public LastName: string;

    public fullName = ko.pureComputed(function () {
        // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        return `${this.FirstName} ${this.LastName}`;
    }, this);

    constructor(first: string, last: string) {
        this.FirstName = first;
        this.LastName = last;
    }
}

class PageView {
    public User: Person;

    public constructor(user: Person) {
        this.User = user;
    }
}



const _person = new Person("Planet", "Earth");

const viewModel = new PageView(_person);
ko.applyBindings(viewModel); // This makes Knockout get to work