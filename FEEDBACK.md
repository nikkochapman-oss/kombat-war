# Kombat-War Critic Report — October 2026

## Mission Alignment Check

Kombat-War's core premise is strong and the execution is ambitious: real photographs, sourced specifications, and accessible lore create a genuinely educational card experience that sets it apart from anything on the App Store. However, the game currently has a critical structural problem that undermines the mission before a single card is drawn — Ukraine fields only 8 unique cards while Russia fields 26, turning a "Ukraine war" game into what is effectively a Russian arsenal catalogue with a thin Ukrainian presence. Beyond balance, a deck-slicing code bug silently drops ~20 cards from every game, several important confirmed-deployed Ukrainian systems are entirely absent, and mobile UX has enough friction points to cause early abandonment. The bones are excellent; these are fixable problems.

---

## Sub-Agent Reviews

### WarHammer (Strategy Gamer)

**Deck balance is broken at the architecture level.**

I counted the MILITARY_ASSETS array: 36 unique cards. 26 are Russian (Orlan-10, Supercam, BTR-82A, Lancet-3, Geran-2, FPV Ghoul, BMP-3, BMP-2M Berezhok, T-72B3M, T-80BVM, Ka-52, Mi-28N, T-90M, TOS-1A, S-350, Pantsir-S1, Project 636.3, Yasen-M, Iskander-M, Su-34, Kh-101, S-400, Tornado-S, FAB-500 UMPK, Zircon, Kinzhal), 8 are Ukrainian (Bayraktar TB2, HIMARS, R-360 Neptune, T-64BV, Patriot PAC-3, Baba Yaga Vampire, 2S22 Bohdana, Magura V5), and 2 are shared (MT-LB, FPV Fiber-Optic Drone). That is a 3.25:1 disadvantage for Ukraine in card variety.

**There is also a code bug.** `startNewGame()` hardcodes `baseDeck.slice(0, 26)` and `baseDeck.slice(26, 52)`, but `baseDeck` is `MILITARY_ASSETS` doubled, which is now 72 cards. The last 20 cards of the shuffled array are silently discarded every game — roughly one card in four never appears. The log message `"Create dual copy deck (52 cards)"` is stale.

**Dominant cards in Selector mode:**

- **Zircon (RU, rank 14):** fp:100, spd:100, rng:95, tec:98 — any stat except DEF (42) or RNG comparison against Tornado-S wins. A player holding Zircon correctly picks SPEED and wins 100% of the time because no other card in the deck reaches 100 speed.
- **Kinzhal (RU, rank 14):** fp:98, spd:100, rng:98, tec:96 — same profile. Two cards with maximum speed guarantees that whoever holds one wins that round unconditionally on SPEED.
- **S-400 Triumf (RU, rank 13):** fp:92, def:94, rng:96, tec:95 — wins RANGE, DEFENSE, or TECH against practically everything, including all Ukrainian cards except Patriot (tec:95 ties).
- **Iskander-M (RU, rank 12):** fp:95, spd:90, rng:92, tec:90 — wins four stats against almost all opposition.

Ukraine's four best cards (Patriot PAC-3, R-360 Neptune, HIMARS, Magura V5) can compete meaningfully but are always outnumbered on the board.

**Ukraine has zero cards at ranks 2–6.** In Classic mode, any rank 2–6 Russian card (Orlan-10, Supercam, BTR-82A, Lancet-3, Geran-2, BMP-3, BMP-2M Berezhok) auto-beats or ties anything else at that rank tier, because Ukraine has no representation there. Even the BOTH-country FPV Fiber-Optic Drone (rank 5) and MT-LB (rank 3) don't fix this; they represent shared assets, not Ukrainian ones.

**Selector mode AI is predictable.** The `aiSelectStat()` function picks the top stat 65% of the time and second stat 35% of the time. After a few games any human player will anticipate this — an experienced player can bait the AI by holding a card where the top stat is lower than expected. A Gwent-style bluff or an ELO-weighted weighting toward stats the AI has been winning with recently would add genuine tactical depth.

**Classic mode is pure war (no skill):** rank comparison is fully luck-driven. The card ranks duplicate in the deck, so players will frequently hit same-rank ties and trigger War — on average every ~8 rounds. The War resolution mechanic is fine but adds no decisions.

**Recommended additions for mechanical depth:**
- "Electronic Warfare" counter-card mechanic (briefly flag that drone cards can be countered by EW cards).
- Terrain modifier (Selector mode only): pre-drawn terrain tile (Urban / Open Field / River Crossing) buffs one stat category for the round, adding context to stat selection.
- Show each card's relative win-rate against the opponent's revealed card before confirming stat selection — teaches strategy while it plays.

---

### Casual Cleo (First-Time Mobile Player)

I picked this up cold on an iPhone 14 at 10pm. Here is my honest experience:

**What worked:**
- The glowing neon cards look genuinely cool. I immediately wanted to collect them.
- The country flag on each card (🇷🇺 / 🇺🇦) told me at a glance whose side I was playing with.
- The lore text on most cards was clear. The Magura V5 ("18-foot unmanned speedboat packed with 320 kg of explosives... first naval drones in combat history to sink enemy warships") made me say "wait, this is real?!" — that's exactly the reaction this game should be producing.
- The Baba Yaga Vampire card is brilliant. The name, the folklore origin, the "2.5 million documented combat missions" stat — perfect.

**What confused me:**
- I didn't know what DEPLOY ASSETS meant the first time I saw it. I stared at the screen for a full 20 seconds before tapping the button.
- When I switched to STAT-SELECTOR mode, nothing explained that I was supposed to tap a stat. The "▶ TAP A STAT TO BATTLE" hint at the bottom only appears after you see the card — not before. A one-sentence mode explainer on switch would fix this.
- "TECH LEVEL" as a stat makes no intuitive sense when comparing a submarine to a tank. Is higher tech always better? The Orlan-10 drone scores 70 on Tech Level and the S-400 scores 95 — fine, but what does that *mean* in battle terms? A tooltip or one-line description ("TECH LEVEL: how advanced and hard to counter this system is") would help.
- The stat label in the dossier says "TECH LAYER" (different from the card's "TECH LEVEL") — small inconsistency, but noticeable.
- The card description is cut off at 3 lines. I could see the first sentence of the lore, which was often excellent, but the text got truncated mid-sentence on longer entries. I never got to read the full educational story.
- The game-over modal just says "CAMPAIGN CONCLUDED" with rounds and wars. There is no "what did you learn?" moment, no recap of the most interesting cards encountered, nothing that ties the session back to the educational mission.

**What I learned:**
Despite the friction, I left understanding that Russia uses cheap drones like the Geran-2 to attack cities at night, and that Ukraine has a sea drone programme that damaged Russia's naval capabilities. That's a genuine win for the mission — the lore writing is doing its job.

**Things on my phone to fix:**
- The DEPLOY ASSETS button is full-width on mobile which is fine, but during stat selection mode the stat rows are `font-size: 0.67rem` with only `2px 4px` padding — these are genuinely hard to tap accurately. They need at minimum 44px height per WCAG touch target guidelines.
- The Glossary tab is excellent but requires 2 taps to reach (tab switch then tap a card). There is no way to reach it from the game-over modal — a "Review your cards" link there would keep curious learners engaged.

---

### Colonel Kovacs (Military Analyst)

*I have reviewed the full MILITARY_ASSETS array against open-source databases and recent reporting.*

**Card-to-Asset Ratio (Ukraine vs Russia)**

Of 36 unique cards: 26 Russian, 8 Ukrainian, 2 shared. This misrepresents the conflict. Ukraine has operated at least 40–50 distinct foreign-supplied and domestic weapon systems at scale in this war. The current deck tells a story where Russia has built an overwhelming arsenal and Ukraine is fighting with eight items. That is not educational — it is misleading by omission.

**Factual Errors and Spec Inconsistencies**

1. **T-90M "Vladimir-M" NATO designation (game.js:167).** The T-90M Proryv does not carry the NATO reporting name "Vladimir-M." The T-90 series was not assigned a formal NATO reporting name in the standard SA-series / Frogfoot-style scheme — it is simply referred to as "T-90" in NATO documentation. "Vladimir" is a Russian marketing name from earlier export brochures. Replace with "No NATO name assigned" or leave blank.

2. **Geran-2 speed vs FPV Ghoul speed inconsistency.** Geran-2 carries `spd:55` (real speed ~185 km/h). FPV Ghoul carries `spd:85` (real speed ~100 km/h). The Geran-2 is nearly twice as fast as the FPV Ghoul in reality, yet the game assigns it a speed score 30 points lower. The stat scoring appears to use mission role (loitering drone = "slow" conceptually) rather than actual speed. This is either a scale design choice that needs to be documented or a factual error. If speed represents top measured airspeed, Geran-2 should score higher than FPV Ghoul, not lower.

3. **Pantsir-S1 weight "30 tons."** The card specs list weight as "30 tons." The standard Pantsir-S1 on its KAMAZ-6560 8×8 truck chassis weighs approximately 20–22 tonnes fully loaded. 30 tonnes is closer to the tracked Pantsir-SM-SV variant. Correct to ~21 tonnes for the wheeled system.

4. **FPV Fiber-Optic Drone described as "completely immune to electronic warfare jamming."** This is accurate for the guidance channel but the card presents it as an absolute operational immunity. Russian and Ukrainian forces have countered fiber-optic drones using nets, laser systems, and kinetic intercepts. Recommend amending to "immune to radio-frequency jamming" to be precise.

5. **TOS-1A range: stat 7/100.** The underlying math is correct (6km real range proportionally mapped). However the description says "short-range rocket system" without making clear this is intentional design for a support/breakthrough weapon. No factual error, but the stat will confuse players who see a "rank 9" card with range 7 and assume the card is broken.

6. **Kh-101 speed stat.** The card gives `spd:58` and lists real speed as "Mach 0.6–0.78 (subsonic)." Converted: ~720–940 km/h. The Su-34 gets `spd:88` at Mach 1.8 (~2,160 km/h). The proportional scaling places Kh-101 at roughly 33-44% of Su-34's speed, which would imply ~spd:29–39, not 58. The speed stat appears overstated for the cruise missile.

**Confirmed-Deployed Assets Missing From the Deck**

All of the following have been confirmed in combat use in Ukraine and are absent:

| Asset | Country | Why It Matters |
|---|---|---|
| **IRIS-T SLM** | UA | Germany has delivered 8 systems; it has become Ukraine's primary mid-range air defense backbone. Range 40 km, highly successful intercept rate. |
| **NASAMS** | UA | Norwegian/US supplied; arrived November 2022, still active. One of Ukraine's few systems capable of engaging ballistic missiles. |
| **Leopard 2A4/2A6** | UA | 73 pledged to Ukraine, 11+ confirmed destroyed (Oryx). Major Western main battle tank. The deck has zero NATO tanks. |
| **M2 Bradley IFV** | UA | ~50+ delivered by US, confirmed in multiple assault operations. Outguns BMP-3 in many engagement scenarios. Missing entirely. |
| **Caesar SPH** | UA | 150+ pledged, French 155mm wheeled howitzer widely praised for accuracy. One of Ukraine's primary counter-battery systems alongside HIMARS. |
| **ATACMS (MGM-140)** | UA | Long-range ballistic missiles (300 km) delivered to Ukraine in 2023-2024; used to strike Crimea and Russian rear areas. Enormously significant. |
| **Storm Shadow / SCALP-EG** | UA | UK and French air-launched cruise missile (250 km+), confirmed in strikes against Crimea Bridge and Kerch infrastructure. |
| **BM-21 Grad** | BOTH | The most numerically common artillery rocket system on the entire battlefield; both sides fire thousands of rounds weekly. Its absence while Tornado-S is present is a notable gap. |
| **Kh-22 / Kh-32** | RU | Anti-ship cruise missile repurposed for land attack, used repeatedly against Ukrainian cities (Kremenchuk, Vinnytsia). Travels at Mach 4.6. |

**Ukraine/Russia Card Balance**

Russia: 26 unique cards. Ukraine: 8. For a game teaching about the war, Ukraine needs at minimum 14–16 unique cards to represent the weapon systems that have actually defined the conflict's trajectory. The Leopard 2, ATACMS, Storm Shadow, Bradley, and IRIS-T are not obscure niche systems — they dominate Western reporting on Ukraine's capabilities.

---

### UX Vera (UX Designer)

**Information hierarchy on the card**

The card layout in order from top: header → country bar → image (110px) → description (3-line clamp) → stats. The photo is the best educational hook this game has — it shows players a real piece of military hardware — but at 110px height on desktop and 130px on mobile it is too small to read any meaningful detail. Increasing to 150px on desktop and 160px on mobile would significantly improve the educational impact without breaking the layout.

The card description (`font-size: 0.68rem`, `height: 48px`, `-webkit-line-clamp: 3`) clips the most important educational text. The mission says lore is how players learn. On a 375px screen this translates to approximately 140px of educational text maximum. On the Magura V5 card, the third line cuts to "Travelling up to 833 km at 42 knots, these drones conduct autonomous strike missions using onboard camer—" which is both abrupt and leaves out the USNI attribution that would reinforce credibility. Either:
- (a) Increase card height to allow 4 lines of description, or
- (b) Truncate at a natural sentence boundary and show a "tap to expand" affordance.

**Selector mode flow clarity**

When it is the player's turn to pick a stat, the UX relies entirely on the "▶ TAP A STAT TO BATTLE" hint and the pulsing left border animation on stat rows. On a first play, neither communicates the game mechanic clearly — most new users will tap the DEPLOY ASSETS button area instead of the stat rows. Recommend: a modal or tooltip overlay on first entry to Selector mode (dismissible, one-time), plus increasing stat row hit areas to minimum 44px tall on mobile (currently ~20px based on `font-size: 0.67rem` + `2px 4px` padding).

**State clarity at key game moments**

- During War resolution, the "⚡ COLLATERAL CLASH: WAR! ⚡" banner communicates urgency well. The RESOLVE TIEBREAK button label is clear. Good.
- After a round resolves, there is a 2,500ms pause (prepareNextRound timeout) where the UI shows "STANDBY..." with no visible countdown or activity indicator. Players on mobile will tap buttons repeatedly during this pause, hitting nothing. A progress bar or countdown would reduce confusion and accidental double-taps.
- The game-over modal ("CAMPAIGN CONCLUDED") has no link to the Glossary and no "Most interesting card" summary. This is a missed moment to close the educational loop — the player just spent 30–60 rounds seeing these assets; the end screen should give them one fact to carry away.

**Color contrast**

The muted olive stat bars (`hsl(96, 35%, 62%)`) on a near-black card background (`hsl(220, 18%, 14%)`) pass WCAG AA for normal text but are borderline for the `font-size: 0.7rem` stat labels. The `--color-text-dim` at `hsl(220, 10%, 76%)` is fine. The country bar colors — `#ff7b7b` for Russia and `#6eb3ff` for Ukraine — are clear and appropriate.

**Dead-end state**

When a player's deck is exhausted during a War round (insufficient cards check in `resolveRound()`), the game silently calls `checkGameOver()` with the shorter deck losing — but the combat log just shows "Insufficient reserve assets to sustain a War campaign." with no explanation of why the game ended abruptly. Users will feel cheated. Replace with: "Both commanders escalated to War but [player/opponent] lacked sufficient reserves. [Winner] claims tactical victory."

**Glossary (Dossier) usability**

The Classified Dossier tab is the game's strongest educational feature and most players will never find it — it requires a deliberate navigation tap away from the action. Consider surfacing it more prominently: a "INTEL" icon badge on each card that deep-links to the dossier entry for that specific asset, or a "View Intel Report" button on the game-over modal.

---

## Synthesized Action List

### Critical

1. **Fix deck slice bug:** In `startNewGame()`, replace the hardcoded `baseDeck.slice(0, 26)` / `baseDeck.slice(26, 52)` with dynamic splits based on `MILITARY_ASSETS.length`. With 36 unique assets × 2 = 72 cards, each player should receive 36 cards: `userDeck = baseDeck.slice(0, baseDeck.length / 2)`. Update the "52 cards" comment. The current code silently drops ~20 cards every game.

2. **Correct T-90M NATO designation:** Change `nato: "Vladimir-M"` to `nato: "No NATO reporting name assigned"` on the T-90M Proryv card (game.js:167). "Vladimir-M" is not a NATO designation.

3. **Fix Geran-2 speed stat:** `spd:55` for Geran-2 (185 km/h) scores it lower than FPV Ghoul `spd:85` (100 km/h). Either document that SPD is a "mission agility" composite (not raw airspeed), or correct Geran-2 to `spd:65–70` and FPV Ghoul to `spd:78` so faster aircraft score higher.

4. **Add Ukraine card parity:** Ukraine currently has 8 unique cards vs 26 Russian. Add a minimum of 6 new Ukrainian cards to reach rough parity. Highest priority (all confirmed-deployed in combat):
   - **IRIS-T SLM** (UA, Rank 10): Germany's medium-range SAM, 8 delivered, ~40km intercept range. Stats: fp:70, def:78, spd:50, rng:82, tec:90.
   - **Leopard 2A4** (UA, Rank 8): NATO main battle tank, 73 pledged, confirmed frontline losses on Oryx. Stats comparable to T-72B3M.
   - **M2 Bradley IFV** (UA, Rank 6): US-supplied IFV, 25mm chain gun + TOW missiles. More firepower than BMP-2.
   - **ATACMS MGM-140** (UA, Rank 13): 300km ballistic missile, used to strike Crimea and Russian rear bases. Should rank near R-360 Neptune.
   - **Storm Shadow / SCALP-EG** (UA, Rank 12): UK/French cruise missile (250km+), confirmed Crimea Bridge strike. Stats: fp:88, def:12, spd:72, rng:90, tec:86.
   - **Caesar SPH** (UA, Rank 9): French 155mm wheeled howitzer, 150+ pledged, prominent in Western reporting.

### High Priority

5. **Fix mobile stat-row tap targets:** At `font-size: 0.67rem` + `2px 4px` padding, stat rows are approximately 18–20px tall on mobile — well below the 44px WCAG minimum touch target. Add `min-height: 44px` and `display: flex; align-items: center` to `.card-stat-row` inside the `@media (max-width: 600px)` block.

6. **Add a first-play onboarding overlay:** On first game launch (use `localStorage`), show a 2-screen overlay: (1) "Classic Mode: Higher rank wins — pure luck, like Snap. (2) Selector Mode: You pick the stat — use your card's strengths." Dismissible, never shows again. This removes the 20-second confusion window for new players.

7. **Correct Pantsir-S1 weight spec:** Change from `weight: "30 tons"` to `weight: "~21 tons (KAMAZ-6560 wheeled variant)"` in the specs object.

8. **Add STANDBY progress indicator:** In `prepareNextRound()`, the 2,500ms timeout shows "STANDBY..." with no feedback. Add a CSS-animated progress bar or pulsing border to the announcement banner during this window so players know the game is transitioning, not frozen.

9. **Fix the "TECH LAYER" / "TECH LEVEL" inconsistency:** The dossier panel (renderDossierDetail, game.js:1198) labels this stat "TECH LAYER" while the card uses "TECH LEVEL". Standardize to "TECH LEVEL" everywhere.

10. **Amend FPV Fiber-Optic Drone description:** Replace "completely immune to active electronic warfare (EW) jamming systems" with "immune to radio-frequency jamming — the primary electronic warfare method deployed in Ukraine" to be accurate without overstating.

11. **Add BM-21 Grad as a BOTH card (Rank 3 or 4):** The most numerically common artillery system on the entire battlefield is absent. Its presence would improve the deck's educational breadth significantly and balance the Rank 3–4 range for Ukraine.

### Nice to Have

12. **Game-over educational summary:** On the modal, add a "MOST NOTABLE CARD THIS CAMPAIGN: [highest-rank card seen]" with a one-line fact from its description. Ties the session to the educational mission.

13. **Deep-link from card to dossier:** Add a small "📋 INTEL" badge/button on each deployed card that switches to the Glossary tab and opens that card's dossier entry. Currently the Glossary is effectively hidden from active gameplay.

14. **Increase card image height:** From 110px to 140px on desktop (`.card-img-container`), and from 130px to 160px on mobile. The real photographs are the game's strongest asset and the current allocation undercuts them.

15. **Kh-101 speed stat review:** At `spd:58` for a Mach 0.6–0.78 cruise missile vs Su-34 at `spd:88` for Mach 1.8, the proportional gap seems underrepresented. Consider reducing to `spd:42–48` for consistency, or explicitly document that SPD is a composite "evasion + agility" metric, not raw airspeed.

16. **AI stat selection improvement:** The current 65%/35% top/second-stat split is predictable after a few games. Consider a weighted random selection that factors in opponent's visible card rank — if the AI holds a card with a clear dominant stat, weight that at 80%; if the AI's stats are close to the opponent's estimated range, introduce a 20% random "bluff" pick to prevent exploit-farming.

17. **Kh-22 / Kh-32 Russian card (Rank 11 or 12):** The anti-ship cruise missile repurposed for land attack has been used to strike Ukrainian cities repeatedly (Kremenchuk, Vinnytsia, Dnipro). At Mach 4.6 with a 900–1,000 kg warhead, it is one of Russia's most destructive weapons against civilian infrastructure and its absence is a gap in the educational record.
