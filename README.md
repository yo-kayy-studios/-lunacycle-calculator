# LunaCycle: Menstrual Cycle Calculator

LunaCycle is a simple, responsive web app that helps users estimate their next period, ovulation date, and fertile window from the first day of their last period and their average cycle length.

## Description

Many people want a quick, easy way to understand their menstrual cycle. LunaCycle solves this by turning two simple inputs into clear date estimates, alongside a short guide to the four phases of the cycle. It is an educational project and is not a medical tool.

## Features

- Enter the first day of your last period and your average cycle length (21 to 35 days).
- Calculates your next expected period, estimated ovulation date, and estimated fertile window.
- Input validation with clear messages for a missing date, a future date, or a cycle length outside the allowed range.
- Results appear instantly on the page with a smooth scroll to the results section.
- A cycle guide explaining the four phases: menstruation, follicular phase, ovulation, and luteal phase.
- Fully responsive layout for desktop, tablet, and mobile.
- Accessible markup, including ARIA labels, live regions for results, and reduced-motion support.

## How the Estimates Work

- **Next period:** last period date plus the cycle length.
- **Ovulation:** about 14 days before the next expected period.
- **Fertile window:** from 5 days before ovulation to 1 day after.

These are calendar-based estimates. Actual cycles vary, so results may differ from real ovulation and period dates.

## Technologies Used

- **HTML** for the page structure and form.
- **CSS** for styling, layout (Flexbox and Grid), and responsive design.
- **JavaScript** for form handling, validation, date calculations, and updating the page.

## Project Structure

```text
lunacycle-calculator/
├── index.html
├── luna.css
├── luna.js
└── README.md
```

## How to Run

1. Download or clone this repository.
2. Keep all files in the same folder.
3. Open `index.html` in any web browser.

No installation or internet connection is needed, apart from loading the Google Fonts.

## Disclaimer

LunaCycle provides educational estimates only. It is not a substitute for professional medical advice and should not be used as a method of contraception or to diagnose any condition.

## Author

Ajayi Kayode Ayodeji
