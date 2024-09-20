document.addEventListener('DOMContentLoaded', function () {
    const userRole = sessionStorage.getItem('role');

    if (!userRole) {
        alert('Acesso negado! Você precisa fazer login.');
        window.location.href = 'login.html';
    }

    if (userRole === 'admin') {
        document.getElementById('adminSection').style.display = 'block';
    }
});
