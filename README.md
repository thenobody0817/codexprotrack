# Codex Pro Track

A local-first gym tracker PWA: log sets against a built-in chest-biased upper
body program with RIR tracking, a rest timer, progress history and a plate
calculator. All data stays on the device in IndexedDB — no account, no server.

## What it does

- Ships a three-session program (A, B, C) — "Chest-Biased Upper A/B/C (Real
  Loads)" — with per-exercise sets, rep ranges, load, rest, tempo and target
  RIR, plus global rules for warm-up, progression and the weekly schedule.
- Guided session flow: pick a session, step through the exercises, and every
  completed set is stored with load, reps, the RIR you selected and a
  timestamp.
- Rest timer that starts automatically after each completed set, with `+15s`,
  `+30s` and `Skip` controls.
- Progress view: the last six sets per exercise with an estimated 1RM, today's
  best set against the all-time best (PR flag) and an 8-week average e1RM,
  plus bodyweight logging with a weekly average.
- Plate calculator that turns a target weight and bar weight into the plates
  to load per side.
- Settings for theme and default rest time, JSON export/import of all stored
  data, online/offline badge, and PWA install support.

## Repository state

The default branch `main` currently contains only a `.gitkeep` placeholder.
The implementation lives on the branch
`codex/build-pwa-shell-with-local-first-datastore`:

| File | Purpose |
| --- | --- |
| `index.html` | Markup and styling of the whole app (no framework, no build step). |
| `app.js` | Program definition, IndexedDB datastore, session logic, progress, plate calculator, settings. |
| `manifest.webmanifest` | PWA manifest ("Codex Pro Track", short name "ProTrack"). |
| `service-worker.js` | App-shell cache, offline fallback. |
| `icons/icon.svg` | App icon. |

## Requirements

- A modern browser with IndexedDB and Service Worker support.
- No build step and no dependencies: plain HTML, CSS and a single ES module.
- An `http://` or `https://` origin — service workers and IndexedDB do not work
  from `file://`.

## Install

```bash
git clone https://github.com/thenobody0817/codexprotrack.git
cd codexprotrack
git checkout codex/build-pwa-shell-with-local-first-datastore
python3 -m http.server 8000
```

Then open <http://localhost:8000/>. Any static file server works — the only
requirement is that the files are served over HTTP.

To install it as an app, open the page in a browser that supports PWAs and use
the **Install** button in the header (it appears once the browser fires
`beforeinstallprompt`), or install from the browser's own menu.

## Usage

- **Workout** tab — choose session `A`, `B` or `C` in the dropdown and press
  **Start Session**. For each exercise the card shows the target sets, rep
  range, rest and machine alternatives, and seeds the load and rep inputs from
  your last set. Adjust load and reps with the `-` / `+` buttons, pick the RIR
  you finished with (`RIR 0`–`RIR 4`, default `RIR 2`), then press
  **Complete + Next**. The rest timer starts on its own; use `+15s`, `+30s` or
  **Skip**. **Finish Session** ends the workout.
- **Progress** tab — one card per exercise with the last six sets, the
  estimated 1RM, today's best vs. the all-time best, and the 8-week average
  e1RM. Log your bodyweight under *Bodyweight* to see weekly averages.
- **Plates** tab — enter a target total and the bar weight (20 kg by default)
  and press **Calc** to get the plates per side.
- **Settings** tab — choose the *Apple Dark* or *Apple Light* theme, set the
  default rest time, export a JSON backup, or import a JSON backup file.

## Configuration

- The program is defined at the top of `app.js` in the `PROGRAM` constant:
  `program_name`, `units`, `global_rules` (schedule, progression, weekly RIR
  targets) and `sessions`, each with `exercises`. An exercise has an `id`,
  `name`, `category`, `sets`, `rep_range`, `load` (`total`, `per_side`,
  `per_hand`, `total_or_per_side`), `rest_sec`, `tempo`, `target_RIR` and
  optional `notes`.
- `MACHINE_ALTERNATIVES` next to it maps exercise ids to substitute exercises.
- Settings (theme, default rest in seconds) live in the IndexedDB `settings`
  store and are written by **Save** in the Settings tab.
- The service worker caches the app shell under the cache name
  `codexprotrack-v1`.

## Data storage

- IndexedDB database `codexprotrack` (version 1) with the stores `sessions`,
  `sets`, `bodyMetrics`, `settings` and `photosMeta`.
- On first run the app migrates legacy `localStorage` data
  (`sessionHistory`, `sessionSetValues`) into IndexedDB.
- Export writes `{ program, sessions, sets, bodyMetrics, settings, photosMeta }`
  to a JSON file named `codexprotrack-backup-<timestamp>.json`. Import restores
  the stored rows; the program itself is not overwritten on import.

## Limitations

- Single-device and offline-first: there is no account, sync or server, so
  progress is lost if you clear the browser data for the site.
- The progress tables only show the last six sets per exercise, and the
  "8-week" trend is the average of the most recent 20 logged sets rather than a
  true per-period aggregate.
- The estimated 1RM uses the Epley formula (`load × (1 + reps / 30)`).
- The plate calculator assumes a symmetric barbell; dumbbell exercises are
  labelled `per_hand` in the program instead.
- The `photosMeta` store is created but not used by the current interface.
- The program is hard-coded in `app.js`; changing it means editing that file.

## License

MIT — see [LICENSE](LICENSE).

Copyright (c) 2026 thenobody0817.
