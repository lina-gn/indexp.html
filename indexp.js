
var plusBTns= Array.from(document.querySelectorAll('.fa-plus-circle'))
var minusBTns= Array.from(document.querySelectorAll('.fa-minus-circle'))
var cartBTns= Array.from(document.querySelectorAll('.fas fa-shopping-cart'))
var favs= Array.from(document.querySelectorAll('.fa-heart'))
var cards= Array.from(document.querySelectorAll('.card'))

for (let plusBTn of plusBTns ) {
    plusBTn.addEventListener("click" ,function(){
        plusBTn.nextElementSibling.innerHTML++
        total()
    })
}
for (let minusBTn of minusBTns ) {
    minusBTn.addEventListener("click" ,function(){
        minusBTn.previousElementSibling.innerHTML > 0 ?
        minusBTn.previousElementSibling.innerHTML-- : null , total()
    })
}
for (let fav of favs) {
    fav.addEventListener("click", function(){
        if (fav.style.color=="black"){
            fav.style.color="red"  
        } else {
            fav.style.color="black"  
        }
    })
}
document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');

    let cartClicked = false;

    cartIcon.addEventListener('click', function () {
        if (!cartClicked) {
            cartIcon.classList.add('text-danger'); // Add red color
            cartCount.textContent = '1'; // Update count to 1
            cartClicked = true;
        } else {
            cartIcon.classList.remove('text-danger'); // Remove red color
            cartCount.textContent = '0'; // Update count to 0
            cartClicked = false;
        }
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Example: Perform validation (you can add more complex validation as needed)
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Example: Send form data to server (replace with your actual backend handling)
    alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Optionally clear the form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});