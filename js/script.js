function Calc() {
    const display = document.querySelector(".display");

    this.inicia = () => {
        this.cliqueBotoes();
        this.teclaEnter();
    }

    this.efetuaCalculo = () => {
        let calculo = display.value;

        try {
            calculo = eval(calculo);

            if (!calculo) {
                alert("Calculo inválido!");
                return;
            }
            display.value = calculo;

        } catch {
            alert("Calculo inválido!");
        }
    }

    this.cliqueBotoes = () => {
        document.addEventListener("click", (e) => {
            const el = e.target;

            if (el.classList.contains("btn-del")) this.apagaUm();

            if (el.classList.contains("btn-num")) this.btnParaDisplay(el.innerText);

            if (el.classList.contains("btn-clear")) this.clearDisplay();

            if (el.classList.contains("btn-eq")) this.efetuaCalculo();
        });
    }

    this.teclaEnter = () => {
        display.addEventListener("keypress", (e) => {
            if (e.keyCode === 13) this.efetuaCalculo();
        });
    }


    this.apagaUm = () => {
        display.value = display.value.slice(0, -1);
    }
    this.clearDisplay = () => {
        display.value = "";
    }
    this.btnParaDisplay = (valor) => {
        display.value += valor;
    }
}

function darkMode() {
    const darkModeSlct = document.querySelector("#dark-mode-input");
    const darkModeLbl = document.querySelector(".dark-mode-label");
    const container = document.querySelector(".container");
    const btn = document.querySelectorAll(".btn-num");



    darkModeSlct.addEventListener("change", (e) => {
        if (darkModeSlct.checked) {
            darkModeLbl.innerHTML = "&#127770";
            container.style.backgroundColor = "var(--bg-color-dark)";
            for (let botao of btn) {
                botao.style.backgroundColor = "var(--btn-color-dark)"
                botao.style.color = "var(--btn-txt-color-dark)"

            }

        } else {
            darkModeLbl.innerHTML = "&#127773";
            container.style.backgroundColor = "var(--bg-color)";
            for (let botao of btn) {
                botao.style.backgroundColor = "var(--btn-color)"
                botao.style.color = "white"

            }
        }
    });
}
darkMode();





const calculadora = new Calc();
calculadora.inicia();