# Kombat-War Critic Report — July 2026

## Mission Alignment Check

Kombat-War's stated mission is to teach people to recognise and understand real Ukrainian **and** Russian military assets. The game currently fails that mission on its most basic measure: of 13 unique cards in the deck, **zero are exclusively Ukrainian**. Three cards carry a "BOTH" label (MT-LB, BMP-2M Berezhok, FPV Fiber-Optic Drone), but the remaining ten are Russian-only, and the page's own HTML `<title>` still reads "Russian Military Asset Duel." A player who completes a full session learns about Russian equipment in depth and Ukrainian equipment not at all. Every other quality in the game — the photography approach, the lore energy, the visual polish — is genuinely strong; fixing the asset imbalance is the single change that would transform this from a handsome Russian-kit showcase into the educational tool it promises to be.

---

## Sub-Agent Reviews

### WarHammer (Strategy Gamer)

**Classic mode is a coin-flip simulator.** There are zero skill decisions — every round outcome is determined entirely by card-draw order. This is intentional (it mirrors the War card game), but the mode label "CLASSIC RANK WAR" implies strategic depth that does not exist. Any player who discovers this within two minutes will switch to Selector mode or close the app.

**Selector mode has one good decision and one broken AI.** The good decision: choosing which stat to challenge on. The broken AI: it always picks its highest stat (greedy maximum, `aiSelectStat()` lines 570–596). A player who observes this for three rounds can always counter-select the AI's second-best stat once they've memorised common card profiles. There is no bluffing, no uncertainty about AI intent, no tension.

**Dominant cards in Selector mode:**
- **Zircon** (fp:100, spd:100) — wins any firepower or speed contest unconditionally. Nothing in the deck beats 100.
- **Kinzhal** (fp:98, spd:100) — loses only to Zircon on fp:100. Otherwise invincible on speed.
- **S-400** (rng:96, tec:95, def:94) — range king; its rng:96 beats every other card. fp:92 also top-tier.
- **T-90M** (def:90) — highest defence in the deck. Near-invincible if opponent picks defence.

**Cards that are near-useless in either mode:**
- **Orlan-10** (rank 2, fp:25, def:20) — lowest rank, loses to everything. Even its best stat (rng:75) loses to most rank 6+ cards.
- **Supercam S350** (rank 2, fp:20) — same problem. Players who draw two of these back-to-back will conclude the game is broken.

**Stat scaling contradictions:**
- **BTR-82A** (wheeled APC, road speed 80 km/h) has spd:80. **Ka-52** attack helicopter (max speed 300 km/h) also has spd:80. An armoured truck should not share a speed score with a helicopter. The speed stat is comparing incompatible concepts and the numbers prove it.
- **MT-LB** has spd:61, which happens to match the vehicle's exact road speed in km/h. Every other speed stat appears to be on an abstract 1–100 scale. Mixing a literal km/h value with abstract scores breaks the stat's internal logic.
- **RANGE** for the Project 636.3 Kilo submarine (rng:88) presumably means missile strike range. **RANGE** for the Orlan-10 drone (rng:75) presumably means operational radius. These are not comparable quantities on the same scale; the label needs either disambiguation or a consistent normalisation note.

**WAR mechanic reverts to rank even in Selector mode** (`resolveRound()` line 631: `if (gameMode === 'classic' || isWarRound)`). This means the high-stakes tiebreak round strips away the only skill element. The player who was making smart choices all game suddenly has no input during the most dramatic moment. This feels like a rules loophole, not a feature.

**Suggestions for genuine depth (low dev cost):**
1. AI difficulty tiers: "greedy max" (current), "adaptive" (picks from top 2 stats randomly 70/30), "random" (pure chaos, easy mode).
2. Allow stat selection to carry through WAR rounds.
3. Add a "fog of war" variant where one stat per card is hidden until played.

---

### Casual Cleo (First-Time Mobile Player)

I opened this on my iPhone and the first thing I saw was "READY TO DEPLOY" and a button that said "DEPLOY ASSETS." I tapped it and two cards appeared with bars and numbers I didn't understand. It said "Tactical Victory" — I won something, but I have no idea how or why.

**What I didn't understand in the first 60 seconds:**
- What "DEPLOY ASSETS" means (why not "DRAW CARD"?)
- Why I won or lost — no plain explanation of the comparison
- What "COLLATERAL CLASH: WAR!" meant when it suddenly appeared with red flashing borders — I thought the app had an error
- Why my opponent's card showed "CLASSIFIED / RED FORCE ASSET" — I thought the image failed to load
- What TECH LEVEL means as a stat on a tank

**What did click within two minutes:**
- The country flags were immediately helpful — I could see Russia's flag on cards
- The rarity glow (legendary cards pulsed red) made me excited when they appeared
- The combat log at the bottom says things like "Victory: Ka-52 neutralized BMP-3" — helpful, but at 85px tall with tiny 0.63rem font I could barely read it on my phone

**Educational value moment:** When I found the CLASSIFIED DOSSIER tab, the full dossier for the Lancet-3 actually taught me something. The plain-English first paragraph plus the real photo is exactly what the game should feel like at all times. The problem is that during a match, the card description is clamped to three lines at ~10px font size and I only see the technical jargon sentence, not the plain-language part.

**Things that felt uncomfortable:**
- 4.5 seconds between rounds is too long on mobile — I kept tapping thinking it was frozen
- The "INITIALIZE DECK" button in the header is very small on a phone and hard to hit
- "PLAYER_COM_01" vs "COM_TARGET_RED" — I initially thought this was two AI players fighting each other
- In Selector mode, nothing told me I needed to **tap a stat row** to play — I waited for something to happen and nothing did
- The "BOTH" country label ("RUSSIA · UKRAINE") confused me — if both sides use the MT-LB, which side am I on in this game?

**One genuinely good thing:** Once I discovered stat-tapping in Selector mode, it felt satisfying and I actually read the stats before choosing. That educational hook works. But it needs signposting — a "TAP A STAT TO BATTLE" instruction, anything.

---

### Colonel Kovacs (Military Analyst)

I'll work through the deck systematically. The photography concept and visual production are strong; the factual errors and omissions are significant and must be corrected before this is used as an educational tool.

**Critical factual errors:**

1. **Zero Ukrainian-exclusive assets — mission failure.** Of 13 unique cards, zero are Ukraine-only. 10 are Russia-only and 3 are "BOTH." The following high-priority Ukrainian or Ukraine-supplied systems are completely absent:
   - **Bayraktar TB2** (Turkish-made; devastated Russian armour and the Moskva escort vessel Vasily Bykov in the early war; most documented Ukrainian drone by Oryx)
   - **HIMARS M142** (US-supplied; the single most strategically impactful Western delivery; enabled Ukraine to strike Russian ammunition depots at 80 km range)
   - **Neptune anti-ship missile** (Ukrainian-designed; sank the Moskva cruiser in April 2022 — the most consequential single strike of the entire conflict)
   - **T-64BV** (Ukraine's primary MBT; tens of thousands of photos exist)
   - **Patriot PAC-3** (US-supplied SAM; directly intercepted Kinzhal missiles in May 2023 — two cards already in the deck reference this event without Ukraine's defence system existing as a card)
   - **Storm Shadow/SCALP** (UK/French-supplied cruise missiles; gave Ukraine its first deep-strike capability)
   - **Javelin ATGM** (symbol of early Ukrainian anti-armour resistance; US-supplied)
   - **Su-27 Flanker** (Ukrainian Air Force interceptor; actively engaged in the conflict)

2. **Geran-2 lore: "Russia bought thousands of these cheap Iranian-made drones" is outdated.** Russia did import Shahed-136 variants in 2022–2023, but has since established domestic production at the Alabuga Special Economic Zone in Tatarstan (documented by RUSI, Forbes Ukraine, and ISW). By 2024–2025, most Geran-2s used against Ukraine are domestically manufactured. Correct to: "Originally imported from Iran and now manufactured by Russia domestically, the Geran-2 has been used by the thousands to attack Ukrainian power plants and cities at night."

3. **"Yas-M (Kazan)" is not a recognised military designation.** The vessel K-561 Kazan is of the **Yasen-M class (Project 885M)**. "Yas-M" is an informal truncation not used in Russian Navy documentation, IISS Military Balance, Jane's, or Oryx. The card name should be "Yasen-M (K-561 Kazan)." The NATO field currently says "Yasen / Graney" — this conflates the original Project 885 (Severodvinsk; NATO: Graney) with the 885M (Kazan; NATO: Graney-M). Correct to "Graney-M."

4. **BMP-2M Berezhok "BOTH" classification misleads students.** Ukraine fields BMP-2 variants extensively, but the **Berezhok combat module** (with Kornet-EM ATGMs) is fielded at scale almost exclusively by Russia. Ukrainian BMP-2s are not Berezhok-equipped in meaningful numbers. This card should be labelled "RU" with lore noting: "The Berezhok module was originally designed by Ukraine's Kyiv-based KBTM design bureau — one of many Soviet-era defence design legacies now used by Russia against its inventors." That is a more accurate and more educational framing.

5. **S-350 NATO designation "SA-28 unofficial" is unconfirmed.** As of 2025, NATO has not assigned a formal SA-XX reporting name to the S-350 Vityaz in any authoritative open-source document (IISS Military Balance, Jane's Land-Based Air Defence, NATO publicly available material). "SA-28" circulates in informal defence blogs but is not confirmed. The field should read: "No NATO reporting name assigned."

6. **Iskander-M range stated as "500 km."** The 500 km figure reflects INF Treaty declarations; Russia's self-reported compliance figure is not an accurate combat range. Western intelligence assessments (CSIS, RUSI, Jane's) consistently place the 9M723 missile's actual range at 700–800 km. The card should cite the assessed range or at minimum note the discrepancy: "500 km (declared); ~700–800 km (Western assessment)."

**High-priority factual flags:**

7. **Kinzhal and Zircon speed claims presented as fact.** The Kinzhal card states "Mach 10 claimed (Western est. Mach 4–5)" in specs — this is the correct treatment. However the description says "Russia claims it flies at Mach 10; Western analysts assess Mach 4–6 terminal speed" for Zircon but then assigns spd:100 — treating the maximum Russian claim as the game stat. The Zircon description is the model; apply the same "claimed vs assessed" framework consistently to both cards. The in-game stat can remain high, but the lore must not obscure the distinction between state claims and independent assessment.

8. **FPV Fiber-Optic Drone typed as "quadcopter" but described inconsistently.** The description says "fiber-optic quadcopter" and the technical description says "wire-guided quadcopter." Fiber-optic FPV drones in Ukraine are commonly fixed-wing or conventional FPV frames — not specifically quadcopters. Some are quadcopters; many are not. The type field "Wireless Strike Quadcopter" applies to the FPV Ghoul but the Fiber-Optic card's type should say "Wire-Guided FPV Attack Drone" and remove "quadcopter" from the description.

9. **TOS-1A lore omits the IHL context.** The card correctly notes HRW documentation of use in populated areas. This is the right approach and should be a template for how other controversial assets are described. The framing — "has been documented by Human Rights Watch" — is factually precise and educationally important. Keep this; extend it to other assets with documented war crimes allegations if applicable.

10. **MT-LB lore is accurate but shallow.** Both sides' MT-LB use is well documented. The lore mentions "improvised weapons" but does not specify the most commonly photographed variants: ZU-23-2 AA gun mounts and improvised Grad launcher frames. These specific modifications are visually distinctive and are exactly what a recognition-trained layperson needs to know.

**Accurately handled — acknowledge these:**
- Kinzhal Patriot intercept (May 2023) correctly cited.
- Zircon first use against Ukraine (late 2024) accurate.
- TOS-1A HRW documentation is appropriate.
- Ka-52 coaxial rotor explanation is correct.
- T-90M Nakidka thermal coating description is accurate.
- Geran-2 as Shahed-136 equivalent correctly identified (designation needs the production update above).

---

### UX Vera (UX Designer)

**Information hierarchy on the card is inverted.** The current card layout (name → country bar → photo → description → stats) places the action-critical stats at the bottom and the educational description in the middle. In Selector mode, the player's job is to read stats and make a choice quickly — the truncated three-line description block is a dead zone in this context. More importantly, the description visible on the card (clamped by `-webkit-line-clamp: 3`) shows the technical military jargon sentence first, not the plain-English sentence, because the `description` field concatenates them in that order. Players never see the accessible language.

**Card image is too small on mobile.** The photo is 95px tall at ≤600px — reduced from 110px desktop. The educational photo is the core recognition-training tool. At 95px, any dark military vehicle looks indistinguishable. Minimum should be 130px. The `filter: sepia(0.35) contrast(1.1) brightness(0.95)` applied to images creates a compelling "surveillance camera" aesthetic, but the very low brightness (0.95 on an already-dark source image) darkens already-compressed mobile images further. Consider raising to `brightness(1.05)` on mobile.

**WCAG contrast failures:**

- `.card-description` uses `hsl(var(--color-text-dim))` — defined as `220, 10%, 65%` lightness — against card background at approximately `220, 18%, 14%` lightness. Computed contrast ratio: ~3.2:1. **WCAG AA requires 4.5:1 for body text at this size.** Every card description in the game fails accessibility on contrast.
- `.card-stat-label` uses the same dim colour token. Contrast ratio ~3.5:1 at 0.7rem. Borderline fail. Raise `--color-text-dim` lightness to 75–78% or darken the card background panel.
- Country bar text (`font-size: 0.55rem`, ~9px on most devices) is below any reasonable accessibility threshold. Raise to 0.7rem minimum.

**Selector mode interaction dead-end on mobile.** The `.selector-active .card-stat-row:hover` rule highlights stat rows on hover — a pointer/mouse concept. On touchscreens, there is no pre-tap visual affordance that these rows are interactive. A first-time mobile player in Selector mode sees their card with no indication they should tap a stat. The announcement banner says "SELECT BATTLE ATTRIBUTE" but nothing on the card itself signals tappability. Fix: add a pulsing left border or `[SELECT]` micro-label to each stat row when `isInteractive` is true.

**Dead-end states:**

1. **WAR with insufficient cards**: If the game ends via insufficient-card war resolution, the modal says "Operational failure" with no explanation of why the game ended abnormally. Add one sentence: "Game ended — insufficient reserve assets to sustain a War round."

2. **4,500ms round transition looks like a freeze.** The `prepareNextRound()` timer is fixed and uninterruptible. On mobile, this looks like an app hang. Add a tap-to-continue handler during the timeout, or a simple ellipsis animation in the announcement banner during the wait.

3. **AI stat selection delay**: In Selector mode when it's the AI's turn, there is a 1,000ms pause before the selected stat highlights — but no intermediary state is communicated. Add "RED FORCE SELECTING…" to the announcement banner during this delay.

**Glossary tab is the best educational element in the game and is almost invisible.** The CLASSIFIED DOSSIER tab with full dossier layout, citation, spec grid, and plain-language overview is excellent. It requires knowing the second tab exists. No prompt, notification, or affordance points to it during gameplay. After each round resolves, add a single line to the combat log: `Tap here to open ${card.name} dossier →` (or equivalent). This is the highest-leverage UX change for educational engagement.

**Deck-state clarity.** The deck counter shows a number but provides no sense of game progress. Even a simple visual shrinkage of the card-back pile (it shows three fanned cards at the start but never updates to show one or two when cards are low) would help players understand game pacing.

---

## Synthesized Action List

### Critical

1. **Add Ukrainian-exclusive cards — minimum 4 required immediately.** Bayraktar TB2, HIMARS M142, Neptune anti-ship missile, and T-64BV are the priority. Each needs a real photograph, real published specifications, and plain-English lore. Change the HTML `<title>` from "Russian Military Asset Duel" to "Ukraine–Russia Military Asset Duel." Aim for a 50/50 country split across the full deck.

2. **Correct the Geran-2 lore to reflect domestic Russian production.** Remove "Russia bought thousands of these cheap Iranian-made drones" and replace with text that acknowledges the Iranian origin and the subsequent Alabuga domestic manufacturing program. Inaccurate lore on the most-used drone of the conflict directly undermines credibility.

3. **Rename "Yas-M (Kazan)" to "Yasen-M (K-561 Kazan)."** Update `nato` field from "Yasen / Graney" to "Graney-M." This is the correct class designation (Project 885M vs 885). A factual error in a card's very name fails the educational mission on first glance.

4. **Reclassify BMP-2M Berezhok from "BOTH" to "RU."** The Berezhok combat module is not fielded at scale by Ukraine. Update lore to note the Ukrainian design origin as an educational detail, not a field-use indicator.

5. **Remove or correct the S-350 NATO designation "SA-28 unofficial."** No authoritative source confirms this designation. Replace with "No NATO reporting name assigned." Citing an unconfirmed designation teaches learners incorrect information.

6. **Correct Iskander-M range from 500 km to "~700–800 km (Western assessment)."** Citing the INF-declared figure as the operational range misleads students of the conflict. Add "(500 km declared; ~700–800 km assessed)" in the specs field.

7. **Fix WCAG contrast failure on card description and stat label text.** `--color-text-dim` at 65% lightness against dark backgrounds fails WCAG AA for small text. Raise to 75–78% lightness or slightly darken card panel backgrounds. This affects every card in every round.

### High Priority

8. **Add a one-sentence plain-English summary field per card, displayed on the card face.** The current `description` field mixes plain-English and technical jargon, with plain English first — but the 3-line clamp often cuts to the jargon. Add a separate `summary` string (one sentence, jargon-free) and display it in the clamped area. Reserve the full technical description for the Glossary dossier. This is the highest-leverage educational change to gameplay.

9. **Add a Selector mode interaction affordance on mobile.** When `isInteractive` is true, add a pulsing border on the stat rows and an overlay text "TAP A STAT TO BATTLE" on the card. Remove the affordance once a stat is tapped. Without this, mobile Selector mode is a dead-end for first-time players.

10. **Replace greedy-max AI with a mixed-strategy selector.** Change `aiSelectStat()` to pick the highest stat 65% of the time and the second-highest 35% of the time. This single-line change (or equivalent weighted random) creates genuine uncertainty without any UI or design changes.

11. **Add a "WAR Explained" overlay on first WAR trigger per session.** Show a dismissable tooltip on the first tie of each session: "TIE! Both commanders ante 3 cards face-down, then battle with the 4th. Highest rank wins all 8 cards." Currently there is no in-game explanation of the WAR mechanic.

12. **Increase mobile card image height from 95px to 130px.** The photo is the primary recognition-training tool. At 95px, assets are unrecognisable. Raise to 130px minimum in the ≤600px media query.

13. **Add a "learn more" link in combat log after each round.** After round resolution, append to the combat log: `Tap to open ${winnerCard.name} dossier →` (switching to Glossary tab). This surfaces the best educational content in the game at the highest-engagement moment.

14. **Reduce round-transition delay to 2,500ms on mobile, with a visible wait indicator.** 4,500ms on mobile looks like a freeze. Add an animated ellipsis in the announcement banner during the wait, and/or add a tap-to-continue handler that fires `prepareNextRound()` early.

15. **Fix BTR-82A speed stat (spd:80).** A wheeled APC should not share a speed score with the Ka-52 helicopter. Normalise speed to a consistent scale within asset category, or reframe the stat as "tactical mobility" with a note explaining the scale. At minimum, Ka-52 spd should be substantially higher than BTR-82A spd.

### Nice to Have

16. **Add Neptune anti-ship missile as a Ukrainian rank 13–14 card.** It sank the Moskva, flagship of Russia's Black Sea Fleet, in April 2022. No single Ukrainian strike has a more documented or dramatic story. Specs are publicly available. This is the ideal centrepiece card for teaching Ukrainian offensive capability.

17. **Add Bayraktar TB2 as a Ukrainian rank 7–8 card.** Most internationally recognisable Ukrainian asset. Extensive open-source photography. Documented Oryx loss data for Russian assets it destroyed. Good educational anchor for the early war period.

18. **Surface the Glossary tab with a first-launch prompt.** On a user's first game session, show a one-time dismissable banner below the battle arena: "After each round, visit CLASSIFIED DOSSIER to learn more about these real assets." This single prompt would dramatically increase educational engagement.

19. **Allow stat selection during WAR rounds in Selector mode.** The current code forces rank comparison during WAR (`if (gameMode === 'classic' || isWarRound)`). The highest-stakes round in Selector mode currently strips away the only skill element. Removing the `|| isWarRound` condition is a one-line fix that makes the ruleset consistent.

20. **Add an "Oryx Confirmed" badge to assets with documented combat losses.** The Oryx tracker documents photographic evidence of destroyed equipment. Ka-52, Pantsir-S1, T-72B3M, BTR-82A, and Lancet-3 all have Oryx entries. A small badge and a dossier note linking to the tracker would connect the game to real-world verification journalism and add significant educational depth.
