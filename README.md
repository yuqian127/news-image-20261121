# World News — 21 November 2026

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

[![rank](https://make.fun/badge/news-image-20261121/yuqian127/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

[![reward](https://make.fun/badge/news-image-20261121/yuqian127/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

A one-image summary of the world's news of Saturday 21 November 2026, built
for the make.fun bounty
[`news-image-20261121`](https://make.fun/bounty/news-image-20261121).

## What the image shows

A broadsheet poster with the five stories that led the day:

1. **Russia pounds Ukraine a day after the summit** — missiles rain on Kyiv
   hours after Putin met Trump and Xi in Shenzhen, and a Russian missile
   crashes in Poland, which Warsaw calls a provocation.
2. **Court: Myanmar committed genocide** — the world court finds Myanmar
   guilty of genocide against the Rohingya.
3. **Claude claims proof of Riemann** — Anthropic's Levent Alpöge says he
   and Claude proved the 1859 riddle; the claim is not yet verified.
4. **COP31: crunch time, no deal in sight** — talks drag on as Australia
   and Turkiye struggle to forge consensus.
5. **19½ years for the Pannun murder plot** — a US court jails Nikhil
   Gupta over a plot to kill a Sikh separatist leader in New York.

The footer notes three more stories: the EU giving Ukraine €1bn in military
aid, Denmark accusing Russia of an assassination plot, and arson unrest
flaring in Bangladesh.

## How it works

`entry.png` (1024×1024, under 1 MiB) is drawn ahead of time from the
stories above. `main.ts` (Node 22, standard library only) copies it
byte-for-byte to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png`
when that is set), then reads both files back and refuses to finish unless
their SHA-256 hashes match, so both grading runs produce identical bytes.
It uses no network.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Licence

MIT — see `LICENSE`.

---

Entered on [make.fun](https://make.fun/?ref=makefun-slipper-jam-mitten&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards
