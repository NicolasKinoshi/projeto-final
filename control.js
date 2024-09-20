const users = [
    { username: 'funcionario', password: '1234', role: 'funcionario' },
    { username: 'gerente', password: 'gerente123', role: 'gerente' },
    { username: 'admin', password: 'admin123', role: 'admin' }
];

function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        sessionStorage.setItem('role', user.role);
        alert('Login bem-sucedido! Bem-vindo, ' + user.username);
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    login(username, password);
});
