function filterCombosAndCongelados(){
    const btnCombos = document.querySelector('#btn-combos-filter');
    const btnCongelados = document.querySelector('#btn-congelados-filter');
    const combos = document.querySelectorAll('.combos');
    const congelados = document.querySelectorAll('.congelados');

    const showCongelados = () => {
        congelados.style.display = 'flex';
        btnCongelados.style.color = '#E3A01D';
        combos.style.display = 'none';
        btnCombos.style.color = 'white';
    }

    btnCongelados.addEventListener('click', showCongelados);

}

filterCombosAndCongelados();