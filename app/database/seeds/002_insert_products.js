
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
        {
          id: 8, 
          category_id: 5, 
          name: 'Cereja 300g', 
          description: 'Uma cereja é o fruto de muitas plantas do gênero Prunus. As cerejas do comércio geralmente' +
          'são obtidas de cultivos de um número limitado de espécies, como a cerejeira-brava (Prunus avium) e a ' +
          'cereja-ácida (Prunus cerasus, ou Ginja). A Ginja, de polpa bem mais firme, é usada na fabricação de ' +
          'conservas, compotas e bebidas licorosas, como o kirsch, ginjinha e o marasquino. As cerejas contém ' +
          'proteínas, cálcio, ferro e vitaminas A, B, e C. Quando consumida ao natural, tem propriedades refrescantes, ' +
          'diuréticas e laxativas. A cereja tem altas concentrações de antocianina, e é considerada um anti-inflamatório ' +
          'natural, prevenindo inflamações e acalmando dores no corpo. As sementes encontradas no interior da fruta têm ' +
          'propriedades vermífugas e diuréticas.\n As cerejas são frutos pequenos e arredondados que podem apresentar ' +
          'várias cores, sendo o vermelho a mais comum entre as variedades comestíveis. A cereja-doce, de polpa macia ' +
          'e suculenta, é servida ao natural, como sobremesa. Como a cereja é muito rica em tanino, consumida em ' +
          'excesso pode provocar problemas estomacais, não sendo aconselhável consumir mais de 200 ou 300 gramas da ' +
          'fruta por dia. ', 
          price: 14.99
        },
        {
          id: 9, 
          category_id: 5, 
          name: 'Coco verde un', 
          description: 'O coqueiro (Cocos nucifera), é um membro da família Arecaceae (família das palmeiras). ' +
          'É a única espécie classificada no gênero Cocos.\nÉ uma planta que pode crescer até 30 metros de altura, ' +
          'com folhas pinadas de 4–6 m de comprimento, com pinas de 60–90 cm. As folhas caem completamente, ' +
          'deixando o tronco liso.\nO coqueiro tem origem no Sudeste da Ásia. No século XVI, a planta foi ' +
          'introduzida no Brasil por Duarte Coelho, primeiro capitão-donatário da Capitania de Pernambuco, ' +
          'disseminando-se por muitas regiões, principalmente pelo litoral nordestino.\nOs cocos espalharam-se ' +
          'através dos trópicos, em particular ao longo da linha costeira tropical.\nComo o seu fruto é pouco ' +
          'denso e flutua, a planta é espalhada prontamente pelas correntes marinhas que podem carregar os cocos ' +
          'a distâncias significativas. A palmeira do coco prospera em solos arenosos e salinos nas áreas com luz ' +
          'solar abundante e pancadas de chuva regulares (75–100 cm anualmente), o que torna a colonização da ' +
          'costa relativamente fácil.', 
          price: 3.80
        },
        {
          id: 10, 
          category_id: 5, 
          name: 'Cacho de uvas sem semente 500g', 
          description: 'A videira, vinha ou parreira é uma trepadeira da família das vitáceas, com tronco retorcido, ' +
          'ramos flexíveis, folhas grandes e repartidas em cinco lóbulos pontiagudos, flores esverdeadas em ramos, e cujo ' +
          'fruto é a uva. Originária da Ásia, a videira é cultivada em todas as regiões de clima temperado.\nO cultivo ' +
          'da uva começou cerca de 6.000 a 8.000 anos atrás, no Oriente Médio. A levedura, um dos primeiros ' +
          'microorganismos conhecidos pelo homem, ocorre naturalmente na casca das uvas, levando a produção de bebidas ' +
          'alcoólicas, como o vinho. Os primeiros vestígios de vinho tinto são vistos na Armênia antiga, onde foi ' +
          'encontrada a adega mais antiga do mundo, datando de cerca de 4.000 a.C.. Por volta do Século IX, a cidade ' +
          'de Xiraz era conhecido por produzir um dos melhores vinhos do Oriente Médio.', 
          price: 8.99
        },
        {
          id: 11, 
          category_id: 1, 
          name: 'Creme de leite 200g', 
          description: 'A nata (português europeu ou brasileiro) ou creme de leite (português brasileiro) é a ' +
          'gordura do leite, um tipo de laticínio, muito utilizada em culinária e confeitaria e também como principal ' + 
          'ingrediente da manteiga.\nNo leite fresco em repouso, a porção gorda, menos densa que a água, forma uma camada ' +
          'de nata à superfície, que pode ser removida para uso posterior; esta nata tem apenas 30% da gordura do leite. ' +
          'Nos países industrializados, no entanto, a nata é extraída do leite por centrifugação e depois tratada ' +
          'termicamente para se conservar mais tempo. As formas de tratamento térmico incluem a pasteurização, a ' +
          'esterilização e o UHT. ', 
          price: 2.59
        },
        {
          id: 12, 
          category_id: 1, 
          name: 'Leite 1L', 
          description: 'Leite é uma secreção nutritiva de cor esbranquiçada e opaca produzida pelas glândulas ' +
          'mamárias das fêmeas dos mamíferos (incluindo os monotremados).\nO líquido é produzido pelas células ' +
          'secretoras das glândulas mamárias ou mamas. A secreção láctea de uma fêmea dias antes e depois do parto ' +
          'se chama colostro. Em grande parte das espécies, existem duas glândulas (ou dois conjuntos de glândulas), ' +
          'uma em cada mamilo (localizado na parte frontal superior entre os seres humanos, ou na parte ventral dos ' +
          'quadrúpedes).', 
          price: 3.89
        },
        {
          id: 13, 
          category_id: 1, 
          name: 'Manteiga 200g', 
          description: 'Manteiga é um produto feito do leite, batido até se transformar numa emulsão de água em ' +
          'gordura, que pode ser usada, por exemplo, sobre fatias de pão ou biscoitos, ou ainda para cozinhar. ' +
          'Manteiga é o nome dado de forma exclusiva ao alimento obtido do leite de vaca, se for de outro animal ' +
          'o nome correto é manteiga de mais o nome do animal de origem. É produzida onde há atividade pecuária, ' +
          'e as suas origens são antiquíssimas, datando seguramente da pré-história. \nA manteiga é composta por ' +
          'cerca de 83% de gordura, sendo o restante água e resíduos de lactose (o açúcar do leite) e de butirina, ' +
          'um tipo de gordura. O processo industrial de fabricação de manteiga pode manipular a cor dela com corantes ' +
          'como o urucu.', 
          price: 8.19
        },
        {
          id: 14, 
          category_id: 1, 
          name: 'Queijo mussarela 1KG', 
          description: 'A mozarela ou muçarela, do italiano mozzarella, é uma variedade de queijo de massa filada ' +
          'com origem na comuna (município) de Aversa, CE, na região italiana da Campânia.\nSua receita tradicional ' +
          'indica o uso exclusivo de leite de búfala, produzindo o queijo em formato de bolotas conservadas em soro, ' +
          'brancas e bem macias. Na Itália, apenas esse tipo de queijo é reconhecido oficialmente como mozzarella, ' +
          'recebendo o selo de certificação de origem. São produzidas, em média, 33 mil toneladas deste queijo por ano ' +
          'em território italiano.', 
          price: 35.99
        },
        {
          id: 15, 
          category_id: 1, 
          name: 'Queijo cheddar 280g', 
          description: 'O cheddar é uma variedade de queijo originalmente inglês. É alaranjado por corantes. De ' +
          'cor amarelada, apresenta consistência firme. Deve ter um período de amadurecimento (cura) de pelo menos ' +
          'doze a dezoito meses. Muitas das receitas que levam cheddar costumam empregá-lo fundido, na forma de ' +
          'creme, semelhante ao catupiry. Esta forma, muito comum no Brasil, é derivada do Cheddar Americano, que ' +
          'é um queijo processado, muito diferente da versão original inglesa, que é um queijo natural.', 
          price: 19.99
        },
        {
          id: 16, 
          category_id: 1, 
          name: 'Queijo parmesão 200g', 
          description: 'O parmesão é um tipo de queijo italiano, com denominação de origem controlada conhecida ' +
          'como Parmigiano-Reggiano. Devido a sua popularidade na culinária, este tipo de queijo foi copiado e é ' +
          'produzido em regiões com presença de colônias italianas como o Brasil e os Estados Unidos, o que tem ' +
          'gerado disputas legais quanto ao uso da marca.', 
          price: 19.24
        },
        {
          id: 17, 
          category_id: 1, 
          name: 'Queijo prato 300g', 
          description: 'Queijo Prato, ou queijo lanche, é um tipo de queijo macio de massa prensada e textura ' +
          'semelhante à do queijo Dinamarquês Danbo. Tem coloração amarela e sabor suave.\n O queijo Prato surgiu ' +
          'em 1920 da tentativa de colonos dinamarqueses estabelecidos originalmente em Valença, no Rio de Janeiro, ' +
          'e posteriormente em Cruzília (família Sorensen), no Sul de Minas Gerais, em produzir o queijo Danbo. Como ' +
          'esse queijo tinha um formato cilíndrico baixo, semelhante a um prato, fiscais do Ministério da Agricultura, ' +
          'que nunca tinham ouvido falar desse tipo de queijo, chamaram-no de "prato".', 
          price: 12.89
        },
        {
          id: 18, 
          category_id: 1, 
          name: 'Queijo coalho 400g', 
          description: 'O queijo coalho ou queijo de coalho é um tipo de queijo, produzido por fermentação e ' +
          'coagulação, tradicionalmente fabricado e amplamente consumido na região Nordeste do Brasil.\nO queijo ' +
          'de coalho é um queijo de média a alta umidade, de massa semi-cozida ou cozida e apresentando um teor de ' +
          'gordura nos sólidos totais variável entre 35,0% e 60,0%. Uma de suas características é a resistência ' +
          'ao calor, o que faz com que este possa ser assado e tostado. Consiste de um queijo de massa branca, ' +
          'pouco salgado e levemente ácido, casca quase uniforme com a massa interna, dependendo do tempo de ' +
          'maturação.', 
          price: 18.59
        },
        {
          id: 19, 
          category_id: 1, 
          name: 'Requeijão cremoso 200g', 
          description: 'No Brasil, o seu surgimento deu-se como a utilização de um subproduto do leite desnatado ' +
          'como condimento para alimentos, que era descartado nas regiões produtoras de nata para a fabricação de ' +
          'manteiga.\nO requeijão cremoso é a variedade mais difundida atualmente, devido a produção industrial. ' +
          'É um laticínio pastoso, de cor branca, feito de leite desnatado e creme de leite fresco. Foi criado por ' +
          'Moacyr de Carvalho Dias em Poços de Caldas, no sul de Minas Gerais. É normalmente comercializado em ' +
          'copos de vidro ou plástico.', 
          price: 5.49
        },
        {
          id: 20, 
          category_id: 1, 
          name: 'Iogurte 1kg', 
          description: 'O iogurte (do turco yoğurt, pronúncia /jɔ.ˈurt/, do adjetivo yoğun, "denso" ou "tornar ' +
          'denso") é uma forma de leite em que o açúcar (a lactose) foi transformado em ácido láctico, por ' +
          'fermentação bacteriana. É um líquido espesso, branco e levemente ácido, muito nutritivo, por ' +
          'essa razão, muitas vezes é servido e mesmo vendido misturado com frutas, chocolate ou outro tipo de ' +
          'adoçante.', 
          price: 7.19
        },
        {
          id: 21, 
          category_id: 2, 
          name: 'Cachaça 700ml', 
          description: 'A cachaça é uma bebida de grande importância cultural, social e econômica para o Brasil, ' +
          'e está relacionada diretamente ao início da colonização portuguesa do país e à atividade açucareira, que, ' +
          'por ser baseada na mesma matéria-prima da cachaça, possibilitou a implantação dos estabelecimentos ' +
          'cachaceiros.\nEngenho de açúcar na Ilha de Itamaracá em Pernambuco, por Frans Post.\nA primeira plantação ' +
          'de cana-de-açúcar de que se tem notícia no Brasil foi feita em 1504 por Fernão de Noronha na ilha que leva ' +
          'o seu nome. E há referências de que o primeiro engenho de açúcar foi construído em 1516, na Feitoria de ' +
          'Itamaracá, criada pelo rei Dom Manuel I de Portugal no litoral do atual estado de Pernambuco e confiada ' +
          'ao administrador colonial Pero Capico — primeiro "Governador das Partes do Brasil". Na década de 1530, os ' +
          'primeiros donatários portugueses iniciaram empreendimentos nas terras da América Portuguesa, especialmente ' +
          'nas capitanias de Pernambuco e São Vicente, implementando engenhos de açúcar. Assim, surgem, na nova colônia ' +
          'portuguesa, os primeiros núcleos de povoamento e agricultura. Apesar de não haver um registro preciso sobre o ' +
          'verdadeiro local onde a primeira destilação da cachaça tenha sido iniciada, pode-se afirmar que ela se deu no ' +
          'território brasileiro, em algum engenho do litoral, entre os anos de 1516 e 1532, sendo, portanto, o primeiro ' +
          'destilado da América Latina.', 
          price: 16.90
        },
        {
          id: 22, 
          category_id: 2, 
          name: 'Vinho suave 1L', 
          description: 'A constituição química das uvas permite que estas fermentem sem que lhes sejam adicionados ' +
          'açúcares, ácidos, enzimas ou outros nutrientes. Apesar de existirem outros frutos como a maçã ou algumas ' +
          'bagas que também possam ser fermentados, os "vinhos" resultantes são geralmente designados em função do fruto ' +
          'a partir do qual são obtidos (por exemplo vinho-de-maçã) e são genericamente conhecidos como vinhos de frutas. ' +
          'O termo vinho (ou seus equivalentes em outras línguas) é definido por lei em muitos países. A fermentação das ' +
          'uvas é feita por vários tipos de leveduras que consomem os açúcares presentes nas uvas transformando-os em ' +
          'álcool. Dependendo do tipo de vinho, podem ser utilizadas grandes variedades de uvas e de leveduras', 
          price: 18.27
        },
        {
          id: 23, 
          category_id: 2, 
          name: 'Suco de laranja 1L', 
          description: 'O suco de laranja está entre os mais apreciados e consumidos, sendo uma boa fonte de ' +
          'vitamina C e outros nutrientes. Seu comércio e produção envolvem grandes movimentações financeiras.' +
          '\nO Brasil era no século XX o maior produtor e exportador mundial do suco de laranja concentrado, ' +
          'sendo que as principais indústrias do setor no Brasil, são: a Cutrale, a Citrosuco, a Citrovita e a ' +
          'Louis Dreyfus. ', 
          price: 11.99
        },
        {
          id: 24, 
          category_id: 2, 
          name: 'Limonada 1L', 
          description: 'A limonada pode ser qualquer uma de uma variedade de bebidas adoçadas ou sem açúcar ' +
          'encontradas em todo o mundo, mas que são tradicionalmente todas caracterizadas por um sabor a limão.' +
          '\nA maioria das variedades de limonada pode ser separada em dois tipos distintos: turva e clara. Cada um ' +
          'é conhecido simplesmente como "limonada" (ou um cognato) em países onde é dominante. A limonada turva, ' +
          'geralmente encontrada na América do Norte e no sul da Ásia, é tradicionalmente uma bebida caseira que usa ' +
          'suco de limão, água e adoçante, como açúcar de cana ou mel. No Reino Unido e na Austrália, ' +
          'a limonada clara, que normalmente também é carbonatada, domina.', 
          price: 6.99
        },
        {
          id: 25, 
          category_id: 2, 
          name: 'Caipirinha limão 1L', 
          description: 'A caipirinha é uma bebida alcoólica brasileira, ou um coquetel de origem paulista, ' +
          'feita com cachaça, limão, açúcar e gelo. Variações incluem a caipiroska - com vodka ao invés de ' +
          'cachaça - e a caipiríssima - com rum.\nA bebida é servida em um copo para caipirinha, podendo ser ' +
          'acompanhado de um pequeno canudo ou palitos de madeira. Tradicionalmente, a caipirinha é feita no copo ' +
          'em que é servida. Apesar disso, é comum o uso de coqueteleira para a mistura dos ingredientes.', 
          price: 27.65
        },
        {
          id: 26, 
          category_id: 2, 
          name: 'Cachaça barril 3L', 
          description: 'Na produção colonial de açúcar, "cachaça" era o nome dado à primeira espuma que subia ' +
          'à superfície do caldo de cana que estava sendo fervido. Ela era fornecida aos animais ou descartada. ' +
          'A segunda espuma era consumida pelos escravos, principalmente depois que fermentasse e também passou ' +
          'a ser chamada cachaça. Posteriormente, com a destilação da espuma e do melaço fermentados e a produção ' +
          'de aguardente de baixa qualidade, esta passou a ser também denominada de cachaça e era fornecida a ' +
          'escravos ou adquirida por pessoas de baixa renda.', 
          price: 119.99
        },
        {
          id: 27, 
          category_id: 2, 
          name: 'Chá mate 1L', 
          description: 'O chá-mate (mate cocido, em espanhol) é uma infusão típica das gastronomias do Cone Sul ' +
          'da América do Sul. É preparado colocando-se erva-mate tostada em infusão com água quente, ou fervendo ' +
          'a erva-mate tostada em água. Coa-se e serve-se em xícaras. Pode-se, também, esperar esfriar e servi-lo ' +
          'gelado.\nÉ uma bebida de sabor amargo, similar ao chimarrão, porém mais suave, com as mesmas propriedades ' +
          'estimulantes e nutricionais deste. O chá-mate é comercializado já pronto, em latas ou garrafas; sob a forma ' +
          'da erva-mate tostada, em pacotes ou saquinhos, como o chá comum; ou em forma solúvel, em pó ou extrato. Pode ' +
          'ser adoçado com açúcar ou outro edulcorante e consumido com leite ou suco de limão. ', 
          price: 7.99
        },
        {
          id: 28, 
          category_id: 3, 
          name: 'Aveia em grãos 1kg', 
          description: 'A aveia tem numerosos usos na alimentação, mais comumente, eles são enrolados ou ' +
          'esmagados em flocos de aveia, ou moído em farinha fina de aveia. Farinha de aveia é principalmente ' +
          'comido como papas de aveia, mas também podem ser utilizados numa variedade de produtos de panificação, ' +
          'tais como bolos, biscoitos e pães de aveia. A aveia é também um ingrediente em muitos cereais frios, ' +
          'em particular, muesli e granola. A aveia também podem ser consumidos crus, e os cookies com aveias ' +
          'estão se tornando populares.', 
          price: 5.99
        },
        {
          id: 29, 
          category_id: 3, 
          name: 'Milho verde 200g', 
          description: 'Os grãos são do tamanho de ervilhas, e estão dispostos em fileiras regulares presas ' +
          'no sabugo, que formam a espiga. Eles têm dimensões, peso e textura variáveis. Cada espiga contém de ' +
          'duzentos a quatrocentos grãos. Dependendo da espécie, os grãos têm cores variadas, podendo ser ' +
          'amarelos, brancos, vermelhos, pretos, azuis ou marrons. O núcleo da semente tem um pericarpo que é ' +
          'utilizado como revestimento. ', 
          price: 3.60
        },
        {
          id: 30, 
          category_id: 3, 
          name: 'Espiga de milho 700g', 
          description: 'O milho (Zea mays) é um conhecido cereal cultivado em grande parte do mundo. O milho ' +
          'é extensivamente utilizado como alimento humano ou para ração animal, devido às suas qualidades ' +
          'nutricionais. Todas as evidências científicas levam a crer que seja uma planta de origem mexicana, ' +
          'já que a sua domesticação começou de 7.500 a 12.000 anos atrás na área central do México.', 
          price: 4.99
        },
        {
          id: 31, 
          category_id: 3, 
          name: 'Soja em grãos 1kg', 
          description: 'Além destes nutrientes, a soja contém a isoflavona, também chamada de fitoestrógeno, ' +
          'que atua na prevenção de doenças crônico-degenerativas como o câncer de mama, de cólon de útero e de ' +
          'próstata. Sua estrutura química é semelhante ao estrógeno (hormônio feminino) e, por isso, é uma ' +
          'substância capaz de aliviar os efeitos da menopausa e da tensão pré-menstrual.', 
          price: 7.05
        },
        {
          id: 32, 
          category_id: 3, 
          name: 'Arroz 1kg', 
          description: 'Para poder ser cultivado com sucesso, o arroz necessita de água em abundância, ' +
          'para manter a temperatura ambiente dentro de intervalos adequados, e, nos sistemas tradicionais, ' +
          'de mão-de-obra intensiva. Desenvolve-se bem mesmo em terrenos muito inclinados e é costume, nos ' +
          'países do sudeste asiático, encontrarem-se socalcos onde é cultivado. Em qualquer dos casos, a água ' +
          'mantém-se em constante movimento, embora circule a velocidade muito reduzida. ', 
          price: 3.15
        },
        {
          id: 33, 
          category_id: 3, 
          name: 'Arroz 5kg', 
          description: 'O arroz é uma planta da família das gramíneas que alimenta mais da metade da população ' +
          'humana do mundo. É a terceira maior cultura cerealífera do mundo, apenas ultrapassada pelas de milho e ' +
          'trigo. É rico em hidratos de carbono. ', 
          price: 23.49
        },
        {
          id: 34, 
          category_id: 4, 
          name: 'Brócolis bandeja 350g', 
          description: 'Os brócolis são vegetais da família Brassicaceae, uma das formas cultivadas de couve, ' +
          'tal como a couve-flor, o repolho, couve-de-bruxelas, couve-nabo entre outras.\nAs folhas, as flores e ' +
          'os pedúnculos florais são comestíveis. O cruzamento dos brócolos ou brócolis com o kai lan asiático gera ' +
          'o brocollini, que possui talos comestíveis.\nOriginários da Europa, também são usados em medicina graças ' +
          'ao seu elevado teor de cálcio que é - dependendo da variedade e da forma de preparo em média 47 mg por ' +
          'cada 100 gramas de flores e 51 miligramas em cada 100 gramas de folhas, o que representa cerca de cinco ' +
          'vezes a dose existente no leite. Por isso, este vegetal é um bom construtor e formador dos ossos e dos dentes.', 
          price: 7.99
        },
        {
          id: 35, 
          category_id: 4, 
          name: 'Abóbora moranga 1kg', 
          description: 'As abóboras são cultivadas em todo o mundo por várias razões, desde propósitos agrícolas ' +
          '(como ração animal) até vendas comerciais e ornamentais. Dos sete continentes, apenas a Antártica é ' +
          'incapaz de produzir abóboras. A abóbora tradicional americana usada para o Halloween é a variedade do ' +
          'campo de Connecticut.\nEm Portugal, a abóbora tem vindo a conquistar hábitos alimentares mais amplos, ' +
          'após a ideia antiga de se tratar de uma cultura secundária mais destinada à alimentação animal. É agora ' +
          'utilizada sobretudo na confecção de doces e de sopas.', 
          price: 2.68
        },
        {
          id: 36, 
          category_id: 4, 
          name: 'Alface un', 
          description: 'O valor energético da alface é baixo, pois seu conteúdo em água representa 95% do seu peso.\n' +
          'A alface contém ferro, mineral com importante papel no transporte de oxigênio no organismo. Contém fibras, ' +
          'que auxiliam na digestão e no bom funcionamento do intestino, além de apresentar pequenos teores de minerais ' +
          'como cálcio e fósforo. Possui alto teor de compostos bioativos como os fenólicos e flavonóides', 
          price: 2.39
        },
        {
          id: 37, 
          category_id: 4, 
          name: 'Couve-flor un', 
          description: 'A couve-flor é uma hortaliça do tipo inflorescência (conjunto de flores) que pertence à ' +
          'espécie Brassica oleracea (couves), assim como o repolho, os brócolos, o romanesco, etc., cuja textura ' +
          'delicada e tenra exige cuidado e atenção na sua preparação.\nA couve-flor é pobre em gorduras, ' +
          'carboidratos, sódio e proteínas. Os nutrientes que se destacam são: provitamina A, vitaminas B, ' +
          'C (a que se destaca) e E. É muito rica em potássio, cálcio, magnésio, fósforo, ferro e oligoelementos ' +
          '(cromo, zinco, manganês, cobre e selênio). Essa variedade de nutrientes beneficia na prevenção e no ' +
          'tratamento de muitas enfermidades como: afecções digestivas, cardiovasculares, renais, etc.', 
          price: 6.99
        },
        {
          id: 38, 
          category_id: 4, 
          name: 'Pepino bandeja 600g', 
          description: 'O pepino é o fruto do pepineiro (Cucumis sativus), que se come geralmente em forma de ' +
          'salada. O pepino é um diurético natural e de grande ajuda na dissolução de cálculos renais. Ele é rico ' +
          'em potássio, que proporciona flexibilidade aos músculos e dá elasticidade às células que compõem a pele. ' +
          'Isso resulta em rejuvenescimento da epiderme, especialmente a do rosto. ', 
          price: 2.49
        },
        {
          id: 39, 
          category_id: 4, 
          name: 'Cenoura 1kg', 
          description: 'As cenouras são grandes fontes de fibra dietética, antioxidantes, minerais e β-caroteno. ' +
          'Este último, responsável pela coloração alaranjada característica do vegetal, é uma provitamina A ' +
          '(substância que dá origem à vitamina A dentro de um organismo vivo). Ele ajuda o desempenho dos ' +
          'receptores da retina, melhorando a visão. Também ajuda a manter o bom estado da pele e das mucosas. ' +
          'É um antioxidante lipossolúvel que neutraliza os radicais livres, combinando-se diretamente com eles, ' +
          'o que aumenta a eficácia do sistema imunitário.', 
          price: 2.99
        },
        {
          id: 40, 
          category_id: 4, 
          name: 'Mandioca 1kg', 
          description: 'A mandioca é uma espécie de planta tuberosa da família das Euphorbiaceae. O nome dado ' +
          'ao caule do pé de mandioca é maniva, o qual, cortado em pedaços, é usado no plantio. Trata-se de um ' +
          'arbusto que teria tido sua origem mais remota no oeste do Brasil (sudoeste da Amazônia) e que, antes ' +
          'da chegada dos europeus à América, já estaria disseminado, como cultivo alimentar, até a Mesoamérica ' +
          '(Guatemala, México).\nÉ a terceira maior fonte de carboidratos nos trópicos, depois de arroz e milho, ' +
          'e um dos principais alimentos básicos no mundo em desenvolvimento, existindo na dieta básica de mais de ' +
          'meio bilhão de pessoas. Espalhada para diversas partes do mundo, tem hoje a Nigéria como seu maior produtor.', 
          price: 3.29
        },
        {
          id: 41, 
          category_id: 4, 
          name: 'Tomate 1kg', 
          description: 'As espécies do tomate são originárias das Américas Central e do Sul; sua utilização como ' +
          'alimentos teve origem no México, espalhando-se por todo o mundo depois da colonização das Américas ' +
          'pelos europeus.\nSuas muitas variedades são agora amplamente cultivadas, às vezes em estufas em climas ' +
          'mais frios. As plantas crescem tipicamente entre 1-3 metros ( 3-10 pés) de altura e desenvolvendo hastes ' +
          'fracas que se estendem sobre o chão ou trepam pelas outras plantas. É uma planta perene no seu habitat ' +
          'nativo, embora seja muitas vezes cultivada em climas temperados como anual. Um tomate comum médio pesa ' +
          'cerca de 100 gramas', 
          price: 8.59
        },
        {
          id: 42, 
          category_id: 4, 
          name: 'Feijão carioca 1kg', 
          description: 'Feijão é um nome comum para uma grande variedade de sementes de plantas de alguns gêneros ' +
          'da família Fabaceae. Proporciona nutrientes essenciais como proteínas, ferro, cálcio, vitaminas ' +
          '(principalmente do complexo B), carboidratos e fibras.\nO feijão carioca e o feijão mais popular dos ' +
          'Estados Unidos e do noroeste do México, comumente ingerido inteiro com caldo ou em purê e refrito. ' +
          'Seja inteiro ou em purê, é o recheio comum para fazer burritos.', 
          price: 2.99
        },
        {
          id: 43, 
          category_id: 6, 
          name: 'Peito de frango 1kg', 
          description: 'Filé de peito de frango 1kg', 
          price: 9.99
        },
        {
          id: 44, 
          category_id: 6, 
          name: 'Asa de frango 500g', 
          description: 'Asa de frango com osso 500g', 
          price: 10.69
        },
        {
          id: 45, 
          category_id: 6, 
          name: 'Lombo suíno 1kg', 
          description: 'Lombo de porco 1kg. O lombo de porco é um corte de carne de um porco, criado a partir do tecido ao longo do lado dorsal da caixa torácica.', 
          price: 13.50
        },
        {
          id: 46, 
          category_id: 6, 
          name: 'Linguiça caipira 500g', 
          description: 'A linguiça é um enchido (embutido) em forma de salsicha, feito de carne de porco, de aves, ' +
          'de carneiro, de carne de bovinos e mesmo peixes ou frutos do mar, temperado com cebola, alho e páprica e ' +
          'outras especiarias. Pode ser consumida fresca após preparada ou sofrer processo de cura e conservação por ' +
          'meio de defumação.', 
          price: 9.95
        },
        {
          id: 47, 
          category_id: 6, 
          name: 'Picanha 1kg', 
          description: 'A Picanha é um tipo de corte de carne bovina tipicamente brasileira. A origem do nome ' +
          'Picanha advém do tratamento talhante Italiano, nomeadamente do corte Picatta . Esta vara, chamada ' +
          'picana (em espanhol), possuía um ferrão na ponta e servia para picar o gado na parte posterior da ' +
          'sua região lombar. Com o passar do tempo esta região do animal passou a ser chamada picana e ' +
          'posteriormente picanha', 
          price: 77.45
        },
        {
          id: 48, 
          category_id: 6, 
          name: 'Orelha de porco 1kg', 
          description: 'Orelha de porco 1kg', 
          price: 13.20
        },
        {
          id: 49, 
          category_id: 6, 
          name: 'Costela de porco 800g', 
          description: 'Costelas sobressalentes são uma variedade de costelas cortadas da parte inferior de um ' +
          'porco, especificamente da barriga e do esterno, atrás do ombro, e incluem 11 a 13 ossos longos. Há uma ' +
          'cobertura de carne por cima dos ossos e também entre eles.', 
          price: 35.99
        },
        {
          id: 50, 
          category_id: 6, 
          name: 'Coxa e sobrecoxa de frango 1kg', 
          description: 'Coxa e sobrecoxa de frango 1kg', 
          price: 6.99
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
                {
                  id: 16,
                  product_id: 8,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F2f339a52-1fa4-11eb-adc1-0242ac120002.jpg?alt=media&token=53a48c40-d6e6-4442-ac35-3655025136bb'
                },
                {
                  id: 17,
                  product_id: 8,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F2f33980e-1fa4-11eb-adc1-0242ac120002.jpg?alt=media&token=b19f8360-c4ff-4914-a13c-5dc9c31e43d6'
                },
                {
                  id: 18,
                  product_id: 9,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F2f339d18-1fa4-11eb-adc1-0242ac120002.jpg?alt=media&token=adb8eeff-023e-4379-8509-217dda2fd6cd'
                },
                {
                  id: 19,
                  product_id: 9,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F2f339df4-1fa4-11eb-adc1-0242ac120002.jpg?alt=media&token=e50a48c2-3afd-409a-b4a7-11e343054365'
                },
                {
                  id: 20,
                  product_id: 10,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F2f339ebc-1fa4-11eb-adc1-0242ac120002.jpg?alt=media&token=28f84a19-fa10-4b95-a78e-f9bcd7678a2a'
                },
                {
                  id: 21,
                  product_id: 10,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F2f339f7a-1fa4-11eb-adc1-0242ac120002.jpg?alt=media&token=24ac4430-ec4b-47d0-84b6-2a90a5d78e12'
                },
                {
                  id: 22,
                  product_id: 11,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c3c94-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=9d101f85-105a-4b2d-85c6-74937a359820'
                },
                {
                  id: 23,
                  product_id: 11,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c3b54-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=81744787-5ff6-445b-838b-1843f1ec3ccf'
                },
                {
                  id: 24,
                  product_id: 12,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c4004-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=eba906e2-6117-4c92-9dec-e0ee0bf30c2c'
                },
                {
                  id: 25,
                  product_id: 12,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c40ea-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=3fda9cab-0bed-44d4-92d6-421b8a5b31e3'
                },
                {
                  id: 26,
                  product_id: 13,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c43ec-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=27dfaaca-f138-4d63-adb3-7c3c86214823'
                },
                {
                  id: 27,
                  product_id: 13,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c4298-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=8ea2d199-241f-4e97-8083-88041501554d'
                },
                {
                  id: 28,
                  product_id: 14,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c44c8-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=5f4c358c-d1de-4675-98b3-c922e6af025f'
                },
                {
                  id: 29,
                  product_id: 14,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c45b8-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=919fef08-1169-451b-94ca-7900bdd5b2e6'
                },
                {
                  id: 30,
                  product_id: 15,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c482e-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=de32a815-df9f-462f-87a2-ad09303291ab'
                },
                {
                  id: 31,
                  product_id: 15,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c46e4-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=77df2732-d1aa-4036-adc3-be44ca22564e'
                },
                {
                  id: 32,
                  product_id: 16,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c4a40-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=105f4c36-39ba-49c1-bf46-e0705c07cdc9'
                },
                {
                  id: 33,
                  product_id: 16,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f0415c-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=b32c3233-eb19-427a-8e57-c18a5432eb60'
                },
                {
                  id: 34,
                  product_id: 17,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f043b4-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=de17530d-c50d-49b1-8c75-d67d5a80a8a8'
                },
                {
                  id: 35,
                  product_id: 18,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c493c-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=410f6de7-bef5-4c60-93b6-ec5b676bffc6'
                },
                {
                  id: 36,
                  product_id: 19,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f044ae-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=2d814d91-4512-458e-a681-ba94f3e08c48'
                },
                {
                  id: 37,
                  product_id: 20,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c3da2-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=42c2e878-b0a5-4229-8bd2-b44bfbd8c880'
                },
                {
                  id: 38,
                  product_id: 20,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c3ea6-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=f0b435ab-0089-46e1-836c-64797f6be2bd'
                },
                {
                  id: 39,
                  product_id: 21,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e9560c-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=a7ddffc3-dabc-49cc-96f7-04d8e27d6263'
                },
                {
                  id: 40,
                  product_id: 21,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e953b4-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=a02fed85-c856-4780-9275-669e2da757ca'
                },
                {
                  id: 41,
                  product_id: 22,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e9635e-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=c80b03b2-a2cc-4494-a8f8-5a5fa831ca3c'
                },
                {
                  id: 42,
                  product_id: 22,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e96282-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=617bd2a5-154a-4a0a-87c0-68e6bc6e894a'
                },
                {
                  id: 43,
                  product_id: 23,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e95f30-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=2c0e1239-1856-44ff-8293-4263ced86338'
                },
                {
                  id: 44,
                  product_id: 23,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e95fee-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=22d973bb-6365-4516-91a9-3b1029d61508'
                },
                {
                  id: 45,
                  product_id: 24,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e95e72-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=2de10937-056a-44aa-ac23-1ddf3ac63d5c'
                },
                {
                  id: 46,
                  product_id: 24,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e95db4-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=eb26a30f-3ab3-4ff5-bb81-d1b54fd938a9'
                },
                {
                  id: 47,
                  product_id: 25,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e958aa-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=4ed9fe51-d982-439c-a3e1-02c7456b2ad7'
                },
                {
                  id: 48,
                  product_id: 25,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e95b52-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=0a6fd4b0-eb9b-4ff4-bbee-09b02732d30d'
                },
                {
                  id: 49,
                  product_id: 26,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e957e2-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=502e33e4-564a-4b70-af18-b157881e5881'
                },
                {
                  id: 50,
                  product_id: 26,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e95710-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=74b5bbda-946d-4824-a25a-b4b25c57fca7'
                },
                {
                  id: 51,
                  product_id: 27,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e95c24-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=9ceaa082-4806-43ec-a7f2-268fd3143333'
                },
                {
                  id: 52,
                  product_id: 27,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e95cec-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=7dbef16c-3ec8-42af-b668-31fb774791a7'
                },
                {
                  id: 53,
                  product_id: 28,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e96976-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=67d27fc7-296c-4c14-b4c9-d9c7b092c848'
                },
                {
                  id: 54,
                  product_id: 28,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e968a4-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=31a8848e-820f-4a71-a67f-7bcf67aa499f'
                },
                {
                  id: 55,
                  product_id: 29,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c3668-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=782d2714-79aa-4021-b650-33eeb482a97a'
                },
                {
                  id: 56,
                  product_id: 29,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c37b2-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=747e5367-c028-455c-9555-d753158d5e5c'
                },
                {
                  id: 57,
                  product_id: 30,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c3528-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=a918b216-38f3-4254-ba92-8ed0c6edc4ec'
                },
                {
                  id: 58,
                  product_id: 30,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c324e-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=018d9270-629f-4c7c-97e2-350579223512'
                },
                {
                  id: 59,
                  product_id: 31,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c3a28-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=8c50f6bd-9eb5-4611-ab75-282b8a4a0f73'
                },
                {
                  id: 60,
                  product_id: 31,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F217c3956-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=6fef6846-0d7d-4994-b8d3-446d108b9a49'
                },
                {
                  id: 61,
                  product_id: 32,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e964e4-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=0f3613c1-0e4c-42d2-b6b7-ead0b6f611e3'
                },
                {
                  id: 62,
                  product_id: 32,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e9641c-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=ed77a67a-5636-45e1-ad38-9ab78c11b97c'
                },
                {
                  id: 63,
                  product_id: 33,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e965a2-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=f68aa407-5816-452b-a7c4-70d9977a3c2c'
                },
                {
                  id: 64,
                  product_id: 33,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fb9e96660-1fd4-11eb-adc1-0242ac120002.jpg?alt=media&token=e9bca4b5-4d31-4df6-9971-ddbd06c5b2b3'
                },
                {
                  id: 65,
                  product_id: 34,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f04bde-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=a3795c5c-f421-466f-ac98-d5d3b3a4168c'
                },
                {
                  id: 66,
                  product_id: 34,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f04b20-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=0ed1902e-6d41-47d4-ab98-54471450f60b'
                },
                {
                  id: 67,
                  product_id: 35,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f04580-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=d4db2b94-4656-4f23-bdfb-0e51401f86cd'
                },
                {
                  id: 68,
                  product_id: 35,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f0480a-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=534b28b6-e05d-4759-a71f-22c1163a29ed'
                },
                {
                  id: 69,
                  product_id: 36,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f04a58-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=eddacdc6-1c38-4f0e-9f27-23b72a639337'
                },
                {
                  id: 70,
                  product_id: 36,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f0497c-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=66cde526-b89b-49ac-9cbd-954059d4f07a'
                },
                {
                  id: 71,
                  product_id: 37,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f04ff8-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=e04a29cd-69d9-4634-b51d-916e3f690f00'
                },
                {
                  id: 72,
                  product_id: 37,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f050b6-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=31f23f79-f751-4034-b6b5-bccf89eda2dc'
                },
                {
                  id: 73,
                  product_id: 38,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f0573c-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=bea255c1-fcbe-4b3e-8e4f-9ccc6c832b67'
                },
                {
                  id: 74,
                  product_id: 38,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f0567e-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=b912a811-5ab9-4fca-a9c2-074b7c62a5d3'
                },
                {
                  id: 75,
                  product_id: 39,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f04ca6-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=5a48da44-47f5-4625-b381-2ddd8444730e'
                },
                {
                  id: 76,
                  product_id: 39,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f04f30-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=24f2f7c8-0355-47db-a2c8-c67949275f73'
                },
                {
                  id: 77,
                  product_id: 40,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f05598-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=b4bd308d-0fb4-4647-aa69-1ac857c9eea3'
                },
                {
                  id: 78,
                  product_id: 40,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f05304-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=fbae3415-cae8-4f6b-9720-1b6168c57300'
                },
                {
                  id: 79,
                  product_id: 41,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2Fe66580e2-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=07b4be3a-3796-4299-a675-3cd3b1afb8ce'
                },
                {
                  id: 80,
                  product_id: 41,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f05804-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=24b60950-efd9-4c25-af6e-0dbc3077fe6f'
                },
                {
                  id: 81,
                  product_id: 42,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f05174-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=12826e6c-4da9-4592-b012-0b2e5d87e9d7'
                },
                {
                  id: 82,
                  product_id: 42,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F80f0523c-1fd5-11eb-adc1-0242ac120002.jpg?alt=media&token=91db2bb4-13de-4ec7-b600-308a5c848545'
                },
                {
                  id: 83,
                  product_id: 43,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5fbf488e-2052-11eb-adc1-0242ac120002.jpg?alt=media&token=e5b894f9-d14e-4f8a-8e23-7ff8cb344697'
                },
                {
                  id: 84,
                  product_id: 43,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5fbf49c4-2052-11eb-adc1-0242ac120002.jpg?alt=media&token=f8e8a61d-dda2-4279-a577-c4d9d1df4a6d'
                },
                {
                  id: 85,
                  product_id: 44,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5fbf3b0a-2052-11eb-adc1-0242ac120002.jpg?alt=media&token=87c8caa2-6eea-461f-8a4e-f095a0f4642b'
                },
                {
                  id: 86,
                  product_id: 44,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5fbf3d62-2052-11eb-adc1-0242ac120002.png?alt=media&token=3caa1579-0693-4c03-a855-9339376c57e1'
                },
                {
                  id: 87,
                  product_id: 45,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5fbf4582-2052-11eb-adc1-0242ac120002.jpg?alt=media&token=7cb5b4e8-ec69-4202-955e-8406093a0703'
                },
                {
                  id: 88,
                  product_id: 45,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5fbf4456-2052-11eb-adc1-0242ac120002.jpg?alt=media&token=2eb254b2-d22a-4c7d-90b3-8f0dc098816f'
                },
                {
                  id: 89,
                  product_id: 46,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5fbf421c-2052-11eb-adc1-0242ac120002.jpg?alt=media&token=9b3bb1a9-1298-4415-b170-8dba6546126d'
                },
                {
                  id: 90,
                  product_id: 46,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5fbf4352-2052-11eb-adc1-0242ac120002.jpg?alt=media&token=e2232971-400f-419b-ab29-1385dc6b3165'
                },
                {
                  id: 91,
                  product_id: 47,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5fbf4b18-2052-11eb-adc1-0242ac120002.jpg?alt=media&token=92dda1eb-d858-485e-919b-da5942b732a2'
                },
                {
                  id: 92,
                  product_id: 47,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5fbf4c80-2052-11eb-adc1-0242ac120002.jpg?alt=media&token=579e23af-26fb-45cd-9b05-9676dab4ead4'
                },
                {
                  id: 93,
                  product_id: 48,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5fbf4672-2052-11eb-adc1-0242ac120002.png?alt=media&token=14850cf1-c703-4a7e-ac9e-ffe3bf266da9'
                },
                {
                  id: 94,
                  product_id: 48,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5fbf4794-2052-11eb-adc1-0242ac120002.png?alt=media&token=324abbfa-90c9-40f3-880c-714089253c57'
                },
                {
                  id: 95,
                  product_id: 49,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5fbf3eb6-2052-11eb-adc1-0242ac120002.jpg?alt=media&token=9e2160df-d9a9-4c85-bd1b-b6a75b0f2aa6'
                },
                {
                  id: 96,
                  product_id: 50,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5fbf412c-2052-11eb-adc1-0242ac120002.jpg?alt=media&token=9fdcd668-783c-43cd-b021-8e482f4312bc'
                },
                {
                  id: 97,
                  product_id: 50,
                  image: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/products%2F5fbf4050-2052-11eb-adc1-0242ac120002.jpg?alt=media&token=558fc1b9-57af-408a-8623-6fa0fe6fb692'
                },
              ]);
            });
          });
    });
};