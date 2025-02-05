class comLogo extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        
        const img = document.createElement("img");
        img.part = "comLogoImg";
        img.src = "../images/daisy-azyl-pos.png";

        this.shadowRoot.appendChild(img);
    }
}

customElements.define("com-logo", comLogo);