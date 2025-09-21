const facts = [
  "Chuck Norris puede dividir entre cero.",
  "Cuando Chuck Norris entra a una habitación, no enciende la luz... apaga la oscuridad.",
  "Chuck Norris contó hasta el infinito. Dos veces.",
  "El calendario de Chuck Norris pasa del 31 de marzo al 2 de abril. Nadie engaña a Chuck Norris.",
  "Chuck Norris puede matar dos piedras de un solo pájaro.",
  "Chuck Norris puede escuchar el silencio.",
  "Chuck Norris duerme con la luz encendida. No porque le tenga miedo a la oscuridad, sino porque la oscuridad le tiene miedo a él.",
  "Chuck Norris puede ganar en un juego de ajedrez en un solo movimiento."
];

document.getElementById("new-fact").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const factText = document.getElementById("fact-text");
  factText.style.animation = "none";
  void factText.offsetWidth;
  factText.textContent = facts[randomIndex];
  factText.style.animation = "textPop 0.4s ease-in-out";
});
