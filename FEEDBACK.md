# Kombat-War Critic Report — July 2026

## Mission Alignment Check

Kombat-War's stated purpose is to teach people with no military background to recognise and understand real Ukrainian **and** Russian military assets. After a full read of `game.js`, `styles.css`, and `index.html`, that mission is structurally broken: of 13 unique assets in the 26-card deck, **zero are exclusively Ukrainian**. Ten are Russia-only, three carry a "BOTH" label (MT-LB, BMP-2M Berezhok, FPV Fiber-Optic Drone), and the page's own `<title>` still reads "Russian Military Asset Duel." A player who finishes a full session learns about T-90Ms, Ka-52s, and Kinzhals in depth, and nothing about HIMARS, Bayraktar TB2, Bohdana, Patriot PAC-3, or the Neptune missile that sank Russia's flagship. The visual production, the glossary dossier, and the lore writing energy are all genuinely strong. Fixing asset imbalance — and correcting the six factual errors identified below — is what converts this from a polished Russian-kit showcase into the educational tool it claims to be.

---

## Sub-Agent Reviews

### WarHammer (Strategy Gamer)

**Classic mode is a coin-flip machine.** The deck is 52 cards = two copies of each unique asset. Every player has the same rank distribution. The only variable is draw order. Classic mode is isomorphic to standard War and contains zero skill decisions. The mode name "CLASSIC RANK WAR (2 to ACE)" implies strategic content that does not exist. Any experienced gamer recognises this within two rounds and either switches modes or quits.

**Selector mode has one good decision and one exploitable AI.** The skill layer — choosing which stat to challenge — is genuinely interesting. The AI destroys it. `aiSelectStat()` (game.js lines 570–596) always picks maximum stat with no noise, no bluffing, no adaptation. After three rounds a player can infer the AI's move deterministically: know what you drew, know its strongest stat, always counter-select second-best. No tension remains. A single weighted-random tweak (pick highest stat 65%, second-highest 35%) would restore uncertainty at negligible dev cost.

**Dominant cards, named precisely:**
- **Zircon** (fp:100, spd:100, rng:95, tec:98, rank 14): wins any Firepower, Speed, Range, or Tech contest against the entire deck unconditionally. Its sole weakness is DEF:42 — trivially exploitable once known.
- **Kinzhal** (fp:98, spd:100, rng:98, tec:96, rank 14): functionally tied with Zircon. Same DEF:42 soft underbelly.
- **S-400** (rng:96, tec:95, def:94, rank 13): range king. Nothing in the deck exceeds rng:96.
- **T-90M** (def:90, rank 9): highest DEF in the deck. Counter-pick against Zircon/Kinzhal every time.

**Near-useless cards:**
- **Orlan-10** (rank 2, fp:25, def:20, spd:45): lowest rank, lowest FP and DEF in the deck. Best stat is rng:75, which loses to every rank 6+ card. Drawing two back-to-back in Classic mode produces an unrecoverable losing streak.
- **Supercam S350** (rank 2, fp:20): same problem.

**Stat scaling is internally incoherent:**
- `BTR-82A` (wheeled APC, real road speed 80 km/h) → spd:80. `Ka-52` (helicopter, real max 300 km/h) → also spd:80. An armoured truck and a helicopter share the same speed score. This means the stat isn't measuring speed — it's measuring something else with no label.
- `MT-LB` spd:61 matches the vehicle's exact km/h road speed. Every other card uses an abstract 0–100 scale. One card is using real units; all others are not. The scale is broken.
- `TOS-1A` rng:40 vs specs field "range: 6,000 m." By the deck's implicit scaling (Iskander-M rng:92 = 500 km, Geran-2 rng:90 = 2,000 km), rng:40 implies several hundred kilometres. The TOS-1A's actual maximum range is 6 km. This is a two-order-of-magnitude overstatement. Should be rng:5–8.

**WAR mechanic strips the only skill element at the highest stakes.** `resolveRound()` (line 631): `if (gameMode === 'classic' || isWarRound)` forces rank comparison during all WAR rounds, even in Selector mode. The player who was making clever stat choices all game has zero input during the most dramatic moment. Removing `|| isWarRound` from this condition is a one-line fix that makes the ruleset consistent.

**For depth without a rewrite:** (1) AI difficulty selector with greedy/mixed/random modes. (2) Allow stat selection through WAR rounds. (3) A type-advantage system (SAM cards beat aircraft cards on any contested stat) would create real strategic texture.

---

### Casual Cleo (First-Time Mobile Player)

I opened this cold on an iPhone. The screen showed "READY TO DEPLOY" and a button reading "DEPLOY ASSETS." I tapped it. Two cards appeared with bars and numbers. It said "Tactical Victory." I had no idea what I had done, how I won, or what just happened.

**What I didn't understand in the first 60 seconds:**
- "DEPLOY ASSETS" — why not "DRAW CARD"? What am I deploying?
- Why I won — the comparison is never stated out loud. Nothing says "your rank 7 beat their rank 4."
- "COLLATERAL CLASH: WAR!" with red flashing borders — I thought the app had errored. I was scared to tap "RESOLVE TIEBREAK."
- The AI's card showing "CLASSIFIED / RED FORCE ASSET" — I thought the image failed to load.
- What "TECH LEVEL" means as a stat on a tank. Or a submarine.
- "PLAYER_COM_01" vs "COM_TARGET_RED" — I spent 30 seconds trying to figure out which one I was.

**What clicked within two minutes:**
- Country flags. Russia's 🇷🇺 label immediately told me which side each card was on.
- Rarity glow. Legendary cards pulsing red made me excited when they appeared.
- The combat log at the bottom says "Victory: Ka-52 neutralized BMP-3" — helpful. But at 85px height with 0.63rem font I could barely read it on mobile.

**Best educational moment:** The CLASSIFIED DOSSIER tab. When I found the full dossier for the Geran-2 — real photo, plain-language explanation ("Russia bought thousands of these cheap Iranian-made drones"), real spec data — I felt genuinely informed. That is the game at its best. The problem is it requires knowing a second tab exists, and nothing during gameplay points there.

**What felt broken on mobile:**
- 4.5 seconds between rounds felt like the app froze. I kept tapping.
- In Selector mode, nothing told me I was supposed to tap a stat row. I waited for something to happen for 20 seconds. "SELECT BATTLE ATTRIBUTE" is easy to miss in the small banner.
- "INITIALIZE DECK" button top-right is tiny on iPhone. Hard to hit without zooming.
- The full description on each card is clamped to three lines. The educational plain-English sentence I actually wanted to read was cut off at exactly the interesting part.
- The side I'm playing is never stated as a plain sentence — "You are playing Ukraine" or "You are battling Russia's deck." The military call-signs obscure this entirely.

**One genuinely good thing:** Once I found stat-tapping in Selector mode, it was satisfying and educational. I actually read the stats before choosing. That hook works. It just needs a "TAP A STAT TO BATTLE" label anywhere on the card to be discoverable.

---

### Colonel Kovacs (Military Analyst)

*Before writing this review I searched for: Ukraine war new weapons 2025–2026 (KMU.gov.ua, DefencePost, Forbes); Oryx confirmed Russian/Ukrainian equipment losses through 2025; ATACMS, CAESAR, Bradley IFV confirmed combat use; IRIS-T, NASAMS, Patriot PAC-3 deployment status; Geran-2/Shahed-136 warhead specifications.*

**Critical factual errors (every one flagged):**

**1. Zero Ukrainian-exclusive assets — direct mission failure.**
The deck contains 10 Russian-only and 3 "BOTH" cards. No Ukraine-only card exists. The following assets are confirmed deployed, extensively documented by Oryx and open-source reporting, and directly relevant to understanding the conflict:

| Missing Asset | Side | Significance |
|---|---|---|
| **Bayraktar TB2** | UA | Most documented early-war Ukrainian strike drone; Oryx confirmed destruction of 400+ Russian vehicles including the patrol boat Vasily Bykov in April 2022 |
| **HIMARS M142** | UA | US-supplied MLRS; transformed Ukrainian counter-battery in summer 2022; enabled strikes on Russian ammunition depots at 80 km — beyond most Russian counter-battery range |
| **Neptune (Neptun) anti-ship missile** | UA | Ukrainian-designed; sank the Moskva, flagship of Russia's Black Sea Fleet, in April 2022 — the single most consequential Ukrainian strike of the war |
| **T-64BV** | UA | Ukraine's primary MBT; tens of thousands of photo/video documentations; the counterpart to Russia's T-72 series |
| **Patriot PAC-3** | UA | US/German-supplied SAM; intercepted Russian Kinzhal missiles in May 2023 — the Kinzhal card is already in the deck but its Ukrainian nemesis is absent |
| **Bohdana 2S22** | UA | Domestically designed 155mm self-propelled howitzer; Ukraine manufacturing 40 units/month as of October 2025 (confirmed KMU.gov.ua, Forbes); represents Ukraine's most significant defence-industrial achievement of the war |
| **CAESAR SPH** | UA | 120+ in active Ukrainian service as of 2025; France's primary contribution; most-documented Western artillery system at the front |
| **IRIS-T SLM** | UA | Germany's primary air defense contribution; ~99% reported intercept rate on Russian cruise missiles (Ukrainian Defence Ministry, March 2025) |
| **Storm Shadow / SCALP-EG** | UA | UK/French-supplied cruise missiles; Ukraine's first deep-strike capability; used to strike Crimea and Russian logistics nodes |

**2. Geran-2 warhead listed as "40 kg HE-Blast" (game.js:67).** Multiple open-source technical references (Wikipedia Shahed-136, Covert Shores, OSMP visual guide, GlobalMilitary.net) confirm the warhead as approximately **50 kg**. The 40 kg figure is incorrect by 25%.

**3. Geran-2 "Russia bought thousands of these cheap Iranian-made drones" is now an outdated fact.** Russia did import Shahed-136 variants in 2022–2023, but has since established domestic production at the Alabuga Special Economic Zone in Tatarstan, documented by RUSI, Forbes Ukraine, and ISW through 2024–2025. By mid-2025 the majority of Geran-2s used against Ukraine are domestically manufactured. Correct to: "Originally imported from Iran and now manufactured domestically at Russia's Alabuga facility, the Geran-2 has been fired by the thousands at Ukrainian cities and power infrastructure."

**4. Geran-2 NATO designation listed as "Shahed-136" (game.js:67).** Shahed-136 is the Iranian manufacturer's designation, not a NATO reporting name. Russia's derivative has no formally assigned NATO reporting name as of 2025. Change to: `nato: "N/A (Iranian Shahed-136 derivative)"`.

**5. TOS-1A RNG stat value inconsistent with real specifications (game.js:178).** `specs.range` correctly states "6,000 m" (6 km maximum). But the `rng` stat is **40/100**. By the deck's implicit scaling — where Iskander-M (500 km) = rng:92 and Geran-2 (2,000 km) = rng:90 — a value of 40 implies hundreds of kilometres. The TOS-1A's real range is 6 km. The stat should be **5–8**. The TOS-1A is correctly classified as a short-range area-denial weapon, not a long-range striker; the rng:40 misrepresents it.

**6. HTML `<title>` reads "Russian Military Asset Duel" (index.html:12).** The stated educational mission explicitly covers both belligerents. Change to "Kombat-War — Ukraine War Military Asset Duel" or equivalent.

**High-priority factual flags:**

7. **Yas-M (Kazan) naming and NATO designation.** The vessel K-561 Kazan is a **Yasen-M class (Project 885M)**. "Yas-M" is informal shorthand not used in IISS Military Balance, Jane's, or any naval registry. Rename to "Yasen-M (K-561 Kazan)." The `nato` field reads "Yasen / Graney" — this conflates the Project 885 (Severodvinsk, NATO: Graney) with the Project 885M (Kazan, NATO: Graney-M). Correct to "Graney-M."

8. **S-350 NATO designation "SA-28 unofficial" (game.js:188).** No authoritative source (IISS Military Balance 2024, Jane's Land-Based Air Defence, any official NATO publication) confirms this designation. It circulates in informal defence blogs. Change to: "No NATO reporting name assigned."

9. **Iskander-M range "500 km" (game.js:234).** This is Russia's INF Treaty declared figure, not the operational range. CSIS, RUSI, and Jane's assessments consistently place the 9M723's actual range at 700–800 km. Update `specs` to read: "500 km (declared); ~700–800 km (assessed)" — directly analogous to the good "Mach 10 claimed / Mach 4–5 Western estimate" treatment already applied to Kinzhal.

10. **FPV Fiber-Optic Drone typed and described as "quadcopter."** The card type reads "Tactically Modified Strike Drone" (accurate) but the description says "wire-guided quadcopter." Fiber-optic FPV drones in Ukraine are built on various frames — wings, conventional FPV frames, and occasionally quadcopters. "Quadcopter" is not the defining characteristic. Remove "quadcopter" from the description; retain "wire-guided" as the tactically significant feature.

11. **BMP-2M Berezhok "BOTH" classification.** The Berezhok combat module (with Kornet-EM ATGMs) is deployed at scale almost exclusively by Russia. Ukraine fields BMP-2 variants but not Berezhok-equipped ones in meaningful numbers. Reclassify as "RU" and update the lore to: "The Berezhok upgrade module was originally designed at Ukraine's Kyiv-based KBTM bureau — a Soviet-era design legacy now used by Russia against its inventors." This is both more accurate and more educational.

**Accurately handled — worth preserving:**
- Kinzhal Patriot intercept (May 2023) correctly cited with verified outcome.
- Zircon first strikes against Ukraine infrastructure "since late 2024" — accurate.
- TOS-1A HRW documentation framing is precise and appropriate; extend this model to other controversial assets.
- Ka-52 coaxial rotor agility description is technically accurate.
- T-90M Nakidka thermal coating is a real and documented system.

---

### UX Vera (UX Designer)

**Card information hierarchy serves gameplay over education.**
Current layout: name → country bar → photo → description (3-line clamp) → stats. In Selector mode, the stat rows are what the player must read quickly — they're at the bottom. The educational description is in the middle but truncated. Worse: the `description` field concatenates plain-English and technical jargon in that order, but `-webkit-line-clamp: 3` at `height: 48px` (styles.css:739) cuts the text precisely at the end of the accessible sentence. On most cards the third visible line is the start of "stabilized 30mm 2A72 autocannon and thermal targeting sights" — the jargon part. The plain-English value proposition disappears.

**Photo is too small on mobile.**
Card image height on ≤600px is 95px (styles.css:1493). This is the primary recognition-training element. At 95px, any dark military vehicle is visually indistinguishable from any other. Minimum 130px. The `filter: sepia(0.35) contrast(1.1) brightness(0.95)` "surveillance camera" treatment is aesthetically strong but the brightness(0.95) on top of already-compressed mobile JPEGs makes dark vehicle images illegible. Consider brightness(1.05) at mobile breakpoint.

**WCAG contrast failures (verified by HSL calculation):**
- `.card-description` and `.card-stat-label` use `hsl(220, 10%, 65%)` (--color-text-dim) against card backgrounds at approximately `hsl(220, 18%, 14%)`. Computed contrast ratio: ~3.2:1. **WCAG AA for small body text requires 4.5:1.** Every description line on every card in the game fails accessibility.
- Country bar font-size is `0.55rem` (~9px on 16px root). Below any WCAG threshold. Raise to minimum 0.7rem.
- Fix: raise `--color-text-dim` lightness from 65% to 75–78%, or fractionally darken card panel backgrounds.

**Selector mode interaction dead-end on mobile (highest-impact UX issue).**
`.selector-active .card-stat-row:hover` provides stat row highlighting — a pointer/mouse concept. Touchscreens have no hover state. A first-time mobile player in Selector mode sees their card with no tappable affordance, no call-to-action, nothing to indicate the rows are interactive. The "SELECT BATTLE ATTRIBUTE" banner is small and easily missed. Fix: when `isInteractive` is `true` in `renderCard()`, add a pulsing left-border or `[SELECT]` micro-label to each stat row, and an overlay prompt on the card: "TAP A STAT TO BATTLE."

**Dead-end states:**

1. **4,500ms transition looks like a freeze.** `prepareNextRound()` timeout (game.js:718) is fixed and uninterruptible. During the wait, the draw button is hidden and the arena is blank. Mobile users tap the blank screen expecting response and get silence. Add an animated ellipsis to the announcement banner, or show the draw button immediately post-round and let the 4,500ms only govern the card animation fade. Reduce to 2,500ms.

2. **WAR with insufficient cards ends silently.** The modal text says "Operational failure. Your combat deck was completely neutralized." A player who triggered WAR with low cards has no idea why the game ended mid-WAR. Add: "Your reserves were too depleted to sustain a War campaign."

3. **AI selection delay shows nothing.** In Selector mode when it's the AI's turn, a 1,000ms pause occurs before the stat highlights. No intermediate state is shown — the screen just sits still. Add "RED FORCE SELECTING..." to the announcement banner during this gap.

**Glossary dossier is the best feature in the game and is nearly invisible.**
The CLASSIFIED DOSSIER tab — with full-resolution photo, citation box, spec grid, and two-paragraph overview — is genuinely excellent educational design. It requires the player to know a second tab exists and choose to switch away from gameplay to find it. Zero in-game prompts surface it. After each round resolves, appending a combat-log line: `> Tap here to open ${card.name} dossier →` (hyperlink to glossary tab) would be the single highest-leverage improvement for educational engagement.

**Deck state loses meaning on mobile.**
The three-card pile visual (card-back-pile with .card-2 and .card-3 offsets) is hidden at ≤600px via `deck-slot { display: none }` (styles.css:1416). Only a number remains. The War mechanic stakes ("if both players run out of cards during War, the shorter deck loses") are invisible without the pile. Consider a thin horizontal strip at the top of each player panel showing remaining cards as a proportional fill bar.

---

## Synthesized Action List

### Critical

1. **Add a minimum of 6 Ukrainian-exclusive cards.** Required for the educational mission. Immediate candidates: Bayraktar TB2 (rank 5), HIMARS M142 (rank 9), Neptune anti-ship missile (rank 13), T-64BV (rank 7), Bohdana 2S22 howitzer (rank 7–8), and Patriot PAC-3 battery (rank 10–11). Each needs a real photograph, real published specifications, and plain-English lore. Target a 50/50 country split.

2. **Fix Geran-2 warhead** (`game.js:67`): Change `"40 kg HE-Blast"` to `"50 kg HE-Blast"` — consistent with confirmed specifications from multiple open-source references.

3. **Fix Geran-2 lore and NATO field** (`game.js:66–67`): Update lore to acknowledge Russian domestic production at Alabuga; change `nato: "Shahed-136"` to `nato: "N/A (Iranian Shahed-136 derivative)"`.

4. **Fix TOS-1A rng stat** (`game.js:178`): Change `rng: 40` to `rng: 6` (or 5–8). A 6 km system cannot share a range tier with systems measuring in the hundreds of kilometres by the same scale.

5. **Fix HTML title** (`index.html:12`): `"Kombat-War: Russian Military Asset Duel"` → `"Kombat-War — Ukraine War Military Asset Duel"`.

6. **Fix WCAG contrast failure**: Raise `--color-text-dim` from `220, 10%, 65%` to `220, 10%, 76%` in `styles.css:13`. This fixes AA compliance on card description and stat label text across all cards in all modes.

7. **Reclassify BMP-2M Berezhok from "BOTH" to "RU"** and correct the attribution (Berezhok = KBP Tula, not Kyiv KBTM).

### High Priority

8. **Add a rules tutorial on first play.** A one-modal flow: "Draw cards → compare ranks (Classic) or pick your best stat (Selector) → collect the opponent's card if you win → first to all 52 wins." Under 30 seconds. Currently impossible to understand without prior knowledge.

9. **Add Selector mode touch affordance** in `renderCard()`: when `isInteractive` is `true`, pulse each stat row border and show "TAP A STAT TO BATTLE" overlay text. Without this, Selector mode is a dead-end on mobile for first-time users.

10. **Replace greedy AI with weighted-random stat selection** (`game.js:569–596`): pick highest stat 65% of time, second-highest 35%. One-line change, eliminates trivial exploitability.

11. **Separate description into `summary` and `detail` fields.** Show `summary` (one plain-English sentence, max 15 words) in the 3-line clamp on the card face. Show full `detail` text in the Glossary dossier. This preserves card layout while ensuring accessible educational content is always visible.

12. **Reduce round-transition delay** (`game.js:718`): 4,500ms → 2,000ms, plus add animated ellipsis during the wait to signal activity rather than freeze.

13. **Fix Iskander-M range** (`game.js:234`): Add "(declared)" to the 500 km spec field and add parenthetical "(~700–800 km Western assessment)" — mirror the Kinzhal treatment already in the deck.

14. **Rename Yas-M (Kazan)** to "Yasen-M (K-561 Kazan)" and correct `nato` field from "Yasen / Graney" to "Graney-M."

15. **Remove S-350 unconfirmed NATO designation** (`game.js:188`): Change `nato: "Not formally designated (SA-28 unofficial)"` to `nato: "No NATO reporting name assigned"`.

16. **Add combat-log dossier link after each round.** Append to combat log: `> Open full dossier: [card.name] →` (switches to Glossary tab). This surfaces the game's best educational content at peak engagement.

17. **Increase mobile card image height** from 95px to 130px in the ≤600px media query (`styles.css:1493`). The photograph is the primary recognition-training tool.

18. **Allow stat selection through WAR rounds** (`game.js:631`): Remove `|| isWarRound` from the classic-mode check in `resolveRound()`. One-line fix; makes ruleset consistent.

### Nice to Have

19. **Add a "WAR Explained" first-trigger overlay.** On the first tie of each session, show dismissable text: "TIE — COLLATERAL CLASH! Both sides commit 3 face-down cards, then draw a battle card. Highest rank takes all 8. Stakes are high."

20. **Add Ukrainian Neptune anti-ship missile as a rank 13 card.** It sank the Moskva in April 2022. No single Ukrainian strike has more documentation, strategic significance, or dramatic story potential. Ideal centrepiece for teaching Ukrainian offensive capability.

21. **Restore deck pile visual on mobile** (`styles.css:1416`): Instead of `display: none`, replace with a minimal 3-card stacked strip at reduced size (height: 40px). The War mechanic's stakes are invisible without some representation of pile depth.

22. **AI difficulty selector in UI.** Add a third option to the `<select>` element: "ADAPTIVE" mode that mixes stat selection strategy. Label it clearly so it differentiates from Classic (rank) and standard Selector (stat) modes.

23. **Add "Oryx Confirmed" badge to assets with visual combat-loss documentation.** Ka-52, Pantsir-S1, T-72B3M, BTR-82A, and Lancet-3 all have Oryx entries. A small badge + dossier note connecting to real-world verification journalism adds significant educational texture.

24. **Show scale indicator on stat bars.** A small "/ 100" or colour-gradient legend beneath the stats panel would help Casual Cleo immediately understand that rng:88 is exceptional and fp:25 is nearly useless.
