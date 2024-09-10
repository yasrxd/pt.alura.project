function pesquisar()  {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if(!campoPesquisa) {
        section.innerHTML = "<p>nada encontrado...<p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let atracoes = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.titulo.toLowerCase()
    atracoes = dado.atracoes.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || atracoes.includes(campoPesquisa)){
        resultados += `
<div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}
        </p>
        <p class="atracoes">Atrações: ${dado.atracoes}</p>

        <a href=${dado.link} target="_blank">mais informações</a>
    </div>
`;
}
 }


 if(!resultados){
    resultados = "<p>nada encontrado...<p>"
 }
section.innerHTML = resultados;

}

