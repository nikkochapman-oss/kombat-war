// Kombat-War — Core Game State & Logic Engine

// ── DECK DATA: Military Assets Deployed in Ukraine ──
const MILITARY_ASSETS = [
    {
        rank: 2,
        name: "Orlan-10",
        country: "RU",
        type: "Tactical Reconnaissance UAV",
        description: "Russia's primary battlefield spy drone — it circles at altitude above Ukrainian positions, filming troop movements and calling in artillery strikes. Composite-body reconnaissance drone operating as the primary target acquisition workhorse of tactical artillery batteries, deploying day/night thermal camera payload bays.",
        stats: { fp: 25, def: 20, spd: 45, rng: 75, tec: 70 },
        nato: "N/A",
        specs: { weight: "15 kg", speed: "150 km/h", ceiling: "5,000 m", launch: "Catapult" },
        citation: "IISS Military Balance 2024, VKS Reconnaissance Drone Systems, p. 198"
    },
    {
        rank: 2,
        name: "Supercam S350",
        country: "RU",
        type: "High-Resolution Mapping UAV",
        description: "A small Russian surveillance drone that silently photographs enemy positions and transmits the footage to artillery units below. Advanced tactical surveillance drone used for high-fidelity battlefield intelligence gathering, digital mapping, and real-time artillery fire adjustment.",
        stats: { fp: 20, def: 22, spd: 40, rng: 80, tec: 75 },
        nato: "N/A",
        specs: { weight: "11.5 kg", endurance: "4.5 hours", speed: "120 km/h", range: "240 km" },
        citation: "Jane's Intelligence Review — UAV Surveillance Platforms in Eastern Ukraine, Jan 2024"
    },
    {
        rank: 3,
        name: "BTR-82A",
        country: "RU",
        type: "Wheeled Armored Personnel Carrier",
        description: "Russia's standard armored troop carrier — a wheeled, lightly armored vehicle that transports infantry into battle behind a large-caliber gun, widely seen in Russian assault footage from Ukraine. Amphibious 8x8 wheeled personnel carrier upgraded with a stabilized 30mm 2A72 autocannon and thermal targeting sights for active front-line infantry support.",
        stats: { fp: 55, def: 45, spd: 80, rng: 50, tec: 60 },
        nato: "BTR-82A",
        specs: { weight: "15.4 tons", armaments: "30mm 2A72 Autocannon", speed: "80 km/h", crew: "3 + 7 Troops" },
        citation: "RUSI Tactical Land Combat Report — Armoured Fighting Vehicles, Oct 2023"
    },
    {
        rank: 3,
        name: "MT-LB",
        country: "BOTH",
        type: "Light Multi-Purpose Armored Towing Vehicle",
        description: "An old Soviet tracked vehicle used as a battlefield workhorse by both Russia and Ukraine — seen carrying troops, towing guns, and fitted with improvised weapons such as ZU-23 anti-aircraft guns and Grad rocket launchers. Classic tracked auxiliary armored tractor, widely deployed in various utility, logistics, and improvised weapons-carrying roles across active frontlines.",
        stats: { fp: 35, def: 40, spd: 61, rng: 45, tec: 40 },
        nato: "MT-LB",
        specs: { weight: "11.9 tons", armaments: "7.62mm PKT Machine Gun", speed: "61 km/h", crew: "2 + 11 Troops" },
        citation: "IISS Military Balance 2024, Russian Auxiliary Formations, p. 201"
    },
    {
        rank: 4,
        name: "Lancet-3",
        country: "RU",
        type: "Loitering Munition Dagger",
        description: "A Russian loitering drone that circles over the battlefield and then nose-dives into its target at high speed, destroying Ukrainian artillery pieces and vehicles that are costly and difficult to replace. Advanced precision loitering weapon featuring cross-wing stabilizers and optical-electronic tracking to execute high-speed diving strikes against counter-battery artillery.",
        stats: { fp: 75, def: 15, spd: 80, rng: 60, tec: 85 },
        nato: "N/A",
        specs: { weight: "12 kg", warhead: "3 kg HE-FRAG/HEAT", speed: "80–300 km/h", endurance: "40 mins" },
        citation: "CSIS Missile Defense Project — Loitering Munitions and Autonomous Drones, 2024"
    },
    {
        rank: 4,
        name: "Geran-2",
        country: "RU",
        type: "Kamikaze Loitering Munition",
        description: "Russia bought thousands of these cheap Iranian-made drones and used them to attack Ukrainian power plants and cities at night. Ukraine has shot down hundreds, but they are difficult to stop when launched in large swarms. Long-range straight-wing cruise drone (Russian designation for the Iranian Shahed-136) utilizing satellite and inertial guidance to conduct deep standoff strikes on critical infrastructure.",
        stats: { fp: 80, def: 18, spd: 55, rng: 90, tec: 72 },
        nato: "Shahed-136",
        specs: { weight: "200 kg", warhead: "40 kg HE-Blast", speed: "185 km/h", range: "2,000 km" },
        citation: "CSIS Missile Threat — Long-Range Strike Platforms in the Ukraine Theater, 2024"
    },
    {
        rank: 5,
        name: "FPV Fiber-Optic Drone",
        country: "BOTH",
        type: "Tactically Modified Strike Drone",
        description: "A first-person-view attack drone guided by a physical fiber-optic cable instead of radio signals, making it completely immune to electronic jamming — one of the most innovative adaptations of the Ukraine war. Innovative wire-guided quadcopter employing physical fiber-optic cabling, rendering it completely immune to active electronic warfare (EW) jamming systems.",
        stats: { fp: 78, def: 10, spd: 92, rng: 30, tec: 90 },
        nato: "N/A",
        specs: { weight: "1.8 kg", armaments: "PG-7VL Shaped HEAT Charge", speed: "120 km/h", guidance: "Fiber-Optic Wire" },
        citation: "Jane's Defence Weekly — Tactical Field Modifications in the Ukraine Theater, Nov 2024"
    },
    {
        rank: 5,
        name: "FPV Ghoul (Upyr)",
        country: "RU",
        type: "Wireless Strike Quadcopter",
        description: "A cheap Russian first-person-view attack drone carrying a rocket-grenade explosive, flown by a pilot wearing goggles — deployed by the thousands to destroy Ukrainian infantry and light vehicles at close range. Prominent tactical strike quadcopter carrying high-explosive RPG warheads, deploying dynamic frequency-hopping channels to bypass local electronic defense grids.",
        stats: { fp: 74, def: 8, spd: 85, rng: 25, tec: 78 },
        nato: "N/A",
        specs: { weight: "1.5 kg", warhead: "PG-7VS Rocket Grenade", speed: "100 km/h", range: "12 km" },
        citation: "RUSI Drone Warfare Analysis — FPV Quadcopter Operations, Feb 2024"
    },
    {
        rank: 6,
        name: "BMP-3",
        country: "RU",
        type: "Tracked Infantry Fighting Vehicle",
        description: "Russia's most heavily armed infantry carrier — a tracked vehicle that can destroy other armored vehicles using its twin-gun turret, regularly seen in Russian assault footage from the front lines. Highly armed amphibious tracked combat vehicle featuring a dual gun turret integrating a 100mm 2A70 gun-launcher and a coaxial 30mm 2A72 autocannon.",
        stats: { fp: 72, def: 55, spd: 70, rng: 60, tec: 72 },
        nato: "BMP-3",
        specs: { weight: "18.7 tons", armaments: "100mm & 30mm Guns", speed: "70 km/h", crew: "3 + 7 Troops" },
        citation: "IISS Military Balance 2024, Russian Land Forces Command, p. 196"
    },
    {
        rank: 6,
        name: "BMP-2M 'Berezhok'",
        country: "BOTH",
        type: "Modernized Infantry Fighting Vehicle",
        description: "An upgraded Soviet infantry vehicle fitted with the Berezhok turret module — originally designed in Kyiv, Ukraine — now operated by Russian forces, mounting four laser-guided anti-tank missiles alongside an automatic cannon. Heavily upgraded tracked infantry fighting vehicle fitted with the Berezhok combat module (originally developed by Kyiv's KBTM design bureau), integrating 4 ready-to-fire Kornet-EM ATGMs and an automatic grenade launcher.",
        stats: { fp: 75, def: 50, spd: 65, rng: 65, tec: 78 },
        nato: "BMP-2M",
        specs: { weight: "14.3 tons", armaments: "30mm Autocannon & Kornet ATGMs", speed: "65 km/h", crew: "3 + 7 Troops" },
        citation: "Jane's Land Warfare — Tracked Armoured Fighting Vehicles, 2024"
    },
    {
        rank: 7,
        name: "T-72B3M",
        country: "RU",
        type: "Modernized Main Battle Tank",
        description: "Russia's most common main battle tank in Ukraine — a heavily upgraded 1960s Soviet design fitted with digital sights, explosive reactive armor panels that deflect anti-tank missiles, and a more powerful engine. The primary battle tank of Russian armored formations, upgraded with advanced Sosna-U thermal sights, Relikt reactive armor, and a 1130hp diesel engine.",
        stats: { fp: 82, def: 80, spd: 60, rng: 55, tec: 75 },
        nato: "T-72B3M",
        specs: { weight: "46 tons", armaments: "125mm 2A46M-5 Gun", armor: "Relikt ERA & Cage Slat", crew: "3 (Autoloaded)" },
        citation: "RUSI Russian Land Warfare Assessment — Main Battle Tank Performance, 2023"
    },
    {
        rank: 7,
        name: "T-80BVM",
        country: "RU",
        type: "Gas-Turbine Main Battle Tank",
        description: "A modernized Russian battle tank powered by a gas-turbine engine — similar to a jet engine — instead of diesel, allowing reliable cold-weather starts and higher speed bursts suited to Ukrainian winters. Gas-turbine main battle tank optimized for sub-zero ignition, featuring high tactical mobility, Relikt reactive shields, and advanced digital fire-control arrays.",
        stats: { fp: 84, def: 82, spd: 68, rng: 56, tec: 77 },
        nato: "T-80BVM",
        specs: { weight: "46 tons", engine: "GTD-1250 Gas Turbine (1250 hp)", speed: "70 km/h", armaments: "125mm Smoothbore Gun" },
        citation: "IISS Military Balance 2024, Armoured Formations, p. 197"
    },
    {
        rank: 8,
        name: "Ka-52 'Alligator'",
        country: "RU",
        type: "Attack Helicopter",
        description: "Russia's most versatile attack helicopter, with two counter-rotating rotors instead of a tail rotor, giving it exceptional agility — widely used to fire long-range missiles at Ukrainian armor and fortifications from beyond air defense range. Unique heavy combat support helicopter featuring coaxial contra-rotating rotors, heavily armored cockpit capsule, and firing high-speed laser-guided Vikhr ATGMs.",
        stats: { fp: 88, def: 72, spd: 80, rng: 70, tec: 88 },
        nato: "Hokum-B",
        specs: { weight: "10.8 tons", armaments: "Vikhr ATGMs & 30mm Gun", speed: "300 km/h", ceiling: "5,500 m" },
        citation: "Jane's All the World's Aircraft — Tactical Rotary Wing Aviation, 2024"
    },
    {
        rank: 8,
        name: "Mi-28N 'Night Hunter'",
        country: "RU",
        type: "Attack Helicopter",
        description: "A Russian all-weather attack helicopter built to operate in complete darkness using night-vision systems, firing missiles at Ukrainian armor and strongpoints under cover of night. All-weather heavy tandem combat helicopter armed with high-velocity Ataka-V precision missiles and a chin-mounted 30mm 2A42 automatic cannon for close air support operations.",
        stats: { fp: 86, def: 75, spd: 80, rng: 68, tec: 86 },
        nato: "Havoc-B",
        specs: { weight: "10.9 tons", armaments: "Ataka-V ATGMs & 30mm 2A42 Gun", speed: "300 km/h", range: "450 km" },
        citation: "IISS Military Balance 2024, Tactical Air Force Combat Aviation, p. 200"
    },
    {
        rank: 9,
        name: "T-90M 'Proryv'",
        country: "RU",
        type: "Advanced Main Battle Tank",
        description: "Russia's most advanced active battle tank — featuring explosive reactive armor, a thermal-stealth coating called Nakidka that hides it from infrared cameras, and a digital fire control system. Deeply modernized armored platform outfitted with modular Relikt explosive reactive armor, the Kalina automated combat fire control matrix, and Nakidka thermal stealth coating.",
        stats: { fp: 88, def: 90, spd: 60, rng: 58, tec: 85 },
        nato: "Vladimir-M",
        specs: { weight: "48 tons", armaments: "125mm 2A46M-5 Gun", armor: "Relikt ERA & Slat Shields", crew: "3 (Autoloaded)" },
        citation: "IISS Military Balance 2024, Ground Armoured Systems, p. 195"
    },
    {
        rank: 9,
        name: "TOS-1A 'Solntsepek'",
        country: "RU",
        type: "Heavy Thermobaric Rocket Launcher",
        description: "A Russian tank-chassis rocket launcher that fires thermobaric (vacuum bomb) rockets creating massive pressure-blast waves over wide areas. Their use in populated areas in Ukraine has been documented by Human Rights Watch. Highly destructive short-range rocket system firing 220mm thermobaric unguided rockets generating intense high-temperature blast waves over wide tactical areas.",
        stats: { fp: 92, def: 75, spd: 60, rng: 40, tec: 78 },
        nato: "TOS-1A",
        specs: { weight: "45.3 tons", caliber: "220mm (24 launch tubes)", range: "6,000 m", chassis: "T-72 Tank Tracked" },
        citation: "RUSI Land Combat — Russian Thermobaric Artillery Assessment, Dec 2023"
    },
    {
        rank: 10,
        name: "S-350 'Vityaz'",
        country: "RU",
        type: "Medium-Range SAM System",
        description: "A modern Russian air defense system that tracks and fires at dozens of incoming drones and missiles simultaneously using an active radar — protecting Russian formations from Ukrainian long-range strikes. Modern point defense battery utilizing highly agile interceptor missiles and active AESA radar guidance to counter low-altitude saturated drone and cruise missile attacks.",
        stats: { fp: 85, def: 85, spd: 50, rng: 88, tec: 92 },
        nato: "Not formally designated (SA-28 unofficial)",
        specs: { missiles: "9M96E2 active radar", speed: "Mach 5.1", range: "120 km", tracking: "AESA Radar" },
        citation: "RUSI Tactical Anti-Access/Area-Denial (A2/AD) Network Review, 2024"
    },
    {
        rank: 10,
        name: "Pantsir-S1",
        country: "RU",
        type: "Short-Range SAM & AAA System",
        description: "A Russian air defense vehicle combining radar-guided missiles and twin autocannons on a single truck — designed to shoot down drones and low-flying missiles, though dozens have been destroyed by Ukrainian drone strikes. Self-propelled truck-mounted air defense system integrating twin 30mm automatic autocannons and 12 command-guided radar-intercept missiles for drone and missile shielding.",
        stats: { fp: 82, def: 88, spd: 60, rng: 70, tec: 90 },
        nato: "SA-22 Greyhound",
        specs: { weight: "30 tons", armaments: "Twin 30mm Guns & 12 SAMs", range: "20 km (Missile), 4 km (Gun)", tracking: "Dual-band Target Radar" },
        citation: "Jane's Land-Based Air Defence Systems — Point Protection units, 2023-2024"
    },
    {
        rank: 11,
        name: "Project 636.3 Kilo",
        country: "RU",
        type: "Diesel-Electric Attack Submarine",
        description: "A Russian diesel-electric submarine so quiet that NATO nicknamed it 'the Black Hole' — Russia's Black Sea Fleet used these boats to launch cruise missile salvos against Ukrainian cities from submerged positions. Extremely silent diesel-electric attack submarine of the Black Sea Fleet, deployed to launch Kalibr cruise missiles against deep land-based infrastructure targets.",
        stats: { fp: 90, def: 84, spd: 35, rng: 88, tec: 88 },
        nato: "Improved Kilo",
        specs: { displacement: "3,950 tons submerged", armaments: "Kalibr Cruise Missiles & Torpedoes", speed: "17 knots submerged", endurance: "45 days" },
        citation: "IISS Military Balance 2024, Russian Navy Black Sea Fleet, p. 199"
    },
    {
        rank: 11,
        name: "Yas-M (Kazan)",
        country: "RU",
        type: "Nuclear Cruise Missile Submarine",
        description: "Russia's most advanced nuclear-powered submarine, capable of firing cruise missiles against targets over 1,500 km away while remaining submerged and nearly undetectable — a strategic-level threat to the European theater. Highly silent 4th-generation nuclear-powered cruise missile submarine optimized for deep-sea standalone stealth patrol and firing long-range Kalibr cruise missiles.",
        stats: { fp: 94, def: 88, spd: 72, rng: 90, tec: 92 },
        nato: "Yasen / Graney",
        specs: { displacement: "13,800 tons", armaments: "Kalibr Cruise Missiles (Zircon integration planned)", speed: "28 knots", crew: "64 submariners" },
        citation: "Royal United Services Institute (RUSI) Submarine Threat Assessment, 2024"
    },
    {
        rank: 12,
        name: "Iskander-M",
        country: "RU",
        type: "Theater Ballistic Missile Launcher",
        description: "Russia's most feared surface-to-surface missile system — a mobile launcher that fires two precision ballistic missiles at near-hypersonic speed, used hundreds of times against Ukrainian cities, power plants, and command posts. High-mobility road ballistic system deploying two 9M723 maneuvering missiles to execute precision standoff strikes against critical infrastructure.",
        stats: { fp: 95, def: 40, spd: 90, rng: 92, tec: 90 },
        nato: "SS-26 Stone",
        specs: { weight: "3.8 tons", payload: "480 kg Warhead", speed: "Mach 5.9", range: "500 km" },
        citation: "CSIS Missile Defense Project — Tactical Ballistic Missile Threat Profiles, 2024"
    },
    {
        rank: 12,
        name: "Su-34 'Fullback'",
        country: "RU",
        type: "All-Weather Strike Fighter",
        description: "Russia's main strike jet in Ukraine — a side-by-side two-seat fighter-bomber that drops satellite-guided glide bombs from beyond Ukrainian air defense range, causing massive destruction to front-line fortifications. Heavy twin-engine tactical fighter-bomber featuring a side-by-side cockpit layout, extensively deployed to launch UMPK satellite-guided precision glide bombs.",
        stats: { fp: 92, def: 68, spd: 88, rng: 80, tec: 86 },
        nato: "Fullback",
        specs: { weight: "45.1 tons max", speed: "1,900 km/h (Mach 1.8)", payload: "8,000 kg including glide bombs", ceiling: "17,000 m" },
        citation: "Jane's All the World's Aircraft — Tactical Strike Aviation Assets, 2024"
    },
    {
        rank: 13,
        name: "S-400 'Triumf'",
        country: "RU",
        type: "Layered Long-Range SAM battery",
        description: "Russia's most powerful air defense system, capable of shooting down aircraft and missiles up to 400 km away — its presence in occupied Ukraine severely restricts Ukrainian Air Force operations across contested airspace. Layered mobile surface-to-air missile system utilizing advanced long-range surveillance radar arrays to engage aircraft and theater-range missiles.",
        stats: { fp: 92, def: 94, spd: 45, rng: 96, tec: 95 },
        nato: "SA-21 Growler",
        specs: { missiles: "40N6E extreme-range", range: "400 km", radar: "48Ya6 Podlet-K1", ceiling: "30,000 m" },
        citation: "RUSI Tactical Air Defence and EW Systems Analysis, 2023"
    },
    {
        rank: 13,
        name: "Tornado-S",
        country: "RU",
        type: "Upgraded Precision MLRS Launcher",
        description: "Russia's most accurate rocket artillery system, firing satellite-guided 300mm rockets that can precisely strike individual buildings from 120 km away — far beyond the range of most Ukrainian counter-battery defenses. Modernized heavy 300mm multiple rocket launcher deploying GLONASS satellite-guided projectiles to execute deep counter-battery precision fire missions.",
        stats: { fp: 94, def: 42, spd: 65, rng: 88, tec: 85 },
        nato: "Tornado-S",
        specs: { weight: "43.7 tons", rocket: "300mm guided projectiles", range: "120 km", chassis: "MAZ-79111 8x8 Truck" },
        citation: "IISS Military Balance 2024, Ground Rocket Artillery, p. 194"
    },
    {
        rank: 14,
        name: "Zircon (Tsirkon)",
        country: "RU",
        type: "Hypersonic Cruise Missile",
        description: "Russia claims this scramjet-powered cruise missile reaches Mach 9 — nine times the speed of sound; Western analysts assess Mach 4–6 terminal speed. Russia has fired Zircons against Ukrainian infrastructure from Black Sea warships since late 2024. Scramjet-powered maneuvering cruise missile designed to neutralize naval and land targets at extreme speed.",
        stats: { fp: 100, def: 42, spd: 100, rng: 95, tec: 98 },
        nato: "SS-N-33 Zircon",
        specs: { speed: "Mach 9 claimed (Western est. Mach 4–6)", payload: "350 kg Warhead", range: "1,000 km", propulsion: "Scramjet" },
        citation: "CSIS Missile Threat — Emerging Hypersonic Capabilities, 2024"
    },
    {
        rank: 14,
        name: "Kinzhal (Kh-47M2)",
        country: "RU",
        type: "Aero-ballistic Hypersonic Missile",
        description: "An air-launched missile dropped from a modified MiG-31K fighter. Russia claims it flies at Mach 10; Western analysts (RUSI, RAND) assess Mach 4–5 in its terminal phase. Ukraine successfully intercepted Kinzhal missiles using US-supplied Patriot air defense systems in May 2023. Air-launched ballistic missile executing maneuvering evasive dives at high terminal velocity.",
        stats: { fp: 98, def: 42, spd: 100, rng: 98, tec: 96 },
        nato: "AS-24 Killjoy",
        specs: { speed: "Mach 10 claimed (Western est. Mach 4–5)", launch: "MiG-31K Jet Interceptor", range: "2,000 km", warhead: "500 kg HE-Fragmentation" },
        citation: "CSIS Missile Threat — Kinzhal Ballistic Interceptor Missile Profile, 2024"
    }
];

// Stat display mappings
const STAT_MAPPINGS = {
    fp: "FIREPOWER",
    def: "DEFENSE",
    spd: "SPEED",
    rng: "RANGE",
    tec: "TECH LEVEL"
};

// ── AUDIO ENGINE (Web Audio API) ──
const AudioController = {
    ctx: null,

    async init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            await this.ctx.resume();
        }
    },

    async playTone(freq, type, duration, vol) {
        try {
            await this.init();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = type || 'sine';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            
            gain.gain.setValueAtTime(vol || 0.1, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.start();
            osc.stop(this.ctx.currentTime + duration);
        } catch (e) {
            // Audio blocked/unsupported
        }
    },

    beep() { this.playTone(880, 'sine', 0.1, 0.05); },
    draw() { this.playTone(440, 'triangle', 0.15, 0.08); },
    win() {
        this.playTone(587.33, 'sine', 0.1, 0.05);
        setTimeout(() => this.playTone(880, 'sine', 0.25, 0.05), 100);
    },
    lose() {
        this.playTone(349.23, 'sawtooth', 0.15, 0.04);
        setTimeout(() => this.playTone(220, 'sawtooth', 0.3, 0.04), 120);
    },
    war() {
        this.playTone(180, 'square', 0.4, 0.1);
        setTimeout(() => this.playTone(180, 'square', 0.4, 0.1), 150);
    }
};

// ── GAME STATE VARIABLES ──
let gameMode = 'classic'; // 'classic' or 'selector'
let userDeck = [];
let aiDeck = [];
let clashPool = [];
let roundsPlayed = 0;
let warsTriggered = 0;
let activeUserCard = null;
let activeAiCard = null;
let currentWinner = null;
let isWarRound = false;
let isDrawPhase = true; // true when waiting for draw, false when resolving
let whoseTurn = 'user'; // 'user' or 'ai' to select stats in selector mode
let selectedStat = null;
let isProcessing = false; // Lock flag to prevent double-click draw race conditions
let roundTimeoutId = null; // Stored timeout ID to prevent state leak on restart

// ── DOM ELEMENTS ──
const elGameModeSelect = document.getElementById('game-mode-select');
const elBtnNewGame = document.getElementById('btn-new-game');
const elBtnDraw = document.getElementById('btn-draw');
const elBtnResolveWar = document.getElementById('btn-resolve-war');
const elUserDeckCount = document.getElementById('user-deck-count');
const elAiDeckCount = document.getElementById('ai-deck-count');
const elUserClashSlot = document.getElementById('user-clash-slot');
const elAiClashSlot = document.getElementById('ai-clash-slot');
const elBattleAnnouncement = document.getElementById('battle-announcement');
const elSelectedStatBanner = document.getElementById('selected-stat-banner');
const elActiveStatName = document.getElementById('active-stat-name');
const elCombatLog = document.getElementById('combat-log');
const elGameOverModal = document.getElementById('game-over-modal');
const elModalTitle = document.getElementById('modal-title');
const elModalDesc = document.getElementById('modal-desc');
const elModalRounds = document.getElementById('modal-rounds');
const elModalWars = document.getElementById('modal-wars');
const elBtnRestart = document.getElementById('btn-restart');
const elUserPanel = document.getElementById('user-panel');
const elAiPanel = document.getElementById('ai-panel');
const elUserDrawPile = document.getElementById('user-draw-pile'); // Selecing draw pile deck for clicking

// ── CORE GAME CONTROLLER ──
function init() {
    // Event listeners - Wrapped audio triggers in try-catch to ensure total resilience if browser policy blocks AudioContext
    elBtnNewGame.addEventListener('click', () => { 
        try { AudioController.beep(); } catch(e) {} 
        startNewGame(); 
    });
    elBtnDraw.addEventListener('click', () => { handleDraw(); });
    
    // Clicking directly on the user deck reserve pile now triggers asset deployment cleanly!
    if (elUserDrawPile) {
        elUserDrawPile.addEventListener('click', () => { handleDraw(); });
    }
    
    elBtnResolveWar.addEventListener('click', () => { handleResolveWar(); });
    elBtnRestart.addEventListener('click', () => { elGameOverModal.classList.add('hidden'); startNewGame(); });
    
    elGameModeSelect.addEventListener('change', (e) => {
        try { AudioController.beep(); } catch(e) {}
        gameMode = e.target.value;
        logMessage(`Engagement protocol switched to ${gameMode.toUpperCase()} mode.`, 'system');
        startNewGame();
    });

    // Suspend AudioContext on tab hide to preserve system resources
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            try { AudioController.ctx?.suspend(); } catch(e) {}
        } else {
            try { AudioController.ctx?.resume(); } catch(e) {}
        }
    });

    // Initialize Glossary navigation tabs
    initGlossaryTabs();

    // Start initial game
    startNewGame();
}

function startNewGame() {
    roundsPlayed = 0;
    warsTriggered = 0;
    clashPool = [];
    activeUserCard = null;
    activeAiCard = null;
    selectedStat = null;
    isWarRound = false;
    isDrawPhase = true;
    isProcessing = false;
    whoseTurn = Math.random() > 0.5 ? 'user' : 'ai';
    
    // Clear any stale round resolution timers to prevent old triggers executing in the new game
    if (roundTimeoutId) {
        clearTimeout(roundTimeoutId);
        roundTimeoutId = null;
    }
    
    // Create dual copy deck (52 cards)
    const baseDeck = [...MILITARY_ASSETS, ...MILITARY_ASSETS];
    shuffle(baseDeck);
    
    // Split deck evenly
    userDeck = baseDeck.slice(0, 26);
    aiDeck = baseDeck.slice(26, 52);
    
    // Reset Clash Slot placeholders
    elUserClashSlot.innerHTML = `<div class="slot-placeholder">DEPLOYING CARD</div>`;
    elAiClashSlot.innerHTML = `<div class="slot-placeholder">DEPLOYING CARD</div>`;
    
    elBattleAnnouncement.innerText = "READY TO DEPLOY";
    elSelectedStatBanner.classList.add('hidden');
    
    elBtnDraw.innerText = "DEPLOY ASSETS";
    elBtnDraw.classList.remove('hidden');
    elBtnResolveWar.classList.add('hidden');
    
    // Clear logs
    elCombatLog.innerHTML = `<div class="log-entry system">> Kombat-War Tactical Engine loaded. Shuffling and preparing deck.</div>`;
    logMessage(`Decks initialized. 26 combat units deployed to each commander.`, 'system');
    logMessage(`${whoseTurn === 'user' ? 'PLAYER_COM_01' : 'COM_TARGET_RED'} has tactical initiative.`, 'system');
    
    updateHUD();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateHUD() {
    elUserDeckCount.innerText = userDeck.length;
    elAiDeckCount.innerText = aiDeck.length;

    // Highlight active turn panels in Selector Mode
    if (gameMode === 'selector' && !isDrawPhase) {
        if (whoseTurn === 'user') {
            elUserPanel.classList.add('selector-active');
            elAiPanel.classList.remove('selector-active');
        } else {
            elAiPanel.classList.add('selector-active');
            elUserPanel.classList.remove('selector-active');
        }
    } else {
        elUserPanel.classList.remove('selector-active');
        elAiPanel.classList.remove('selector-active');
    }
}

function logMessage(text, sender) {
    const entry = document.createElement('div');
    entry.className = `log-entry ${sender || ''}`;
    
    // Use robust en-GB locale to guarantee HH:MM:SS format across different local system settings
    const date = new Date();
    const ts = date.toLocaleTimeString('en-GB');
    
    entry.innerHTML = `<span class="log-timestamp">[${ts}]</span> > ${text}`;
    elCombatLog.appendChild(entry);
    
    // Scroll to bottom
    elCombatLog.scrollTop = elCombatLog.scrollHeight;
}

// ── BATTLE ACTIONS ──
function handleDraw() {
    if (isProcessing || !isDrawPhase) return; // Guard lock and phase validation to prevent out-of-order deck drawings
    isProcessing = true;

    try { AudioController.draw(); } catch(e) {}

    if (userDeck.length === 0 || aiDeck.length === 0) {
        checkGameOver();
        isProcessing = false;
        return;
    }

    roundsPlayed++;
    
    // Draw top cards
    activeUserCard = userDeck.shift();
    activeAiCard = aiDeck.shift();
    
    // Add to pool
    clashPool.push(activeUserCard, activeAiCard);
    
    // Lock draw phase before rendering — must happen before resolveRound() so that
    // prepareNextRound()'s isDrawPhase = true isn't overridden by lines after the if/else.
    isDrawPhase = false;
    elBtnDraw.classList.add('hidden');

    // Render user card (interactive if it's user's turn in selector mode)
    const isUserTurnToSelect = (gameMode === 'selector' && whoseTurn === 'user' && !isWarRound);
    renderCard(activeUserCard, elUserClashSlot, false, isUserTurnToSelect, handleStatSelect);

    // Render AI card (face down initially if it's user's turn to select, or standard)
    if (isUserTurnToSelect) {
        // Show face down to hide AI stats while user is picking a stat
        renderCard(activeAiCard, elAiClashSlot, true, false);
        elBattleAnnouncement.innerText = "SELECT BATTLE ATTRIBUTE";
        logMessage(`You drew ${activeUserCard.name}. Waiting for your stat selection...`, 'user');
    } else if (gameMode === 'selector' && whoseTurn === 'ai' && !isWarRound) {
        // AI chooses the stat
        renderCard(activeAiCard, elAiClashSlot, false, false);
        aiSelectStat();
    } else {
        // Classic mode or War round - just draw both face up
        renderCard(activeAiCard, elAiClashSlot, false, false);
        resolveRound();
    }

    updateHUD();
}

function aiSelectStat() {
    // AI picks its highest stat
    let bestStat = 'fp';
    let maxVal = activeAiCard.stats.fp;
    
    for (const stat in activeAiCard.stats) {
        if (activeAiCard.stats[stat] > maxVal) {
            maxVal = activeAiCard.stats[stat];
            bestStat = stat;
        }
    }
    
    selectedStat = bestStat;
    
    elSelectedStatBanner.classList.remove('hidden');
    elActiveStatName.innerText = STAT_MAPPINGS[selectedStat];
    
    logMessage(`COM_TARGET_RED drew ${activeAiCard.name} and selected ${STAT_MAPPINGS[selectedStat].toUpperCase()} (${maxVal}).`, 'ai');
    
    // Highlight the stat on the AI card
    setTimeout(() => {
        const row = elAiClashSlot.querySelector(`[data-stat="${selectedStat}"]`);
        if (row) row.classList.add('selected-battle-stat');
        
        // Show user card
        logMessage(`You deployed ${activeUserCard.name}. Comparing attributes...`, 'user');
        resolveRound();
    }, 1000);
}

function handleStatSelect(stat) {
    if (gameMode !== 'selector' || whoseTurn !== 'user' || isDrawPhase || !activeUserCard) return;
    
    selectedStat = stat;
    
    AudioController.beep();
    
    elSelectedStatBanner.classList.remove('hidden');
    elActiveStatName.innerText = STAT_MAPPINGS[selectedStat];
    
    logMessage(`You selected ${STAT_MAPPINGS[selectedStat].toUpperCase()} (${activeUserCard.stats[selectedStat]}).`, 'user');
    
    // Highlight the stat on user card
    const row = elUserClashSlot.querySelector(`[data-stat="${selectedStat}"]`);
    if (row) row.classList.add('selected-battle-stat');
    
    // Flip AI card face up and compare
    setTimeout(() => {
        renderCard(activeAiCard, elAiClashSlot, false, false);
        const aiRow = elAiClashSlot.querySelector(`[data-stat="${selectedStat}"]`);
        if (aiRow) aiRow.classList.add('selected-battle-stat');
        resolveRound();
    }, 800);
}

// ── ROUND RESOLUTION ──
function resolveRound() {
    let winReason = "";
    let userVal = 0;
    let aiVal = 0;
    let winner = null;
    
    if (gameMode === 'classic' || isWarRound) {
        userVal = activeUserCard.rank;
        aiVal = activeAiCard.rank;
        winReason = `Rank ${userVal} vs Rank ${aiVal}`;
    } else {
        userVal = activeUserCard.stats[selectedStat];
        aiVal = activeAiCard.stats[selectedStat];
        winReason = `${STAT_MAPPINGS[selectedStat]}: ${userVal} vs ${aiVal}`;
    }
    
    const userCardEl = elUserClashSlot.querySelector('.tactical-card');
    const aiCardEl = elAiClashSlot.querySelector('.tactical-card');
    
    if (userVal > aiVal) {
        winner = 'user';
        currentWinner = 'user';
        elBattleAnnouncement.innerText = "Tactical Victory";
        AudioController.win();
        
        if (userCardEl) userCardEl.classList.add('winning-card');
        if (aiCardEl) aiCardEl.classList.add('losing-card');
        
        logMessage(`Victory: ${activeUserCard.name} neutralized ${activeAiCard.name} (${winReason}).`, 'user');
        
        // Add pool to bottom of user's deck
        userDeck.push(...clashPool);
        clashPool = [];
        
        // Winner gets tactical choice next round
        whoseTurn = 'user';
        isWarRound = false;
        
        prepareNextRound();
    } else if (aiVal > userVal) {
        winner = 'ai';
        currentWinner = 'ai';
        elBattleAnnouncement.innerText = "Neutralized By Red Force";
        AudioController.lose();
        
        if (aiCardEl) aiCardEl.classList.add('winning-card');
        if (userCardEl) userCardEl.classList.add('losing-card');
        
        logMessage(`Defeat: ${activeAiCard.name} neutralized ${activeUserCard.name} (${winReason}).`, 'ai');
        
        // Add pool to bottom of AI's deck
        aiDeck.push(...clashPool);
        clashPool = [];
        
        // Winner gets tactical choice next round
        whoseTurn = 'ai';
        isWarRound = false;
        
        prepareNextRound();
    } else {
        // TIE - TRIGGER WAR!
        warsTriggered++;
        isWarRound = true;
        AudioController.war();
        
        elBattleAnnouncement.innerText = "⚡ COLLATERAL CLASH: WAR! ⚡";
        logMessage(`Colateral Clash! ${activeUserCard.name} and ${activeAiCard.name} tied (${winReason}). Engaging tactical escalation!`, 'tie');
        
        // Check if players have enough cards for War (need at least 4: 3 facedown + 1 battle card)
        if (userDeck.length < 4 || aiDeck.length < 4) {
            // Sudden death or automatic loss based on deck size
            logMessage(`Insufficient reserve assets to sustain a War campaign.`, 'system');
            if (userDeck.length < aiDeck.length) {
                userDeck = [];
            } else {
                aiDeck = [];
            }
            checkGameOver();
            return;
        }
        
        elBtnResolveWar.classList.remove('hidden');
        elBtnDraw.classList.add('hidden');
    }
    
    updateHUD();
}

function prepareNextRound() {
    isDrawPhase = true;
    selectedStat = null;
    isProcessing = false; // Reset lock before allowing next draw
    
    roundTimeoutId = setTimeout(() => {
        if (checkGameOver()) return;

        elSelectedStatBanner.classList.add('hidden');
        elBtnDraw.innerText = "DEPLOY ASSETS";
        elBtnDraw.classList.remove('hidden');
        elBattleAnnouncement.innerText = "READY FOR NEXT DEPLOYMENT";

        elUserClashSlot.innerHTML = `<div class="slot-placeholder">DEPLOYING CARD</div>`;
        elAiClashSlot.innerHTML = `<div class="slot-placeholder">DEPLOYING CARD</div>`;
        updateHUD();
    }, 4500);
}

// ── WAR MODE RESOLUTION ──
function handleResolveWar() {
    // Critical Guard Check: Validate if players have enough assets before doing shifts
    const needed = 4; // 3 facedown + 1 battle card
    if (userDeck.length < needed || aiDeck.length < needed) {
        logMessage(`Insufficient reserve assets to sustain a War campaign.`, 'system');
        if (userDeck.length < aiDeck.length) {
            userDeck = [];
        } else {
            aiDeck = [];
        }
        checkGameOver();
        return;
    }

    try { AudioController.draw(); } catch(e) {}
    elBtnResolveWar.classList.add('hidden');
    
    logMessage(`Deploying 3 reserves face-down into the clash zone...`, 'system');
    
    // Draw 3 cards face down from both and put in clashPool
    for (let i = 0; i < 3; i++) {
        clashPool.push(userDeck.shift());
        clashPool.push(aiDeck.shift());
    }
    
    // Draw 1 card face up from both for battle
    activeUserCard = userDeck.shift();
    activeAiCard = aiDeck.shift();
    clashPool.push(activeUserCard, activeAiCard);
    
    // Show cards in arena
    renderCard(activeUserCard, elUserClashSlot, false, false);
    renderCard(activeAiCard, elAiClashSlot, false, false);
    
    logMessage(`War Battle Card deployed: You flipped ${activeUserCard.name} (Rank ${activeUserCard.rank}).`, 'user');
    logMessage(`War Battle Card deployed: COM_TARGET_RED flipped ${activeAiCard.name} (Rank ${activeAiCard.rank}).`, 'ai');
    
    // War rounds are ALWAYS resolved using classic Rank rules to keep it simple and decisive
    setTimeout(() => {
        resolveRound();
    }, 1200);
}

// Generic fallback — returns embedded base64 constant so onerror never hits a dead path
const TYPE_FALLBACK_VARS = {
    "uav": "IMAGE_DRONE", "drone": "IMAGE_DRONE", "loitering": "IMAGE_DRONE",
    "tank": "IMAGE_TANK", "ifv": "IMAGE_TANK", "apc": "IMAGE_TANK", "towing": "IMAGE_TANK",
    "helicopter": "IMAGE_FIGHTER", "fighter": "IMAGE_FIGHTER",
    "sam": "IMAGE_SAM",
    "submarine": "IMAGE_NAVY",
    "missile": "IMAGE_MISSILE", "mlrs": "IMAGE_MISSILE",
    "ballistic": "IMAGE_MISSILE", "hypersonic": "IMAGE_MISSILE",
};

function getGenericFallback(card) {
    const typeLower = card.type.toLowerCase();
    for (const key in TYPE_FALLBACK_VARS) {
        if (typeLower.includes(key)) return window[TYPE_FALLBACK_VARS[key]] || '';
    }
    return window.IMAGE_DRONE || '';
}

// Cards whose asset filename extension differs from the default .jpg
const FILE_EXT_MAP = {
    'FPV_Fiber-Optic_Drone': 'assets/FPV_Fiber-Optic_Drone.webp',
    'S-400_Triumf':          'assets/S-400_Triumf.JPG',
};

// Determine correct image asset filename from name (matching our 26 unique realistic photos)
function getCardImage(card) {
    const base = card.name.replace(/ /g, '_').replace(/'/g, '');

    // Check embedded base64 constants (only present in offline file:// mode)
    const base64VarName = `IMAGE_${base.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase()}`;
    if (window[base64VarName]) return window[base64VarName];

    // Use direct file path — images load lazily over HTTP (fast on mobile)
    return FILE_EXT_MAP[base] || `assets/${base}.jpg`;
}

// ── CARD RENDERER (DYNAMICAL HTML) ──
function renderCard(card, container, isFaceDown, isInteractive, onStatClick) {
    container.innerHTML = '';
    
    if (isFaceDown) {
        container.innerHTML = `
            <div class="pile-card active-ai-deck" style="position:relative; width:100%; height:100%;">
                <span class="draw-label" style="color:hsl(var(--color-accent));">CLASSIFIED</span>
                <span class="draw-subtext">RED FORCE ASSET</span>
            </div>
        `;
        return;
    }
    
    // Calculate Rarity Class and Badge Text
    let rarityClass = 'rarity-common';
    let rarityLabel = 'COMMON';
    if (card.rank >= 6 && card.rank <= 9) {
        rarityClass = 'rarity-rare';
        rarityLabel = 'RARE';
    } else if (card.rank >= 10 && card.rank <= 12) {
        rarityClass = 'rarity-epic';
        rarityLabel = 'EPIC';
    } else if (card.rank >= 13) {
        rarityClass = 'rarity-legendary';
        rarityLabel = 'LEGENDARY';
    }
    
    const cardEl = document.createElement('div');
    cardEl.className = `tactical-card ${rarityClass}`;
    
    // Map stats to HTML rows (bar width animated after append via data attribute)
    let statsHTML = '';
    for (const key in card.stats) {
        const value = card.stats[key];
        statsHTML += `
            <div class="card-stat-row" data-stat="${key}">
                <span class="card-stat-label">${STAT_MAPPINGS[key]}</span>
                <div class="card-stat-bar-container">
                    <div class="card-stat-bar" data-width="${value}"></div>
                </div>
                <span class="card-stat-value">${value}</span>
            </div>
        `;
    }

    const imgSrc = getCardImage(card);
    const fallbackSrc = getGenericFallback(card);

    // Calculate Rarity Class and Badge Text (look up object to replace ternary mapping)
    const RANK_LABELS = { 11: 'J', 12: 'Q', 13: 'K', 14: 'A' };
    const badgeText = RANK_LABELS[card.rank] ?? card.rank;

    const countryFlags = { RU: '🇷🇺', UA: '🇺🇦', BOTH: '🇷🇺 🇺🇦' };
    const countryLabels = { RU: 'RUSSIA', UA: 'UKRAINE', BOTH: 'RUSSIA · UKRAINE' };
    const flagHTML = card.country ? `<span class="card-country-flag" title="${countryLabels[card.country] ?? ''}">${countryFlags[card.country] ?? ''}</span>` : '';

    cardEl.innerHTML = `
        <div class="card-header">
            <span class="card-title">${card.name}</span>
            <span class="card-badge">${badgeText}</span>
        </div>
        <div class="card-country-bar card-country-${(card.country ?? 'RU').toLowerCase()}">${flagHTML} ${countryLabels[card.country] ?? ''}</div>
        <div class="card-img-container">
            <img class="card-image" src="${imgSrc}" alt="${card.name}" onerror="this.onerror=null;this.src='${fallbackSrc}'">
            <div class="card-overlay-tag">// NATO: ${card.nato}</div>
        </div>
        <div class="card-description">${card.description}</div>
        <div class="card-stats-list">${statsHTML}</div>
    `;
    
    // Add Click listener to stats rows if interactive
    if (isInteractive && onStatClick) {
        cardEl.classList.add('interactive-card');
        const rows = cardEl.querySelectorAll('.card-stat-row');
        rows.forEach(row => {
            row.addEventListener('click', () => {
                const statKey = row.getAttribute('data-stat');
                onStatClick(statKey);
            });
        });
    }

    // Simple mouse tilt hover micro-interaction
    cardEl.addEventListener('mousemove', (e) => {
        const rect = cardEl.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const angleX = (yc - y) / 10;
        const angleY = (x - xc) / 10;
        cardEl.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
    });

    cardEl.addEventListener('mouseleave', () => {
        cardEl.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
    
    container.appendChild(cardEl);

    // Trigger stat bar width animation after DOM insertion (bypasses inline-style transition skip)
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            cardEl.querySelectorAll('.card-stat-bar[data-width]').forEach(bar => {
                bar.style.width = `${bar.dataset.width}%`;
            });
        });
    });
}

// ── GAME OVER CAMPAIGN CHECK ──
function checkGameOver() {
    if (userDeck.length === 0 || aiDeck.length === 0) {
        elBtnDraw.classList.add('hidden');
        elBtnResolveWar.classList.add('hidden');
        
        let victory = userDeck.length > 0;
        
        if (victory) {
            elModalTitle.innerText = "CAMPAIGN CONCLUDED";
            elModalTitle.className = "hud-glow-text";
            elModalDesc.innerText = "Excellent command. All enemy reserve assets have been successfully routed or captured.";
            AudioController.win();
            logMessage(`CAMPAIGN WIN: All hostile forces fully neutralized.`, 'user');
        } else {
            elModalTitle.innerText = "COMMAND OVERRULED";
            elModalTitle.className = "hud-glow-text" // we could styled color here
            elModalDesc.innerText = "Operational failure. Your combat deck was completely neutralized by the hostile force.";
            AudioController.lose();
            logMessage(`CAMPAIGN DEFEAT: Reserves depleted. Tactical collapse.`, 'ai');
        }
        
        elModalRounds.innerText = roundsPlayed;
        elModalWars.innerText = warsTriggered;
        
        elGameOverModal.classList.remove('hidden');
        return true;
    }
    return false;
}

// ── LIVE SYSTEM CLOCK ──
function startClock() {
    const el = document.querySelector('.system-time');
    if (!el) return;
    function tick() {
        const ts = new Date().toLocaleTimeString('en-GB');
        el.textContent = `SYS_TIME: ${ts}`;
    }
    tick();
    setInterval(tick, 1000);
}

// Initialize on window load
window.addEventListener('load', () => {
    startClock();
    init();
});

// ── INTEL GLOSSARY CONTROLLER ──
function initGlossaryTabs() {
    const btnCombat = document.getElementById('tab-combat');
    const btnGlossary = document.getElementById('tab-glossary');
    const viewCombat = document.getElementById('view-combat');
    const viewGlossary = document.getElementById('view-glossary');
    
    if (btnCombat && btnGlossary && viewCombat && viewGlossary) {
        btnCombat.addEventListener('click', () => {
            try { AudioController.beep(); } catch(e) {}
            btnCombat.classList.add('active-tab');
            btnGlossary.classList.remove('active-tab');
            viewCombat.classList.remove('hidden-view');
            viewGlossary.classList.add('hidden-view');
        });
        
        btnGlossary.addEventListener('click', () => {
            try { AudioController.beep(); } catch(e) {}
            btnGlossary.classList.add('active-tab');
            btnCombat.classList.remove('active-tab');
            viewGlossary.classList.remove('hidden-view');
            viewCombat.classList.add('hidden-view');
            
            // Build the Glossary listing dynamically
            renderGlossaryGrid();
        });
    }
}

function renderGlossaryGrid() {
    const grid = document.getElementById('glossary-card-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    // Browse unique assets (13 base assets in MILITARY_ASSETS)
    MILITARY_ASSETS.forEach((card, index) => {
        const miniCard = document.createElement('div');
        miniCard.className = 'glossary-mini-card';
        if (index === 0) miniCard.classList.add('selected-mini');
        
        const imgSrc = getCardImage(card);
        
        miniCard.innerHTML = `
            <div class="glossary-mini-img-wrapper">
                <img class="glossary-mini-img" src="${imgSrc}" alt="${card.name}">
            </div>
            <div class="glossary-mini-name">${card.name}</div>
            <div class="glossary-mini-type">${card.type}</div>
        `;
        
        miniCard.addEventListener('click', () => {
            try { AudioController.beep(); } catch(e) {}
            
            // Highlight selected mini card
            grid.querySelectorAll('.glossary-mini-card').forEach(c => c.classList.remove('selected-mini'));
            miniCard.classList.add('selected-mini');
            
            // Show details
            renderDossierDetail(card);
        });
        
        grid.appendChild(miniCard);
    });
    
    // Select first asset by default
    if (MILITARY_ASSETS.length > 0) {
        renderDossierDetail(MILITARY_ASSETS[0]);
    }
}

function renderDossierDetail(card) {
    const panel = document.getElementById('glossary-dossier-panel');
    if (!panel) return;
    
    const imgSrc = getCardImage(card);
    
    // Build specs HTML
    let specsHTML = '';
    for (const label in card.specs) {
        specsHTML += `
            <div class="dossier-spec-item">
                <span class="dossier-spec-label">${label.toUpperCase()}</span>
                <span class="dossier-spec-value">${card.specs[label]}</span>
            </div>
        `;
    }
    
    // Render the dossier layout
    panel.innerHTML = `
        <div class="dossier-header">
            <div class="dossier-classification">UNCLASSIFIED // INTEL SECURE</div>
            <h4 class="dossier-title">${card.name}</h4>
            <div class="dossier-subtitle">${card.type.toUpperCase()} (NATO: ${card.nato})</div>
            <div class="dossier-country card-country-${(card.country ?? 'RU').toLowerCase()}">${{ RU: '🇷🇺 RUSSIA', UA: '🇺🇦 UKRAINE', BOTH: '🇷🇺 RUSSIA · 🇺🇦 UKRAINE' }[card.country] ?? ''}</div>
        </div>
        <div class="dossier-img-container">
            <img class="dossier-img" src="${imgSrc}" alt="${card.name}" onerror="this.onerror=null;this.src='${getGenericFallback(card)}'">
        </div>
        <div class="dossier-spec-section">
            <h5 class="dossier-section-title">TECHNICAL DUEL METRICS</h5>
            <div class="dossier-spec-grid">
                <div class="dossier-spec-item"><span class="dossier-spec-label">FIREPOWER</span><span class="dossier-spec-value">${card.stats.fp}/100</span></div>
                <div class="dossier-spec-item"><span class="dossier-spec-label">DEFENSE</span><span class="dossier-spec-value">${card.stats.def}/100</span></div>
                <div class="dossier-spec-item"><span class="dossier-spec-label">SPEED</span><span class="dossier-spec-value">${card.stats.spd}/100</span></div>
                <div class="dossier-spec-item"><span class="dossier-spec-label">RANGE</span><span class="dossier-spec-value">${card.stats.rng}/100</span></div>
                <div class="dossier-spec-item"><span class="dossier-spec-label">TECH LAYER</span><span class="dossier-spec-value">${card.stats.tec}/100</span></div>
                <div class="dossier-spec-item"><span class="dossier-spec-label">NATO TIER</span><span class="dossier-spec-value">${card.rank === 14 ? 'ACE' : card.rank === 11 ? 'JACK' : card.rank === 12 ? 'QUEEN' : card.rank === 13 ? 'KING' : 'TIER ' + card.rank}</span></div>
            </div>
        </div>
        <div class="dossier-spec-section">
            <h5 class="dossier-section-title">HARDWARE SPECIFICATION SHEET</h5>
            <div class="dossier-spec-grid">
                ${specsHTML}
            </div>
        </div>
        <div class="dossier-spec-section">
            <h5 class="dossier-section-title">OPERATIONAL ANALYSIS OVERVIEW</h5>
            <p class="dossier-desc">${card.description}</p>
        </div>
        <div class="dossier-citation-box">
            <div class="dossier-citation-title">INTEL SOURCE CITATION:</div>
            <div class="dossier-citation-text">${card.citation}</div>
        </div>
    `;
}
