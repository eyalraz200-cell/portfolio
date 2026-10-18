# Resume source

`cv.html` is the resume, styled like the site (Josefin Slab / Josefin Sans, black on white).
Edit the text there, then rebuild `../resume.pdf`:

    DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib python3 -m weasyprint resume-src/cv.html resume.pdf

(WeasyPrint via `pip3 install weasyprint`, plus `brew install pango`.)
