var aula1 = $('#aula1');
var aula2 = $('#aula2');
var aula3 = $('#aula3');
var aula4 = $('#aula4');
var aula5 = $('#aula5');
var contents = $('#contents');

var conteudoAula1 = function(){
    contents.empty();
    contents.append('<h2 class="code-color">Aula 1 - Introdução ao mongoDB</h2>');
    contents.append(
		'<h3>Mongo?</h3>',
        '<p>Sim, em muitos idiomas pode ser um termo pejorativo, mas a origem vem de: </p>',
        '<p> Humongous  “Gigantesco”</p>',
        '<h3>História </h3>',
        '<p> Foi criado pelos fundadores da Doubleclick </p>',
        '<p> ● 10gen foi fundada em 2007</p>',
        '<p> ● A ideia inicial era fazer um produto semelhante ao Google App Engine </p>',
        '<h3> Alta curva de crescimento Contribuições ao core do MongoDB </h3>'
        );
    contents.append('<img src="img/cursoCrescimentoMongo.jpg" alt=""/>');
    contents.append(
        '<h3>Um pouco de conceitos... </h3>',
        '<ul>',
         '<li>NoSQL: O termo foi criado por Carlo Strozzi e Eric Evans como referência a um tipo de armazenamento de dados</li>',
         '<li>O termo NoREL e Não Relacional também é bastante utilizado</li>',
         '</ul>',
         '<h23Nomenclaturas de comparação de bando de dados relacionais com o não relacional </h3>',
    );
    contents.append('<img src="img/nomenclatura.jpg" alt=""/>');
    contents.append(
         '<h2> Alguns recursos animais! ... </h3>',
         '<ul>',
          '<li>NBusca textual (Full Text Search)v</li>',
          '<li>Aggregation framework</li>',
          '<li>Índices espaciais (geográficos)</li>',
          '<li>XXXXX</li>',
          '</ul>',
    );
};

this.conteudoAula1();
aula1.click(function(){
    conteudoAula1();
});

aula1.mouseover(function(){
    aula1.addClass("itemMouseOver");
});
aula1.mouseout(function(){
    aula1.toggleClass("itemMouseOver");
});    

aula2.click(function(){
    contents.empty();
    contents.append('<h2 class="code-color">Aula 2 - CRUD e comando basicos </h2>');
    contents.append(
        '<h3>CRUD OPERATIONS</h3>',
        '<p>Em MongoDB CRUD tem a forma de chamadas de metodos, vamos estudar um pouco de cada um abaixo:</h3>',
        '<h3>CREAT => INSERT</h3>',
        '<p> ex: db.nomeDaColeção.INSERT({group: "A", name: Jonh", grade: 8.0) </p>',
        '<h3>>READ => FIND ou FINDONE</h3>',
        '<p> ex: db.nomeDaColeção.find(col1:2)</p>',
        '<h3>>SORT => ORDENAR:</h3>',
        '<p> a função sort no final de todas as outras, com um documento indicando quais campos e se a ordenação por aquele campo é crescente (1) ou descrescente (-1) ex:db.nomeDaColeção.find(col1:2).SORT({col:-1})</p>',
        '<h3>>>LIMIT => LIMITADOR:</h3>',
        '<p> Limita a quantidade de documentos mostrado ex: db.nomeDaColeção.find(grupo:A).SORT({col:-1}).limit(1)</p>',
        '<h3>>UPDATE => ALTERAR</h3>',
        '<h4> existe algumas formas, vamos ver algumas delas:</h4>',
        
        '<h4>Atualizando o documento inteiro </h4>',
        '<ul>',
          '<li>db.nomeDaColeção.uppdate({group: "B", name: "Maria", grade: 7.0)</li>',
        '</ul>',

        '<h4>Atualizando o valor de uma coluna especifica </h4>',
        '<ul>',
          '<li>db.nomeDaColeção.update({group: "A"}, {$ set: {grade: 9.8}})</li>',
        '</ul>',

        '<h4>Criar uma nova coluna no document já existene </h4>',
        '<ul>',
          '<li>db.nomeDaColeção.update ({group: "A"}, {$ set: {genius: true}})</li>',
        '</ul>',

        '<h3>>DELETE => REMOVER</h3>',
        '<h4> existe algumas formas, vamos ver algumas delas:</h4>',
        
        '<h4>REMOVER APENAS UM DOCUMENTO </h4>',
        '<ul>',
          '<li>db.nomeDaColeção.remove ({group: "A"}) </li>',
        '</ul>',

        '<h4>REMOVER TODOS OS DOCUMENTOS </h4>',
        '<ul>',
          '<li>db.nomeDaColeção.remove ({}) </li>',
        '</ul>'
    );
});

aula2.mouseover(function(){
    aula2.addClass("itemMouseOver");
});
aula2.mouseout(function(){
    aula2.toggleClass("itemMouseOver");
});


aula3.click(function(){
    contents.empty();
    contents.append('<h2 class="code-color">Aula 3 - Operadores </h2>');
    contents.append(
        '<h3>Operadores</h3>',
        '<h4> O mongo é baseado em JavaScrip, vamos falar dos operadores:</h4>', 
        '<h4>Operadores numéricos: </h4>',
        '<ul>',
          '<li>$gt: maior do que (>)</li>',
          '<li>$get: igual e maior que (= ou >)</li>',
          '<li>$lt: menor do que (<)</li>',
          '<li>$ne: diferente (<> ou !=)</li>',
          '<li>$mod: modulo, resto da divisão</li>',
        '</ul>',


        '<h4>Operadores lógicos: </h4>',
        '<ul>',
          '<li>$and – "E"</li>',
          '<li>$or –  "OU"</li>',
          '<li>$not – NÂO</li>',
          '</ul>',

          '<h4>Operadores de grupos: </h4>',
        '<ul>',
          '<li>$in = todos os documentos cujo atributo possui um dos valores especificados (no SQL operador IN)</li>',
          '<li>$nin = todos os documentos cujo atributo não possui um dos valores especificados (no SQL operador NOT IN)</li>',
          '<li>$all: encontra todos os elemenos de um array</li>',
          '<li>$size: enconta qualquer array que tiver o número de elementos especificado</li>',
          '<li>$exists: verifica a existência do atributo dentro do campo dentro do documento</li>',
        '</ul>',

        '<h4>Operadores de alteração: </h4>',
        '<ul>',
          '<li>$inc = incrementa os valores ao elemento.</li>',
          '<li>$set = o operador set é usado quando queremos evitar que a substituição inteira do document aconteça, ou seja, quando queremos acrescentar e / ou alterar somente alguns campos no document, sem apagar todos os outros.</li>',
          '<li>$unset = remove os campos especificados nele.</li>',
          '<li>$upsert: cria um novo document, caso não exista nenhum com as características passadas</li>',
          '<li>$push: o comando push acrescenta o item ao final do array.</li>',
          '<li>$pushall: acrescenta mais de um elemento ao array.</li>',
          '<li>$pop: remove itens por índice (posição) do array.</li>',
          '<li>$pull: remove item por valor.</li>',
          '<li>$pullAll: remove mais de um item no array, possui a mesma sintaxe do pushAll.</li>',

        '</ul>',
    );
   
});
aula3.mouseover(function(){
    aula3.addClass("itemMouseOver");
});
aula3.mouseout(function(){
    aula3.toggleClass("itemMouseOver");
});


aula4.click(function(){
    contents.empty();
    contents.append('<h2 class="code-color">Aula 4 - Mongo</h2>');
    contents.append('<h3>Em breve...</h3>');
    // contents.append('<img src="img/thumb-grande.jpg" alt=""/>');
});

aula4.mouseover(function(){
    aula4.addClass("itemMouseOver");
});
aula4.mouseout(function(){
    aula4.toggleClass("itemMouseOver");
});


aula5.click(function(){
    contents.empty();
    contents.append('<h2 class="code-color">Aula 5 - Mongo</h2>');
    contents.append('<p>conteudo aula 5</p>');
    // contents.append('<img src="img/thumb-grande.jpg" alt=""/>');
});
aula5.mouseover(function(){
    aula5.addClass("itemMouseOver");
});
aula5.mouseout(function(){
    aula5.toggleClass("itemMouseOver");
});
