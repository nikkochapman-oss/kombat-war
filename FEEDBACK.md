# Kombat-War Critic Report — August 2026

## Mission Alignment Check

Kombat-War delivers on its core promise in several compelling areas: the lore text is well-researched and layperson-accessible, the Glossary Dossier with its citation blocks is a standout educational feature, and the mobile CSS for portrait phones is genuinely solid. However, the game has a critical structural imbalance — 26 of 36 assets are Russian while Ukraine's deck stands at 8 cards (22%) — that directly undercuts the stated mission of balanced education. A newcomer who plays 20 rounds will learn roughly 3.25× more about Russian equipment than Ukrainian equipment. The most jarring omission is the F-16 Fighting Falcon, which has been operational with Ukrainian Air Force squadrons since summer 2024 and represents the most publicly visible Western transfer of the war. Additionally, one confirmed factual error in the R-360 Neptune lore overstates its historical significance in a verifiable and correctable way.

---

## Sub-Agent Reviews

### WarHammer (Strategy Gamer)

Let me be direct: Classic Mode is slot-machine Gwent. There is zero decision-making — press DEPLOY ASSETS, see a rank, win or lose. The rank system generates constant high-value ties because cards are paired at every tier (two Rank 2s, two Rank 4s, two Rank 7s, two Rank 8s across Russia), artificially flooding the game with WAR events. That is not tension — that is RNG with military aesthetics.

**Dominant cards in Selector mode (by combined stat weight):**
- Zircon: fp:100, spd:100, tec:98, rng:95 = 393 total. Virtually unbeatable on any stat.
- Kinzhal: fp:98, spd:100, rng:98, tec:96 = 392. Tied for top.
- S-400: def:94, tec:95, rng:96 — wins 3 of 5 stats against almost everything in the deck.
- Patriot PAC-3 (tec:95, rng:90) is the only Ukrainian card that competes with Russia's top tier. Ukraine has one ACE-rank card; Russia has two (Zircon + Kinzhal) plus three KING-rank cards vs Ukraine's one (Neptune).

**Stat scaling inconsistency:**
- TOS-1A Range:7 is the sole single-digit value in the entire deck. If 0–100 represents a relative battlefield scale, a value of 7 looks like a null/error — especially when Geran-2 sits at Range:90. The real TOS-1A fires to 6 km, which is "very short range" — but the stat should communicate that as ~15–18 on the scale, not 7.
- Yasen-M Speed:72 equals the Mi-28N Night Hunter helicopter (also Speed:72). A nuclear submarine should be Speed:42–48 at most in any relative tactical mobility framework.
- FPV Fiber-Optic (rng:30) and FPV Ghoul (rng:25) are penalised on two of five stats simultaneously (Range + Defense), making them near-unplayable in Selector mode once the AI — which picks its best stat 65% of the time — learns to exploit RANGE or DEFENSE.

**AI decision quality:**
The AI picks its best stat 65%, second-best 35% — deterministic and exploitable. There is no adaptation, no card memory, no bluffing. After ~5 rounds a human player learns to avoid FIREPOWER against Zircon and just waits for RANGE on the TOS-1A. A minimum improvement: track which two stats the human most frequently chose in the last five rounds and shift the AI's probability away from those.

**Missing depth mechanics:**
No faction synergies, no counter-type logic, no "Intel" resource. The rank-14 hypersonic missile cards are mechanically invincible — there is no counter-system modelled. Suggested low-code addition: when a SAM-type card faces an aircraft or missile-type card, award a +12 DEFENSE and +8 RANGE bonus to the SAM to model its real function. This teaches combined-arms doctrine and creates meaningful decisions.

---

### Casual Cleo (First-Time Mobile Player)

I picked this up cold on my iPhone and was confused for the first 45 seconds. Here's what did and didn't land:

**Jargon wall on first load:** The button says "INITIALIZE DECK." The dropdown says "ENGAGEMENT PROTOCOL." My player name is "PLAYER_COM_01" and the enemy is "COM_TARGET_RED." None of these communicate anything useful to a first-timer. "NEW GAME," "GAME MODE," "YOU," and "ENEMY" would be completely equivalent and work on first contact.

**No rules, anywhere.** I pressed DEPLOY ASSETS, two cards appeared, the left one said "Tactical Victory" — but I didn't know why. The combat log in tiny monospace at the bottom (85px tall on mobile, roughly 3 visible lines) told me, but it had already scrolled off. A single line overlaid on the losing card — "Your Rank 8 beat their Rank 6" — would make the game self-teaching within two rounds.

**What confused me mid-game:**
- "COLLATERAL CLASH: WAR!" appeared when two cards tied. I had no idea what was about to happen. One sentence — "Both cards tied! Drawing 3 face-down cards before the next battle" — would remove all the anxiety.
- The CLASSIFIED DOSSIER tab took me three games to discover. Once I found it, the depth there was genuinely impressive — real photographs, spec sheets, citations. But there is no discovery nudge anywhere in the UI pointing toward it.

**What worked well:**
- The stat bars (FIREPOWER / DEFENSE / SPEED / RANGE / TECH LEVEL) are immediately understandable — I didn't need anyone to explain them.
- The real field photographs are genuinely cool. The sepia-filter makes them feel authentic. I learned what a Baba Yaga drone looks like after one round.
- In Stat-Selector mode, the "TAP A STAT TO BATTLE" pulsing hint is clear and well-placed. That mode is more engaging and educational.
- The full-width DEPLOY ASSETS button on mobile is a satisfying tap target. Action buttons are done right.

**Bottom line:** I felt like I'd just opened a military intelligence app with no onboarding. The educational content is real and good — but a newcomer who doesn't find the Dossier tab leaves the game having learned almost nothing beyond "Russia has more stuff."

---

### Colonel Kovacs (Military Analyst)

*Cross-referenced against Oryx conflict monitor, IISS Military Balance 2024, Jane's platforms, and current reporting to August 2026.*

#### Confirmed Factual Errors

**1. R-360 Neptune lore — Critical factual error:**
The card states it caused "sinking the largest warship destroyed in combat since World War II." This is verifiably incorrect. The Argentine cruiser ARA General Belgrano (13,645 tonnes) was sunk by HMS Conqueror in the 1982 Falklands War. The Moskva (11,490 tonnes) is the largest warship sunk since the Belgrano — not since WWII. Suggested replacement text: *"the largest warship sunk in combat since the 1982 Falklands War, and the most strategically significant naval strike of the 21st century."*

**2. Pantsir-S1 weight specification:**
The spec lists "30 tons." The wheeled Pantsir-S1 on the KamAZ/Ural-532361 8×8 chassis weighs approximately 20–22 tonnes combat-loaded. The 30-tonne figure conflates it with heavier tracked variants or the SA-19 Tunguska. Correct to "20–22 tons."

**3. Mi-28N range specification:**
The spec cites "Range: 450 km." This is the maximum ferry range. The Mi-28N's combat radius — the figure relevant to battlefield use — is approximately 200–240 km. Using ferry range alongside combat-oriented specs (Ka-52 uses ceiling and armament, not range) creates a misleading cross-card comparison. Either correct the value to combat radius or clearly label it "FERRY RANGE."

#### Accuracy Issues (Medium Priority)

**4. Yasen-M Zircon note outdated:**
The spec notes "Zircon integration planned." As of 2024–2025 reporting, the 3M22 Zircon has achieved integration with Yasen-M class submarines per multiple defence sources. Update to "Zircon integration confirmed (2024–2025 sea trials)."

**5. Lancet-3 lore not updated to Lancet-3E:**
The Lancet-3 entry is accurate for 2023–early 2024. As of mid-2025, the primary frontline variant is the Lancet-3E, featuring AI-assisted terminal guidance (confirmed by UNITED24 Media and Bulgarian Military reporting, July 2025). The TEC stat of 85 may be undervalued given the AI-guidance capability. Recommend updating lore and raising TEC to 88–90.

#### Major Missing Assets (Confirmed Deployed)

**1. F-16 Fighting Falcon (UA) — Most significant omission.**
Ukraine has been operating F-16s since summer 2024 with confirmed intercepts of Russian cruise missiles and air-to-air engagements. Every major defence outlet — IISS, Jane's, Oryx — tracks F-16 as a primary Ukrainian capability. Its absence leaves Ukraine without a single fixed-wing combat aircraft in the deck. Suggested rank: 12–13. This is not optional for a game claiming to teach Ukrainian military assets.

**2. IRIS-T SLM (UA) — Active air defense gap.**
Germany has delivered 10+ IRIS-T SLM batteries to Ukraine with a further 18 ordered as of 2026. Defence reporting cites near-100% intercept rates across more than 250 engagements. The IRIS-T is more operationally active in 2025–2026 media coverage than the Patriot PAC-3. Its absence while Patriot is included omits Germany's primary contribution and the most effective medium-range system in Ukraine's arsenal. Suggested rank: 10–11.

**3. NASAMS (UA) — Air defense layer incomplete.**
Up to 12 NASAMS batteries delivered by the US and Norway; the effector is now in domestic Ukrainian co-production. Omitting NASAMS while including Patriot means Ukraine's entire Western air defence is represented by one card, overstating US contribution and erasing Norwegian and European contributions. Suggested rank: 10–11.

**4. BM-21 Grad (BOTH) — Most-used rocket system in the war.**
Oryx confirms hundreds of Grad losses on both sides. The Grad is the single most-deployed rocket artillery platform of the entire conflict, yet the deck includes only Tornado-S (the elite precision upgrade) while omitting the baseline system. This makes Russian artillery in the deck appear exclusively high-end and misleads players about what frontline artillery actually looks like. Suggested rank: 6–7.

**5. Gepard SPAAG (UA) — Critical drone-killer absent.**
Germany's Gepard 35mm self-propelled anti-aircraft system has been one of the most cost-effective assets in Ukraine's anti-drone arsenal, confirmed responsible for hundreds of Geran-2 kills at a fraction of missile intercept cost. Its operational relevance through winter 2024–2025 exceeds the Bohdana in terms of defensive impact. Suggested rank: 8.

#### Country Balance Assessment

26 Russian cards vs 8 Ukrainian cards (2 shared) = Russia represents 72% of the deck by card count. In terms of iconic high-rank assets: Russia has 2 Rank-14 cards (Zircon, Kinzhal), 2 Rank-13 cards (S-400, Tornado-S), 3 Rank-12 cards (Iskander-M, Su-34, Kh-101) vs Ukraine's 1 Rank-14 (Patriot), 1 Rank-13 (Neptune), 1 Rank-12 (HIMARS). Ukraine is outnumbered at every tier. Adding F-16, IRIS-T, NASAMS, Gepard, BM-21, and one long-range strike drone (e.g. Liutyi/UJ-22 Airborne) would bring the ratio to approximately 26 RU : 14 UA — still Russian-heavy, but representative of the real operational picture.

---

### UX Vera (UX Designer)

**Card information hierarchy on 375px portrait screen:**
The `.card-description` element is hardcoded to `height: 48px` on desktop and `38px` on mobile with `-webkit-line-clamp: 3`. The lore text for most cards runs 6–8 lines. A player sees the first ~40 words — typically the accessible layperson explanation — and loses the technical context. On mobile this reduces to the first ~30 words. The citation is invisible on the card entirely. The mission-critical educational hook is cut off exactly where it gets interesting.

**Specific layout issues:**

- **Stat bar height:** `.card-stat-bar` is `4px` tall. On a retina display this renders at approximately 1.5–2px visual weight — decorative, not readable. Minimum 6px recommended for usable comparison between values.
- **Combat log height on mobile:** `.hud-footer { height: 85px }` on mobile compresses to approximately 3 visible lines. Round results scroll off before the player reads them. Minimum 110px, or make the footer collapsible/expandable.
- **ACTIVE ATTRIBUTE banner contrast:** The `.stat-banner` uses `--color-secondary` (HSL 96, 35%, 62%) — olive green — as text on a dark panel background. This achieves approximately 3.5:1 contrast ratio, below the WCAG AA threshold of 4.5:1 for 14px-equivalent text. Increase lightness to 72% to reach compliance.
- **`card-description` height is fixed, not content-responsive:** Consider `max-height: 72px; overflow-y: auto` instead of a hard clamp, so longer lore is accessible on tap/scroll rather than silently truncated.

**Game state clarity:**
- There is no persistent "who is winning" indicator. Players must mentally compare "I have 19, they have 33" to know they are losing. A simple dual-segment progress bar (user deck share vs AI deck share) visualising the deck ratio removes this mental load.
- The 2.5-second `prepareNextRound` delay shows "STANDBY..." with no countdown or animation. Mobile users tap the screen during this pause; while `isProcessing` catches most double-taps, the silent delay creates uncertainty ("Did my tap register? Is the game frozen?"). A brief animated dot or progress indicator resolves this.
- **Dead-end state:** When both players tie repeatedly and exhaust cards below the War threshold (< 4 cards each), the game silently terminates in the combat log. The game-over modal never fires in this path. This is a dead-end state with no recovery UI — the player sees "Insufficient reserve assets" in the log and nothing else.

**Educational content prominence:**
The Classified Dossier is the game's strongest educational feature — spec grids, real photographs, source citations. But it requires the player to discover the tab, switch views, and scroll to find individual cards. No in-session prompt surfaces it. A single post-round dismissible tooltip ("Tap CLASSIFIED DOSSIER to explore this weapon's full specs and history") would significantly increase dossier engagement and fulfil the educational mission more reliably.

---

## Synthesized Action List

### Critical

- **Fix R-360 Neptune factual error.** Change "largest warship destroyed in combat since World War II" → "largest warship sunk since the 1982 Falklands War, and the most strategically significant naval strike of the 21st century." This is verifiably wrong and directly undermines the game's educational credibility.

- **Add F-16 Fighting Falcon (UA, rank 12–13).** Operational since summer 2024, confirmed in cruise missile intercepts. Ukraine's air power is unrepresented — zero fixed-wing combat aircraft in the deck. This is the most significant educational gap in the game.

- **Rebalance RU/UA card ratio.** Current ratio is 26 RU : 8 UA. Add a minimum of 6 Ukrainian cards (F-16, IRIS-T SLM, NASAMS, Gepard, BM-21 Grad as shared, one long-range strike drone) to reach approximately 40% Ukrainian representation. The stated mission is to teach about Ukrainian and Russian assets — currently the deck teaches 3.25× more about Russia.

### High Priority

- **Add IRIS-T SLM (UA, rank 10–11).** 10+ batteries delivered, 18 more ordered (2026), near-100% intercept rate across 250+ confirmed engagements. More operationally visible in current reporting than Patriot. Critical gap in Ukraine's air defense picture.

- **Add BM-21 Grad (BOTH, rank 6–7).** The most-deployed rocket system on both sides per Oryx. Omitting it while including Tornado-S makes Russian artillery appear exclusively elite. Essential for an accurate picture of frontline combat.

- **Fix Pantsir-S1 weight.** "30 tons" → "20–22 tons" (wheeled variant actual combat weight).

- **Fix Mi-28N range spec.** "450 km" (ferry range) → "200–240 km" (combat radius), or relabel as "FERRY RANGE" to avoid cross-card confusion.

- **Fix TOS-1A Range stat.** Range:7 is the only single-digit value in the deck and reads as a broken field. Normalize to Range:15 to signal "very short range" without appearing like a null value.

- **Fix Yasen-M Speed stat.** Speed:72 equals the Mi-28N attack helicopter. Correct to Speed:42–48 to reflect relative submarine tactical mobility.

- **Add in-arena win reason display.** Overlay "Rank 9 > Rank 6" or "FIREPOWER: 88 > 75" on the losing card after resolution. The combat log is invisible on mobile at pace — the win reason needs to be on the card itself.

- **Update Lancet-3 lore and TEC stat.** Add mention of the Lancet-3E (AI terminal guidance, fielded mid-2025). Raise TEC from 85 to 88–90 to reflect the upgrade.

- **Update Yasen-M Zircon spec.** "Zircon integration planned" → "Zircon integration confirmed (2024–2025 sea trials)."

- **Fix dead-end game state.** When the "insufficient reserves" path triggers, ensure `checkGameOver()` fires the modal with an appropriate message so the player receives a proper end-game screen rather than a silent freeze.

### Nice to Have

- **Rename UI jargon for first-time players.** "INITIALIZE DECK" → "NEW GAME," "COM_TARGET_RED" → "ENEMY FORCE," "ENGAGEMENT PROTOCOL" → "GAME MODE." Keeps atmosphere, removes the comprehension barrier on first contact.

- **Add Glossary discovery nudge.** After round 1, show a single dismissible tooltip pointing to the CLASSIFIED DOSSIER tab. This surfaces the best educational feature in the game.

- **Add NASAMS (UA, rank 10–11).** Completes Ukraine's real air defense layer (Patriot + IRIS-T + NASAMS). Kongsberg now co-produces effectors on Ukrainian soil — a strong lore hook.

- **Add Gepard SPAAG (UA, rank 8).** The drone-killer that protected Ukrainian power infrastructure in winter 2024–2025. Its operational cost-effectiveness vs. Geran-2 drones is one of the war's most instructive asymmetric stories.

- **Increase card-stat-bar height.** 4px → 6–8px for legibility on high-DPI mobile screens.

- **Add relative deck size indicator.** A dual-segment progress bar under the deck counters gives players an instant "am I winning?" signal without cognitive overhead.

- **Smarter AI in Selector mode.** Track which 2 stats the human picks most often in recent rounds and shift AI probability away from those, rather than the current static 65/35 best-stat split.

- **Counter-type mechanic.** When a SAM-type card faces an aircraft or missile-type card, award the SAM +12 DEFENSE and +8 RANGE. Models real combined-arms doctrine and creates meaningful decisions without rebuilding the game.

- **Fix `.stat-banner` contrast ratio.** Olive-green text at 3.5:1 → increase `--color-secondary` lightness to 72% to reach WCAG AA (4.5:1) for the active attribute banner.

- **Add 2.5-second inter-round countdown.** Replace silent "STANDBY..." with an animated progress indicator so mobile players know the game is resuming, not frozen.

- **Fix stale code comment.** `game.js` line 1126 reads "Browse unique assets (13 base assets in MILITARY_ASSETS)" — the deck now has 36 unique assets. Update the comment.
