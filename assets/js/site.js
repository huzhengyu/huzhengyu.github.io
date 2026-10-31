/* Site scripts for hzylab.com: Cite dialog and GIF-style graphical-abstract videos. */
(function () {
  'use strict';

  /* ---------- Cite dialog ---------- */

  function splitAuthors(s) {
    /* "Hu, Z., Qi, W.-G., Li, Y.P." -> ["Hu, Z.", "Qi, W.-G.", "Li, Y.P."] */
    return (s || '').split(/,\s*(?=[A-Z][A-Za-z'\-]+,)/).map(function (a) { return a.trim(); }).filter(Boolean);
  }

  function bibtex(d) {
    var authors = splitAuthors(d.authors);
    var first = (authors[0] || 'paper').split(',')[0].toLowerCase().replace(/[^a-z]/g, '');
    var word = (d.title || '').toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/).filter(function (w) {
      return w.length > 3 && ['with', 'from', 'over', 'into', 'under'].indexOf(w) < 0;
    })[0] || '';
    var f = [
      ['title', '{' + d.title + '}'],
      ['author', authors.join(' and ')],
      ['journal', d.journal],
      ['year', d.year],
      ['volume', d.volume],
      ['pages', d.pages],
      ['doi', d.doi]
    ].filter(function (x) { return x[1]; });
    return '@article{' + first + d.year + word + ',\n' +
      f.map(function (x) { return '  ' + x[0] + ' = {' + x[1] + '}'; }).join(',\n') + '\n}';
  }

  var dlg;
  function buildDialog() {
    dlg = document.createElement('div');
    dlg.className = 'cite-modal';
    dlg.setAttribute('role', 'dialog');
    dlg.setAttribute('aria-modal', 'true');
    dlg.setAttribute('aria-labelledby', 'cite-modal-title');
    dlg.hidden = true;
    dlg.innerHTML =
      '<div class="cite-modal__box">' +
        '<button type="button" class="cite-modal__close" aria-label="Close">&times;</button>' +
        '<h2 id="cite-modal-title">Cite this article</h2>' +
        '<div class="cite-modal__block"><div class="cite-modal__head"><span>Citation</span>' +
          '<button type="button" class="tag-btn" data-copy="text">Copy</button></div>' +
          '<p class="cite-modal__text" data-field="text"></p></div>' +
        '<div class="cite-modal__block"><div class="cite-modal__head"><span>BibTeX</span>' +
          '<button type="button" class="tag-btn" data-copy="bib">Copy</button></div>' +
          '<pre class="cite-modal__bib" data-field="bib"></pre></div>' +
      '</div>';
    document.body.appendChild(dlg);
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg || e.target.closest('.cite-modal__close')) { closeDialog(); return; }
      var b = e.target.closest('[data-copy]');
      if (b) { copyText(dlg.querySelector('[data-field="' + b.getAttribute('data-copy') + '"]'), b); }
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !dlg.hidden) { closeDialog(); } });
  }

  var lastFocus;
  function openDialog(btn) {
    if (!dlg) { buildDialog(); }
    var d = btn.dataset;
    var text = d.cite + (d.doi ? ' https://doi.org/' + d.doi : '');
    dlg.querySelector('[data-field="text"]').textContent = text;
    dlg.querySelector('[data-field="bib"]').textContent = bibtex(d);
    lastFocus = btn;
    dlg.hidden = false;
    document.body.classList.add('has-modal');
    dlg.querySelector('[data-copy="text"]').focus();
  }
  function closeDialog() {
    dlg.hidden = true;
    document.body.classList.remove('has-modal');
    if (lastFocus) { lastFocus.focus(); }
  }

  function selectNode(el) {
    var r = document.createRange();
    r.selectNodeContents(el);
    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(r);
  }

  function copyText(el, btn) {
    var text = el.textContent;
    var done = function (ok) {
      btn.textContent = ok ? 'Copied ✓' : 'Press Ctrl+C';
      btn.classList.toggle('is-copied', ok);
      setTimeout(function () { btn.textContent = 'Copy'; btn.classList.remove('is-copied'); }, 1800);
    };
    var legacy = function () {
      selectNode(el);
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
      done(ok);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { selectNode(el); done(true); }, legacy);
    } else {
      legacy();
    }
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.js-cite');
    if (btn) { e.preventDefault(); openDialog(btn); }
  });

  /* ---------- GIF-style videos: load and play only when visible ---------- */

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var videos = Array.prototype.slice.call(document.querySelectorAll('video.js-autoplay'));

  function load(v) {
    if (v.dataset.loaded) { return; }
    var src = v.querySelector('source[data-src]');
    if (src) { src.src = src.getAttribute('data-src'); }
    v.dataset.loaded = '1';
    v.load();
  }
  function play(v) {
    load(v);
    var p = v.play();
    if (p && p.catch) { p.catch(function () { /* autoplay blocked: poster stays visible */ }); }
  }

  if (reduceMotion) {
    /* Respect the OS setting: show the poster; click to play/pause. */
    videos.forEach(function (v) {
      v.addEventListener('click', function (e) {
        e.preventDefault();
        if (v.paused) { play(v); } else { v.pause(); }
      });
    });
  } else if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { play(en.target); } else if (!en.target.paused) { en.target.pause(); }
      });
    }, { rootMargin: '200px 0px' });
    videos.forEach(function (v) { io.observe(v); });
  } else {
    videos.forEach(play);
  }
})();
