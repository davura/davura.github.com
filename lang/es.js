//  HOME
lang.import = "Importar";
lang.get_started = "Empezar";
lang.example = "Ejemplo";
lang.functions = "Funciones";
lang.source = "Fuente";
lang.download = "Descarga";
lang.compressed = "Producción";
lang.production = "Desarrollo";
lang.doc_source = "Fuente de documentación";
lang.doc_source_1 = /*html*/ `
    <p>
        Esta documentacion ha sido creada con DAVURA y puede ver el codigo fuente en el siguiente enlace:
    </p>
`;
lang.get_started_1 = /*html*/ `
    <p>
        Davura es una librería / framework experimental desarrollada para la creación de web-component que es compilado automáticamente dentro del navegador o puede ser compilado por completo en un unico archivo. Davura puede ayudar al desarrollo de aplicaciones o sitios webs SPA de una manera más sencilla.
    </p>
`;
lang.get_started_2 = /* html */`
    <h1 class="title">Empezar</h1>
    <p>
        Puede inicializar toda la estructura de un proyecto rápidamente mediante el cliente de Davura:
    </p>
`;
lang.get_started_3 = /*html*/ `
    <h1 class="title">Inicio Rápido</h1>
    <p>
       Tambien puede inicializar mediante un simple script componentes 
       de manera mas rapida, pero menos optima de interpretar 
       y organizar para proyectos mas complejos: 
    </p>
`;
lang.get_started_4 = /*html*/ `
    <p>
        Para crear multiples componentes de esta manera, 
        deben estar dentro de la misma funcion 
        <i>D(component1, component2)</i>
        separados como argumentos.
    </p>
    <p>
        Tambien puede utilizar un <b>array</b> para
        enviar cada componente:
        <i>D([component1, component2])</i>.
    </p>
    <p>
        De ambas formas lo que se logra es iniciar 
        el constructor  de todos los omponentes 
        despues de que todos hayan sido cargados.
    </p>
`;

lang.structure = "Estructura";
lang.structure_1 = /*html*/ `
    <p>La estructura de un Proyecto nuevo creado con el cliente es la siguiente:</p>
`;
lang.structure_2 = /*html*/ `
    <p>
        Cada componente corresponde a un directorio dentro de dmodules y 
        obligatoriamente un archivo <i>.js</i>, los archivos internos deben poseer el mismo 
        nombre del directorio que a su vez es el nombre del componente.
    </p>
    <p>Los archivos <i>js</i>, poseen la siguiente estructura:</p>
`;
lang.structure_3 = /*html*/ `
    <p>
        Usa <i>true</i> en <i>template</i> y <i>style</i> para cargar cada uno desde su archivo correspondiente en el mismo directorio, 
        escriba el contenido del mismo en cada propiedad, 
        o <i>false</i> para no cargar nada.
    </p>
`;
lang.structure_4 = /*html*/ `
    <p>
        Los componentes creados deben ser presentados al proyecto mediante el index.html de la siguiente manera:
    </p>
`;
lang.structure_5 = /* html */ `
    <p>
        Como se puede observar todos los componentes se 
        importan mediante una etiqueta de <i>link</i> con el atributo 
        <i>d-import</i> separados por coma.
    </p>
`;
lang.structure_6 = /* html */ `
    <p>
        Evite hacer todo este proceso de forma manual 
        empleando el <b>cliente</b> para la creacion e importacion
        de componentes de forma automatica.
    </p>
`;
lang.client = "Cliente";
lang.client_1 =  /* html */ `
    <p>
    El cliente de Davura no solo le permitirá iniciar proyectos con una estructura base, 
    sino que también le permitirá realizar diferentes funciones:
    </p>
    <ul>
        <li> <i>new</i> <a route="client/new">Crear proyecto</a> </li>
        <li> <i>add</i> <a route="client/add"> Crear componente e Importar</a> </li>
        <li> <i>remove</i> <a route="client/remove">Eliminar componente y remueve importación</a> </li>
        <li> <i>rename</i> <a route="client/rename">Renombrar componente</a> </li>
        <li> <i>server</i> <a route="client/server">Iniciar live server</a> </li>
        <li> <i>compile</i> <a route="client/compile">Compilar proyecto</a> </li>
    </ul>
`;
lang.client_2 =  /* html */ `
    <p>
        Crea un proyecto nuevo con la estructura base y un componente <i>app</i> asignado al <i>index.html</i>
    </p>
`;
lang.client_3 =  /* html */ `
    <p>
        Permite crear componentes de manera rápida desde el cliente e 
        importándolos automáticamente en le <i>index.html</i> para que 
        pueden ser usados en cualquier sitio, incluyendo dentro de otra 
        componente <b>(evite hacer un ciclo infinito)</b>
    </p>
`;
lang.client_4 =  /* html */ `
    <p>
        Elimina la carpeta referente a un componente y 
        remueve la importación del mismo en el <i>index.html</i>
    </p>
`;
lang.client_5 =  /* html */ `
    <p>
        Renombra un componente, tanto en nombre de archivos como en nombre de importación.
    </p>
`;
lang.client_6 =  /* html */ `
    <p>
        Inicia un live server en la carpeta actual.
    </p>
`;
lang.client_7 =  /* html */ `
    <p>
        Agrupa todo el contenido de los componentes
        en un solo archivo <i>d_modules.js</i> para disminuir 
        la carga de múltiple en un servidor, 
        compila todos los archivos microSASS a css y 
        procesa la salida mediante babel.
    </p>
    <p>
        Ademas de esto Davura al compilar 
        crea relaciones mas directas para los 
        selectores del DOM mediante <i>#etiquetadas</i>, 
        mejorando el funcionamiento de este.
    </p>
    <p>
        El proceso de compilar genera una carpeta 
        denominada compile dentro del mismo directorio, 
        con todos los archivos del proyecto, 
        omitiendo las misma lista de <i>.gitignore</i> 
        y el propio directorio <b>compile</b>.
    </p>
`;
lang.functioning = "JS Funcionamiento";
lang.functioning_1 =  /* html */ `
    <p>
        El archivo <i>js</i> es indispensable en cada carpeta de un componente, 
        consiste en un objeto que indica si se cargaran archivos 
        <i>html / scss</i> dentro del mismo directorio del componente <b>(true / false)</b>, 
        o si se procesaran estos como texto entro del mismo parámetro.
    </p>
    <p>
        Este también puede incluir un objeto data donde se establece 
        toda la parte dinámica del componente (variables, funciones, objetos).
    </p>
    <p>
        Todas las variables, objetos y arreglos que se declaren en la raíz de data, 
        serán parámetros observables y buscaran su uso dentro del template ante 
        cualquier cambio para actualizar el mismo.
    </p>
    <p>
        La función opcional <i>construtor()</i> de cada componente se 
        ejecuta automáticamente cuanto todos los componentes existentes 
        dentro del la aplicacion han sido cargados
        <b>(incluyendo los que se encuentran dentro de otros componentes)</b>.
    </p>
`;
lang.functioning_2 =  /* html */ `
    <p>
        Si desea crear variables, objetos o arreglos que no necesitan 
        ser observables dentro del componente, debe crearlos dentro del 
        <i>constructor()</i>.
    </p>
`;
lang.variables_1 =  /* html */ `
    <p>
        Las variables observables podrán ser empleadas dentro del 
        <b>template</b> de un componente y ante cualquier 
        cambios en ellas actualizaran su valor en el <b>template</b>.
    </p>
    <p>
        Sin embargo, las variables no pueden ser empleadas como atributos de un componente 
        ya que estas se representan en el template dentro de un pseudo elemento html.
    </p>
    <p>
        Existen otras maneras de poder usar variables 
        de cualquier lugar incluyendo en los atributos:
        <ul>
            <li>
                <a route="d_for">d-for</a>
            </li>
            <li>
                <a route="d_update">d-update</a>
            </li>
        </ul>
    </p>
`;
lang.loop_for = "Bucle For";
lang.loop_for_1 =  /* html */ `
    <p>
        La propiedad <i>d-for</i> le permitirá crear un loop definido, 
        recorrer un arreglo observado en el componente o recorrer un objeto json.
    </p>
    <p>
        La evaluación de valores y variables en un <i>d-for</i> puede funcionar 
        en cualquier parte incluyendo atributos de los elementos del dom.
    </p>
    <p>
        <i>d-for</i> se debe asignar en un elemento del dom para que este 
        internamente defina el recorrido, empleando para cada posición 
        un pseudo elemento para poder indexar las <b>keys</b> ante cualquier 
        cambio en un array / object.

        <h2 class="title">Info</h2>
        <ul>
            <li>
                <i>#C</i> retorna el index del ciclo for.
            </li>
            <li>
                <i>#K</i> retorna el key del ciclo for <b>(JSON object)</b>.
            </li>
        </ul>
       
        <br>
        
        <h2 class="title"> Prototype</h2>
        <ul>
            <li>
                <i>Array.prototype.remove()</i> Permite eliminar una 
                posición especifica de un arreglo observable 
                y obtener los cambios en el <b>d-for</b> dentro 
                del template.
            </li>
            <li>
                <i>Array.prototype.new()</i> Permite reemplazar un array 
                observado por un array nuevo y actualizar el <b>d-for </b>
            </li>
        </ul>
    </p>
`;
lang.loop_for_2 =  /* html */ ` 
    <p>
        Cualquier cambio en un index del array actualizara 
        el <i>d-for</i> en el template, 
        pero si desea reemplazar por completo el Array, 
        debe emplear la función  <i>Array.prototype.new()</i>
    </p>
    <p>
        Tambien puede emplear <i>Array.prototype.remove(index)</i>
        para eliminar una posición especifica de un arreglo observable 
        y obtener los cambios en el <i>d-for</i> dentro del template.
    </p>
`;
lang.onclick_keypress =  /* html */ `
    <p>  
        El evento onclick, keypress, keyup y keydown se pueden asignar a elementos del dom y 
        puede evaluar contenido del componente, 
        como funciones y variables del mismo 
        usando <i>this.</i>
    </p>  
`;
lang.value =  /* html */ ` 
    <p>
        Value puede vincular el valor de un 
        <b>input</b>, <b>select</b> o <b>textarea</b> con el de una 
        variable observada.
    </p>
`;
lang.properties =/* html */ `
    <p>
        Los componentes pueden recibir parámetros o 
        propiedades accesibles dentro del mismo 
        mediante <i>this.props</i>, 
        las propiedades intentaran ser evaluadas.
    </p>
`;
lang.dom = "Acceder al dom html (SDOM)";
lang.dom_1 =/* html */ `
    <p>
        Davura utiliza <b>SDOM</b> para dar acceso a 
        elementos del dom, consulta su documentación 
        para saber todas sus funciones prototype acá:
    </p>

    <a href="https://bonarja.github.io/sdom" target="_blank">
        https://bonarja.github.io/sdom
    </a>
    <ul>
        <li>
            Para obtener referencia al dom del propio 
            componente puedes utilizar <i>this.D</i>
        </li>
        <li>
            Para otros existen 2 formas de obtener 
            acceso a elementos del dom:
        </li>
    </ul>
`;
lang.dom_2 =/* html */ ` 
    <p>
        Puede asignar etiquetas a 
        los elementos en el template del html y 
        acceder a ellas desde el componente utilizando <i>this</i>, 
        esto retornara un <b>DOM Element</b> con todas las funciones 
        prototype de <b>SDOM</b>.
    </p>
`;
lang.dom_3 =/* html */ ` 
    <p>
        El segundo método consiste en un selector 
        de <b>SDOM</b> que trabaja como un 
        <b>querySelectorAll</b> pero solo dentro 
        del html del componente actual, 
        retornando un <b>DOM NodeList</b> con todas las 
        funciones prototype de <b>SDOM</b>
    </p>
`;
lang.d_for_component = "Componentes en d-for";
lang.d_for_component_1 = /* html */ `
    <p>
        Se pueden utilizar componentes dentro de un ciclo <i>d-for</i>, 
        este analizara los componentes que se encuentren dentro del bucle 
        para iniciarlos y ante cualquier actualización eliminar 
        los componentes ya no utilizados de la memoria.
    </p>
`;
lang.access_to_components = "Acceso a componentes";
lang.access_to_components_1 = /* html */`
    <p>
        Se pueden acceder a los componentes 
        de manera externa o desde otro componente 
        agregándoles una <b>#etiqueta</b>, luego puede 
        emplear <i>D.etiqueta</i> para obtener 
        acceso al componente.
    </p>
`;
lang.animation =/* html */ `
    <p>
        Davura trabaja con SDOM, 
        y este utiliza animate.css como css global, 
        ademas SDOM incluye 2 funciones 
        para manipular estas animaciones 
        en el dom html a modo de promesas.
    </p>
    <a href="https://bonarja.github.io/sdom" target="_blank">
        https://bonarja.github.io/sdom
    </a>
`;
lang.destruct_1 =/* html */ `
    <p>
        <i>this.destruct()</i> es una función 
        de cada componente que permite destruir 
        el mismo y todos sus componentes hijos 
        del DOM html y de la memoria.
    </p>
    <p>
        <i>onDestruct()</i> es una función opcional 
        que se puede emplear en cada componente, 
        esta será invocada en el 
        momento que el componente sea 
        destruido por cualquier motivo.
    </p>
`;
lang.d_update = "Super actualización";
lang.d_update_1 =/* html */ `
    <p>
        <b>d-update</b> permite evaluar todas las <i>{{coincidencias}}</i> 
        que se encuentren dentro de un elemento del DOM 
        con el atributo <b>d-update</b>.
    </p>
    <p>
        Todos los cambios 
        que se realicen en variables, 
        arreglo u objeto observable que se 
        encuentren dentro de un <b>d-update</b> 
        ocasionara una actualización 
        total el el <b>d-update</b> correspondiente.
    </p>
`;
lang.d_update_2 = /* html */ `
    <p>
        <b>d-update</b> tambien permite representar un 
        arreglo / objeto en el html, 
        a diferencia de <b>d-for</b>, 
        <b>d-update</b> ante cualquier cambio 
        actualizara el html completo del elemento con el 
        atributo <b>d-update</b>, incluso si lo que se 
        ha cambiado es una variable dentro 
        del <b>d-update</b> en lugar del arreglo dentro del mismo.
    </p>
    <p>
        Puede hacer uso de <i>Array.prototype.draw()</i> 
        para recorrer un arreglo y dibujar cada 
        string html que se retorne en 
        cada iteración del mismo.
    </p>
    <p>
        Para facilitar el uso de un recorrido 
        puede usar la propiedad <b>literal</b> de 
        javascript empleando las <i>${"`"}comillas especiales${"`"}</i> 
        para realizar esto e inserte evaluaciones js empleando 
        <i>`+"${evaluacion}"+
        /* html */`</i> dentro del <b>literal</b>.
    </p>
`;
lang.d_update_3 = /* html */ `
    <h1 class="title">
        Componente en d-update
    </h1>
    <p>
        Se pueden procesar componentes 
        dentro de un <b>d-update</b> agregándole 
        a cada componente el atributo 
        <b>f-update</b>, de esta manera el cargador 
        de Davura puede determinar cuales 
        componentes se encuentran dentro de un 
        <b>d-update</b> y eliminar los 
        componentes de la memoria cuando 
        <b>d-update</b> sea actualizado.
    </p>
`;
lang.request_1 = /* html */ `
    <p>
        SDOM incorpora funciones para 
        peticiones JSON asíncronas 
        <i>_.post()</i> y <i>_.get()</i> 
        mediante promesas.
    </p>
`;
lang.super_watch = "Observador externo";
lang.super_watch_1 = /* html */ `
    <p>
        Se pueden mostrar variables observables 
        de un componente en otro obtenidas 
        a través de la etiqueta de un componente, 
        estas variables al ser cambiadas actualizaran 
        el template del componente que las este utilizando.
    </p>
`;
lang.route_1 = "Rutas";
lang.route_2 = /* html */`
    <p>
        Davura incorpora un gestor de rutas, 
        puede iniciar un control de rutas de 2 maneras, 
        una forma simple que solo refleja los cambios en 
        un pseudo elemento DOM denominado <i>d-route</i>, 
        y otra forma avanzada especificando los 
        sitios del DOM donde las rutas actuaran.
    </p>
`;

lang.route_3 = /* html */`
    <p>
        Las rutas por cada sitio asignado del DOM 
        se evalúan de manera lineal, y se detienen 
        al encontrar una coincidencia con la url actual, 
        pero no siempre tiene que ser así, 
        las rutas poseen diferentes configuraciones 
        disponibles.
    </p>

    <ul>
        <li> <a route="/route/path">path</a> </li>
        <li> <a route="/route/template">template</a> </li>
        <li> <a route="/route/d">d (Davura component)</a> </li>
        <li> <a route="/route/continue">continue</a> </li>
        <li> <a route="/route/after"> after() </a> </li>
        <li> <a route="/route/before">before()</a> </li>
    </ul>
`;

lang.route_4 = /* html */`
    <p>
        Davura incorpora algunas funciones 
        para utilizar las rutas:
    </p>
    <ul>
        <li><a route="/route/route"> 
            D.route()
        </a></li>
        <li><a route="/route/go"> 
            D.route.go()
        </a></li>
        <li><a route="/route/navigateby">
            D.route.navigateBy()
        </a></li>
        <li><a route="/route/onchange">
            D.route.onchange()
        </a></li>
        <li><a route="/route/route_in_element">
            atributo <b>route</b> en un item
        </a></li>
    </ul>
`;

lang.route_5 = /* html */`
    <p>
        Propiedad necesaria en cada bloque de 
        configuración de ruta. Especifica la 
        coincidencia con la cual se entrara 
        al bloque y deben comenzar desde 
        la ruta raíz <b>(/)</b>
    </p>
    <p>
        Las rutas también determinan la estructura 
        de la url para poder recibir variables en 
        el bloque.
        <p>
            <i>/user/:userid</i>
            para este caso se recibiría la 
            variable <b>userid</b> en una ruta: 
            <i>/user/12</i>
        </p>
    </p>
    <div class="divider"></div>
    <p>
        Un bloque de ruta no entra como coincidencia 
        si la url contiene mas espacios <b>(/)</b> 
        de los que se especifican en el path, 
        para aceptar un caso como este 
        en su bloque asigne <b>(?)</b> al final del path.
        <i>/user?</i>
        <br><br>
        Para este caso una url como <i>/user/info</i>
        entraría en el path anterior.
        
    </p>
    <div class="divider"></div>
    <p>
        Una vez que entra en un bloque por 
        coincidencia de path, las rutas no seguirán 
        evaluando los bloques siguiente, 
        si desea que las rutas sigan evaluando los bloques 
        siguiente agregue <i>continue: true</i> al bloque.
    </p>
`;

lang.route_6 = /* html */`
    <p>
        Esta propiedad define el html plano que se 
        escribirá al emplear esta ruta, 
        las variables recibidas mediante el path pueden ser 
        empleadas en el template mediante <i>{{varname}}</i>
    </p>
`;

lang.route_7 = /* html */`
    <p>
        Esta propiedad define el componente 
        que se cargara en la ruta, se puede 
        especificar solo el nombre del mismo o 
        el html completo para agregar 
        propiedades extras como #etiquetas 
        o argumentos.
    </p>
`;

lang.route_8 = /* html */`
    <p>
        Permite continuar evaluando el arreglo 
        de bloques después de entrar en una 
        coincidencia 
    </p>
`;

lang.route_9 = /* html */`
    <p>
        Esta función es lanzada después de entrar al bloque, 
        en caso de que exista un propiedad <b>d</b> 
        para cargar un componente, 
        la función <i>after()</i> será lanzada 
        después de que el componente se termine de iniciar.
    </p>
    <div class="divider"></div>
    <p>after devuelve 2 argumentos: <i>after(props, loadDavu)</i></p>
    <ul>
        <li>
            <b>props</b>: es un objeto json con 
            todas las variables que reciba path.
        </li>
        <br>
        <li>
            <b>loadDavu</b>: es una función que permite iniciar 
            un componente en la ruta, esta función permite 
            hacer cosas mas especificas en la 
            ruta que la propiedad <b>d</b>, 
            como cargar componentes específicos dependiendo 
            de las variables de la ruta o alguna otra condición. 
            <br><br>
            <b>loadDavu</b> recibe el nombre del componente o el 
            html completo del mismo para asignar propiedades extras, 
            como argumentos o #etiquetas. 
            <br><br>
            Esta función retorna una promesa 
            que se cumple en el momento que el componente 
            agregado se termina de iniciar.
        </li>
    </ul>
`;
lang.route_10 = /* html */`
    <p>
        Esta función es lanzada antes de realizar 
        cualquier otra acción del bloque, 
        esta pausara el bloque por completo 
        hasta que se lance la función que 
        before retorna como argumento.
    </p>
`;

lang.route_11 = /* html */`
    <p>
        Permite ir a una ruta específica.
    </p>
`;

lang.route_12 = /* html */`
    <p>
        Esta función puede establecer 
        una ruta base desde donde se 
        empezara a navegar a partir del momento que se 
        asigne, desde ese momento todas las funciones 
        para ir a una ruta serán a partir 
        de la ruta establecida con <b>navegateBy</b>.
    </p>
    <p>
        <i>D.route.navegateBy()</i> 
        retorna la ruta actual establecida 
        para navegar si se ejecuta sin enviar 
        ningún parámetro.
    </p>
    <p>
        <i>D.route.navegateBy("")</i> 
        restablece a la ruta base de navegación (/)
    </p>
`;

lang.route_13 = /* html */`
    <p>
        Permite establecer una función a 
        invocar cada vez que se haga un cambio en 
        una ruta de una selección especifica 
        de la ruta.
    </p>
`;

lang.route_14 = /* html */`
    <p>
        <i>route</i> es un atributo que 
        se puede establecer a los elementos html 
        del template de un componente 
        para crear un evento que le permita cambiar 
        la ruta al realizar click sobre estos.
    </p>
`;
lang.route_15 = /* html */`
    <p>
        <i>D.route()</i> permite iniciar la configuracion de las rutas recibiendo como parametro un objeto con la esctructura de estas.
        <br/>
        Si se llama a esta función sin parámetros devolverá la ruta actual.
    </p>
`;
lang.src = "src en d-for y d-update";
lang.src_1 = /* html */`
    <p>
        Las src asignadas con variables 
        en un <b>d-for</b> o en un <b>d-update</b> 
        causan mensajes de error 404 en la consola 
        del navegador, esto no es un error 
        que implique algo significativo, 
        es causado por cargar el template del 
        componente antes de evaluar las variables 
        ocasionando src inválidos en ese punto.
    </p>
    <p>
        Puede evitar estos mensajes 
        molestos en su consola, 
        agregando <i>#</i> antes de la <i>{{variable}}</i> 
        de la siguiente manera:
    </p>
`;
lang.microsass = /* html */`
    <p>
        Davura funciona con microsass, este script procesa las 
        estructuras básicas de <b>SCSS</b> a <b>CSS</b> 
        directamente en el navegador.
    </p>
    <p>
        Puedes revisar su funcionamiento y documentación en:
        <a href="https://bonarja.github.io/microsass/">
            https://bonarja.github.io/microsass/
        </a>
    </p>
`;
lang.microsass_1 = /* html */`
    <p>
        Los componentes se suelen iniciar con 
        <i>this { }</i> mediante el cliente de 
        Davura, <i>this</i> hace referencia al 
        componente actual, de esta manera las 
        propiedades solo seran aplicadas a el 
        componente actual y a los componentes 
        hijos.
    </p>
`;
lang.prependdav_appenddav = /* html */`
    <p>
        Sdom incorpora funciones prototype para 
        insertar componentes de Davura 
        antes o despues de un elemento del DOM 
        e iniciar los mismos.
    </p>

    <ul>
        <li>
            <b>appendDav</b>: <br/>
            inserta dentro del 
            elemento seleccionado al final, 
            puede recibir el nombre del componente o el html 
            completo del mismo para agregar atributos o #etiquetas.
        </li>
        <li>
            <b>prependDav</b> <br/>
            inserta dentro del 
            elemento seleccionado al inicio, 
            puede recibir el nombre del componente o el html 
            completo del mismo para agregar atributos o #etiquetas.
        </li>
    </ul>
`;
lang.source_1 = /* html */`

`;
