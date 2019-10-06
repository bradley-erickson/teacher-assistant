export function checkLogin(username, password) {
    return true;
} 

export function getUsers() {
    let users = [];
    fetch('/data')
        .then(res => res.json())
        .then(user => users = user );
    return users;
}