# Kombat-War Patch Notes

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
