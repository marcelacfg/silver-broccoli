"use strict";
(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function calcTempo(mil) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor((mil % 60000) / 1000);
        return `${min}m e ${sec}s`;
    }
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function adicionar(veiculo, salva) {
            var _a, _b;
            const row = document.createElement("tr");
            let classe;
            patio().ler().length % 2 === 0
                ? (classe = "linhapar")
                : (classe = "linhaimpar");
            row.innerHTML = `
        <td class="${classe}">${veiculo.nome}</td>
        <td class="${classe}">${veiculo.placa}</td>
        <td class="${classe}">${veiculo.entrada}</td>
        
        <td>
          <button class="delete" data-placa=${veiculo.placa}>X</button>
        </td>
      `;
            (_a = row.querySelector(".delete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                remover(this.dataset.placa);
            });
            (_b = $("#patio")) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            if (salva)
                salvar([...ler(), veiculo]);
        }
        function remover(placa) {
            const v = ler().find((veiculo) => veiculo.placa === placa);
            const tempo = calcTempo(new Date().getTime() - new Date(v.entrada).getTime());
            if (!confirm(`O veiculo ${v.nome} permaneceu ${tempo}. Deseja encerrar?`))
                return;
            salvar(ler().filter((veiculo) => veiculo.placa !== placa));
            render();
        }
        function salvar(veiculos) {
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }
        function render() {
            $("#patio").innerHTML = "";
            const patio = ler();
            if (patio.length) {
                patio.forEach((veiculo) => {
                    adicionar(veiculo);
                });
            }
        }
        return { ler, adicionar, remover, salvar, render };
    }
    patio().render();
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        if (!nome || !placa) {
            alert("Os campos nome e placa são obrigatórios");
            return;
        }
        if (!patio()
            .ler()
            .find((veiculo) => veiculo.placa === placa)) {
            patio().adicionar({ nome, placa, entrada: new Date().toISOString() }, true);
            $("#nome").value = "";
            $("#placa").value = "";
            $("#nome").focus();
        }
        else
            alert("Placa já cadastrada.");
    });
})();
