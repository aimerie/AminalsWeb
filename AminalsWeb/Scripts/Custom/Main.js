"use strict";
// Here's my data model
var Person = /** @class */ (function () {
    function Person(first, last) {
        this.fullName = ko.pureComputed(function () {
            // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
            return "".concat(this.FirstName, " ").concat(this.LastName);
        }, this);
        this.FirstName = first;
        this.LastName = last;
    }
    return Person;
}());
var PageView = /** @class */ (function () {
    function PageView(user) {
        this.User = user;
    }
    return PageView;
}());
var _person = new Person("Planet", "Earth");
var viewModel = new PageView(_person);
ko.applyBindings(viewModel); // This makes Knockout get to work
//# sourceMappingURL=Main.js.map