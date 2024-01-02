let linhas = "";
let nomes = [];


function adicionar() {
    let nome = document.querySelector(".nome").value;
    let DDD = document.querySelector(".DDD").value;
    let tel = document.querySelector(".tel").value;

    let nomeMaiusculo = nome.toUpperCase();

    if (nome === "" || DDD === "" || tel === "") {
        alert("Você precisa preencher os campos!");
    } else if (nomes.includes(nomeMaiusculo)) {
        alert("Você Já adicionou um outro contato com este nome!");
    } else {
        let novaLinha = `<tr>
            <th>${nome}</th>
            <th>(${DDD}) ${tel}</th>  
        </tr>`;

        linhas += novaLinha;
        document.querySelector(".tbody").innerHTML = linhas;

        let tabela = document.getElementById("table");
        tabela.classList.remove("naoMostra");

        nomes.push(nomeMaiusculo);
    }

    document.querySelector(".nome").value = "";
    document.querySelector(".DDD").value = "";
    document.querySelector(".tel").value = "";
}
