import { MovableBox } from '../dist/index';

describe('MovableBox', () => {
    let box: MovableBox;

    beforeEach(() => {
        box = new MovableBox();
    });

    test('should greet with correct message', () => {
        console.log = jest.fn();  // console.logをモック化

        box.greet('');

        expect(console.log).toHaveBeenCalledWith('hello');
    });
});
