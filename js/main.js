var code = (el) => {
    el["_"]("pre[load]").forEach(x => {
        var load = x.attr("load");
        var language = x.attr("language") || "javascript";
        var code = document.createElement("code");
        code.textContent = codes[load];
        x.addClass(language);
        x.append(code);
        hljs.highlightBlock(x);
    });
}
// suport array and objects
var asyncForEach = function(object,callback,data){
    return new Promise((done)=>{
        // Initial
        if(!data){
            data = {
                isArray: false,
                index: -1,
                finish: done
            };
            if(Array.isArray(object)) {
                data.isArray = true;
                data.length = object.length;
            } else {
                data.keys = Object.keys(object);   
                data.length = data.keys.length
            }
        }
        // next recursive
        var next = function() {
            asyncForEach(object,callback,data);
        }
        var index;
        var exist = true;
        data.index++;
        if (data.index >= data.length) {
            exist = false;
        }
        if (exist) {
            if (data.isArray) {
                index = data.index;
            } else {
                index = data.keys[data.index];
            }
            callback(object[index],index,next);
        } else {
            data.finish();
        }
    })
}

var go = (site, cap) => {
    var el = cap._(`[site='${site}']`)[0];
    if (el) {
        if (typeof el.scrollIntoView === "function") {
            el.scrollAt();
        } else {
            C.app.content.scrollTo(0,el.offsetTop);
        }
    }
}

var tab_in_textarea = el => {
    el.onkeydown = function(e) {
        if(e.keyCode==9 || e.which==9){
            e.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1; 
        }
    }
}
var CURRENT_LANGUAGE = false;
var LANGUAGE = (set) => {

    var re = /es|en/;

    // Set language
    if (set){
        !re.test(set) && (set = "en");
        localStorage.setItem("davura_language", set);
        CURRENT_LANGUAGE = set;
        return set;
    }

    // Get language
    // Get by localstorage
    var lang = localStorage.getItem("davura_language");
    if (lang) return lang;

    // Get by navigator
    var lang = window.navigator.language.split("-")[0].toLowerCase();
    if (!re.test(lang)) return LANGUAGE("en");

    return LANGUAGE(lang);

}

var TEXTFX = function(data) {
    return new (function(){
        data.default = data.default.split("");
        var letters = data.letters || ["a","b","c","d","e","f","0","1","2","3","4","#","@","&","%","+"];
        var ini = false;
        var times = [];

        function get() {
            return letters[Math.floor(Math.random() * letters.length)];
        }

        function fx(el) {
            return new Promise(function(done) {
                el.innerHTML = get();
                times.push(setInterval(function(){
                    el.innerHTML = get();
                }, data.interval || 60))
                el.in(data.fxIn || "fadeIn", data.fxInTime || 400).then();
                setTimeout(function(){
                    done();
                }, data.next || 150)
            })
        }

        function set_default() {
            return new Promise(function(done) { 
                asyncForEach(data.el, function(item, index, next){
                    clearInterval(times[index]);
                    item.innerHTML = data.default[index];
                    setTimeout(function(){
                        next();
                    }, data.next || 130)
                }).then(function(){
                    done();
                })
            })
        }

        function start() {
            return new Promise(function(done) {
                times = [];
                asyncForEach(data.el, function(item, index, next){
                    fx(item, index).then(function() {
                        next();
                    })
                }).then(function() {
                    setTimeout(function() {
                        // set default
                        set_default().then(function() {
                            done();
                        })
                    }, data.delay || 100);
                })
            })
        }

        function hide() {
            return new Promise(function(done) {
                asyncForEach(data.el, function(item, index, next){

                    item.out(data.fxOut || "fadeOut", data.fxOutTime || 400);
                    setTimeout(function(){
                        next();
                    }, data.next || 130)

                }).then(function(){
                    done();
                })
            })
        }

        this.fx = function() {
            return new Promise(function(done) {
                if(!ini) {
                    data.el.visible(false);
                    ini = true;
                    setTimeout(function() {
                        start().then(function() {
                            done();
                        })
                    },data.toIni || 300)
                } else {
                    hide().then(function() {
                        setTimeout(function() {
                            start().then(function() {
                                done();
                            })
                        },data.toIni || 300)
                    })
                }    
            })
        }

    })()
}