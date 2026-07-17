# Kombat-War Patch Notes

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
