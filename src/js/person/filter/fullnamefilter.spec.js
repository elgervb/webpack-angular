import FullnameFilter from './fullnamefilter';

describe('fullnamefilter', () => {
    let filter;

    beforeEach(() => {
        filter = FullnameFilter.factory();
    });

    it('expects object to pass thru', () => {
        const expected = {test: 'test'};
        const result = filter(expected);
        expect(result).toBe(expected);
    });

    it('expects fullname to be returned', () => {
        const person = {
            name: 'foo',
            suffix: 'bar',
            surname: 'foobar'
        };

        const result = filter(person);
        expect(result).toBe('foo bar foobar');
    });
});
