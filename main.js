"use strict";

// ---------- Языки / локализация ----------

const ITC_LANGS = ["ru", "en"];
let itcCurrentLang = "ru";

const ITC_STRINGS = {
    ru: {
        hudMoney: "Деньги",
        hudPerClick: "За клик",
        hudAuto: "Авто / сек",
        hudMult: "Множитель",
        tokensLabel: "Жетоны",
        gearsLabel: "Шестерёнки",
        boostButton: "x2 за рекламу",

        tabCity: "Город",
        tabTasks: "Задачи",
        tabShop: "Магазин",
        tabLeaders: "Лидеры",

        machineClick: "Кликни",

        dailyTitle: "Ежедневный бонус",
        dailyReady: "Готов",
        dailyBtn: "Получить",
        dailyHint: "Зависит от уровня, жетонов и шестерёнок.",
        dailyDesc: "Один раз в 24 часа, зависит от твоего прогресса.",
        dailyNext: "Следующий бонус будет доступен через:",
        dailyOnCooldown: "Следующий бонус будет доступен после восстановления таймера.",

        prestigeTitle: "Перезапуск города",
        prestigeMultLabel: "Пост. множитель",
        prestigeHint: "Доступно с 10 уровня или суммарного заработка 50k монет.",
        prestigeBtn: "Перезапустить",
        prestigeModsTitle: "Модификаторы города",
        prestigeModsEmpty: "Пока модификаторов нет. Совершай перезапуск города.",

        tasksTitle: "Задачи",
        tasksSubtitle: "Выполняй задачи, забирай награды и ускоряй развитие города.",

        shopTitle: "Магазин улучшений",
        shopSubtitle: "Ветки прокачки: клики, авто-доход, криты, жетоны и шестерёнки.",
        shopMoney: "Деньги",
        shopTokens: "Жетоны",
        shopGears: "Шестерёнки",
        shopFilterAll: "Все",
        shopFilterClick: "Клики",
        shopFilterAuto: "Авто-доход",
        shopFilterCrit: "Криты",
        shopFilterToken: "Престиж",
        shopFilterGear: "⚙ Шестерёнки",
        shopBuy: "Купить",
        shopOpensAt: "Откроется:",

        leaderboardTitle: "Таблица лидеров",
        leaderboardSubtitle: "Топ-100 директоров города по числу перезапусков.",
        leaderboardColRank: "Место",
        leaderboardColName: "Имя",
        leaderboardColScore: "Перезапуски",
        leaderboardMyRestarts: "Твои перезапуски:",
        leaderboardMyPlace: "Твоё место в общем рейтинге:",

        modalTitle: "Перезапустить город?",
        modalText: "Перезапуск обнулит прогресс города, но вы получите жетоны и увеличите постоянный множитель дохода.",
        modalSectionStatus: "Текущий статус",
        modalLevel: "Уровень города",
        modalTotalEarned: "Всего заработано",
        modalCritChance: "Шанс крита",
        modalCritMult: "Текущий крит",
        modalMultNow: "Текущий множитель",
        modalMultNew: "Новый множитель",
        modalSectionCond: "Условия перезапуска",
        modalCondLevel: "Уровень города \u2265 10",
        modalCondEarn: "Суммарный заработок \u2265 50 000 монет",
        modalCancel: "Отмена",
        modalAd: "x2 жетоны (реклама)",
        modalConfirm: "Перезапустить",

        toastBoost: "Буст x2 дохода активен на 30 секунд!",
        toastDaily: "Ежедневный бонус получен!",
        toastPrestige: "Город перезапущен! Доход увеличен.",
        toastNoAds: "Реклама недоступна",
        toastError: "Ошибка!"
    },
    en: {
        hudMoney: "Money",
        hudPerClick: "Per click",
        hudAuto: "Auto / sec",
        hudMult: "Multiplier",
        tokensLabel: "Tokens",
        gearsLabel: "Gears",
        boostButton: "x2 by ad",

        tabCity: "City",
        tabTasks: "Tasks",
        tabShop: "Shop",
        tabLeaders: "Leaders",

        machineClick: "Click",

        dailyTitle: "Daily bonus",
        dailyReady: "Ready",
        dailyBtn: "Claim",
        dailyHint: "Depends on your level, tokens and gears.",
        dailyDesc: "Once per 24 hours, depends on your progress.",
        dailyNext: "Next bonus will be available in:",
        dailyOnCooldown: "Next bonus will be available after the timer is restored.",

        prestigeTitle: "City restart",
        prestigeMultLabel: "Permanent multiplier",
        prestigeHint: "Available from city level 10 or total earnings of 50k.",
        prestigeBtn: "Restart",
        prestigeModsTitle: "City modifiers",
        prestigeModsEmpty: "No modifiers yet. Perform city restarts.",

        tasksTitle: "Tasks",
        tasksSubtitle: "Complete tasks, take rewards and speed up city growth.",

        shopTitle: "Upgrades shop",
        shopSubtitle: "Upgrade branches: clicks, auto income, crits, tokens and gears.",
        shopMoney: "Money",
        shopTokens: "Tokens",
        shopGears: "Gears",
        shopFilterAll: "All",
        shopFilterClick: "Clicks",
        shopFilterAuto: "Auto income",
        shopFilterCrit: "Crits",
        shopFilterToken: "Prestige",
        shopFilterGear: "⚙ Gears",
        shopBuy: "Buy",
        shopOpensAt: "Opens at:",

        leaderboardTitle: "Leaderboard",
        leaderboardSubtitle: "Top-100 city directors by restarts.",
        leaderboardColRank: "Rank",
        leaderboardColName: "Name",
        leaderboardColScore: "Restarts",
        leaderboardMyRestarts: "Your restarts:",
        leaderboardMyPlace: "Your position in the global ranking:",

        modalTitle: "Restart the city?",
        modalText: "Restart will reset city progress, but you will receive tokens and increase the permanent income multiplier.",
        modalSectionStatus: "Current status",
        modalLevel: "City level",
        modalTotalEarned: "Total earned",
        modalCritChance: "Crit chance",
        modalCritMult: "Current crit",
        modalMultNow: "Current multiplier",
        modalMultNew: "New multiplier",
        modalSectionCond: "Restart conditions",
        modalCondLevel: "City level \u2265 10",
        modalCondEarn: "Total earnings \u2265 50 000 coins",
        modalCancel: "Cancel",
        modalAd: "x2 tokens (ad)",
        modalConfirm: "Restart",

        toastBoost: "x2 income boost is active for 30 seconds!",
        toastDaily: "Daily bonus claimed!",
        toastPrestige: "City restarted! Income increased.",
        toastNoAds: "Ad is not available",
        toastError: "Error!"
    }
};

// English texts for tasks and upgrades (id-based)
const ITC_TASK_TITLES_EN = {
    click_100: "Conveyor warm-up",
    click_500: "Shift check",
    click_1000: "Full shift",
    money_10k: "First ten thousand",
    money_50k: "Stable profit",
    money_100k: "Revenue plan",
    gears_10: "Parts collection",
    crit_50: "Crit hunt",
    prestige_1: "First restart",
    daily_clicks_500: "Daily warm-up",
    daily_clicks_1000: "Daily shift",
    daily_money_10k: "Daily profit",
    daily_money_50k: "Daily plan",
    daily_gears_5: "Daily maintenance",
    daily_tasks_3: "Daily manager",
    weekly_clicks_5000: "Weekly clicks plan",
    weekly_money_200k: "Weekly revenue plan",
    weekly_prestige_2: "City development plan"
};

const ITC_TASK_DESCS_EN = {
    click_100: "Make 100 clicks on the machine.",
    click_500: "Make 500 clicks on the machine.",
    click_1000: "Make 1000 clicks on the machine.",
    money_10k: "Earn 10,000 coins.",
    money_50k: "Earn 50,000 coins.",
    money_100k: "Earn 100,000 coins.",
    gears_10: "Collect 10 gears.",
    crit_50: "Make 50 critical clicks.",
    prestige_1: "Perform 1 city restart.",
    daily_clicks_500: "Make 500 clicks in a day.",
    daily_clicks_1000: "Make 1000 clicks in a day.",
    daily_money_10k: "Earn 10,000 coins in a day.",
    daily_money_50k: "Earn 50,000 coins in a day.",
    daily_gears_5: "Collect 5 gears in a day.",
    daily_tasks_3: "Complete any 3 tasks in a day.",
    weekly_clicks_5000: "Make 5000 clicks in a week.",
    weekly_money_200k: "Earn 200,000 coins in a week.",
    weekly_prestige_2: "Perform 2 city restarts in a week."
};

const ITC_UPGRADE_NAMES_EN = {
    click_power_1: "Click boost I",
    click_power_2: "Click boost II",
    auto_1: "Night shift",
    auto_2: "24/7 production",
    crit_chance: "Sensor accuracy",
    crit_power: "Crit boost",
    gear_chance: "Rare parts",
    prestige_mult: "Prestige multiplier",
    gear_click_boost: "Machined levers",
    gear_auto_boost: "Oiled mechanisms"
};

const ITC_UPGRADE_DESCS_EN = {
    click_power_1: "Base income per click.",
    click_power_2: "Advanced income per click.",
    auto_1: "Starts auto income.",
    auto_2: "Greatly increases auto income.",
    crit_chance: "Increases chance of a critical click.",
    crit_power: "Increases crit multiplier.",
    gear_chance: "Increases chance of dropping gears.",
    prestige_mult: "Increases the city's permanent multiplier.",
    gear_click_boost: "Gears boost income per click.",
    gear_auto_boost: "Gears increase auto income speed."
};


function itcT(key) {
    const pack = ITC_STRINGS[itcCurrentLang] || ITC_STRINGS.ru;
    if (Object.prototype.hasOwnProperty.call(pack, key)) {
        return pack[key];
    }
    const fallback = ITC_STRINGS.ru;
    if (Object.prototype.hasOwnProperty.call(fallback, key)) {
        return fallback[key];
    }
    return key;
}

function itcApplyLanguageToUI() {
    // html lang
    if (document.documentElement) {
        document.documentElement.lang = itcCurrentLang;
    }

    // HUD
    const hudCards = document.querySelectorAll(".itc-hud-card .itc-hud-label");
    if (hudCards.length >= 4) {
        hudCards[0].textContent = itcT("hudMoney");
        hudCards[1].textContent = itcT("hudPerClick");
        hudCards[2].textContent = itcT("hudAuto");
        hudCards[3].textContent = itcT("hudMult");
    }

    // resource pills
    const tokenPill = document.querySelector(".itc-res-pill-token");
    const tokenVal = document.getElementById("itcTokensHud");
    if (tokenPill && tokenVal) {
        tokenPill.innerHTML = "🟣 " + itcT("tokensLabel") + ": ";
        tokenPill.appendChild(tokenVal);
    }
    const gearPill = document.querySelector(".itc-res-pill-gear");
    const gearVal = document.getElementById("itcGearsHud");
    if (gearPill && gearVal) {
        gearPill.innerHTML = "⚙ " + itcT("gearsLabel") + ": ";
        gearPill.appendChild(gearVal);
    }
    const boostBtn = document.getElementById("itcBoostBtn");
    const boostTimer = document.getElementById("itcBoostTimer");
    if (boostBtn) {
        const t = boostTimer ? boostTimer.textContent : "";
        boostBtn.innerHTML = "🚀 " + itcT("boostButton") + '<span id="itcBoostTimer">' + (t || "") + "</span>";
    }

    // tabs
    const tabCity = document.querySelector('.itc-tab-btn[data-tab="city"]');
    const tabTasks = document.querySelector('.itc-tab-btn[data-tab="tasks"]');
    const tabShop = document.querySelector('.itc-tab-btn[data-tab="shop"]');
    const tabLead = document.querySelector('.itc-tab-btn[data-tab="leaders"]');
    if (tabCity) tabCity.textContent = "🏭 " + itcT("tabCity");
    if (tabTasks) tabTasks.textContent = "📋 " + itcT("tabTasks");
    if (tabShop) tabShop.textContent = "🛒 " + itcT("tabShop");
    if (tabLead) tabLead.textContent = "🏆 " + itcT("tabLeaders");

    // machine label
    const machineLabel = document.querySelector(".itc-machine-label");
    if (machineLabel) machineLabel.textContent = itcT("machineClick");

    // daily card
    const dailyTitle = document.querySelector(".itc-daily-card .itc-card-title");
    const dailyState = document.getElementById("itcDailyState");
    const dailyBtn = document.getElementById("itcDailyBtn");
    const dailyHint = document.getElementById("itcDailyHint");
    const dailyText = document.querySelector(".itc-daily-card .itc-card-text");
    if (dailyTitle) dailyTitle.textContent = itcT("dailyTitle");
    if (dailyState) {
        dailyState.textContent = itcT("dailyReady");
    }
    if (dailyBtn) dailyBtn.textContent = itcT("dailyBtn");
    if (dailyHint) dailyHint.textContent = itcT("dailyHint");
    if (dailyText) dailyText.textContent = itcT("dailyDesc");

    // prestige card
    const prestigeTitle = document.querySelector(".itc-prestige-card .itc-card-title");
    const prestigeMultLabel = document.querySelector(".itc-prestige-label");
    const prestigeHint = document.getElementById("itcPrestigeHint");
    const prestigeBtn = document.getElementById("itcPrestigeBtn");
    if (prestigeTitle) prestigeTitle.textContent = itcT("prestigeTitle");
    if (prestigeMultLabel) prestigeMultLabel.textContent = itcT("prestigeMultLabel");
    if (prestigeHint) prestigeHint.textContent = itcT("prestigeHint");
    if (prestigeBtn) prestigeBtn.textContent = itcT("prestigeBtn");

    const modsTitle = document.querySelector(".itc-mods-card .itc-card-title");
    const modsEmpty = document.querySelector(".itc-mods-empty");
    if (modsTitle) modsTitle.textContent = itcT("prestigeModsTitle");
    if (modsEmpty) modsEmpty.textContent = itcT("prestigeModsEmpty");

    // tasks page
    const tasksTitle = document.querySelector(".itc-tasks-title");
    const tasksSub = document.querySelector(".itc-tasks-subtitle");
    if (tasksTitle) tasksTitle.textContent = itcT("tasksTitle");
    if (tasksSub) tasksSub.textContent = itcT("tasksSubtitle");

    // shop
    const shopTitle = document.querySelector(".itc-shop-title");
    const shopSubtitle = document.querySelector(".itc-shop-subtitle");
    if (shopTitle) shopTitle.textContent = itcT("shopTitle");
    if (shopSubtitle) shopSubtitle.textContent = itcT("shopSubtitle");
    const shopCur = document.querySelectorAll(".itc-shop-currencies span");
    if (shopCur.length >= 3) {
        shopCur[0].innerHTML = "💰 " + itcT("shopMoney") + ': <strong id="itcShopMoney">0</strong>';
        shopCur[1].innerHTML = "🟣 " + itcT("shopTokens") + ': <strong id="itcShopTokens">0</strong>';
        shopCur[2].innerHTML = "⚙ " + itcT("shopGears") + ': <strong id="itcShopGears">0</strong>';
    }
    const shopFilters = document.querySelectorAll(".itc-shop-filter");
    shopFilters.forEach(function(b) {
        const cat = b.getAttribute("data-cat");
        if (cat === "all") b.textContent = itcT("shopFilterAll");
        else if (cat === "click") b.textContent = itcT("shopFilterClick");
        else if (cat === "auto") b.textContent = itcT("shopFilterAuto");
        else if (cat === "crit") b.textContent = itcT("shopFilterCrit");
        else if (cat === "token") b.textContent = itcT("shopFilterToken");
        else if (cat === "gear") b.textContent = itcT("shopFilterGear");
    });

    // leaderboard
    const lbTitle = document.querySelector(".itc-leaderboard-title");
    const lbSub = document.querySelector(".itc-leaderboard-subtitle");
    const lbRank = document.querySelector(".itc-lb-col-rank");
    const lbName = document.querySelector(".itc-lb-col-name");
    const lbScore = document.querySelector(".itc-lb-col-score");
    if (lbTitle) lbTitle.textContent = itcT("leaderboardTitle");
    if (lbSub) lbSub.textContent = itcT("leaderboardSubtitle");
    if (lbRank) lbRank.textContent = itcT("leaderboardColRank");
    if (lbName) lbName.textContent = itcT("leaderboardColName");
    if (lbScore) lbScore.textContent = itcT("leaderboardColScore");
    const lbNotes = document.querySelectorAll(".itc-leaderboard-note");
    if (lbNotes.length >= 2) {
        lbNotes[0].childNodes[0].textContent = itcT("leaderboardMyRestarts") + " ";
        lbNotes[1].childNodes[0].textContent = itcT("leaderboardMyPlace") + " ";
    }

    // prestige modal
    const modalTitle = document.querySelector("#itcPrestigeModal .itc-modal-title");
    const modalText = document.querySelector("#itcPrestigeModal .itc-modal-text");
    const modalSections = document.querySelectorAll("#itcPrestigeModal .itc-modal-section-title");
    const modalLabels = document.querySelectorAll("#itcPrestigeModal .itc-modal-label");
    const modalConds = document.querySelectorAll("#itcPrestigeModal .itc-modal-conditions li");
    const btnCancel = document.getElementById("itcPrestigeCancelBtn");
    const btnAd = document.getElementById("itcPrestigeAdBtn");
    const btnConfirm = document.getElementById("itcPrestigeConfirmBtn");

    if (modalTitle) modalTitle.textContent = itcT("modalTitle");
    if (modalText) modalText.textContent = itcT("modalText");
    if (modalSections.length >= 1) {
        modalSections[0].textContent = itcT("modalSectionStatus");
    }
    if (modalSections.length >= 2) {
        modalSections[1].textContent = itcT("modalSectionCond");
    }
    if (modalSections.length >= 3) {
        modalSections[2].textContent = itcT("modalSectionCond");
    }
    if (modalLabels.length >= 5) {
        modalLabels[0].textContent = itcT("modalLevel");
        modalLabels[1].textContent = itcT("modalTotalEarned");
        modalLabels[2].textContent = itcT("modalCritChance");
        modalLabels[3].textContent = itcT("modalCritMult");
        modalLabels[4].textContent = itcT("modalMultNow");
        if (modalLabels.length >= 6) {
            modalLabels[5].textContent = itcT("modalMultNew");
        }
    }
    if (modalConds.length >= 2) {
        modalConds[0].childNodes[1].textContent = itcT("modalCondLevel");
        modalConds[1].childNodes[1].textContent = itcT("modalCondEarn");
    }
    if (btnCancel) btnCancel.textContent = itcT("modalCancel");
    if (btnAd) btnAd.textContent = itcT("modalAd");
    if (btnConfirm) btnConfirm.textContent = itcT("modalConfirm");


    // city progress card
    const cityTitle = document.querySelector(".itc-progress-card .itc-card-title");
    const cityNextLabel = document.querySelector(".itc-progress-card .itc-progress-label");
    const cityBonusItems = document.querySelectorAll(".itc-progress-bonuses li");
    const cityCritLabel = document.querySelectorAll(".itc-progress-row .itc-progress-label")[1];
    const cityMilestone = document.querySelector(".itc-milestone");
    const cityMilestoneNote = document.querySelector(".itc-milestone-note");
    if (cityTitle) cityTitle.textContent = itcCurrentLang === "en" ? "City level" : "Уровень города";
    if (cityNextLabel) cityNextLabel.textContent = itcCurrentLang === "en" ? "To the next level" : "До следующего уровня";
    if (cityBonusItems && cityBonusItems.length >= 3) {
        cityBonusItems[0].textContent = itcCurrentLang === "en"
            ? "+1 to income per click at each level"
            : "+1 к доходу за клик при каждом уровне";
        cityBonusItems[1].textContent = itcCurrentLang === "en"
            ? "Crit chance grows with level"
            : "Шанс крита растёт вместе с уровнем";
        if (itcCurrentLang === "en") {
            cityBonusItems[2].innerHTML = 'Next level: <span id="itcNextBonus" class="itc-progress-next-bonus">+5% to crit chance</span>';
        } else {
            cityBonusItems[2].innerHTML = 'Следующий уровень: <span id="itcNextBonus" class="itc-progress-next-bonus">+5% к шансу крита</span>';
        }
    }
    if (cityCritLabel) {
        cityCritLabel.textContent = itcCurrentLang === "en" ? "Current crit" : "Текущий крит";
    }
    if (cityMilestone && cityMilestoneNote) {
        if (itcCurrentLang === "en") {
            cityMilestone.firstChild.textContent = "City stage: ";
            cityMilestoneNote.textContent = "bonuses every 5 levels";
        } else {
            cityMilestone.firstChild.textContent = "Этап города: ";
            cityMilestoneNote.textContent = "(бонусы каждые 5 уровней)";
        }
    }

    // prestige sidebar tokens pill & description
    const prestigeTokenPill = document.querySelector(".itc-prestige-card .itc-pill-purple");
    if (prestigeTokenPill) {
        const tokSpan = document.getElementById("itcTokens");
        const prefix = itcCurrentLang === "en" ? "Tokens: " : "Жетоны: ";
        prestigeTokenPill.innerHTML = prefix + '<span id="itcTokens">' + (tokSpan ? tokSpan.textContent : "0") + "</span>";
    }
    const prestigeDesc = document.querySelector(".itc-prestige-card .itc-card-text");
    if (prestigeDesc) {
        prestigeDesc.textContent = itcCurrentLang === "en"
            ? "Resets the city but gives tokens and modifiers that permanently increase income."
            : "Обнуляет город, но даёт жетоны и модификаторы, усиливающие доход навсегда.";
    }

    // floating button
    const floatBtn = document.getElementById("itcLangSwitchBtn");
    if (floatBtn) {
        floatBtn.textContent = itcCurrentLang.toUpperCase();
    }
}

function itcInitLanguage() {
    let lang = "ru";
    try {
        // 1) Яндекс.Игры: приоритетный источник
        if (typeof window !== "undefined" && window.itcYaLang) {
            const ya = String(window.itcYaLang).toLowerCase();
            if (ya.indexOf("en") === 0)      lang = "en";
            else if (ya.indexOf("ru") === 0) lang = "ru";
        }
        // 2) локальное сохранение (например, при локальном запуске)
        else {
            const stored = localStorage.getItem("itc_lang");
            if (stored && ITC_LANGS.indexOf(stored) !== -1) {
                lang = stored;
            } else if (typeof navigator !== "undefined" && navigator.language) {
                const nav = navigator.language.toLowerCase();
                if (nav.indexOf("en") === 0)      lang = "en";
                else if (nav.indexOf("ru") === 0) lang = "ru";
            }
        }
    } catch (e) {
        // ignore
    }
    itcCurrentLang = lang;
    itcApplyLanguageToUI();
}

function itcSetLanguage(lang) {
    if (ITC_LANGS.indexOf(lang) === -1) return;
    itcCurrentLang = lang;
    try {
        localStorage.setItem("itc_lang", lang);
    } catch (e) {}
    itcApplyLanguageToUI();
    if (typeof renderTasks === "function") renderTasks();
    if (typeof renderShop === "function") renderShop();
    if (typeof renderLeaderboard === "function") renderLeaderboard();
    if (typeof updateDailyUI === "function") updateDailyUI();
    if (typeof updatePrestigeUI === "function") updatePrestigeUI();
    if (typeof updateModsUI === "function") updateModsUI();
    if (typeof updateHUD === "function") updateHUD();
}



// ---------- Состояние игры ----------

let money = 0;
let totalClicks = 0;
let totalEarned = 0;

let perClickBase = 1;
let perClickBonus = 0;
let perClickMult = 1;

let autoBase = 0;
let autoBonus = 0;
let autoMult = 1;

let critChanceBase = 0.1;
let critChanceBonus = 0;
let critMultBase = 2;
let critMultBonus = 0;

let prestigeMult = 1;
let prestigeCount = 0;
let lastPlayerTopRank = null;
let lastPlayerGlobalRank = null;

// ---------- Реклама и бусты ----------

let adBoostActive = false;
let adBoostUntil = 0;
const AD_BOOST_DURATION_MS = 30000; // 30 секунд x2 дохода

let lastInterstitialShownAt = Date.now();
const INTERSTITIAL_INTERVAL_MS = 120000; // 2 минуты
let interstitialShowing = false;


// ---------- Лидеры (локальная фейковая таблица) ----------

const leaderboardBase = [];

function initLeaderboardBase() {
    if (leaderboardBase.length > 0) return;

    const baseNames = [
        "SteelFox", "TurboGears", "NeonFactory", "ClickMaster", "GearLord",
        "IronHeart", "VoltageKing", "PixelTycoon", "SteamCore", "LaserPlant",
        "BitBuilder", "QuantumForge", "RustyRocket", "NeonChief", "FusionWorks",
        "SkylinePlant", "SteelWhale", "GearStorm", "Overdrive", "SigmaCity",
        "NovaDirector", "TurboPlant", "CyberBoss", "SteelPilot", "ClickLord",
        "GearPilot", "NeonTycoon", "FactoryOwl", "ChromeFox", "IronWolf",
        "SolarSmith", "SteamCaptain", "QuantumTycoon", "BitOverseer", "NeonOverseer",
        "GearRunner", "PulseDirector", "TurboChief", "HyperPlant", "MagnetForge",
        "RustTown", "GearNova", "ClickStorm", "VoltDirector", "SteelNova",
        "NeonSmith", "CoreManager", "GearKnight", "SteamNova"
    ];

    let rank = 1;
    for (let i = 0; i < 100; i++) {
        const name = baseNames[i % baseNames.length] + "#" + (100 + i).toString();
        const baseScore = 140 - i * 1.1;
        const jitter = (i % 3) * 2;
        let restarts = Math.max(1, Math.floor(baseScore - jitter));
        leaderboardBase.push({ name, restarts, isPlayer: false });
        rank++;
    }
}

function buildLeaderboardWithPlayer() {
    initLeaderboardBase();
    const list = leaderboardBase.map(function(p) {
        return { name: p.name, restarts: p.restarts, isPlayer: !!p.isPlayer };
    });

    let minScore = list[list.length - 1].restarts;

    let playerInTop = false;
    if (prestigeCount > 0 && prestigeCount >= minScore) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].isPlayer) {
                list[i].restarts = prestigeCount;
                playerInTop = true;
                break;
            }
        }
        if (!playerInTop) {
            list.push({ name: (itcCurrentLang === "en" ? "You" : "Ты"), restarts: prestigeCount, isPlayer: true });
            playerInTop = true;
        }
    }

    list.sort(function(a, b) {
        return b.restarts - a.restarts;
    });

    const trimmed = list.slice(0, 100);
    return trimmed;
}

function renderLeaderboard() {
    if (!elLeaderboardList) return;

    const data = buildLeaderboardWithPlayer();
    elLeaderboardList.innerHTML = "";

    let playerTopRank = null;

    data.forEach(function(player, index) {
        const row = document.createElement("div");
        row.className = "itc-lb-row";
        if (index < 3) {
            row.classList.add("itc-lb-row--top3");
        }
        if (player.isPlayer) {
            row.classList.add("itc-lb-row--player");
        }

        const colRank = document.createElement("div");
        colRank.className = "itc-lb-col-rank";
        colRank.textContent = (index + 1).toString();

        const colName = document.createElement("div");
        colName.className = "itc-lb-col-name";
        colName.textContent = player.name;

        const colScore = document.createElement("div");
        colScore.className = "itc-lb-col-score";

        if (player.isPlayer) {
            // основной счёт игрока
            const spanMain = document.createElement("span");
            spanMain.className = "itc-lb-score-main";
            spanMain.textContent = player.restarts.toString();

            const spanLabel = document.createElement("span");
            spanLabel.className = "itc-lb-score-label";
            spanLabel.textContent = " перезапусков";

            colScore.appendChild(spanMain);
            colScore.appendChild(spanLabel);

            playerTopRank = index + 1;

            // анимация изменения места в топ-100
            if (lastPlayerTopRank !== null && lastPlayerTopRank !== playerTopRank) {
                const diff = lastPlayerTopRank - playerTopRank;
                const deltaSpan = document.createElement("span");
                deltaSpan.className = "itc-lb-rank-delta";
                if (diff > 0) {
                    deltaSpan.classList.add("itc-lb-rank-delta-up");
                    deltaSpan.textContent = "↑" + diff;
                    row.classList.add("itc-lb-row--player-up");
                } else if (diff < 0) {
                    deltaSpan.classList.add("itc-lb-rank-delta-down");
                    deltaSpan.textContent = "↓" + Math.abs(diff);
                    row.classList.add("itc-lb-row--player-down");
                }
                if (diff !== 0) {
                    colRank.appendChild(deltaSpan);
                }
            }
        } else {
            colScore.textContent = player.restarts.toString();
        }

        row.appendChild(colRank);
        row.appendChild(colName);
        row.appendChild(colScore);
        elLeaderboardList.appendChild(row);
    });

    if (elLbMyPrestige) {
        elLbMyPrestige.textContent = prestigeCount.toString();
    }

    // расчёт примерного глобального места игрока
    if (elLbMyPlace) {
        let placeText = (itcCurrentLang === "en" ? "Not in ranking yet" : "ещё нет в рейтинге");
        let newGlobalRank = null;

        if (prestigeCount > 0) {
            initLeaderboardBase();
            const sorted = leaderboardBase.slice().sort(function(a, b) {
                return b.restarts - a.restarts;
            });
            const minScoreTop100 = sorted[sorted.length - 1].restarts || 1;

            if (playerTopRank !== null) {
                // если игрок в топ-100 – берём фактическое место
                newGlobalRank = playerTopRank;
            } else {
                // оценка места от 1000 до 101 в зависимости от количества перезапусков
                const maxRank = 1000;
                const bestOutsideTop = 101;

                const tRaw = prestigeCount / minScoreTop100;
                const t = Math.max(0, Math.min(1, tRaw));

                let approx = Math.floor(maxRank - (maxRank - bestOutsideTop) * t);
                if (approx < bestOutsideTop) approx = bestOutsideTop;
                if (approx > maxRank) approx = maxRank;
                newGlobalRank = approx;
            }

            placeText = newGlobalRank.toString();
        }

        elLbMyPlace.textContent = placeText;

        if (elLbMyPlaceDelta) {
            elLbMyPlaceDelta.textContent = "";
            elLbMyPlaceDelta.className = "itc-lb-place-delta";

            if (lastPlayerGlobalRank !== null && newGlobalRank !== null && lastPlayerGlobalRank !== newGlobalRank) {
                const diffGlobal = lastPlayerGlobalRank - newGlobalRank;
                if (diffGlobal > 0) {
                    elLbMyPlaceDelta.textContent = "↑" + diffGlobal;
                    elLbMyPlaceDelta.classList.add("itc-lb-place-delta-up");
                } else if (diffGlobal < 0) {
                    elLbMyPlaceDelta.textContent = "↓" + Math.abs(diffGlobal);
                    elLbMyPlaceDelta.classList.add("itc-lb-place-delta-down");
                }
            }

            if (newGlobalRank !== null) {
                lastPlayerGlobalRank = newGlobalRank;
            }
        }
    }
}


let level = 1;
let xp = 0;
let xpToNext = 50;
let milestonesUnlocked = 0;

let gears = 0;
let tokens = 0;
let clickHeat = 0;

let lastDailyAt = 0; // timestamp ms
const DAILY_COOLDOWN_MS = 24 * 60 * 60 * 1000;

// ---------- DOM ----------

const elMoney      = document.getElementById("itcMoney");
const elPerClick   = document.getElementById("itcPerClick");
const elAuto       = document.getElementById("itcAuto");
const elMult       = document.getElementById("itcMult");
const elCritStat   = document.getElementById("itcCritStat");

const elTokensHud  = document.getElementById("itcTokensHud");
const elGearsHud   = document.getElementById("itcGearsHud");
const elTokensPill = document.querySelector(".itc-res-pill-token");
const elGearsPill  = document.querySelector(".itc-res-pill-gear");

const elBoostBtn    = document.getElementById("itcBoostBtn");
const elBoostTimer  = document.getElementById("itcBoostTimer");
const elPrestigeAdBtn = document.getElementById("itcPrestigeAdBtn");

const elLevel      = document.getElementById("itcLevel");
const elXpCurrent  = document.getElementById("itcXpCurrent");
const elXpNext     = document.getElementById("itcXpNext");
const elProgress   = document.getElementById("itcProgressFill");
const elNextBonus  = document.getElementById("itcNextBonus");
const elMilestone  = document.getElementById("itcMilestone");

const elDailyState = document.getElementById("itcDailyState");
const elDailyBtn   = document.getElementById("itcDailyBtn");
const elDailyHint  = document.getElementById("itcDailyHint");

const elTokensPrestige = document.getElementById("itcTokens");
const elPrestigeMult   = document.getElementById("itcPrestigeMult");
const elPrestigeBtn    = document.getElementById("itcPrestigeBtn");
const elPrestigeHint   = document.getElementById("itcPrestigeHint");

const elPrestigeModal  = document.getElementById("itcPrestigeModal");
const elPrestigeCloseBtn = document.getElementById("itcPrestigeCloseBtn");
const elPrestigeCancelBtn = document.getElementById("itcPrestigeCancelBtn");
const elPrestigeConfirmBtn = document.getElementById("itcPrestigeConfirmBtn");
const elModalPrestigeLevel = document.getElementById("itcModalPrestigeLevel");
const elModalPrestigeTotal = document.getElementById("itcModalPrestigeTotal");
const elModalPrestigeMultNow = document.getElementById("itcModalPrestigeMultNow");
const elModalPrestigeTokensGain = document.getElementById("itcModalPrestigeTokensGain");
const elModalPrestigeMultAfter = document.getElementById("itcModalPrestigeMultAfter");
const elModalCondLevel = document.getElementById("itcModalCondLevel");
const elModalCondEarn = document.getElementById("itcModalCondEarn");

const elModsList   = document.getElementById("itcModsList");

const elClickBtn   = document.getElementById("itcClickBtn");
const elFloatLayer = document.getElementById("itcFloatLayer");

const elTasksList  = document.getElementById("itcTasksList");

const elShopMoney  = document.getElementById("itcShopMoney");
const elShopTokens = document.getElementById("itcShopTokens");
const elShopGears  = document.getElementById("itcShopGears");
const elShopItems  = document.getElementById("itcShopItems");

const tabButtons   = document.querySelectorAll(".itc-tab-btn");
const viewCity     = document.getElementById("itcViewCity");
const viewTasks    = document.getElementById("itcViewTasks");
const viewShop     = document.getElementById("itcViewShop");
const shopFilters  = document.querySelectorAll(".itc-shop-filter");
const viewLeaders  = document.getElementById("itcViewLeaders");
const elLeaderboardList = document.getElementById("itcLeaderboardList");
const elLbMyPrestige   = document.getElementById("itcLbMyPrestige");
const elLbMyPlace      = document.getElementById("itcLbMyPlace");
const elLbMyPlaceDelta = document.getElementById("itcLbMyPlaceDelta");

// кнопка "Магазин" сверху
const elShopTopBtn = document.getElementById("itcShopBtn");

// ---------- Вспомогательные функции ----------

function formatInt(n) {
    n = Math.floor(n);
    if (n >= 1000000000) return (n / 1000000000).toFixed(1) + "B";
    if (n >= 1000000)     return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000)         return (n / 1000).toFixed(1) + "K";
    return String(n);
}

function getPerClickTotal() {
    return (perClickBase + perClickBonus) * perClickMult * prestigeMult * getAdBoostMult();
}

function getAutoTotal() {
    return (autoBase + autoBonus) * autoMult * prestigeMult * getAdBoostMult();
}

function getCritChance() {
    return Math.min(0.8, critChanceBase + critChanceBonus);
}

function getCritMult() {
    return critMultBase + critMultBonus;
}

function xpForClick() {
    return 1;
}

function xpForAuto() {
    return 0.3;
}

function xpNeededForLevel(lv) {
    return 50 + (lv - 1) * 25;
}

 //---------- UI обновление ----------

function getAdBoostMult() {
    if (adBoostActive && Date.now() < adBoostUntil) {
        return 2;
    }
    return 1;
}

function updateAdBoostUI() {
    if (!elBoostBtn || !elBoostTimer) return;

    const now = Date.now();
    if (adBoostActive && now < adBoostUntil) {
        const remainingMs = adBoostUntil - now;
        const sec = Math.max(0, Math.ceil(remainingMs / 1000));
        elBoostTimer.textContent = " · " + sec + "с";
        elBoostBtn.disabled = true;
        elBoostBtn.classList.add("itc-res-pill-boost-active");
    } else {
        if (adBoostActive || adBoostUntil !== 0) {
            adBoostActive = false;
            adBoostUntil = 0;
        }
        elBoostTimer.textContent = "";
        elBoostBtn.disabled = false;
        elBoostBtn.classList.remove("itc-res-pill-boost-active");
    }
}

function activateAdBoost() {
    adBoostActive = true;
    adBoostUntil = Date.now() + AD_BOOST_DURATION_MS;
    updateAdBoostUI();
    updateHUD();
    showToast(itcT("toastBoost"));
}

function showRewarded(onReward) {
    const sdk = window.ysdk;
    if (!sdk || !sdk.adv || typeof sdk.adv.showRewardedVideo !== "function") {
        console.warn("Rewarded not available, giving reward instantly (debug).");
        if (typeof onReward === "function") onReward();
        return;
    }

    sdk.adv.showRewardedVideo({
        callbacks: {
            onOpen: function() {},
            onRewarded: function() {
                if (typeof onReward === "function") onReward();
            },
            onClose: function() {},
            onError: function(err) {
                console.warn("Rewarded error", err);
            }
        }
    });
}

function maybeShowInterstitial() {
    const sdk = window.ysdk;
    if (!sdk || !sdk.adv || typeof sdk.adv.showFullscreenAdv !== "function") return;

    const now = Date.now();
    if (interstitialShowing) return;
    if (lastInterstitialShownAt && now - lastInterstitialShownAt < INTERSTITIAL_INTERVAL_MS) return;

    interstitialShowing = true;
    sdk.adv.showFullscreenAdv({
        callbacks: {
            onClose: function() {
                interstitialShowing = false;
                lastInterstitialShownAt = Date.now();
            },
            onError: function(err) {
                console.warn("FullscreenAdv error", err);
                interstitialShowing = false;
                lastInterstitialShownAt = Date.now();
            }
        }
    });
}

// ---------- UI обновление ----------

function updateHUD() {
    if (elMoney)    elMoney.textContent    = formatInt(money);
    if (elPerClick) elPerClick.textContent = "+" + formatInt(getPerClickTotal());
    if (elAuto)     elAuto.textContent     = formatInt(getAutoTotal());
    if (elMult)     elMult.textContent     = "x" + prestigeMult.toFixed(1);
    if (elCritStat) elCritStat.textContent = Math.round(getCritChance() * 100) + "%";

    if (elTokensHud) elTokensHud.textContent = tokens;
    if (elGearsHud)  elGearsHud.textContent  = gears;

    if (elShopMoney)  elShopMoney.textContent  = formatInt(money);
    if (elShopTokens) elShopTokens.textContent = tokens;
    if (elShopGears)  elShopGears.textContent  = gears;

    if (elTokensPrestige) elTokensPrestige.textContent = tokens;
    if (elPrestigeMult)   elPrestigeMult.textContent   = "x" + prestigeMult.toFixed(1);
}

function updateProgressUI() {
    if (elLevel) elLevel.textContent = level;
    if (elXpCurrent) elXpCurrent.textContent = Math.floor(xp);
    if (elXpNext)    elXpNext.textContent    = xpToNext;

    if (elProgress) {
        const ratio = Math.max(0, Math.min(1, xp / xpToNext));
        elProgress.style.width = (ratio * 100).toFixed(1) + "%";
    }

    if (elNextBonus) {
        elNextBonus.textContent = "+5% к шансу крита";
    }

    const milestoneNow = Math.floor((level - 1) / 5);
    if (elMilestone) elMilestone.textContent = milestoneNow;
}

function updateDailyUI() {
    const now = Date.now();
    const diff = now - lastDailyAt;
    const ready = lastDailyAt === 0 || diff >= DAILY_COOLDOWN_MS;

    if (!elDailyState || !elDailyBtn) return;

    if (ready) {
        elDailyState.textContent = itcT("dailyReady");
        elDailyState.classList.remove("itc-pill-muted");
        elDailyBtn.disabled = false;
        elDailyBtn.textContent = itcT("dailyBtn");
        if (elDailyHint) {
            elDailyHint.textContent = itcT("dailyHint");
        }
    } else {
        const remain = DAILY_COOLDOWN_MS - diff;
        const hours  = Math.floor(remain / (60*60*1000));
        const mins   = Math.floor((remain % (60*60*1000)) / (60*1000));
        const secs   = Math.floor((remain % (60*1000)) / 1000);
        elDailyState.textContent = (itcCurrentLang === "en" ? "Waiting" : "Ожидание");
        elDailyState.classList.add("itc-pill-muted");
        elDailyBtn.disabled = true;
        elDailyBtn.textContent = (hours.toString().padStart(2,"0") + ":" + mins.toString().padStart(2,"0") + ":" + secs.toString().padStart(2,"0"));
        if (elDailyHint) {
            elDailyHint.textContent = itcT("dailyOnCooldown");
        }
    }
}

function canPrestige() {
    // Перезапуск доступен только при выполнении ОБОИХ условий
    return level >= 10 && totalEarned >= 50000;
}

function updatePrestigeUI() {
    if (!elPrestigeBtn || !elPrestigeHint) return;

    const condLevelOK = level >= 10;
    const condEarnOK  = totalEarned >= 50000;

    // Кнопка всегда активна – открывает окно с условиями.
    elPrestigeBtn.disabled = false;

    if (condLevelOK && condEarnOK) {
        elPrestigeHint.textContent = itcCurrentLang === "en"
            ? "Conditions met! Tap to restart the city and receive tokens."
            : "Условия выполнены! Нажми, чтобы перезапустить город и получить жетоны.";
    } else {
        const missing = [];
        if (!condLevelOK) {
            missing.push(itcCurrentLang === "en"
                ? "reach city level 10"
                : "достигни 10 уровня города");
        }
        if (!condEarnOK) {
            missing.push(itcCurrentLang === "en"
                ? "earn a total of 50 000 coins"
                : "заработай суммарно 50 000 монет");
        }
        elPrestigeHint.textContent =
            (itcCurrentLang === "en" ? "For restart: " : "Для перезапуска: ") +
            missing.join(itcCurrentLang === "en" ? " and " : " и ") +
            ".";
    }
}

function clearModsUI() {
    updateModsUI();
}

function updateModsUI() {
    if (!elModsList) return;
    elModsList.innerHTML = "";

    // пока нет перезапусков - показываем подсказку
    if (prestigeCount === 0) {
        const li = document.createElement("li");
        li.className = "itc-mods-empty";
        li.textContent = itcCurrentLang === "en"
            ? "Modifiers will appear after the first city restarts."
            : "Модификаторы появятся после первых перезапусков города.";
        elModsList.appendChild(li);
        return;
    }

    const mods = [];

    mods.push({
        name: itcCurrentLang === "en" ? "City restarts" : "Перезапуски города",
        desc: itcCurrentLang === "en"
            ? "Restarts performed: " + prestigeCount + ". Each restart strengthens the city's economy."
            : "Совершено перезапусков: " + prestigeCount + ". Каждый перезапуск усиливает экономику города."
    });

    mods.push({
        name: itcCurrentLang === "en" ? "Permanent income multiplier" : "Постоянный множитель дохода",
        desc: itcCurrentLang === "en"
            ? "All income is multiplied by " + prestigeMult.toFixed(1) + "×."
            : "Все доходы умножаются на " + prestigeMult.toFixed(1) + "×."
    });

    const tokenUp = upgrades.find(function(u) { return u.id === "prestige_mult"; });
    if (tokenUp && tokenUp.level > 0) {
        mods.push({
            name: itcCurrentLang === "en" ? "Prestige upgrades" : "Престижные улучшения",
            desc: itcCurrentLang === "en"
                ? "Multiplier upgrade level: " + tokenUp.level + "."
                : "Уровень улучшения множителя: " + tokenUp.level + "."
        });
    }

    mods.forEach(function(mod) {
        const li = document.createElement("li");
        li.className = "itc-mod-item";

        const nameEl = document.createElement("div");
        nameEl.className = "itc-mod-name";
        nameEl.textContent = mod.name;

        const descEl = document.createElement("div");
        descEl.className = "itc-mod-desc";
        descEl.textContent = mod.desc;

        li.appendChild(nameEl);
        li.appendChild(descEl);
        elModsList.appendChild(li);
    });
}

// ---------- Всплывающий текст и пульс ----------

function spawnFloat(text, cssClass, evt) {
    if (!elFloatLayer) return;
    const span = document.createElement("span");
    span.className = "itc-float-text";
    if (cssClass) span.classList.add(cssClass);
    span.textContent = text;

    // временно добавим в слой, чтобы измерить размеры
    elFloatLayer.appendChild(span);

    const layerRect = elFloatLayer.getBoundingClientRect();
    const pillRect  = span.getBoundingClientRect();

    let x, y;
    if (evt && typeof evt.clientX === "number" && typeof evt.clientY === "number") {
        x = evt.clientX - layerRect.left - pillRect.width / 2;
        y = evt.clientY - layerRect.top  - pillRect.height / 2;
    } else {
        x = (layerRect.width  - pillRect.width)  / 2;
        y = (layerRect.height - pillRect.height) / 2;
    }

    span.style.left = x + "px";
    span.style.top  = y + "px";

    span.addEventListener("animationend", function() {
        span.remove();
    });
}
function pulseElement(el, className) {
    if (!el) return;
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
}

function showMoneyFloat(amount, isCrit, evt) {
    let label = "+" + formatInt(amount);
    let cls = "";
    if (isCrit) {
        label = "CRIT " + label;
        cls = "itc-float-text--crit";
    }
    spawnFloat(label, cls, evt);
}

function showGearFloat(evt) {
    spawnFloat("⚙ +1", "itc-float-text--gear", evt);
    pulseElement(elGearsPill, "itc-res-pill-gear-pulse");
}

function showTokenFloat(amount, evt) {
    spawnFloat("🟣 +" + amount, "itc-float-text--token", evt);
    pulseElement(elTokensPill, "itc-res-pill-token-pulse");
}

// ---------- Табы ----------

function switchTab(name) {
    const views = {
        city: viewCity,
        tasks: viewTasks,
        shop: viewShop,
        leaders: viewLeaders
    };
    Object.keys(views).forEach(function(key) {
        const v = views[key];
        if (!v) return;
        if (key === name) {
            v.classList.add("is-active");
            v.classList.add("itc-view-anim-soft");
        } else {
            v.classList.remove("is-active");
        }
    });

    tabButtons.forEach(function(btn) {
        const tab = btn.getAttribute("data-tab");
        if (tab === name) {
            btn.classList.add("is-active");
        } else {
            btn.classList.remove("is-active");
        }
    });
}

// ---------- Задачи ----------

const TASK_TYPE_NORMAL = "normal";
const TASK_TYPE_DAILY  = "daily";
const TASK_TYPE_WEEKLY = "weekly";

let tasks = [
    // 9 обычных задач
    {
        id: "click_100",
        title: "Разогрев конвейера",
        desc: "Сделай 100 кликов по станку.",
        type: TASK_TYPE_NORMAL,
        color: "yellow",
        goal: 100,
        progress: 0,
        rewardMoney: 500,
        rewardTokens: 0,
        rewardGears: 1,
        completed: false,
        claimed: false
    },
    {
        id: "click_500",
        title: "Проверка смены",
        desc: "Сделай 500 кликов по станку.",
        type: TASK_TYPE_NORMAL,
        color: "yellow",
        goal: 500,
        progress: 0,
        rewardMoney: 2500,
        rewardTokens: 0,
        rewardGears: 2,
        completed: false,
        claimed: false
    },
    {
        id: "click_1000",
        title: "Полная смена",
        desc: "Сделай 1000 кликов по станку.",
        type: TASK_TYPE_NORMAL,
        color: "yellow",
        goal: 1000,
        progress: 0,
        rewardMoney: 8000,
        rewardTokens: 1,
        rewardGears: 3,
        completed: false,
        claimed: false
    },
    {
        id: "money_10k",
        title: "Первая десятка",
        desc: "Заработай 10 000 монет.",
        type: TASK_TYPE_NORMAL,
        color: "yellow",
        goal: 10000,
        progress: 0,
        rewardMoney: 5000,
        rewardTokens: 1,
        rewardGears: 0,
        completed: false,
        claimed: false
    },
    {
        id: "money_50k",
        title: "Стабильная прибыль",
        desc: "Заработай 50 000 монет.",
        type: TASK_TYPE_NORMAL,
        color: "yellow",
        goal: 50000,
        progress: 0,
        rewardMoney: 20000,
        rewardTokens: 1,
        rewardGears: 2,
        completed: false,
        claimed: false
    },
    {
        id: "money_100k",
        title: "План по выручке",
        desc: "Заработай 100 000 монет.",
        type: TASK_TYPE_NORMAL,
        color: "yellow",
        goal: 100000,
        progress: 0,
        rewardMoney: 50000,
        rewardTokens: 2,
        rewardGears: 3,
        completed: false,
        claimed: false
    },
    {
        id: "gears_10",
        title: "Сбор деталей",
        desc: "Накопи 10 шестерёнок.",
        type: TASK_TYPE_NORMAL,
        color: "yellow",
        goal: 10,
        progress: 0,
        rewardMoney: 15000,
        rewardTokens: 1,
        rewardGears: 0,
        completed: false,
        claimed: false
    },
    {
        id: "crit_50",
        title: "Охота за критами",
        desc: "Сделай 50 критических кликов.",
        type: TASK_TYPE_NORMAL,
        color: "yellow",
        goal: 50,
        progress: 0,
        rewardMoney: 25000,
        rewardTokens: 1,
        rewardGears: 1,
        completed: false,
        claimed: false
    },
    {
        id: "prestige_1",
        title: "Первый перезапуск",
        desc: "Соверши 1 перезапуск города.",
        type: TASK_TYPE_NORMAL,
        color: "yellow",
        goal: 1,
        progress: 0,
        rewardMoney: 50000,
        rewardTokens: 2,
        rewardGears: 3,
        completed: false,
        claimed: false
    },

    // 6 ежедневных задач
    {
        id: "daily_clicks_500",
        title: "Дневная разминка",
        desc: "Сделай 500 кликов за день.",
        type: TASK_TYPE_DAILY,
        color: "blue",
        goal: 500,
        progress: 0,
        rewardMoney: 4000,
        rewardTokens: 1,
        rewardGears: 0,
        completed: false,
        claimed: false
    },
    {
        id: "daily_clicks_1000",
        title: "Дневная смена",
        desc: "Сделай 1000 кликов за день.",
        type: TASK_TYPE_DAILY,
        color: "blue",
        goal: 1000,
        progress: 0,
        rewardMoney: 8000,
        rewardTokens: 1,
        rewardGears: 1,
        completed: false,
        claimed: false
    },
    {
        id: "daily_money_10k",
        title: "Дневная прибыль",
        desc: "Заработай 10 000 монет за день.",
        type: TASK_TYPE_DAILY,
        color: "blue",
        goal: 10000,
        progress: 0,
        rewardMoney: 6000,
        rewardTokens: 1,
        rewardGears: 0,
        completed: false,
        claimed: false
    },
    {
        id: "daily_money_50k",
        title: "Дневной план",
        desc: "Заработай 50 000 монет за день.",
        type: TASK_TYPE_DAILY,
        color: "blue",
        goal: 50000,
        progress: 0,
        rewardMoney: 20000,
        rewardTokens: 2,
        rewardGears: 1,
        completed: false,
        claimed: false
    },
    {
        id: "daily_gears_5",
        title: "Дневной ремонт",
        desc: "Собери 5 шестерёнок за день.",
        type: TASK_TYPE_DAILY,
        color: "blue",
        goal: 5,
        progress: 0,
        rewardMoney: 10000,
        rewardTokens: 1,
        rewardGears: 0,
        completed: false,
        claimed: false
    },
    {
        id: "daily_tasks_3",
        title: "Дневной менеджер",
        desc: "Выполни 3 любых задания за день.",
        type: TASK_TYPE_DAILY,
        color: "blue",
        goal: 3,
        progress: 0,
        rewardMoney: 15000,
        rewardTokens: 2,
        rewardGears: 1,
        completed: false,
        claimed: false
    },

    // 3 еженедельных задачи
    {
        id: "weekly_clicks_5000",
        title: "План по кликам",
        desc: "Сделай 5000 кликов за неделю.",
        type: TASK_TYPE_WEEKLY,
        color: "purple",
        goal: 5000,
        progress: 0,
        rewardMoney: 40000,
        rewardTokens: 3,
        rewardGears: 3,
        completed: false,
        claimed: false
    },
    {
        id: "weekly_money_200k",
        title: "План по выручке недели",
        desc: "Заработай 200 000 монет за неделю.",
        type: TASK_TYPE_WEEKLY,
        color: "purple",
        goal: 200000,
        progress: 0,
        rewardMoney: 100000,
        rewardTokens: 4,
        rewardGears: 4,
        completed: false,
        claimed: false
    },
    {
        id: "weekly_prestige_2",
        title: "План по развитию города",
        desc: "Соверши 2 перезапуска города за неделю.",
        type: TASK_TYPE_WEEKLY,
        color: "purple",
        goal: 2,
        progress: 0,
        rewardMoney: 120000,
        rewardTokens: 5,
        rewardGears: 5,
        completed: false,
        claimed: false
    }
];

// служебные поля и кулдауны для ежедневных/еженедельных задач
tasks.forEach(function(t) {
    t.nextResetAt = 0; // timestamp ms, когда задача обновится
});

const DAILY_TASK_COOLDOWN_MS  = 24 * 60 * 60 * 1000;
const WEEKLY_TASK_COOLDOWN_MS = 7  * 24 * 60 * 60 * 1000;




function getTaskColorClass(task) {
    if (task.type === TASK_TYPE_DAILY) return "itc-task-blue";
    if (task.type === TASK_TYPE_WEEKLY) return "itc-task-purple";
    return "itc-task-yellow";
}

function onTaskProgress(kind, amount) {
    tasks.forEach(function(task) {
        if (task.claimed) return;

        // кликовые задачи (обычные, ежедневные, еженедельные)
        if (kind === "click" &&
            (task.id.indexOf("click_") === 0 ||
             task.id.indexOf("daily_clicks_") === 0 ||
             task.id.indexOf("weekly_clicks_") === 0)) {
            task.progress = Math.min(task.goal, task.progress + amount);
        }
        // задачи на деньги
        else if (kind === "money" &&
            (task.id.indexOf("money_") === 0 ||
             task.id.indexOf("daily_money_") === 0 ||
             task.id.indexOf("weekly_money_") === 0)) {
            task.progress = Math.min(task.goal, task.progress + amount);
        }
        // задачи на шестерёнки
        else if (kind === "gears" &&
            (task.id.indexOf("gears_") === 0 ||
             task.id.indexOf("daily_gears_") === 0 ||
             task.id.indexOf("weekly_gears_") === 0)) {
            task.progress = Math.min(task.goal, task.progress + amount);
        }
        // задачи на престиж
        else if (kind === "prestige" &&
            (task.id.indexOf("prestige_") === 0 ||
             task.id.indexOf("weekly_prestige_") === 0)) {
            task.progress = Math.min(task.goal, task.progress + amount);
        }
        // задачи на количество выполненных задач
        else if (task.id.indexOf("daily_tasks_") === 0 && kind === "task_completed") {
            task.progress = Math.min(task.goal, task.progress + amount);
        }

        if (!task.completed && task.progress >= task.goal) {
            task.completed = true;
            showTaskCompletedToast(task);
            pulseTasksTab();
        }
    });
    renderTasks();
}
function showTaskCompletedToast(task) {
    let baseTitle = task.title;
    if (itcCurrentLang === "en" && ITC_TASK_TITLES_EN[task.id]) {
        baseTitle = ITC_TASK_TITLES_EN[task.id];
    }
    const text = itcCurrentLang === "en"
        ? baseTitle + " completed! Claim your reward."
        : baseTitle + " выполнено! Заберите награду.";
    showToast(text);
}

function pulseTasksTab() {
    tabButtons.forEach(function(btn) {
        if (btn.getAttribute("data-tab") === "tasks") {
            btn.classList.add("itc-tab-alert");
        }
    });
}

function clearTasksTabAlert() {
    tabButtons.forEach(function(btn) {
        btn.classList.remove("itc-tab-alert");
    });
}

function renderTasks() {
    if (!elTasksList) return;
    elTasksList.innerHTML = "";

    tasks.forEach(function(task) {
        const card = document.createElement("article");
        card.className = "itc-task-card " + getTaskColorClass(task);
        card.setAttribute("data-task-id", task.id);
        if (task.completed && task.claimed) {
            card.classList.add("itc-task-done");
        }

        const titleRow = document.createElement("div");
        titleRow.className = "itc-task-title-row";

        const titleEl = document.createElement("div");
        titleEl.className = "itc-task-title";
        let titleText = task.title;
        if (itcCurrentLang === "en" && ITC_TASK_TITLES_EN[task.id]) {
            titleText = ITC_TASK_TITLES_EN[task.id];
        }
        titleEl.textContent = titleText;

        const tag = document.createElement("div");
        tag.className = "itc-task-tag";
        if (task.type === TASK_TYPE_DAILY) {
            tag.classList.add("itc-task-tag--daily");
            tag.textContent = (itcCurrentLang === "en" ? "Daily" : "Ежедневное");
        } else if (task.type === TASK_TYPE_WEEKLY) {
            tag.classList.add("itc-task-tag--weekly");
            tag.textContent = (itcCurrentLang === "en" ? "Weekly" : "Еженедельное");
        } else {
            tag.textContent = (itcCurrentLang === "en" ? "Normal" : "Обычное");
        }

        titleRow.appendChild(titleEl);
        titleRow.appendChild(tag);

        const desc = document.createElement("div");
        desc.className = "itc-task-desc";
        let descText = task.desc;
        if (itcCurrentLang === "en" && ITC_TASK_DESCS_EN[task.id]) {
            descText = ITC_TASK_DESCS_EN[task.id];
        }
        desc.textContent = descText;

        const meta = document.createElement("div");
        meta.className = "itc-task-meta";

        const progressText = document.createElement("div");
        progressText.textContent = Math.floor(task.progress) + " / " + task.goal;

        const rewardText = document.createElement("div");
        let rewardStr = "";
        if (task.rewardMoney)  rewardStr += "💰 " + formatInt(task.rewardMoney) + " ";
        if (task.rewardTokens) rewardStr += "🟣 " + task.rewardTokens + " ";
        if (task.rewardGears)  rewardStr += "⚙ " + task.rewardGears + " ";
        rewardText.className = "itc-task-reward";
        rewardText.textContent = rewardStr.trim();

        meta.appendChild(progressText);
        meta.appendChild(rewardText);

        const status = document.createElement("div");
        status.className = "itc-task-status";

        if (task.completed && !task.claimed) {
            status.textContent = (itcCurrentLang === "en" ? "Claim reward" : "Забрать награду");
            card.classList.add("itc-task-ready");
        } else if (task.completed && task.claimed) {
            if (task.type === TASK_TYPE_DAILY || task.type === TASK_TYPE_WEEKLY) {
                status.textContent = (itcCurrentLang === "en" ? "Waiting for reset" : "Ожидание обновления");
            } else {
                status.textContent = (itcCurrentLang === "en" ? "Reward received" : "Награда получена");
            }
        } else {
            status.textContent = (itcCurrentLang === "en" ? "In progress" : "Выполняется");
        }

        const main = document.createElement("div");
        main.className = "itc-task-main";
        main.appendChild(titleRow);
        main.appendChild(desc);
        main.appendChild(meta);
        main.appendChild(status);

        if (task.type === TASK_TYPE_DAILY || task.type === TASK_TYPE_WEEKLY) {
            const timerEl = document.createElement("div");
            timerEl.className = "itc-task-timer";
            if (task.completed && task.claimed && task.nextResetAt) {
                timerEl.textContent = formatTaskTimer(task);
            }
            main.appendChild(timerEl);
        }

        card.appendChild(main);

        card.addEventListener("click", function() {
            if (task.completed && !task.claimed) {
                claimTaskReward(task);
            }
        });

        elTasksList.appendChild(card);
    });
}

function claimTaskReward(task) {
    if (task.claimed) return;
    task.claimed = true;

    if (task.rewardMoney) {
        money += task.rewardMoney;
        totalEarned += task.rewardMoney;
        showMoneyFloat(task.rewardMoney, false);
    }
    if (task.rewardTokens) {
        tokens += task.rewardTokens;
        showTokenFloat(task.rewardTokens);
    }
    if (task.rewardGears) {
        gears += task.rewardGears;
        showGearFloat();
    }

    if (task.type === TASK_TYPE_DAILY) {
        task.nextResetAt = Date.now() + DAILY_TASK_COOLDOWN_MS;
    } else if (task.type === TASK_TYPE_WEEKLY) {
        task.nextResetAt = Date.now() + WEEKLY_TASK_COOLDOWN_MS;
    }

    // если это задача про выполнение задач - засчитываем прогресс
    if (task.id.indexOf("daily_") === 0 || task.type === TASK_TYPE_NORMAL || task.type === TASK_TYPE_WEEKLY) {
        onTaskProgress("task_completed", 1);
    }

    updateHUD();
    renderTasks();
}

// ---------- Магазин ----------

let currentShopCategory = "all";

const upgrades = [
    {
        id: "click_power_1",
        name: "Усиление клика I",
        desc: "Базовый доход за клик.",
        group: "click",
        type: "click",
        level: 0,
        maxLevel: 10,
        basePrice: 50,
        priceGrowth: 1.25,
        costType: "money",
        unlockLevel: 1
    },
    {
        id: "click_power_2",
        name: "Усиление клика II",
        desc: "Продвинутый доход за клик.",
        group: "click",
        type: "click",
        level: 0,
        maxLevel: 10,
        basePrice: 500,
        priceGrowth: 1.28,
        costType: "money",
        unlockLevel: 5,
        requires: { id: "click_power_1", level: 5 }
    },
    {
        id: "auto_1",
        name: "Ночная смена",
        desc: "Запускает авто-прибыль.",
        group: "auto",
        type: "auto",
        level: 0,
        maxLevel: 10,
        basePrice: 200,
        priceGrowth: 1.3,
        costType: "money",
        unlockLevel: 3
    },
    {
        id: "auto_2",
        name: "24/7 производство",
        desc: "Сильное увеличение авто-дохода.",
        group: "auto",
        type: "auto",
        level: 0,
        maxLevel: 10,
        basePrice: 2000,
        priceGrowth: 1.35,
        costType: "money",
        unlockLevel: 8,
        requires: { id: "auto_1", level: 5 }
    },
    {
        id: "crit_chance",
        name: "Точность датчиков",
        desc: "Повышает шанс критического клика.",
        group: "crit",
        type: "crit_chance",
        level: 0,
        maxLevel: 10,
        basePrice: 400,
        priceGrowth: 1.3,
        costType: "money",
        unlockLevel: 4
    },
    {
        id: "crit_power",
        name: "Усиление критов",
        desc: "Увеличивает множитель крита.",
        group: "crit",
        type: "crit_power",
        level: 0,
        maxLevel: 8,
        basePrice: 800,
        priceGrowth: 1.35,
        costType: "money",
        unlockLevel: 6
    },
    {
        id: "gear_chance",
        name: "Редкие детали",
        desc: "Повышает шанс выпадения шестерёнок.",
        group: "gear",
        type: "gear_chance",
        level: 0,
        maxLevel: 10,
        basePrice: 3,
        priceGrowth: 1.3,
        costType: "gears",
        unlockLevel: 5
    },
    {
        id: "prestige_mult",
        name: "Престижный множитель",
        desc: "Увеличивает постоянный множитель города.",
        group: "token",
        type: "prestige_mult",
        level: 0,
        maxLevel: 20,
        basePrice: 1,
        priceGrowth: 1.4,
        costType: "tokens",
        unlockLevel: 1

    },
    {
        id: "gear_click_boost",
        name: "Точёные рычаги",
        desc: "Шестерёнки усиливают доход за клик.",
        group: "gear",
        type: "gear_click",
        level: 0,
        maxLevel: 10,
        basePrice: 4,
        priceGrowth: 1.35,
        costType: "gears",
        unlockLevel: 6
    },
    {
        id: "gear_auto_boost",
        name: "Масляные механизмы",
        desc: "Шестерёнки ускоряют авто-доход.",
        group: "gear",
        type: "gear_auto",
        level: 0,
        maxLevel: 10,
        basePrice: 6,
        priceGrowth: 1.35,
        costType: "gears",
        unlockLevel: 7
    }
];

function getUpgradePrice(u) {
    return Math.floor(u.basePrice * Math.pow(u.priceGrowth, u.level));
}

function isUpgradeLocked(u) {
    const byLevel = u.unlockLevel && level < u.unlockLevel;
    let byReq = false;
    if (u.requires) {
        const reqUp = upgrades.find(function(x){ return x.id === u.requires.id; });
        const reqLevel = reqUp ? reqUp.level : 0;
        byReq = reqLevel < u.requires.level;
    }
    return { byLevel: !!byLevel, byReq: !!byReq };
}

function getUpgradeEffectText(u) {
    if (u.type === "click")         return itcCurrentLang === "en" ? "Effect: +1 to base income per click." : "Эффект: +1 к базовому доходу за клик.";
    if (u.type === "auto")          return itcCurrentLang === "en" ? "Effect: +0.5 to auto income per level." : "Эффект: +0.5 к авто-доходу за уровень.";
    if (u.type === "crit_chance")   return itcCurrentLang === "en" ? "Effect: +2% crit chance per level." : "Эффект: +2% к шансу крита за уровень.";
    if (u.type === "crit_power")    return itcCurrentLang === "en" ? "Effect: +0.1 to crit multiplier per level." : "Эффект: +0.1 к множителю крита за уровень.";
    if (u.type === "gear_chance")   return itcCurrentLang === "en" ? "Effect: increases chance of dropping ⚙." : "Эффект: повышает шанс выпадения ⚙.";
    if (u.type === "gear_click")    return itcCurrentLang === "en" ? "Effect: +2 income per click per level." : "Эффект: +2 к доходу за клик за уровень.";
    if (u.type === "gear_auto")     return itcCurrentLang === "en" ? "Effect: +1 to auto income per level." : "Эффект: +1 к авто-доходу за уровень.";
    if (u.type === "prestige_mult") return itcCurrentLang === "en" ? "Effect: +0.2 to permanent multiplier per level." : "Эффект: +0.2 к постоянному множителю за уровень.";
    return "";
}

function getUpgradeTypeLabel(u) {
    if (u.group === "click") return itcCurrentLang === "en" ? "Clicks" : "Клики";
    if (u.group === "auto")  return itcCurrentLang === "en" ? "Auto" : "Авто";
    if (u.group === "crit")  return itcCurrentLang === "en" ? "Crits" : "Криты";
    if (u.group === "gear")  return "⚙";
    if (u.group === "token") return itcCurrentLang === "en" ? "Prestige" : "Престиж";
    return itcCurrentLang === "en" ? "General" : "Общее";
}

function getUpgradeTypeClass(u) {
    if (u.group === "click") return "itc-shop-item-type-click";
    if (u.group === "auto")  return "itc-shop-item-type-auto";
    if (u.group === "crit")  return "itc-shop-item-type-crit";
    if (u.group === "gear")  return "itc-shop-item-type-gear";
    if (u.group === "token") return "itc-shop-item-type-token";
    return "";
}

function renderShop() {
    if (!elShopItems) return;
    elShopItems.innerHTML = "";

    upgrades.forEach(function(u) {
        if (currentShopCategory !== "all" && u.group !== currentShopCategory) return;

        const card = document.createElement("article");
        card.className = "itc-shop-item";

        const header = document.createElement("div");
        header.className = "itc-shop-item-header";

        const left = document.createElement("div");
        const title = document.createElement("div");
        title.className = "itc-shop-item-title";
        let upTitle = u.name;
        if (itcCurrentLang === "en" && ITC_UPGRADE_NAMES_EN[u.id]) {
            upTitle = ITC_UPGRADE_NAMES_EN[u.id];
        }
        title.textContent = upTitle;

        const levelEl = document.createElement("div");
        levelEl.className = "itc-shop-item-level";
        if (itcCurrentLang === "en") {
            levelEl.textContent = "Lv. " + u.level + " / " + u.maxLevel;
        } else {
            levelEl.textContent = "Ур. " + u.level + " / " + u.maxLevel;
        }

        left.appendChild(title);
        left.appendChild(levelEl);

        const typeTag = document.createElement("div");
        typeTag.className = "itc-shop-item-type-tag " + getUpgradeTypeClass(u);
        typeTag.textContent = getUpgradeTypeLabel(u);

        header.appendChild(left);
        header.appendChild(typeTag);

        const descEl = document.createElement("div");
        descEl.className = "itc-shop-item-desc";
        let upDesc = u.desc;
        if (itcCurrentLang === "en" && ITC_UPGRADE_DESCS_EN[u.id]) {
            upDesc = ITC_UPGRADE_DESCS_EN[u.id];
        }
        descEl.textContent = upDesc;

        const effect = getUpgradeEffectText(u);
        const effectEl = document.createElement("div");
        effectEl.className = "itc-shop-item-desc";
        effectEl.innerHTML = "<strong>" + effect + "</strong>";

        const footer = document.createElement("div");
        footer.className = "itc-shop-item-footer";

        const priceSpan = document.createElement("span");
        priceSpan.className = "itc-shop-item-price";

        const lockedInfo = isUpgradeLocked(u);
        const locked = lockedInfo.byLevel || lockedInfo.byReq || (u.maxLevel && u.level >= u.maxLevel);

        let price = getUpgradePrice(u);
        let priceText = "";
        if (u.costType === "tokens") {
            priceText = "🟣 " + price;
            priceSpan.classList.add("itc-shop-item-price--tokens");
        } else if (u.costType === "gears") {
            priceText = "⚙ " + price;
            priceSpan.classList.add("itc-shop-item-price--gears");
        } else {
            priceText = "💰 " + formatInt(price);
        }
        priceSpan.textContent = priceText;

        footer.appendChild(priceSpan);

        let lockedText = "";
        if (locked) {
            const parts = [];
            if (lockedInfo.byLevel) parts.push("Lv " + u.unlockLevel);
            if (lockedInfo.byReq && u.requires) {
                parts.push("требует " + u.requires.level + " ур. " + u.requires.id);
            }
            lockedText = parts.join(", ");
        }

        let btn = null;
        if (!locked) {
            btn = document.createElement("button");
            btn.className = "itc-shop-buy-btn";
            if (u.costType === "tokens") btn.classList.add("itc-shop-buy-btn--token");
            if (u.costType === "gears")  btn.classList.add("itc-shop-buy-btn--gear");
            btn.textContent = itcT("shopBuy");
            footer.appendChild(btn);
        } else if (lockedText) {
            const lockEl = document.createElement("div");
            lockEl.className = "itc-shop-locked-text";
            lockEl.textContent = itcT("shopOpensAt") + " " + lockedText;
            footer.appendChild(lockEl);
            card.classList.add("itc-shop-item-locked");
        }

        card.appendChild(header);
        card.appendChild(descEl);
        if (effect) card.appendChild(effectEl);
        card.appendChild(footer);

        if (btn) {
            btn.addEventListener("click", function() {
                buyUpgrade(u);
            });

            let canAfford = false;
            if (u.costType === "tokens") canAfford = tokens >= price;
            else if (u.costType === "gears") canAfford = gears >= price;
            else canAfford = money >= price;

            btn.disabled = !canAfford;
        }

        elShopItems.appendChild(card);
    });
}

function buyUpgrade(u) {
    const lockedInfo = isUpgradeLocked(u);
    if (lockedInfo.byLevel || lockedInfo.byReq) return;
    if (u.maxLevel && u.level >= u.maxLevel) return;

    const price = getUpgradePrice(u);
    if (u.costType === "tokens") {
        if (tokens < price) return;
        tokens -= price;
        showTokenFloat(price);
    } else if (u.costType === "gears") {
        if (gears < price) return;
        gears -= price;
        showGearFloat();
    } else {
        if (money < price) return;
        money -= price;
    }

    u.level += 1;

    if (u.type === "click") {
        perClickBonus += 1;
    } else if (u.type === "auto") {
        autoBonus += 0.5;
    } else if (u.type === "crit_chance") {
        critChanceBonus += 0.02;
    } else if (u.type === "crit_power") {
        critMultBonus += 0.1;
    } else if (u.type === "gear_chance") {
        // шанс выпадения учитывается в rollGearDrop
    } else if (u.type === "gear_click") {
        perClickBonus += 2;
    } else if (u.type === "gear_auto") {
        autoBonus += 1;
    } else if (u.type === "prestige_mult") {
        prestigeMult += 0.2;
    }

    updateHUD();
    renderShop();
}

// ---------- Тост ----------

let toastTimer = null;

function showToast(message) {
    let el = document.getElementById("itcToast");
    if (!el) {
        el = document.createElement("div");
        el.id = "itcToast";
        el.className = "itc-toast";
        document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("is-visible");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function() {
        el.classList.remove("is-visible");
    }, 2500);
}


// ---------- Нагрев кнопки ----------

function updateHeatVisual() {
    if (!elClickBtn) return;
    if (clickHeat > 0.7) {
        elClickBtn.classList.add("itc-machine-hot-3");
        elClickBtn.classList.remove("itc-machine-hot-2");
        elClickBtn.classList.remove("itc-machine-hot-1");
    } else if (clickHeat > 0.4) {
        elClickBtn.classList.add("itc-machine-hot-2");
        elClickBtn.classList.remove("itc-machine-hot-3");
        elClickBtn.classList.remove("itc-machine-hot-1");
    } else if (clickHeat > 0.15) {
        elClickBtn.classList.add("itc-machine-hot-1");
        elClickBtn.classList.remove("itc-machine-hot-3");
        elClickBtn.classList.remove("itc-machine-hot-2");
    } else {
        elClickBtn.classList.remove("itc-machine-hot-1");
        elClickBtn.classList.remove("itc-machine-hot-2");
        elClickBtn.classList.remove("itc-machine-hot-3");
    }
}

function addClickHeat() {
    clickHeat += 0.18;
    if (clickHeat > 1) clickHeat = 1;
    updateHeatVisual();
}

function coolDownHeat() {
    if (clickHeat <= 0) return;
    clickHeat -= 0.12;
    if (clickHeat < 0) clickHeat = 0;
    updateHeatVisual();
}

// ---------- Клик и авто-доход ----------

function rollGearDrop() {
    let baseChance = 0.02;
    const gearUp = upgrades.find(function(x){ return x.id === "gear_chance"; });
    if (gearUp && gearUp.level > 0) {
        baseChance += 0.005 * gearUp.level;
    }
    return Math.random() < baseChance;
}

function handleClick(evt) {
    totalClicks += 1;
    addClickHeat();

    const totalPerClick = getPerClickTotal();
    const chance = getCritChance();
    let gain = totalPerClick;
    let isCrit = false;

    if (Math.random() < chance) {
        isCrit = true;
        gain = gain * getCritMult();
    }

    gain = Math.floor(gain);
    if (gain < 1) gain = 1;

    money += gain;
    totalEarned += gain;

    showMoneyFloat(gain, isCrit, evt);

    if (rollGearDrop()) {
        gears += 1;
        showGearFloat(evt);
        onTaskProgress("gears", 1);
    }

    const xpGain = xpForClick();
    addXp(xpGain);

    onTaskProgress("click", 1);
    onTaskProgress("money", gain);

    updateHUD();
    renderShop();
}

function addXp(amount) {
    xp += amount;
    while (xp >= xpToNext) {
        xp -= xpToNext;
        level += 1;
        xpToNext = xpNeededForLevel(level);
    }
    updateProgressUI();
    updatePrestigeUI();
}

function autoTick() {
    const auto = getAutoTotal();
    if (auto <= 0) return;
    const gain = Math.floor(auto);
    if (gain <= 0) return;

    money += gain;
    totalEarned += gain;

    const xpGain = xpForAuto();
    addXp(xpGain);

    onTaskProgress("money", gain);
    updateHUD();
    renderShop();
}

// ---------- Ежедневный бонус и престиж ----------

function takeDaily() {
    const now = Date.now();
    const diff = now - lastDailyAt;
    if (lastDailyAt !== 0 && diff < DAILY_COOLDOWN_MS) return;

    const base = 1000 + level * 200;
    const bonusFromTokens = tokens * 200;
    const reward = base + bonusFromTokens;

    money += reward;
    totalEarned += reward;
    showMoneyFloat(reward, false);

    if (gears > 0) {
        const extraGears = 1;
        gears += extraGears;
        showGearFloat();
    }

    lastDailyAt = now;
    updateDailyUI();
    updateHUD();
    showToast(itcT("toastDaily"));
}


function getPrestigeGainTokens() {
    const levelTokens = Math.floor(level / 5);
    const moneyTokens = Math.floor(totalEarned / 50000);
    return Math.max(1, levelTokens + moneyTokens);
}

function updatePrestigeModal() {
    if (!elPrestigeModal) return;

    if (elModalPrestigeLevel) {
        elModalPrestigeLevel.textContent = level.toString();
    }
    if (elModalPrestigeTotal) {
        elModalPrestigeTotal.textContent = itcCurrentLang === "en" ? (formatInt(totalEarned) + " coins") : (formatInt(totalEarned) + " монет");
    }
    if (elModalPrestigeMultNow) {
        elModalPrestigeMultNow.textContent = "x" + prestigeMult.toFixed(1);
    }

    const gainTokens = getPrestigeGainTokens();
    const multAfter = prestigeMult + gainTokens * 0.2;

    if (elModalPrestigeTokensGain) {
        elModalPrestigeTokensGain.textContent = "+" + gainTokens;
    }
    if (elModalPrestigeMultAfter) {
        elModalPrestigeMultAfter.textContent = "x" + multAfter.toFixed(1);
    }

    const condLevelOK = level >= 10;
    const condEarnOK = totalEarned >= 50000;

    if (elModalCondLevel) {
        elModalCondLevel.classList.toggle("itc-cond-ok", condLevelOK);
    }
    if (elModalCondEarn) {
        elModalCondEarn.classList.toggle("itc-cond-ok", condEarnOK);
    }

    if (elPrestigeConfirmBtn) {
        elPrestigeConfirmBtn.disabled = !(condLevelOK || condEarnOK);
    }
}

function openPrestigeModal() {
    if (!elPrestigeModal) return;
    updatePrestigeModal();
    elPrestigeModal.classList.add("is-open");
}

function closePrestigeModal() {
    if (!elPrestigeModal) return;
    elPrestigeModal.classList.remove("is-open");
}

function doPrestige(doubleTokens) {
    if (!canPrestige()) return;

    // вычисляем количество жетонов
    const levelTokens = Math.floor(level / 5);
    const moneyTokens = Math.floor(totalEarned / 50000);
    let gainTokens = Math.max(1, levelTokens + moneyTokens);

    if (doubleTokens) {
        gainTokens *= 2;
    }

    tokens += gainTokens;
    prestigeMult += gainTokens * 0.2;
    prestigeCount += 1;

    // засчитываем задачи на престиж
    onTaskProgress("prestige", 1);

    // сбросим прогресс, но оставим жетоны и множитель
    money = 0;
    totalClicks = 0;
    totalEarned = 0;
    perClickBase = 1;
    perClickBonus = 0;
    perClickMult = 1;
    autoBase = 0;
    autoBonus = 0;
    autoMult = 1;
    critChanceBonus = 0;
    critMultBonus = 0;

    level = 1;
    xp = 0;
    xpToNext = xpNeededForLevel(1);
    milestonesUnlocked = 0;

    gears = 0;

    tasks.forEach(function(t) {
        if (t.type === TASK_TYPE_NORMAL) {
            t.progress = 0;
            t.completed = false;
            t.claimed = false;
        }
    });

    upgrades.forEach(function(u) {
        u.level = 0;
    });

    clearModsUI();
    updateHUD();
    updateProgressUI();
    updateDailyUI();
    updatePrestigeUI();
    renderTasks();
    renderShop();
    renderLeaderboard();

    showTokenFloat(gainTokens);
    const msg = itcCurrentLang === "en"
        ? "City restarted! Income increased, tokens +" + gainTokens
        : "Город перезапущен! Доход вырос, жетоны +" + gainTokens;
    showToast(msg);
}


// ---------- Инициализация ----------

function initTabs() {
    tabButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const tab = btn.getAttribute("data-tab");
            if (tab === "tasks") {
                clearTasksTabAlert();
            }
            switchTab(tab);
        });
    });

    if (elShopTopBtn) {
        elShopTopBtn.addEventListener("click", function() {
            switchTab("shop");
        });
    }
}

function initShopFilters() {
    shopFilters.forEach(function(btn) {
        btn.addEventListener("click", function() {
            shopFilters.forEach(function(b) { b.classList.remove("is-active"); });
            btn.classList.add("is-active");
            currentShopCategory = btn.getAttribute("data-cat") || "all";
            renderShop();
        });
    });
}

function initButtons() {
    // floating language button
    const langFloatBtn = document.getElementById("itcLangSwitchBtn");
    if (langFloatBtn) {
        langFloatBtn.addEventListener("click", function() {
            const next = (itcCurrentLang === "ru") ? "en" : "ru";
            itcSetLanguage(next);
        });
    }

    if (elClickBtn) {
        elClickBtn.addEventListener("click", function(evt) {
            elClickBtn.classList.remove("itc-machine--clicked");
            void elClickBtn.offsetWidth;
            elClickBtn.classList.add("itc-machine--clicked");
            handleClick(evt);
        });
    }

    if (elDailyBtn) {
        elDailyBtn.addEventListener("click", function() {
            takeDaily();
        });
    }

    if (elPrestigeBtn) {
        elPrestigeBtn.addEventListener("click", function() {
            openPrestigeModal();
        });
    }

    if (elPrestigeCancelBtn) {
        elPrestigeCancelBtn.addEventListener("click", function() {
            closePrestigeModal();
        });
    }

    if (elPrestigeCloseBtn) {
        elPrestigeCloseBtn.addEventListener("click", function() {
            closePrestigeModal();
        });
    }

    if (elPrestigeModal) {
        elPrestigeModal.addEventListener("click", function(evt) {
            if (evt.target === elPrestigeModal) {
                closePrestigeModal();
            }
        });
    }

    if (elPrestigeConfirmBtn) {
        elPrestigeConfirmBtn.addEventListener("click", function() {
            if (!canPrestige()) {
                updatePrestigeModal();
                return;
            }
            closePrestigeModal();
            doPrestige(false);
        });
    }

    if (elBoostBtn) {
        elBoostBtn.addEventListener("click", function() {
            if (adBoostActive && Date.now() < adBoostUntil) return;
            showRewarded(function() {
                activateAdBoost();
            });
        });
    }

    if (elPrestigeAdBtn) {
        elPrestigeAdBtn.addEventListener("click", function() {
            if (!canPrestige()) {
                updatePrestigeModal();
                return;
            }
            showRewarded(function() {
                closePrestigeModal();
                doPrestige(true);
            });
        });
    }

}


function formatTaskTimeRemaining(ms) {
    if (ms <= 0) return "0:00";

    let totalSec = Math.floor(ms / 1000);
    const days = Math.floor(totalSec / 86400);
    totalSec -= days * 86400;

    const hours = Math.floor(totalSec / 3600);
    totalSec -= hours * 3600;

    const mins = Math.floor(totalSec / 60);
    const secs = totalSec - mins * 60;

    const hh = hours.toString().padStart(2, "0");
    const mm = mins.toString().padStart(2, "0");
    const ss = secs.toString().padStart(2, "0");

    if (days > 0) {
        return days + "д " + hh + ":" + mm + ":" + ss;
    }
    return hh + ":" + mm + ":" + ss;
}

function formatTaskTimer(task) {
    if (!task.nextResetAt) return "";
    const now = Date.now();
    const remain = task.nextResetAt - now;
    if (remain <= 0) {
        return itcCurrentLang === "en" ? "Task will refresh soon" : "Задача скоро обновится";
    }
    return (itcCurrentLang === "en" ? "Refresh in: " : "Обновление через: ") + formatTaskTimeRemaining(remain);
}

function updateTaskCooldowns() {
    const now = Date.now();
    let changed = false;

    tasks.forEach(function(task) {
        if ((task.type === TASK_TYPE_DAILY || task.type === TASK_TYPE_WEEKLY) &&
            task.claimed &&
            task.nextResetAt &&
            now >= task.nextResetAt) {
            task.progress = 0;
            task.completed = false;
            task.claimed = false;
            task.nextResetAt = 0;
            changed = true;
        }
    });

    if (changed) {
        renderTasks();
    }
}

function updateTaskTimersDOM() {
    if (!elTasksList) return;
    const now = Date.now();
    const cards = elTasksList.querySelectorAll(".itc-task-card");

    cards.forEach(function(card) {
        const taskId = card.getAttribute("data-task-id");
        if (!taskId) return;
        const task = tasks.find(function(t) { return t.id === taskId; });
        if (!task) return;
        if (!(task.type === TASK_TYPE_DAILY || task.type === TASK_TYPE_WEEKLY)) return;

        const timerEl = card.querySelector(".itc-task-timer");
        if (!timerEl) return;

        if (task.completed && task.claimed && task.nextResetAt) {
            const remain = task.nextResetAt - now;
            timerEl.textContent = remain <= 0
                ? (itcCurrentLang === "en" ? "Task will refresh soon" : "Задача скоро обновится")
                : ((itcCurrentLang === "en" ? "Refresh in: " : "Обновление через: ") + formatTaskTimeRemaining(remain));
        } else {
            timerEl.textContent = "";
        }
    });
}

function initLoops() {
    setInterval(function() {
        autoTick();
        updateDailyUI();
        coolDownHeat();
        updateTaskCooldowns();
        updateTaskTimersDOM();
        updateAdBoostUI();
        maybeShowInterstitial();
    }, 1000);
}


// ---------- Старт ----------

(function start() {
    itcInitLanguage();
    clearModsUI();
    updateHUD();
    updateProgressUI();
    updateDailyUI();
    updatePrestigeUI();
    renderTasks();
    renderShop();
    renderLeaderboard();
    initTabs();
    initShopFilters();
    initButtons();
    initLoops();
})();
