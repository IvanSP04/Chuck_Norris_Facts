// ------------------ API DE CHUCK NORRIS ------------------
async function obtenerFrase() {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    return data.value;
  } catch (error) {
    return "Chuck Norris nunca falla, pero la API podría estar descansando. 💪";
  }
}

// ------------------ GESTIÓN DE FAVORITAS ------------------
let favoritasMemoria = [];

function guardarFavorita(frase) {
  // Limpiar la frase de escapes
  frase = frase.replace(/\\'/g, "'").replace(/\\\\/g, "\\");
  
  if (!favoritasMemoria.includes(frase)) {
    favoritasMemoria.push(frase);
    alert("💾 ¡Frase guardada en favoritas!");
    // Si estamos en la sección de favoritos, actualizar la vista
    if (document.getElementById("listaFavoritas")) {
      Favoritos();
    }
  } else {
    alert("⚠️ Esta frase ya está en tus favoritas");
  }
}

function eliminarFavorita(index) {
  if (confirm("¿Estás seguro de eliminar esta frase de favoritas?")) {
    favoritasMemoria.splice(index, 1);
    alert("🗑️ Frase eliminada");
    // Actualizar la vista de favoritos
    Favoritos();
  }
}

function mostrarFavoritas() {
  const cont = document.getElementById("favoritas");
  if (!cont) return;
  
  if (favoritasMemoria.length === 0) {
    cont.innerHTML = `<div class="card"><p style="opacity:0.6; text-align:center;">No tienes frases favoritas aún. ¡Guarda algunas! 💾</p></div>`;
  } else {
    // Mostrar solo las últimas 3 favoritas
    const ultimas = favoritasMemoria.slice(-3).reverse();
    cont.innerHTML = ultimas.map((f) => `
      <div class="card">
        <p>"${f}"</p>
      </div>
    `).join("");
  }
}

// ------------------ SECCIÓN DE FAVORITOS ------------------
function Favoritos() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <h2>❤️ Mis Frases Favoritas</h2>
    <p style="font-size: 1.1em; margin-bottom: 30px;">
      Aquí están todas las frases que has guardado. ¡Colecciónalas todas! 🌟
    </p>
    
    <div id="listaFavoritas"></div>
    
    <div class="card" style="margin-top: 40px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white;">
      <h3>💡 Tip:</h3>
      <p>Ve a la sección de "Frases Épicas" para generar nuevas frases y guardar tus favoritas.</p>
      <button onclick="Frases()" style="margin-top: 15px; background: white; color: #f5576c;">
        ⚡ Ir a Frases Épicas
      </button>
    </div>
  `;
  
  mostrarFavoritasCompletas();
}

function mostrarFavoritasCompletas() {
  const cont = document.getElementById("listaFavoritas");
  if (!cont) return;
  
  if (favoritasMemoria.length === 0) {
    cont.innerHTML = `
      <div class="card" style="text-align: center; padding: 50px;">
        <h3 style="font-size: 3em; margin-bottom: 20px;">📭</h3>
        <p style="font-size: 1.2em; opacity:0.8;">No tienes frases favoritas aún</p>
        <p style="opacity:0.6; margin-top: 10px;">¡Empieza a coleccionar frases épicas de Chuck Norris!</p>
      </div>
    `;
  } else {
    cont.innerHTML = `
      <div style="text-align: center; margin-bottom: 20px;">
        <p style="font-size: 1.1em; color: #ffd700;">
          🎉 Tienes <strong>${favoritasMemoria.length}</strong> frase${favoritasMemoria.length > 1 ? 's' : ''} guardada${favoritasMemoria.length > 1 ? 's' : ''}
        </p>
      </div>
    ` + favoritasMemoria.map((f, index) => `
      <div class="card" style="position: relative;">
        <button onclick="eliminarFavorita(${index})" 
                style="position: absolute; top: 15px; right: 15px; background: #ff4757; padding: 8px 15px; font-size: 14px;"
                title="Eliminar de favoritos">
          ❌ Quitar
        </button>
        <p style="font-size: 1.1em; font-style: italic; padding-right: 100px; margin-top: 10px;">
          "${f}"
        </p>
        <p style="text-align: right; opacity: 0.6; font-size: 0.9em; margin-top: 15px;">
          Favorito #${index + 1}
        </p>
      </div>
    `).join("");
  }
}

// ------------------ INICIALIZACIÓN ------------------
window.onload = () => {
  Home();
};