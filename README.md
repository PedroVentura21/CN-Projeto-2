# Resoluções numéricas
Este repositório contém resoluções numéricas para questões definidas pelo professor responsável pela diciplina de Cál. Numérico, essas contém problemas para os seguintes temas:
- Sistemas de equações lineares
- Ajuste de curvas
- Integração numérica

## As questões escolhidas:
  - ```tópico 1 questão 2 (nome do arquivo com a main: q1.2.js) - Sistemas de equações lineares```
    
      Um engenheiro supervisiona a produção de três tipos de componentes elétricos. Três tipos de 
      material — metal, plástico e borracha — são necessários para a produção. As quantidades 
      necessárias para a produção de cada componente são:

      ![Imagem da questão](/img/q1.jpeg)

      Se um total de 3,89; 0,095 e 0,282 kg de metal, plástico e borracha, respectivamente, estiver 
      disponível a cada dia, quantos componentes poderão ser produzidos por dia?
      a - Apresente o problema acima na forma de um sistema de equações lineares. 
      b - Desenvolva um programa que seja capaz de resolver problemas semelhantes usando métodos diretos. 
      c - Encontre a solução do sistema linear com os dados do problema.
    
  - ```tóp. 3 q. 1 (q3.1.js) - Ajuste de curvas```

    Em 1965, Gordon Moore, um dos fundadores da Intel, propôs uma regra para a 
    crescente miniaturização dos chips que ficou conhecida como a“Lei de Moore”. Em sua 
    “profecia”, Moore afirmava que o número de transistores dos chips teriam o número 
    duplicado a cada 18 meses.  
    A tabela a seguir relaciona alguns chips com o seu respecitvo ano de lançamento. O 
    gráfico ilustra essa evolução.
    
    ![Imagem da questão](/img/q3.jpeg)

    De posse destes dados, proponha uma função que estabeleça uma previsão para o número de transistores em 
    chips lançados em 2010, 2020 e 2030. (Dica: procure uma função N=f(a), onde N é o número de transistores e 
    a é o ano).  
    Antes de tudo, transforme o eixo do número de transistores para log10(N)
    
  - ```tóp. 4 q. 2 (q4.2.js) - Integração numérica```

    Considere as margens de um rio e tome como referência de medida uma linha reta, conforme a 
    figura abaixo. Foram medidas distências, em metros, entre essa linha e as duas margens, em alguns 
    pontos, a partir do ponto tomado como origem. Tais dados foram registrados na tabela a seguir:

    ![Imagem da questão](/img/q4.jpeg)

    Usando ambas as regras de integração repetidas, determine o valor aproximado da área da 
    superfície do rio no intervalo [0,40]. 


Onde aqueles que responderam as questões foram:
  - [Felipe Vieira de Oliveira](https://github.com/FelipeVieira9): q3.1
  - [Pedro Giovanni Ventura](https://github.com/PedroVentura21): q1.2 e 4.2

## Requisitos para execução do código:
(Os códigos de resolução foram feitos em Javascript)
  - Ter instalado o [node.js](https://nodejs.org/pt) - usado para compilar os códigos
  - Ter instalado a biblioteca ```prompt-sync``` - para entrada de dados pelo prompt de comando
  - Somente os arquivos das questões podem ser compilados - ex.: ```node q1.2.js```
