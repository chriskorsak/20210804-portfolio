//populate current year for copyright info in footer
function getCurrentYear () {
  return new Date().getFullYear();
}

const currentYear = getCurrentYear();
document.getElementById('current-year').innerText = currentYear;
