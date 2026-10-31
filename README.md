# hzylab.com — Zhengyu Hu's academic website

Built with [Jekyll](https://jekyllrb.com/) (Academic Pages / Minimal Mistakes theme) and hosted on GitHub Pages.
Every push to `master` rebuilds the live site at **https://hzylab.com** within a minute or two.

## Preview the site on your computer

### Option A: Windows, one-time setup (about 10 minutes)

1. Install **Ruby+Devkit 3.3 (x64)** from <https://rubyinstaller.org/downloads/>.
   At the end of the installer keep "Run `ridk install`" ticked, and press **Enter** in the black window that opens (choose option 3 if asked).
2. Open **PowerShell** (or GitHub Desktop → *Repository → Open in Command Prompt*) in this folder and run:
   ```powershell
   gem install bundler
   bundle install
   ```

### Every time you want to preview

```powershell
bundle exec jekyll serve --config _config.yml,_config.dev.yml --livereload
```

Then open **http://localhost:4000** in your browser. The page reloads automatically when you save a file.
Press `Ctrl+C` in the terminal to stop. (Changes to `_config.yml` need a restart.)

### Option B: no installation (GitHub Codespaces)

On the repository page on GitHub: **Code → Codespaces → Create codespace on master**. In the terminal that opens:

```bash
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml --livereload
```

Codespaces shows a pop-up **Open in Browser** for port 4000.

### Option C: Docker

```bash
docker run --rm -it -v "${PWD}:/srv/jekyll" -p 4000:4000 jekyll/jekyll:4 \
  sh -c "bundle install && bundle exec jekyll serve --host 0.0.0.0 --config _config.yml,_config.dev.yml"
```

## Where to edit things

| What | File |
|---|---|
| Name, bio line, email, Scholar/ORCID/ResearchGate links | `_config.yml` → `author:` |
| Home page text (About, research interests) | `_pages/about.md` |
| News items on the home page | `_data/news.yml` |
| Publications | one file per paper in `_publications/` |
| Talks | one file per talk in `_talks/` |
| Teaching | `_teaching/` |
| Awards & honours | `_data/awards.yml` |
| Session chair, journals reviewed for | `_data/service.yml` |
| CV PDF | replace `files/CV_Zhengyu.pdf` (keep the name) |
| Menu items | `_data/navigation.yml` |
| Colours, fonts, layout | `_sass/_variables.scss` (colours) and `_sass/_custom.scss` (everything else) |

### Adding a publication

Copy an existing file in `_publications/` (e.g. `2025JFM.md`), rename it, and edit the fields:

```yaml
title: 'Paper title'
date: 2026-01-31           # controls ordering and the year heading
venue: 'Journal name'
volume: '200'
pages: '104999'            # article number or page range
authors: 'Hu, Z., Smith, J., Li, Y.P.'   # "Hu, Z." is bolded automatically
paperurl: 'https://doi.org/...'
pdf: '/files/2026XX.pdf'   # local file in /files/ or a full URL
image: '2026XX.jpg'        # still graphical abstract / poster frame in /images/
animation: '2026XX.mp4'    # optional looping animation in /images/ (see below)
selected: true             # also show under "Selected publications" on the home page
excerpt: 'One-sentence summary (used on cards and for search engines).'
citation: 'Full citation text shown by the Cite button.'
abstract: >-
  Paste the published abstract here as one paragraph, indented by two spaces.
```

The **Cite** button builds the BibTeX entry automatically from these fields.

### Graphical-abstract animations

Animations are short **muted, looping MP4s**, not GIFs. They look the same as a GIF on the page
(autoplay, loop, no controls) but are about 10–20× smaller: the JFM animation is 0.8 MB as MP4 and 14 MB as a GIF.
They only load and play when scrolled into view, and they respect the "reduce motion" setting in the visitor's operating system.

To convert a simulation video (install [ffmpeg](https://www.gyan.dev/ffmpeg/builds/) first):

```powershell
# animation (1000 px wide, 24 fps, no audio, sped up 1.5x; use setpts=PTS/1 for normal speed)
ffmpeg -i "my video.avi" -an -vf "setpts=PTS/1.5,fps=24,scale=1000:-2,format=yuv420p" -c:v libx264 -preset veryfast -crf 28 -movflags +faststart images/2026XX.mp4
# poster frame (still shown before playback and in link previews), taken 8 s in
ffmpeg -ss 8 -i images/2026XX.mp4 -frames:v 1 -q:v 4 images/2026XX-poster.jpg
```

Then set `animation: '2026XX.mp4'` and `image: '2026XX-poster.jpg'`.

### Adding a talk

Copy a file in `_talks/`, edit `title`, `date`, `venue`, `location`, `talk_titles` and `image`, and list the photos in the body.

### Images

Please resize photos before adding them (phone photos are 4–8 MB). Around **1600 px wide, JPEG quality 80** is plenty
and keeps each photo under ~400 KB. On Windows, the free tool [Squoosh](https://squoosh.app) or PowerToys *Image Resizer* works well.

### Optional: Google Analytics

Create a GA4 property, then in `_config.yml` set `analytics: provider: "google"` and `google: tracking_id: "G-XXXXXXX"`.
