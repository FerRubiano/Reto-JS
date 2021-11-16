const letter = document.getElementById("letter");
const number = document.getElementById("number");
const btnA1 = document.getElementById("btnA1");
const btnB2 = document.getElementById("btnB2");
const btnC3 = document.getElementById("btnC3");
const btnD4 = document.getElementById("btnD4");
const btnE5 = document.getElementById("btnE5");
const btnF6 = document.getElementById("btnF6");
const btnG7 = document.getElementById("btnG7");
const btnH8 = document.getElementById("btnH8");
const btnI9 = document.getElementById("btnI9");
const btnJ0 = document.getElementById("btnJ0");
const btnclearLetter = document.getElementById("btnclearLetter");
const btnclearNumber = document.getElementById("btnclearNumber");

const fnA1 = () => {
  if (letter.innerHTML == "") {
    letter.innerHTML = "A";
  } else {
    if (letter.innerHTML == "ABCDEFGHIJ" && number .innerHTML == "") {
      number.innerHTML = 1;
    }
  }
};

const fnB2 = () => {
  if (letter.innerHTML == "A") {
    letter.innerHTML += "B";
  } else {
    if (letter.innerHTML == "") {
      alert("Faltan letras");
    } else {
      if (letter.innerHTML == "ABCDEFGHIJ" && "1") {
        number.innerHTML += 2;
      } else {
        if (letter.innerHTML == "ABCDEFGHIJ" && number.innerHTML == "") {
          alert("faltan numeros");
        }
      }
    }
  }
};

const fnC3 = () => {
  if (letter.innerHTML == "AB") {
    letter.innerHTML += "C"
  } else {
    if (letter.innerHTML == "" || letter.innerHTML.length < 2) {
      alert("Faltan letras");
    } else {
      if (letter.innerHTML == "ABCDEFGHIJ" && number.innerHTML == "12") {
        number.innerHTML += "3";
      } else {
        if (letter.innerHTML == "ABCDEFGHIJ" && number.innerHTML.length < 2) {
          alert("Faltan números");
        }
      }
    }
  }
};

const fnD4 = () => {
  if (letter.innerHTML == "ABC") {
    letter.innerHTML += "D";
  } else {
    if (letter.innerHTML == "" || letter.innerHTML.length < 3) {
      alert("Faltan letras");
    } else {
      if (letter.innerHTML == "ABCDEFGHIJ" && number.innerHTML == "123") {
        number.innerHTML += "4";
      } else {
        if (letter.innerHTML == "ABCDEFGJIJ" && number.innerHTML.length < 3) {
          alert("Faltan numeros");
        }
      }
    }
  }
};

const fnE5 = () => {
  if (letter.innerHTML == "ABCD") {
    letter.innerHTML += "E";
  } else {
    if (letter.innerHTML == "" || letter.innerHTML.length < 4) {
      alert("Faltan letras");
    } else {
      if (letter.innerHTML == "ABCDEFGHIJ" && number.innerHTML == "1234") {
        number.innerHTML += "5";
      } else {
        if (letter.innerHTML == "ABCDEFGJIJ" && number.innerHTML.length < 4) {
          alert("Faltan numeros");
        }
      }
    }
  }
};

const fnF6= () => {
  if (letter.innerHTML == "ABCDE") {
    letter.innerHTML += "F";
  } else {
    if (letter.innerHTML == "" || letter.innerHTML.length < 5 ) {
      alert("Faltan letras");
    } else {
      if (letter.innerHTML == "ABCDEFGHIJ" && number.innerHTML == "12345") {
        number.innerHTML += "6";
      } else {
        if (letter.innerHTML == "ABCDEFGJIJ" && number.innerHTML.length < 5) {
          alert("Faltan numeros");
        }
      }
    }
  }
};

const fnG7 = () => {
  if (letter.innerHTML == "ABCDEF") {
    letter.innerHTML += "G";
  } else {
    if (letter.innerHTML == "" || letter.innerHTML.length < 6) {
      alert("Faltan letras");
    } else {
      if (letter.innerHTML == "ABCDEFGHIJ" && number.innerHTML == "123456") {
        number.innerHTML += "7";
      } else {
        if (letter.innerHTML == "ABCDEFGJIJ" && number.innerHTML.length < 6) {
          alert("Faltan numeros");
        }
      }
    }
  }
};

const fnH8 = () => {
  if (letter.innerHTML == "ABCDEFG") {
    letter.innerHTML += "H";
  } else {
    if (letter.innerHTML == "" || letter.innerHTML.length < 7) {
      alert("Faltan letras");
    } else {
      if (letter.innerHTML == "ABCDEFGHIJ" && number.innerHTML == "1234567") {
        number.innerHTML += "8";
      } else {
        if (letter.innerHTML == "ABCDEFGJIJ" && number.innerHTML.length < 7) {
          alert("Faltan numeros");
        }
      }
    }
  }
};

const fnI9 = () => {
  if (letter.innerHTML == "ABCDEFGH") {
    letter.innerHTML += "I";
  } else {
    if (letter.innerHTML == "" || letter.innerHTML.length < 8) {
      alert("Faltan letras");
    } else {
      if (letter.innerHTML == "ABCDEFGHIJ" && number.innerHTML == "12345678") {
        number.innerHTML += "9";
      } else {
        if (letter.innerHTML == "ABCDEFGJIJ" && number.innerHTML.length < 8) {
          alert("Faltan numeros");
        }
      }
    }
  }
};

const fnJ0 = () => {
  if (letter.innerHTML == "ABCDEFGHI") {
    letter.innerHTML += "J";
  } else {
    if (letter.innerHTML == "" || letter.innerHTML.length < 9) {
      alert("Faltan letras");
    } else {
      if (letter.innerHTML == "ABCDEFGHIJ" && number.innerHTML == "123456789") {
        number.innerHTML += "0";
      } else {
        if (letter.innerHTML == "ABCDEFGJIJ" && number.innerHTML.length < 9) {
          alert("Faltan numeros");
        }
      }
    }
  }
};

const fnClearLetter = () => {
letter.innerHTML = "";
};

const fnClearNumber = () => {
number.innerHTML = "";
};

btnA1.onclick = function (){
    fnA1 ();
};

btnB2.onclick = function (){
    fnB2 ();
};

btnC3.onclick = function(){
    fnC3();
};

btnD4.onclick = function(){
    fnD4();
};

btnE5.onclick = function(){
    fnE5();
};

btnF6.onclick = function(){
  fnF6();
};

btnG7.onclick = function(){
  fnG7();
};

btnH8.onclick = function(){
  fnH8();
};


btnI9.onclick = function(){
  fnI9();
};

btnJ0.onclick = function(){
  fnJ0();
};