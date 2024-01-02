let linhas = "";

function adicionar(){
    let nome = document.querySelector(".nome").value;
    let DDD = document.querySelector(".DDD").value;
    let tel = document.querySelector(".tel").value;

    let nomeMaiusculo = toUpperCase(nome);

    if (nome === "" || DDD === "" || tel === ""){
        alert("Você precisa preencher os campos!");
    }else {
            let novaLinha = `<tr>
            <th>${nome}</th>
            <th>(${DDD}) ${tel}</th>  
        </tr>`

        linhas += novaLinha;
        document.querySelector(".tbody").innerHTML = linhas;

        let tabela = document.getElementById("table"); 
        tabela.classList.remove("naoMostra");
    }
}