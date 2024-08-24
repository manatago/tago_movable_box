"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../dist/index");
describe('MovableBox', () => {
    let box;
    beforeEach(() => {
        box = new index_1.MovableBox();
    });
    test('should greet with correct message', () => {
        console.log = jest.fn(); // console.logをモック化
        box.greet('');
        expect(console.log).toHaveBeenCalledWith('hello');
    });
});
//# sourceMappingURL=samle.test.js.map