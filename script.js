// Lista completa de Yo-kai con sus nombres e imágenes
const yoKaiList = [
    { name: "Pandle", img: "alcaldero.png" },
    { name: "Undy", img: "sinna.png" },
    { name: "Tanbo", img: "sinnareno.png" },
    { name: "Cutta-nah", img: "katano.png" },
    { name: "Cutta-nah-nah", img: "katananai.png" },
    { name: "Slacka-slash", img: "katakroken.png" },
    { name: "Mochismo", img: "mochimacho.png" },
    { name: "Minochi", img: "machimio.png" },
    { name: "Helmsman", img: "yelmandante.png" },
    { name: "Reuknight", img: "juntollero.png" },
    { name: "Corptain", img: "genedaver.png" },
    { name: "Blazion", img: "flamileon.png" },
    { name: "Quaken", img: "tembloleon.png" },
    { name: "Siro", img: "sirleon.png" },
    { name: "Chansin", img: "ludorai.png" },
    { name: "Sheen", img: "lustre.png" },
    { name: "Snee", img: "Furtre.png" },
    { name: "Gleam", img: "dortre.png" },
    { name: "Benkei", img: "benkei.png" },
    { name: "B3-NK1", img: "b3-nk1.png" },
    { name: "Sushiyama", img: "sushiyama.png" },
    { name: "Kapunki", img: "kapunki.png" },
    { name: "Beetler", img: "lucharabajo.png" },
    { name: "Betall", img: "camperabajo.png" },
    { name: "Cruncha", img: "chafarabajo.png" },
    { name: "Zerberker", img: "osfurio.png" },
    { name: "Snartle", img: "sacoco.png" },
    { name: "Snotsolong", img: "mokopavo.png" },
    { name: "Duchoo", img: "pachus.png" },
    { name: "Wazzat", img: "komemo.png" },
    { name: "Dummkap", img: "tontolin.png" },
    { name: "D'wanna", img: "yopaso.png" },
    { name: "N'more", img: "puf.png" },
    { name: "Q'wit", img: "yanomas.png" },
    { name: "Lafalotta", img: "algazara.png" },
    { name: "Blips", img: "labizula.png" },
    { name: "Tattletell", img: "cotilleja.png" },
    { name: "Tattlecast", img: "marulleja.png" },
    { name: "Skranny", img: "esquelleja.png" },
    { name: "Cupistol", img: "cupistolo.png" },
    { name: "Casanuva", img: "casanovo.png" },
    { name: "Casanono", img: "casanono.png" },
    { name: "Signibble", img: "ondivoro.png" },
    { name: "Signiton", img: "coberturo.png" },
    { name: "Statiking", img: "estatinarca.png" },
    { name: "Mirapo", img: "telespejo.png" },
    { name: "Mircle", img: "malpejismo.png" },
    { name: "Illoo", img: "iluho.png" },
    { name: "Elloo", img: "eluho.png" },
    { name: "Alloo", img: "ubiuho.png" },
    { name: "Espy", img: "trilepata.png" },
    { name: "Infour", img: "tetrariosa.png" },
    { name: "Tengu", img: "tengu.png" },
    { name: "Flengu", img: "flamngu.png" },
    { name: "Kyubi", img: "kyubi.png" },
{ name: "Frostail", img: "nievacolas.png" },
{ name: "Dulluma", img: "tentelento.png" },
{ name: "Darumacho", img: "tentemacho.png" },
{ name: "Goruma", img: "tenterila.png" },
{ name: "Noway", img: "nihablar.png" },
{ name: "Impass", img: "impas.png" },
{ name: "Walldin", img: "murallin.png" },
{ name: "Armsman", img: "lorigon.png" },
{ name: "Fidgephant", img: "inquielifante.png" },
{ name: "Touphant", img: "perselefante.png" },
{ name: "Blowkade", img: "globqueo.png" },
{ name: "Ledballoon", img: "globtundente.png" },
{ name: "Mad Mountain", img: "montaña_loca.png" },
{ name: "Lava Lord", img: "lord_lava.png" },
{ name: "Roughraff", img: "rebelcebu.png" },
{ name: "Badude", img: "caporrista.png" },
{ name: "Bruff", img: "hermanion.png" },
{ name: "Rhinoggin", img: "pegarabajo.png" },
{ name: "Rhinormous", img: "enormarabajo.png" },
{ name: "Hornaplenty", img: "cuernarabajo.png" },
{ name: "Castelius III", img: "castelius_III.png" },
{ name: "Castelius II", img: "castelius_II.png" },
{ name: "Castelius I", img: "Castelius_I.png" },
{ name: "Castelius Max", img: "Maxicastelius.png" },
{ name: "Robonyan", img: "robonyan.png" },
{ name: "Goldenyan", img: "aureonyan.png" },
{ name: "Dromp", img: "pom.png" },
{ name: "Swosh", img: "flus.png" },
    { name: "Dazzabel", img: "deslumbrella.png" },
    { name: "Rattelle", img: "rechinella.png" },
    { name: "Skelebella", img: "esquelebella.png" },
    { name: "Cadin", img: "ningarra.png" },
    { name: "Cadable", img: "habilgarra.png" },
    { name: "Singcada", img: "cantigarra.png" },
    { name: "Pupsicle", img: "escanlofrio.png" },
    { name: "Chilhuahua", img: "frihuahua.png" },
    { name: "Swelterrier", img: "lavadenco.png" },
    { name: "Jibanyan", img: "jibanyan.png" },
    { name: "Thornyan", img: "espinyan.png" },
    { name: "Baddinyan", img: "pelochnyan.png" },
    { name: "Walkappa", img: "kappandante.png" },
    { name: "Appak", img: "kappadachin.png" },
    { name: "Supyo", img: "kapparfista.png" },
    { name: "Komasan", img: "komasan.png" },
    { name: "Komane", img: "komaleon.png" },
    { name: "Komajiro", img: "komajiro.png" },
    { name: "Komiger", img: "komatigrado.png" },
    { name: "Baku", img: "baku.png" },
    { name: "Whapir", img: "blanpir.png" },
    { name: "Shmoopie", img: "pufipatitas.png" },
    { name: "Pinkipoo", img: "pufilindo.png" },
    { name: "Pookivil", img: "pufimaloso.png" },
    { name: "Frostina", img: "fristina.png" },
    { name: "Blizzaria", img: "granizia.png" },
    { name: "Damona", img: "damona.png" },
{ name: "Wiglin", img: "cimbron.png" },
{ name: "Steppa", img: "pasodon.png" },
{ name: "Rhyth", img: "ritma.png" },
{ name: "Wantston", img: "kieroto.png" },
{ name: "Grubsnitch", img: "zampo.png" },
{ name: "Hungramps", img: "abuzampa.png" },
{ name: "Hungorge", img: "gargazampa.png" },
{ name: "Grainpa", img: "aburroz.png" },
{ name: "Lodo", img: "nomeda.png" },
{ name: "Chippa", img: "opti.png" },
{ name: "Enerfly", img: "enerposa.png" },
{ name: "Enefly", img: "eneposa.png" },
{ name: "Betterfly", img: "mejorposa.png" },
{ name: "Peppillon", img: "vivariposa.png" },
{ name: "Happierre", img: "felisonte.png" },
{ name: "Reversa", img: "reversa.png" },
{ name: "Reversette", img: "reversada.png" },
{ name: "Ol' Saint Trick", img: "tricotom.png" },
{ name: "Ol' Fortune", img: "dadivo.png" },
{ name: "Rollen", img: "bolilete.png" },
{ name: "Dubbles", img: "doblilete.png" },
{ name: "Papa Bolt", img: "papa_rayo.png" },
{ name: "Uncle Infinite", img: "tio_infinito.png" },
{ name: "Mama Aura", img: "mama_aura.png" },
{ name: "Auntie Heart", img: "tita_corazon.png" },
{ name: "Leadoni", img: "noguio.png" },
{ name: "Mynimo", img: "topami.png" },
{ name: "Ake", img: "algio.png" },
{ name: "Payn", img: "agujeto.png" },
{ name: "Agon", img: "machaka.png" },
{ name: "Negatibuzz", img: "negatisquito.png" },
{ name: "Moskevil", img: "deprisquito.png" },
{ name: "Scritchy", img: "picorron.png" },
{ name: "Dimmy", img: "nomeven.png" },
{ name: "Blandon", img: "nostoy.png" },
{ name: "Nul", img: "nul_.png" },
{ name: "Hidabat", img: "encielago.png" },
{ name: "Abodabat", img: "caserielago.png" },
{ name: "Belfree", img: "ermicielago.png" },
{ name: "Suspicioni", img: "suspicioni.png" },
{ name: "Tantroni", img: "pataletoni.png" },
{ name: "Contrarioni", img: "contrarioni.png" },
{ name: "Tengloom", img: "tengulecto.png" },
{ name: "Nird", img: "tengullon.png" },
{ name: "Negasus", img: "negasus.png" },
{ name: "Neighfarious", img: "pifiasus.png" },
{ name: "Timidevil", img: "timidiablo.png" },
{ name: "Beelzebold", img: "osademonio.png" },
{ name: "Count Cavity", img: "conde_caries.png" },
{ name: "Greesel", img: "avarqueroso.png" },
{ name: "Awevil", img: "diables.png" },
{ name: "Coughkoff", img: "ejemtos.png" },
{ name: "Hurchin", img: "erizlor.png" },
{ name: "Peckpocket", img: "cartepollo.png" },
{ name: "Rockabelly", img: "rafaz.png" },
{ name: "Buhu", img: "ayay.png" },
{ name: "Flumpy", img: "horterraro.png" },
{ name: "Skreek", img: "alarcion.png" },
{ name: "Manjimutt", img: "cantonio.png" },
{ name: "Multimutt", img: "multiniche.png" },
{ name: "Sir Berus", img: "ser_bero.png" },
{ name: "Droplette", img: "goto.png" },
{ name: "Drizzle", img: "sirimiri.png" },
{ name: "Slush", img: "copo.png" },
{ name: "Alhail", img: "ventisquero.png" },
{ name: "Gush", img: "coagulon.png" },
{ name: "Chatalie", img: "reboca.png" },
{ name: "Nagatha", img: "pilicajosa.png" },
{ name: "Dismarelda", img: "negatalia.png" },
{ name: "Cheeksqueek", img: "cuesco.png" },
{ name: "Cuttincheez", img: "peditum.png" },
{ name: "Compunzer", img: "graciosno.png" },
{ name: "Lamedian", img: "hilarion.png" },
{ name: "Grumples", img: "arruñona.png" },
{ name: "Everfore", img: "belladona.png" },
{ name: "Eterna", img: "eterna.png" },
{ name: "Insomni", img: "insomna.png" },
{ name: "Sandi", img: "morfea.png" },
{ name: "Noko", img: "noko.png" },
{ name: "Bloominoko", img: "florinoko.png" },
{ name: "Pandanoko", img: "pandanoko.png" },
{ name: "Heheheel", img: "anjijila.png" },
{ name: "Croonger", img: "tenongrio.png" },
{ name: "Urnaconda", img: "urnaconda.png" },
{ name: "Fishpicable", img: "pezqueroso.png" },
{ name: "Rageon", img: "pezgativo.png" },
{ name: "Tunatic", img: "pezquiciado.png" },
{ name: "Draggie", img: "draqui.png" },
{ name: "Dragon Lord", img: "lord_dragon.png" },
{ name: "Azure Dragon", img: "dragon_azur.png" },
{ name: "Daiz", img: "ido.png" },
{ name: "Confuze", img: "turdido.png" },
{ name: "Chummer", img: "pelluron.png" },
{ name: "Shrook", img: "pringuron.png" },
{ name: "Spenp", img: "boquirroto.png" },
{ name: "Almi", img: "yopago.png" },
{ name: "Babblong", img: "charlaton.png" },
{ name: "Bananose", img: "tochaplatano.png" },
{ name: "Copperled", img: "mandicoro.png" },
{ name: "Cynake", img: "ciniserpe.png" },
{ name: "Slitheref", img: "arfidio.png" },
{ name: "Venoct", img: "venocto.png" },
{ name: "Shadow Venoct", aliases: ["Shadow Venoct", "Shad. Venoct", "Shad Venoct"], img: "venoctoscuro.png" },
{ name: "Shogunyan", img: "shogunyan.png" },
{ name: "Komashura", img: "komasura.png" },
{ name: "Dandoodle", img: "dandiniche.png" },
{ name: "Elder Bloom", img: "abuflorido.png" },
{ name: "Gilgaros", img: "dorantuo.png" },
{ name: "Sapphinyan", img: "zafinyan.png" },
{ name: "Emenyan", img: "esmenyan.png" },
{ name: "Rubinyan", img: "rubinyan.png" },
{ name: "Topanyan", img: "topanyan.png" },
{ name: "Dianyan", img: "diamanyan.png" },
{ name: "Slimamander", img: "babamandra.png" },
{ name: "Sproink", img: "termascino.png" },
{ name: "SV Snaggerjag", img: "bergantin.png" },
{ name: "Massiface", img: "animanstruo.png" },
{ name: "Phantasmurai", img: "fantasmurai.png" },
{ name: "Tarantutor", img: "tarantutor.png" },
{ name: "Dr. Maddiman", aliases: ["dr. maddiman", "dr maddiman", "doctor maddiman"], img: "dr._majarov.png" },
{ name: "McKraken", img: "mckraken.png" },
{ name: "McKraken", img: "mckraken_2.png" },
{ name: "Duwheel", img: "duoleta.png" },
{ name: "Chirpster", img: "cantaderna.png" },
{ name: "Eyedra", img: "ojimandra.png" },
{ name: "Hoggles", img: "jabalupo.png" },
{ name: "Styx Mk.VI", aliases: ["Styx Mk.VI", "Styx Mk. VI", "Styx Mk VI"], img: "estigio_vi.png" },
{ name: "Clipso", img: "clipso.png" },
{ name: "Dr. Nogut", aliases: ["dr. nogut", "dr nogut", "doctor nogut"], img: "dr._sintripas.png" },
{ name: "Spooklunk", img: "terrormadura.png" },
{ name: "Squisker", img: "calarrupto.png" },
{ name: "Wobblewok", img: "caldewok.png" },
{ name: "Gargaros", img: "gargantuo.png" },
{ name: "Ogralus", img: "cazamentires.png" },
{ name: "Orcanos", img: "demoniorco.png" },

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
