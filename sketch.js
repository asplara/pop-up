function setup() {
  createCanvas(800, windowHeight);
  background(0,0,0);
  

  
}

function draw() {
    
  
}

var selected = null, 
    x_pos = 0, y_pos = 0,
    x_elem = 0, y_elem = 0; 

function _drag_init(elem) {
  
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}


function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}


function _destroy() {
    selected = null;
}


document.onmousemove = _move_elem;
document.onmouseup = _destroy;


//day1


function showPopup() {
 document.getElementById("modal1").style.display = "block";
}
setTimeout(showPopup, 1000);

document.getElementById('modal1').onmousedown = function () {
    _drag_init(this);
    return false;
};





function showPopup2() {
 document.getElementById("modal2").style.display = "block";
}
setTimeout(showPopup2, 1100);

document.getElementById('modal2').onmousedown = function () {
    _drag_init(this);
    return false;
};






function showPopup3() {
 document.getElementById("modal3").style.display = "block";
}
setTimeout(showPopup3, 1200);

document.getElementById('modal3').onmousedown = function () {
    _drag_init(this);
    return false;
};




function showPopup4() {
 document.getElementById("modal4").style.display = "block";
}
setTimeout(showPopup4, 1300);
document.getElementById('modal4').onmousedown = function () {
    _drag_init(this);
    return false;
};



function showPopup5() {
 document.getElementById("modal5").style.display = "block";
}
setTimeout(showPopup5, 1400);
document.getElementById('modal5').onmousedown = function () {
    _drag_init(this);
    return false;
};




function showPopup6() {
 document.getElementById("modal6").style.display = "block";
}
setTimeout(showPopup6, 1500);
document.getElementById('modal6').onmousedown = function () {
    _drag_init(this);
    return false;
};



function showPopup7() {
 document.getElementById("modal7").style.display = "block";
}
setTimeout(showPopup7, 1600);
document.getElementById('modal7').onmousedown = function () {
    _drag_init(this);
    return false;
};




function showPopup8() {
 document.getElementById("modal8").style.display = "block";
}
setTimeout(showPopup8, 1700);
document.getElementById('modal8').onmousedown = function () {
    _drag_init(this);
    return false;
};




function showPopup9() {
 document.getElementById("modal9").style.display = "block";
}
setTimeout(showPopup9, 1800);
document.getElementById('modal9').onmousedown = function () {
    _drag_init(this);
    return false;
};






//day2





function showPopup10() {
 document.getElementById("modal10").style.display = "block";
}
setTimeout(showPopup10, 31800);
document.getElementById('modal10').onmousedown = function () {
    _drag_init(this);
    return false;
};




function showPopup11() {
 document.getElementById("modal11").style.display = "block";
}
setTimeout(showPopup11, 31900);
document.getElementById('modal11').onmousedown = function () {
    _drag_init(this);
    return false;
};



function showPopup12() {
 document.getElementById("modal12").style.display = "block";
}
setTimeout(showPopup12, 32000);
document.getElementById('modal12').onmousedown = function () {
    _drag_init(this);
    return false;
};



function showPopup13() {
 document.getElementById("modal13").style.display = "block";
}
setTimeout(showPopup13, 32100);
document.getElementById('modal13').onmousedown = function () {
    _drag_init(this);
    return false;
};




function showPopup14() {
 document.getElementById("modal14").style.display = "block";
}
setTimeout(showPopup14, 32200);
document.getElementById('modal14').onmousedown = function () {
    _drag_init(this);
    return false;
};



function showPopup15() {
 document.getElementById("modal15").style.display = "block";
}
setTimeout(showPopup15, 32300);
document.getElementById('modal15').onmousedown = function () {
    _drag_init(this);
    return false;
};



function showPopup16() {
 document.getElementById("modal16").style.display = "block";
}
setTimeout(showPopup16, 32400);
document.getElementById('modal16').onmousedown = function () {
    _drag_init(this);
    return false;
};



function showPopup17() {
 document.getElementById("modal17").style.display = "block";
}
setTimeout(showPopup17, 32500);
document.getElementById('modal17').onmousedown = function () {
    _drag_init(this);
    return false;
};



function showPopup18() {
 document.getElementById("modal18").style.display = "block";
}
setTimeout(showPopup18, 32600);
document.getElementById('modal18').onmousedown = function () {
    _drag_init(this);
    return false;
};







//day3





function showPopup19() {
 document.getElementById("modal19").style.display = "block";
}
setTimeout(showPopup19, 52600);
document.getElementById('modal19').onmousedown = function () {
    _drag_init(this);
    return false;
};


function showPopup20() {
 document.getElementById("modal20").style.display = "block";
}
setTimeout(showPopup20, 52700);
document.getElementById('modal20').onmousedown = function () {
    _drag_init(this);
    return false;
};



function showPopup21() {
 document.getElementById("modal21").style.display = "block";
}
setTimeout(showPopup21, 52800);
document.getElementById('modal21').onmousedown = function () {
    _drag_init(this);
    return false;
};




function showPopup22() {
 document.getElementById("modal22").style.display = "block";
}
setTimeout(showPopup22, 52900);
document.getElementById('modal22').onmousedown = function () {
    _drag_init(this);
    return false;
};




function showPopup23() {
 document.getElementById("modal23").style.display = "block";
}
setTimeout(showPopup23, 53000);
document.getElementById('modal23').onmousedown = function () {
    _drag_init(this);
    return false;
};





function showPopup24() {
 document.getElementById("modal24").style.display = "block";
}
setTimeout(showPopup24, 53100);
document.getElementById('modal24').onmousedown = function () {
    _drag_init(this);
    return false;
};



function showPopup25() {
 document.getElementById("modal25").style.display = "block";
}
setTimeout(showPopup25, 53200);
document.getElementById('modal25').onmousedown = function () {
    _drag_init(this);
    return false;
};







function showPopup26() {
 document.getElementById("modal26").style.display = "block";
}
setTimeout(showPopup26, 53300);
document.getElementById('modal26').onmousedown = function () {
    _drag_init(this);
    return false;
};


function showPopup27() {
 document.getElementById("modal27").style.display = "block";
}
setTimeout(showPopup27, 53400);
document.getElementById('modal27').onmousedown = function () {
    _drag_init(this);
    return false;
};



function showPopup28() {
 document.getElementById("modal28").style.display = "block";
}
setTimeout(showPopup28, 53500);
document.getElementById('modal28').onmousedown = function () {
    _drag_init(this);
    return false;
};




//day4





function showPopup29() {
 document.getElementById("modal29").style.display = "block";
}
setTimeout(showPopup29, 73500);
document.getElementById('modal29').onmousedown = function () {
    _drag_init(this);
    return false;
};


function showPopup30() {
 document.getElementById("modal30").style.display = "block";
}
setTimeout(showPopup30, 73600);
document.getElementById('modal30').onmousedown = function () {
    _drag_init(this);
    return false;
};


function showPopup31() {
 document.getElementById("modal31").style.display = "block";
}
setTimeout(showPopup31, 73700);
document.getElementById('modal31').onmousedown = function () {
    _drag_init(this);
    return false;
};


function showPopup31() {
 document.getElementById("modal31").style.display = "block";
}
setTimeout(showPopup31, 73800);
document.getElementById('modal31').onmousedown = function () {
    _drag_init(this);
    return false;
};




function showPopup32() {
 document.getElementById("modal32").style.display = "block";
}
setTimeout(showPopup32, 73900);
document.getElementById('modal32').onmousedown = function () {
    _drag_init(this);
    return false;
};


function showPopup33() {
 document.getElementById("modal33").style.display = "block";
}
setTimeout(showPopup33, 74000);
document.getElementById('modal33').onmousedown = function () {
    _drag_init(this);
    return false;
};


function showPopup34() {
 document.getElementById("modal34").style.display = "block";
}
setTimeout(showPopup34, 74100);
document.getElementById('modal34').onmousedown = function () {
    _drag_init(this);
    return false;
};



//day5



function showPopup35() {
 document.getElementById("modal35").style.display = "block";
}
setTimeout(showPopup35, 94100);
document.getElementById('modal35').onmousedown = function () {
    _drag_init(this);
    return false;
};


function showPopup36() {
 document.getElementById("modal36").style.display = "block";
}
setTimeout(showPopup36, 94200);
document.getElementById('modal36').onmousedown = function () {
    _drag_init(this);
    return false;
};


function showPopup37() {
 document.getElementById("modal37").style.display = "block";
}
setTimeout(showPopup37, 94300);
document.getElementById('modal37').onmousedown = function () {
    _drag_init(this);
    return false;
};


function showPopup38() {
 document.getElementById("modal38").style.display = "block";
}
setTimeout(showPopup38, 94400);
document.getElementById('modal38').onmousedown = function () {
    _drag_init(this);
    return false;
};


function showPopup39() {
 document.getElementById("modal39").style.display = "block";
}
setTimeout(showPopup39, 94500);
document.getElementById('modal39').onmousedown = function () {
    _drag_init(this);
    return false;
};


function showPopup40() {
 document.getElementById("modal40").style.display = "block";
}
setTimeout(showPopup40, 94600);
document.getElementById('modal40').onmousedown = function () {
    _drag_init(this);
    return false;
};


function showPopup41() {
 document.getElementById("modal41").style.display = "block";
}
setTimeout(showPopup41, 94700);
document.getElementById('modal41').onmousedown = function () {
    _drag_init(this);
    return false;
};


function showPopup42() {
 document.getElementById("modal42").style.display = "block";
}
setTimeout(showPopup42, 94800);
document.getElementById('modal42').onmousedown = function () {
    _drag_init(this);
    return false;
};


