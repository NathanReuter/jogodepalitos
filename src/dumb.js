/**
 * Created by nathangodinho on 21/04/17.
 */
var buscaEmProdundidade = function (foiVisitadoCB) {
    // Buscar varre totalmente uma component conexa
    var buscar = function (algumVertice) {
            var verticesVisitados = [],
                pilha = [],
                primeiroVertice = algumVertice;

            pilha.push(primeiroVertice);

            while (pilha.length !== 0) {
                var idVertice = pilha.pop();

                // Caso o vertice não tenha sido visitado
                if (verticesVisitados.indexOf(idVertice) === -1) {
                    verticesVisitados.push(idVertice);

                    Object.keys(Grafo.vertices[idVertice].arestas).forEach(function (vertice) {
                        if (verticesVisitados.indexOf(vertice) === -1) {
                            pilha.push(vertice);
                        }
                    });
                    // Função foiVisitadoCB pode ser chamada por outros metodos quando
                    // vertice ja foi visitado e ser executada.
                } else {
                    if (foiVisitadoCB && foiVisitadoCB()) {
                        totalVisitados = Grafo.nomeDosVertices;
                        break;
                    }
                }
            }

            return verticesVisitados;
        },

        totalVisitados = [];

    totalVisitados = buscar(Grafo.nomeDosVertices()[0]);

    /* Caso o buscar não tenha passado por todos os vertices, ele é chamado de novo para
     outros outros vertices não visitados até passar por todos **/
    while (totalVisitados.length < Grafo.nomeDosVertices().length) {
        var novoVerticeInicial = Grafo.nomeDosVertices().diff(totalVisitados)[0];
        totalVisitados = totalVisitados.concat(buscar(novoVerticeInicial));
    }

    return totalVisitados;
};