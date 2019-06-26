d={
    template:true,
    style:true,
    data:{
        sidebar:[],
        add: "", // new component name
        current: "",
        new_name: "",
        add_resize: false,
        constructor(){
            window['test'] = this.sidebar;
            this.time_resize = false;
            this.in_mobile = false;
            this.on_load = true;
            this.list = {};
            this.close_menu = this.close_menu.bind(this);
            if (this.props.fullscreen) {
                this.D.css({
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    maxWidth: "unset",
                    minWidth: "unset",
                    maxHeight: "unset",
                    minHeight: "unset",
                    left: 0,
                    top: 0
                });
            }
            if (this.props.load) {
                var select = examples[this.props.load];
                for (var key in select) {
                    this.list[key] = select[key];
                    this.list[key].el = key;
                }
            }
            if (!this.add_resize) {
                this.add_resize = true;
                this.resize = this.resize.bind(this);
                window.addEventListener('resize', this.resize, false);
            }
           
            
            this.codes();
            this.load();
            this.open("app");

            this._(".s_html, .s_js, .s_scss").on("change",(e) =>{
                this.update(e.target);
            })
            this.iframe.addEventListener("load",() => {
                if (this.on_load) {
                    this.on_load = false;
                    this.run();
                    this.inAdd = false;
                    this.inRemove = false;
                    this.in_rename = false;
                }
            });
            this.resize();
            setTimeout(()=>{
                this.D.css({
                    display: "none",
                    visibility: "unset",
                }).in("fadeInUp");
            },320)
        },
        load() {
            var sidebar = [];
            for(var key in this.list) {
                sidebar.push(key);
            }
            this.sidebar.new(sidebar);
        },
        open_menu() {
            this.lab_sidebar.addClass("open");
            setTimeout(()=>{
                this.content.addEventListener("click", this.close_menu, false);
                this.iframe.contentDocument.addEventListener("click", this.close_menu, false);
            }, 50)
        },
        close_menu() {
            this.lab_sidebar.removeClass("open");
            this.content.removeEventListener("click", this.close_menu, false);
            this.iframe.contentDocument.removeEventListener("click", this.close_menu, false);
        },
        open(el) {
            this.close_menu();
            var name = typeof el === "string" ? el : el.attr("name");
            if (name === this.current) return;

            this.lab_sidebar.find(".item.active").removeClass("active");
            this.lab_sidebar.find(`.item[name='${name}']`).addClass("active");

            this.current = name;
            var s = this.list[name];
            this.template.updateCode(s.template);
            this.style.updateCode(s.style);
            this.js.updateCode(s.js);
        },
        codes() {
            this.js = new CodeFlask(this.ejs, {
                language: 'js',
                lineNumbers: true
            });
            this.template = new CodeFlask(this.ehtml, {
                language: 'html',
                lineNumbers: true
            });
            this.style = new CodeFlask(this.escss, {
                language: 'css',
                lineNumbers: true
            });
            this._("textarea").forEach(x => {
                tab_in_textarea(x);
            });
        },
        run() {
            this.iframe.contentWindow["__load"](this.list);
        },
        update(el) {
            if (el) {
                var type = el.parent().parent().attr("type");
                this.list[this.current][type] = this[type].code;
            }
            this.on_load = true;
            this.iframe.contentWindow.location.reload();
        },
        select_tab(el) {
            var type = el.attr("type");
            this._(".lab_header .view.select").removeClass("select");
            this._(".section.select").removeClass("select");
            el.addClass("select");
            this._(`.section[type='${type}']`).addClass("select");
        },
        show_add() {
            this.wrap_add.in("fadeIn", "flex", 300);
            this.window_add.in("fadeInDownBig", 300);
            this.input_add.focus({preventScroll:true});
        },
        close_add() {
            this.window_add.out("fadeOutDownBig", 250);
            this.wrap_add.out("fadeOut", 250).then(()=>{
                this.add = "";
            })
        },
        add_cap() {
            if (this.inAdd) return;

            this.inAdd = true;
            if (!this.list[this.add]) {

                this.list[this.add] = {
                    template: "\n",
                    style:`
this {

}
`,
                    js:`
c = {
    template: true,
    style: true,
    data: {
        constructor() {
            
        }
    }
}
`
                }
                this.load(); // load sidebar
                this.open(this.add); // open add
                this.update(); // update and run

            } else {
                alert(`Alredy exist component ${this.add}`);
            }
            this.close_add();
        },
        resize(){
            clearTimeout(this.time_resize);
            this.time_resize = setTimeout(() => {

                if (!this.wrap) {
                    return this.onDestruct();
                }

                var width = this.D.width();
                if (width <= 950 && !this.in_mobile) {
                    this.in_mobile = true;
                    this.wrap.addClass("mobile");
                    this.select_tab(this.viewhtml);
                    return;
                }
                if (this.in_mobile && width > 950) {
                    this.in_mobile = false;
                    this.wrap.removeClass("mobile");
                }
                if (this.in_mobile && width <= 800) {
                    this.close_menu();
                }
            }, 300);
        },
        remove() {
            if (this.inRemove) return;
            this.inRemove = true;
            if (this.current === "app") {
                return alert("can not remove app");
            }
            delete this.list[this.current];
            this.load(); // load sidebar
            this.open("app"); // open add
            this.update(); // update and run
            this.current = "app";
        },
        onDestruct() {
            window.removeEventListener('resize', this.resize, false);
        },
        show_rename() {
            if (this.current === "app") {
                return alert("you can not rename app");
            }
            this.wrap_add.in("fadeIn", "flex", 300);
            this.window_rename.in("fadeInDownBig", 300);
            this.input_rename.focus({preventScroll:true});
        },
        rename() {
            if (this.in_rename) return;
            
            if (this.list[this.new_name]) {
                return alert(`Alredy exist component ${this.new_name}`);
            }
            
            this.in_rename = true;

            this.list[this.new_name] = this.list[this.current];
            delete this.list[this.current];
            this.current = "app";
            this.load(); // load sidebar
            this.open(this.new_name); // open add
            this.update(); // update and run
            this.current = this.new_name;
            this.new_name = "";
            this.close_rename();
            
        },
        close_rename() {
            this.window_rename.out("fadeOutDownBig", 250);
            this.wrap_add.out("fadeOut", 250).then(()=>{
                this.new_name = "";
            })
        },
        get_code() {
            var cimport = "";
            for(var key in this.list) {
                cimport +="\n               "+key+",";
            }
            cimport = cimport.slice(0,cimport.length-1);
            var code = "";
            code+=`<!DOCTYPE html>`;
            code+=`\n<html lang="en">`;
            code+=`\n<head>`;
            code+=`\n       <meta charset="UTF-8">`;
            code+=`\n       <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">`;
            code+=`\n       <meta http-equiv="X-UA-Compatible" content="ie=edge">`;
            code+=`\n       <title> LAB </title>`;
            code+=`\n       <style>`;
            code+=`\n               html,body{height: 100%;width: 100%;margin: 0;}`;
            code+=`\n               *{font-family:sans-serif;}`;
            code+=`\n       </style>`;
            code+=`\n       <link d-import="`;
            code+=`         ${cimport}`;
            code+=`\n       ">`;
            code+=`\n</head>`;
            code+=`\n<body>`;
            code+=`\n       <app #app></app>`;
            code+=`\n       <script src="./davura.min.js"></script>`;
            code+=`\n</body>`;
            code+=`\n</html>`;
            return code;
        },
        open_index() {
            // load code
            this.code.textContent = this.get_code();
            hljs.highlightBlock(this.code);
            this.wrap_index.in("fadeIn", "flex", 300);
            this.window_index.in("fadeInDownBig", 300);
        },
        close_index() {
            this.window_index.out("fadeOutDownBig", 250);
            this.wrap_index.out("fadeOut", 250);
        }
    }
}
