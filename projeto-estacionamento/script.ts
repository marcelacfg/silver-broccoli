"use strict";

interface Veiculo {
  nome: string;
  placa: string;
  entrada: Date | string;
}

(function () {
  const $ = (query: string): HTMLInputElement | null =>
    document.querySelector(query);

  function calcTempo(mil: number) {
    const min = Math.floor(mil / 60000);
    const sec = Math.floor((mil % 60000) / 1000);
    return `${min}m e ${sec}s`;
  }

  function patio() {
    function ler(): Veiculo[] {
      return localStorage.patio ? JSON.parse(localStorage.patio) : [];
    }
    function adicionar(veiculo: Veiculo, salva?: boolean) {
      const row = document.createElement("tr");

      let classe;
      patio().ler().length % 2 === 0
        ? (classe = "linhapar")
        : (classe = "linhaimpar");

      row.innerHTML = `
        <td class="${classe}">${veiculo.nome}</td>
        <td class="${classe}">${veiculo.placa}</td>
        <td class="${classe}">${veiculo.entrada}</td>
        
        <td class="${classe}>
          <button class="delete" data-placa=${veiculo.placa}>X</button>
        </td>
      `;

      row.querySelector(".delete")?.addEventListener("click", function () {
        remover(this.dataset.placa);
      });

      $("#patio")?.appendChild(row);
      if (salva) salvar([...ler(), veiculo]);
    }

    function remover(placa: string) {
      const v = ler().find((veiculo) => veiculo.placa === placa);

      const tempo = calcTempo(
        new Date().getTime() - new Date(v.entrada).getTime()
      );

      if (!confirm(`O veiculo ${v.nome} permaneceu ${tempo}. Deseja encerrar?`))
        return;

      salvar(ler().filter((veiculo) => veiculo.placa !== placa));
      render();
    }
    function salvar(veiculos: Veiculo[]) {
      localStorage.setItem("patio", JSON.stringify(veiculos));
    }
    function render() {
      $("#patio")!.innerHTML = "";
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

  $("#cadastrar")?.addEventListener("click", () => {
    const nome = $("#nome")?.value;
    const placa = $("#placa")?.value;

    if (!nome || !placa) {
      alert("Os campos nome e placa são obrigatórios");
      return;
    }

    if (
      !patio()
        .ler()
        .find((veiculo) => veiculo.placa === placa)
    ) {
      patio().adicionar(
        { nome, placa, entrada: new Date().toISOString() },
        true
      );
      $("#nome").value = "";
      $("#placa").value = "";
      $("#nome").focus();
    } else alert("Placa já cadastrada.");
  });
})();
