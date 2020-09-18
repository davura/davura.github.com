//  HOME
lang.import = "Import";
lang.get_started = "Get Started";
lang.example = "Example";
lang.functions = "Functions";
lang.download = "Download";
lang.source = "Source";
lang.compressed = "Production";
lang.production = "Development";
lang.doc_source = "Documentation source";
lang.doc_source_1 = /*html*/ `
    <p>
        This documentation has been created with DAVURA and you can see the source code at the following link:
    </p>
`;
lang.get_started_1 = /*html*/ `
    <p>
        Davura is a library / framework developed for the creation of web-component that is compiled automatically within the browser or can be compiled completely in a single file. Davura can help the development of applications or SPA websites in a simpler way.
    </p>
`;
lang.get_started_2 = /* html */`
    <h1 class="title">Get Started</h1>
    <p>
        You can initialize the entire structure of a project quickly through the Davura client:
    </p>
`;
lang.get_started_3 = /*html*/ `
    <h1 class="title">Quick Start</h1>
    <p>
        You can also initialize components using a simple script faster, but less optimal to interpret and organize for more complex projects:
    </p>
`;
lang.get_started_4 = /*html*/ `
    <p>
        To create multiple components in this way, they must be within the same function <i> D(component1, component2) </i> separated as arguments.
    </p>
    <p>
        You can also use a <b> array </b> to send each component:
        <i>D([component1, component2])</i>.
    </p>
    <p>
        In both ways what is achieved is to initiate the constructor of all the components after everyone has been charged.
    </p>
`;

lang.structure = "Structure";
lang.structure_1 = /*html*/ `
    <p>The structure of a new Project created with the client is the following:</p>
`;
lang.structure_2 = /*html*/ `
    <p>
        Each component corresponds to a directory within dmodules and necessarily a file <i>.js</i>, the internal files must possess the same name of the directory that in turn is the name of the component.
    </p>
    <p>The files <i>js</i>, have the following structure:</p>
`;
lang.structure_3 = /*html*/ `
    <p>
        Use <i>true</i> in <i>template</i> and <i> tyle</i> to load each one from its corresponding file in the same directory, write the content of it in each property, or <i>false</i> to not load anything.
    </p>
`;
lang.structure_4 = /*html*/ `
    <p>
        The created components must be presented to the project through the index.html as follows:
    </p>
`;
lang.structure_5 = /* html */ `
    <p>
        As you can see all the components are imported by a <i>link</i> tag with the attribute <i>d-import</i> separated by comma.
    </p>
`;
lang.structure_6 = /* html */ `
    <p>
        Avoid doing all this process manually using the <b>client</b> for the creation and import of components automatically.
    </p>
`;
lang.client = "Client";
lang.client_1 =  /* html */ `
    <p>
        The Davura customer will not only allow you to start projects with a base structure, it will also allow you to perform different functions:
    </p>
    <ul>
        <li> <i>new</i> <a route="client/new">Create project</a> </li>
        <li> <i>add</i> <a route="client/add"> Create component and Import</a> </li>
        <li> <i>remove</i> <a route="client/remove">Remove component and remove import</a> </li>
        <li> <i>rename</i> <a route="client/rename">Rename component</a> </li>
        <li> <i>server</i> <a route="client/server">Start live server</a> </li>
        <li> <i>compile</i> <a route="client/compile">Compile project</a> </li>
    </ul>
`;
lang.client_2 =  /* html */ `
    <p>
        Create a new project with the base structure and an <i>app</i> component assigned to the <i>index.html</i>
    </p>
`;
lang.client_3 =  /* html */ `
    <p>
        It allows creating components quickly from the client and importing them automatically into the <i>index.html</i> so that can be used anywhere, including within another component <b> (avoid doing an infinite cycle) </b>
    </p>
`;
lang.client_4 =  /* html */ `
    <p>
        Delete the folder referring to a component and remove the import from it in the <i>index.html</i>
    </p>
`;
lang.client_5 =  /* html */ `
    <p>
        Rename a component, both in the name of files and in the name of import.
    </p>
`;
lang.client_6 =  /* html */ `
    <p>
        Start a live server in the current folder.
    </p>
`;
lang.client_7 =  /* html */ `
    <p>
        Groups all the content of the components in a single file <i>d_modules.js</i> to decrease loading multiple on a server, compile all the microSASS files to css and process the output through babel.
    </p>
    <p>
        In addition to this Davura when compiling creates more direct relationships for DOM selectors by <i>#tagging</i>, improving the functioning of this.
    </p>
    <p>
        The compilation process generates a folder called compile within the same directory, with all the project files, omitting the same list of <i>.gitignore</i> and the <b> directory itself </b>.
    </p>
`;
lang.functioning = "JS Functioning";
lang.functioning_1 =  /* html */ `
    <p>
        The file <i>js</i> is indispensable in each folder of a component, consists of an object that indicates whether files will be uploaded <i>html / scss</i> within the same directory of the component <b> (true / false) </b>, or if these were processed as text inside the same parameter.
    </p>
    <p>
        This can also include a data object where the whole dynamic part of the component (variables, functions, objects) is established.
    </p>
    <p>
        All the variables, objects and arrays that are declared in the data root, will be observable parameters and seek their use within the template before any change to update it.
    </p>
    <p>
        The optional <i>construtor()</i> function of each component is automatically executes all the existing components within the application have been loaded <b> (including those found within other components) </b>.
    </p>
`;
lang.functioning_2 =  /* html */ `
    <p>
        If you want to create variables, objects or fixes that do not need be observable within the component, you must create them within the <i>constructor()</i>.
    </p>
`;
lang.variables_1 =  /* html */ `
    <p>
        The observable variables can be used within the <b> template </b> of a component and before any changes in them will update their value in the <b> template </b>.
    </p>
    <p>
        However, variables can not be used as attributes of a component since these are represented in the template within a pseudo element html.
    </p>
    <p>
        There are other ways to use variables of any place including in the attributes:
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
lang.loop_for = "Loop For";
lang.loop_for_1 =  /* html */ `
    <p>
        The <i> d-for </i> property will allow you to create a defined loop, traverse an array observed in the component or traverse a json object.
    </p>
    <p>
        The evaluation of values and variables in a <i>d-for</i> can work anywhere including attributes of the elements of the dom.
    </p>
    <p>
        <i>d-for</i> must be assigned to an element of the dom so that it is Internally define the route, using for each position a pseudo element to be able to index the <b> keys </b> before any change in an array / object.

        <h2 class="title">Info</h2>
        <ul>
            <li>
                <i>#C</i> returns the index of the for cycle.
            </li>
            <li>
                <i>#K</i> returns the key of the cycle for <b> (JSON object) </b>.
            </li>
        </ul>
       
        <br>
        
        <h2 class="title"> Prototype</h2>
        <ul>
            <li>
                <i>Array.prototype.remove()</i> Allows you to delete a specific position of an observable arrangement and get the changes in the <b> d-for </b> inside of the template.
            </li>
            <li>
                <i>Array.prototype.new()</i> Allows replacing an array observed by a new array and updating the <b>d-for</b>
            </li>
        </ul>
    </p>
`;
lang.loop_for_2 =  /* html */ ` 
    <p>
        Any change in an array index will update the <i>d-for</i> in the template, but if you want to completely replace the Array, you must use the <i>Array.prototype.new()</i> function
    </p>
    <p>
        You can also use <i>Array.prototype.remove(index)</i> to remove a specific position from an observable array and get the changes in the <i>d-for</i> within the template.
    </p>
`;
lang.onclick_keypress =  /* html */ `
    <p>  
        The onclick, keypress, keyup and keydown event can be assigned to elements of the Sun and can evaluate component content, as functions and variables of it using <i>this.</i>
    </p>  
`;
lang.value =  /* html */ ` 
    <p>
        Value can link the value of a <b> input </b>, <b> select </b> or <b> textarea </b> with a observed variable.
    </p>
`;
lang.properties =/* html */ `
    <p>
        The components can receive parameters or accessible properties within it using <i>this.props</i>, the properties will try to be evaluated.
    </p>
`;
lang.dom = "Access the dom html (SDOM)";
lang.dom_1 =/* html */ `
    <p>
        Davura uses <b> SDOM </b> to give access to elements of the dom, consult its documentation to know its prototype functions here:
    </p>

    <a href="https://bonarja.github.io/sdom" target="_blank">
        https://bonarja.github.io/sdom
    </a>
    <ul>
        <li>
            To get reference to the dom of the component itself you can use <i>this.D</i>
        </li>
        <li>
            For others there are 2 ways to get access to elements of the DOM:
        </li>
    </ul>
`;
lang.dom_2 =/* html */ ` 
    <p>
        You can assign tags to the elements in the html template and access them from the component using <i>this</i>, this will return a <b> DOM Element </b> with all the prototype features of <b> SDOM </b>
    </p>
`;
lang.dom_3 =/* html */ ` 
    <p>
        The second method consists of a <b> SDOM </b> selector that works as a <b> querySelectorAll </b> but only within the html of the current component, returning a <b> DOM NodeList </b> with all the prototype functions of <b> SDOM </b>
    </p>
`;
lang.d_for_component = "Components in d-for";
lang.d_for_component_1 = /* html */ `
    <p>
        You can use components within a cycle <i>d-for</i>, this will analyze the components that are inside the loop to start them and before any update remove the components no longer used from the memory.
    </p>
`;
lang.access_to_components = "access to components";
lang.access_to_components_1 = /* html */`
    <p>
        You can access the components externally or from another component by adding a <b> #tag </b>, then you can use <i>D.label</i> to access the component.
    </p>
`;
lang.animation =/* html */ `
    <p>
        Davura works with SDOM, and this uses animate.css as global css, plus SDOM includes 2 functions to manipulate these animations in the dom html as promises.
    </p>
    <a href="https://bonarja.github.io/sdom" target="_blank">
        https://bonarja.github.io/sdom
    </a>
`;
lang.destruct_1 =/* html */ `
    <p>
        <i>this.destruct()</i> is a function of each component that allows you to destroy it and all its children components of the html DOM and memory.
    </p>
    <p>
        <i>onDestruct()</i> is an optional function that can be used in each component, it will be invoked at the moment the component is destroyed for any reason.
    </p>
`;
lang.d_update = "Super update";
lang.d_update_1 =/* html */ `
    <p>
        <b> d-update </b> allows you to evaluate all <i>{{matches}}</i> that are inside a DOM element with the <b> d-update </b> attribute.
    </p>
    <p>
        All changes that are made to variables, arrays or observable objects that are within a <b> d-update </b> will cause a total update in the corresponding <b> d-update </b>.
    </p>
`;
lang.d_update_2 = /* html */ `
    <p>
        <b> d-update </b> also allows to represent an array / object in the html, unlike <b> d-for </b>, <b> d-update </b> before any change will update the Full html of the element with the <b> d-update </b> attribute, even if what has been changed is a variable inside the <b> d-update </b> instead of the array within it.
    </p>
    <p>
        You can use <i>Array.prototype.draw()</i> to traverse an array and draw each html string that is returned in each iteration of it.
    </p>
    <p>
        To make it easier to use a tour you can use the <b>literal</b> property of javascript using the <i>${"`"}pecial quotes ${"`"}</i>, to do this and insert evaluations js using <i>`+"${evaluacion}"+/* html */`</i> inside the <b>literal</b>.
    </p>
`;
lang.d_update_3 = /* html */ `
    <h1 class="title">
        Component in d-update
    </h1>
    <p>
        You can process components within a <b> d-update </b> by adding the <b> f-update </b> attribute to each component, so that the Davura loader can determine which components are within a <b> d-update </b> and remove the memory components when <b> d-update </b> is updated.
    </p>
`;
lang.request_1 = /* html */ `
    <p>
        SDOM incorporates functions for asynchronous JSON requests <i>_.post()</i> and <i>_.get()</i> through promises.
    </p>
`;
lang.super_watch = "External observer";
lang.super_watch_1 = /* html */ `
    <p>
        You can show observable variables from one component in another obtained through the label of a component, these variables to be updated update the template of the component that is using them.
    </p>
`;
lang.route_1 = "Routes";
lang.route_2 = /* html */`
    <p>
        Davura incorporates a route manager, it can initiate a route control in 2 ways, a simple form that only reflects the changes in a pseudo DOM element called <i>d-route</i>, and another advanced form specifying the sites of the DOM where the routes will act.
    </p>
`;

lang.route_3 = /* html */`
    <p>
        The routes for each assigned site of the DOM are evaluated in a linear way, and are stopped when finding a match with the current url, but it does not always have to be the same, the routes have different configurations available.
    </p>

    <ul>
        <li> <a route="/route/path">path</a> </li>
        <li> <a route="/route/template">template</a> </li>
        <li> <a route="/route/d">d(Davura component)</a> </li>
        <li> <a route="/route/continue">continue</a> </li>
        <li> <a route="/route/after"> after() </a> </li>
        <li> <a route="/route/before">before()</a> </li>
    </ul>
`;

lang.route_4 = /* html */`
    <p>
        Davura incorporates some functions to use the routes:
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
            <b> route </b> attribute in an item
        </a></li>
    </ul>
`;

lang.route_5 = /* html */`
    <p>
        Necessary property in each route configuration block. Specifies the match with which the block will be entered and must start from the root path <b> (/) </b>
    </p>
    <p>
        The routes also determine the structure of the url in order to receive variables in the block.
        <p>
            <i>/user/:userid</i> for this case the <b> userid </b> variable would be received in a route: <i>/user/12</i>
        </p>
    </p>
    <div class="divider"></div>
    <p>
        A block of route does not enter as a coincidence if the url contains more spaces <b>(/)</b> than those specified in the path, to accept a case like this in its block assign <b>(?)</b> at the end of the path. <i>/user?</i>
        
        <br><br>
        
        For this case, a url such as <i>/user/info</i> would enter the previous path.
        
    </p>
    <div class="divider"></div>
    <p>
        Once you enter a block by path matching, the routes will not continue evaluating the following blocks, if you want the routes to continue evaluating the following blocks add <i>continue: true</i> to the block.
    </p>
`;

lang.route_6 = /* html */`
    <p>
        This property defines the flat html that will be written when using this route, the variables received through the path can be used in the template by <i> {{varname}} </i>
    </p>
`;

lang.route_7 = /* html */`
    <p>
        This property defines the component that will be loaded in the route, you can specify only the name of the same or the complete html to add extra properties such as #tags or arguments.
    </p>
`;

lang.route_8 = /* html */`
    <p>
        Allows you to continue evaluating the block array after entering a match.
    </p>
`;

lang.route_9 = /* html */`
    <p>
        This function is launched after entering the block, in case there is a <b>d</b> property to load a component, the <i>after()</i> function will be launched after the component is I finished starting.
    </p>
    <div class="divider"></div>
    <p> after returns 2 arguments: <i>after(props, loadDavu)</i></p>
    <ul>
        <li>
            <b>props</b>: is a json object with all the variables that path receives.
        </li>
        <br>
        <li>
            <b> loadDavu </b>: it is a function that allows you to start a component in the route, this function allows you to do more specific things in the route than the property <b> d </b>, how to load specific components depending on the variables of the route or some other condition.

            <br><br>

            <b>loadDavu</b> receives the name of the component or the complete html of it to assign extra properties, such as arguments or #labels.

            <br><br>

            This function returns a promise that is fulfilled at the moment when the added component is finished.
        </li>
    </ul>
`;
lang.route_10 = /* html */`
    <p>
        This function is launched before performing any other block action, it will pause the block completely until the function that before returns as an argument is released.
    </p>
`;

lang.route_11 = /* html */`
    <p>
        It allows to go to a specific route.
    </p>
`;

lang.route_12 = /* html */`
    <p>
        This function can establish a base route from where you start navigating from the moment it is assigned, from that moment all the functions to go to a route will be from the route established with <b> navegateBy </b>.
    </p>
    <p>
        <i>D.route.navegateBy()</i> returns the current route set to navigate if it is executed without sending any parameters.
    </p>
    <p>
        <i>D.route.navegateBy("")</i> resets to the base navigation path (/)
    </p>
`;

lang.route_13 = /* html */`
    <p>
        It allows to establish a function to be invoked each time a change is made in a route of a specific selection of the route.
    </p>
`;

lang.route_14 = /* html */`
    <p>
        <i>route</i> is an attribute that can be set to the html elements of a component's template to create an event that allows you to change the route when you click on them.
        <br/>
        Calling this function without parameters will return the current route.
    </p>
`;
lang.route_15 = /* html */`
    <p>
        <i>D.route()</i> allows to start the configuration of the routes receiving as an object an object with the structure of these.
    </p>
`;
lang.src = "src in d-for and d-update";
lang.src_1 = /* html */`
    <p>
        The src assigned with variables in a <b> d-for </b> or in a <b> d-update </b> cause 404 error messages in the browser console, this is not an error that implies something significant, is caused by loading the template of the component before evaluating the variables causing invalid src at that point.
    </p>
    <p>
        You can avoid these annoying messages in your console by adding <i>#</i> before the <i>{{variable}}</i> as follows:
    </p>
`;
lang.microsass = /* html */`
    <p>
        Davura works with microsass, this script processes the basic structures from <b> SCSS </b> to <b> CSS </b> directly in the browser.
    </p>
    <p>
        You can check its operation and documentation in:
        <a href="https://bonarja.github.io/microsass/">
            https://bonarja.github.io/microsass/
        </a>
    </p>
`;
lang.microsass_1 = /* html */`
    <p>
        The components are usually started with <i>this{}</i> through the Davura client, <i>this</i> refers to the current component, in this way the properties will only be applied to the current component and to the children components.
    </p>
`;
lang.prependdav_appenddav = /* html */`
    <p>
        Dom incorporates prototype functions to insert Davura components before or after an element of the DOM and initiate them.
    </p>

    <ul>
        <li>
            <b>appendDav</b>: <br/> Insert inside the selected element at the end, you can receive the name of the component or the complete html of it to add attributes or #labels.
        </li>
        <li>
            <b>prependDav</b> <br/> Insert inside the selected element at the beginning, you can receive the name of the component or the complete html of it to add attributes or #labels.
        </li>
    </ul>
`;
