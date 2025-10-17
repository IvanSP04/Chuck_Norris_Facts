function Home() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <div class="hero">
      <h1>🔥 Bienvenido al Mundo de Chuck Norris</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Chuck_Norris_May_2015.jpg" 
           alt="Chuck Norris" width="300" style="border-radius:15px; box-shadow: 0 8px 16px rgba(0,0,0,0.3);">
      
      <div class="card">
        <h2>🥋 La Leyenda Viviente</h2>
        <p><strong>Carlos Ray "Chuck" Norris</strong> (nacido el 10 de marzo de 1940) es un actor, artista marcial, 
        productor y guionista estadounidense. Es conocido mundialmente por sus roles en películas y series de acción, 
        así como por sus habilidades en artes marciales.</p>
        
        <p>💪 <strong>Logros destacados:</strong></p>
        <ul style="text-align: left; display: inline-block;">
          <li>Cinturón negro 8º dan en Taekwondo</li>
          <li>Cinturón negro en Tang Soo Do, Brazilian Jiu-Jitsu y Judo</li>
          <li>6 veces campeón mundial de karate (1968-1974)</li>
          <li>Estrella en el Paseo de la Fama de Hollywood</li>
          <li>Fundador del sistema de artes marciales Chun Kuk Do</li>
        </ul>
      </div>

      <div class="card">
        <h3>🎬 Carrera Legendaria</h3>
        <p>Chuck Norris protagonizó más de 30 películas y la icónica serie "Walker, Texas Ranger" 
        que duró 8 temporadas (1993-2001). Su influencia en el cine de acción es indiscutible, 
        y se ha convertido en un ícono de la cultura pop.</p>
      </div>

      <button onclick="mostrarFraseInicio()" style="font-size: 1.2em; padding: 15px 30px;">
        💥 Generar Frase Aleatoria de Chuck
      </button>
      <div id="fraseInicio" class="card" style="min-height: 60px;"></div>

      <div class="card" style="margin-top: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <p style="font-size: 1.1em; font-style: italic;">
          "Chuck Norris no duerme. Espera." 😎
        </p>
      </div>
    </div>
  `;
}

async function mostrarFraseInicio() {
  const fraseDiv = document.getElementById("fraseInicio");
  fraseDiv.innerHTML = `<p style="opacity: 0.5;">Cargando sabiduría de Chuck... 🔄</p>`;
  
  const frase = await obtenerFrase();
  const fraseEscapada = frase.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  
  fraseDiv.innerHTML = `
    <p style="font-size: 1.1em; font-style: italic;">"${frase}"</p>
    <button class="btn-secundario" onclick="guardarFavorita('${fraseEscapada}')">
      💾 Guardar en Favoritas
    </button>
  `;
}