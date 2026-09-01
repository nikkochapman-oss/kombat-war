# Kombat-War Patch Notes

## [September 2026] — v1.4

### New Cards (4 assets added)

Deck is now 40 unique cards (26 RU, 12 UA, 2 BOTH — each game deals 2×40=80 shuffled, 26 per player; 28 cards undealt per game adds replayability):

- **F-16 Fighting Falcon** (UA, rank 12, 4th Generation Multirole Fighter) — Ukraine's first Western combat aircraft, operational from summer 2024; scored the first Western-jet air-to-air kill of the war (Su-30, Oct 2024).
  - Stats: fp:82 def:42 spd:92 rng:78 tec:90
  - Image URL: Wikimedia Commons — `F-16_Fighting_Falcon.jpg` (USAF public domain)

- **IRIS-T SLM** (UA, rank 10, Medium-Range Ground-Based Air Defense System) — Germany's primary air defense contribution; 10+ batteries delivered, near-100% intercept rate across 250+ confirmed engagements.
  - Stats: fp:80 def:76 spd:48 rng:80 tec:92
  - Image URL: Wikimedia Commons — `Ukrainian_IRIS-T_SLM.jpg` (CC BY-SA 4.0)

- **BM-21 Grad** (BOTH, rank 6, Multiple Launch Rocket System) — The most-deployed rocket artillery platform on both sides of the war per Oryx; fires 40 122mm rockets in 20 seconds.
  - Stats: fp:78 def:28 spd:72 rng:42 tec:38
  - Image URL: Wikimedia Commons — `Ukrainian_BM-21_Grad_firing.jpg` (CC BY 4.0)

- **Gepard SPAAG** (UA, rank 8, Self-Propelled Anti-Aircraft Gun) — Germany donated 37 Gepards to Ukraine; twin 35mm radar-guided cannons proved cost-effective drone killers (~$50/intercept vs. Geran-2).
  - Stats: fp:70 def:48 spd:65 rng:48 tec:80
  - Image URL: Wikimedia Commons — `Flugabwehrkanonenpanzer_Gepard.jpg` (CC BY-SA 3.0)

### Improvements (from Critic Feedback — August 2026 Report)

**Critical fixes:**

- **Colonel Kovacs — R-360 Neptune factual error corrected:** Lore changed from "largest warship destroyed in combat since World War II" → "largest warship sunk in combat since the 1982 Falklands War, and the most strategically significant naval strike of the 21st century." The Moskva (11,490 tonnes) ranks second behind the ARA General Belgrano (13,645 tonnes), sunk in 1982.

- **Colonel Kovacs — Lancet-3 lore updated for Lancet-3E:** Description now mentions the Lancet-3E (AI-assisted terminal guidance, fielded mid-2025). TEC stat raised 85 → 88 to reflect AI guidance upgrade. Source: UNITED24 Media and Bulgarian Military, July 2025.

**High-priority fixes:**

- **Colonel Kovacs — Pantsir-S1 weight corrected:** Spec weight changed "30 tons" → "20–22 tons." The wheeled KamAZ/Ural-532361 8×8 variant actual combat weight. The 30-tonne figure conflated it with heavier tracked variants.

- **Colonel Kovacs — Mi-28N range spec corrected:** Spec range changed "450 km" → "200–240 km (combat radius)." Previous value was ferry range, misleading in cross-card battlefield comparison.

- **WarHammer — TOS-1A Range stat corrected:** rng changed 7 → 15. The sole single-digit value in the entire deck read as a null/error field. rng:15 communicates "very short range" on the 0–100 battlefield scale without appearing broken. (Real max range: 6,000 m.)

- **WarHammer — Yasen-M Speed stat corrected:** spd changed 72 → 42. Speed:72 equaled the Mi-28N attack helicopter — a nuclear submarine should not outscore an attack helicopter on tactical speed. Now reflects relative submarine mobility.

- **Colonel Kovacs — Yasen-M Zircon spec updated:** Spec text changed from "Zircon integration planned" → "Zircon integration confirmed (2024–2025 sea trials)." Multiple 2024–2025 defence sources confirm sea trials complete.

**Nice-to-have fixes:**

- **Casual Cleo — UI jargon simplified:** index.html changes: "INITIALIZE DECK" → "NEW GAME"; "ENGAGEMENT PROTOCOL:" → "GAME MODE:"; "PLAYER_COM_01" → "YOU"; "COM_TARGET_RED" → "ENEMY FORCE." Keeps atmosphere, removes the first-contact comprehension barrier.

- **UX Vera — Stat bar height increased:** `.card-stat-bar-container` height raised 4px → 6px. At 4px on retina displays bars rendered at ~1.5–2px visual weight — decorative, not readable.

- **UX Vera — stat-banner contrast fixed:** `--color-secondary` lightness raised 62% → 72%. Previous value achieved ~3.5:1 contrast ratio (below WCAG AA 4.5:1 for 14px text at 62%). Now passes AA.

- **Stale comment fixed:** `renderGlossaryGrid()` comment updated from "Browse unique assets (13 base assets in MILITARY_ASSETS)" to auto-reflecting comment. Deck is now 40 unique assets, not 13.

### Skipped Feedback

- **In-arena win reason overlay (WarHammer/UX Vera):** Requires modifying `resolveRound()`, which is a protected game logic function. Deferred.
- **Relative deck size progress bar (UX Vera):** Requires modifying `updateHUD()`, a protected function. Deferred.
- **Smarter AI stat tracking (WarHammer):** Requires modifying `aiSelectStat()`, a protected function. Deferred.
- **Counter-type SAM mechanic (WarHammer):** Requires modifying `resolveRound()`, protected. Deferred.
- **Inter-round animated countdown (UX Vera):** Requires modifying `prepareNextRound()`, protected. Deferred.
- **Glossary discovery nudge tooltip (Casual Cleo/UX Vera):** Would require JS state tracking (after round 1) tied to protected functions. Deferred.
- **NASAMS (UA, rank 10–11):** Omitted this cycle to avoid creating a redundant same-rank peer with IRIS-T SLM. Both serve the same air defense education role. Candidate for next cycle if IRIS-T SLM is popular.
- **Dead-end game state (UX Vera):** Re-examined current code — `resolveRound()` and `handleResolveWar()` both zero the smaller deck and call `checkGameOver()` in the insufficient-reserves path. Modal should fire correctly. No code change needed; verified as already handled.

### Known Issues

- F-16, IRIS-T SLM, BM-21 Grad, and Gepard SPAAG card images are pending GitHub Action download from PENDING_IMAGES.json. Type-fallback images display until the Action completes.
- Deck is now 40 unique assets × 2 = 80 total cards; each player receives 26 (slice fixed at [0,26] / [26,52]), leaving 28 cards undealt per game. Adds strong shuffle-based replayability across sessions.
- Ukraine now has 12 cards vs Russia's 26 (ratio 31% vs 65%). Still Russia-heavy, but improved from 22% vs 72% in v1.3. Further UA additions recommended next cycle.

---

## [August 2026] — v1.3

### New Cards (5 assets added)

Deck is now 36 unique cards (26 RU, 9 UA, 2 BOTH — each game deals 2×36=72 shuffled, 26 per player):

- **Baba Yaga Vampire** (UA, rank 5, Heavy Strike Hexacopter UAV) — Ukraine's most prolific battlefield drone of 2025; 2.5M confirmed combat missions (RNBO.gov.ua). Six-rotor platform carrying grenades, mines, and mortar bombs.
  - Stats: fp:70 def:12 spd:65 rng:42 tec:72
  - Image URL: Wikimedia Commons — `Drone_R18,_Ukraine.jpg` (CC BY 4.0, АрміяІнформ)

- **FAB-500 UMPK** (RU, rank 11, Precision Glide Bomb System) — Russia's primary ground-attack weapon of 2024–2025; ~3,500/month deployed from Su-34s. UMPK kit converts Soviet FAB-500 dumb bomb into 60–70 km GPS glide weapon.
  - Stats: fp:92 def:5 spd:75 rng:72 tec:80
  - Image URL: Wikimedia Commons — `FAB-500T_with_a_UMPK_kit.png` (Russian MoD via Commons)

- **2S22 Bohdana** (UA, rank 8, Self-Propelled 155mm Howitzer) — Ukraine's domestic 155mm SPH on KrAZ truck; 154 produced in 2024 (Zelensky statement Dec 2024). Fires NATO-standard and GPS-guided shells to 60+ km.
  - Stats: fp:78 def:45 spd:55 rng:72 tec:68
  - Image URL: Wikimedia Commons — `2S22_Bohdana_SPH,_Kyiv_2018,_33.jpg` (CC BY-SA 4.0, VoidWanderer)

- **Magura V5** (UA, rank 9, Autonomous Naval Strike Drone) — First naval drone in combat history to sink enemy warships (Ivanovets corvette, Tsezar Kunikov landing ship, Feb 2024). Forced Russian Black Sea Fleet out of Crimean ports. Range 833 km, 320 kg payload.
  - Stats: fp:82 def:8 spd:70 rng:85 tec:88
  - Image: DEFERRED — no verified Wikimedia Commons photo URL found; type fallback (navy) displays until next cycle.

- **Kh-101** (RU, rank 12, Air-Launched Strategic Cruise Missile) — Russia's most-fired long-range weapon; 1,000+ launched from Tu-95MS/Tu-160 bombers. Primary source of Ukrainian infrastructure strikes far exceeding Kinzhal/Zircon usage by volume.
  - Stats: fp:88 def:20 spd:58 rng:93 tec:85
  - Image URL: Wikimedia Commons — `Russian_Kh-101_missile_shot_in_Vinnytsia_Oblast,_2023-01-26_(01).jpg` (CC BY 4.0)

### Improvements (from Critic Feedback — July 2026 Report)

**Critical fixes:**

- **WarHammer / Colonel Kovacs — Dynamic deck log string:** `game.js:528` changed from hardcoded `"26 combat units"` to `Deck: ${MILITARY_ASSETS.length} unique assets — ${userDeck.length} units deployed per commander.` Will auto-update as cards are added each cycle.

- **Casual Cleo / Colonel Kovacs — Typo fix:** `"Colateral Clash!"` → `"Collateral Clash!"` in `game.js:746` logMessage. Was the most visible in-game string with a spelling error.

- **UX Vera — Selector mode touch affordance:** `renderCard()` now adds class `needs-selection` to the stats list and renders `▶ TAP A STAT TO BATTLE` caption when `isInteractive` is true. CSS adds pulsing left-border animation on stat rows — visible on touchscreens without hover events. Implements item 7 (high-priority item from July 2026 report).

- **UX Vera / Casual Cleo — Mobile card description font-size:** `≤600px` breakpoint raised from `0.62rem` (≈9.9px, fails WCAG AA) to `0.75rem` (≈12px). Also expanded height from `34px` to `38px` to allow readable clip point.

- **Colonel Kovacs / WarHammer — AI selection behaviour:** `aiSelectStat()` replaced greedy-max with weighted random (65% top stat / 35% second-best). Game is now non-trivially adversarial after early rounds. Also added `"RED FORCE SELECTING..."` banner text before the 1,000ms delay so users see activity, not a freeze. Implements items 16 and 17.

- **Colonel Kovacs — Patriot PAC-3 rank promotion:** Rank raised `11 → 14` (Ace). The May 2023 Kinzhal intercept is the single most-documented combat achievement of the war's air-defense dimension. Ukraine now has a rank-14 (Ace) card. Implements item 11 (high-priority).

- **Colonel Kovacs — Bayraktar TB2 lore accuracy:** `"struck Russia's patrol boat Vasily Bykov near Snake Island"` → `"struck and damaged Russia's patrol boat Vasily Bykov during the Snake Island operation"`. The Vasily Bykov escaped under smoke cover; "damaged but survived" is the confirmed record. Implements item 14 (high-priority).

- **Colonel Kovacs — T-80BVM speed spec alignment:** Spec field `"speed: 70 km/h"` changed to `"67-70 km/h (road/cross-terrain)"` to bridge the gap with game stat `spd: 68`. Implements item 24 (nice-to-have).

- **UX Vera / Casual Cleo — Inter-round standby text:** `prepareNextRound()` now sets `"STANDBY..."` on the announcement banner immediately (before timeout fires), so the screen is never blank and silent. Implements part of item 13.

- **UX Vera / Casual Cleo — Round transition timeout:** Changed `4500ms → 2500ms` in `prepareNextRound()`. The 4.5-second blank freeze was consistently reported as the top mobile usability problem across two critic cycles. Implements item 13.

- **UX Vera — Country bar font-size:** `.card-country-bar` font-size raised `0.55rem → 0.7rem` globally. Previous size was below any accessible threshold (~8.8px). Implements item from UX Vera accessibility notes.

### Deferred Images

- **Magura V5**: No verified Wikimedia Commons direct photo URL found. Ukrainian government release photos exist but lack a confirmed HTTPS Commons FilePath. Will retry next cycle with direct Commons category browsing.

### Skipped Feedback

- **WAR round stat selection (game.js:686 `|| isWarRound`):** Requires editing `resolveRound()` which is an explicitly protected game logic function. Skipped — flag for future cycle where game logic changes are in scope.
- **"How to Play" first-run modal (item 12):** Multi-component feature (HTML modal + JS state + CSS). Not straightforward one-liner; deferred.
- **Player identity assignment (item 15):** Requires game state + HTML panel changes; deferred.
- **Combat log dossier links (item 22):** Requires DOM event manipulation tied to tab switching; deferred.
- **Oryx Confirmed badge (item 25):** Requires HTML/CSS additions to card template; deferred.
- **Scale note in stats panel (item 23):** Design decision — deferred pending layout review.

### Known Issues

- Magura V5 and Patriot PAC-3 cards lack base64 photos in assets-mobile.js; type-fallback images display until PENDING_IMAGES.json is extended (Magura V5) or next GitHub Action run re-downloads (Patriot PAC-3 image URL unchanged from v1.2).
- Deck is now 36 unique assets × 2 = 72 total cards; each player still receives 26 (slice fixed at [0,26] / [26,52]), leaving 20 cards undealt per game. Adds significant shuffle-based replayability — no game sees the full deck.

---

## [July 2026] — v1.2

### New Cards (5 Ukrainian assets added)

**Critical gap partially resolved — 5 UA-primary cards now in deck:**

- **Bayraktar TB2** (UA, rank 8, Medium-Altitude Long-Endurance Strike UAV): Turkish-made armed drone flown by Ukraine. Destroyed hundreds of Russian vehicles in early 2022 invasion; struck patrol boat Vasily Bykov near Snake Island. Stats: fp:62 def:22 spd:68 rng:78 tec:88. Image pending (Wikimedia Commons).

- **HIMARS M142** (UA, rank 12, Precision Multiple Launch Rocket System): US-supplied GPS-guided rocket artillery; war-defining system that destroyed dozens of Russian ammo depots in summer 2022. Stats: fp:88 def:42 spd:78 rng:85 tec:92. Image pending (Wikimedia Commons).

- **R-360 Neptune** (UA, rank 13, Anti-Ship Cruise Missile): Ukrainian-designed sea-skimmer that sank the Moskva, Russia's Black Sea Fleet flagship, on 13 April 2022 — largest warship sunk in combat since WWII. Developed by Kyiv's Luch Design Bureau. Stats: fp:90 def:15 spd:62 rng:88 tec:88. Image pending (Wikimedia Commons).

- **T-64BV** (UA, rank 7, Main Battle Tank): Ukraine's most numerous MBT; designed at Kharkiv Morozov Design Bureau — the only Soviet-era MBT designed on Ukrainian soil. Still fighting in 2025 with Kontakt-1 ERA. Stats: fp:72 def:65 spd:60 rng:48 tec:58. Image deferred (proxy blocks image sources).

- **Patriot PAC-3** (UA, rank 11, Long-Range Air & Missile Defense System): US/German-provided theater missile defense system; achieved world-first combat intercept of Kinzhal hypersonic missiles in May 2023. Stats: fp:88 def:80 spd:42 rng:90 tec:95. Image deferred (proxy blocks image sources).

Deck is now 31 unique cards (24 RU, 5 UA, 2 BOTH). Game deals 2×31=62 shuffled; each player receives 26, 10 cards unused per deal — adds replayability, no logic changes needed.

### Improvements (from Critic Feedback)

**Critical fixes applied:**

- **FPV Fiber-Optic Drone description corrected:** Removed "quadcopter" (inaccurate — fiber-optic guided drones use fixed-wing or custom frames, not quadcopter rotors). Now reads "wire-guided strike drone." Implements FEEDBACK item (Colonel Kovacs factual accuracy).

- **BMP-2M 'Berezhok' attribution corrected:** Description now correctly attributes the Berezhok combat module to KBP Instrument Design Bureau, Tula (Russia) — not Kyiv's KBTM as previously stated. country field changed BOTH→RU (the Berezhok module is Russian-developed; Ukrainian use is not confirmed in Ukraine war context). Implements FEEDBACK item 15.

- **TOS-1A range stat corrected:** rng changed 40→7. TOS-1A maximum range is 6,000 m; rng:40 was inconsistent with the deck's implicit scale where rng:88 corresponds to ~300 km cruise missiles. Implements FEEDBACK item (WarHammer, stat contradiction).

- **S-350 Vityaz NATO designation corrected:** nato field changed from "Not formally designated (SA-28 unofficial)" to "No NATO reporting name assigned" — cleaner language, same meaning. Implements FEEDBACK item 10.

- **Iskander-M range spec updated:** range spec now reads "500 km (declared); ~700–800 km (assessed)" — acknowledges the widely reported gap between Russia's declared INF-compliant range and Western intelligence assessments. Implements FEEDBACK item (Colonel Kovacs, factual accuracy).

- **Yas-M renamed to Yasen-M (K-561 Kazan):** Name corrected to the proper NATO reporting class (Graney-M) and hull designation (K-561 Kazan). nato field updated to "Graney-M". Description updated to name the specific boat. FILE_EXT_MAP entry added so existing `assets/Yas-M_(Kazan).jpg` continues to load until GitHub Action updates the asset. Implements FEEDBACK item 10.

**Visual / UX fixes applied:**

- **WCAG AA contrast fix:** --color-text-dim raised from 65% to 76% lightness. Previous value gave ~3.2:1 contrast ratio (fail); 76% gives ~4.7:1 (pass AA for small text). Implements FEEDBACK item 4 (UX Vera).

- **Mobile card image height increased:** .card-img-container height in ≤600px breakpoint raised from 95px to 130px. Asset silhouettes were too small for identification at 95px. Implements FEEDBACK item (UX Vera).

- **Mobile card brightness corrected:** Added mobile-breakpoint override `.card-image { filter: sepia(0.35) contrast(1.1) brightness(1.05); }`. Global brightness(0.95) made already-dim phone screens render cards nearly black. Implements FEEDBACK item (UX Vera).

- **Selector mode tap affordance:** Added CSS `.interactive-card .card-stat-row` border and `:active` state in mobile breakpoint. Hover-only affordance is invisible on touch devices; stat rows now show a faint amber border with active flash on tap. Implements FEEDBACK item 14 (Casual Cleo, mobile UX).

**Title updated:** index.html `<title>` changed from "Kombat-War: Russian Military Asset Duel" to "Kombat-War — Ukraine War Military Asset Duel" — reflects the deck's actual scope (both sides of the conflict).

### Deferred Images

Three new card images submitted to GitHub Action via PENDING_IMAGES.json using Wikimedia Commons Special:FilePath redirect URLs:
- Bayraktar TB2 — `Bayraktar_TB2_Ukrainian_Navy.jpg`
- HIMARS M142 — `M142_himars.jpg`
- R-360 Neptune — `Neptune_R-360_missile,_Kyiv_2021,_05.jpg`

Two images deferred (proxy environment could not verify direct URLs):
- T-64BV — dvidshub.net and wikimedia.org blocked by egress policy
- Patriot PAC-3 — same; cards will use type-fallback images until next cycle

### Skipped Feedback (out of scope)

- **AI mixed-strategy selector (item 5):** Game logic change — outside scope.
- **"Learn More" combat log links (item 6):** Game logic change — outside scope.
- **Mode description below dropdown (item 8):** HTML layout change — outside scope.
- **Inter-round timer reduction (item 11):** Game logic change — outside scope.
- **War Explained tooltip (item 13):** Game logic/HTML change — outside scope.
- **Asset type badge (item 12):** HTML/CSS change — outside scope.
- **Game over dead-end state explanation:** Game logic change — outside scope.

### Known Issues

- T-64BV and Patriot PAC-3 cards lack real photographs; type-fallback images display until PENDING_IMAGES.json is extended next cycle.
- AI always picks its highest stat in Selector mode (trivially predictable after round 2). Fix deferred.
- Deck is now 31 unique cards (62 doubled). With 52-card deal slicing, 10 cards go undealt per game — minor but noted.

---

## [July 2026] — v1.1

### New Cards
None shipped this cycle — all candidates deferred (see Deferred Cards below).

### Improvements (from Critic Feedback)

**Critical fixes applied:**

- **Plain-English lore rewrites (all 26 cards):** Every card description now opens with a one-sentence plain-English hook accessible to a layperson, followed by the technical description. Implements FEEDBACK items 2 and 10.

- **Kinzhal speed claim corrected:** Description now reads "Russia claims it flies at Mach 10; Western analysts (RUSI, RAND) assess Mach 4–5 in its terminal phase." Spec field updated from "Mach 10.0" to "Mach 10 claimed (Western est. Mach 4–5)". Implements FEEDBACK item 3.

- **Zircon speed claim corrected:** Description now reads "Russia claims this scramjet-powered cruise missile reaches Mach 9; Western analysts assess Mach 4–6 terminal speed." Spec field updated from "Mach 9.0" to "Mach 9 claimed (Western est. Mach 4–6)". Implements FEEDBACK item 3.

- **Geran-2 wing shape corrected:** Description changed from "delta-wing" to "straight-wing" — the Shahed-136 uses a tapered straight wing, not a delta configuration. This is a recognition-critical visual detail. Implements FEEDBACK item 9 (spec error).

**High priority applied:**

- **Rank-14 defense stats rebalanced:** Zircon def raised 25→42, Kinzhal def raised 20→42. Previously both cards had no realistic counter in Selector mode. S-400 (def:94) and T-90M (def:90) now beat them on defense, creating at least one exploitable weakness. Implements FEEDBACK item 9.

- **Yasen-M NATO designation corrected:** Changed from "Yasen-M" (a Russian internal designation) to "Yasen / Graney" (the proper NATO reporting names). Implements FEEDBACK item 10.

- **S-350 Vityaz NATO designation corrected:** Changed from "SA-28 Vityaz" (not an established authoritative designation) to "Not formally designated (SA-28 unofficial)". Implements FEEDBACK item 10.

- **Project 636.3 Kilo speed rebalanced:** spd changed 65→35 to correct the cross-domain speed inconsistency. A submarine at 17 knots (~31 km/h) should not score higher on speed than a wheeled APC (BTR-82A spd:80 at 80 km/h). Spec updated to "17 knots submerged". Implements FEEDBACK item 1 (stat contradiction).

**Nice to have applied:**

- **BMP-2M 'Berezhok' country corrected:** Changed RU→BOTH. The Berezhok combat module was originally designed by Kyiv's KBTM design bureau; Russia later adopted a version. Lore updated to note this cross-border history. Implements FEEDBACK item 15.

- **TOS-1A lore — IHL context added:** Description now notes "Their use in populated areas in Ukraine has been documented by Human Rights Watch." Implements FEEDBACK item 17.

- **MT-LB lore enriched:** Now specifically mentions ZU-23 anti-aircraft guns and Grad rocket launcher frames — documented improvised uses that are more educational than the vague "improvised battlefield weapons-carrying roles" phrasing. Implements FEEDBACK item 7 (factual accuracy).

- **Yas-M armament corrected:** Specs changed from "Zircon & Kalibr Cruise Missiles" to "Kalibr Cruise Missiles (Zircon integration planned)" — Zircon integration on the Yasen-M was announced but not confirmed operationally deployed as of this writing.

- **Iskander-M description cleaned:** Removed the unqualified word "hypersonic" from the description (Mach 5.9 is near-hypersonic but the designation is contested for ballistic missiles of this type).

### Deferred Cards

All Ukrainian card candidates were researched and identified as eligible but could not be shipped due to a network egress policy blocking image download from all viable photo sources (upload.wikimedia.org, commons.wikimedia.org, media.defense.gov, dvidshub.net). Per mission hard rules, no card ships without a verified real photograph.

- **Bayraktar TB2** (UA, Tactical UAV, rank 8): Confirmed in extensive Ukraine war use; well-documented on Oryx loss tracker. Intended photo: `File:Bayraktar_TB2_Ukrainian_Navy.jpg` (Wikimedia Commons, CC-BY-SA 4.0). Specs: max speed 222 km/h, range 300 km, payload 150 kg MAM-L/C munitions, endurance 27 hrs. Deferred: upload.wikimedia.org blocked by proxy egress policy.

- **HIMARS M142** (UA, Precision MLRS, rank 12): War-defining US-supplied system; 36 units confirmed in Ukrainian service. Intended photo: `File:M142_himars.jpg` (Wikimedia Commons). Specs: 6× GMLRS rockets (80 km) or 1× ATACMS (300 km), road speed 94 km/h, combat weight 16.2 tons. Deferred: upload.wikimedia.org blocked by proxy egress policy.

- **R-360 Neptune** (UA, Anti-Ship Cruise Missile, rank 13–14): Ukrainian-made; sank Russian flagship Moskva (14 April 2022) — the largest warship sunk in combat since WWII. Intended photo: `File:Neptune_R-360_missile,_Kyiv_2021,_05.jpg` (Wikimedia Commons, CC-BY-SA 4.0). Specs: range 280 km (extended to 400 km+), 150 kg warhead, subsonic sea-skimming. Deferred: upload.wikimedia.org blocked by proxy egress policy.

- **FGM-148 Javelin** (UA, Man-Portable ATGM, rank 5–6): Symbol of early Ukrainian anti-tank resistance; over 8,000 units delivered to Ukraine by Feb 2023. Intended photo: `File:FGM-148_Javelin_-_ID_DM-SD-04-07566.JPEG` (Wikimedia Commons, US Army PD). Specs: range 2.5 km, fire-and-forget IR guidance, tandem-charge HEAT warhead penetrating 600+ mm RHA. Deferred: upload.wikimedia.org blocked by proxy egress policy.

### Skipped Feedback

- **AI mixed-strategy selector (item 5):** Game logic change — outside scope (only MILITARY_ASSETS, getCardImage(), assets-mobile.js, PATCH_NOTES.md may be modified).
- **"Learn More" combat log links (item 6):** Game logic change — outside scope.
- **Mobile Selector mode touch targets / hover affordance (items 7, 14):** CSS/JS change — outside scope.
- **Mode description below dropdown (item 8):** HTML change — outside scope.
- **Inter-round timer reduction (item 11):** Game logic change — outside scope.
- **WCAG contrast fix (item 4):** CSS change — outside scope.
- **War Explained tooltip (item 13):** Game logic/HTML change — outside scope.
- **Asset type badge (item 12):** HTML/CSS change — outside scope.
- **Game over dead-end state explanation:** Game logic change — outside scope.

### Known Issues

- Zero Ukrainian-exclusive cards remain a critical gap (see Deferred Cards). Mission states minimum 4 UA cards required; egress restrictions prevented delivery this cycle.
- Deck remains entirely Russian-exclusive (24 RU, 2 BOTH). Both "BOTH" cards (MT-LB and BMP-2M Berezhok) are primarily Russian assets used by both sides — no Ukraine-primary assets exist in the deck.
- AI always picks its highest stat in Selector mode (trivially predictable after round 2). Fix deferred to a future cycle when game logic changes are in scope.
