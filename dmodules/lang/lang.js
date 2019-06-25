d={
    template: true,
    style: true,
    data:{
        _current: false,
        example: "",
        functions: "",
        get_started: "",
        get_started_1: "",
        get_started_2: "",
        get_started_3: "",
        get_started_4: "",
        structure:"",
        structure_1:"",
        structure_2:"",
        structure_3:"",
        structure_4:"",
        structure_5:"",
        structure_6: "",
        import:"",
        client:"",
        client_1: "",
        client_2: "",
        client_3: "",
        client_4: "",
        client_5: "",
        client_6: "",
        client_7: "",
        functioning:"",
        functioning_1:"",
        functioning_2:"",
        variables_1:"",
        loop_for:"",
        loop_for_1: "",
        loop_for_2: "",
        onclick_keypress: "",
        value: "",
        properties: "",
        dom: "",
        dom_1: "",
        dom_2: "",
        dom_3: "",
        d_for_component: "",
        d_for_component_1: "",
        access_to_components: "",
        access_to_components_1: "",
        animation: "",
        destruct_1: "",
        d_update: "",
        d_update_1: "",
        d_update_2: "",
        d_update_3: "",
        request_1: "",
        super_watch: "",
        super_watch_1: "",
        route_1: "",
        route_2: "",
        route_3: "",
        route_4: "",
        route_5: "",
        route_6: "",
        route_7: "",
        route_8: "",
        route_9: "",
        route_10: "",
        route_11: "",
        route_12: "",
        route_13: "",
        route_14: "",
        route_15: "",
        src: "",
        src_1: "",
        microsass: "",
        microsass_1: "",
        prependdav_appenddav: "",
        source: "",
        download: "",
        production: "",
        compressed: "",
        doc_source: "",
        doc_source_1: "",
        _load(lang) {
            if (this._current === lang) return;
            this._current = lang;
            _.get(`./lang/${lang}.js`).then( result => {
                var lang = {};
                try {
                    eval(result);
                     for (var key in lang) {
                        this[key] = lang[key];
                    }
                } catch (error) {
                    alert(error);
                }
            })
        }
    }
}
