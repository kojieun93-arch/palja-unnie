# Fortune story cuts (`/fortune`)

Vertical-scroll story scenes. Must match homepage 팔자언니 + 검정·흰 복냥이.

| File | Scene | Mood |
|------|-------|------|
| `scene-1-start.webp` | 1 상담 시작 | large hero cut |
| `scene-2-closeup.webp` | 2 기본 성향 | expression close-up |
| `scene-3-lantern.webp` | 3 연애 성향 | lantern night |
| `scene-4-playful.webp` | 4 사주 기반 MBTI | playful reaction |
| `scene-5-ending.webp` | 5 마무리 | unnie + boknyang together |

Wire-up: `src/lib/fortune-cuts.ts` — set `enabled: true` after adding each file.

Do **not** crop `../palja-unnie-hero.jpg` for these slots.
Do **not** use yellow temporary cat SVGs or unrelated chibi art.
