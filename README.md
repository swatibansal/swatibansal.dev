# Swati Bansal — professional portfolio prototype

A responsive, static professional website for GitHub Pages. No package installation or build step is required.

## Preview

Open `index.html` directly in a browser, or run `python3 -m http.server 8000` in this directory and visit http://localhost:8000.

## Publish on GitHub Pages

Suggested repository name: `swati-portfolio`. For a root profile site, use `swatibansal.github.io` if that repository is available. All local assets use relative paths, so both layouts work.

With GitHub CLI installed and signed in:

```sh
gh repo create swati-portfolio --public --source=. --remote=origin --push
gh api --method POST repos/swatibansal/swati-portfolio/pages -f build_type=workflow
gh workflow run pages.yml
```

Alternatively create a public repository in GitHub, upload the files (including `.github/workflows/pages.yml`), and select **Settings → Pages → Source → GitHub Actions**. Run the Deploy portfolio workflow if necessary. Its deployment output provides the verified site URL.

## Editing

- `index.html`: homepage, biography, projects, speaking and judging entries.
- `styles.css`: palette, layout, typography, responsive styles.
- `app.js`: case-study content, category filters, navigation and accessible dialog behavior.
- `sagas.js`: concise overview of the unpublished technical essay.
- `learning.js`: six learning case studies, chart captions, source links, and conceptual diagrams.
- `assets/learning/`: local copies of project charts and their source map.
- `.github/workflows/pages.yml`: deployment workflow.

## Editorial notes

The case studies are concise adaptations of the supplied unpublished drafts, with technical qualifications and no unverified numerical claims. They are not represented as third-party publications. Speaking is labeled as an invitation; judging includes the supplied Digiday role. Add official event/judging links when available. LinkedIn uses the supplied profile URL; email is omitted until an exact destination is supplied. No employer logos, confidential documents, private production details, or invented endorsements are included.

Google Fonts is optional; system fallbacks keep the site usable offline. There are no analytics, trackers, forms, backend services, or package dependencies. Verify publication rights and factual details before using the prototype as your final public profile.

## October 2026 content and navigation update

Home now uses 20+ years and an integrated hero impact row: $B-scale GMV products and billions of requests per year, based on owner-supplied claims. These figures were not independently verified on LinkedIn because profile retrieval was blocked. GMV is not described as revenue and no annual period is inferred for GMV. Sagas is also linked from Selected work. The hero headline is retained pending tagline selection.

The original navy/cyan/violet theme remains locked. Navigation switches between Home, Selected work, Writing & community, and Connect. Home includes the unique professional background and career summary; About is no longer a separate view. Judging appears only within Writing & community. The Connect view includes LinkedIn, GitHub, and judging among the conversation topics.

Sagas Without a Conductor uses the same Technical Essay format as the other essays, with a short overview instead of the full manuscript. The original DOCX is unchanged. Digiday and Group Futurista links identify the awards program and event, respectively. The Collectors article is labeled as published company writing.

## LLM learning projects

Selected work now includes six learning projects under “LLM internals through a systems engineer’s lens.” The existing tokenizer and attention timeline are joined by:

- **What should every worker keep?** — `zero-simulation-llm`: state sharding, memory, and communication in a CPU simulation.
- **What happens when training crashes?** — `training-execution-system`: checkpoints, commit boundaries, provenance, and verified replay.
- **Can you trust the training metric?** — `training-loop-internals`: aggregation correctness, gradients, and observability.
- **What does a model actually learn?** — `deep-learning-patterns`: a beginner entry point covering nonlinearity, embeddings, and generalization.

Each card opens a case study through the existing hash-routed dialog and includes topic tags using the `.chips` convention. Every popup links to its public repository and README. Scope notes distinguish simulations and small experiments from production claims. Edit the static `.lab-grid` in `index.html` for card summaries and `learning.js` for popup content. No package dependencies or build step are required. The layout retains two columns on desktop and one on mobile, with the existing navy/cyan/violet theme and keyboard focus styles.

## Selected Work layout and case studies

“The thread through my work” now opens the Selected Work view, with four focus areas including LLM internals. It is contained within `#work` so routing and heading focus apply to the full view. The Learning through Building heading uses the same `.section-heading` layout as Selected Work: large heading on the left, introduction on the right, stacked on mobile.

Six learning cards open the existing accessible dialog, with Escape/close handling, focus return, shareable `#case-*` routes, and repository links. Five original charts are bundled locally for ZeRO, training-loop internals, and foundations. The remaining projects use explicitly labeled conceptual guides because their repositories contain no suitable standalone figures. Asset attribution lives in `assets/learning/SOURCES.md` and in each figure caption.

Validation: browser checks at 1440, 768, 390, and 320 px confirmed the heading layout, four focus areas, six project cards, no horizontal overflow, all six dialogs, image loading, Escape/focus return, direct case-study links, existing case studies, and community filters. JavaScript syntax checks passed.

## Full case-study titles and visual guides

The approved Selected Work layout, section typography, colors, and card styling remain fixed. All nine project cards and their dialogs use complete descriptive titles and five matching topic tags. `case-details.js` is the canonical metadata for popup titles, tags, and diagram descriptions; the static card text in `index.html` mirrors it.

Nine accessible SVG diagrams live in `assets/diagrams/` and render locally without a Mermaid runtime or external service. Every popup includes one conceptual visual with a full-size link. Existing measured project charts and source links remain available. The diagrams summarize coordination, provenance, recovery, tokenization, attention bottlenecks, sharding, aggregation, and foundational experiments; they are not production topology or new benchmark claims.

Browser checks at 1440, 768, 390, and 320 px verified all nine complete titles, matching tags, diagram and chart loading, modal focus return, and absence of page or dialog horizontal overflow.
