import 'node-fetch';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import sinon from 'sinon';
import { loadtodos } from '../thunks';

describe('The loadTodos thunk', () => {
    it('Dispatches the correct actions in the success scenario', async () => {
        const fakeDispatch = sinon.spy();

        const fakeTodos = [{ text: '1' }, { text: '2' }];
        fetchMock.get('http://localhost:8080/todos', fakeTodos);

        
        const LOADSUCCESS = "LOADSUCCESS"
        const expectedSecondAction = {
            type: LOADSUCCESS,
            payload: { 
                todos: fakeTodos,
            },
        };

        await loadtodos()(fakeDispatch);

        
        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedSecondAction);

        fetchMock.reset();
    });
});