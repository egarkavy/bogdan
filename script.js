// Получаем элементы модального окна
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var bioText = document.getElementById("bio");

// Получаем все элементы кандидатов
var candidates = document.getElementsByClassName("candidate");

// Добавляем обработчик событий для каждого кандидата
for (let i = 0; i < candidates.length; i++) {
    candidates[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.getAttribute("data-img");
        captionText.innerHTML = this.querySelector("h2").innerHTML; // Устанавливаем имя кандидата
        bioText.innerHTML = this.getAttribute("data-bio"); // Устанавливаем биографию
    }
}

// Получаем элемент закрытия модального окна
var span = document.getElementsByClassName("close")[0];

// Закрываем модальное окно при клике на элемент закрытия
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне изображения
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

