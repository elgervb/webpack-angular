
export default class FullnameFilter {

    filter(person) {
        if (person.name) {
            return `${person.name} ${person.suffix} ${person.surname}`.replace(/ +(?= )/g, '');
        }

        // doesn't look like a person... just return it
        return person;
    }

    static factory() {
        const filter = new FullnameFilter();
        return input => filter.filter(input);
    }
}
