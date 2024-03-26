class PageView {
    public User: Person;

    public constructor(user: Person) {
        this.User = user;
    }
}


$((): void => {
    const _person = new Person("Planet", "Earth");
    const viewModel = new PageView(_person);
    ko.applyBindings(viewModel); // This makes Knockout get to work

    console.log('hi kaite');
    console.log(_person);
    console.log(viewModel);
});

