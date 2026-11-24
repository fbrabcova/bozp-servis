// Otevírání a zavírání menu na mobilu.
// querySelector najde na stránce první prvek podle CSS výběru (jako v style.css).
const tlacitko = document.querySelector('.menu-tlacitko');
const hlavicka = document.querySelector('.hlavicka');

// Po kliknutí na tlačítko přidáme hlavičce třídu "menu-otevrene", nebo ji odebereme.
// Samotné zobrazení menu pak zařídí CSS.
tlacitko.addEventListener('click', () => {
  const otevreno = hlavicka.classList.toggle('menu-otevrene');
  tlacitko.setAttribute('aria-expanded', otevreno);           // informace pro čtečky obrazovky
  tlacitko.textContent = otevreno ? '✕' : '☰';                // křížek, nebo tři čárky
  tlacitko.setAttribute('aria-label', otevreno ? 'Zavřít menu' : 'Otevřít menu');
});

// Po kliknutí na odkaz v menu se menu zase zavře.
document.querySelectorAll('.menu a').forEach((odkaz) => {
  odkaz.addEventListener('click', () => {
    hlavicka.classList.remove('menu-otevrene');
    tlacitko.setAttribute('aria-expanded', 'false');
    tlacitko.textContent = '☰';
    tlacitko.setAttribute('aria-label', 'Otevřít menu');
  });
});
