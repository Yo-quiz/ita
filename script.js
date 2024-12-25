// Lista completa de Yo-kai con sus nombres e imágenes
const yoKaiList = [
    { name: "Padezoma", img: "alcaldero.png" },
    { name: "Padesolo", img: "sinna.png" },
    { name: "Mambo", img: "sinnareno.png" },
    { name: "Katanoh", img: "katano.png" },
    { name: "Katachiom", img: "katananai.png" },
    { name: "Pigrabbio", img: "katakroken.png" },
    { name: "Nervimacho", img: "mochimacho.png" },
    { name: "Miomacho", img: "machimio.png" },
    { name: "Adelmo", img: "yelmandante.png" },
    { name: "Uniguerriero", img: "juntollero.png" },
    { name: "Capitavere", img: "genedaver.png" },
    { name: "Leofuoco", img: "flamileon.png" },
    { name: "Leosismo", img: "tembloleon.png" },
    { name: "Siro", img: "sirleon.png" },
    { name: "Zardo", img: "ludorai.png" },
    { name: "Lucenio", img: "lustre.png" },
    { name: "Quietana", img: "Furtre.png" },
    { name: "Aurio", img: "dortre.png" },
    { name: "Benkei", img: "benkei.png" },
    { name: "B3-NK1", img: "b3-nk1.png" },
    { name: "Nipponon", img: "sushiyama.png" },
    { name: "Kapunkai", img: "kapunki.png" },
    { name: "Scarafante", img: "lucharabajo.png" },
    { name: "Scaragen", img: "camperabajo.png" },
    { name: "Scaragone", img: "chafarabajo.png" },
    { name: "Furyo", img: "osfurio.png" },
    { name: "Homblu", img: "sacoco.png" },
    { name: "Grumoko", img: "mokopavo.png" },
    { name: "Ocachu", img: "pachus.png" },
    { name: "Dimenticap", img: "komemo.png" },
    { name: "Scioccap", img: "tontolin.png" },
    { name: "Fregmen", img: "yopaso.png" },
    { name: "Basbast", img: "puf.png" },
    { name: "Unabast", img: "yanomas.png" },
    { name: "Rubaris", img: "algazara.png" },
    { name: "Blubo", img: "labizula.png" },
    { name: "Rivela", img: "cotilleja.png" },
    { name: "Kia-Kia", img: "marulleja.png" },
    { name: "Schelevekia", img: "esquelleja.png" },
    { name: "Cupistol", img: "cupistolo.png" },
    { name: "Casanuva", img: "casanovo.png" },
    { name: "Casanono", img: "casanono.png" },
    { name: "Segnam", img: "ondivoro.png" },
    { name: "Amplicamp", img: "coberturo.png" },
    { name: "Restat", img: "estatinarca.png" },
    { name: "Traspec", img: "telespejo.png" },
    { name: "Scuriflesso", img: "malpejismo.png" },
    { name: "Illuguroo", img: "iluho.png" },
    { name: "Eluguroo", img: "eluho.png" },
    { name: "Vaguroo", img: "ubiuho.png" },
    { name: "Trespy", img: "trilepata.png" },
    { name: "Quadaspy", img: "tetrariosa.png" },
    { name: "Tengu", img: "tengu.png" },
    { name: "Tenguflamma", img: "flamngu.png" },
    { name: "Kyubi", img: "kyubi.png" },
{ name: "Gelocoda", img: "nievacolas.png" },
{ name: "Gusciolento", img: "tentelento.png" },
{ name: "Muchomacho", img: "tentemacho.png" },
{ name: "Goro-Goro", img: "tenterila.png" },
{ name: "Nono-No", img: "nihablar.png" },
{ name: "Imposs", img: "impas.png" },
{ name: "Fuimuro", img: "murallin.png" },
{ name: "Korpo", img: "lorigon.png" },
{ name: "Incontifante", img: "inquielifante.png" },
{ name: "Duroboscide", img: "perselefante.png" },
{ name: "Bloccospino", img: "globqueo.png" },
{ name: "Pesospino", img: "globtundente.png" },
{ name: "Ghelo", img: "montaña_loca.png" },
{ name: "Vulcando", img: "lord_lava.png" },
{ name: "Malandro", img: "rebelcebu.png" },
{ name: "Bandido", img: "caporrista.png" },
{ name: "Fratosto", img: "hermanion.png" },
{ name: "Rinofante", img: "pegarabajo.png" },
{ name: "Rinorme", img: "enormarabajo.png" },
{ name: "Multicorno", img: "cuernarabajo.png" },
{ name: "Castelius III", img: "castelius_III.png" },
{ name: "Castelius II", img: "castelius_II.png" },
{ name: "Castelius I", img: "Castelius_I.png" },
{ name: "Max Castelius", img: "Maxicastelius.png" },
{ name: "Robonyan", img: "robonyan.png" },
{ name: "Orobonyan", img: "aureonyan.png" },
{ name: "Terrio", img: "pom.png" },
{ name: "Aqueo", img: "flus.png" },
    { name: "Teskiant", img: "deslumbrella.png" },
    { name: "Stylossa", img: "rechinella.png" },
    { name: "Skelebell", img: "esquelebella.png" },
    { name: "Cicalama", img: "ningarra.png" },
    { name: "Cicabile", img: "habilgarra.png" },
    { name: "Cicanto", img: "cantigarra.png" },
    { name: "Fre-D", img: "escanlofrio.png" },
    { name: "Gelhuahua", img: "frihuahua.png" },
    { name: "Kaldokan", img: "lavadenco.png" },
    { name: "Jibanyan", img: "jibanyan.png" },
    { name: "Spinyan", img: "espinyan.png" },
    { name: "Malonyan", img: "pelochnyan.png" },
    { name: "Cammikappa", img: "kappandante.png" },
    { name: "Movikappa", img: "kappadachin.png" },
    { name: "Tavolama", img: "kapparfista.png" },
    { name: "Komasan", img: "komasan.png" },
    { name: "Crinikoma", img: "komaleon.png" },
    { name: "Komajiro", img: "komajiro.png" },
    { name: "Komagre", img: "komatigrado.png" },
    { name: "Baku", img: "baku.png" },
    { name: "Blantapiro", img: "blanpir.png" },
    { name: "Carnino", img: "pufipatitas.png" },
    { name: "Amoroseo", img: "pufilindo.png" },
    { name: "Amoroscuro", img: "pufimaloso.png" },
    { name: "Gelina", img: "fristina.png" },
    { name: "Nevaria", img: "granizia.png" },
    { name: "Neradama", img: "damona.png" },
{ name: "Danz", img: "cimbron.png" },
{ name: "Banz", img: "pasodon.png" },
{ name: "Tanz", img: "ritma.png" },
{ name: "Ovojo", img: "kieroto.png" },
{ name: "Magnalestus", img: "zampo.png" },
{ name: "Nonno Fame", img: "abuzampa.png" },
{ name: "Offam", img: "gargazampa.png" },
{ name: "Nonno Kiko", img: "aburroz.png" },
{ name: "Pocotanto", img: "nomeda.png" },
{ name: "Optimio", img: "opti.png" },
{ name: "Farfanima", img: "enerposa.png" },
{ name: "Farfanemi", img: "eneposa.png" },
{ name: "Farfamiglio", img: "mejorposa.png" },
{ name: "Farfavigo", img: "vivariposa.png" },
{ name: "Felicio", img: "felisonte.png" },
{ name: "Mutevina", img: "reversa.png" },
{ name: "Mutevana", img: "reversada.png" },
{ name: "Tridonio", img: "tricotom.png" },
{ name: "Posidonio", img: "dadivo.png" },
{ name: "Lanchu", img: "bolilete.png" },
{ name: "Dopios", img: "doblilete.png" },
{ name: "Babbo Saetta", img: "papa_rayo.png" },
{ name: "Zio Infinio", img: "tio_infinito.png" },
{ name: "Mamma Aura", img: "mama_aura.png" },
{ name: "Zia Cora", img: "tita_corazon.png" },
{ name: "Demanone", img: "noguio.png" },
{ name: "Favorio", img: "topami.png" },
{ name: "Ferispalla", img: "algio.png" },
{ name: "Dolorr", img: "agujeto.png" },
{ name: "Agonio", img: "machaka.png" },
{ name: "Negatibuzz", img: "negatisquito.png" },
{ name: "Malazanz", img: "deprisquito.png" },
{ name: "Prudor", img: "picorron.png" },
{ name: "Annebio", img: "nomeven.png" },
{ name: "Blando", img: "nostoy.png" },
{ name: "Nullio", img: "nul_.png" },
{ name: "Dentrostrello", img: "encielago.png" },
{ name: "Casastrello", img: "caserielago.png" },
{ name: "Eremistrello", img: "ermicielago.png" },
{ name: "Suspicion", img: "suspicioni.png" },
{ name: "Collerio", img: "pataletoni.png" },
{ name: "Bastian", img: "contrarioni.png" },
{ name: "Tenguleggon", img: "tengulecto.png" },
{ name: "Uccelleggon", img: "tengullon.png" },
{ name: "Negasus", img: "negasus.png" },
{ name: "Malvallo", img: "pifiasus.png" },
{ name: "Trèmone", img: "timidiablo.png" },
{ name: "Prodemone", img: "osademonio.png" },
{ name: "Conte Cario", img: "conde_caries.png" },
{ name: "Avodus", img: "avarqueroso.png" },
{ name: "Malavo", img: "diables.png" },
{ name: "Malagol", img: "ejemtos.png" },
{ name: "Maloriccio", img: "erizlor.png" },
{ name: "Uccelladro", img: "cartepollo.png" },
{ name: "Voladdome", img: "rafaz.png" },
{ name: "Buhu", img: "ayay.png" },
{ name: "Sciattandato", img: "horterraro.png" },
{ name: "Disnero", img: "alarcion.png" },
{ name: "Canom", img: "cantonio.png" },
{ name: "Bi-Canom", img: "multiniche.png" },
{ name: "Herr Bero", img: "ser_bero.png" },
{ name: "Umio", img: "goto.png" },
{ name: "Plovio", img: "sirimiri.png" },
{ name: "Frisco", img: "copo.png" },
{ name: "Grandion", img: "ventisquero.png" },
{ name: "Sanguinasio", img: "coagulon.png" },
{ name: "Kiakierenata", img: "reboca.png" },
{ name: "Brontolaura", img: "pilicajosa.png" },
{ name: "Negatina", img: "negatalia.png" },
{ name: "Puzzetto", img: "cuesco.png" },
{ name: "Fetor", img: "peditum.png" },
{ name: "Battutristo", img: "graciosno.png" },
{ name: "Cominon", img: "hilarion.png" },
{ name: "Rugada", img: "arruñona.png" },
{ name: "Perennia", img: "belladona.png" },
{ name: "Eternia", img: "eterna.png" },
{ name: "Insomnia", img: "insomna.png" },
{ name: "Oniria", img: "morfea.png" },
{ name: "Noko", img: "noko.png" },
{ name: "Fortunoko", img: "florinoko.png" },
{ name: "Pandanoko", img: "pandanoko.png" },
{ name: "Anguillahah", img: "anjijila.png" },
{ name: "Canguilla", img: "tenongrio.png" },
{ name: "Urnaconda", img: "urnaconda.png" },
{ name: "Odiapesce", img: "pezqueroso.png" },
{ name: "Detestorione", img: "pezgativo.png" },
{ name: "Rabbiotonno", img: "pezquiciado.png" },
{ name: "Draghetto", img: "draqui.png" },
{ name: "Drago Reale", img: "lord_dragon.png" },
{ name: "Dragazzurro", img: "dragon_azur.png" },
{ name: "Fixi", img: "ido.png" },
{ name: "Konfuxi", img: "turdido.png" },
{ name: "Squacignolo", img: "pelluron.png" },
{ name: "Disabilitantis", img: "pringuron.png" },
{ name: "Sprek", img: "boquirroto.png" },
{ name: "Tupag", img: "yopago.png" },
{ name: "Blablablo", img: "charlaton.png" },
{ name: "Bananaso", img: "tochaplatano.png" },
{ name: "Bosserpente", img: "mandicoro.png" },
{ name: "Scontroserpe", img: "ciniserpe.png" },
{ name: "Rettilarbitro", img: "arfidio.png" },
{ name: "Velenotto", img: "venocto.png" },
{ name: "Velenombra", img: "venoctoscuro.png" },
{ name: "Shogunyan", img: "shogunyan.png" },
{ name: "Komademone", img: "komasura.png" },
{ name: "Barbonbel", img: "dandiniche.png" },
{ name: "Senilfior", img: "abuflorido.png" },
{ name: "Gilgador", img: "dorantuo.png" },
{ name: "Zaffinyan", img: "zafinyan.png" },
{ name: "Smeranyan", img: "esmenyan.png" },
{ name: "Rubinyan", img: "rubinyan.png" },
{ name: "Topanyan", img: "topanyan.png" },
{ name: "Diamanyan", img: "diamanyan.png" },
{ name: "Trisalamandra", img: "babamandra.png" },
{ name: "Termaiale", img: "termascino.png" },
{ name: "Velanera", img: "bergantin.png" },
{ name: "Blankon", img: "animanstruo.png" },
{ name: "Fantasmurai", img: "fantasmurai.png" },
{ name: "Scualantula", img: "tarantutor.png" },
{ name: "Dottor Frank", img: "dr._majarov.png" },
{ name: "Poliministro", img: "mckraken.png" },
{ name: "Poliministro", img: "mckraken_2.png" },
{ name: "Bifron", img: "duoleta.png" },
{ name: "Malvimini", img: "cantaderna.png" },
{ name: "Occhimandra", img: "ojimandra.png" },
{ name: "Suimo", img: "jabalupo.png" },
{ name: "Kagn-8", img: "estigio_vi.png" },
{ name: "Nerumbra", img: "clipso.png" },
{ name: "Doc Primatto", img: "dr._sintripas.png" },
{ name: "Armurai", img: "terrormadura.png" },
{ name: "Pelipo", img: "calarrupto.png" },
{ name: "Wokscillo", img: "caldewok.png" },
{ name: "Koross", img: "gargantuo.png" },
{ name: "Blutus", img: "cazamentires.png" },
{ name: "Nerorko", img: "demoniorco.png" },

];

let score = 0; 
let gameEnded = false; // Evita cambios una vez terminado el juego
const unlockedYoKai = new Set(); // Registro de Yo-kai desbloqueados por índice

// Normalizar la entrada del usuario (sin tildes y en minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[̀-\u036f]/g, "").toLowerCase();
}

// Crear el objeto de audio una sola vez
let getSound = new Audio("get.mp3");

// Reproducir sonido cuando se desbloquea un Yo-kai (sin solapamiento)
function playGetSound() {
    if (!getSound.paused) {
        getSound.pause(); // Detener el sonido actual si ya está reproduciéndose
        getSound.currentTime = 0; // Reiniciar el sonido al principio
    }
    getSound.play(); // Reproducir el sonido
}

// Actualizar la puntuación en formato (adivinados / totales)
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `${score}/${yoKaiList.length}`;
}

// Verificar la respuesta del usuario
function checkAnswer() {
    if (gameEnded) return; // Si el juego ha terminado, no hacer nada

    const userAnswer = normalizeString(document.getElementById("answer-input").value.trim());

    let correctGuess = false; // Bandera para reproducir el sonido solo si hay aciertos

    yoKaiList.forEach((yoKai, index) => {
        // Normaliza todos los nombres asociados al Yo-kai
        const normalizedNames = [yoKai.name, ...(yoKai.aliases || [])].map(name => normalizeString(name));

        // Si la respuesta coincide con alguno de los nombres y no ha sido desbloqueado
        if (normalizedNames.includes(userAnswer) && !unlockedYoKai.has(index)) {
            const yoKaiImg = document.getElementById(`yo-kai${index + 1}`);
            if (yoKaiImg && yoKaiImg.src.includes("no-kai.png")) {
                yoKaiImg.src = yoKai.img; // Actualiza la imagen

                // Añadir clase para animación
                yoKaiImg.classList.add("yokai-unlocked");
                yoKaiImg.addEventListener("animationend", () => {
                    yoKaiImg.classList.remove("yokai-unlocked"); // Quitar clase tras animación
                });

                unlockedYoKai.add(index); // Marcar el Yo-kai como desbloqueado
                score++;
                correctGuess = true; // Se encontró un acierto
            }
        }
    });

    if (correctGuess) {
        playGetSound(); // Reproducir sonido solo si hubo un acierto
        updateScoreDisplay(); // Actualizar puntuación
        document.getElementById("answer-input").value = ""; // Borra la respuesta después de un acierto
    }

    checkGameEnd(); // Verifica si el juego ha terminado
}

// Verificar si el juego ha terminado (cuando se han adivinado todos los Yo-kai)
function checkGameEnd() {
    if (score === yoKaiList.length) {
        gameEnded = true;
        stopTimer(); // Detener el temporizador
        showCongratsImage(); // Mostrar imagen de "¡Felicidades!"
    }
}

// Mostrar la imagen de "¡Felicidades!" al finalizar el juego
function showCongratsImage() {
    const congratsImg = document.createElement("img");
    congratsImg.src = "congrats.png";
    congratsImg.id = "congrats-image";
    congratsImg.style.position = "fixed";
    congratsImg.style.bottom = "0";
    congratsImg.style.left = "50%";
    congratsImg.style.transform = "translateX(-50%)";
    congratsImg.style.width = "100vw";
    congratsImg.style.zIndex = "1000";
    congratsImg.style.cursor = "pointer";

    // Ocultar la imagen al hacer clic
    congratsImg.addEventListener("click", () => {
        congratsImg.remove();
    });

    document.body.appendChild(congratsImg);
}

// Temporizador
let startTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("time").textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Manejador de evento: validación automática con "input"
document.getElementById("answer-input").addEventListener("input", checkAnswer);

// Inicializar el marcador y temporizador al cargar la página
updateScoreDisplay(); // Inicializa la puntuación en 0/total
startTimer();

window.addEventListener("beforeunload", (event) => {
    if (score > 0) { // Mostrar advertencia solo si hay progreso
        event.preventDefault();
        event.returnValue = "Are you sure you want to exit? All progress will be lost.";
    }
});
