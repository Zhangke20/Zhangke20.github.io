// ============================================
// SYSTEME DE TRADUCTION
// ============================================

const TRANSLATIONS = {
    fr: {
        // Interface
        title: "UNDERCOVER",
        subtitle: "Clash Royale Edition",
        playersLabel: "Joueurs",
        impostorsLabel: "Imposteurs",
        modeLabel: "Mode",
        playerCount: "Nombre de joueurs",
        gameMode: "Mode de jeu",
        randomMode: "\ud83c\udfb2 Al\u00e9atoire",
        similarMode: "\ud83c\udfaf Similaires",
        randomInfo: "Deux cartes compl\u00e8tement diff\u00e9rentes",
        similarInfo: "\ud83d\udd25 Cartes proches = plus difficile !",
        tapToSee: "Appuie pour voir",
        newGame: "Nouvelle partie",
        letsGo: "C'est parti !",
        startingPlayer: "\ud83c\udfaf Le joueur {0} commence !",
        rules: "R\u00e8gles",
        close: "Fermer",
        player: "Joueur",
        civil: "civil",
        civils: "civils",
        impostor: "imposteur",
        impostors: "imposteurs",
        playersInfo: "{0} joueurs = {1} imposteur",
        playersInfoPlural: "{0} joueurs = {1} imposteurs",
        footerInfo: "{0} {1} - {2} {3}",

        // Vote & Elimination
        votePhaseBtn: "\ud83d\uddf3\ufe0f Passer au vote",
        voteTitle: "\ud83d\uddf3\ufe0f Phase de vote",
        voteSubtitle: "Choisissez un joueur \u00e0 \u00e9liminer",
        eliminatedMsg: "Joueur {0} \u00e9limin\u00e9 \u2014 {1}",
        civilsWin: "\ud83c\udf89 Les Civils gagnent !",
        impostorsWin: "\ud83c\udfad Les Imposteurs gagnent !",
        replay: "\ud83d\udd04 Rejouer",
        eliminated: "\u00c9limin\u00e9",

        // R\u00e8gles du jeu
        rulesTitle: "\ud83d\udcdc R\u00e8gles du jeu",
        rulesText: [
            "\ud83c\udfaf <strong>But du jeu :</strong>",
            "\u2022 Les <strong>civils</strong> doivent identifier et \u00e9liminer l'imposteur",
            "\u2022 L'<strong>imposteur</strong> doit bluffer et se faire passer pour un civil",
            "",
            "\ud83c\udfae <strong>D\u00e9roulement :</strong>",
            "1. Chaque joueur re\u00e7oit secr\u00e8tement une carte Clash Royale",
            "2. Tous les civils ont la M\u00caME carte",
            "3. L'imposteur a une carte DIFF\u00c9RENTE (proche en mode Similaire)",
            "4. Les joueurs d\u00e9crivent leur carte sans la nommer directement",
            "5. Appuyez sur \"Passer au vote\" puis cliquez un num\u00e9ro pour \u00e9liminer",
            "6. Le r\u00f4le du joueur \u00e9limin\u00e9 est d\u00e9voil\u00e9",
            "7. La partie continue jusqu'\u00e0 ce qu'un camp gagne !",
            "",
            "\ud83c\udfc6 <strong>Victoire :</strong>",
            "\u2022 Civils gagnent si tous les imposteurs sont \u00e9limin\u00e9s",
            "\u2022 Imposteurs gagnent s'ils sont plus nombreux que les civils restants !"
        ],

        // Noms des cartes
        cards: {
            "Archers": "Archers",
            "Barbares": "Barbares",
            "Chauves-souris": "Chauves-souris",
            "Bombardier": "Bombardier",
            "Esprit electrique": "Esprit \u00e9lectrique",
            "Esprit de feu": "Esprit de feu",
            "Esprit de glace": "Esprit de glace",
            "Chevalier": "Chevalier",
            "Gobelins": "Gobelins",
            "Gobelins a lances": "Gobelins \u00e0 lances",
            "Gang de gobelins": "Gang de gobelins",
            "Squelettes": "Squelettes",
            "Armee de squelettes": "Arm\u00e9e de squelettes",
            "Gargouilles": "Gargouilles",
            "Horde de gargouilles": "Horde de gargouilles",
            "Recrues royales": "Recrues royales",
            "Gardes": "Gardes",
            "Canon": "Canon",
            "Mortier": "Mortier",
            "Tesla": "Tesla",
            "Fleches": "Fl\u00e8ches",
            "Boule de neige geante": "Boule de neige g\u00e9ante",
            "Electrocution": "\u00c9lectrocution",
            "Colis royal": "Colis royal",
            "Geant": "G\u00e9ant",
            "Mini P.E.K.K.A": "Mini P.E.K.K.A",
            "Mousquetaire": "Mousquetaire",
            "Valkyrie": "Valkyrie",
            "Sorcier": "Sorcier",
            "Chevaucheur de cochon": "Chevaucheur de cochon",
            "Golem de glace": "Golem de glace",
            "Belier de combat": "B\u00e9lier de combat",
            "Chevaucheuse de belier": "Chevaucheuse de b\u00e9lier",
            "Chasseur": "Chasseur",
            "Bebe dragon": "B\u00e9b\u00e9 dragon",
            "Ballon": "Ballon",
            "Bourreau": "Bourreau",
            "Prince": "Prince",
            "Prince noir": "Prince noir",
            "Dragon electrique": "Dragon \u00e9lectrique",
            "Geant electrique": "G\u00e9ant \u00e9lectrique",
            "Squelette geant": "Squelette g\u00e9ant",
            "Golem": "Golem",
            "P.E.K.K.A": "P.E.K.K.A",
            "Sorciere": "Sorci\u00e8re",
            "Brise-murs": "Brise-murs",
            "Bouliste": "Bouliste",
            "Arbalete X": "Arbal\u00e8te X",
            "Foreuse a gobelins": "Foreuse \u00e0 gobelins",
            "Charrette a canon": "Charrette \u00e0 canon",
            "Foudre": "Foudre",
            "Rage": "Rage",
            "Gel": "Gel",
            "Tornade": "Tornade",
            "Poison": "Poison",
            "Boule de feu": "Boule de feu",
            "Roquette": "Roquette",
            "Buche": "B\u00fbche",
            "Cimetiere": "Cimeti\u00e8re",
            "Dragon de l'enfer": "Dragon de l'enfer",
            "Molosse de lave": "Molosse de lave",
            "Fantome royal": "Fant\u00f4me royal",
            "Bucheron": "B\u00fbcheron",
            "Mega chevalier": "M\u00e9ga chevalier",
            "Princesse": "Princesse",
            "Bandit": "Bandit",
            "Mineur": "Mineur",
            "Archer magique": "Archer magique",
            "Sorcier electrique": "Sorcier \u00e9lectrique",
            "Sorcier de glace": "Sorcier de glace",
            "Roi des squelettes": "Roi des squelettes",
            "Reine des archers": "Reine des archers",
            "Moine": "Moine",
            "Petit Prince": "Petit Prince",
            "Sparky": "Sparky",
            "Phoenix": "Phoenix",
            "Mega gargouille": "M\u00e9ga gargouille",
            "Tour a bombes": "Tour \u00e0 bombes",
            "Fournaise": "Fournaise",
            "Tour de l'enfer": "Tour de l'enfer",
            "Clone": "Clone",
            "Miroir": "Miroir",
            "Chevalier d'or": "Chevalier d'or",
            "Mineur de combat": "Mineur de combat"
        }
    },
    en: {
        // Interface
        title: "UNDERCOVER",
        subtitle: "Clash Royale Edition",
        playersLabel: "Players",
        impostorsLabel: "Impostors",
        modeLabel: "Mode",
        playerCount: "Number of players",
        gameMode: "Game mode",
        randomMode: "\ud83c\udfb2 Random",
        similarMode: "\ud83c\udfaf Similar",
        randomInfo: "Two completely different cards",
        similarInfo: "\ud83d\udd25 Close cards = harder!",
        tapToSee: "Tap to see",
        newGame: "New game",
        letsGo: "Let's go!",
        startingPlayer: "\ud83c\udfaf Player {0} starts!",
        rules: "Rules",
        close: "Close",
        player: "Player",
        civil: "civilian",
        civils: "civilians",
        impostor: "impostor",
        impostors: "impostors",
        playersInfo: "{0} players = {1} impostor",
        playersInfoPlural: "{0} players = {1} impostors",
        footerInfo: "{0} {1} - {2} {3}",

        // Vote & Elimination
        votePhaseBtn: "\ud83d\uddf3\ufe0f Vote now",
        voteTitle: "\ud83d\uddf3\ufe0f Voting Phase",
        voteSubtitle: "Choose a player to eliminate",
        eliminatedMsg: "Player {0} eliminated \u2014 {1}",
        civilsWin: "\ud83c\udf89 Civilians win!",
        impostorsWin: "\ud83c\udfad Impostors win!",
        replay: "\ud83d\udd04 Play again",
        eliminated: "Eliminated",

        // Game rules
        rulesTitle: "\ud83d\udcdc Game Rules",
        rulesText: [
            "\ud83c\udfaf <strong>Objective:</strong>",
            "\u2022 <strong>Civilians</strong> must identify and eliminate the impostor",
            "\u2022 The <strong>impostor</strong> must bluff and pretend to be a civilian",
            "",
            "\ud83c\udfae <strong>How to play:</strong>",
            "1. Each player secretly receives a Clash Royale card",
            "2. All civilians have the SAME card",
            "3. The impostor has a DIFFERENT card (close one in Similar mode)",
            "4. Players describe their card without naming it directly",
            "5. Press \"Vote now\" then click a number to eliminate",
            "6. The eliminated player's role is revealed",
            "7. The game continues until one team wins!",
            "",
            "\ud83c\udfc6 <strong>Victory:</strong>",
            "\u2022 Civilians win if all impostors are eliminated",
            "\u2022 Impostors win if they outnumber remaining civilians!"
        ],

        // Noms des cartes
        cards: {
            "Archers": "Archers",
            "Barbares": "Barbarians",
            "Chauves-souris": "Bats",
            "Bombardier": "Bomber",
            "Esprit electrique": "Electro Spirit",
            "Esprit de feu": "Fire Spirit",
            "Esprit de glace": "Ice Spirit",
            "Chevalier": "Knight",
            "Gobelins": "Goblins",
            "Gobelins a lances": "Spear Goblins",
            "Gang de gobelins": "Goblin Gang",
            "Squelettes": "Skeletons",
            "Armee de squelettes": "Skeleton Army",
            "Gargouilles": "Minions",
            "Horde de gargouilles": "Minion Horde",
            "Recrues royales": "Royal Recruits",
            "Gardes": "Guards",
            "Canon": "Cannon",
            "Mortier": "Mortar",
            "Tesla": "Tesla",
            "Fleches": "Arrows",
            "Boule de neige geante": "Giant Snowball",
            "Electrocution": "Zap",
            "Colis royal": "Royal Delivery",
            "Geant": "Giant",
            "Mini P.E.K.K.A": "Mini P.E.K.K.A",
            "Mousquetaire": "Musketeer",
            "Valkyrie": "Valkyrie",
            "Sorcier": "Wizard",
            "Chevaucheur de cochon": "Hog Rider",
            "Golem de glace": "Ice Golem",
            "Belier de combat": "Battle Ram",
            "Chevaucheuse de belier": "Ram Rider",
            "Chasseur": "Hunter",
            "Bebe dragon": "Baby Dragon",
            "Ballon": "Balloon",
            "Bourreau": "Executioner",
            "Prince": "Prince",
            "Prince noir": "Dark Prince",
            "Dragon electrique": "Electro Dragon",
            "Geant electrique": "Electro Giant",
            "Squelette geant": "Giant Skeleton",
            "Golem": "Golem",
            "P.E.K.K.A": "P.E.K.K.A",
            "Sorciere": "Witch",
            "Brise-murs": "Wall Breakers",
            "Bouliste": "Bowler",
            "Arbalete X": "X-Bow",
            "Foreuse a gobelins": "Goblin Drill",
            "Charrette a canon": "Cannon Cart",
            "Foudre": "Lightning",
            "Rage": "Rage",
            "Gel": "Freeze",
            "Tornade": "Tornado",
            "Poison": "Poison",
            "Boule de feu": "Fireball",
            "Roquette": "Rocket",
            "Buche": "The Log",
            "Cimetiere": "Graveyard",
            "Dragon de l'enfer": "Inferno Dragon",
            "Molosse de lave": "Lava Hound",
            "Fantome royal": "Royal Ghost",
            "Bucheron": "Lumberjack",
            "Mega chevalier": "Mega Knight",
            "Princesse": "Princess",
            "Bandit": "Bandit",
            "Mineur": "Miner",
            "Archer magique": "Magic Archer",
            "Sorcier electrique": "Electro Wizard",
            "Sorcier de glace": "Ice Wizard",
            "Roi des squelettes": "Skeleton King",
            "Reine des archers": "Archer Queen",
            "Moine": "Monk",
            "Petit Prince": "Little Prince",
            "Sparky": "Sparky",
            "Phoenix": "Phoenix",
            "Mega gargouille": "Mega Minion",
            "Tour a bombes": "Bomb Tower",
            "Fournaise": "Furnace",
            "Tour de l'enfer": "Inferno Tower",
            "Clone": "Clone",
            "Miroir": "Mirror",
            "Chevalier d'or": "Golden Knight",
            "Mineur de combat": "Mighty Miner"
        }
    }
};

// Langue actuelle
let currentLanguage = 'fr';

// Fonction pour obtenir une traduction
function t(key, ...args) {
    const translations = TRANSLATIONS[currentLanguage];
    let text = translations[key] || key;

    // Remplacer les placeholders {0}, {1}, etc.
    args.forEach((arg, index) => {
        text = text.replace(`{${index}}`, arg);
    });

    return text;
}

// Fonction pour traduire le nom d'une carte
function translateCardName(frenchName) {
    return TRANSLATIONS[currentLanguage].cards[frenchName] || frenchName;
}

// Changer la langue
function setLanguage(lang) {
    currentLanguage = lang;

    // Mettre à jour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    // Mettre à jour tous les textes de l'interface
    updateInterface();

    // Sauvegarder la préférence
    localStorage.setItem('undercover-language', lang);
}

// Mettre à jour l'interface avec la langue actuelle
function updateInterface() {
    // Titres
    document.querySelector('h1').textContent = t('title');
    document.querySelector('.subtitle').textContent = t('subtitle');

    // Labels Joueurs et Mode
    const playersLabel = document.getElementById('playersLabel');
    const modeLabel = document.getElementById('modeLabel');
    if (playersLabel) playersLabel.textContent = t('playersLabel');
    if (modeLabel) modeLabel.textContent = t('modeLabel');
    const impostorsLabel = document.getElementById('impostorsLabel');
    if (impostorsLabel) impostorsLabel.textContent = t('impostorsLabel');

    // Info mode
    const modeInfo = document.getElementById('modeInfo');
    if (modeInfo) {
        if (gameConfig.gameMode === 'similar') {
            modeInfo.textContent = t('similarInfo');
        } else {
            modeInfo.textContent = t('randomInfo');
        }
    }

    // Texte des cartes
    document.querySelectorAll('.tap-text').forEach(el => {
        el.textContent = t('tapToSee');
    });

    // Bouton nouvelle partie
    const newGameBtn = document.getElementById('newGameBtn');
    if (newGameBtn) {
        // Ne changer que si ce n'est pas le texte d'animation "C'est parti!" / "Let's go!"
        const currentText = newGameBtn.textContent.toLowerCase();
        const isAnimating = currentText.includes("parti") || currentText.includes("go");
        if (!isAnimating) {
            newGameBtn.textContent = t('newGame');
        }
    }

    // Info imposteurs
    updateImpostorInfo();

    // Joueur qui commence
    const startingEl = document.getElementById('startingPlayer');
    if (startingEl && startingEl.textContent.includes('joueur') || startingEl.textContent.includes('Player')) {
        const match = startingEl.textContent.match(/\d+/);
        if (match) {
            startingEl.textContent = t('startingPlayer', match[0]);
        }
    }

    // Mettre à jour les noms des cartes affichées
    for (let i = 1; i <= gameConfig.playerCount; i++) {
        const wordEl = document.getElementById(`word${i}`);
        if (wordEl && gameState.cards[i - 1]) {
            wordEl.textContent = translateCardName(gameState.cards[i - 1].nom);
        }
    }

    // Vote UI
    const votePhaseBtn = document.getElementById('votePhaseBtn');
    if (votePhaseBtn) votePhaseBtn.textContent = t('votePhaseBtn');
    const voteTitle = document.getElementById('voteTitle');
    if (voteTitle) voteTitle.textContent = t('voteTitle');
    const voteSubtitle = document.getElementById('voteSubtitle');
    if (voteSubtitle) voteSubtitle.textContent = t('voteSubtitle');

    // Bouton règles
    const rulesBtn = document.getElementById('rulesBtn');
    if (rulesBtn) {
        rulesBtn.textContent = t('rules');
    }

    // Modal règles
    const rulesTitle = document.getElementById('rulesTitle');
    if (rulesTitle) {
        rulesTitle.textContent = t('rulesTitle');
    }

    const rulesContent = document.getElementById('rulesContent');
    if (rulesContent) {
        rulesContent.innerHTML = t('rulesText').join('<br>');
    }

    const rulesClose = document.getElementById('rulesClose');
    if (rulesClose) {
        rulesClose.textContent = t('close');
    }
}

// ============================================
// LISTE DES CARTES
// ============================================

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
    ["Bandit", "Fantome royal"],

    // ========== NOUVELLES PAIRES - MOUVEMENT & POSITIONNEMENT ==========
    ["Chevaucheur de cochon", "Brise-murs"],
    ["Ballon", "Brise-murs"],
    ["Belier de combat", "Chevaucheur de cochon"],
    ["Foreuse a gobelins", "Mineur"],
    ["Fantome royal", "Bandit"],
    ["Princesse", "Mousquetaire"],
    ["Archer magique", "Princesse"],
    ["Chasseur", "Prince"],
    ["Valkyrie", "Bouliste"],
    ["Sorciere", "Cimetiere"],
    ["Roi des squelettes", "Sorciere"],

    // ========== NOUVELLES PAIRES - TANKS & BULLES ==========
    ["Geant", "Golem"],
    ["Geant", "Golem de glace"],
    ["Golem de glace", "Geant electrique"],
    ["Geant electrique", "Squelette geant"],
    ["Mega chevalier", "Valkyrie"],
    ["Mega chevalier", "P.E.K.K.A"],
    ["P.E.K.K.A", "Prince"],
    ["Mini P.E.K.K.A", "Prince"],
    ["Chevalier", "Valkyrie"],
    ["Gardes", "Barbares"],

    // ========== NOUVELLES PAIRES - BATIMENTS DEFENSIFS ==========
    ["Canon", "Tour de l'enfer"],
    ["Tour a bombes", "Fournaise"],
    ["Fournaise", "Tesla"],
    ["Mortier", "Canon"],
    ["Charrette a canon", "Canon"],
    ["Fournaise", "Cimetiere"],
    ["Tour de l'enfer", "Dragon de l'enfer"],
    ["Tour a bombes", "Mortier"],

    // ========== NOUVELLES PAIRES - SORTS & CONTROLE ==========
    ["Tornade", "Gel"],
    ["Tornade", "Boule de neige geante"],
    ["Gel", "Rage"],
    ["Poison", "Tornade"],
    ["Foudre", "Boule de feu"],
    ["Electrocution", "Foudre"],
    ["Buche", "Boule de neige geante"],
    ["Clone", "Rage"],
    ["Miroir", "Clone"],
    ["Fleches", "Poison"],

    // ========== NOUVELLES PAIRES - UNITES AERIENNES ==========
    ["Bebe dragon", "Molosse de lave"],
    ["Dragon electrique", "Dragon de l'enfer"],
    ["Horde de gargouilles", "Molosse de lave"],
    ["Ballon", "Molosse de lave"],
    ["Phoenix", "Bebe dragon"],
    ["Phoenix", "Dragon de l'enfer"],
    ["Gargouilles", "Squelettes"],

    // ========== NOUVELLES PAIRES - SQUELETTES & MORT-VIVANTS ==========
    ["Squelettes", "Gardes"],
    ["Armee de squelettes", "Gang de gobelins"],
    ["Squelette geant", "Bombardier"],
    ["Cimetiere", "Sorciere"],

    // ========== NOUVELLES PAIRES - UNITES ROYALES ==========
    ["Reine des archers", "Roi des squelettes"],
    ["Chevalier d'or", "Mega chevalier"],
    ["Princesse", "Archer magique"],
    ["Prince", "Prince noir"],
    ["Princesse", "Reine des archers"],
    ["Petit Prince", "Prince"],

    // ========== NOUVELLES PAIRES - MECANIQUES SPECIALES ==========
    ["Sparky", "Buche"],
    ["Sparky", "Ballon"],
    ["Mineur", "Foreuse a gobelins"],
    ["Buche", "Brise-murs"],
    ["Bourreau", "Bouliste"],
    ["Sparky", "P.E.K.K.A"],
    ["Molosse de lave", "Golem"],
    ["Phoenix", "Squelette geant"],
    ["Moine", "Bandit"],

    // ========== NOUVELLES PAIRES - COMBOS DE META ==========
    ["Ballon", "Geant"],
    ["P.E.K.K.A", "Sorcier electrique"],
    ["Golem", "Dragon de l'enfer"],
    ["Mortier", "Archers"],
    ["Arbalete X", "Tesla"],
    ["Chevaucheur de cochon", "Boule de feu"],
    ["Mineur", "Poison"],
    ["Barbares", "Canon"],

    // ========== NOUVELLES PAIRES - MEME COUT (strategique) ==========
    ["Chevalier", "Golem de glace"],
    ["Archers", "Gargouilles"],
    ["Mini P.E.K.K.A", "Valkyrie"],
    ["Mousquetaire", "Chasseur"],
    ["Bebe dragon", "Sorcier"],
    ["Prince", "Ballon"],
    ["Geant", "Sorciere"],
    ["P.E.K.K.A", "Golem"],

    // ========== NOUVELLES PAIRES - EFFETS DE STATUT ==========
    ["Sorcier electrique", "Electrocution"],
    ["Dragon electrique", "Electrocution"],
    ["Sorcier de glace", "Golem de glace"],
    ["Tornade", "Golem de glace"],
    ["Poison", "Sorciere"],
    ["Rage", "Bucheron"],
    ["Gel", "Sorcier de glace"],
    ["Geant electrique", "Sorcier electrique"]
];

// URL de base pour les images
const IMAGE_BASE_URL = "https://raw.githubusercontent.com/RoyaleAPI/cr-api-assets/master/cards-150-gold/";

// Configuration du jeu
let gameConfig = {
    playerCount: 3,
    impostorCount: 1,
    gameMode: 'random'
};

// Etat du jeu
let gameState = {
    cards: [],
    impostorIndices: [],
    revealed: [],
    eliminatedPlayers: [],
    gamePhase: 'cards', // 'cards' | 'vote' | 'finished'
    impostorCardName: ''
};

// Random robuste
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

    document.querySelectorAll('.mode-btn').forEach(btn => {
        if (btn.dataset.mode === mode) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    updateInterface();
    startNewGame();
}

// Selectionner le nombre de joueurs
function selectPlayers(count) {
    gameConfig.playerCount = count;

    // Mettre à jour le dropdown joueurs
    const dropdown = document.getElementById('playerDropdown');
    if (dropdown) dropdown.value = count;

    // Recalculer le max d'imposteurs et rebuilder le dropdown
    const maxImpostors = Math.floor((count - 1) / 2);
    const impDropdown = document.getElementById('impostorDropdown');
    if (impDropdown) {
        const currentVal = gameConfig.impostorCount;
        impDropdown.innerHTML = '';
        for (let i = 1; i <= maxImpostors; i++) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = i;
            impDropdown.appendChild(opt);
        }
        // Garder la valeur précédente si possible, sinon défaut intelligent
        if (currentVal >= 1 && currentVal <= maxImpostors) {
            gameConfig.impostorCount = currentVal;
        } else {
            // Défaut intelligent
            if (count <= 4) gameConfig.impostorCount = 1;
            else if (count <= 7) gameConfig.impostorCount = 2;
            else gameConfig.impostorCount = 3;
        }
        impDropdown.value = gameConfig.impostorCount;
    }

    updateImpostorInfo();
    generatePlayerCards();
    startNewGame();
}

// Selectionner le nombre d'imposteurs manuellement
function selectImpostors(count) {
    const maxImpostors = Math.floor((gameConfig.playerCount - 1) / 2);
    gameConfig.impostorCount = Math.min(Math.max(1, count), maxImpostors);

    const impDropdown = document.getElementById('impostorDropdown');
    if (impDropdown) impDropdown.value = gameConfig.impostorCount;

    updateImpostorInfo();
    startNewGame();
}

// Mettre a jour l'info des imposteurs
function updateImpostorInfo() {
    const count = gameConfig.playerCount;
    const impostors = gameConfig.impostorCount;
    const civils = count - impostors;

    const infoText = impostors > 1
        ? t('playersInfoPlural', count, impostors)
        : t('playersInfo', count, impostors);
    document.getElementById('impostorsInfo').textContent = infoText;

    const civilLabel = civils > 1 ? t('civils') : t('civil');
    const impostorLabel = impostors > 1 ? t('impostors') : t('impostor');
    document.getElementById('footerInfo').textContent = t('footerInfo', civils, civilLabel, impostors, impostorLabel);
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
                    <span class="tap-text">${t('tapToSee')}</span>
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

    let roles = [];
    for (let i = 0; i < playerCount - impostorCount; i++) {
        roles.push(civilCard);
    }
    for (let i = 0; i < impostorCount; i++) {
        roles.push(impostorCard);
    }

    roles = shuffle(roles);

    gameState.cards = roles;
    gameState.impostorIndices = roles.map((card, idx) => card.nom === impostorCard.nom ? idx : -1).filter(idx => idx !== -1);
    gameState.revealed = new Array(playerCount).fill(false);
    gameState.eliminatedPlayers = [];
    gameState.gamePhase = 'cards';
    gameState.impostorCardName = impostorCard.nom;

    for (let i = 1; i <= playerCount; i++) {
        const card = gameState.cards[i - 1];
        const wordEl = document.getElementById(`word${i}`);
        const imageEl = document.getElementById(`image${i}`);
        const playerEl = document.getElementById(`player${i}`);

        if (wordEl) wordEl.textContent = translateCardName(card.nom);
        if (imageEl) {
            imageEl.src = card.customUrl ? card.image : IMAGE_BASE_URL + card.image + ".png";
            imageEl.alt = translateCardName(card.nom);
        }
        if (playerEl) {
            playerEl.classList.remove('revealed', 'eliminated');
            playerEl.style.display = '';
        }
    }

    const startingPlayer = randomInt(playerCount) + 1;
    const startingEl = document.getElementById('startingPlayer');
    if (startingEl) {
        startingEl.textContent = t('startingPlayer', startingPlayer);
        startingEl.style.display = '';
    }

    // Show vote phase button, hide vote section
    const votePhaseBtn = document.getElementById('votePhaseBtn');
    if (votePhaseBtn) {
        votePhaseBtn.style.display = 'block';
        votePhaseBtn.textContent = t('votePhaseBtn');
    }
    const voteSection = document.getElementById('voteSection');
    if (voteSection) voteSection.style.display = 'none';

    // Hide winner banner
    const winnerBanner = document.getElementById('winnerBanner');
    if (winnerBanner) winnerBanner.classList.remove('active');

    // Clear elimination log
    const elimLog = document.getElementById('eliminationLog');
    if (elimLog) elimLog.innerHTML = '';

    // Hide settings during game? No, keep them visible

    const btn = document.getElementById('newGameBtn');
    btn.textContent = t('letsGo');
    setTimeout(() => {
        btn.textContent = t('newGame');
    }, 1200);
}

// Revealer/cacher une carte
function revealCard(playerNum) {
    // Ne pas permettre de révéler les cartes des éliminés
    if (gameState.eliminatedPlayers.includes(playerNum - 1)) return;
    if (gameState.gamePhase === 'finished') return;

    const card = document.getElementById(`player${playerNum}`);

    if (card.classList.contains('revealed')) {
        card.classList.remove('revealed');
        gameState.revealed[playerNum - 1] = false;
    } else {
        card.classList.add('revealed');
        gameState.revealed[playerNum - 1] = true;

        showSplash67(() => {
            openModal(playerNum);
        });

        setTimeout(() => {
            if (gameState.revealed[playerNum - 1]) {
                card.classList.remove('revealed');
                gameState.revealed[playerNum - 1] = false;
            }
        }, 3000);
    }
}

// ============================================
// SYSTEME DE VOTE ET ELIMINATION
// ============================================

// Passer en phase de vote
function startVotePhase() {
    if (gameState.gamePhase === 'finished') return;
    gameState.gamePhase = 'vote';

    // Cacher toutes les cartes révélées
    for (let i = 1; i <= gameConfig.playerCount; i++) {
        const card = document.getElementById(`player${i}`);
        if (card) {
            card.classList.remove('revealed');
            gameState.revealed[i - 1] = false;
        }
    }

    // Cacher le bouton "Passer au vote"
    const votePhaseBtn = document.getElementById('votePhaseBtn');
    if (votePhaseBtn) votePhaseBtn.style.display = 'none';

    // Afficher la section de vote
    const voteSection = document.getElementById('voteSection');
    if (voteSection) voteSection.style.display = 'block';

    // Générer les boutons de vote
    generateVoteButtons();
}

// Générer les boutons de vote pour les joueurs encore en vie
function generateVoteButtons() {
    const voteButtons = document.getElementById('voteButtons');
    if (!voteButtons) return;
    voteButtons.innerHTML = '';

    for (let i = 0; i < gameConfig.playerCount; i++) {
        if (gameState.eliminatedPlayers.includes(i)) continue;

        const btn = document.createElement('button');
        btn.className = 'vote-btn';
        btn.textContent = (i + 1);
        btn.onclick = () => eliminatePlayer(i + 1);
        voteButtons.appendChild(btn);
    }
}

// Éliminer un joueur
function eliminatePlayer(playerNum) {
    if (gameState.gamePhase === 'finished') return;
    const idx = playerNum - 1;
    if (gameState.eliminatedPlayers.includes(idx)) return;

    gameState.eliminatedPlayers.push(idx);

    // Déterminer le rôle
    const isImpostor = gameState.impostorIndices.includes(idx);
    const roleName = isImpostor ? t('impostor').toUpperCase() : t('civil').toUpperCase();
    const roleClass = isImpostor ? 'role-impostor' : 'role-civil';

    // Griser la carte du joueur
    const card = document.getElementById(`player${playerNum}`);
    if (card) {
        card.classList.add('eliminated');
        card.classList.remove('revealed');
        // Remplacer le contenu de la face avant
        const front = card.querySelector('.card-front');
        if (front) {
            front.innerHTML = `
                <span class="player-number eliminated-number">${playerNum}</span>
                <span class="eliminated-badge ${roleClass}">${roleName}</span>
                <span class="eliminated-text">${t('eliminated')}</span>
            `;
        }
    }

    // Ajouter au log d'élimination
    const elimLog = document.getElementById('eliminationLog');
    if (elimLog) {
        const entry = document.createElement('div');
        entry.className = `elim-entry ${roleClass}`;
        entry.innerHTML = `<span class="elim-icon">${isImpostor ? '🎭' : '👤'}</span> ${t('eliminatedMsg', playerNum, roleName)}`;
        elimLog.appendChild(entry);
    }

    // Vérifier la condition de victoire
    const result = checkWinCondition();
    if (result) {
        showWinner(result);
    } else {
        // Retourner en phase de cartes (discussion)
        gameState.gamePhase = 'cards';
        const voteSection = document.getElementById('voteSection');
        if (voteSection) voteSection.style.display = 'none';
        const votePhaseBtn = document.getElementById('votePhaseBtn');
        if (votePhaseBtn) votePhaseBtn.style.display = 'block';
    }
}

// Vérifier la condition de victoire
function checkWinCondition() {
    let aliveImpostors = 0;
    let aliveCivils = 0;

    for (let i = 0; i < gameConfig.playerCount; i++) {
        if (gameState.eliminatedPlayers.includes(i)) continue;
        if (gameState.impostorIndices.includes(i)) {
            aliveImpostors++;
        } else {
            aliveCivils++;
        }
    }

    if (aliveImpostors === 0) return 'civils';
    if (aliveImpostors >= aliveCivils) return 'impostors';
    return null;
}

// Afficher le gagnant
function showWinner(team) {
    gameState.gamePhase = 'finished';

    const banner = document.getElementById('winnerBanner');
    const emoji = document.getElementById('winnerEmoji');
    const text = document.getElementById('winnerText');

    // Cacher le vote
    const voteSection = document.getElementById('voteSection');
    if (voteSection) voteSection.style.display = 'none';
    const votePhaseBtn = document.getElementById('votePhaseBtn');
    if (votePhaseBtn) votePhaseBtn.style.display = 'none';

    if (team === 'civils') {
        emoji.textContent = '🎉';
        text.textContent = t('civilsWin');
        banner.className = 'winner-banner active civils-win';
    } else {
        emoji.textContent = '🎭';
        text.textContent = t('impostorsWin');
        banner.className = 'winner-banner active impostors-win';
    }
}

// Reset complet pour rejouer
function resetFullGame() {
    const banner = document.getElementById('winnerBanner');
    if (banner) banner.classList.remove('active');
    generatePlayerCards();
    startNewGame();
}

// Afficher le splash 67
function showSplash67(callback) {
    const splash = document.getElementById('splash67');
    splash.classList.add('active');

    setTimeout(() => {
        splash.classList.remove('active');
        if (callback) callback();
    }, 800);
}

// Ouvrir la modal avec la carte agrandie
function openModal(playerNum) {
    const cardData = gameState.cards[playerNum - 1];

    const modal = document.getElementById('cardModal');
    const modalImage = document.getElementById('modalImage');
    const modalWord = document.getElementById('modalWord');
    const modalRole = document.getElementById('modalRole');

    modalImage.src = cardData.customUrl ? cardData.image : IMAGE_BASE_URL + cardData.image + ".png";
    modalImage.alt = translateCardName(cardData.nom);
    modalWord.textContent = translateCardName(cardData.nom);
    modalRole.textContent = `${t('player')} ${playerNum}`;

    modal.classList.add('active');

    setTimeout(() => {
        closeModal();
    }, 2000);
}

// Fermer la modal
function closeModal() {
    const modal = document.getElementById('cardModal');
    modal.classList.remove('active');
}

// Ouvrir/fermer la modal des règles
function toggleRulesModal() {
    const modal = document.getElementById('rulesModal');
    modal.classList.toggle('active');
}

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Charger la langue sauvegardée
    const savedLang = localStorage.getItem('undercover-language');
    if (savedLang && TRANSLATIONS[savedLang]) {
        currentLanguage = savedLang;
    }

    // Initialiser le dropdown
    const dropdown = document.getElementById('playerDropdown');
    if (dropdown) dropdown.value = '3';

    selectPlayers(3);
    updateInterface();
});

// ============================================
// CONTROLE DE LA MUSIQUE
// ============================================

let isMusicPlaying = false;

function toggleMusic() {
    const btn = document.getElementById('musicBtn');
    const iframe = document.getElementById('youtubePlayer');

    if (!isMusicPlaying) {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        btn.textContent = '🔊';
        btn.classList.add('playing');
        isMusicPlaying = true;
    } else {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        btn.textContent = '🔇';
        btn.classList.remove('playing');
        isMusicPlaying = false;
    }
}
