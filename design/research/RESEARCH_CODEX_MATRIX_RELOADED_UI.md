# Matrix Reloaded Docking Scene UI Research

Author: Codex (CLI assistant)  
Role: Research support (not design system author)  
Date: 2026-01-09

Scope
- Focus on the Matrix Reloaded docking scene and Zion control room UI overlays.
- Goal is research only: visual language, palette, patterns, and references.
- This is not a design system draft.

Sources and references
- HUDS+GUIS article (observations + embedded video): https://www.hudsandguis.com/home/2012/05/16/the-matrix-reloaded-ui-design
- Kit FUI page (screenshots + credits): https://saji8k.github.io/kit-fui/movie/the-matrix-reloaded/
- Vimeo (virtual control graphics, credits via oEmbed):
  https://vimeo.com/11231245
  Credits in oEmbed: VFX art director Grant Freckleton; graphic design + screen graphic animation Toby Grime; produced at Animal Logic.
- Vimeo (HUDS+GUIS clip via oEmbed): https://vimeo.com/41824872
- Kazumichi Grime project page (reference link from Kit FUI/Awwwards):
  https://www.kazumichi.com/Matrix-Reloaded-Virtual-Control-Design
- Awwwards inspiration entry (links to Kazumichi page):
  https://www.awwwards.com/inspiration/virtual-control-design-interface-matrix-reloaded-2003-1
- Community recreation repo (SVG.js based, not canonical):
  https://github.com/dotnetCarpenter/virtualcontrol
- Local research pack provided by client: C:\Users\heyma\OneDrive\Desktop\martins research
- Still frames sampled locally for color quantization (see palette notes below).

High-level visual characteristics
- Monochrome and cool-neutral dominant; near-white field with pale blue/grey tint.
- Blueprint or schematic feel: thin line drawings, technical callouts, minimal fills.
- UI elements appear etched onto glass or projected; transparency and layering are key.
- Unlabeled square or rectangular "button" clusters imply gesture-based interaction.
- Sparse microtext and numeric strings; typography is small and technical.

Layout and composition motifs
- Large negative space with thin-line overlay density concentrated around hands.
- Large circular arcs and partial rings (scan/target feel) frame the composition.
- Stacked or nested rectangles, small squares in grids, and bracketed callouts.
- Sketch-like line art of mechanical components and dock structures.
- Overlays feel 2D, but float in depth relative to performers (parallax in motion).

Interaction and motion cues (from clips and stills)
- Gestural input: hands interact with floating UI without physical controls.
- Subtle flicker or fade-in/out of elements rather than heavy animation.
- Emphasis on precision: fine lines, microtext, and small modules.

Screens and interface contexts observed
- Zion control room / docking scene "virtual control" overlays.
- Holographic interface panels used by operators.
- Schematic dock and mechanical system diagrams.

Color extraction (approx, quantized from stills)
Primary neutrals (dominant UI + background)
- #F0F0F0 (near-white field)
- #D8D8D8 (light neutral)
- #C0C0C0 (mid neutral)
- #A8A8A8 (darker neutral)
- #909090 (deep neutral)
- #181818 (near-black accents)

Cool tints (UI line bias)
- #D8D8F0
- #D8F0F0
- #C0C0D8
- #A8A8C0
- #A8C0C0
- #90A8A8
- #9090A8
- #789090

Warm tones (environment/skin, likely not UI)
- #C0A890
- #F0D8C0
- #C09078
- #D8A890

Additional palette samples (new sources)
- HUDS+GUIS still includes letterbox blacks and environment:
  #000000, #181818, #FFFFFF, #F0F0FF, #D8D8D8
- Cargo thumbnail (low-res) reinforces cool greys:
  #A8C0C0, #C0C0C0, #C0D8D8, #A8A8A8, #C0C0D8
- Client research stills (matrix_reloaded_01/02/03 + flats):
  #F0F0F0, #D8D8D8, #C0C0C0, #A8A8A8, #909090
  #F0F0FF, #D8D8F0, #D8F0F0
  Flats show darker line options down to #303030.

Candidate token directions (research only)
- Background: near-white with cool tint (#F0F0F0 to #F0F0FF).
- UI line/stroke: mid cool-grey (#A8A8C0, #9090A8).
- Secondary line: light cool-grey (#C0C0D8).
- Text/microtext: darker cool-grey (#909090 to #181818).
- Accent: minimal; avoid saturated color, keep subtle cyan/blue shift.

Typography notes (inferred)
- Small size, technical, monoline look.
- Likely monospaced or narrow sans.
- Mostly uppercase or abbreviated strings.
- Low contrast against background to keep a soft, schematic feel.

Microtext and stroke scale (visual inference, low-res)
- From 555x312 stills, dark line runs are dominated by 1-3px thickness in vertical slices.
- Suggests primary strokes ~1-2px at this scale, with occasional 3-4px accents.
- Microtext appears ~7-10px cap-height at 555px width (very small, likely condensed).
- Letterforms look geometric/technical, with numeric strings and abbreviations.
- Note: These are estimates from compressed stills and need high-res frames to confirm.
- From the flats image (720x143), stroke runs are still dominated by 1-2px counts.
- Flats reveal explicit technical labels (dimension strings, part IDs, axis callouts).

Shape language
- Thin-outline rectangles and squares; minimal rounding.
- Brackets, tick marks, and micro-grid clusters.
- Circular arcs and concentric rings used as anchors.
- Diagrammatic lines and node clusters (no heavy icons).

Open questions for deeper study
- Exact typeface(s) and numeric formatting used in the original graphics.
- Stroke weight and opacity values in motion (needs frame-by-frame sampling).
- Whether any subtle glow or blur is used beyond pure linework.
- Locate higher-res production stills from the original artists (Animal Logic/Toby Grime).
