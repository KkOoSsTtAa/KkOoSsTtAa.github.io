const burgeri = document.getElementById('burgeri');
const krilca = document.getElementById('krilca');
const piletina = document.getElementById('piletina');
const slatkisi = document.getElementById('slatkisi');

const sviBurgeri = document.querySelectorAll('.visakB')
const svaKrilca = document.querySelectorAll('.visakK')
const svaPiletina = document.querySelectorAll('.visakP')
const sviSlatkisi = document.querySelectorAll('.visakS')


burgeri.addEventListener('click', (e) => {
    e.preventDefault();
    sviBurgeri.forEach(element => {
        element.classList.toggle('hidden');
    });
})

krilca.addEventListener('click', (e) => {
    e.preventDefault();
    svaKrilca.forEach(element => {
        element.classList.toggle('hidden');
    });
})

piletina.addEventListener('click', (e) => {
    e.preventDefault();
    svaPiletina.forEach(element => {
        element.classList.toggle('hidden');
    });
})

slatkisi.addEventListener('click', (e) => {
    e.preventDefault();
    sviSlatkisi.forEach(element => {
        element.classList.toggle('hidden');
    });
})