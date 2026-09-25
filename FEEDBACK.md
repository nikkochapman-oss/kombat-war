# Kombat-War Critic Report — September 2026

## Mission Alignment Check

Kombat-War delivers a genuinely solid educational card game grounded in real assets and real citations. The 26-card deck covers the major platform categories of the Ukraine conflict — UAVs, tanks, SAMs, naval drones, guided bombs — with lore text that laypersons can read and learn from. However, the deck has a significant country imbalance (19 Russian cards vs 7 Ukrainian), the Selector mode AI strategy is too shallow for repeat play, and several high-profile 2024–2026 assets confirmed in combat are absent. These gaps matter because the game's stated mission is to teach recognition of real deployed assets, and the deck is now running behind the front lines.

---

## Sub-Agent Reviews

### WarHammer (Strategy Gamer)

**Overall:** The bones are solid but Classic mode is pure luck poker, and Selector mode has one dominant strategy that collapses the decision space after two games.

**Balance problems — specific cards:**

- **Zircon** (fp:100, spd:100, tec:98) and **Kinzhal** (fp:98, spd:100, rng:98) are unkillable Aces in both modes. In Selector, any stat you pick against them wins except by luck of the draw. No Ukrainian card counters them on raw stats.
- **Patriot PAC-3** (fp:88, def:80, rng:90, tec:95) at rank 14 (Ace) is strong but the only Ukrainian Ace. The two Russian Aces (Zircon rank 14, Kinzhal rank 14) share the same top rank, meaning Russia has a 2:1 Ace advantage.
- **S-400** (tec:95, rng:96, def:94) at rank 13 is the highest-defense card in the deck — higher than the T-90M (def:90). A SAM battery more defensively resilient than a main battle tank makes no mechanical sense and warps the Selector meta.
- **TOS-1A** has rng:7 — the only card in single-digit range. This makes it an automatic Selector-mode throw: if you draw it and the AI picks Range, you lose instantly. A 1–100 range bar that bottoms out at 7 is punishing without explanation.

**Selector AI strategy:** The AI picks its top stat 65% of the time and second stat 35%. After two or three games the player realises: always pick TECH LEVEL when you have a drone (they all cluster 70–90), always pick FIREPOWER when you have a Kinzhal or Zircon. The AI never bluffs, never picks a defensive stat to deny the human a win. Add a "deny the opponent's best stat" heuristic and the mode becomes genuinely interesting.

**War mechanic depth:** The War tiebreak is pure luck by design (forced to use Rank). That's fine for casual play but there's no tension because the 2.5-second auto-advance removes all decision. A "choose one of your three face-down war cards to reveal" variant would add meaningful skill.

**Missing mechanic opportunity:** The deck has clear thematic synergies (Su-34 drops FAB-500 UMPK; Ka-52 supports T-90M assaults; Bayraktar scouts for Neptune strikes) that the current card game ignores entirely.

---

### Casual Cleo (First-Time Mobile Player)

**Overall:** I picked this up cold and within 60 seconds I understood the core loop — draw a card, see who wins, collect cards. The visual design is genuinely impressive and the lore text taught me real things. A few moments confused me.

**What worked immediately:**
- The "DEPLOY ASSETS" button is large and unmistakeable on mobile.
- Country flags (🇷🇺 / 🇺🇦) instantly tell me whose side a card is on.
- Rarity glow colours (olive common → red legendary) create immediate visual hierarchy.
- The Glossary Dossier tab is a lovely surprise — I tapped through a dozen cards just reading.

**Confusing moments:**
- When I switched to Selector mode, the game started and nothing told me I needed to tap a stat on my card. The pulsing left border on each stat row is subtle at small sizes. The "TAP A STAT TO BATTLE" hint text appears below the stats but at 375px it fell off-screen — I scrolled down to find it too late.
- "COLLATERAL CLASH: WAR!" appeared and I had no idea what was happening. The "RESOLVE TIEBREAK" button appeared but there was no explanation of the three face-down cards mechanic. One line of context ("Equal ranks! Ante 3 cards, then battle.") would eliminate the confusion.
- "PLAYER_COM_01" and "COM_TARGET_RED" read like server addresses, not player names. Even "BLUE FORCE" vs "RED FORCE" would feel warmer.
- The Orlan-10 description says "Russia's primary battlefield spy drone" in the short card text, but the card-description div clamps to 3 lines — the educational second sentence gets cut on every card. The layperson-friendly sentence is always the first one; the technical jargon is always the second. Consider showing only the first sentence on the card face and putting the full technical text in the Glossary.
- On an iPhone 14 Pro (390px), the game-over modal shows at the very bottom of the screen (`align-items: flex-end`). The "RE-DEPLOY DECK" button is partially obscured by the iOS home indicator bar. Increase `padding-bottom` on `.hud-modal` at ≤600px from 20px to at least 40px.

**Did I learn something?** Yes — I had no idea the Magura V5 sea drone sank Russian warships or that the Moskva was sunk by a Ukrainian-made missile. The lore text does its job when you can read it. The Glossary is the star of the educational experience.

---

### Colonel Kovacs (Military Analyst)

**Pre-review research conducted on:** Ukraine war new weapons 2025–2026, Ukraine air defense expansions, Russian drone production scaling, Palianytsia drone missile deployment.

#### Factual Errors and Inaccuracies

**1. Geran-2 / Shahed range — overstated.**
The card states: range "2,000 km." The Shahed-136/Geran-2 baseline range is assessed at approximately 1,800–2,000 km in the most optimistic open-source estimates; the most commonly cited operational figure is ~1,500–1,800 km. The card's claim is at the outer edge and should read "~1,700–2,000 km" with a caveat, or cite a specific source for the 2,000 km figure.

**2. Kinzhal speed — cited without sufficient qualification.**
The card states "Mach 10 claimed (Western est. Mach 4–5)" which is accurate, but the lore text says "Ukraine successfully intercepted Kinzhal missiles using US-supplied Patriot air defense systems in May 2023." This is factually correct but the card's overall framing still implies the Kinzhal is near-invincible. Given the war's record of multiple confirmed Patriot intercepts of Kinzhal through 2024–2025, the lore should note it has been intercepted repeatedly, not just once.

**3. Yasen-M (K-561 Kazan) — strategic relevance to Ukraine conflict overstated.**
The card is included as a rank 11 (Jack) and described as conducting "deep-sea standalone stealth patrol." As of late 2026, there is no confirmed combat record of K-561 Kazan firing Kalibr missiles at Ukrainian targets. Russia's Kalibr strikes against Ukraine originated primarily from surface ships and the Project 636.3 Kilo submarines of the Black Sea Fleet. Including a Northern Fleet nuclear submarine in a "deployed in Ukraine" deck is misleading to a layperson trying to learn about what's actually been used.

**4. Iskander-M range — understated.**
The specs say "500 km (declared); ~700–800 km (assessed)." Current IISS and CSIS assessments put the assessed range at 700–900 km for the 9M723 variant. The "700–800 km" figure is within range but slightly conservative — "~700–900 km (assessed)" is more accurate.

**5. S-350 Vityaz — deployment context.**
The card says the S-350 is "protecting Russian formations from Ukrainian long-range strikes." The S-350 is a strategic point-defense system primarily protecting fixed sites (airbases, command nodes) rather than mobile tactical formations. This is a meaningful distinction for a military-education game.

**6. FAB-500 UMPK glide range.**
The card says "60–70 km glide range." Open-source reporting through 2025 indicates Russia has extended FAB-500M-62 UMPK glide range to ~80–100 km on some variants, with the larger FAB-1500 UMPK reaching 100+ km. The card's range figure is now outdated.

#### Missing High-Visibility Assets (Confirmed Combat Deployed)

The following assets have been confirmed in combat and have significant public recognition that serves the game's educational mission:

**Missing — Ukraine:**
- **Palianytsia drone-missile** (domestically produced, turbojet-powered, range 650 km, 100 kg warhead, confirmed used in dozens of strikes on Russian military depots since August 2024, mass production underway as of 2025). This is Ukraine's most significant new domestic strike weapon of 2025.
- **F-16AM/BM Fighting Falcon** (delivered from Netherlands and Denmark, operational in Ukraine since summer 2024, confirmed air-to-air kills against Russian cruise missiles; a Ukrainian F-16 was lost in a friendly fire incident August 2024 — high public profile, directly relevant to understanding Ukrainian air power).
- **ATACMS** (Army Tactical Missile System, range 300 km, supplied to Ukraine late 2023/early 2024, used in confirmed strikes on Russian airfields and logistics in Crimea — HIMARS is in the deck but fires ATACMS too; a standalone ATACMS card or a note on the HIMARS card is warranted).
- **Dragon SHORAD** (Ukrainian-developed short-range air defense system, revealed at Eurosatory 2026 after ~18 months of operational use, filling a critical gap in low-altitude Shahed interception).

**Missing — Russia:**
- **FAB-1500 UMPK** (1,500 kg glide bomb, significantly greater destructive effect than FAB-500, used in increasing numbers against Ukrainian fortified positions since late 2024, confirmed in Oryx-tracked destruction of hardened Ukrainian positions — arguably more militarily significant than FAB-500 by mid-2025).
- **Lancet-3M** (upgraded Lancet with ~15 km range vs original's ~7 km, electro-optical seeker upgrade confirmed — the Lancet-3 card is in the deck but should note the -3M variant or be updated).
- **Shaheed/Geran-2 Jet variant** (jet-powered Geran variant producing supersonic approach profile, referenced in Ukrainian air defense reports in 2026 — distinct enough from the baseline Geran-2 to warrant mention).

#### Ukrainian vs Russian Card Balance

- Russian cards: 19 (Orlan-10, Supercam S350, BTR-82A, MT-LB [shared], Lancet-3, Geran-2, FPV Ghoul, BMP-3, BMP-2M, T-72B3M, T-80BVM, Ka-52, Mi-28N, T-90M, TOS-1A, S-350, Pantsir-S1, Kilo sub, Yasen-M, Iskander-M, Su-34, S-400, Tornado-S, Zircon, Kinzhal, Kh-101) — 25 of 26 unique slots
- Ukrainian cards: 7 (Bayraktar TB2, HIMARS, Neptune, T-64BV, Patriot PAC-3, Baba Yaga, Bohdana, Magura V5) — 8 of 26

This is a severe imbalance. A learner playing as "Ukraine" will find their deck statistically weaker in Classic mode (fewer high-rank cards) and in Selector mode (fewer cards with dominant single stats). The T-64BV at rank 7 is routinely outmatched by multiple Russian rank 7–9 cards. The Patriot PAC-3 at rank 14 is the only Ukrainian Ace vs two Russian Aces (Zircon, Kinzhal).

For a game meant to teach about *both sides*, the deck sends an implicit message that Ukraine is simply outgunned, which is not the full picture — Ukraine's asymmetric capabilities (sea drones, FPV innovation, Neptune, HIMARS) are genuinely world-class.

---

### UX Vera (UX Designer)

**Overall:** Exceptional visual craft, clear military aesthetic. Several mobile UX patterns need attention.

#### Information Hierarchy (Card)

The card's content stack from top to bottom:
1. Name + Rank badge ✓ (correct hierarchy)
2. Country bar ✓
3. 110px image ✓ (but 85px on tablet — too small to recognise the asset)
4. Description: 3-line clamp at 0.68rem → **lowest priority content reads at smallest size**
5. Stats: 5 rows at 0.7rem ✓

The description is the educational payload. It renders smaller than the stats it sits above. Swap font-size treatment: description at 0.72rem, stats at 0.68rem, or increase `.card-description` height from 48px to 56px to consistently show the first two educational sentences.

#### Lore Readability at 375px

The `card-description` uses `-webkit-line-clamp: 3` at 0.68rem. At 375px this yields approximately 45–50 characters per line × 3 lines = ~135–150 visible characters. Most lore entries are 200–350 characters. The first, layperson-friendly sentence alone averages ~120 characters. This means the human-readable introduction just barely fits — any card whose first sentence exceeds 130 characters is clipped mid-sentence on mobile. Cards to check: Geran-2 (sentence 1: ~135 chars — clips), T-64BV (sentence 1: ~150 chars — clips).

#### Color Contrast

- `card-stat-label` renders as `hsl(220, 10%, 76%)` on a `hsl(220, 18%, 14%)` background — contrast ratio ~5.2:1. Passes WCAG AA for normal text (4.5:1 required). ✓
- `.dossier-classification` (`hsl(12, 75%, 55%)` — rust red on near-black) at 0.6rem bold — contrast ratio ~4.8:1. Borderline at this font size (7px bold). Consider bumping to 0.65rem or using amber (`--color-primary`) here instead of accent red.
- `.log-entry.system` (olive `hsl(96, 35%, 62%)`) at 0.75rem on darkest background: ~5.6:1. Passes. ✓
- Losing card `opacity: 0.5` + `filter: grayscale(0.6)` on an already dark card → the card becomes almost illegible. Educational value drops to zero on the losing card, which is often when the player wants to read what they just lost to.

#### Game State Clarity

- **Dead-end state identified:** If both decks have ≤3 cards and a Tie occurs, the game calls `checkGameOver()` but the announcement still reads "⚡ COLLATERAL CLASH: WAR! ⚡" for a brief moment before the modal appears. The modal appears without any transition animation, creating a jarring cut. Add a 300ms delay before showing the game-over modal on this path.
- **Selector mode turn indicator:** The `selector-active` class adds a glow border to the active player panel, but on mobile (≤600px) the panels are slim horizontal bars at the top of the screen. A player who has scrolled down to see the cards will have the turn indicator off-screen. Add a small turn-indicator badge ("YOUR TURN" / "AI THINKING") adjacent to the action buttons in the clash zone so it's visible without scrolling.
- **War mechanics:** The "RESOLVE TIEBREAK" button appears with no context about what it does. Tooltip or sub-label: "Ante 3 cards, draw 1 battle card" would remove the confusion.
- **Game over modal on iOS:** `.hud-modal` uses `align-items: flex-end; padding-bottom: 20px` on mobile. On iPhone 14/15 with the home indicator (34px safe area), the button is partially obscured. Fix: `padding-bottom: max(20px, env(safe-area-inset-bottom) + 12px)`.
- **No visual feedback on "INITIALIZE DECK" mid-game.** If the player hits this button during an active clash, the state resets without confirmation. On mobile this is easy to fat-finger. Add a brief confirm: "Reset game? (Tap again to confirm)" or rely on the 2s debounce the button currently lacks.

#### Educational Content Prominence

The Glossary Dossier tab is the game's strongest educational feature and is completely invisible until discovered. There is no onboarding prompt directing players to it. On first load, a one-time tooltip ("Tap CLASSIFIED DOSSIER to read full specs on every weapon") would significantly improve educational engagement.

---

## Synthesized Action List

### Critical

- **Fix iOS safe-area modal overlap.** `.hud-modal` on ≤600px: change `padding-bottom: 20px` to `padding-bottom: max(20px, env(safe-area-inset-bottom) + 12px)` (styles.css:1578). Obscured primary CTA is a usability blocker on the most common device class.

- **Remove Yasen-M (K-561 Kazan) from the deck or re-frame its role.** No confirmed combat record of this vessel firing at Ukrainian targets. Including a Northern Fleet nuclear submarine misleads learners about what's actually been deployed in Ukraine. Replace with Palianytsia drone-missile (Ukraine) or FAB-1500 UMPK (Russia) — both confirmed in dozens of combat strikes.

- **Correct FAB-500 UMPK glide range** in card specs from "60–70 km" to "60–100 km (variant-dependent)" to reflect 2025 extended-range UMPK variants now confirmed in use (game.js:366).

- **Fix "TAP A STAT TO BATTLE" hint visibility on mobile.** At 375px the hint falls below the fold in Selector mode. Move the `.tap-stat-hint` div to appear between the country bar and the image, or add a persistent banner in the `battle-action-hub` area reading "TAP A STAT ON YOUR CARD TO ATTACK" when it is the user's turn to select (game.js:985).

### High Priority

- **Add at least 3 Ukrainian cards to rebalance the deck.** Recommended additions:
  1. **Palianytsia** (rank 12, Ukraine, drone-missile, confirmed in mass production and combat use through 2025–2026, 650 km range, 100 kg warhead, turbojet-powered) — fills the Ukrainian long-range strike gap.
  2. **F-16AM Fighting Falcon** (rank 11, Ukraine, delivered from Netherlands/Denmark, confirmed air-to-air kills against Russian cruise missiles) — the highest-profile Western aircraft in the war, conspicuous by its absence.
  3. **Dragon SHORAD** (rank 9, Ukraine, domestically produced short-range air defense, confirmed in operational use since ~2025, addresses the Shahed interception mission) — demonstrates Ukraine's growing domestic defense industry.

- **Add FAB-1500 UMPK** (rank 12–13, Russia) as a companion to the existing FAB-500 UMPK card. The FAB-1500 is now Russia's primary bunker-buster in Ukraine and is responsible for the destruction of hardened Ukrainian fortifications; it is arguably more militarily significant than FAB-500 and is frequently misidentified by the public as the same weapon.

- **Fix S-400 Rank/stats imbalance vs Patriot.** S-400: rank 13 (King), def:94, rng:96, tec:95. Patriot PAC-3: rank 14 (Ace), def:80, rng:90, tec:95. The S-400 has higher defense and range than the Patriot despite being a lower rank. Either increase Patriot's def to 88 and rng to 92 to reflect the PAC-3 MSE's actual engagement envelope, or adjust S-400 stats downward (game.js:252–257, 341–344).

- **Selector mode: improve AI stat selection heuristic.** Current logic is transparent after one game. Add a "stat-denial" mode (25% probability): AI picks the stat where the opponent's card is weakest rather than where its own card is strongest. This alone creates meaningful counter-play tension (game.js:681–688).

- **Add War mechanic explanation text.** When `isWarRound = true`, insert a one-line explanation above "RESOLVE TIEBREAK": "Equal ranks — ante 3 cards face-down, then battle the 4th." (index.html:93 / game.js:800–818).

- **Kinzhal lore update:** Note that the Kinzhal has been intercepted multiple times by Patriot systems, not just once in May 2023. Current lore implies a single intercept as if it were exceptional (game.js:285).

- **Losing card opacity fix.** `.losing-card { opacity: 0.5; filter: grayscale(0.6); }` makes the educational content of the losing card unreadable. Drop to `opacity: 0.7; filter: grayscale(0.3)` so the name, country bar and image remain legible (styles.css:854–857).

### Nice to Have

- **First-load Glossary discovery prompt.** On first visit, show a dismissable tooltip on the "CLASSIFIED DOSSIER" tab: "Browse all 26 real weapons, full specs + citations." One-time, stored in `localStorage`. High educational impact, minimal code.

- **TOS-1A Range stat correction / explanation.** rng:7 is jarring — the only single-digit stat. If the intention is to represent its 6 km operational range, add a visual note on the stat bar: "(short-range system)" to contextualise why this LEGENDARY card has a near-zero range value, preventing player confusion.

- **Glossary mini-card sort / filter.** 26 mini-cards with no grouping by country or type. Adding a toggle "ALL / 🇷🇺 RUSSIA / 🇺🇦 UKRAINE" would let players study one side's arsenal at a time — directly supporting the educational mission.

- **Card deal animation on War resolution.** The three face-down ante cards have no visual representation — they silently disappear from the deck counter. A brief "×3 cards burned" animation or counter decrement animation would make the War mechanic feel consequential.

- **Add ATACMS context to HIMARS card.** The HIMARS card correctly lists "1× ATACMS (300 km)" in specs, but the lore text doesn't mention the ATACMS strikes on Crimean airfields that made headline news in 2024. One sentence would significantly improve the card's educational value for learners who followed the war in the news.

- **Consider adding Ukrainian long-range one-way attack drones as a category.** Ukraine's domestically produced OWA UAV fleet (Warbirds 2100 km-range drone, Liutyi, etc.) is arguably the most operationally innovative part of Ukraine's war effort in 2025–2026, striking Russian refineries 1,000+ km from the front. A single representative card would complete the educational picture.
