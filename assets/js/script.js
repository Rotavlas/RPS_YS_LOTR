let userChoice

var iaVictoryCount = Number(localStorage.getItem("iaWinsCount")) 
var userVictoryCount = Number(localStorage.getItem("userWinsCount")) 

if ( userVictoryCount == null ) {
    userVictoryCount = 0
} else if (iaVictoryCount == null ) {
    iaVictoryCount = 0
} // Securité pour le calcul du taux de victoire ( et eviter ainsi les division par 0 )

console.log("IA "+ iaVictoryCount + " || USER " + userVictoryCount)

var dmgTaken = new Audio('assets/audio/dmgTook.mp3');
var dmgSend = new Audio('assets/audio/dmgSend.mp3');
var mainAudio = new Audio('assets/audio/LOTR.mp3')
mainAudio.play() // variables des sons

// Constantes des quantités de vie
const threeHearts = `<i class="fa-solid fa-heart fa-3x"></i>  <i class="fa-solid fa-heart fa-3x"></i><i class="fa-solid fa-heart fa-3x"></i>`
const twoHearts = `<i class="fa-solid fa-heart fa-3x"></i>  <i class="fa-solid fa-heart fa-3x"></i><i class="fa-regular fa-heart fa-3x"></i>`
const oneHeart = `<i class="fa-solid fa-heart fa-3x"></i>  <i class="fa-regular fa-heart fa-3x"></i><i class="fa-regular fa-heart fa-3x"></i>`
const zeroHeart = `<i class="fa-regular fa-heart fa-3x"></i>  <i class="fa-regular fa-heart fa-3x"></i><i class="fa-regular fa-heart fa-3x"></i>` 

let userHealth = 3
let iaHealth = 3

/* Lancer la fonction startGame avec différentes valeurs en fonctions du personnage choisi */
var elfe = document.getElementById('elfe')
elfe.addEventListener('click', () => {startGame(0)})
var orc = document.getElementById('orc')
orc.addEventListener('click', () => {startGame(1)})
var hobbit = document.getElementById('hobbit')
hobbit.addEventListener('click', () => {startGame(2)})
var humain = document.getElementById('humain')
humain.addEventListener('click', () => {startGame(3)})
var nain = document.getElementById('nain')
nain.addEventListener('click', () => {startGame(4)})

var elfeDesktop = document.getElementById('elfeDesktop')
elfeDesktop.addEventListener('click', () => {startGame(0)})
var orcDesktop = document.getElementById('orcDesktop')
orcDesktop.addEventListener('click', () => {startGame(1)})
var hobbitDesktop = document.getElementById('hobbitDesktop')
hobbitDesktop.addEventListener('click', () => {startGame(2)})
var humainDesktop = document.getElementById('humainDesktop')
humainDesktop.addEventListener('click', () => {startGame(3)})
var nainDesktop = document.getElementById('nainDesktop')
nainDesktop.addEventListener('click', () => {startGame(4)})

function getIaChoice(max) {
    return  parseInt(Math.random() * max)
}

function startGame(userChoice) { // Fonction du lancement de la partie apres le clique d'une image du caroussel
    let userVictory = false
    let iaVictory = false
    let iaChoice = getIaChoice(5)
    
    function animationTrigger(chara1 , chara2) {

        getUserHealth(userHealth)
        getIaHealth(iaHealth)

        let animationZone = document.getElementById("animationZone")

        if (chara1 == 0 ) {
            chara1 = 'elf.png'
        } else if (chara1 == 1 ) {
            chara1 = 'orc.png'
        } else if (chara1 == 2 ) {
            chara1 = 'hobbit.png'
        } else if ( chara1 == 3 ) {
            chara1 = 'knight.png'
        } else if ( chara1 == 4 ) {
            chara1 = 'dwarf.png'
        }

        if (chara2 == 0 ) {
            chara2 = 'elfReversed.png'
        } else if (chara2 == 1 ) {
            chara2 = 'orcReversed.png'
        } else if (chara2 == 2 ) {
            chara2 = 'hobbitReversed.png'
        } else if ( chara2 == 3 ) {
            chara2 = 'knightReversed.png'
        } else if ( chara2 == 4 ) {
            chara2 = 'dwarfReversed.png'
        }

        animationZone.innerHTML = `
        <img src="assets/images/${chara1}" class="d-block w-75 col text-start">
        <img src="assets/images/${chara2}" class="d-block w-75 col text-end">
        `
    }
    animationTrigger(userChoice , iaChoice)

    if (userChoice == 0 && iaChoice == 1) { // Verification des conditions de victoires 
        userVictory = true
        dmgSend.play() // A chaque fois le son correspondant se joue
    } else if (userChoice == 1 && iaChoice == 0) {
        iaVictory = true
        dmgTaken.play()
    } else if (userChoice == 1 && iaChoice == 2) {
        userVictory = true
        dmgSend.play()
    } else if (userChoice == 2 && iaChoice == 1) {
        iaVictory = true
        dmgTaken.play()
    } else if (userChoice == 2 && iaChoice == 3) {
        userVictory = true
        dmgSend.play()
    } else if (userChoice == 3 && iaChoice == 2) {
        iaVictory = true
        dmgTaken.play()
    } else if (userChoice == 3 && iaChoice == 4) {
        userVictory = true
        dmgSend.play()
    } else if (userChoice == 4 && iaChoice == 3) {
        iaVictory = true
        dmgTaken.play()
    } else if (userChoice == 4 && iaChoice == 0) {
        userVictory = true
        dmgSend.play()
    } else if (userChoice == 0 && iaChoice == 4) {
        iaVictory = true
        dmgTaken.play()
    } else if (userChoice == 0 && iaChoice == 3) {
        userVictory = true
        dmgSend.play()
    } else if (userChoice == 3 && iaChoice == 0) {
        iaVictory = true
        dmgTaken.play()
    } else if (userChoice == 3 && iaChoice == 1) {
        userVictory = true
        dmgSend.play()
    } else if (userChoice == 1 && iaChoice == 3) {
        iaVictory = true
        dmgTaken.play()
    } else if (userChoice == 1 && iaChoice == 4) {
        userVictory = true
        dmgSend.play()
    } else if (userChoice == 4 && iaChoice == 1) {
        iaVictory = true
        dmgTaken.play()
    } else if (userChoice == 4 && iaChoice == 2) {
        userVictory = true
        dmgSend.play()
    } else if (userChoice == 2 && iaChoice == 4) {
        iaVictory = true
        dmgTaken.play()
    } else if (userChoice == 2 && iaChoice == 0) {
        userVictory = true
        dmgSend.play()
    }else if (userChoice == 0 && iaChoice == 2) {
        iaVictory = true
        dmgTaken.play()
    }

    if (userChoice == iaChoice) { // verification de l'egalitée
        alert("Égalité ! Choisissez à nouveau !")
    }

    if (iaVictory == true ){
        userHealth = parseInt(userHealth - 1)
        getUserHealth(userHealth)
    }

    if (userVictory == true ){
        iaHealth = parseInt(iaHealth - 1)
        getIaHealth(iaHealth)
    }

    localStorage.setItem('vieIA', iaHealth);
    localStorage.setItem('vieUSER', userHealth);
}

function getUserHealth(userHealth){ // Mise a jour de la vie du joueur
    let container = document.getElementById("playerHealthBar")
    container.setAttribute('id','playerHealthBar')
    if  (userHealth == 3){
        container.innerHTML = threeHearts
    }else if (userHealth == 2){
        container.innerHTML = twoHearts
    }else if (userHealth == 1){
        container.innerHTML = oneHeart
    }else if (userHealth == 0){
        container.innerHTML = zeroHeart
        alert("L'IA gagne la partie !")

        iaVictoryCount += 1 
        localStorage.setItem('iaWinsCount', iaVictoryCount);
        
        var playButton = document.getElementById('playButton')
        var resetButton = document.getElementById('resetButton')
        playButton.classList.remove("d-none")
        playButton.classList.add("d-block")
        resetButton.addEventListener('click', () => {reset()}) // lors de la fin de la partie , supression du caroussel puis affichage du bouton rejouer

        var carousel = document.getElementById('carousel')
        carousel.classList.add('d-none')
        var carousel2 = document.getElementById('carouselExampleIndicators')
        carousel2.classList.add('d-none')
        console.log("IA --> "+iaVictoryCount)
        console.log("USER --> "+userVictoryCount)
    }
    return container
}

function getIaHealth(iaHealth){ // Mise a jour de la vie de l IA
    let container = document.getElementById("iaHealthBar")
    container.setAttribute('id','iaHealthBar')
    if (iaHealth == 3){
        container.innerHTML = threeHearts
    }else if (iaHealth == 2){
        container.innerHTML = twoHearts
    }else if (iaHealth == 1){
        container.innerHTML = oneHeart
    }else if (iaHealth == 0){
        container.innerHTML = zeroHeart
        alert('Vous gagnez la partie !')

        userVictoryCount += 1 
        localStorage.setItem('userWinsCount', userVictoryCount);

        var playButton = document.getElementById('playButton')
        var resetButton = document.getElementById('resetButton')
        playButton.classList.remove("d-none")
        playButton.classList.add("d-block")
        resetButton.addEventListener('click', () => {reset()})// lors de la fin de la partie , supression du caroussel puis affichage du bouton rejouer

        var carousel = document.getElementById('carousel')
        carousel.classList.add('d-none')
        var carousel2 = document.getElementById('carouselExampleIndicators')
        carousel2.classList.add('d-none')
        console.log("IA --> "+ iaVictoryCount)
        console.log("USER ---> " +userVictoryCount)
    }
    return container
}



function reset(){ // Bouton pour relancer une partie afficher uniquement lors de la mort de l'un des camp
    let container = document.getElementById("playerHealthBar")
    container.setAttribute('id','playerHealthBar')
    container.innerHTML = threeHearts

    let iacontainer = document.getElementById("iaHealthBar")
    iacontainer.setAttribute('id','iaHealthBar')
    iacontainer.innerHTML = threeHearts

    userHealth = 3
    iaHealth = 3

    var playButton = document.getElementById('playButton')
    playButton.classList.remove("d-block")
    playButton.classList.add("d-none")
    

    //localStorage.clear()

    localStorage.setItem('vieIA', iaHealth);
    localStorage.setItem('vieUSER', userHealth);

    getIaHealth(3)
    getUserHealth(3)
}

var iaWins = parseInt(localStorage.getItem('iaWinsCount'))
var userWins = parseInt(localStorage.getItem('userWinsCount'))
totalGames = parseInt(iaWins + userWins)
var totalRate =  (( userWins / totalGames ) *100).toFixed(2)
window.onload = function() { // Systeme de sauvegarde de la partie si l'on quitte avec du local storage
    let userVie
    function outRate() {
        let location = document.getElementById("footer")
        location.innerHTML = `
        <h3> Taux de Victoire : ${totalRate} % </h3>
        <i class="fa-solid fa-music-note col text-end fa-3x"></i>
         `
        
    }
    outRate()
    document.getElementById('iaHealthBar').innerHTML = localStorage.getItem('vieIA')
    document.getElementById('iaHealthBar').append(getIaHealth(localStorage.getItem("vieIA")));
    if (localStorage.getItem('vieUser') == 3){
        userVie.innerHTML = threeHearts
    }else if (localStorage.getItem('vieUser') == 2){
        userVie.innerHTML = twoHearts
    }else if (localStorage.getItem('vieUser') == 1){
        userVie.innerHTML = oneHeart
    }else if (localStorage.getItem('vieUser') == 0){
        userVie.innerHTML = zeroHeart
        alert('Vous gagnez la partie !')


        var playButton = document.getElementById('playButton')
        var resetButton = document.getElementById('resetButton')
        playButton.classList.remove("d-none")
        playButton.classList.add("d-block")
        resetButton.addEventListener('click', () => {reset()})

        var carousel = document.getElementById('carousel')
        carousel.classList.add('d-none')
    }
    document.getElementById('playerHealthBar').innerHTML = userVie
    document.getElementById('playerHealthBar').append(userVie);
}
    


// var iaWins = iaWins + iaVictoryCount
// var userWins = userWins + userVictoryCount

// localStorage.setItem('IaWins', iaWins);
// localStorage.setItem('UserWins', userVictoryCount)

// let winRate = userVictoryCount / (iaVictoryCount+userVictoryCount)

// let footer = document.getElementById('footer')
// footer.innerHTML = `
// <h3> Taux de victoire : ${winRate}</h3>
// `
