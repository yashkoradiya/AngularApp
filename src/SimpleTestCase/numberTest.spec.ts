import { numberTest } from "./numberTest";

//test suite-group of related tests
fdescribe('numberTest', () => {
    //spec or test
    it('should return 0 if input is negative', () =>{
        const result = numberTest(-1);
        expect(result).toBe(0);

    });

    it ('should increment the input if is positive', () => {
        const result = numberTest(1);
        expect(result).toBe(2);
    });
});