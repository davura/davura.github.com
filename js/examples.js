var examples = {};

examples.example1 = {
    "app": {
        template: /* html */ `
        <h1>Your name is: {{this.name}}</h1>
        `,
        style : /* css */`
this {
    padding: 30px;
    h1 {
        font-family:sans-serif;
    }
}
        `,
        js: /* javascript */`
d = {
    template: true,
    style: true,
    data: {
        name: "Bonarja"
    }
}
        `
    }
}
examples.example2 = {
   "app": {
        template: /* html */ `
<h4>LOOP</h4>
<div d-for="2">
    <p> #C - Hi </p>
</div>

<h4>LOOP from var</h4>
<button onclick="this.count++"> ADD </button>
<div d-for="this.count">
    <p key="#C"> {{#C + 1}} - Bonarja </p>
</div>
        `,
        style : /* css */`
this {
    padding: 15px;
    p {
        margin: 0;
    }
    button {
        background: #7b7de1;
        color: white;
        border-style: none;
        height: 30px;
        width: 90px;
        margin-bottom: 20px;
    }
}
        `,
        js: /* javascript */`
d = {
    template: true,
    style: true,
    data: {
        count: 2
    }
}
        `
   }
}

examples.example3 = {
    "app": {
        style:`
this {
    padding: 30px;
    ul {
        font-size: 1.3em;
    }
    button {
        background: #7b7de1;
        color: white;
        border-style: none;
        height: 30px;
        width: 90px;
        margin-bottom: 20px;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        outline-color: transparent;
        user-select: none;
    }
}
        `,
        template: /* html */`
<h3>LIST</h3>
<button onclick="this.default()"> RESET </button>
<br>
<ul d-for="item in this.list">
    <li>
        <label style="color: {{item.color}}"> {{item.color}} </label>
        <button onclick="this.list.remove(#C)"> REMOVE </button>
    </li>
</ul>
        `,
        js: 
/* javascript */`d = {
    template: true,
    style: true,
    data: {
        list: [],
        constructor() {
            this.default();
        },
        default() {
            this.list.new([
                {color: "cornflowerblue"},
                {color: "coral"},
                {color: "darkseagreen"}
            ])
        }
    }
}
        `
    }
}

examples.example4 = {
    "app": {
        style:`
this {
    padding: 20px;
    button {
        background: #7b7de1;
        color: white;
        border-style: none;
        height: 30px;
        width: 90px;
        margin-bottom: 20px;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        outline-color: transparent;
        user-select: none;
    }
    button.red {
        background-color: #ff7272;
    }
    button.orange {
        background-color: #e2995a;
    }
}
        `,
        template: /* html */`
<h3>Count: {{this.count}}</h3>
<button onclick="this.count++"> add </button>
<button class="red" onclick="this.count = 0"> reset </button>

<br>

<h3>Timer: {{this.time}} Seg</h3>
<button onclick="this.start()"> start </button>
<button class="orange" onclick="this.pause()"> pause </button>
<button class="red" onclick="this.pause(); this.time = 0"> reset </button>
        `,
        js: 
/* javascript */`d = {
    template: true,
    style: true,
    data: {
        count: 0,
        time: 0,
        start() {
            this.interval = setInterval(() => {
                this.time++;
            }, 1000);
        },
        pause() {
            clearInterval(this.interval);
        }
    }
}
        `
    }
}

examples.example5 = {
    "app": {
        style:`
this {
    padding: 30px;
    button {
        background: #7b7de1;
        color: white;
        border-style: none;
        height: 30px;
        width: 90px;
        margin-bottom: 20px;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        outline-color: transparent;
        user-select: none;
    }
    input {
        height: 30px;
        padding-left: 10px;
        font-size: 1em;
    }
}
        `,
        template: /* html */`
<h3>Your name is: {{this.name}}</h3>
<input placeholder="name" value="this.name">
<button onclick="this.name = '' ">clear</button>
`,
        js: 
/* javascript */`d = {
    template: true,
    style: true,
    data: {
        name: ""
    }
}
`
    }
}

examples.example6 = {
    "app": {
        style:`
this {
    padding: 30px;
    button {
        background: #7b7de1;
        color: white;
        border-style: none;
        height: 30px;
        width: 90px;
        margin-bottom: 20px;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        outline-color: transparent;
        user-select: none;
    }
}`,
        template: /* html */`
<card data="{title: 'Davura', color: 'darkseagreen'}"></card>
<card data="{title: 'Bonarja', color: 'cornflowerblue'}"></card>
<card data="{title: 'Example', color: 'coral'}"></card>
`,
        js: 
/* javascript */`d = {
    template: true,
    style: true,
    data: {
    }
}
`
    },
    "card": {
        style:`
this {
    width: 80px;
    height: 80px;
    float: left;
    margin: 5px;
    color: white;
    .wrap {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
    }
}`,
        template: /* html */`
<div class="wrap" #wrap></div>        
`,
        js: 
/* javascript */ `d = {
    template: true,
    style: true,
    data : {
        constructor() {
            this.wrap.css({
                "background-color": this.props.data.color 
            });
            this.wrap.html(this.props.data.title);
        }
    }
}`
    }
}

examples.example7 = {
    "app": {
        template: /* html */ `
<h3 #example> HELLO </h3>
<button #btn_change    onclick="this.change()"> 
    change 
</button>
<button #btn_reset    class="red" onclick="this.reset()"> 
    RESET 
</button>
`,
         style : /* css */`
 this {
     padding: 15px;
     button {
        background: #7b7de1;
        color: white;
        border-style: none;
        height: 30px;
        width: 90px;
        margin-bottom: 20px;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        outline-color: transparent;
        user-select: none;
    }
    button.red {
        background-color: #ff7272;
        display: none;
    }
 }
         `,
         js: /* javascript */`
d = {
     template: true,
     style: true,
     data: {
        change() {
            this.example.html("BONARJA").css({
                color: "coral"
            });
            this.btn_change.visible(false);
            this.btn_reset.visible(true);
        },
        reset() {
            this.example.html("HELLO").css("color","black");
            this.btn_reset.visible(false);
            this.btn_change.visible(true);
        }
     }
 }
         `
    }
 }

 examples.example8 = {
    "app": {
        template: /* html */ `
<div d-for="x in this.list">
    <h3 col="{{x}}"> 
        #C - {{x}}
    </h3>
</div>

<button onclick="this.change()"> change </button>
<button onclick="this.reset()" class="red"> reset </button>
`,
         style : /* css */`
 this {
     padding: 15px;
     button {
        background: #7b7de1;
        color: white;
        border-style: none;
        height: 30px;
        width: 90px;
        margin-bottom: 20px;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        outline-color: transparent;
        user-select: none;
    }
    button.red {
        background-color: #ff7272;
    }
    h3 {
        text-transform: uppercase;
    }
 }
         `,
         js: /* javascript */`
 c = {
     template: true,
     style: true,
     data: {
        list: [
            "darkseagreen",
            "coral",
            "cornflowerblue"
        ],
        change() {
            this._("h3").forEach(x =>{ 
                x.css("color", x.attr("col"));
            });
        },
        reset() {
            this._("h3").css("color", "black");
        }
     }
 }
         `
    }
 }

 examples.example9 = {
    "app": {
        style: /* css */`
this {
    padding: 30px;
    button {
        background: #7b7de1;
        color: white;
        border-style: none;
        height: 30px;
        width: 90px;
        margin-bottom: 20px;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        outline-color: transparent;
        user-select: none;
    }
}`,
        template: /* html */`
<button onclick="this.count++">add</button> 
<br>
<div d-for="this.count">
    <card></card>
</div>
`,
        js: 
/* javascript */`d = {
    template: true,
    style: true,
    data: {
        count: 3
    }
}
`
    },
    "card": {
        style: /* css */ `
this {
    width: 80px;
    height: 80px;
    float: left;
    margin: 5px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: coral;
}`,
        template: /* html */`
<p>CARD</p>    
`,
        js: 
/* javascript */ `d = {
    template: true,
    style: true,
    data : {

    }
}`
    }
}
examples.example10 = {
    "app": {
        style: /* css */`
this {
    padding: 30px;
    button {
        background: #7b7de1;
        color: white;
        border-style: none;
        height: 30px;
        width: 90px;
        margin-bottom: 20px;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        outline-color: transparent;
        user-select: none;
    }
    button.red {
        background-color: #ff7272;
    }
}`,
        template: /* html */`
    <button onclick="D.mytag.show()"> 
        show 
    </button>
    <button onclick="D.mytag.hide()" class="red"> 
        hide 
    </button>
    <br>
    <card #mytag></card>
`,
        js: 
/* javascript */`d = {
    template: true,
    style: true,
    data: {
    }
}
`
    },
    "card": {
        style: /* css */ `
this {
    width: 80px;
    height: 80px;
    float: left;
    margin: 5px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: coral;
    display: none;
}`,
        template: /* html */`
<p>CARD</p>    
`,
        js: 
/* javascript */ `d = {
    template: true,
    style: true,
    data : {
        show() {
            this.D.in("zoomIn","flex", 400);
        },
        hide(){
            this.D.out("bounceOut", 600);
        }
    }
}`
    }
}

examples.example11 = {
    "app": {
        style: /* css */`
this {
    padding: 30px;
    button {
        background: #7b7de1;
        color: white;
        border-style: none;
        height: 30px;
        width: 90px;
        margin-bottom: 20px;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        outline-color: transparent;
        user-select: none;
    }
    button.red {
        background-color: #ff7272;
    }
}`,
        template: /* html */`
<div d-update>
    <button 
        class="{{this.happy && 'red'}}"
        onclick="this.happy = !this.happy
    "> TOGGLE </button>
    <h1>
        {{this.happy ? '😊' : '😔'}}
    </h1>
</div>
`,
        js: 
/* javascript */`d = {
    template: true,
    style: true,
    data: {
        happy: false
    }
}
`
    }
}

examples.example12 = {
    "app": {
        style: /* css */`
this {
    padding: 30px;
    button {
        background: #7b7de1;
        color: white;
        border-style: none;
        width: 23px;
        height: 20px;;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        outline-color: transparent;
        user-select: none;
    }
    li {
        margin-bottom: 5px;
        letter-spacing: 0.08em;
        font-size: 1.1em;
        color: #333742;
    }
    button.red {
        background-color: #ff7272;
    }
}`,
        template: /* html */`
<ul d-update>
    {{ 
        this.fruits.draw( (x,i) => {
            return ${"`"}<li> 
                ${"${x.count}"} - ${"${x.name}"}
                <button onclick="this.fruits.remove(${"${i}"})">
                    x
                </button>
            </li>${"`"};
        }) 
    }}
</ul>
`,
        js: 
/* javascript */`d = {
    template: true,
    style: true,
    data: {
        fruits: [
            {name: "pear", count: 5},
            {name: "apple", count: 20},
            {name: "blackberry", count: 15}
        ]
    }
}
`
    }
}

examples.example13 = {
    "app": {
        style: /* css */`
this {
    padding: 30px;
    button {
        background: #7b7de1;
        color: white;
        border-style: none;
        height: 30px;
        width: 90px;
        margin-bottom: 20px;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        outline-color: transparent;
        user-select: none;
    }
    button.red {
        background-color: #ff7272;
    }
}`,
        template: /* html */`
<div d-update>
    {{
        this.logged_in ? 
        '<panel f-update />' : 
        '<login f-update />'
    }}
</div>
`,
        js: 
/* javascript */`d = {
    template: true,
    style: true,
    data: {
        username: "",
        logged_in: false
    }
}
`
    },
    "login": {
        style: /* css */ `
this {
    input {
        margin-bottom: 10px;
        font-size: 1em;
        padding-left: 10px;
        display: block;
    }
}`,
        template: /* html */`
<h2>Login</h2>
<div onkeypress="event.key === 'Enter' && this.login()">
    <input placeholder="username" value="this.username">
    <button onclick="this.login()">
        LOGIN
    </button>
</div>
`,
        js: 
/* javascript */ `d = {
    template: true,
    style: true,
    data : {
        username: "",
        login() {
            if (!this.username) 
                return alert("enter a username");

            D.app.username = this.username;
            D.app.logged_in = true;
        }
    }
}`
    },
    "panel": {
        style: /* css */ `
this {

}`,
        template: /* html */`
<h2>PANEL</h2>
<p> HI: {{D.app.username}} </p>
<button class="red" onclick="D.app.logged_in = false">
    log off
</button>
`,
        js: 
/* javascript */ `d = {
    template: true,
    style: true,
    data : {
    }
}`
    }
}

examples.example14 = {
    "app": {
        style: /* css */`
this {
    padding: 30px;
    button {
        background: #7b7de1;
        color: white;
        border-style: none;
        height: 30px;
        width: 90px;
        margin-bottom: 20px;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        outline-color: transparent;
        user-select: none;
    }
}`,
        template: /* html */`
<button onclick="this.load()">load</button>
<div d-for="x in this.persons">
    <person
        name="{{x.name.first}}"
        image="{{x.picture.large}}"
    ></person>
</div>
`, 
        js: 
/* javascript */`d = {
    template: true,
    style: true,
    data: {
        persons: [],
        constructor() {
            this.load();
        },
        load() {
            _.get("https://randomuser.me/api/", {results: 8})
            .then(res => this.persons.new(res.results) );
        }
    }
}
`
    },
    "person": {
        style: /* css */`
this {
    float: left;
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(91, 81, 117, 0.22);
    margin: 12px;
    overflow: hidden;
    p {
        text-align: center;
    }
}`,
        template: /* html */`
<div class="wrap" d-update>
    <img src="#{{this.props.image}}"/>
    <p>{{this.props.name}}</p>
</div>
    
`, 
        js: 
/* javascript */`d = {
    template: true,
    style: true,
    data: {
    }
}
`
    }
}

examples.example15 = {
    "app": {
        style: /* css */`
this {
    padding: 30px;
    input {
        height: 30px;
        padding-left: 10px;
        font-size: 1em;
    }
}`,
        template: /* html */`
<input
    value="this.name" 
    placeholder="name"
    onkeypress="event.key === 'Enter' && this.add()"
/>
<br><br>
<span>Press Enter key for add</span>
<br>
<ul d-for="x in this.list">
    <li>{{x}}</li>
</ul>
`, 
        js: 
/* javascript */`d = {
    template: true,
    style: true,
    data: {
        list: [],
        name: "",
        add() {
            if(!this.name) return;

            this.list.push(this.name);
            this.name = ""; //clear input
        }
    }
}
`
    },
}
examples.example16 = {
    "app": {
        style: /* css */`
this {
    padding: 30px;
    input {
        height: 30px;
        padding-left: 10px;
        font-size: 1em;
        display: block;
        margin-bottom: 20px;
    }
}`,
        template: /* html */`
<input value="this.name">
<card bg="coral"></card>
<card bg="cornflowerblue"></card>
`, 
        js: 
/* javascript */`d = {
    template: true,
    style: true,
    data: {
        name:"Bonarja"
    }
}
`
    },
    "card": {
        style: /* css */ `
this {
    width: 80px;
    height: 80px;
    float: left;
    margin: 5px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
}`,
        template: /* html */`
<p>{{D.app.name}}</p>    
`,
        js: 
/* javascript */ `d = {
    template: true,
    style: true,
    data : {
        constructor() {
            this.D.css("background", this.props.bg);
        }
    }
}`
    }
}

examples.example17 = {
    "app": {
        style: /* css */`
this {
    padding: 30px;
    button {
        background: #7b7de1;
        color: white;
        border-style: none;
        height: 30px;
        width: 90px;
        margin-bottom: 20px;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        outline-color: transparent;
        user-select: none;
    }
}`,
        template: /* html */`
<button onclick="this.add()"> append </button>
<div #items>

</div>
`, 
        js: 
/* javascript */`d = {
    template: true,
    style: true,
    data: {
        add() {
            this.items.prependDav("card");
        }
    }
}
`
    },
    "card": {
        style: /* css */ `
this {
    width: 80px;
    height: 80px;
    float: left;
    margin: 5px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: coral;
    display: none;
}`,
        template: /* html */`
<p> CARD </p>    
`,
        js: 
/* javascript */ `d = {
    template: true,
    style: true,
    data : {
        constructor() {
            this.D.in("zoomIn","flex", 150)
        }
    }
}`
    }
}
