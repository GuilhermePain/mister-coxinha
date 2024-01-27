function showModalCombos() {
    const btnPedirCongelado = document.querySelectorAll('#btn-pedir-congelado');
    const fadeBackground = document.querySelector('#fade');
    const modalCombos = document.querySelector('#modal');
    const btnCancelCombos = document.querySelector('#btn-cancel');

    const showModal = () => {
        fadeBackground.style.display = 'block';
        modalCombos.style.display = 'flex';
    }

    const closeModal = () => {
        fadeBackground.style.display = 'none';
        modalCombos.style.display = 'none';
    }

    btnPedirCongelado.forEach(buttons => {
        buttons.addEventListener('click', showModal);
    })
    
    btnCancelCombos.addEventListener('click', closeModal)
    fadeBackground.addEventListener('click', closeModal);
}

showModalCombos();