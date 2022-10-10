import { AddTest } from "./AddTest";

//test suite-group of related tests
fdescribe('AddTest', () => {
    //spec or test
    it('should return 30 if input is given', () =>{
        const result = AddTest(10,20);
        expect(result).toBe(30);

    });

    
});