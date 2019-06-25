d={
    template:true,
    style:true,
    data:{
        is_open: false,
        is_scroll: false,
        constructor(){
            this.D.in("slideInLeft",250);
            this.close = this.close.bind(this);

        },
        select(select){
            var el = this._(`.item[route="${select}"]`);

            if(!this.is_scroll) {
                this.is_scroll = true;
                setTimeout(() => {
                    el[0].scrollAt("end")
                }, 300);
            }

            this._(".item.active").removeClass("active");
            el.addClass("active");
        },
        open() {
            this.is_open = true;
            this.D.addClass("open");
            D.app.content.addEventListener('click', this.close, false);
        },
        close() {
            this.is_open = false;
            D.app.content.removeEventListener('click', this.close, false);
            this.D.removeClass("open");
        }
    }
}
