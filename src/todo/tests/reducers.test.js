import { expect } from 'chai';
import { todos } from '../Reducers'

describe( 'the todos reducer', () => {
    it('adda a new todo when ADDTODOLISTITEM action is received', () => {
        const ADDTODOLISTITEM = "ADDTODOLISTITEM"
        const faketodo = { text : 'hello ', isCompletes : false };
        const fakeaction = {
            type: ADDTODOLISTITEM,
            payload: {
                todoitem: faketodo,
            },
        };
        const originalstate = [];
        const expected = [{ text : 'hello ', isCompletes : false }];
        
        const actual = todos( originalstate, fakeaction );

        expect(actual).to.deep.equal(expected);

    })
})