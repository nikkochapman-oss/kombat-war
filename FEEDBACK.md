# Kombat-War Critic Report — July 2026

## Mission Alignment Check

Significant progress since the previous report: the Game Updater has added five Ukrainian cards (Bayraktar TB2, HIMARS M142, R-360 Neptune, T-64BV, Patriot PAC-3), corrected the title tag, fixed Geran-2 lore and warhead weight, corrected the TOS-1A range stat, and reclassified BMP-2M Berezhok to Russia-only. These were all critical items — good execution. The game is now more educationally honest. The remaining structural problem is the 24:5 Russian-to-Ukrainian card ratio, which still teaches a Russian-centric view of the war. More urgently, the research findings for 2025–2026 reveal three categories of glaring absences: Russia's FAB/UMPK glide bomb family (now Russia's primary ground-attack weapon), Ukraine's Baba Yaga/Vampire heavy hexacopter drone (2.5 million combat missions in 2025 alone), and Ukraine's Magura/Sea Baby naval USVs (confirmed ship kills). Two lingering code bugs — a stale "26 combat units" log string and a "Colateral Clash" typo — should be one-line fixes.

---

## Sub-Agent Reviews

### WarHammer (Strategy Gamer)

**Classic mode is still a coin-flip machine.** Two copies of each of 31 assets, shuffled randomly. The only decisions are to play (mandatory) or trigger WAR (mandatory when tied). This is structurally equivalent to vanilla War, a children's card game. Experienced players recognize this in one draw. The excellent lore adds flavour but not mechanics. Classic mode's value is purely casual and educational — which is legitimate, but should be labelled honestly: "QUICK PLAY (LUCK-BASED)" rather than "CLASSIC RANK WAR (2 to ACE)" which implies strategic weight.

**Selector mode has genuine depth but one exploit breaks it.** `aiSelectStat()` (game.js lines 624–651) always picks the single maximum stat. After three rounds, a player knows the AI's move before it plays: see your opponent's card revealed, note its top stat, pick any other stat. The AI becomes trivially beatable by round 5. Replace the greedy pick with weighted probability: top stat 65%, second stat 35%. Cost: one line of code. Payoff: the game becomes non-trivially adversarial throughout.

**Dominant cards, by name:**
- **Zircon** (fp:100, spd:100, rng:95, tec:98, rank 14): wins on four of five stats against every card in the deck unconditionally. Its only weakness is DEF:42. In Selector mode, a player holding Zircon wins any contest except a deliberate DEF challenge. No strategic tension.
- **Kinzhal** (fp:98, spd:100, rng:98, tec:96, rank 14): functionally tied with Zircon.
- **S-400** (rng:96, tec:95, def:94, rank 13): dominates three stat categories.
- **No Ukrainian Ace**: All rank 14 cards are Russian. In Classic mode Ukraine can never beat a rank-14 card outright. The Patriot PAC-3 intercepted Kinzhal in May 2023 — the single most documented event in the war's air-defense history — but PAC-3 is rank 11 to Kinzhal's rank 14. This is historically misleading and mechanically frustrating.

**Stat scaling remains internally incoherent:**
- BTR-82A (wheeled APC, road speed 80 km/h) → spd:80. Ka-52 (helicopter, max 300 km/h) → spd:80. A truck and a helicopter share the same speed score. Speed is not measuring speed; it's measuring something else, unlabelled.
- MT-LB spd:61 matches the vehicle's literal km/h. Every other card uses an abstract 0–100 scale. This card is speaking a different language.
- The TOS-1A rng fix (now rng:7) is correct and appreciated — keep it. Add a tooltip or footnote explaining RANGE is normalised across asset classes, not literal km.

**WAR mechanic is the best dramatic moment and wastes it.** `resolveRound()` (game.js:686): `if (gameMode === 'classic' || isWarRound)` forces rank comparison during WAR even in Selector mode. The player who spent the whole game making clever stat choices has zero input during the highest-stakes round. Removing `|| isWarRound` is a one-line fix that makes the ruleset consistent and makes the WAR moment actually skilled.

**One genuine bright spot:** The rank-to-rarity mapping (Common/Rare/Epic/Legendary with glowing borders) is excellent TCG craft. The visual system instantly communicates asset importance and creates the "oh no, my opponent just drew a Legendary" emotional beat that good card games run on. Keep this.

---

### Casual Cleo (First-Time Mobile Player)

I replayed this session fresh. The addition of Ukrainian cards is an immediate improvement — when I drew the Bayraktar TB2 and read "became a symbol of the war" I actually had a framing for what I was looking at. The mission alignment is visibly better.

**Still confusing in the first 60 seconds:**
- Nothing tells me which player I am. "PLAYER_COM_01" vs "COM_TARGET_RED" — I have no idea who's who. When I win and see "Tactical Victory", I still don't know if I'm playing Ukraine or Russia or some abstract commander.
- In Selector mode, my stat rows appear with no signal that they're interactive. The "SELECT BATTLE ATTRIBUTE" banner is small and easy to miss. I sat for 20 seconds before accidentally tapping a row. This is the highest-friction moment in the entire game.
- The round auto-resets after 4.5 seconds. On iPhone during that wait, the screen looks frozen. I tried tapping three times, panicked, and hit "INITIALIZE DECK" twice. Added a "please wait..." visual cue or reduce to 2 seconds.
- "COLLATERAL CLASH: WAR!" — note: I see this is *still* showing as "COLATERAL CLASH" in the code (one 'l' instead of two). Small typo, but it's the most dramatic moment in the game — worth fixing.

**What now works well:**
- Ukrainian card descriptions are educational. "Bayraktar TB2: it hovers up to 27 hours above the battlefield and fires precision-guided bombs at tanks, ships, and artillery below" — I understood that immediately. Same with Neptune: "Ukraine fired two at the Moskva, Russia's Black Sea Fleet flagship, on 13 April 2022, sinking the largest warship destroyed in combat since World War II." That sentence teaches me something real.
- The CLASSIFIED DOSSIER tab is excellent. I'm now spending more time there than playing. I wish the game pointed me there during play.

**Still needs fixing on mobile:**
- Card description font is 0.62rem at 375px (approximately 9.9px). This is below comfortable reading threshold. Minimum 0.75rem (12px).
- The 3-line clamp on descriptions cuts the good sentence at exactly the wrong moment. The plain-English hook disappears on long cards.
- The card image height at ≤600px is `height: 130px` — I can barely make out whether it's a tank or a helicopter. The sepia filter on a small, compressed image turns everything brown-grey.
- No "How to Play" screen. A 3-step modal on first load would solve almost every confusion.

**Did I learn something?** More than before, yes. The Bayraktar TB2, HIMARS, and Neptune cards genuinely taught me about Ukrainian capability. The game now feels like it has two sides rather than a Russian weapons catalogue. More Ukrainian additions would accelerate this.

---

### Colonel Kovacs (Military Analyst)

*Web research conducted for this review: Ukraine war new weapons 2025-2026 (United24 Media, GlobalSecurity, DefencePost); Ukraine FPV drone production results (RNBO.gov.ua); Oryx confirmed losses through 2025; Bohdana 2S22 production (Army Recognition, KMU.gov.ua); IRIS-T SLM deliveries (German MoD); FAB/UMPK glide bomb usage (Aviationist, EuroSD, National Interest); Magura V5/Sea Baby USV (USNI Proceedings, Kyiv Independent); Geran family variants (Forbes, Army Recognition); Su-57 combat operations (National Security Journal, Military Watch); Ukrainian Vampire/Baba Yaga drone (NV.ua, Forbes, Militarnyi); ATACMS confirmed strikes 2025.*

**Mission alignment since last report:** The five added Ukrainian cards represent the right instinct. All five are well-cited, factually sound, and educationally strong — particularly Neptune's Moskva narrative. However, the Ukrainian card set now reflects the state of the war in approximately mid-2022 to early 2023. The 2024–2026 period — when Ukraine's domestic arms industry, FPV drone production, and naval campaign fundamentally changed the conflict — is entirely absent. The Russian side similarly misses its most-used current weapons.

---

**Remaining factual issues:**

**1. Hardcoded log string (game.js line 528): "26 combat units deployed to each commander."**
MILITARY_ASSETS now contains 31 unique entries. Each player receives 31 cards, not 26. Fix: `\`${MILITARY_ASSETS.length} combat units deployed to each commander.\``

**2. Typo in WAR announcement (game.js line 746): "Colateral Clash!"**
Should be "Collateral Clash!" — one 'l' missing. Affects the most visible in-game text.

**3. T-80BVM speed discrepancy.**
Card specs state "speed: 70 km/h" but the game stat is `spd: 68`. Minor, but the specs box should match either the stat (change specs to "67–70 km/h cross-country") or the stat should be 70. These should agree.

**4. Bayraktar TB2 lore: "struck Russia's patrol boat Vasily Bykov near Snake Island."**
The Vasily Bykov was damaged but not sunk during the Snake Island operation — the ship escaped under smoke cover. Multiple open-source reports (including the Guardian and Reuters in May 2022) confirm the vessel was damaged but survived. Consider revising to "struck and damaged Russia's patrol boat Vasily Bykov during the Snake Island operation" to preserve accuracy.

**5. Patriot PAC-3 crew: "90 per battery" may overstate field deployments.**
The US Army's official Patriot unit requirement is approximately 90 soldiers per battery for a full complement. Ukrainian batteries operate with reduced crews (training has been abbreviated). The stat is technically sourced but may mislead on Ukrainian operational context. Consider adding "(reduced Ukrainian complement)" qualifier or adjusting the spec.

---

**Missing critical assets confirmed deployed in 2024–2026:**

| Asset | Side | Why It Matters Now |
|---|---|---|
| **FAB-500 / FAB-1500 / FAB-3000 + UMPK glide bomb kit** | RU | Russia's single most-used ground-attack weapon of 2024–2025. Thousands dropped monthly by Su-34s (already in the game). The Su-34 card describes "UMPK satellite-guided precision glide bombs" — the bomb itself is the key educational object and is absent. FAB-500 (500 kg), FAB-1500 (1,500 kg), and FAB-3000 (3,000 kg, first confirmed combat use June 2024) are three distinct educational opportunities. |
| **Baba Yaga / Vampire (heavy hexacopter drone)** | UA | Confirmed 2.5 million combat missions in 2025 (RNBO.gov.ua). This is the single highest-tempo Ukrainian weapon in the war as of 2025. Visually distinct from FPV Ghoul — six rotors, 15 kg payload, mine-laying and trench-bombing role. Its absence while two Russian-equivalent FPV types exist is a visible asymmetry. |
| **Bohdana 2S22 self-propelled howitzer** | UA | Ukraine's primary domestically-produced 155mm SPH. 154 units produced in 2024; 40 units/month by October 2024. At least three variants fielded (Bohdana 5.0, Bohdana-B towed, Bohdana 6.0 for international co-production). This is Ukraine's most significant defence-industrial achievement of the war and is entirely absent from a game claiming to teach Ukrainian assets. |
| **IRIS-T SLM** | UA | Germany's primary air defense contribution. ~10 systems delivered as of 2025; 99% claimed intercept rate per Ukrainian MoD March 2025. Ukraine ordered 18 additional systems in early 2026. Operationally distinct from Patriot (medium vs long range). |
| **Magura V5 / Sea Baby USV** | UA | Ukraine's uncrewed surface vehicle (USV) programme confirmed sinking of Russian landing craft Caesar Kunikov (February 2024), striking the Kerch Bridge approaches, and conducting strikes on Russian Black Sea Fleet ports. Sea Baby USV range exceeds 1,500 km. The USNI Proceedings (September 2025) called Magura "a Black Sea equaliser." The entire Ukrainian naval drone campaign — one of the war's most innovative developments — has no representation in the game. |
| **Geran-3 / Geran-4 (jet-powered variants)** | RU | Geran-3 uses a Chinese Telefly JT80 turbojet (confirmed by Forbes September 2025), reaching 300–370 km/h — nearly double the Geran-2's 185 km/h. Geran-4 reaches approximately 500 km/h. The current Geran-2 card covers the piston-engine variant. The jet successors are meaningfully different systems currently deployed against Ukraine. |
| **Su-57 Felon** | RU | Russia's only 5th-generation stealth fighter. Confirmed in active combat operations against Ukraine (National Security Journal, Military Watch, August 2025). Fires Kh-69 cruise missiles and R-77M BVR missiles from standoff range. Multi-aircraft formations confirmed as of August 2025. The game has the Su-34 (strike) but not the Su-57 (stealth/5th gen) — the most educationally significant Russian aircraft development. |
| **Orion MALE drone (Kronshtadt)** | RU | Russia's large MALE (medium-altitude, long-endurance) strike drone. Confirmed shot down in Kursk Oblast September 2025 by Ukrainian interceptor UAV; separately photographed with Kh-BPLA laser-guided missiles November 2025. The game has the Orlan-10 (small ISR) but not the Orion (large strike MALE) — analogous to having Bayraktar TB2 but not an Orlan. |
| **Kh-101 air-launched cruise missile** | RU | Russia's primary air-launched cruise missile for infrastructure strikes — fired over 1,000 times since 2022, making it statistically the most-used Russian long-range weapon of the war by volume. The game includes Kinzhal (aero-ballistic, rare, ~50 used in war) and Zircon (ship-launched, fewer than 100 used) but not the Kh-101 which has been fired *thousands* of times from Tu-95MS and Tu-160 bombers. This is the largest single factual gap in the Russian arsenal. |

**Secondary confirmed assets for future additions:**
- Vilkha-M guided MLRS (Ukraine, domestically-produced 300mm guided rockets, analogous to HIMARS GMLRS)
- NASAMS (Ukraine, Norwegian/US air defense, operational alongside Patriot and IRIS-T)
- Palianytsia (Ukraine, domestically-produced turbojet cruise missile, first confirmed combat August 2024)
- BM-21 Grad (BOTH, the single most-used rocket artillery system in the war on both sides, absent while Tornado-S is present)
- Leopard 2A6 (Ukraine, German-supplied, 192 delivered by October 2024, active combat confirmed)
- UMPB-5R jet-powered glide bomb (Russia, new 2025 weapon, 130–180 km range with self-powered flight)

**Ukrainian vs Russian balance:**
Current deck: 24 Russian-affiliated cards vs 5 Ukrainian + 2 BOTH. The previous report's goal of "50/50 split" is correct but the additions since then have only closed the gap to approximately 80/20. Adding the assets listed above would bring the deck to approximately 35 Ukrainian-side / 26 Russian-side from a pure count, approaching parity. Priority order for additions: Baba Yaga, Bohdana 2S22, Magura V5, IRIS-T, Kh-101, FAB-500+UMPK.

**Accurately handled — preserve these:**
- Kinzhal Patriot intercept (May 2023): correctly cited, verified event, well-narrated.
- Moskva sinking narrative in Neptune card: excellent, accurate, emotionally resonant.
- Geran-2 Alabuga production acknowledgment: correct post-update.
- Zircon first strikes against Ukraine "since late 2024": accurate timeline.
- TOS-1A rng:7 fix: appropriate for a 6 km system.
- T-64BV "designed on Ukrainian soil" framing: accurate (Kharkiv Morozov Design Bureau) and educationally valuable.

---

### UX Vera (UX Designer)

**The Ukrainian card additions improved educational hierarchy immediately.** The country bar system (amber for Russia, blue for Ukraine) is visually clear. Players can now track which side is winning in a way that means something geopolitically. Good.

**Remaining critical UX issues:**

**Selector mode touch affordance is still missing.** In `renderCard()`, when `isInteractive` is true, the only hint that stats are tappable is `.selector-active .card-stat-row:hover` (styles.css:775) — a hover pseudo-class that does not fire on touchscreens. On iPhone, a first-time user in Selector mode sees a static card with no call-to-action and no affordance. The "SELECT BATTLE ATTRIBUTE" banner (height 55px, font ~13px) is easy to miss. Fix: when `isInteractive === true`, add a pulsing left-border (`border-left: 2px solid hsl(var(--color-secondary))` cycling with a @keyframes opacity) to each `.card-stat-row`, and display `"▶ TAP A STAT TO BATTLE"` as a small caption beneath the stats list. This does not require changing game logic.

**Card description readability:**
- Font size at ≤600px: 0.62rem = approximately 9.9px. Apple HIG minimum for body text is 17pt; WCAG minimum for normal text AA compliance is 4.5:1 contrast at ≥16px. This fails both. Change to 0.75rem minimum at mobile breakpoint.
- The `description` field concatenates a plain-English summary with a technical detail paragraph, then clips to 3 lines (height: 48px on desktop, 34px on mobile). The plain-English sentence — the most accessible part — is often cut at exactly the interesting moment. Structural fix: split into `summary` (1 sentence, shown on card) and `detail` (full technical text, dossier only).

**Color contrast (verified):**
- `--color-text-dim: 220, 10%, 65%` on panel backgrounds at `220, 18%, 14%` produces approximately 3.2:1 contrast. WCAG AA requires 4.5:1 for normal text. Every description label and stat label in the game fails AA. Fix: raise `--color-text-dim` from 65% to 76% lightness (as recommended in the previous report — this was not implemented).
- Country bar: `font-size: 0.55rem` ≈ 8.8px. Below any accessible threshold. Change to 0.7rem minimum.

**4,500ms round-transition is still too long.** `prepareNextRound()` timeout at game.js:773 is 4,500ms with a hidden draw button and blank arena. On mobile this reads as a freeze. Users tap the blank area, the DEPLOY button is hidden, nothing responds. Change to 2,500ms. Add a `"PROCESSING..."` or animated ellipsis to the announcement banner during the gap.

**Silence during AI selection delay (Selector mode).**
When the AI's turn comes, there is a 1,000ms setTimeout before the AI's stat selection appears (game.js:645). The screen shows two face-up cards with no banner change. Casual users do not know if the game is running or waiting for them. Fix: change `elBattleAnnouncement.innerText` to `"RED FORCE SELECTING..."` before the setTimeout fires, then revert when resolved.

**Dead-end state: WAR with insufficient cards.**
The game calls `checkGameOver()` silently when WAR triggers with fewer than 4 cards per side. The modal text says only "Operational failure. Your combat deck was completely neutralized" — no mention of WAR running out of cards. A player who has been playing carefully and triggered WAR legitimately gets an opaque end state. Fix: set a flag before calling `checkGameOver()` and conditionally modify the modal description: "Your reserves were too depleted to sustain a War escalation."

**Glossary dossier discoverability is still the biggest missed opportunity.**
The CLASSIFIED DOSSIER tab — real photos, full specs, citations, plain-English analysis — is the best educational content in the game. Nothing during active play points to it. Every educational moment (card drawn, round resolved) is a missed opportunity to surface the dossier. Minimum fix: after each round, add to the combat log: a clickable entry `> Full dossier: [card.name] →` that switches to the Glossary tab and scrolls to that card.

**Player identity is never established.**
The player is called "PLAYER_COM_01" and the AI is "COM_TARGET_RED". No flag, no country label, no line of text saying "You are commanding Ukraine" or "You are playing as the alliance." The game has meaningful country distinctions on cards but does not ground the player's identity in one of them. Simple fix: on game start, randomly assign the player Ukraine or Russia flag + label, or let them choose. Display it in the panel header alongside the call-sign.

---

## Synthesized Action List

### Critical

1. **Fix "26 combat units" hardcoded string (game.js:528).** Change to dynamic: `` `${MILITARY_ASSETS.length} combat units deployed to each commander.` `` Current text is wrong by 5 cards and will drift again whenever cards are added.

2. **Fix "Colateral Clash!" typo (game.js:746).** Correct to "Collateral Clash!" — this is the most visible in-game text string and currently misspelled.

3. **Add Baba Yaga / Vampire heavy hexacopter drone (UA).** This weapon conducted 2.5 million documented combat missions in 2025 (source: RNBO.gov.ua, NV.ua, Forbes December 2025). It is the highest-tempo Ukrainian weapon currently deployed. Its absence while Russia has two FPV types (Ghoul and Fiber-Optic) is a factual asymmetry. Suggested stats: fp:70, def:12, spd:65, rng:42, tec:72, rank 5. Lore should contrast it with FPV Ghoul: heavier, slower, carries grenades and mines rather than shaped charges. Real photo: multiple widely available Ukraine Army press releases.

4. **Add FAB-500+UMPK glide bomb (RU).** The FAB-500 with UMPK kit is Russia's primary ground-attack weapon of 2024–2025, dropped thousands of times per month from Su-34s (already in the game). The Su-34 card describes using "UMPK satellite-guided precision glide bombs" but the bomb itself has no card. Suggested: rank 11–12, fp:92, def:5, spd:75, rng:72, tec:80. Lore should explain the UMPK conversion kit concept (cheap Cold War bomb + GPS kit = precise glide bomb) and its strategic effect reshaping front-line battles.

5. **Add Bohdana 2S22 howitzer (UA).** Ukraine's only domestically-produced 155mm self-propelled howitzer. 154 units in 2024; 40/month as of October 2024. Multiple combat-confirmed video records. Represents Ukrainian industrial resilience — the educational counterpart to Russia's TOS-1A. Suggested: rank 8, fp:78, def:45, spd:55, rng:72, tec:68.

6. **Fix `--color-text-dim` contrast (styles.css:13).** Change from `220, 10%, 65%` to `220, 10%, 76%`. This is the identical fix recommended in the previous report that was not implemented. WCAG AA failure on every card description label in the game. One CSS variable change.

7. **Add Selector mode touch affordance (game.js + styles.css).** When `isInteractive === true` in `renderCard()`, add class `needs-selection` to the stats list. Style `.needs-selection .card-stat-row { border-left: 2px solid hsl(var(--color-secondary)); }` with a pulsing opacity animation. Add a caption above the stats: `"▶ TAP A STAT TO BATTLE"` (hidden when not interactive). Without this, Selector mode is a dead-end for all first-time mobile users.

### High Priority

8. **Add Magura V5 / Sea Baby USV (UA, rank 9–10).** Ukraine's naval drone programme has confirmed sinkings of Russian warships, attacks on the Kerch bridge, and is widely documented. Nothing in the current deck teaches the Black Sea naval dimension of the war from the Ukrainian perspective. Lore should mention the Caesar Kunikov sinking (February 2024) and the fundamental shift this forced on the Russian Black Sea Fleet. Stats: fp:82, def:8, spd:70, rng:85, tec:88.

9. **Add Kh-101 air-launched cruise missile (RU, rank 12).** Russia's most-frequently-used long-range weapon — over 1,000 fired since 2022 from Tu-95MS and Tu-160 bombers. The game includes Kinzhal (rare, ~50 uses) and Zircon (fewer than 100 uses) but not the Kh-101 which represents the bulk of Russian infrastructure strikes. Its absence creates a false picture of Russian long-range strike capability.

10. **Add IRIS-T SLM (UA, rank 10).** Germany's primary Ukrainian air defense contribution. ~10 systems operational. 99% claimed intercept rate (Ukrainian MoD, March 2025). Ukraine ordered 18 additional systems 2026. Complement to Patriot (shorter range, faster response). Its addition would give Ukraine a second air defense card — appropriate given that air defense is the defining Ukrainian tactical problem of the war.

11. **Promote Patriot PAC-3 to rank 14 (ACE) or add a Ukrainian ACE.** The May 2023 Kinzhal intercept is the single most-documented military achievement of the war's air defense dimension. Currently Patriot (rank 11) loses to Kinzhal (rank 14) in Classic mode — the opposite of what happened in documented reality. Either: (a) promote Patriot to rank 14 as a Ukrainian ace counter-card, (b) add Storm Shadow (UA, rank 14) citing confirmed deep-strike use against Crimea and Russian logistics, or (c) add a second Kinzhal card at rank 13 and Patriot at rank 14. Ukraine having zero Ace cards is mechanically unfair and historically inaccurate.

12. **Add "How to Play" first-run modal.** Three screens: (1) "Draw a card, compare rank — higher wins" with Classic mode visual. (2) "In Selector mode, tap your best stat to challenge" with arrow pointing at stat rows. (3) "WAR: Tie = both sides bet 3 cards. Highest rank takes all." Dismiss on tap. Show once per session. Without this, Selector mode is consistently misunderstood by first-time players.

13. **Reduce `prepareNextRound` timeout from 4,500ms to 2,500ms** (game.js:773). Add `"STANDBY..."` animated text to the announcement banner during the gap. The 4,500ms freeze has been consistently identified as a mobile usability problem across both critic cycles.

14. **Fix Bayraktar TB2 lore: "struck Russia's patrol boat Vasily Bykov"** — the Vasily Bykov was damaged but escaped. Change to "struck and damaged" or reframe around the Snake Island narrative (forcing Russia to withdraw from Snake Island in June 2022 under drone threat) which is fully accurate.

15. **Establish player identity on game start.** Assign a country label and flag to "PLAYER_COM_01" based on the mode or a UI choice. Display it prominently. Players should know they're "COMMANDING UKRAINE" or "NEUTRAL COMMANDER" from the first frame.

16. **Add AI selection animation (Selector mode).** Set `elBattleAnnouncement.innerText = "RED FORCE SELECTING..."` before the `setTimeout` in `aiSelectStat()` (game.js:645). Clears the 1-second silent gap that reads as a hang.

17. **Replace greedy AI with weighted-random stat selection** (game.js:624–651). Highest stat 65%, second-highest stat 35%. One change to `aiSelectStat()`. Makes the game non-trivially adversarial after early rounds.

18. **Allow stat selection through WAR rounds** (game.js:686). Remove `|| isWarRound` from the classic-mode check in `resolveRound()`. One-line fix. WAR is the highest-stakes moment — the player should retain agency.

### Nice to Have

19. **Add Geran-3 (RU, rank 5–6).** Jet-powered variant using Chinese JT80 turbojet, speed ~300–370 km/h vs Geran-2's 185 km/h. Confirmed in operational use per Forbes September 2025. Distinct enough from Geran-2 to warrant its own card. Lore should contrast piston vs jet propulsion and explain why speed matters for interception probability.

20. **Add Su-57 Felon (RU, rank 13).** Russia's only 5th-generation stealth fighter, confirmed in active combat use against Ukraine (multi-aircraft formations reported August 2025). The game has the Su-34 (strike). The Su-57 (stealth fighter) is educationally important as Russia's most modern aircraft — and a test of whether stealth advantages materialise in a dense-AD environment.

21. **Add BM-21 Grad as a BOTH card (rank 3).** The most-used rocket artillery system in the conflict, by both sides, every month. The game has the Tornado-S (an upgrade) but not the basic Grad, which is more recognisable and more common. Educational value: teaches the baseline from which Tornado-S is the upgrade.

22. **Add combat-log dossier link after each round.** When a card is resolved, append to the combat log: `[${card.name}]` as a clickable span that switches to the Glossary tab. Surfaces the game's best educational content at peak player engagement.

23. **Add scale note to stats panel.** A single line beneath the stats list: `"Stats scaled 0–100 across all asset classes (not literal km or km/h)"`. This resolves the MT-LB (spd:61 = literal km/h) and BTR-82A (spd:80 = abstract 0–100) inconsistency that confuses informed players.

24. **Correct T-80BVM speed spec.** Stats show spd:68; specs box says "70 km/h". Align to the same value — either both 70 or both 68. A discrepancy between the stat and the listed spec creates doubt about whether either number is accurate.

25. **Add Oryx Confirmed badge to documented assets.** Ka-52, Pantsir-S1, T-72B3M, BTR-82A, Lancet-3, Bayraktar TB2, T-64BV, and HIMARS all have visual Oryx confirmations. A small badge + dossier citation adds credibility and connects the game to verifiable journalism. Educationally significant.
