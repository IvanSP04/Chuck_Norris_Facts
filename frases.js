function Frases() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <h2>💬 Frases Épicas de Chuck Norris</h2>
    <p style="font-size: 1.1em;">Haz clic para recibir sabiduría infinita del universo de Chuck. 🌌</p>
    
    <button onclick="nuevaFrase()" style="font-size: 1.1em; padding: 15px 30px; margin: 20px 0;">
      ⚡ Nueva Frase Aleatoria
    </button>
    
    <div id="contenedorFrase" class="card" style="min-height: 100px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
      <p style="font-style: italic; font-size: 1.1em;">
        Haz clic en el botón para obtener una frase épica...
      </p>
    </div>

    <h3 style="margin-top: 40px;">❤️ Tus Últimas Frases Favoritas</h3>
    <p style="opacity: 0.8; margin-bottom: 20px;">
      Las frases que guardes aquí aparecerán en la sección de Favoritos.
    </p>
    <div id="favoritas"></div>

    <div class="card" style="margin-top: 40px; background: #1a1a2e; color: #eee;">
      <h3>🎯 Algunas Frases Clásicas:</h3>
      <ul style="text-align: left; display: inline-block; line-height: 1.8;">
        <li>"Chuck Norris no duerme. Espera."</li>
        <li>"Chuck Norris puede dividir por cero."</li>
        <li>"Chuck Norris cuenta hasta el infinito. Dos veces."</li>
        <li>"Cuando Chuck Norris hace flexiones, no sube él, baja la Tierra."</li>
        <li>"Chuck Norris puede ganar una partida de Conecta 4 en solo 3 movimientos."</li>
        <li>"El monstruo del armario revisa si está Chuck Norris antes de dormir."</li>
        <li>"Chuck Norris no usa reloj. Él decide qué hora es."</li>
        <li>"La muerte tuvo una experiencia cercana con Chuck Norris."</li>
        <li>"Chuck Norris puede creer que no es mantequilla."</li>
        <li>"Chuck Norris ganó el Tour de Francia en bicicleta estática."</li>
      </ul>
    </div>
  `;
  mostrarFavoritas();
}

async function nuevaFrase() {
  const contenedor = document.getElementById("contenedorFrase");
  contenedor.innerHTML = `
    <p style="opacity: 0.7; font-size: 1em;">
      ⏳ Consultando el oráculo de Chuck Norris...
    </p>
  `;
  
  const frase = await obtenerFrase();
  
  // Escapar comillas para evitar errores en el onclick
  const fraseEscapada = frase.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  
  contenedor.innerHTML = `
    <p style="font-size: 1.2em; font-style: italic; margin-bottom: 20px;">
      "${frase}"
    </p>
    <button class="btn-secundario" onclick="guardarFavorita('${fraseEscapada}')">
      ❤️ Guardar en Favoritos
    </button>
  `;
}