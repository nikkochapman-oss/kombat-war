# Kombat-War Critic Report — July 2026

## Mission Alignment Check

The game has a compelling aesthetic and solid technical foundation, but it is failing its core educational mission in one critical and one structural way. First, the deck is entirely composed of Russian assets (24 Russian, 2 "both sides") with **zero Ukraine-exclusive cards**—a game that claims to teach recognition of "Ukrainian and Russian military assets" currently teaches only Russian ones. Second, the lore descriptions, while energetically written, are saturated with military jargon (AESA radar, GLONASS, thermobaric, ATGM, fire-control matrix) that a layperson will not understand without a glossary tooltip or plain-English companion sentence. The mechanics (classic War and stat-selector) are functional, but the 4.5-second inter-round timer and trivially predictable AI reduce replay value quickly. These are solvable problems; the framework is strong.

---

## Sub-Agent Reviews

### WarHammer (Strategy Gamer)

**Balance — Clear Dominant Cards**

In Classic mode, rank is the only variable, so this is purely a shuffled-deck war game with zero meaningful decisions. Fine as an intro mode, but there is no strategic layer to return to.

In Selector mode the balance issues become glaring:

- **Kinzhal (rank 14):** fp:98, spd:100, rng:98, tec:96 — dominant on four of five stats. The only exploitable weakness is def:20. A player holding Kinzhal loses only if the opponent also holds a card with def > 98, which is impossible (max def in the deck is S-400 at 94). Effectively an auto-win on any non-defence stat.
- **Zircon (rank 14):** fp:100, spd:100, rng:95, tec:98 — same problem. Tied with Kinzhal on speed, beats it on firepower. Both are uncontestable except on defence.
- **S-400 Triumf (rank 13):** fp:92, def:94, rng:96, tec:95 — four stats above 90. No card in the deck beats it on def or rng simultaneously. The only soft counters are the rank 14s on speed/fp.
- **Orlan-10 (rank 2):** fp:25, def:20. In Selector mode it is a pure dump card. Even its best stat (rng:75, tec:70) will lose to virtually anything rank 5+. There is no scenario where drawing an Orlan-10 is useful.

**Stat Contradictions**

- The **Project 636.3 Kilo** submarine has spd:65. A diesel-electric submarine that travels ~17 knots (~31 km/h) submerged should not outscore a **BTR-82A** wheeled APC (spd:80) on speed—but the relative scale difference within the deck is inconsistent. The Kilo spd:65 makes it faster than the S-400 (spd:45), which is a road-mobile truck. The speed stat normalisation is not coherent across asset types.
- The **MT-LB** (rank 3, tec:40) has lower tech than the **Orlan-10** (rank 2, tec:70). A sensor-equipped UAV having higher tech than a tracked vehicle makes sense, but the rank ordering implies the MT-LB is more tactically valuable—a contradiction.

**AI is Trivially Predictable**

`aiSelectStat()` always picks its highest stat. After two rounds, any player will internalize this and simply look at the AI's card type to guess its top stat, then pick a different stat to counter-play it. There is no bluffing, no mixed strategy, no escalating tension.

**Suggested Mechanical Depth (low dev effort):**
- Give the AI a risk-adjusted strategy: e.g., 70% chance to pick highest stat, 30% chance to pick second-highest. Adds unpredictability without complexity.
- Add a "Press Your Luck" variant: player picks two stats; the higher of the two is used, but they draw one extra card into the clash pool (raising stakes). This is educational—players have to know which assets are multi-role.

---

### Casual Cleo (First-Time Mobile Player)

**Onboarding: Can she figure it out in 60 seconds?**

The game drops Cleo straight into the arena with no tutorial. The first thing she sees is "PLAYER_COM_01" vs "COM_TARGET_RED." She has no idea she is COM_01 or that she needs to tap the ENGAGE pile. The placeholder text "DEPLOYING CARD" in the clash slots doesn't tell her to press "DEPLOY ASSETS." She will likely tap the card piles first (which does work—nice), then the button. Functional, but discovery is luck-based.

**Stat Labels**

FIREPOWER and DEFENSE are self-evident. SPEED is clear. But:
- **RANGE: 75** — Range of what? Kilometers? Miles? Communication range? Weapons range? There is no unit and no tooltip. Cleo will assume it means something but will not know what.
- **TECH LEVEL: 90** — Compared to what baseline? This is the most abstract of the five stats, yet it often decides Selector mode rounds.

After 5 minutes Cleo will understand that higher numbers win in Classic mode. She will not understand *why* the Kinzhal has 100 firepower or what a Kinzhal actually is—the lore text on the card is truncated to 3 lines and full of jargon: *"executing complex high-speed evasive maneuvers during terminal weapon dives"* means nothing to her.

**Lore That Teaches Nothing**

Let me contrast two descriptions:

- **Geran-2 card:** *"Long-range delta-wing suicide drone utilizing satellite and inertial guidance to conduct deep standoff strikes on critical logistics, command hubs, and rear infrastructure."*
- **What Cleo needs:** *"A cheap Iranian-designed drone (called Shahed-136) bought by Russia by the thousands. It flies slowly at low altitude until it finds its target, then crashes into it and explodes. Ukraine has shot down hundreds of these, but they're hard to stop when launched in swarms."*

The current lore describes *how* assets work in military terms. The mission needs lore that explains *why they matter* in the war in plain English. The Glossary dossier panel is the right idea, but it's a second tab that most casual players will never visit.

**Touch Targets (Mobile)**

On a 375px screen the DEPLOY ASSETS button fills 360px—excellent, easy to tap. Card stat rows at `font-size: 0.67rem` in Selector mode are approximately 18px tall, which is below Apple's 44px minimum touch target. Tapping the right stat row without accidentally hitting the adjacent one is difficult on iPhone SE-class screens.

**What She Learned After 5 Minutes**

She learned that some vehicles are faster and some have more firepower. She did not learn what a Geran-2 is, where it has been used, or why it matters. She left without learning a single real-world fact about the Ukraine conflict.

---

### Colonel Kovacs (Military Analyst)

**Side Balance: Critical Failure**

Of 26 unique cards, **24 are Russian-only and 2 are "both sides."** There are zero Ukraine-exclusive cards. The game's stated mission includes Ukrainian assets. This is not a minor gap—it is a structural misrepresentation of the conflict. The following major Ukrainian or Ukraine-supplied systems are completely absent:

- **Bayraktar TB2** (Turkey-supplied, ubiquitous in early war; well-documented on Oryx loss tracker)
- **HIMARS M142** (the US-supplied MLRS system that changed the trajectory of the war in summer 2022; highest-impact Western weapon delivered)
- **Patriot PAC-3** (US-supplied SAM, successfully intercepted Kinzhal missiles—directly relevant to two cards already in the deck)
- **Leopard 2A6** (Germany/Poland-supplied MBT, operational at Zaporizhzhia front)
- **M2 Bradley IFV** (US-supplied, significant in 2023 counteroffensive)
- **Neptun anti-ship missile** (Ukrainian-made; sank the Moskva cruiser in April 2022—the most consequential single strike of the entire war)
- **Javelin ATGM** (US-supplied, symbol of early Ukrainian anti-armour resistance)
- **T-64BV** (Ukraine's primary legacy MBT)
- **MiG-29/Su-27** (Ukrainian Air Force fighters)
- **IRIS-T SLM** (German-supplied SAM, operational since late 2022)

**Factual and Specification Errors**

1. **Kinzhal — speed Mach 10:** Russia claims Mach 10, but the Kinzhal is an air-launched variant of the Iskander ballistic missile. Most Western analysts (RAND, RUSI) assess its speed at Mach 4–5 terminal phase, with Russian stated figures widely regarded as inflated. Describing it as "Mach 10.0" as fact presents Russian propaganda as specification. The card should note the discrepancy or use the conservative Western estimate.

2. **Zircon — "Scramjet" propulsion at Mach 9:** Russia claims Mach 8–9 for Zircon. Western assessment is more cautious. More critically, the description says it is designed to "neutralize naval battle formations" yet its rng stat is 95 and spd is 100—making it the most powerful card in the deck. No disclaimer that its combat effectiveness against a defended fleet remains unproven.

3. **S-350 Vityaz — NATO designation "SA-28 Vityaz":** The SA-28 designation is not an established NATO GRAU designation used by authoritative sources. IISS and Jane's do not consistently apply this designation. The card should say "NATO: Not yet formally designated" or "SA-28 (unofficial)."

4. **Yasen-M — NATO: "Yasen-M":** NATO designates this class as "Yasen" (Graney class in NATO parlance). "Yasen-M" is the Russian internal sub-variant designation, not a NATO reporting name. Should be "NATO: Yasen / Graney."

5. **Lancet-3 — "speed: 110 km/h":** CSIS and Jane's report Lancet-3 speeds at 80–300 km/h depending on flight mode. The 110 km/h figure is plausible for cruise, but the high speed in terminal dive is significantly higher. The in-game spd stat of 80 feels low for an asset cited as a game-changer against artillery.

6. **BMP-2M 'Berezhok' — country: RU:** The Berezhok combat module was originally developed by Kyiv's KBTM design bureau in Ukraine. Russia subsequently adopted a version. Marking this card as RU without acknowledging its Ukrainian design origin is misleading given the educational focus.

7. **MT-LB lore:** The description says "improvised battlefield weapons-carrying roles" but does not mention the specific use of MT-LBs carrying ZU-23 AAA guns or Grad MLRS frames (widely documented). These specifics are educational and missing.

8. **TOS-1A — "intense high-temperature blast waves":** Thermobaric weapons are correctly described, but the card should note these weapons are used against unprotected personnel and are prohibited in civilian areas under international humanitarian law—a significant contextual fact for education.

9. **Geran-2 specs: "weight: 200 kg":** The Shahed-136 is widely cited at ~200 kg total weight, with a warhead of ~40–50 kg. This is broadly correct, but the description says "delta-wing"—the Shahed-136 does not have delta wings; it uses a tapered straight-wing layout. This is a visible recognition detail that a layperson learning to identify the asset should know.

10. **No Ukrainian Losses or Tactical Context:** Every card describes an asset purely from a capability standpoint. The educational mission is served by noting, where documented, whether the asset has been lost in combat (Oryx tracker data) or where it performed outstandingly.

---

### UX Vera (UX Designer)

**Information Hierarchy on the Card**

The current card layout from top to bottom: name/badge → country bar → image → description → stats. Per Fitts's Law and the F-pattern reading model, the player's eye lands first on the card title (good) and then skips to the image (correct visual anchor). However, the **description text is placed between the image and the stats**, breaking the action flow. In Selector mode the player needs to read the stats quickly to make a decision—the description is a dead zone in this context. Consider moving description below stats or making it collapsible.

**Lore Readability at 375px**

The `.card-description` has `height: 48px` (reduced to `34px` on mobile) with `-webkit-line-clamp: 3`. At `font-size: 0.62rem` on mobile (~9px), this text is technically readable but requires deliberate effort. The sepia/contrast filter applied to images (which creates the "surveillance photo" aesthetic) does not affect text readability directly, but the dim text color `hsl(var(--color-text-dim))` = `220, 10%, 65%` against the card background (`220, 18%, 14%`) yields a contrast ratio of approximately 3.2:1. **WCAG AA requires 4.5:1 for small text.** The description text fails contrast accessibility.

**Color Contrast — Stat Labels**

`.card-stat-label { color: hsl(var(--color-text-dim)); }` renders at ~65% lightness against the card panel background at ~14% lightness. Contrast ratio is borderline (~3.5:1). Under normal ambient light on a mid-range phone screen, these will be difficult to read. Stat values are bold and brighter—those are fine. Labels need brightening.

**Turn State — Is It Always Clear?**

In Classic mode: no ambiguity. In Selector mode:

- When it's the **player's turn**: the banner says "SELECT BATTLE ATTRIBUTE" and `selector-active` CSS highlights the user panel. Good.
- When it's the **AI's turn**: the AI card renders face-up immediately, then `aiSelectStat()` fires after no explicit delay. The 1000ms timeout before the stat highlights is the only feedback that something is happening. There is no intermediary state like "RED FORCE IS SELECTING…". A first-time player may tap "DEPLOY ASSETS" again (which is hidden) or become confused.
- After a war tie, the `⚡ COLLATERAL CLASH: WAR! ⚡` text uses emoji in an otherwise emoji-free UI. The emoji is fine here but inconsistent with the military aesthetic.

**Dead-End States**

1. If both players draw the same rank card in Classic mode and neither has 4 cards left for war, the game calls `checkGameOver()` and immediately declares the player with more cards the winner—but there is no visual explanation of why the game ended. The modal just says "Operational failure." Players will be confused.

2. The 4.5-second `prepareNextRound()` delay is fixed and not interruptible. On mobile, this feels long and there is no loading indicator or countdown. The user has no feedback that the game is processing—it looks frozen.

**Educational Content Prominence**

The lore description on the card is visually the lowest-contrast, smallest-font, most-truncated element. This is the opposite of the educational priority. The Glossary Dossier is where the real learning happens, but it requires knowing the second tab exists. **There is no prompt or affordance pointing the player to the Glossary.** After a round resolves, showing a brief "Tap to learn more about [card name] →" link in the combat log, linking to the Glossary entry, would dramatically increase educational engagement.

**Selector Mode — Hover-Only Affordance on Mobile**

`.selector-active .card-stat-row:hover` shows the selection highlight only on hover—a pointer-device concept. On touch screens, there is no pre-tap highlight. The player must tap a stat row to select it, with no visual affordance that these rows are tappable in Selector mode. An icon (e.g., a small ▶ arrow) or border change on interactive stat rows would solve this.

---

## Synthesized Action List

### Critical

1. **Add Ukrainian-only cards — minimum 4 required.** The game's stated mission is teaching both sides' assets. Zero Ukrainian-exclusive cards is a mission failure. Minimum viable additions: Bayraktar TB2 (iconic, heavily documented), HIMARS M142 (war-defining impact), Neptun missile (sank the Moskva; dramatic backstory), Javelin ATGM (symbol of early resistance). Each needs a real photo, real specs, and plain-English lore.

2. **Rewrite all lore in plain English with one jargon-free sentence per card.** Every description currently leads with military terminology. The fix: add a one-sentence "plain English" hook before the technical description. Example for Geran-2: *"Russia bought thousands of these cheap Iranian-made drones and used them to attack Ukrainian power plants and cities at night."* Keep the technical second sentence for depth. This is the highest-leverage educational change possible.

3. **Correct the Kinzhal and Zircon speed claims.** Presenting Russian government claims of Mach 10 and Mach 9 as factual specifications, without qualification, violates the educational mission. Add a note: "Russia claims Mach 10; Western analysts estimate Mach 4–5 terminal." The in-game stat can remain—it represents claimed capability—but the lore must not present propaganda as fact.

4. **Fix WCAG contrast failure on card description and stat label text.** `.card-description` and `.card-stat-label` both fail AA contrast (approximately 3.2–3.5:1 against background). Increase `.color-text-dim` lightness to 75–78% or darken card backgrounds slightly. This affects readability on every card in every round.

### High Priority

5. **Replace trivial AI with a mixed-strategy selector.** The current `aiSelectStat()` always picks the maximum stat, making Selector mode deterministic after round 2. A weighted random choice (e.g., 65% highest stat, 25% second-highest, 10% random) creates genuine tension without complicating the UI.

6. **Add a "Learn More" link in the combat log after each round.** After a round resolves, log: `[timestamp] > Tap here to open the ${card.name} dossier.` Clicking it switches to the Glossary tab and opens that card's dossier. This is the highest-leverage UX change to connect gameplay to education.

7. **Fix mobile Selector mode affordance — stat rows need visible tap targets.** Add a `▶` or `[SELECT]` badge on the right side of each stat row when `isInteractive` is true. Without this, mobile users in Selector mode do not know the rows are tappable.

8. **Add a 2-sentence mode description before the game starts.** Below the mode dropdown, add a small help text: *Classic: Higher rank wins. No choices needed.* / *Selector: Pick which stat to battle on. Choose wisely.* This can be a static `<p>` element under the `<select>` with `font-size: 0.7rem`.

9. **Rebalance rank 14 defence stats.** Kinzhal (def:20) and Zircon (def:25) make def a useless stat to pick against them—you'd always lose. A player holding Kinzhal wins on fp, spd, rng, or tec (all >95). The only meaningful counter is another rank-14 card on speed (tie → war). Consider raising def for rank-14 missiles to 40–45 or capping fp/spd at 95 to create at least one exploitable weakness.

10. **Fix the Yasen-M and S-350 NATO designation errors.** Yasen-M should read "NATO: Yasen / Graney class." S-350 should read "NATO: Not formally designated (SA-28 unofficial)."

11. **Reduce inter-round timer from 4,500ms to 2,500ms, with a visual countdown.** 4.5 seconds of apparent inactivity feels like a freeze on mobile. A simple animated ellipsis or progress bar in the announcement banner during the wait would eliminate "is the game broken?" moments.

### Nice to Have

12. **Add Bayraktar TB2 as the first Ukrainian card, with its famous Oryx-tracked losses context.** The TB2 is the most recognizable Ukrainian asset internationally, has thousands of documented open-source photos, and has a compelling educational story (cheap commercial drone defeating expensive Russian air defence early in the war).

13. **Display asset type (UAV / MBT / SAM etc.) as a visible badge on the card** instead of only in the tiny title text. Type classification is a core educational outcome—players should learn to distinguish asset categories visually.

14. **Add a "War Explained" tooltip on first war trigger.** The first time a war is triggered, show a dismissable overlay: *"Tied rank! Both players reveal 3 reserve cards face-down, then battle with the 4th. Winner takes all 8 cards."* Currently there is no in-game explanation.

15. **Mark BMP-2M 'Berezhok' country as BOTH and update lore.** The Berezhok module was designed in Kyiv. Noting this adds a genuinely interesting educational detail about defense industry overlap between the two countries.

16. **Add Neptun missile as a Ukrainian-exclusive rank 13–14 card.** It sank the flagship of Russia's Black Sea Fleet. No asset in the war has a more dramatic documented story. Specs: range ~280 km, turbojet-powered, sea-skimming, subsonic. This is exactly the kind of asset the game should celebrate.

17. **TOS-1A lore should note IHL implications.** Thermobaric weapons used in civilian areas are a documented war crime allegation in Ukraine. An educational game should note: *"Their use in populated areas is documented by Human Rights Watch and contested under international humanitarian law."* This is precisely the context a layperson needs.
