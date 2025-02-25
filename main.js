// Razones para quererte
const reasons = [
    "Porque aunque estemos lejos, sigues siendo mi persona favorita",
    "Tú forma de ser",
    "Porque me haces feliz, aunque no te lo diga",
    "Eres mi mejor casualidad",
    "Porque cuando estoy contigo, el tiempo pasa volando",
    "Me gustas, bueno mejor dicho estoy enamorada de usted",
    "Porque no me canso de hablar contigo",
    "No hay nadie que me haga sentir como tú",
    "Porque eres el amor de mi vida",
    "Nada se compara contigo",
    "Porque te elegiria un millón de veces más",
    "Cada dia me gustas un poquito más",
    "Porque cada buenos días tuyo me alegra el día",
    "Sin quererlo eres mi debilidad",
    "Porque siempre estás en mi mente las 24 horas del dia los 7 dias de la semana",
    "Eres especial para mí",
    "Porque estoy teniendo fe en esto",
    "Ya tienes mi cariño y mi corazón",
    "Porque ahorita te estoy dando lo que nadie antes le di",
    "Porque te quiero más de lo que te demuestro",
    "Lo que más quiero es hacerte feliz",
    "Eres la razón de mi sonrisa diaria",
    "Porque todo lo que haces me enamora un poco más",
    "Por todo lo que provocas en mi",
    "Porque cada vez que pienso en ti te veo siendo parte de mi futuro",
    "Por la manera en la que alteras mi sistema y vuelves loco a mi corazón por un momento",
    "Porque contigo todo lo que nunca he hecho o dicho me sale tan natural",
    "Eres esa excepción a todo lo que dije que no haría",
    "Por la paciencia que me tienes",
    "Porque me cuentas chismes incluso si al principio te haces la dificil",
    "Por confiar en mi",
    "Porque aunque te de pena eres linda a veces",
    "Porque me hiciste una carta. De todas las que he recibido la tuya es mi favorita y la mas epecial",
    "Me siento bien contigo",
    "Porque me derrites",
    "Porque siempre que escucho esas cancanciones eres lo prrimero que me viene a la canbeza",
    "Eres mi estrella favorita",
    "Porque tus mensajes son mi notificación favorita",
    "Eres mi primer pensamiento al despertar y el último antes de dormir",
    "Eres la chispa que enciende mi corazón",
    "Porque no hay nadie más que quiera tener a mi lado más que a ti",
    "Aunque no te lo diga, me haces sentir completa",
    "Eres mi enana favorita",
    "Porque cada día me doy cuenta de lo afortunada que soy al tenerte",
    "Cada conversación contigo es mi parte favorita del día",
    "Eres el capítulo más bonito de mi historia",
    "Porque aunque pasen los días, mi cariño por ti sigue creciendo",
    "Eres lo que necesitaba, sin saberlo",
    "Te quiero porque desde que llegaste a mi vida, todo es diferente",
    "Me haces sentir que tengo un hogar en ti",
    "Te quiero por lo que eres",
    "Por la forma en que me haces sentir aunque estemos lejos",
    "Porque me haces sonreír",
    "Porque tu presencia en mi vida, aunque a distancia, es lo más importante para mí",
    "Porque a pesar de todo cada día te quiero más",
    "Tus mensajes alegran mis días",
    "Por la confianza que construimos, incluso sin mirarnos cara a cara",
    "Te quiero de una forma que ni yo entiendo",
    "Porque solo contigo me sale hacer estás cosas",
    "Porque ya eres parte de mi",
    "Te quiero porque haces que los momentos largos sean cortos",
    "Porque contigo pierdo la noción del tiempo",
    "Te quiero porque contigo soy como nunca lo fui antes",
    "Porque contigo soy diferente a como soy con los demás ",
    "Porque sacas esa parte mia que no sabia que tenia",
    "Te quiero más allá de los que las horas puedan contar",
    "Porque me haces sentir en el lugar correcto",
    "Te quiero porque eres la unica persona que saca este lado mio",
    "Te quiero porque me entiendes o almenos tratas de hacerlo",
    "Haces que mis dias sean mas interesantes",
    "Te quiero porque eres la razón de mis sonrisas bobas",
    "Por todo lo que causas",
    "Tienes un lugar especial en mi corazón",
    "Eres lo mejor que me ha pasado si ni siquiera buscarlo",
    "Me gusta lo que eres y lo que soy cuando estoy contigo",
    "Porque contigo todo es diferente",
    "Porque todavia no encuentro las razones por las que te hable la primera vez, pero lo volveria a hacer de nuevo",
    "Porque esto que siento por ti es real",
    "Porque contigo quiero algo bien",
    "No sé si es correcto, pero es contigo que quiero estar",
    "Porque ahora ocupas un lugar importante en mi vida",
    "Eres todo lo que quiero y un poquito más",
    "Porque nunca he querido a nadie tanto como a ti",
    "Si vieras, o mejor dicho, si sintieras cómo alteras mi corazón, entenderías lo mucho que te quiero",
    "Porque eres una de mis prioridades",
    "Porque contigo si quiero hacer las cosas bien",
    "Eres como mi canción favorita",
    "Porque estoy valorando cada rato que pasamos hablando, nada es para siempre asi que valoro todo lo que me estás dando",
    "Considero que sacas lo mejor de mi",
    "Porque quiero que sea contigo, con nadie más",
    "Porque pase lo que pase, siempre llevaré conmigo todo lo que compartimos, porque lo que vivimos no se olvida, sin importar el camino que tomemos",
    "Porque apuesto a ti, a lo que somos y a lo que podemos llegar a ser",
    "Porque no buscaba esto, simplemente llegaste. Y sin planearlo, te convertiste en todo lo que nunca supe que queria",
    "Porque espero que, si un día esto termina, nunca recibas ni te conformes con menos de lo que te ofrezco, porque mereces todo y aún más",
    "Sabes, para mí nunca has sido cualquier persona. Siempre has sido esa que transforma mis días, esa que hace que todo tenga sentido solo con estar. Eres más que especial",
    "Porque ahorita solo quiero que seas tú",
    "Por la menera en la que nos llevamos",
    "Porque el simple hecho de saber que te tengo a ti me hace feliz",
    "Te quiero sin prisa, ni condiciones, solo así, porque si, porque eres tú",
    "Te amo",

];

let currentReasonIndex = 0;

// Navegación entre secciones
function navigateTo(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Control del menú
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Navegación de razones
function displayReason(index) {
    document.getElementById('reason-number').textContent = index + 1;
    document.getElementById('current-reason').textContent = reasons[index];
}

function nextReason() {
    currentReasonIndex = (currentReasonIndex + 1) % reasons.length;
    displayReason(currentReasonIndex);
}

function previousReason() {
    currentReasonIndex = (currentReasonIndex - 1 + reasons.length) % reasons.length;
    displayReason(currentReasonIndex);
}

// Crear pétalos de rosa cayendo
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 2 + 's';
    petal.style.opacity = Math.random() * 0.5 + 0.5;
    
    const size = Math.random() * 15 + 10;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    
    petal.style.background = `radial-gradient(circle at 30% 30%, #ff6b6b, #ff8787)`;
    petal.style.borderRadius = '50% 0 50% 50%';
    petal.style.position = 'absolute';
    petal.style.animation = `falling ${Math.random() * 3 + 2}s linear infinite`;
    
    document.querySelector('.petals').appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, 5000);
}

// Iniciar animación de pétalos
setInterval(createPetal, 300);

// Inicializar la primera razón
displayReason(0);

// Mostrar la sección inicial
navigateTo('home');