let Nombre = "Daniel";
let Apellido = "Abad";
let estudiante = `${Nombre} ${Apellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let lengthEstudiante = estudiante.length;
let firstLetter = Nombre[0];
let lastLetter = Apellido[Apellido.length-1];
//Una cadena de texto que elimine los espacios de la variable "estudiante"
let noSpaces = estudiante.replace(/ /g, "");
let isNombre = estudiante.includes(Nombre);

console.log(noSpaces);
