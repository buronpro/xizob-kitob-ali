let heading = document.querySelector ("p");

let summa = Math.floor (9433.33);
let dollar = 700* summa;
let uzs = Math.floor (10356.02);
let euro = 120* uzs ;

let tenglash = dollar + euro ;

let chekqogoz = prompt ("Shaxsiy summangizni kiritish surab qolamiz");

if (chekqogoz >= tenglash ){
    heading.textContent = "Oq yo'l Alisher"
} else (
    heading.textContent = "Alishir ozigna sabr qilishga machbursiz "
)
