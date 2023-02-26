function logout() {
    localStorage.removeItem('user');
}

function login(user){
    localStorage.setItem('user', JSON.stringify(user));
}

function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export const authenticationService = {logout, login, getUser};
