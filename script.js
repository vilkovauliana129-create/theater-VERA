
alert("Добро пожаловать на сайт театра!");

function updatePrice() {
let playPrice = parseInt(document.getElementById("play").value);
let quantity = parseInt(document.getElementById("quantity").value);
let total = playPrice * quantity;
document.getElementById("totalPrice").innerHTML = total;
}

function buyTickets() {
let surname = document.getElementById("surname").value;
let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let play = document.getElementById("play").selectedOptions[0].text;
let row = document.getElementById("row").value;
let seat = document.getElementById("seat").value;
let quantity = document.getElementById("quantity").value;
let totalPrice = document.getElementById("totalPrice").innerHTML;

if (surname && name && phone) {
alert("Спасибо, " + surname + " " + name + "!\n\nСпектакль: " + play + "\nРяд: " + row + "\nМесто: " + seat + "\nКоличество: " + quantity + " шт.\nОбщая стоимость: " + totalPrice + " руб.\n\nМы позвоним вам по номеру " + phone);
} else {
alert("Пожалуйста, заполните фамилию, имя и номер телефона.");
}
}





