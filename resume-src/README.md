# Resume source

`cv.html` is the resume, rebuilt from the Figma file "Eyal Raz - CV" (frame A4 - 2) at 1 Figma px = 1pt.
Edit the text there, then rebuild `../resume.pdf` with Chromium via Playwright:

    python3 -c "
    from playwright.sync_api import sync_playwright; import pathlib
    with sync_playwright() as p:
        b=p.chromium.launch(); pg=b.new_page()
        pg.goto(pathlib.Path('resume-src/cv.html').resolve().as_uri())
        pg.pdf(path='resume.pdf', prefer_css_page_size=True, print_background=True); b.close()"

(WeasyPrint ignores the variable-font weight range, so every weight renders the same; Chromium handles it.)
