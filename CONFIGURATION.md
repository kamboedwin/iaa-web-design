# Course website — repository maintenance guide

This guide is for the repository maintainer. It is not part of the student lessons.

## Repository layout

- `index.html` — course homepage
- `units/` — all 12 student lessons, with embedded PDF presentation viewers
- `practicals/` — guided exercises
- `assignments/` — individual tasks and submission guidance
- `resources/` — slides, worksheets and further reading
- `assets/css/`, `assets/js/` — site styles and interactive activities
- `downloads/` — PDF presentations, worksheets and exercise archives
- `.nojekyll` — permits GitHub Pages to serve the static files without Jekyll processing

All 12 units are complete and approved for the current course. The official assignment submission form and deadlines are not yet configured. Do not create or guess a Google Form link.

## Suggested GitHub repository

- Owner: `kamboedwin`
- Name: `iia-web-design`
- Description: `Web Design learning resources for IIA Library and Information Studies and Records Management Systems students.`

Publish these files at the **root of a new, dedicated repository** (do not overwrite an existing course). For a public GitHub Pages site, open repository **Settings → Pages**, select **Deploy from a branch**, then choose `main` and `/(root)`. Until publishing is chosen, GitHub Pages need not be enabled.

GitHub Pages is generally public even when its underlying repository is private; choose access arrangements before enabling Pages. Do not upload confidential student or institutional information.

## Assignments

When a Google Form URL is provided, add the correct real link to the relevant student assignment instructions. Quiz scores are browser-side self-checks and are not automatically collected.

## Lecturer-only assessment materials

**Never include the lecturer assessment archive in this repository or any public course website.** Tests, model answers, private question banks, and marking schemes are kept separately.

## Updating the site

Edit the HTML and CSS in the appropriate directories, keep relative links working, and verify slide viewers, practicals, quiz attempts, mobile layouts and downloads before committing changes. The 12 embedded PDF presentations are located in `downloads/unit-XX/`. Editable PowerPoint originals are retained separately in the lecturer source archive, outside the public repository.

## Publishing file count

The course uses one PDF presentation per unit instead of individual slide images. The repository contains fewer than 100 files and is suitable for one browser-based upload (subject to GitHub’s current limits). Extract the ZIP and upload its **contents**, not the ZIP file itself.
