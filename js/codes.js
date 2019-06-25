var codes = {};

codes.quick_start = /*html*/ `
    <!-- HTML -->
    <example></example>
    <script src="davura.min.js"></script>
    <script>
        D({
            el: "example",
            template: "Hi i am one example"
        });
    </script>
`;
codes.quick_start_2 =`
    <!-- HTML -->
    <!-- INIT app davura  -->
    <app></app> 

    <script src="davura.min.js"></script>
    <script>
        D({
            // davura MAIN
            el: "app",
            template: ${"`"}
                <h1> APP <h1>
                <message msg="hello"></message>
            ${"`"},
            data: {
                constructor() {
                    console.log("ready");
                }
            }
        },{
            // davura MESSAGE
            el: "message",
            template: "<p> {{this.message}} <p> ",
            data: {
                message: "",
                constructor() {
                    this.message = this.props.msg;
                }
            }
        });
    </script>
`;

codes.structure = /* javascript */`
    d={
        template: true,
        style: true,
        data: {
            constructor() {
                console.log("Ready");
            }
        }
    }
`;
codes.structure_2 = /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title> Example </title>
            <link sass="./style.scss">
            <!--___IMPORT COMPONENTS___-->
            <link d-import="
                app,
                component1,
                component2
            ">
        </head>
        <body>
            <app></app>
            <script src="./davura.min.js"></script>
        </body>
    </html>
`;
codes.functioning = /* javascript */`
    d={
        template: true,
        style: true,
        data: {
            name: "Bonarja", // <--- Observable variable ---
            constructor() {
                console.log("Ready");
            }
        }
    }
`;
codes.functioning_1 = /* javascript */`
    d={
        template: true,
        style: true,
        data: {
            constructor() {
                this.name = "Bonarja"; // <--- Unobservable variable ---
            }
        }
    }
`;
codes.functioning_1 = /* javascript */`
    d={
        template: true,
        style: true,
        data: {
            constructor() {
                this.name = "Bonarja"; // <--- Unobservable variable ---
            }
        }
    }
`;
codes.variables_1 = /*html*/ `
    
    <!-- CORRECT -->
    <p> Your name is: {{this.name}} </p>

    <p> Result is: {{this.a + this.b}} </p>



    <!-- INCORRECT -->
    <p class="{{this.name}}"> Bonarja </p>
`;
codes.d_for = /* javascript */ `

    // Remplace observable array 

    // INCORRECT
    this.list = ["a", "b"];
    
    // CORRECT
    this.list.new(["a", "b"]);
    
`;

codes.d_update = /* html */ `

    {{
        this.list.draw( (item, index) => {
            ${"`"} <p> ${"${item}"} </p> ${"`"}
        })
    }}
    
`;

codes.request = /* javascript */ `
    _.get('https://randomuser.me/api/').then(result => {
        console.log(result)
    })

    // example sending data by post
    _.post('https://url.com/yourapi/', {user: 12}).then(result => {
        console.log(result)
    })
`;

codes.route = /* javascript */ `
    /* Simple show in d-route */

    D.route([
        {
            path: "/",
            template: "Hello, you are at home"
        },{
            path: "/user/:id",
            template: "User: {{id}}"
        }
    ])
`;

codes.route_1 = /* javascript */ `
    /* Avanced show in custon */

    D.route({
        "#content": [
            {
                path: "/",
                template: "Hello, you are at home"
            }
        ],
        ".site": [
            {
                path: "/",
                template: "Hello, you are at home in other site"
            }
        ]
    })
`;

codes.before = /* javascript */ `
    D.route({
        "#content": [
            {
                path:"/",
                d: "<home #home />",
                before(done) {
                    console.log("before");
                    done();
                }
            }
        ]
    })
`;

codes.onchange = /* javascript */ `
    D.route.onchange("#content", () =>{
        console.log("changed");
    });
`;

codes.route_element = /* html */ `
    <div route="/about"> GO ABOUT </div>
    <a route="/"> GO HOME </a>
`;

codes.src_dfor = /* html */ `
    <!-- in d-for -->

    <div d-for="x in this.images">
        <img src="#{{x}}"/>
    </div>

    <!-- in d-update -->

    <div d-update>
        {{
            this.images.draw(x => {
                return ${"`"}<img src="#${"${x}"}"/>${"`"}
            })
        }}
    </div>
`;

codes.microsass = /* css */ `
    this {
        width: 100%;
        background-color: coral;
        .item {
            font-size: 1em;
        }
    }
`