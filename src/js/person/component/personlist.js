import template from './personlist.html';

class PersonListController {

    get selected() {
        return this.selectedPerson;
    }
    set selected(person) {
        if (typeof this.onSelect === 'function') {
            this.onSelect({person});
        }
        this.selectedPerson = person;
    }

    isSelected(person) {
        return person === this.selectedPerson;
    }
}

export const PersonListComponent = {
    controller: PersonListController,
    restrict: 'E',
    template,
    bindings: {
        persons: '<',
        onSelect: '&'
    }
};
