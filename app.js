let indexQuestion = 0;
let score_tot = 0;
let score_vert = 0;
let listeEnCours = [];

const Titre2 = document.getElementById("titre-principal");
const monBouton = document.getElementById("bouton-lancer");
const jouer_par_thèmes = document.getElementById("jouer_par_thèmes");
const thèmes = document.getElementById("thèmes");
const Chimie = document.getElementById("Chimie");
const Matériaux = document.getElementById("Matériaux");
const Soudure = document.getElementById("Soudure");
const Thermique = document.getElementById("Thermique");
const Retour = document.getElementById("retour");

const conteneurReponses = document.getElementById("conteneur_reponses");
const Question1_bouton1 = document.getElementById("bouton1");
const Question1_bouton2 = document.getElementById("bouton2");
const Question1_bouton3 = document.getElementById("bouton3");
const Question1_bouton4 = document.getElementById("bouton4");

const Valide = document.getElementById("valide");
const Faux = document.getElementById("faux");
const Explication_texte = document.getElementById("explication");
const Suivant = document.getElementById("suivant");

const tousLesBoutons = document.querySelectorAll("#conteneur_reponses button");

const Menu = document.getElementById("menu");
const Quitter = document.getElementById("quitter");
const Score_annonce = document.getElementById("score-annonce");

const Acier = document.getElementById("Acier");
const Laiton = document.getElementById("Laiton"); 
const Fonte = document.getElementById("Fonte"); 
const Inox = document.getElementById("Inox"); 
const Aluminium = document.getElementById("Aluminium");
const Titane = document.getElementById("Titane");

function par_thèmes() {
    Titre2.style.display = "block";
    monBouton.style.display = "none";
    Chimie.style.display = "grid";
    Matériaux.style.display = "grid";
    Soudure.style.display = "grid";
    Thermique.style.display = "grid";
    Retour.style.display = "block";
    jouer_par_thèmes.style.display = "none";

    Menu.style.display = "none";
    conteneurReponses.style.display = "none"; 
    Valide.style.display = "none"; 
    Faux.style.display = "none"; 
    Explication_texte.style.display = "none";
    Suivant.style.display = "none";
    Quitter.style.display = "none";
    Score_annonce.style.display = "none";
    Acier.style.display = "none";
    Laiton.style.display = "none";
    Fonte.style.display = "none";
    Inox.style.display = "none";
    Aluminium.style.display = "none";   
    Titane.style.display = "none";
}

function retour2() {
    Titre2.style.display = "block";
    Chimie.style.display = "none";
    Matériaux.style.display = "none";
    Soudure.style.display = "none";
    Thermique.style.display = "none";
    jouer_par_thèmes.style.display = "block";
    monBouton.style.display = "block";
    Retour.style.display = "none";

    Menu.style.display = "none";
    conteneurReponses.style.display = "none"; 
    Valide.style.display = "none"; 
    Faux.style.display = "none"; 
    Explication_texte.style.display = "none";
    Suivant.style.display = "none";
    Quitter.style.display = "none";
    Score_annonce.style.display = "none";
    Acier.style.display = "none";
    Laiton.style.display = "none";
    Fonte.style.display = "none";
    Inox.style.display = "none";
    Aluminium.style.display = "none";   
    Titane.style.display = "none";
}

function Chimie1() {
    listeEnCours = listeQuestion.filter(q => q.thème === "Chimie");
    lancerQuizz();
}

function Matériaux1() {
    listeEnCours = listeQuestion.filter(q => q.thème === "Matériaux");
    lancerQuizz();
}

function Soudure1() {
    listeEnCours = listeQuestion.filter(q => q.thème === "Soudure");
    lancerQuizz();
}

function Thermique1() {
    listeEnCours = listeQuestion.filter(q => q.thème === "Thermique");
    lancerQuizz();
}

function Quizz_général() {
    listeEnCours = [...listeQuestion];
    lancerQuizz();
}

function lancerQuizz() {
    Titre2.style.display = "block";
    listeEnCours.sort(() => Math.random() - 0.5);
    Titre2.textContent = listeEnCours[indexQuestion].question;

    Question1_bouton1.style.display = "grid";
    Question1_bouton2.style.display = "grid";
    Question1_bouton3.style.display = "grid";
    Question1_bouton4.style.display = "grid";
    conteneurReponses.style.display = "grid";
    Question1_bouton1.textContent = (listeEnCours[indexQuestion].reponse1);
    Question1_bouton2.textContent = (listeEnCours[indexQuestion].reponse2);
    Question1_bouton3.textContent = (listeEnCours[indexQuestion].reponse3);
    Question1_bouton4.textContent = (listeEnCours[indexQuestion].reponse4);
    monBouton.style.display = "none";
    jouer_par_thèmes.style.display = "none";

    Chimie.style.display = "none";
    Matériaux.style.display = "none";
    Soudure.style.display = "none";
    Thermique.style.display = "none";
    Retour.style.display = "none";

    conteneurReponses.style.display = "grid"; 
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#1e272e";
    tousLesBoutons.forEach(bouton => {bouton.style.backgroundColor = "#3498db"});

    Suivant.style.display = "none";
    Quitter.style.display = "block";
    Menu.style.display = "none";
    Score_annonce.style.display = "none";
    Valide.style.display = "none";
    Faux.style.display = "none";
    Explication_texte.style.display = "none"; // <-- AJOUTE CETTE LIGNE

    Question1_bouton1.disabled = false;
    Question1_bouton2.disabled = false;
    Question1_bouton3.disabled = false;
    Question1_bouton4.disabled = false;

    if (listeEnCours[indexQuestion].image) {
        listeEnCours[indexQuestion].photo.style.display = "block";
    } else {
        listeEnCours[indexQuestion].photo.style.display = "none";
    }
}

function reponseCorrecte(e) {
    Valide.style.display = "block";
    Faux.style.display = "none";
    Suivant.style.display = "block";
    Retour.style.display = "none";

    tousLesBoutons.forEach(bouton => {bouton.style.backgroundColor = "#3498db"});

    e.target.style.backgroundColor = "green";

    Quitter.style.display = "block";
    Score_annonce.style.display = "none";
    score_vert = score_vert + 1;
    score_tot = score_tot + 1;

    Question1_bouton1.disabled = true;
    Question1_bouton2.disabled = true;
    Question1_bouton3.disabled = true;
    Question1_bouton4.disabled = true;

    // Affiche l'explication
    if (listeEnCours[indexQuestion].explication) {
        Explication_texte.style.display = "block";
        Explication_texte.textContent = listeEnCours[indexQuestion].explication;
    }

    if (listeEnCours[indexQuestion].image) {
        listeEnCours[indexQuestion].photo.style.display = "block";
    } else {
        listeEnCours[indexQuestion].photo.style.display = "none";
    }
}

function reponseIncorrecte(e) {
    Faux.style.display = "block";
    Valide.style.display = "none";
    Suivant.style.display = "block";
    Retour.style.display = "none";

    tousLesBoutons.forEach(bouton => {bouton.style.backgroundColor = "#3498db"});

    e.target.style.backgroundColor = "red";
    let bonNumero = listeEnCours[indexQuestion].reponse;
    document.getElementById("bouton" + bonNumero).style.backgroundColor = "green";

    Quitter.style.display = "block";
    Score_annonce.style.display = "none";

    Question1_bouton1.disabled = true;
    Question1_bouton2.disabled = true;
    Question1_bouton3.disabled = true;
    Question1_bouton4.disabled = true;
    score_tot = score_tot + 1;

if (listeEnCours[indexQuestion].explication) {
    Explication_texte.style.display = "block";
    Explication_texte.textContent = listeEnCours[indexQuestion].explication;
}

    if (listeEnCours[indexQuestion].image) {
        listeEnCours[indexQuestion].photo.style.display = "block";
    } else {
        listeEnCours[indexQuestion].photo.style.display = "none";
    }
}

function questionSuivante() {
    Acier.style.display = "none";
    Laiton.style.display = "none";
    Fonte.style.display = "none"; 
    Inox.style.display = "none"; 
    Aluminium.style.display = "none"; 
    Titane.style.display = "none";             
    Retour.style.display = "none";
    Explication_texte.style.display = "none";
    indexQuestion = indexQuestion+1;

    if (indexQuestion < listeEnCours.length){
        Titre2.textContent = listeEnCours[indexQuestion].question;
        document.getElementById("titre-principal").style.color = "#6495ED";

        tousLesBoutons.forEach(bouton => {bouton.style.backgroundColor = "#3498db"});
        Question1_bouton1.textContent = (listeEnCours[indexQuestion].reponse1);
        Question1_bouton2.textContent = (listeEnCours[indexQuestion].reponse2);
        Question1_bouton3.textContent = (listeEnCours[indexQuestion].reponse3);
        Question1_bouton4.textContent = (listeEnCours[indexQuestion].reponse4);

        Valide.style.display = "none";
        Faux.style.display = "none";
        Suivant.style.display = "none";
        Quitter.style.display = "block";
        Score_annonce.style.display = "none";

        Question1_bouton1.disabled = false;
        Question1_bouton2.disabled = false;
        Question1_bouton3.disabled = false;
        Question1_bouton4.disabled = false;

        if (listeEnCours[indexQuestion].image) {
            listeEnCours[indexQuestion].photo.style.display = "block";
        } else {
            listeEnCours[indexQuestion].photo.style.display = "none";
        }
    }
    else {
        Score();
    }
}

function Score() {
    Menu.style.display = "block";
    Question1_bouton1.style.display = "none";
    Question1_bouton2.style.display = "none";
    Question1_bouton3.style.display = "none";
    Question1_bouton4.style.display = "none";
    conteneurReponses.style.display = "none";
    Valide.style.display = "none";
    Faux.style.display = "none";
    Explication_texte.style.display = "none";
    Suivant.style.display = "none";
    Titre2.style.display = "none";
    monBouton.style.display = "none";
    Acier.style.display = "none";
    Laiton.style.display = "none";
    Fonte.style.display = "none";
    Inox.style.display = "none"; 
    Aluminium.style.display = "none";  
    Titane.style.display = "none";
    Chimie.style.display = "none";
    Matériaux.style.display = "none";
    Soudure.style.display = "none";
    Thermique.style.display = "none";
    Retour.style.display = "none";

    Score_annonce.style.display = "block";
    Score_annonce.textContent = "Vous avez obtenu " + score_vert + " sur " + score_tot;
}

function Menu2() {
    listeEnCours.sort(() => Math.random() - 0.5);
    Titre2.style.display = "block";
    Titre2.textContent = "METAL QUIZZ";

    Question1_bouton1.style.display = "none";
    Question1_bouton2.style.display = "none";
    Question1_bouton3.style.display = "none";
    Question1_bouton4.style.display = "none";
    conteneurReponses.style.display = "none";
    Quitter.style.display = "none";
    Valide.style.display = "none";
    Faux.style.display = "none";
    Explication_texte.style.display = "none";
    Suivant.style.display = "none";
    Retour.style.display = "none";

    document.getElementById("titre-principal").style.color = "#6495ED";
    tousLesBoutons.forEach(bouton => {bouton.style.backgroundColor = "#3498db"});

    document.body.style.backgroundImage = "url('Metal5.jpg')";
    monBouton.style.display = "block";
    jouer_par_thèmes.style.display = "block";

    indexQuestion = 0;
    Menu.style.display = "none";
    Score_annonce.style.display = "none";
    score_tot = 0;
    score_vert = 0;
}

function verifier(boutonAppuye, e) {
    if (boutonAppuye === listeEnCours[indexQuestion].reponse) {
        reponseCorrecte(e);
    } else {
        reponseIncorrecte(e);
    }
}

Titre2.style.display = "block";
Chimie.style.display = "none";
Matériaux.style.display = "none";
Soudure.style.display = "none";
Thermique.style.display = "none";
jouer_par_thèmes.style.display = "block";
Retour.style.display = "none";

Menu.style.display = "none";
conteneurReponses.style.display = "none"; 
Valide.style.display = "none"; 
Faux.style.display = "none"; 
Explication_texte.style.display = "none";
Suivant.style.display = "none";
Quitter.style.display = "none";
Score_annonce.style.display = "none";
Acier.style.display = "none";
Laiton.style.display = "none";
Fonte.style.display = "none";
Inox.style.display = "none";
Aluminium.style.display = "none";   
Titane.style.display = "none";

monBouton.addEventListener("click", Quizz_général);
Question1_bouton1.addEventListener("click", (e) => verifier(1, e));
Question1_bouton2.addEventListener("click", (e) => verifier(2, e));
Question1_bouton3.addEventListener("click", (e) => verifier(3, e));
Question1_bouton4.addEventListener("click", (e) => verifier(4, e));
Suivant.addEventListener("click", questionSuivante);
Quitter.addEventListener("click", Score);
Menu.addEventListener("click", Menu2);
Chimie.addEventListener("click", Chimie1);
Matériaux.addEventListener("click", Matériaux1);
Soudure.addEventListener("click", Soudure1);
Thermique.addEventListener("click", Thermique1);
jouer_par_thèmes.addEventListener("click", par_thèmes);
Retour.addEventListener("click", retour2);