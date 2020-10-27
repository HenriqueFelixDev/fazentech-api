
exports.seed = function(knex) {
  return knex('products').del()
    .then(function () {
      return knex('products').insert([
        {
          id: 1, 
          category_id: 5, 
          name: 'Abacaxi pérola Unidade', 
          description: 'O Ananás ou abacaxi (Ananas comosus) é uma infrutescência tropical ' +
          'produzida pela planta de mesmo nome, caracterizada como uma planta monocotiledônea ' +
          'da família das bromeliáceas da subfamília Bromelioideae. É um símbolo das regiões ' +
          'tropicais e subtropicais. Os abacaxizeiros cultivados pertencem à espécie Ananas comosus, ' +
          'que compreende muitas variedades frutíferas. Há também várias espécies selvagens, pertencentes ' +
          'ao mesmo gênero. O fruto, quando maduro, tem o sabor bastante ácido e, muitas vezes, adocicado. ', 
          price: 7.99
        },
        {
          id: 2, 
          category_id: 5, 
          name: 'Banana Prata Kg', 
          description: 'Vulgarmente, inclusive para efeitos comerciais, o termo "banana" ' +
          'refere-se às frutas de polpa macia e doce que podem ser consumidas cruas. Contudo, ' +
          'existem variedades de cultivo, de polpa mais rija e de casca mais firme e verde, ' +
          'geralmente designadas por plátanos, em língua espanhola, banana-pão ou banana-da-terra, ' +
          'em português, ou plantains, em inglês, que são consumidas cozinhadas (assadas, cozidas ou fritas), ' +
          'constituindo o alimento base de muitas populações de regiões tropicais. A maioria das bananas ' +
          'para exportação é do primeiro tipo, ainda que apenas 10 a 15 por cento da produção mundial seja ' +
          'para exportação, sendo os Estados Unidos e a União Europeia as principais potências importadoras.', 
          price: 10.49
        },
        {
          id: 3, 
          category_id: 5, 
          name: 'Laranja da Terra Kg', 
          description: 'Frequentemente, esta fruta é descascada e comida ao natural, ou espremida para ' +
          'obter sumo. As pevides (pequenos caroços duros) são habitualmente removidas, embora possam ser ' +
          'usadas em algumas receitas. A casca exterior pode ser usada também em diversos pratos culinários, ' +
          'como ornamento, ou mesmo para dar algum sabor. O albedo, a camada branca interior da casca, de ' +
          'dimensão variável, raramente é utilizado, apesar de ter um sabor levemente doce. É recomendada para ' +
          '"quebrar" o sabor ácido da laranja na boca, após terminar de consumir o fruto.', 
          price: 5.99
        },
        {
          id: 4, 
          category_id: 5, 
          name: 'Maçã Gala Kg', 
          description: 'A maçã Gala, a mais consumida no Brasil, é reconhecida no mercado interno e em ' +
          'vários outros países pelo sabor doce, crocância e leve toque de acidez. Sua forma redonda com ' +
          'base cônica e cor vermelha rajada com o fundo amarelo facilitam a sua identificação. A maçã é o ' +
          'pseudofruto pomáceo da macieira (Malus domestica), árvore da família Rosaceae. É um dos pseudofrutos ' +
          'de árvore mais cultivados, e o mais conhecido dos muitos membros do género Malus que são usados ' +
          '​​pelos seres humanos. As maçãs crescem em pequenas árvores, de folha caducifólia que florescem na ' +
          'Primavera e produzem fruto no Outono. A árvore é originária da Ásia Ocidental, onde o seu ancestral ' +
          'selvagem, Malus sieversii, ainda é encontrado atualmente', 
          price: 5.68
        },
        {
          id: 5, 
          category_id: 5, 
          name: 'Maçã Verde Kg', 
          description: 'A maçã verde é lotada de vitaminas e possui um sabor levemente azedo. Ela é uma versão mais ' +
          '"jovem" da maçã vermelha, também repleta de boas propriedades. É um dos pseudofrutos ' +
          'de árvore mais cultivados, e o mais conhecido dos muitos membros do género Malus que são usados ' +
          '​​pelos seres humanos. As maçãs crescem em pequenas árvores, de folha caducifólia que florescem na ' +
          'Primavera e produzem fruto no Outono. A árvore é originária da Ásia Ocidental, onde o seu ancestral ' +
          'selvagem, Malus sieversii, ainda é encontrado atualmente',
          price: 5.79
        },
        {
          id: 6, 
          category_id: 5, 
          name: 'Melancia Madeira Kg', 
          description: 'A planta é rasteira e anual com folhas triangulares e trilobuladas e flores pequenas ' +
          'e amareladas, gerando um fruto arredondado ou alongado, de polpa vermelha, suculenta e doce, com alto ' +
          'teor de água (cerca de 92%) e diâmetro variável entre 25 e 140 cm. A casca é verde e lustrosa, ' +
          'apresentando estrias escuras. A maioria das variedades tem polpa vermelha, mas há também variedades ' +
          'verdes, laranjas, amarelas e brancas e espécies terrestres. As sementes variam em cor (preto, castanho, ' +
          'vermelho, verde, branco), forma e tamanho; as características podem ser usadas para identificar as ' +
          'variedades.', 
          price: 2.80
        },
        {
          id: 7, 
          category_id: 5, 
          name: 'Morango Albion 300g', 
          description: 'O morango "Albion" arbustos médios poderosos com folhas verde-escuras, que têm um brilho ' +
          'pronunciado e oleoso. "Albion" tem um traço característico - hastes fortes, que não mentem, e as flores ' +
          'estão localizadas no topo das folhas. Morango (Fragaria) é considerado, na linguagem vulgar, como o fruto ' +
          'vermelho do morangueiro, da família das rosáceas. No entanto, em termos científicos não se pode considerar ' +
          'um fruto já que é constituído pelo receptáculo da flor original (composta), em volta do qual se dispõem os ' +
          'frutos (as sementes são visíveis sob a forma de grainhas)', 
          price: 5.99
        },
      ]).then(function () {
        return knex('product_images').del()
          .then(function() {
            return knex('product_images').insert([
                {
                  id: 1, 
                  product_id: 1, 
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F1a191c14-1473-11eb-adc1-0242ac120002.jpg?alt=media&token=9835a657-0226-4a81-bc6c-42e64e892567'
                },
                {
                  id: 2, 
                  product_id: 1, 
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F2837f70c-1473-11eb-adc1-0242ac120002.jpg?alt=media&token=99427c74-5546-4ebe-a2e2-e5173716a2f7'
                },
                {
                  id: 3, 
                  product_id: 2, 
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F2e42e31e-1473-11eb-adc1-0242ac120002.jpg?alt=media&token=4844e428-7049-41d3-b387-bcc91a5b362e'
                },
                {
                  id: 4, 
                  product_id: 2, 
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F3527ab7e-1473-11eb-adc1-0242ac120002.jpg?alt=media&token=9d2b84fc-87f5-4b52-939c-8e0a4f0f8eae'
                },
                {
                  id: 5, 
                  product_id: 3, 
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F3e4f3ba4-1473-11eb-adc1-0242ac120002.jpg?alt=media&token=16392395-57db-4efd-9b91-94d724ccb16d'
                },
                {
                  id: 6, 
                  product_id: 3, 
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F41ebc976-1473-11eb-adc1-0242ac120002.jpg?alt=media&token=326f1cce-a97a-42bf-95a6-3a95dba5617e'
                },
                {
                  id: 7, 
                  product_id: 4, 
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F464b62f6-1473-11eb-adc1-0242ac120002.jpg?alt=media&token=f43e78e7-fe4c-4105-b30d-20c72bf43f67'
                },
                {
                  id: 8, 
                  product_id: 4, 
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F4e348010-1473-11eb-adc1-0242ac120002.jpg?alt=media&token=43892806-617b-4f94-a1ed-239d7c3d99f4'
                },
                {
                  id: 9, 
                  product_id: 5, 
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F54fa995c-1473-11eb-adc1-0242ac120002.jpg?alt=media&token=975f4819-eadf-4f14-b7a5-f8f015d0c845'
                },
                {
                  id: 10,
                  product_id: 5,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5beccd5c-1473-11eb-adc1-0242ac120002.jpg?alt=media&token=ada840d6-1700-41a6-8313-5a8532241af7'
                },
                {
                  id: 11,
                  product_id: 6,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F60fb5b88-1473-11eb-adc1-0242ac120002.jpg?alt=media&token=fa56760f-1c27-454f-8ff6-ecc1b846cb69'
                },
                {
                  id: 12,
                  product_id: 6,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F64f22e60-1473-11eb-adc1-0242ac120002.jpg?alt=media&token=57e9e1e2-17c4-4237-a172-0589317af660'
                },
                {
                  id: 13,
                  product_id: 6,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F68ddac20-1473-11eb-adc1-0242ac120002.jpg?alt=media&token=23bbad3b-98db-48d3-8d80-eff96c65723a'
                },
                {
                  id: 14,
                  product_id: 7,
                    image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F6d0fa852-1473-11eb-adc1-0242ac120002.jpg?alt=media&token=f629c32f-d38c-434b-931b-a00f73eacdc9'
                },
                {
                  id: 15,
                  product_id: 7,
                    image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F740ce61a-1473-11eb-adc1-0242ac120002.jpg?alt=media&token=1b904c4d-224f-4e21-9a99-7a2167adedec'
                },
              ]);
            });
          });
    });
};
