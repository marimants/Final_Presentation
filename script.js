let navigation = document.getElementById('navi');
let burgerIcon = document.getElementById('burger');

burgerIcon.addEventListener('click', function() {
    navigation.classList.toggle('active')
})