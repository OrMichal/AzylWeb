class ComNameDiv extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        const div = document.createElement("div");
        div.part = "comNameDiv";

        const img = document.createElement("img");
        img.src = "../images/daisy-azyl-pos.png"
        img.part = "comNameImg";

        const flexDivc = document.createElement("div");
        flexDivc.part = "comNameFlexDivC";

        const flexDivr = document.createElement("div");
        flexDivr.part = "comNameFlexDivR";

        const span = document.createElement("span");
        span.part = "comNameSpan";
        span.textContent = "Daisy";

        const comTypeSpan = document.createElement("span");
        comTypeSpan.part = "comNameTypeSpan";
        comTypeSpan.textContent = "azyl";

        const comTypeDescSpan = document.createElement("span");
        comTypeDescSpan.part = "comNameTypeSpan";
        comTypeDescSpan.textContent = "z. s.";

        div.appendChild(img);
        flexDivc.appendChild(span);
        flexDivr.appendChild(comTypeSpan);
        flexDivr.appendChild(comTypeDescSpan);
        flexDivc.appendChild(flexDivr);
        div.appendChild(flexDivc);
        this.shadowRoot.appendChild(div);
    }
}

customElements.define("com-name-div", ComNameDiv);