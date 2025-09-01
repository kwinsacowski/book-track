//Unhide Classic Books Read Form
const classicBooksCard = document.getElementById("classic-books");
const classicBooksFormRow = document.getElementById("classicBooksFormRow");

classicBooksCard.addEventListener ("click", trackClassicBooks);
function trackClassicBooks (){
    classicBooksFormRow.classList.remove("hidden");
}


//Unhide Audio Books Read Form
const audioBooksCard = document.getElementById("audio-books");
const audioBooksFormRow = document.getElementById("audioBooksForm");

audioBooksCard.addEventListener ("click", trackAudioBooks);
function trackAudioBooks(){
    audioBooksFormRow.classList.remove("hidden");
}


