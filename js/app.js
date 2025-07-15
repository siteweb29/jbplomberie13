
//carrousselle
document.addEventListener('DOMContentLoaded', main);
function main(){
    let liste = ["https://i.ibb.co/9Hf0nLRY/IMG-20250702-WA0028.jpg","https://i.ibb.co/3mVnx0FV/IMG-20250702-WA0029.jpg","https://i.ibb.co/GvXtDHFC/IMG-20250702-WA0026.jpg","https://i.ibb.co/W4FypRDn/IMG-20250702-WA0027.jpg","https://i.ibb.co/PzftpK4n/IMG-20250702-WA0024.jpg","https://i.ibb.co/sJ99k2TX/IMG-20250702-WA0025.jpg","https://i.ibb.co/5X0M59rN/IMG-20250702-WA0023.jpg","https://i.ibb.co/sdq9XtGY/IMG-20250702-WA0020.jpg","https://i.ibb.co/9HcMkhYk/IMG-20250702-WA0021.jpg", "https://i.ibb.co/vxnqjXNx/IMG-20250702-WA0022.jpg","https://i.ibb.co/PvtJkrGd/IMG-20250702-WA0019.jpg","https://i.ibb.co/HfjYS1WK/Whats-App-Image-2025-07-02-19-15-00-2b793d74.jpg","https://i.ibb.co/DHzwS74D/Whats-App-Image-2025-07-02-19-05-13-8f8f3297.jpg"];
    let button_gauche = document.getElementById("b_gauche");
    let button_droite = document.getElementById("b_droite");
    document.getElementById("img1").src = liste[0];
    document.getElementById("img2").src = liste[1];
    document.getElementById("img3").src = liste[2];

    document.querySelectorAll("button").forEach(element => {element.addEventListener('click', event => {
        if (element === button_gauche){
            liste.push(liste[0]);
            liste.shift()
        }
        if (element === button_droite){
            liste.unshift(liste[liste.length-1]);
            liste.splice(liste.length-1, 1);
            console.log(liste);
        }
        document.getElementById("img1").src = liste[0];
        document.getElementById("img2").src = liste[1];
        document.getElementById("img3").src = liste[2];

    })})
}