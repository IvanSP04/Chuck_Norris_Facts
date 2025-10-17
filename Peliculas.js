function Peliculas() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <h2>🎬 Películas y Series de Chuck Norris</h2>
    <p style="font-size: 1.1em; margin-bottom: 30px;">
      Haz clic en cada película para ver más detalles 👇
    </p>

    <div class="card pelicula-card" onclick="toggleDetalle(1)">
      <h3>📺 Walker, Texas Ranger (1993-2001)</h3>
      <p><strong>Temporadas:</strong> 8 temporadas, 203 episodios</p>
      <p style="font-size: 0.9em; opacity: 0.7;">Haz clic para más info...</p>
      <div id="detalle-1" class="pelicula-detalle">
        <h4>📖 Sinopsis Completa:</h4>
        <p style="text-align: left;">Cordell Walker es un Ranger de Texas que lucha contra el crimen 
        con sus habilidades en artes marciales y su inquebrantable sentido de la justicia. 
        Junto a su compañero James Trivette, resuelve casos complejos mientras entrena a jóvenes 
        en su rancho.</p>
        <h4>🎭 Reparto Principal:</h4>
        <p style="text-align: left;">• Chuck Norris como Cordell Walker<br>
        • Clarence Gilyard Jr. como James Trivette<br>
        • Sheree J. Wilson como Alex Cahill<br>
        • Noble Willingham como C.D. Parker</p>
        <h4>⭐ Dato Curioso:</h4>
        <p style="text-align: left;">La serie fue transmitida en más de 100 países y es una de las 
        series de acción más exitosas de los años 90. La famosa "patada giratoria" de Walker 
        se convirtió en un ícono cultural.</p>
        <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐ (9/10)</p>
      </div>
    </div>

    <div class="card pelicula-card" onclick="toggleDetalle(2)">
      <h3>🎥 The Delta Force (1986)</h3>
      <p><strong>Director:</strong> Menahem Golan | <strong>Duración:</strong> 125 min</p>
      <p style="font-size: 0.9em; opacity: 0.7;">Haz clic para más info...</p>
      <div id="detalle-2" class="pelicula-detalle">
        <h4>📖 Sinopsis Completa:</h4>
        <p style="text-align: left;">El Mayor Scott McCoy lidera a la fuerza Delta en una misión 
        para rescatar rehenes de un avión secuestrado por terroristas. Chuck pilotea una moto 
        equipada con misiles en escenas de acción épicas.</p>
        <h4>🎭 Reparto:</h4>
        <p style="text-align: left;">• Chuck Norris como Mayor Scott McCoy<br>
        • Lee Marvin como Coronel Nick Alexander<br>
        • Martin Balsam como Ben Kaplan<br>
        • Joey Bishop como Harry Goldman</p>
        <h4>💰 Taquilla:</h4>
        <p style="text-align: left;">$17.7 millones en Estados Unidos. Gran éxito de taquilla en su época.</p>
        <h4>⭐ Dato Curioso:</h4>
        <p style="text-align: left;">La moto con misiles de Chuck se convirtió en uno de los 
        vehículos más icónicos del cine de acción de los 80s.</p>
        <p><strong>Rating:</strong> ⭐⭐⭐⭐ (8/10)</p>
      </div>
    </div>

    <div class="card pelicula-card" onclick="toggleDetalle(3)">
      <h3>⚔️ Missing in Action (1984)</h3>
      <p><strong>Director:</strong> Joseph Zito | <strong>Duración:</strong> 101 min</p>
      <p style="font-size: 0.9em; opacity: 0.7;">Haz clic para más info...</p>
      <div id="detalle-3" class="pelicula-detalle">
        <h4>📖 Sinopsis Completa:</h4>
        <p style="text-align: left;">El Coronel James Braddock regresa a Vietnam para rescatar 
        prisioneros de guerra estadounidenses que siguen cautivos. Una película que definió 
        el género de acción de los 80s con su intensidad y patriotismo.</p>
        <h4>🎭 Reparto:</h4>
        <p style="text-align: left;">• Chuck Norris como Coronel James Braddock<br>
        • M. Emmet Walsh como Tuck<br>
        • David Tress como Senador Porter<br>
        • Lenore Kasdorf como Ann</p>
        <h4>🎬 Secuelas:</h4>
        <p style="text-align: left;">• Missing in Action 2: The Beginning (1985)<br>
        • Braddock: Missing in Action III (1988)</p>
        <h4>⭐ Dato Curioso:</h4>
        <p style="text-align: left;">Originalmente iba a ser la segunda película, pero fue tan buena 
        que decidieron estrenarla primero.</p>
        <p><strong>Rating:</strong> ⭐⭐⭐⭐ (7.5/10)</p>
      </div>
    </div>

    <div class="card pelicula-card" onclick="toggleDetalle(4)">
      <h3>🐲 Way of the Dragon (1972)</h3>
      <p><strong>Director:</strong> Bruce Lee | <strong>Duración:</strong> 100 min</p>
      <p style="font-size: 0.9em; opacity: 0.7;">Haz clic para más info...</p>
      <div id="detalle-4" class="pelicula-detalle">
        <h4>📖 Sinopsis Completa:</h4>
        <p style="text-align: left;">Tang Lung viaja a Roma para ayudar a su familia con su 
        restaurante que está siendo amenazado por mafiosos. Chuck Norris interpreta a Colt, 
        un experto en karate contratado para enfrentarse a Tang Lung en el Coliseo Romano.</p>
        <h4>🎭 Reparto:</h4>
        <p style="text-align: left;">• Bruce Lee como Tang Lung<br>
        • Chuck Norris como Colt<br>
        • Nora Miao como Chen Ching Hua<br>
        • Wei Ping-ao como Ho</p>
        <h4>🥋 La Pelea Legendaria:</h4>
        <p style="text-align: left;">La batalla final entre Bruce Lee y Chuck Norris en el Coliseo 
        Romano es considerada una de las mejores escenas de combate en la historia del cine de 
        artes marciales. Duró 10 minutos en pantalla.</p>
        <h4>⭐ Dato Curioso:</h4>
        <p style="text-align: left;">Esta fue la primera gran aparición de Chuck en el cine. 
        Bruce Lee lo eligió personalmente por su reputación en karate. Chuck fue portador del 
        ataúd de Bruce Lee en 1973.</p>
        <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐ (9.5/10)</p>
      </div>
    </div>

    <div class="card pelicula-card" onclick="toggleDetalle(5)">
      <h3>🚔 Code of Silence (1985)</h3>
      <p><strong>Director:</strong> Andrew Davis | <strong>Duración:</strong> 101 min</p>
      <p style="font-size: 0.9em; opacity: 0.7;">Haz clic para más info...</p>
      <div id="detalle-5" class="pelicula-detalle">
        <h4>📖 Sinopsis Completa:</h4>
        <p style="text-align: left;">El sargento Eddie Cusack es un policía de Chicago que 
        enfrenta tanto a pandillas como a la corrupción dentro de su propio departamento. 
        No necesita refuerzos, solo justicia.</p>
        <h4>🎭 Reparto:</h4>
        <p style="text-align: left;">• Chuck Norris como Sargento Eddie Cusack<br>
        • Henry Silva como Luis Comacho<br>
        • Bert Remsen como Comandante Kates<br>
        • Molly Hagan como Diana Luna</p>
        <h4>⭐ Crítica:</h4>
        <p style="text-align: left;">Considerada por muchos críticos como la mejor película de 
        Chuck Norris por su realismo y giros argumentales. Roger Ebert la elogió especialmente.</p>
        <h4>🤖 Robot Policial:</h4>
        <p style="text-align: left;">La película presenta un robot policial llamado "Prowler" 
        que Chuck usa en la secuencia final, adelantándose a su época.</p>
        <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐ (8.5/10)</p>
      </div>
    </div>

    <div class="card pelicula-card" onclick="toggleDetalle(6)">
      <h3>💥 Invasion U.S.A. (1985)</h3>
      <p><strong>Director:</strong> Joseph Zito | <strong>Duración:</strong> 107 min</p>
      <p style="font-size: 0.9em; opacity: 0.7;">Haz clic para más info...</p>
      <div id="detalle-6" class="pelicula-detalle">
        <h4>📖 Sinopsis Completa:</h4>
        <p style="text-align: left;">Matt Hunter, un agente retirado de la CIA, debe detener 
        una invasión terrorista a Estados Unidos. Chuck salva al país prácticamente solo con 
        su camioneta, bazucas y determinación.</p>
        <h4>🎭 Reparto:</h4>
        <p style="text-align: left;">• Chuck Norris como Matt Hunter<br>
        • Richard Lynch como Mikhail Rostov<br>
        • Melissa Prophet como McGuire<br>
        • Alexander Zale como Cárdenas</p>
        <h4>💣 Acción Explosiva:</h4>
        <p style="text-align: left;">La película es conocida por sus escenas de explosiones 
        masivas, tiroteos y Chuck conduciendo un camión equipado con bazucas.</p>
        <h4>⭐ Dato Curioso:</h4>
        <p style="text-align: left;">Se filmó principalmente en Florida y Atlanta. El presupuesto 
        se gastó principalmente en pirotecnia.</p>
        <p><strong>Rating:</strong> ⭐⭐⭐⭐ (7/10)</p>
      </div>
    </div>

    <div class="card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white;">
      <h3>🏆 Legado Cinematográfico</h3>
      <p>Con más de 30 películas y 8 temporadas de televisión, Chuck Norris ha sido 
      protagonista indiscutible del cine de acción desde los años 70 hasta la actualidad.</p>
      <p><strong>Total:</strong> 30+ películas | 3 series de TV</p>
    </div>
  `;
}

function toggleDetalle(id) {
  const detalle = document.getElementById(`detalle-${id}`);
  if (detalle.classList.contains('show')) {
    detalle.classList.remove('show');
  } else {
    // Cerrar todos los demás
    document.querySelectorAll('.pelicula-detalle').forEach(d => d.classList.remove('show'));
    // Abrir el seleccionado
    detalle.classList.add('show');
  }
}