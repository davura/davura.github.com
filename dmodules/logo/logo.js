d={
    template:true,
    style:true,
    data:{
        constructor(){
            this.D.css({
                "max-width": this.props.maxwidth
            })
            this.textfx = TEXTFX({
                el: _(".text text"), 
                default: "DΛVURΛ"
            });
            this.fx = true;
            this.run_text_fx();
        },
        run_text_fx() {
            if (!this.fx) return;
            this.textfx.fx().then(()=>{
                setTimeout(() => {
                    this.run_text_fx();
                }, 3000);
            })
        },
        onDestruct() {
            // stop interval animation
            this.fx = false;
        }
    }
}
