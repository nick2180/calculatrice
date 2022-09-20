var plus = document.getElementById('plus');
var moins = document.getElementById('moins');
var multiplier = document.getElementById('multiplier');
var diviser = document.getElementById('diviser');
var retour = document.getElementById('retour');
var egale = document.getElementById('egale');
var c = document.getElementById('c');
var zero = document.getElementById('zero');
var un = document.getElementById('un');
var deux = document.getElementById('deux');
var trois = document.getElementById('trois');
var quatre = document.getElementById('quatre');
var cinq = document.getElementById('cinq');
var six = document.getElementById('six');
var sept = document.getElementById('sept');
var huit = document.getElementById('huit');
var neuf = document.getElementById('neuf');
var resultat = document.getElementById('resultat');

var opperand;

var nb1 = 0;
var nb2 = 0;

plus.addEventListener('click', typeOperation);
moins.addEventListener('click', typeOperation);
multiplier.addEventListener('click', typeOperation);
diviser.addEventListener('click', typeOperation);

zero.addEventListener('click', onClick);
un.addEventListener('click', onClick);
deux.addEventListener('click', onClick);
trois.addEventListener('click', onClick);
quatre.addEventListener('click', onClick);
cinq.addEventListener('click', onClick);
six.addEventListener('click', onClick);
sept.addEventListener('click', onClick);
huit.addEventListener('click', onClick);
neuf.addEventListener('click', onClick);

var passerAuSecondNombre = false;
var finOperation = false;


function onClick() {

    if (finOperation && passerAuSecondNombre) {
        nb1 = 0;
        nb2 = 0;
        passerAuSecondNombre = false;
        finOperation = false;
    }

    if (!passerAuSecondNombre) {
        nb1 += this.innerHTML;
        resultat.innerHTML = Number(nb1);
        nb1 = Number(nb1);
    } else {
        nb2 += this.innerHTML;

        resultat.innerHTML += this.innerHTML;
    }
}

function typeOperation() {
    opperand = this.id;

    passerAuSecondNombre = true;

    if (opperand === 'plus') {
        resultat.innerHTML = nb1 + ' + ';
    }
    else if (opperand === 'moins') {
        resultat.innerHTML = nb1 + ' - ';
    }
    else if (opperand === 'diviser') {
        resultat.innerHTML = nb1 + ' / ';
    }
    else {
        resultat.innerHTML = nb1 + ' * ';
    }
}

c.addEventListener('click', effacer);

function effacer() {
    resultat.innerHTML = '';
    nb1 = 0;
    nb2 = 0;
    opperand = '';
    passerAuSecondNombre = false;
}

egale.addEventListener('click', calculerResultat);

function calculerResultat() {
    let resultatFinal;
    nb2 = Number(nb2);
    nb1 = Number(nb1);

    if (opperand === 'plus') {
        resultatFinal = nb1 + nb2;
    }
    else if (opperand === 'moins') {
        resultatFinal = nb1 - nb2;
    }
    else if (opperand === 'diviser') {
        resultatFinal = nb1 / nb2;
    }
    else {
        resultatFinal = nb1 * nb2;
    }

    resultat.innerHTML = resultatFinal;

    finOperation = true;
}

