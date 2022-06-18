## Guía Discord.js V13.8.0 básico

## Antes de empezar
Usted esta por ver código(script) del lenguaje de programación JavaScript (JS), para desarrollar un bot con discord.js, deberías tener un conocimiento bastante decente del propio JavaScript. Si bien puedes hacer un bot con muy poco conocimiento de programación y JavaScript, tratar de hacerlo sin entender solo te dificultará y quedarse estancado en muchos problemas que para otros sean fáciles, si tiene alguna dificultad para encontrar soluciones, puede solicitar ayuda en nuestro servidor soporte en Discord.

## Sobre copiar y pegar
Recomendamos firmemente escribir el código a mano mientras sigues los capitulos de esta guía, sin copiar y pegar. Esto te ayudará a desarrollar una memoria muscular y un entendimiento de lo que estas agregando mucho más sólido.

<br>
<br>
<br>
<br>
<br>

<h2 align="center">¡VAMOS ALLÁ!</h2>

### FAQ (Prguntas frecuentes)

<br>

#### ¿Por qué me aparece un error en la última línea de mi código? 
> Respuesta: este error suele pasar porque no cerraste bien algún comando anterior, fíjate si te faltó algún paréntesis ) o alguna llave } o corchete ] por cerrar, este error suele ser muy común cuando estás empezando.

![imágen](media/faq-llaves.png)

<br>

#### ¿Por qué me aparece este error en mi consola cuando ejecuto mi bot?
```txt
message is not defined
```
> Respuesta: es por que no has definido o puesto dentro del evento message.

<br>

#### ¿Por qué me aparece este error en mi consola cuando ejecuto mi bot?
```txt
args is not defined
```
> Respuesta: es porque no has definido la variable 'args' dentro del evento message.

<br>

#### ¿Cómo puedo hacer que solo yo pueda usar X comando?
```js
//Respuesta:
if (message.author.id !== 'IDUSUARIO') return;
```
> Agregamos esta condicional dentro de un comando para validar que solo pueda ser usado por el usuario que fue agregando en 'IDUSUARO'.

<br>

#### ¿Cómo puedo enviar un mensaje con el BOT al privado(MD) de un usuario?
```js
//Respuesta:
client.users.resolve('IDUSUARIO').send({content: 'MENSAJE'})
```
> Usamos la colección client.users y usando el método get(), ingresamos el id del usuario 'IDUSUARO', para luego usando el método send() enviar el mensaje.

<br>

#### ¿Cómo puedo enviar un mensaje a un canal determinado?
```js
//Respuesta:
client.channels.resolvet('IDCANAL').send({content: 'MENSAJE A ENVIAR'});
```
> Usamos la colección client.channels y usando el método get(), ingresamos el id del canal 'IDCANAL', para luego usando el método send() enviar el mensaje determinado.

<br>
<br>
<br>
<br>
<br>

### Editor de código
Un buen editor de código nos ayudará a simplificar y mejorar su código legible, nos dirá donde están los errores, validar y en algunos ejecutar su código por usted.

Para los capítulos y ejemplos de la guáa vamos a utilizar el editor Visual Studio Code, es un editor de código fuente muy ligero y potente que soportar diferentes lenguajes de programación como: (.JS, C ++, C #, Python, PHP, Go) y runtimes (como .NET y Unity), adaptable para Windows, macOS y Linux, muy recomendado.

#### Instalación Visual Studio Code
- Ingresar a la página web de [Visual Studio Code](https://code.visualstudio.com/download).
- Descargar la versión que se adapte a su PC.
- Una vez descargado, ejecute el instalador (VSCodeSetup-version).exe, esto solo tomará unos minutos.

#### Uso de Visual Studio Code
VS Code comienza con una interfaz sencilla, con una pantalla agradable de bienvenida y una guía de uso. Tiene la capacidad de abrir una carpeta de proyecto para que no tengas que seguir abriendo los archivos individualmente y crear grupos de trabajos entre carpetas.

- Abrir Visual Studio Code.
- Vaya a Archivos -> `Abrir Carpeta` o (`CTROL + O`).

![imágen](media/vsarchivo.png)

- Ubicar la carpeta principal y haga clic en `Seleccionar Carpeta` (Sus archivos no aparecerán, sólo la estructura de la carpeta), o arrastre la carpeta dentro de VSCode.

<br>
<br>
<br>
<br>
<br>

#### Otros editores de código
Hay muchas otras alternativas para poder editar su código, esta es una pequeña lista. Tendrá que buscar instrucciones específicas para estos editores por su cuenta si desea instalarlos y usarlos.

- [Notepad++](https://notepad-plus-plus.org/download/v7.4.2.html)
- [Brackets](http://brackets.io/)
- [Sublime Text 3](https://www.sublimetext.com/3)
- [Atom](https://atom.io/)

No utilice el bloc de notas, no es suficiente.

<br>
<br>
<br>
<br>
<br>

### Creación de su cuenta APP y BOT Discord
El primer paso para crear un primer BOT es crear una aplicación Discord. El bot utilizará la API de Discord, que requiere la creación de una cuenta Discord para propósitos de autenticación. No te preocupes, es súper simple.

Para crear la aplicación, diríjase a la página de [Discord Developers](https://discord.com/developers/applications) e inicie sesión, llegará a una página que se vera así:

![imágen](media/discord%20developers%20main.png)

Haga clic en `Nueva aplicación`. Esto lo llevará a la siguiente página, donde debe ingresar un nombre para la aplicación.

![imágen](media/create%20an%20app.png)

Acto seguido, puede ingresar un avatar, descripción y tags a su aplicación en la página que se mostrará a continuación, pero todos estos campos serán opcionales. Lo que deberá usted hacer es dirigirse al apartado `Bot` del menú de la izquierda.

![imágen](media/app%20general%20information.png)

En la pestaña `Bot` presione el botón `Añadir bot`. Esto transformará instantáneamente su aplicación en una aplicación de bot.<br>
Ingrese ahora el nombre y avatar que desea darle al bot.

![imágen](media/bot%20created.png)

Una vez terminado esto, baje por la página y personalice los permisos de su bot, desde si se tratará de un bot público (que cualquiera pueda añadir a su servidor) o si podrá leer los mensajes que la gente envíe en los diferentes canales de texto.<br>

**¡ENHORABUENA!**<br>
Has creado un bot, ahora falta agregarlo a un servidor y programarlo.

<br>
<br>
<br>
<br>
<br>

### Añadir mi bot a un servidor

En el menú de su aplicación de [Discord Developers](https://discord.com/developers/applications) diríjase en el menú lateral izquierdo al apartado `OAuth2`, esto desplegará una lista con dos opciones. Deberá dirigirse a la segunda (`URL Generator` o `Generador de URL`)

![imágen](media/url%20generate.png)

Seleccione las opciones de su aplicación para crear un enlace desde el que poder añadir su bot a un servidor.<br>
Dado que se trata de un bot necesitaremos en el primer menú de las opciones `bot` y `aplications.commands`. Al seleccionar estas, se nos desbloqueará un nuevo cuadro debajo del primero, en el que podremos especificar los permisos que nuestro bot solicitará al servidor al que se una.
> NOTA IMPORTANTE: Aún que nuestro bot solicite estos permisos, el usuario que lo añada podría denegárselos, por lo que no podremos confiarnos pensando que nuestro bot siempre y en todos los servidores los poseerá.

Una vez hayamos seleccionado todas las opciones, en la línea inferior se debería encontrar un link, desde el cuál podremos invitar a nuestro bot.

![imágen](media/generated%20bot%20link.png)