import authReducer from '../../src/reducers/auth'

test('should set default values', () => {
    const state = authReducer(undefined, {type: '@@init'});

    expect(state).toEqual({});
});

test('should set uid on login', () => {
    const state = authReducer(undefined, {
        type: 'LOGIN',
        uid: '123'
    });

    expect(state.uid).toBe('123');
});

test('should set auth data to empty object on logout', () => {
    const state = authReducer({
        uid: '123',
    }, {
        type: 'LOGOUT'
    });

    expect(state).toEqual({});
});