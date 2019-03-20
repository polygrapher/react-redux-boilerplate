import { login, logout, startLogin, startLogout } from '../../src/actions/auth';

test('should generate correct login atcion', () => {
    const action = login('123');

    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123'
    })
});

test('should generate correct logout atcion', () => {
    const action = logout();

    expect(action).toEqual({
        type: 'LOGOUT'
    });
});

