var plus = document.getElementById('plus');
var moins = document.getElementById('moins');
var multiplier = document.getElementById('multiplier');
var diviser = document.getElementById('diviser');
var retour = document.getElementById('retourArriere');
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
var operation;

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

    if (opperand === 'plus') {
        operation = ' + ';
        resultat.innerHTML = nb1 + operation;

    }
    else if (opperand === 'moins') {
        operation = ' - ';
        resultat.innerHTML = nb1 + operation;
    }
    else if (opperand === 'diviser') {
        operation = ' / ';
        resultat.innerHTML = nb1 + operation;
    }
    else {
        operation = ' * ';
        resultat.innerHTML = nb1 + operation;
    }

    if (passerAuSecondNombre && finOperation) {
        resultat.innerHTML = resultat.innerHTML.slice(0, -2) + operation;
        passerAuSecondNombre = false;
        finOperation = false;
    }

    passerAuSecondNombre = true;
}

c.addEventListener('click', effacer);

function effacer() {
    resultat.innerHTML = '';
    nb1 = 0;
    nb2 = 0;
    opperand = '';
    passerAuSecondNombre = false;
}

retour.addEventListener('click', retourArriere);

function retourArriere() {

    if (!passerAuSecondNombre) {
        nb1 = String(nb1).slice(0, -1);
        nb1 = Number(nb1);
        resultat.innerHTML = nb1;
    } else {
        nb2 = String(nb2).slice(0, -1);
        resultat.innerHTML = nb1 + operation + nb2;
        nb2 = Number(nb2);
    }

    if (passerAuSecondNombre && nb2 === 0) {
        operation = '';
        passerAuSecondNombre = false;
        resultat.innerHTML = nb1;
    }
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
        (nb2 != 0) ? resultatFinal = nb1 / nb2 : resultatFinal = 'Impossible de diviser par 0';
    }
    else {
        resultatFinal = nb1 * nb2;
    }

    resultat.innerHTML = resultatFinal;
    resultatFinal = Number(resultatFinal);

    nb1 = resultatFinal;
    nb2 = 0;

    finOperation = true;
}

