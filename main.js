let velger = 0
let selveHint = document.getElementsByClassName("hintKlass")
var showing = [1, 0, 0, 0];
var questions = ['q0', 'q1', 'q2', 'q3'];
let poeng = 20

function next() {
    velger += 1
    var qElems = [];
    for (var i = 0; i < questions.length; i++) {
        qElems.push(document.getElementById(questions[i]));   
    }
    for (var i = 0; i < showing.length; i++) {
        if (showing[i] == 1) {
            qElems[i].style.display = 'none';
            showing[i] = 0;
            if (i == showing.length - 1) {
                qElems[0].style.display = 'block';
                showing[0] = 1;
            } else {
                qElems[i + 1].style.display = 'block';
                showing[i + 1] = 1;
            }
            break;
        }
    } 
    let Alt = document.getElementsByClassName("ignorer");
    let result = [];

    for (let i = 0; i < Alt.length; i++) {
        if (Alt[i].style.display === "none") {
            Alt[i].style.display = "block";
          }
    }  
    if (poeng <= 10) {
        window.open("taperSkjerm.html");
        window.close()
    } 
}

function fjernAlt() {
    let Alt = document.getElementsByClassName("ignorer");
    let result = [];

    for (let i = 0; i < Alt.length; i++) {
        if (Alt[i].style.display === "none") {
            Alt[i].style.display = "block";
          } else {
            Alt[i].style.display = "none";
          }
    }
}

function hint() {
    selveHint[velger].remove()
    selveHint[velger].style.display = 'block'
    velger -= 1
}

function poengSys(event) {
    let text = event.target.value;
    if (text == "feil") {
        poeng -= 1
        document.getElementById("poeng").innerHTML = poeng

    } else if (text == "riktig") {
        document.getElementById("poeng").innerHTML = poeng
    }
}