// --- STATE & ASSET CONFIGURATION ---
const gameData = {
    locations: {
        "Shrine Day": { desc: "The Hakurei Shrine during a peaceful day.", bg: "assets/Shrine Day.jpg" },
        "Shrine Dusk": { desc: "The Hakurei Shrine as the sun sets.", bg: "assets/Shrine Dusk.jpg" },
        "Shrine Night": { desc: "The Hakurei Shrine under the night sky.", bg: "assets/Shrine Night.jpg" },
        "Stage1": { desc: "Night Falls - The Youkai Trail.", bg: "assets/Stage1.png" },
        "Stage2": { desc: "Water's Surface - The Misty Lake.", bg: "assets/Stage2.png" },
        "Stage3": { desc: "Scarlet Devil Mansion - The Gate.", bg: "assets/Stage3.png" },
        "Stage4": { desc: "The Underground Library - Voile.", bg: "assets/Stage4.png" },
        "Stage5": { desc: "The Maid's Quarters - Clock Tower.", bg: "assets/Stage5.png" },
        "Stage6": { desc: "The Scarlet Devil - Top Floor.", bg: "assets/Stage6.png" },
        "Stage7": { desc: "Extra Stage - The Sealed Basement.", bg: "assets/Stage7.png" }
    },
    sprites: {
        "None": "",
        
        // Cirno
        "Cirno Annoyed": "assets/Cirno Annoyed.png", "Cirno Bashful": "assets/Cirno Bashful.png", "Cirno Battle Angry": "assets/Cirno Battle Angry.png", "Cirno Battle": "assets/Cirno Battle.png", "Cirno Cheerful": "assets/Cirno Cheerful.png", "Cirno Defeat": "assets/Cirno Defeat.png", "Cirno Dubious": "assets/Cirno Dubious.png", "Cirno Happy": "assets/Cirno Happy.png", "Cirno Neutral": "assets/Cirno Neutral.png", "Cirno Shock": "assets/Cirno Shock.png", "Cirno Tease": "assets/Cirno Tease.png", "Cirno Worry": "assets/Cirno Worry.png",
        
        // Daiyousei
        "Daiyousei Annoyed": "assets/Daiyousei Annoyed.png", "Daiyousei Bashful": "assets/Daiyousei Bashful.png", "Daiyousei Battle Angry": "assets/Daiyousei Battle Angry.png", "Daiyousei Battle": "assets/Daiyousei Battle.png", "Daiyousei Cheerful": "assets/Daiyousei Cheerful.png", "Daiyousei Defeat": "assets/Daiyousei Defeat.png", "Daiyousei Determined": "assets/Daiyousei Determined.png", "Daiyousei Dubious": "assets/Daiyousei Dubious.png", "Daiyousei Happy": "assets/Daiyousei Happy.png", "Daiyousei Neutral": "assets/Daiyousei Neutral.png", "Daiyousei Shock": "assets/Daiyousei Shock.png", "Daiyousei Tease": "assets/Daiyousei Tease.png", "Daiyousei Worry": "assets/Daiyousei Worry.png",
        
        // Ex Rumia
        "Ex Rumia Annoyed": "assets/Ex Rumia Annoyed.png", "Ex Rumia Battle": "assets/Ex Rumia Battle.png", "Ex Rumia Cheerful": "assets/Ex Rumia Cheerful.png", "Ex Rumia Dubious": "assets/Ex Rumia Dubious.png", "Ex Rumia Neutral": "assets/Ex Rumia Neutral.png", "Ex Rumia Shock": "assets/Ex Rumia Shock.png", "Ex Rumia Tease": "assets/Ex Rumia Tease.png",
        
        // Flandre
        "Flandre Annoyed": "assets/Flandre Annoyed.png", "Flandre Bashful": "assets/Flandre Bashful.png", "Flandre Battle Angry": "assets/Flandre Battle Angry.png", "Flandre Battle": "assets/Flandre Battle.png", "Flandre Cheerful": "assets/Flandre Cheerful.png", "Flandre Defeat": "assets/Flandre Defeat.png", "Flandre Dubious": "assets/Flandre Dubious.png", "Flandre Happy": "assets/Flandre Happy.png", "Flandre Neutral": "assets/Flandre Neutral.png", "Flandre Shock": "assets/Flandre Shock.png", "Flandre Tease": "assets/Flandre Tease.png", "Flandre Worry": "assets/Flandre Worry.png",
        
        // Hakurei Reimu
        "Hakurei Reimu Annoyed": "assets/Hakurei Reimu Annoyed.png", "Hakurei Reimu Bashful": "assets/Hakurei Reimu Bashful.png", "Hakurei Reimu Battle Angry": "assets/Hakurei Reimu Battle Angry.png", "Hakurei Reimu Battle": "assets/Hakurei Reimu Battle.png", "Hakurei Reimu Cheerful": "assets/Hakurei Reimu Cheerful.png", "Hakurei Reimu Defeat": "assets/Hakurei Reimu Defeat.png", "Hakurei Reimu Determined": "assets/Hakurei Reimu Determined.png", "Hakurei Reimu Dubious": "assets/Hakurei Reimu Dubious.png", "Hakurei Reimu Happy": "assets/Hakurei Reimu Happy.png", "Hakurei Reimu Neutral": "assets/Hakurei Reimu Neutral.png", "Hakurei Reimu Shock": "assets/Hakurei Reimu Shock.png", "Hakurei Reimu Tease": "assets/Hakurei Reimu Tease.png", "Hakurei Reimu Worry": "assets/Hakurei Reimu Worry.png",
        
        // Kirisame Marisa
        "Kirisame Marisa Annoyed": "assets/Kirisame Marisa Annoyed.png", "Kirisame Marisa Bashful": "assets/Kirisame Marisa Bashful.png", "Kirisame Marisa Battle Angry": "assets/Kirisame Marisa Battle Angry.png", "Kirisame Marisa Battle": "assets/Kirisame Marisa Battle.png", "Kirisame Marisa Cheerful": "assets/Kirisame Marisa Cheerful.png", "Kirisame Marisa Defeat": "assets/Kirisame Marisa Defeat.png", "Kirisame Marisa Determined": "assets/Kirisame Marisa Determined.png", "Kirisame Marisa Dubious": "assets/Kirisame Marisa Dubious.png", "Kirisame Marisa Happy": "assets/Kirisame Marisa Happy.png", "Kirisame Marisa Neutral": "assets/Kirisame Marisa Neutral.png", "Kirisame Marisa Shock": "assets/Kirisame Marisa Shock.png", "Kirisame Marisa Tease": "assets/Kirisame Marisa Tease.png", "Kirisame Marisa Worry": "assets/Kirisame Marisa Worry.png",
        
        // Koakuma
        "Koakuma Annoyed": "assets/Koakuma Annoyed.png", "Koakuma Bashful": "assets/Koakuma Bashful.png", "Koakuma Battle Angry": "assets/Koakuma Battle Angry.png", "Koakuma Battle": "assets/Koakuma Battle.png", "Koakuma Cheerful": "assets/Koakuma Cheerful.png", "Koakuma Defeat": "assets/Koakuma Defeat.png", "Koakuma Dubious": "assets/Koakuma Dubious.png", "Koakuma Happy": "assets/Koakuma Happy.png", "Koakuma Neutral": "assets/Koakuma Neutral.png", "Koakuma Shock": "assets/Koakuma Shock.png", "Koakuma Tease": "assets/Koakuma Tease.png", "Koakuma Worry": "assets/Koakuma Worry.png",
        
        // Meiling
        "Meiling Annoyed": "assets/Meiling Annoyed.png", "Meiling Bashful": "assets/Meiling Bashful.png", "Meiling Battle Angry": "assets/Meiling Battle Angry.png", "Meiling Battle": "assets/Meiling Battle.png", "Meiling Cheerful": "assets/Meiling Cheerful.png", "Meiling Defeat": "assets/Meiling Defeat.png", "Meiling Dubious": "assets/Meiling Dubious.png", "Meiling Happy": "assets/Meiling Happy.png", "Meiling Neutral": "assets/Meiling Neutral.png", "Meiling Shock": "assets/Meiling Shock.png", "Meiling Tease": "assets/Meiling Tease.png", "Meiling Worry": "assets/Meiling Worry.png",
        
        // Patchouli
        "Patchouli Annoyed": "assets/Patchouli Annoyed.png", "Patchouli Bashful": "assets/Patchouli Bashful.png", "Patchouli Battle Angry": "assets/Patchouli Battle Angry.png", "Patchouli Battle": "assets/Patchouli Battle.png", "Patchouli Cheerful": "assets/Patchouli Cheerful.png", "Patchouli Defeat": "assets/Patchouli Defeat.png", "Patchouli Determined": "assets/Patchouli Determined.png", "Patchouli Dubious": "assets/Patchouli Dubious.png", "Patchouli Neutral": "assets/Patchouli Neutral.png", "Patchouli Shock": "assets/Patchouli Shock.png", "Patchouli Tease": "assets/Patchouli Tease.png", "Patchouli Worry": "assets/Patchouli Worry.png",
        
        // Remilia
        "Remilia Annoyed": "assets/Remilia Annoyed.png", "Remilia Bashful": "assets/Remilia Bashful.png", "Remilia Battle Angry": "assets/Remilia Battle Angry.png", "Remilia Battle": "assets/Remilia Battle.png", "Remilia Cheerful": "assets/Remilia Cheerful.png", "Remilia Defeat": "assets/Remilia Defeat.png", "Remilia Dubious": "assets/Remilia Dubious.png", "Remilia Happy": "assets/Remilia Happy.png", "Remilia Neutral": "assets/Remilia Neutral.png", "Remilia Shock": "assets/Remilia Shock.png", "Remilia Tease": "assets/Remilia Tease.png", "Remilia Worry": "assets/Remilia Worry.png",
        
        // Rumia
        "Rumia Annoyed": "assets/Rumia Annoyed.png", "Rumia Bashful": "assets/Rumia Bashful.png", "Rumia Battle Angry": "assets/Rumia Battle Angry.png", "Rumia Battle": "assets/Rumia Battle.png", "Rumia Cheerful": "assets/Rumia Cheerful.png", "Rumia Defeat": "assets/Rumia Defeat.png", "Rumia Determined": "assets/Rumia Determined.png", "Rumia Dubious": "assets/Rumia Dubious.png", "Rumia Happy": "assets/Rumia Happy.png", "Rumia Neutral": "assets/Rumia Neutral.png", "Rumia Shock": "assets/Rumia Shock.png", "Rumia Tease": "assets/Rumia Tease.png", "Rumia Worry": "assets/Rumia Worry.png",
        
        // Sakuya
        "Sakuya Annoyed": "assets/Sakuya Annoyed.png", "Sakuya Bashful": "assets/Sakuya Bashful.png", "Sakuya Battle Angry": "assets/Sakuya Battle Angry.png", "Sakuya Battle": "assets/Sakuya Battle.png", "Sakuya Cheerful": "assets/Sakuya Cheerful.png", "Sakuya Defeat": "assets/Sakuya Defeat.png", "Sakuya Dubious": "assets/Sakuya Dubious.png", "Sakuya Happy": "assets/Sakuya Happy.png", "Sakuya Neutral": "assets/Sakuya Neutral.png", "Sakuya Shock": "assets/Sakuya Shock.png", "Sakuya Tease": "assets/Sakuya Tease.png", "Sakuya Worry": "assets/Sakuya Worry.png",
        
        // Satsuki Rin
        "Satsuki Rin Annoyed": "assets/Satsuki Rin Annoyed.png", "Satsuki Rin Bashful": "assets/Satsuki Rin Bashful.png", "Satsuki Rin Battle Angry": "assets/Satsuki Rin Battle Angry.png", "Satsuki Rin Battle": "assets/Satsuki Rin Battle.png", "Satsuki Rin Cheerful": "assets/Satsuki Rin Cheerful.png", "Satsuki Rin Defeat": "assets/Satsuki Rin Defeat.png", "Satsuki Rin Determined": "assets/Satsuki Rin Determined.png", "Satsuki Rin Dubious": "assets/Satsuki Rin Dubious.png", "Satsuki Rin Happy": "assets/Satsuki Rin Happy.png", "Satsuki Rin Neutral": "assets/Satsuki Rin Neutral.png", "Satsuki Rin Shock": "assets/Satsuki Rin Shock.png", "Satsuki Rin Tease": "assets/Satsuki Rin Tease.png", "Satsuki Rin Worry": "assets/Satsuki Rin Worry.png"
    }
};

const defaultState = {
    currentLocation: "Shrine Day",
    activeHeroine: "Satsuki Rin Neutral", 
    activeEnemy: "None",    
    characters: {
        "Hakurei Reimu": "Shrine Day", 
        "Kirisame Marisa": "Shrine Day",
        "Satsuki Rin": "Shrine Day",
        "Rumia": "Stage 1",
        "Daiyousei": "Stage 2",
        "Cirno": "Stage 2", 
        "Meiling": "Stage 3",
        "Koakuma": "Stage 4",
        "Patchouli": "Stage 4", 
        "Sakuya": "Stage 5", 
        "Remilia": "Stage 6", 
        "Flandre": "Stage 7",
        "Ex Rumia": "Stage 7"
    }
};

let gameState = JSON.parse(JSON.stringify(defaultState));

// --- COMMUNICATION HELPER ---
// Pop-outs use window.opener, while Iframes use window.parent. This handles both automatically!
function sendToST(payload) {
    const stWindow = window.opener || window.parent;
    if (stWindow) stWindow.postMessage(payload, "*");
}

// --- INITIALIZATION ---
window.onload = () => {
    sendToST({ type: "GAME_READY" });
    loadState();
    loadSettings();
    initDevTools();
    renderMap();
    updateVisualNovelDisplay();
};

// --- SILLYTAVERN EVENT LISTENER (Chat & Scrubbing) ---
window.addEventListener("message", (event) => {
    const data = event.data;
    if (data.type !== "ST_EVENT") return;

    if (data.event === "CHAT_OPENED" || data.event === "MESSAGE_RECEIVED" || data.event === "CHAT_REWOUND") {
        const chat = data.chat;
        if (!chat) return;

        let needsRewrite = false;
        
        if (chat.length > 0) {
            const lastMsgIndex = chat.length - 1;
            const lastMessage = chat[lastMsgIndex];
            let textToScrub = lastMessage.mes;

            const sysRegex = /\[System:.*?\]/g;
            if (lastMessage.is_user && sysRegex.test(textToScrub)) {
                textToScrub = textToScrub.replace(sysRegex, "").trim();
                needsRewrite = true;
            }

            if (!lastMessage.is_user) {
                const moveRegex = /\[Move:\s*(.*?)\s*->\s*(.*?)\]/g;
                const enemyRegex = /\[SetEnemy:\s*(.*?)\]/g;
                const heroRegex = /\[SetHeroine:\s*(.*?)\]/g;
                const locRegex = /\[SetLocation:\s*(.*?)\]/g;
                let match;

                while ((match = moveRegex.exec(textToScrub)) !== null) {
                    if (gameState.characters[match[1].trim()] !== undefined) {
                        gameState.characters[match[1].trim()] = match[2].trim();
                    }
                    textToScrub = textToScrub.replace(match[0], "");
                    needsRewrite = true;
                }
                while ((match = enemyRegex.exec(textToScrub)) !== null) {
                    gameState.activeEnemy = match[1].trim();
                    textToScrub = textToScrub.replace(match[0], "");
                    needsRewrite = true;
                }
                while ((match = heroRegex.exec(textToScrub)) !== null) {
                    gameState.activeHeroine = match[1].trim();
                    textToScrub = textToScrub.replace(match[0], "");
                    needsRewrite = true;
                }
                while ((match = locRegex.exec(textToScrub)) !== null) {
                    const newLoc = match[1].trim();
                    if (gameData.locations[newLoc]) {
                        gameState.currentLocation = newLoc;
                    }
                    textToScrub = textToScrub.replace(match[0], "");
                    needsRewrite = true;
                }
            }

            if (needsRewrite) {
                // Fix: Update the local text string before rendering so the VN chat box hides the tags!
                chat[lastMsgIndex].mes = textToScrub.trim();
                
                sendToST({
                    type: "REWRITE_MESSAGE",
                    messageId: lastMsgIndex,
                    text: textToScrub.trim()
                });
                
                saveState();
                updateVisualNovelDisplay();
                renderMap();
                // We removed the 'return;' here so it continues down to draw the text!
            }
        }

        renderChatLog(chat);
    }
});

// --- RENDER FUNCTIONS ---
function renderMap() {
    const listEl = document.getElementById("location-list");
    listEl.innerHTML = "";
    
    Object.keys(gameData.locations).forEach(loc => {
        const btn = document.createElement("button");
        btn.className = `location-btn ${loc === gameState.currentLocation ? "active" : ""}`;
        btn.innerText = loc;
        btn.onclick = () => travelTo(loc);
        listEl.appendChild(btn);
    });

    document.getElementById("loc-name").innerText = gameState.currentLocation;
    document.getElementById("loc-desc").innerText = gameData.locations[gameState.currentLocation].desc;

    const charsEl = document.getElementById("loc-chars");
    charsEl.innerHTML = "";
    let found = false;
    Object.entries(gameState.characters).forEach(([char, loc]) => {
        if (loc === gameState.currentLocation) {
            const span = document.createElement("span");
            span.className = "char-badge";
            span.innerText = char;
            charsEl.appendChild(span);
            found = true;
        }
    });
    if (!found) charsEl.innerHTML = "<span style='color:#888; font-size:0.8em;'>Nobody here...</span>";
}

function updateVisualNovelDisplay() {
    const locData = gameData.locations[gameState.currentLocation];
    if (locData && locData.bg) {
        document.getElementById("vn-background").style.backgroundImage = `url('${locData.bg}')`;
    } else {
        document.getElementById("vn-background").style.backgroundImage = `none`;
    }

    const heroImg = document.getElementById("vn-heroine");
    const heroSrc = gameData.sprites[gameState.activeHeroine];
    heroImg.style.opacity = heroSrc ? "1" : "0";
    if (heroSrc) heroImg.src = heroSrc;

    const enemyImg = document.getElementById("vn-enemy");
    const enemySrc = gameData.sprites[gameState.activeEnemy];
    enemyImg.style.opacity = enemySrc ? "1" : "0";
    if (enemySrc) enemyImg.src = enemySrc;
}

function renderChatLog(chatArray) {
    const logEl = document.getElementById("chat-log");
    logEl.innerHTML = "";
    
    chatArray.forEach(msg => {
        if (msg.is_system && !msg.mes) return; 

        const div = document.createElement("div");
        div.className = `chat-mes ${msg.is_user ? 'user' : 'ai'}`;
        div.innerHTML = msg.mes.replace(/\n/g, '<br>');
        logEl.appendChild(div);
    });

    logEl.scrollTop = logEl.scrollHeight;
}

// --- PLAYER ACTIONS ---
function travelTo(newLoc) {
    if (newLoc === gameState.currentLocation) return;
    
    gameState.currentLocation = newLoc;
    saveState();
    renderMap();
    updateVisualNovelDisplay();

    const charsAtDest = Object.entries(gameState.characters)
        .filter(([_, loc]) => loc === newLoc)
        .map(([char]) => char).join(", ");
    const charText = charsAtDest ? `Characters present: ${charsAtDest}.` : "The area appears empty.";

    const sysPrompt = `[System: The player travels to ${newLoc}. ${charText} Describe their arrival.]`;
    
    sendToST({
        type: "USER_MESSAGE",
        text: sysPrompt
    });
}

const inputEl = document.getElementById("player-input");
document.getElementById("btn-send").onclick = sendPlayerMessage;

inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendPlayerMessage();
    }
});

function sendPlayerMessage() {
    const text = inputEl.value.trim();
    if (!text) return;

    sendToST({
        type: "USER_MESSAGE",
        text: text
    });

    inputEl.value = "";
}

// --- DEV TOOLS ---
function initDevTools() {
    const heroSelect = document.getElementById("dev-heroine-select");
    const enemySelect = document.getElementById("dev-enemy-select");
    const locSelect = document.getElementById("dev-location-select");

    // Populate Character Dropdowns
    Object.keys(gameData.sprites).forEach(name => {
        heroSelect.add(new Option(name, name));
        enemySelect.add(new Option(name, name));
    });

    // Populate Location Dropdown
    Object.keys(gameData.locations).forEach(name => {
        locSelect.add(new Option(name, name));
    });
}

document.getElementById("btn-devtools").onclick = () => {
    document.getElementById("dev-heroine-select").value = gameState.activeHeroine;
    document.getElementById("dev-enemy-select").value = gameState.activeEnemy;
    document.getElementById("dev-location-select").value = gameState.currentLocation;
    document.getElementById("devtools-modal").style.display = "flex";
};

document.getElementById("btn-apply-dev").onclick = () => {
    gameState.activeHeroine = document.getElementById("dev-heroine-select").value;
    gameState.activeEnemy = document.getElementById("dev-enemy-select").value;
    gameState.currentLocation = document.getElementById("dev-location-select").value;
    
    saveState();
    renderMap();
    updateVisualNovelDisplay();
    document.getElementById("devtools-modal").style.display = "none";
};

document.getElementById("btn-close-dev").onclick = () => {
    document.getElementById("devtools-modal").style.display = "none";
};

// --- SETTINGS & LOCAL STORAGE ---
document.getElementById("btn-settings").onclick = () => document.getElementById("settings-modal").style.display = "flex";
document.getElementById("btn-close-settings").onclick = () => document.getElementById("settings-modal").style.display = "none";

document.getElementById("setting-text-size").addEventListener("input", (e) => {
    document.documentElement.style.setProperty('--text-size', e.target.value + 'px');
    localStorage.setItem("eosd_text_size", e.target.value);
});

document.getElementById("setting-theme-color").addEventListener("input", (e) => {
    document.documentElement.style.setProperty('--theme-color', e.target.value);
    localStorage.setItem("eosd_theme_color", e.target.value);
});

function loadSettings() {
    const size = localStorage.getItem("eosd_text_size");
    const color = localStorage.getItem("eosd_theme_color");
    if (size) {
        document.documentElement.style.setProperty('--text-size', size + 'px');
        document.getElementById("setting-text-size").value = size;
    }
    if (color) {
        document.documentElement.style.setProperty('--theme-color', color);
        document.getElementById("setting-theme-color").value = color;
    }
}

function saveState() { 
    localStorage.setItem("eosd_tracker_state", JSON.stringify(gameState)); 
}

function loadState() {
    const saved = localStorage.getItem("eosd_tracker_state");
    if (saved) {
        const parsed = JSON.parse(saved);
        gameState = { ...defaultState, ...parsed };
        gameState.characters = { ...defaultState.characters, ...(parsed.characters || {}) };
    }
}

// --- SWIPE CONTROLS ---
document.getElementById("btn-swipe-left").onclick = () => {
    sendToST({ type: "SWIPE_MESSAGE", direction: "left" });
};

document.getElementById("btn-swipe-right").onclick = () => {
    sendToST({ type: "SWIPE_MESSAGE", direction: "right" });
};