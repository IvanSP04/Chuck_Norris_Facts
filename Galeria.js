function Galeria() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <h2>🖼️ Galería de Chuck Norris</h2>
    <p style="font-size: 1.1em; margin-bottom: 30px;">
      Una colección visual de la leyenda a través de los años. 📸
    </p>

    <div class="gallery">
      <div class="gallery-item">
        <img src="Imagenes/Leyenda.png" 
             alt="Chuck Norris 2015">
        <p>Chuck Norris en 2015 - La leyenda viviente</p>
      </div>

      <div class="gallery-item">
        <img src="Imagenes/2017.png" 
             alt="Chuck Norris 2017">
        <p>Evento público en 2017</p>
      </div>

      <div class="gallery-item">
        <img src="Imagenes/2008.png" 
             alt="Chuck Norris 2008">
        <p>Chuck Norris en 2008</p>
      </div>

      <div class="gallery-item">
        <img src="Imagenes/Dorado.png" 
             alt="Chuck Norris joven">
        <p>Chuck en sus años dorados de acción</p>
      </div>

      <div class="gallery-item">
        <img src="Imagenes/Sonrisa.png" 
             alt="Chuck Norris sonriendo">
        <p>Chuck Norris con su icónica sonrisa</p>
      </div>

      <div class="gallery-item">
        <img src="Imagenes/2005.png" 
             alt="Chuck Norris 2005">
        <p>Chuck Norris en 2005</p>
      </div>
    </div>

    <div class="card" style="margin-top: 40px;">
      <h3>🎬 Momentos Icónicos en Pantalla</h3>
      <p style="margin: 20px 0;">
        A lo largo de su carrera, Chuck Norris ha protagonizado escenas inolvidables 
        que han quedado grabadas en la memoria colectiva del cine de acción.
      </p>
      
      <div style="text-align: left; max-width: 600px; margin: 0 auto;">
        <h4 style="color: #667eea;">🥋 Escenas Legendarias:</h4>
        <ul style="line-height: 1.8;">
          <li><strong>Pelea en el Coliseo</strong> - Way of the Dragon (1972): La épica batalla contra Bruce Lee</li>
          <li><strong>La patada giratoria</strong> - Walker, Texas Ranger: Su movimiento más icónico</li>
          <li><strong>Moto con misiles</strong> - The Delta Force (1986): Acción sobre ruedas</li>
          <li><strong>Enterrado vivo</strong> - Lone Wolf McQuade (1983): Escapa conduciendo desde su camioneta sepultada</li>
          <li><strong>Vs. Asesino indestructible</strong> - Silent Rage (1982): Chuck vs. un experimento científico letal</li>
        </ul>
      </div>
    </div>

    <div class="card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white;">
      <h3>📊 Chuck Norris en Números</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
        <div>
          <h4 style="font-size: 2em; margin: 10px 0; color: white;">30+</h4>
          <p>Películas protagonizadas</p>
        </div>
        <div>
          <h4 style="font-size: 2em; margin: 10px 0; color: white;">8</h4>
          <p>Temporadas de Walker, Texas Ranger</p>
        </div>
        <div>
          <h4 style="font-size: 2em; margin: 10px 0; color: white;">6x</h4>
          <p>Campeón Mundial de Karate</p>
        </div>
        <div>
          <h4 style="font-size: 2em; margin: 10px 0; color: white;">50+</h4>
          <p>Años de carrera activa</p>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 30px;">
      <h3>🌟 Reconocimientos y Premios</h3>
      <ul style="text-align: left; display: inline-block; line-height: 1.8;">
        <li>⭐ Estrella en el Paseo de la Fama de Hollywood (1989)</li>
        <li>🏆 Salón de la Fama de Artes Marciales (1997)</li>
        <li>🥋 8º Dan de Taekwondo - Gran Maestro</li>
        <li>📺 Golden Boot Award por Walker, Texas Ranger</li>
        <li>🎖️ Veterano Honorario de la Fuerza Aérea de EE.UU.</li>
        <li>🎬 Lifetime Achievement Award en múltiples festivales de cine</li>
      </ul>
    </div>

    <div class="card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
      <h3>😂 Memes y Cultura Pop</h3>
      <p style="font-size: 1.1em; line-height: 1.8;">
        Chuck Norris se ha convertido en un fenómeno viral en internet gracias a los famosos 
        "Chuck Norris Facts" que se popularizaron en 2005. Estos memes humorísticos 
        exageran sus habilidades hasta niveles absurdos y divertidos.
      </p>
    </div>

    <!-- Galería de Memes -->
    <div class="gallery">
      <div class="gallery-item">
        <img src="Imagenes/Meme5.png" alt="Chuck Norris Meme 1">
        <p>Jesús camina sobre el agua, pero Chuck nada por carretera 😎</p>
      </div>

      <div class="gallery-item">
        <img src="Imagenes/Meme6.png" alt="Chuck Norris Meme 2">
        <p>James Cameron y el documental perdido 🎬</p>
      </div>

      <div class="gallery-item">
        <img src="Imagenes/Meme3.png" alt="Chuck Norris Meme 3">
        <p>Capturando Pokémon desde teléfono fijo 📞</p>
      </div>

      <div class="gallery-item">
        <img src="Imagenes/Meme2.png" alt="Chuck Norris Meme 4">
        <p>Chuck no lee libros, los intimida 📚</p>
      </div>

      <div class="gallery-item">
        <img src="Imagenes/Meme1.png" alt="Chuck Norris Meme 5">
        <p>Hasta Papá Noel le teme 🎅</p>
      </div>
    </div>

    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 20px 0;">
        <h4 style="color: #ffd700; text-align: center;">🎯 Más Memes Clásicos en Texto:</h4>
        <ul style="text-align: left; line-height: 2; margin-top: 15px;">
          <li>"Chuck Norris no hace flexiones. Él empuja la Tierra hacia abajo."</li>
          <li>"Chuck Norris puede encender una fogata frotando dos cubos de hielo."</li>
          <li>"Cuando Chuck Norris entra al agua, él no se moja. El agua se Chuck Norris."</li>
          <li>"Chuck Norris contó hasta el infinito. Dos veces."</li>
          <li>"El Big Bang fue Chuck Norris aplaudiendo."</li>
          <li>"Chuck Norris puede ganar al solitario con solo tres cartas."</li>
          <li>"La muerte tuvo una experiencia cercana con Chuck Norris."</li>
          <li>"Chuck Norris puede dividir por cero."</li>
        </ul>
      </div>

      <p style="font-style: italic; margin-top: 20px; opacity: 0.9;">
        💡 El propio Chuck Norris ha dicho que encuentra estos memes divertidos, 
        aunque aclara que no todos son verdad... ¿o sí? 😏
      </p>
    </div>
        <ul style="text-align: left; line-height: 2; margin-top: 15px;">
          <li>"Chuck Norris no hace flexiones. Él empuja la Tierra hacia abajo."</li>
          <li>"Chuck Norris puede encender una fogata frotando dos cubos de hielo."</li>
          <li>"Cuando Chuck Norris entra al agua, él no se moja. El agua se Chuck Norris."</li>
          <li>"Chuck Norris contó hasta el infinito. Dos veces."</li>
          <li>"El Big Bang fue Chuck Norris aplaudiendo."</li>
          <li>"Chuck Norris puede ganar al solitario con solo tres cartas."</li>
          <li>"La muerte tuvo una experiencia cercana con Chuck Norris."</li>
          <li>"Chuck Norris puede dividir por cero."</li>
        </ul>
      </div>

      <p style="font-style: italic; margin-top: 20px; opacity: 0.9;">
        💡 El propio Chuck Norris ha dicho que encuentra estos memes divertidos, 
        aunque aclara que no todos son verdad... ¿o sí? 😏
      </p>
    </div>

    <div class="card">
      <h3>📺 Apariciones Memorables en TV</h3>
      <ul style="text-align: left; display: inline-block; line-height: 1.8;">
        <li>🎪 <strong>The Late Show</strong> - Múltiples apariciones como invitado especial</li>
        <li>🎬 <strong>The Expendables 2</strong> (2012) - Cameo épico con otros íconos de acción</li>
        <li>📺 <strong>Hawaii Five-0</strong> (2011) - Aparición especial</li>
        <li>🎮 <strong>Comerciales de Total Gym</strong> - Icónico vocero por más de 20 años</li>
        <li>🎭 <strong>Saturday Night Live</strong> - Sketch memorable</li>
      </ul>
    </div>

    <div class="card" style="background: #1a1a2e; color: #eee;">
      <h3 style="color: #ffd700;">🎨 Impacto Cultural</h3>
      <p style="text-align: left; line-height: 1.8;">
        Chuck Norris ha trascendido el cine y se ha convertido en un ícono de la cultura popular. 
        Su imagen representa fuerza, determinación y un sentido del humor que conecta con 
        millones de personas alrededor del mundo.
      </p>
      <p style="text-align: left; line-height: 1.8; margin-top: 15px;">
        Desde videojuegos hasta referencias en series animadas, pasando por millones de memes 
        en redes sociales, Chuck Norris sigue siendo relevante décadas después de su debut 
        en el cine.
      </p>
    </div>

    <div class="card" style="text-align: center; padding: 40px;">
      <h3 style="font-size: 2em;">💪</h3>
      <p style="font-size: 1.3em; font-weight: bold; color: #ffd700;">
        "La leyenda nunca muere"
      </p>
      <p style="opacity: 0.8; margin-top: 10px;">
        Chuck Norris - Icono del cine de acción
      </p>
    </div>
  `;
}