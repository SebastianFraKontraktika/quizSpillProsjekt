var showing = [1, 0, 0, 0];
var questions = ['q0', 'q1', 'q2', 'q3'];

function next() {
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
        console.log(result)
        if (Alt[i].style.display === "none") {
            Alt[i].style.display = "block";
          }
    }   
}

function fjernAlt() {
    let Alt = document.getElementsByClassName("ignorer");
    let result = [];

    for (let i = 0; i < Alt.length; i++) {
        console.log(result)
        if (Alt[i].style.display === "none") {
            Alt[i].style.display = "block";
          } else {
            Alt[i].style.display = "none";
          }
    }
    console.log(result)
}