import { greet } from "./greet";

fdescribe('greet', () => {
    it('should include the name in the message', () => {
        const name = 'John';
        const name1 = 'Player';
        expect(greet(name)).toContain(name);

    });
});