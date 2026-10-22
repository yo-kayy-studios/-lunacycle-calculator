// Allowed cycle length range (matches the text on the page)
const MIN_CYCLE = 21;
const MAX_CYCLE = 35;

// 1. Grab the elements we need
const form = document.getElementById("cycleForm");
const lastPeriodInput = document.getElementById("lastPeriod");
const cycleLengthInput = document.getElementById("cycleLength");

const nextPeriodResult = document.getElementById("nextPeriodResult");
const ovulationResult = document.getElementById("ovulationResult");
const fertileWindowResult = document.getElementById("fertileWindowResult");

// 2. Helper: add days to a date without changing the original
function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

// 3. Helper: turn a date into readable text, e.g. "Mon, 3 Nov 2026"
function formatDate(date) {
    return date.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}

// 4. Helper: show an error message in the results area
function showError(message) {
    nextPeriodResult.textContent = message;
    ovulationResult.textContent = "-";
    fertileWindowResult.textContent = "-";
}

// 5. Run when the form is submitted
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    const lastPeriodValue = lastPeriodInput.value;
    const cycleLength = Number(cycleLengthInput.value);

    // Validation
    if (!lastPeriodValue) {
        showError("Please select the first day of your last period.");
        return;
    }

    if (!cycleLength || cycleLength < MIN_CYCLE || cycleLength > MAX_CYCLE) {
        showError("Please enter a cycle length between " + MIN_CYCLE + " and " + MAX_CYCLE + " days.");
        return;
    }

    // The "T00:00:00" avoids timezone shifts that can move the date by a day
    const lastPeriod = new Date(lastPeriodValue + "T00:00:00");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (lastPeriod > today) {
        showError("Your last period date cannot be in the future.");
        return;
    }

    // The calculations
    const nextPeriod = addDays(lastPeriod, cycleLength);
    const ovulation = addDays(nextPeriod, -14);      // about 14 days before the next period
    const fertileStart = addDays(ovulation, -5);     // 5 days before ovulation
    const fertileEnd = addDays(ovulation, 1);        // 1 day after ovulation

    // Show the results
    nextPeriodResult.textContent = formatDate(nextPeriod);
    ovulationResult.textContent = formatDate(ovulation);
    fertileWindowResult.textContent = formatDate(fertileStart) + " to " + formatDate(fertileEnd);

    // Scroll down to the results
    document.getElementById("results").scrollIntoView({ behavior: "smooth" });
});