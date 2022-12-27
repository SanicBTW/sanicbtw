class TransitionManager
{
    static #mainDiv = document.getElementById('mainDiv');
    static #black = document.getElementById('blackTransition'); // im not racist i swear
    static whileT = null;
    static afterT = null;

    static transition()
    {
        this.#setFuncs();

        this.#black.style.top = "0px";
        this.whileT();
        var tim = setTimeout(() => 
        {
            this.#black.style.top = "-2000px";
            this.afterT();
            clearTimeout(tim);
        }, 1500);
    }

    static changeContent(goTo)
    {
        
    }

    static #setFuncs()
    {
        if (this.whileT == null) this.whileT = function(){}
        if (this.afterT == null) this.afterT = function(){}
    }
}