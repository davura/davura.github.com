D.route({
    "#content": [
        {   
            path: "/",
            after: function() {
                // language
                
                var lang = LANGUAGE();
                D.route.navigateBy(`/${lang}`);
                D.route.go("/hello");
                D.toggle_lang.select(lang, false);
                D.lang._load(lang);
            }
        },
        {
            path: "/:lang/:site?",
            continue: true,
            after: function(props) {
                if(props.lang && props.lang !== CURRENT_LANGUAGE) {
                    var lang = LANGUAGE(props.lang);
                    D.lang._load(lang);
                    D.route.navigateBy("/"+lang)
                    D.toggle_lang.select(lang, false);
                }
                if (props.site) {
                    D.sidebar.select(props.site);
                }
            }
        },
        {
            path: "/:lang/hello",
            d: "<page_davura class='main animated fadeIn'/>"
        },{
            path: "/:lang/source",
            d: "<page_source class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/get_started",
            d: "<page_get_started class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/structure",
            d: "<page_structure class='main animated fadeIn'/>",
        }, 
        {
            path: "/:lang/client?/:site",
            after: function(props, loadDabu) {
                if (!D.client) {
                    loadDabu("<page_client class='main animated fadeIn' #client/>")
                    .then(function(){
                        if (props.site) {
                            D.client.go(props.site);
                        }
                    })
                } else if (props.site){
                    D.client.go(props.site);
                }
            }
        },
        {
            path: "/:lang/functioning",
            d: "<page_functioning class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/variables",
            d: "<page_variables class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/d_for",
            d: "<page_dfor class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/onclick_onkeypress",
            d: "<page_onclick_keypress class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/value",
            d: "<page_value class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/props",
            d: "<page_props class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/dom",
            d: "<page_dom class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/animation",
            d: "<page_animation class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/d_for_component",
            d: "<page_dfor_component class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/access_to_components",
            d: "<page_access_to_components class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/destruct_ondestruct",
            d: "<page_destruct_ondestruct class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/d_update",
            d: "<page_dupdate class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/request",
            d: "<page_request class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/route?/:site",
            after: function(props, loadDabu) {
                if (!D.p_route) {
                    loadDabu("<page_route class='main animated fadeIn' #p_route/>")
                    .then(function(){
                        if (props.site) {
                            D.p_route.go(props.site);
                        }
                    })
                } else if (props.site){
                    D.p_route.go(props.site);
                }
            }
        },
        {
            path: "/:lang/external_watch",
            d: "<page_external_watch class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/src_dfor_or_dupdate",
            d: "<page_src_dfor_or_dupdate class='main animated fadeIn'/>"
        },
        {
            path:"/:lang/microsass",
            d: "<page_microsass class='main animated fadeIn'/>"
        },
        {
            path: "/:lang/prependdav_appenddav",
            d: "<page_prependdav_appenddav class='main animated fadeIn'/>"
        }
    ]
})
D.route.onchange("#content", function(){
    if (D.sidebar.is_open) {
        D.sidebar.close();
    }
});