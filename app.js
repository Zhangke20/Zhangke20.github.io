// Liste de cartes Clash Royale avec mapping vers les images
const CARTES_CLASH_ROYALE = [
    { nom: "Archers", image: "archers" },
    { nom: "Barbares", image: "barbarians" },
    { nom: "Chauves-souris", image: "bats" },
    { nom: "Bombardier", image: "bomber" },
    { nom: "Esprit electrique", image: "electro-spirit" },
    { nom: "Esprit de feu", image: "fire-spirit" },
    { nom: "Esprit de glace", image: "ice-spirit" },
    { nom: "Chevalier", image: "knight" },
    { nom: "Gobelins", image: "goblins" },
    { nom: "Gobelins a lances", image: "spear-goblins" },
    { nom: "Gang de gobelins", image: "goblin-gang" },
    { nom: "Squelettes", image: "skeletons" },
    { nom: "Armee de squelettes", image: "skeleton-army" },
    { nom: "Gargouilles", image: "minions" },
    { nom: "Horde de gargouilles", image: "minion-horde" },
    { nom: "Recrues royales", image: "royal-recruits" },
    { nom: "Gardes", image: "guards" },
    { nom: "Canon", image: "cannon" },
    { nom: "Mortier", image: "mortar" },
    { nom: "Tesla", image: "tesla" },
    { nom: "Fleches", image: "arrows" },
    { nom: "Boule de neige geante", image: "giant-snowball" },
    { nom: "Electrocution", image: "zap" },
    { nom: "Colis royal", image: "royal-delivery" },
    { nom: "Geant", image: "giant" },
    { nom: "Mini P.E.K.K.A", image: "mini-pekka" },
    { nom: "Mousquetaire", image: "musketeer" },
    { nom: "Valkyrie", image: "valkyrie" },
    { nom: "Sorcier", image: "wizard" },
    { nom: "Chevaucheur de cochon", image: "hog-rider" },
    { nom: "Golem de glace", image: "ice-golem" },
    { nom: "Belier de combat", image: "battle-ram" },
    { nom: "Chevaucheuse de belier", image: "ram-rider" },
    { nom: "Chasseur", image: "hunter" },
    { nom: "Bebe dragon", image: "baby-dragon" },
    { nom: "Ballon", image: "balloon" },
    { nom: "Bourreau", image: "executioner" },
    { nom: "Prince", image: "prince" },
    { nom: "Prince noir", image: "dark-prince" },
    { nom: "Dragon electrique", image: "electro-dragon" },
    { nom: "Geant electrique", image: "electro-giant" },
    { nom: "Squelette geant", image: "giant-skeleton" },
    { nom: "Golem", image: "golem" },
    { nom: "P.E.K.K.A", image: "pekka" },
    { nom: "Sorciere", image: "witch" },
    { nom: "Brise-murs", image: "wall-breakers" },
    { nom: "Bouliste", image: "bowler" },
    { nom: "Arbalete X", image: "x-bow" },
    { nom: "Foreuse a gobelins", image: "goblin-drill" },
    { nom: "Charrette a canon", image: "cannon-cart" },
    { nom: "Foudre", image: "lightning" },
    { nom: "Rage", image: "rage" },
    { nom: "Gel", image: "freeze" },
    { nom: "Tornade", image: "tornado" },
    { nom: "Poison", image: "poison" },
    { nom: "Boule de feu", image: "fireball" },
    { nom: "Roquette", image: "rocket" },
    { nom: "Buche", image: "the-log" },
    { nom: "Cimetiere", image: "graveyard" },
    { nom: "Dragon de l'enfer", image: "inferno-dragon" },
    { nom: "Molosse de lave", image: "lava-hound" },
    { nom: "Fantome royal", image: "royal-ghost" },
    { nom: "Bucheron", image: "lumberjack" },
    { nom: "Mega chevalier", image: "mega-knight" },
    { nom: "Princesse", image: "princess" },
    { nom: "Bandit", image: "bandit" },
    { nom: "Mineur", image: "miner" },
    { nom: "Archer magique", image: "magic-archer" },
    { nom: "Sorcier electrique", image: "electro-wizard" },
    { nom: "Sorcier de glace", image: "ice-wizard" },
    { nom: "Roi des squelettes", image: "skeleton-king" },
    { nom: "Reine des archers", image: "archer-queen" },
    { nom: "Moine", image: "monk" },
    { nom: "Petit Prince", image: "little-prince" },
    { nom: "Sparky", image: "sparky" },
    { nom: "Phoenix", image: "phoenix" },
    { nom: "Mega gargouille", image: "mega-minion" },
    { nom: "Tour a bombes", image: "bomb-tower" },
    { nom: "Fournaise", image: "https://cdns3.royaleapi.com/cdn-cgi/image/w=150,h=180,format=auto/static/img/cards/v9-f09d5c9d/furnace.png", customUrl: true },
    { nom: "Tour de l'enfer", image: "inferno-tower" },
    { nom: "Clone", image: "clone" },
    { nom: "Miroir", image: "mirror" },
    { nom: "Chevalier d'or", image: "golden-knight" },
    { nom: "Mineur de combat", image: "mighty-miner" }
];

// Paires de cartes SIMILAIRES (proches dans le jeu - meme type/mecanique)
const PAIRES_SIMILAIRES = [
    // Esprits
    ["Esprit electrique", "Esprit de feu"],
    ["Esprit de feu", "Esprit de glace"],
    ["Esprit electrique", "Esprit de glace"],
    // Gobelins
    ["Gobelins", "Gobelins a lances"],
    ["Gobelins", "Gang de gobelins"],
    ["Gobelins a lances", "Gang de gobelins"],
    // Squelettes
    ["Squelettes", "Armee de squelettes"],
    ["Squelettes", "Gardes"],
    ["Armee de squelettes", "Gardes"],
    // Gargouilles
    ["Gargouilles", "Horde de gargouilles"],
    ["Gargouilles", "Mega gargouille"],
    ["Horde de gargouilles", "Mega gargouille"],
    // Princes
    ["Prince", "Prince noir"],
    ["Prince", "Petit Prince"],
    ["Prince noir", "Petit Prince"],
    // Dragons
    ["Bebe dragon", "Dragon electrique"],
    ["Dragon electrique", "Dragon de l'enfer"],
    ["Bebe dragon", "Dragon de l'enfer"],
    // Geants
    ["Geant", "Geant electrique"],
    ["Geant", "Squelette geant"],
    ["Golem", "Golem de glace"],
    // Sorciers
    ["Sorcier", "Sorciere"],
    ["Sorcier", "Sorcier electrique"],
    ["Sorcier", "Sorcier de glace"],
    ["Sorcier electrique", "Sorcier de glace"],
    // P.E.K.K.A
    ["P.E.K.K.A", "Mini P.E.K.K.A"],
    // Chevaliers
    ["Chevalier", "Mega chevalier"],
    ["Chevalier", "Chevalier d'or"],
    ["Mega chevalier", "Chevalier d'or"],
    // Archers
    ["Archers", "Archer magique"],
    ["Archers", "Reine des archers"],
    ["Archer magique", "Reine des archers"],
    ["Mousquetaire", "Chasseur"],
    // Mineurs
    ["Mineur", "Mineur de combat"],
    // Beliers
    ["Belier de combat", "Chevaucheuse de belier"],
    // Tours defensives
    ["Canon", "Charrette a canon"],
    ["Tesla", "Tour de l'enfer"],
    ["Tour a bombes", "Mortier"],
    ["Canon", "Tesla"],
    // Sorts offensifs
    ["Boule de feu", "Poison"],
    ["Boule de feu", "Roquette"],
    ["Foudre", "Roquette"],
    ["Poison", "Cimetiere"],
    // Petits sorts
    ["Electrocution", "Boule de neige geante"],
    ["Fleches", "Buche"],
    ["Electrocution", "Fleches"],
    // Legendaires volants
    ["Molosse de lave", "Ballon"],
    ["Princesse", "Archer magique"],
    // Rois
    ["Roi des squelettes", "Reine des archers"],
    // Clones/Miroir
    ["Clone", "Miroir"],
    // Rage/Gel
    ["Rage", "Gel"],
    // Bandits
    ["Bandit", "Fantome royal"]
];

// URL de base pour les images (branche master pour images mises a jour)
const IMAGE_BASE_URL = "https://raw.githubusercontent.com/RoyaleAPI/cr-api-assets/master/cards-150-gold/";

// Configuration du jeu
let gameConfig = {
    playerCount: 3,
    impostorCount: 1,
    gameMode: 'random' // 'random' ou 'similar'
};

// Etat du jeu
let gameState = {
    cards: [],  // Contient { nom, image } pour chaque joueur
    impostorIndices: [],
    revealed: []
};

// Random robuste (crypto si dispo)
function randomInt(max) {
    if (window.crypto && window.crypto.getRandomValues) {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0] % max;
    }
    return Math.floor(Math.random() * max);
}

// Melange (Fisher-Yates)
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = randomInt(i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Trouver une carte par son nom
function findCardByName(name) {
    return CARTES_CLASH_ROYALE.find(c => c.nom === name);
}

function pickCard() {
    return CARTES_CLASH_ROYALE[randomInt(CARTES_CLASH_ROYALE.length)];
}

// Selectionner une paire similaire aleatoire
function selectSimilarPair() {
    const pair = PAIRES_SIMILAIRES[randomInt(PAIRES_SIMILAIRES.length)];
    const card1 = findCardByName(pair[0]);
    const card2 = findCardByName(pair[1]);
    // Melanger pour que civil/imposteur soit aleatoire
    if (randomInt(2) === 0) {
        return [card1, card2];
    }
    return [card2, card1];
}

// Selectionner 2 cartes differentes selon le mode
function selectTwoDifferentCards() {
    if (gameConfig.gameMode === 'similar') {
        return selectSimilarPair();
    }
    // Mode aleatoire classique
    const civilCard = pickCard();
    let impostorCard = pickCard();
    while (impostorCard.nom === civilCard.nom) {
        impostorCard = pickCard();
    }
    return [civilCard, impostorCard];
}

// Changer le mode de jeu
function setGameMode(mode) {
    gameConfig.gameMode = mode;

    // Mettre a jour les boutons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        if (btn.dataset.mode === mode) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    // Mettre a jour le texte d'info
    const modeInfo = document.getElementById('modeInfo');
    if (modeInfo) {
        if (mode === 'similar') {
            modeInfo.textContent = "🔥 Cartes proches = plus difficile !";
        } else {
            modeInfo.textContent = "Deux cartes complètement différentes";
        }
    }

    // Nouvelle partie avec le nouveau mode
    startNewGame();
}

// Selectionner le nombre de joueurs
function selectPlayers(count) {
    gameConfig.playerCount = count;

    // 3 ou 4 joueurs = 1 imposteur, 5 joueurs = 2 imposteurs
    if (count === 5) {
        gameConfig.impostorCount = 2;
    } else {
        gameConfig.impostorCount = 1;
    }

    // Mettre a jour les infos affichees
    updateImpostorInfo();

    // Mettre a jour les boutons de selection
    document.querySelectorAll('.select-btn').forEach((btn, index) => {
        const btnCount = index + 3;
        if (btnCount === count) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    // Generer les cartes joueurs
    generatePlayerCards();

    // Demarrer une nouvelle partie
    startNewGame();
}

// Mettre a jour l'info des imposteurs
function updateImpostorInfo() {
    const count = gameConfig.playerCount;
    const impostors = gameConfig.impostorCount;
    const civils = count - impostors;

    const infoText = `${count} joueurs = ${impostors} imposteur${impostors > 1 ? 's' : ''}`;
    document.getElementById('impostorsInfo').textContent = infoText;

    const footerText = `${civils} civil${civils > 1 ? 's' : ''} - ${impostors} imposteur${impostors > 1 ? 's' : ''}`;
    document.getElementById('footerInfo').textContent = footerText;
}

// Generer les cartes joueurs dynamiquement
function generatePlayerCards() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';

    for (let i = 1; i <= gameConfig.playerCount; i++) {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.id = `player${i}`;
        card.onclick = () => revealCard(i);

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <span class="player-number">${i}</span>
                    <span class="tap-text">Appuie pour voir</span>
                </div>
                <div class="card-back">
                    <img class="card-image" id="image${i}" src="" alt="">
                    <span class="card-word" id="word${i}"></span>
                </div>
            </div>
        `;

        gameBoard.appendChild(card);
    }
}

// Demarrer une nouvelle partie
function startNewGame() {
    const [civilCard, impostorCard] = selectTwoDifferentCards();
    const playerCount = gameConfig.playerCount;
    const impostorCount = gameConfig.impostorCount;

    // Creer le tableau des roles
    let roles = [];
    for (let i = 0; i < playerCount - impostorCount; i++) {
        roles.push(civilCard);
    }
    for (let i = 0; i < impostorCount; i++) {
        roles.push(impostorCard);
    }

    // Melanger les roles
    roles = shuffle(roles);

    gameState.cards = roles;
    gameState.impostorIndices = roles.map((card, idx) => card.nom === impostorCard.nom ? idx : -1).filter(idx => idx !== -1);
    gameState.revealed = new Array(playerCount).fill(false);

    // Mettre a jour l'affichage
    for (let i = 1; i <= playerCount; i++) {
        const card = gameState.cards[i - 1];
        const wordEl = document.getElementById(`word${i}`);
        const imageEl = document.getElementById(`image${i}`);
        const playerEl = document.getElementById(`player${i}`);

        if (wordEl) wordEl.textContent = card.nom;
        if (imageEl) {
            imageEl.src = card.customUrl ? card.image : IMAGE_BASE_URL + card.image + ".png";
            imageEl.alt = card.nom;
        }
        if (playerEl) playerEl.classList.remove('revealed');
    }

    // Choisir aleatoirement le joueur qui commence
    const startingPlayer = randomInt(playerCount) + 1;
    const startingEl = document.getElementById('startingPlayer');
    if (startingEl) {
        startingEl.textContent = `🎯 Le joueur ${startingPlayer} commence !`;
    }

    const btn = document.getElementById('newGameBtn');
    btn.textContent = "C'est parti !";
    setTimeout(() => {
        btn.textContent = "Nouvelle partie";
    }, 1200);
}

// Revealer/cacher une carte
function revealCard(playerNum) {
    const card = document.getElementById(`player${playerNum}`);

    if (card.classList.contains('revealed')) {
        card.classList.remove('revealed');
        gameState.revealed[playerNum - 1] = false;
    } else {
        card.classList.add('revealed');
        gameState.revealed[playerNum - 1] = true;

        // Afficher le splash 67 d'abord
        showSplash67(() => {
            // Puis ouvrir la modal avec la carte en grand
            openModal(playerNum);
        });

        // Auto-cacher: splash(0.8s) + modal(2s) + delai(0.2s) = 3s
        setTimeout(() => {
            if (gameState.revealed[playerNum - 1]) {
                card.classList.remove('revealed');
                gameState.revealed[playerNum - 1] = false;
            }
        }, 3000);
    }
}

// Afficher le splash 67 avant de montrer la carte
function showSplash67(callback) {
    const splash = document.getElementById('splash67');
    splash.classList.add('active');

    // Fermer apres 0.8 secondes et executer le callback
    setTimeout(() => {
        splash.classList.remove('active');
        if (callback) callback();
    }, 800);
}

// Ouvrir la modal avec la carte agrandie
function openModal(playerNum) {
    const cardData = gameState.cards[playerNum - 1];
    const isImpostor = gameState.impostorIndices.includes(playerNum - 1);

    const modal = document.getElementById('cardModal');
    const modalImage = document.getElementById('modalImage');
    const modalWord = document.getElementById('modalWord');
    const modalRole = document.getElementById('modalRole');

    // Mettre a jour le contenu
    modalImage.src = cardData.customUrl ? cardData.image : IMAGE_BASE_URL + cardData.image + ".png";
    modalImage.alt = cardData.nom;
    modalWord.textContent = cardData.nom;
    modalRole.textContent = `Joueur ${playerNum}`;

    // Afficher la modal
    modal.classList.add('active');

    // Fermer automatiquement apres 2 secondes
    setTimeout(() => {
        closeModal();
    }, 2000);
}

// Fermer la modal
function closeModal() {
    const modal = document.getElementById('cardModal');
    modal.classList.remove('active');
}

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', () => {
    selectPlayers(3); // Par defaut 3 joueurs
});

// ============================================
// CONTROLE DE LA MUSIQUE
// ============================================

let isMusicPlaying = false;
let youtubePlayer = null;

function toggleMusic() {
    const btn = document.getElementById('musicBtn');
    const iframe = document.getElementById('youtubePlayer');

    if (!isMusicPlaying) {
        // Demarrer la musique
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        btn.textContent = '🔊';
        btn.classList.add('playing');
        isMusicPlaying = true;
    } else {
        // Arreter la musique
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        btn.textContent = '🔇';
        btn.classList.remove('playing');
        isMusicPlaying = false;
    }
}
