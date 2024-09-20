document.addEventListener("DOMContentLoaded", function () {
    const openPopupBtn = document.getElementById('openPopupBtn');
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopupBtn = document.getElementById('closePopupBtn');

    // Abrir popup
    openPopupBtn.addEventListener('click', function () {
        popupOverlay.style.display = 'flex'; // Exibir o overlay
        setTimeout(() => {
            document.querySelector('.popup').classList.add('open'); // Animação para aparecer
        }, 10); // Pequeno delay para iniciar animação
    });

    // Fechar popup
    closePopupBtn.addEventListener('click', function () {
        document.querySelector('.popup').classList.remove('open');
        setTimeout(() => {
            popupOverlay.style.display = 'none'; // Esconder após animação
        }, 300); // Tempo igual ao da animação CSS
    });

    // Fechar ao clicar fora do popup
    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            closePopupBtn.click();
        }
    });
});
