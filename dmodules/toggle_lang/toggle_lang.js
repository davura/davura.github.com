d={
    template:true,
    style:true,
    data:{
        current: 1,
        lang: ["en", "es"],
        select(num, process) {
            if (process === undefined) {
                process = true;
            }
            
    


            if (this.lang.includes(num)) {
                num = this.lang.indexOf(num) + 1;
            }

            if (this.current == num) return;

            this.active.removeClass(`_${this.current}`);
            this.current = num;
            this.active.addClass(`_${this.current}`);
            

            if (!process) return;

            var current_route = D.route();
            current_route = current_route.split("/")
            current_route.splice(0,1);
            current_route = current_route.join("/");

            var lang = LANGUAGE(this.lang[num - 1]);
            D.route.navigateBy(`/${lang}`);
            D.route.go(`/${current_route}`);
            D.lang._load(lang);
        }
    }
}
