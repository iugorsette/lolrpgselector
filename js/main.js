var elem = document.getElementById('btn');

elem.addEventListener('click', function () {
    var divTela = document.getElementById("imagemHeroi");
    var classe = document.getElementById("classeChar").value;
    var gen = document.getElementById("genero").value;

    switch (classe) {
        case 'arqueiro':
            if (gen == 'masculino') {
                divTela.innerHTML = "<img src='./img/arqueiro/arqueiro.jpg' alt='arqueiro'>" +
                    "<h2>O EXPLORADOR PRÓDIGO</h2>" +
                    "<p>Um aventureiro arrojado, com um talento nato nas artes mágicas, Ezreal desbrava catacumbas soterradas, envolve-se com antigas maldições e supera com facilidade as situações mais improváveis. Sua coragem e ousadia não têm limites e ele prefere resolver as coisas no improviso, confiando parcialmente no seu talento, mas principalmente em sua mística luva shurimane, que ele usa para causar explosões arcanas devastadoras. Uma coisa é certa: quando Ezreal está por perto, lá vem problema. Ou lá vai. Ou já veio.</p>" +
                    "<table>" +
                    "    <h2>Atributos Físicos</h2>" +
                    "    <tr>" +
                    "        <th>Força</th>" +
                    "        <th>Constituição</th>" +
                    "        <th>Destreza</th>" +
                    "        <th>Agilidade</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>10</td>" +
                    "        <td>6</td>" +
                    "        <td>80</td>" +
                    "        <td>70</td>" +
                    "    </tr>" +
                    "</table>" +
                    "<table>" +
                    "    <h2>Atributos Mentais </h2>" +
                    "    <tr>" +
                    "        <th>Inteligência</th>" +
                    "        <th>Força de Vontade</th>" +
                    "        <th>Percepção</th>" +
                    "        <th>Carisma</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>68</td>" +
                    "        <td>18</td>" +
                    "        <td>98</td>" +
                    "        <td>55</td>" +
                    "    </tr>" +
                    "</table>";
            } else {
                divTela.innerHTML = "<img src='./img/arqueiro/arqueira.jpg' alt='arqueira'>" +
                    "<h2>A ARQUEIRA DO GELO</h2>" +
                    "<p>A mãe de guerra Glacinata da tribo de Avarosa, Ashe comanda a horda mais populosa do norte. Estoica, inteligente e idealista, mesmo que desconfortável com seu papel de liderança, ela canaliza as magias ancestrais de sua linhagem para empunhar um arco de Gelo Verdadeiro. Com a crença de seu povo de que Ashe seria a heroína mítica, Avarosa, reencarnada, ela espera unificar Freljord mais uma vez, retomando suas antigas terras tribais.</p>" +
                    "<table>" +
                    "    <h2>Atributos Físicos</h2>" +
                    "    <tr>" +
                    "        <th>Força</th>" +
                    "        <th>Constituição</th>" +
                    "        <th>Destreza</th>" +
                    "        <th>Agilidade</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>10</td>" +
                    "        <td>6</td>" +
                    "        <td>98</td>" +
                    "        <td>86</td>" +
                    "    </tr>" +
                    "</table>" +
                    "<table>" +
                    "    <h2>Atributos Mentais </h2>" +
                    "    <tr>" +
                    "        <th>Inteligência</th>" +
                    "        <th>Força de Vontade</th>" +
                    "        <th>Percepção</th>" +
                    "        <th>Carisma</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>78</td>" +
                    "        <td>18</td>" +
                    "        <td>68</td>" +
                    "        <td>55</td>" +
                    "    </tr>" +
                    "</table>";
            }
            break;
        case 'guardiao':
            if (gen == 'masculino') {
                divTela.innerHTML = "<img src='./img/guardiao/guardiao.jpg' alt='guardiao'>" +
                    "<h2>O CORAÇÃO DE FRELJORD</h2>" +
                    "<p>Abençoado com bíceps gigantescos e um coração maior ainda, Braum é um amado herói de Freljord. Cada salão de hidromel ao norte de Frostheld brinda sua força lendária que teria derrubado uma floresta de carvalhos em uma única noite e demolido uma montanha inteira com um soco. Carregando uma porta de cofre encantada como seu escudo, Braum vaga pelo norte congelado com seu sorriso abigodado tão grande quanto seus músculos, um verdadeiro amigo para os necessitados.</p>" +
                    "<table>" +
                    "    <h2>Atributos Físicos</h2>" +
                    "    <tr>" +
                    "        <th>Força</th>" +
                    "        <th>Constituição</th>" +
                    "        <th>Destreza</th>" +
                    "        <th>Agilidade</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>40</td>" +
                    "        <td>99</td>" +
                    "        <td>55</td>" +
                    "        <td>40</td>" +
                    "    </tr>" +
                    "</table>" +
                    "<table>" +
                    "    <h2>Atributos Mentais </h2>" +
                    "    <tr>" +
                    "        <th>Inteligência</th>" +
                    "        <th>Força de Vontade</th>" +
                    "        <th>Percepção</th>" +
                    "        <th>Carisma</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>30</td>" +
                    "        <td>80</td>" +
                    "        <td>20</td>" +
                    "        <td>90</td>" +
                    "    </tr>" +
                    "</table>";
            } else {
                divTela.innerHTML = "<img src='./img/guardiao/guardia.jpg' alt='guardia'>" +
                    "<h2>A ALVORADA RADIANTE</h2>" +
                    "<p>Impregnada pelas chamas do sol, Leona é uma guerreira sagrada de Solari que defende o Monte Targon com sua Lâmina Zênite e a Proteção da Aurora. Sua pele brilha com fogo solar enquanto seus olhos queimam com o poder do Aspecto celestial que nela existe. Protegida em uma armadura dourada e carregando o terrível fardo de um conhecimento ancestral, Leona traz luz a alguns e morte a outros.</p>" +
                    "<table>" +
                    "    <h2>Atributos Físicos</h2>" +
                    "    <tr>" +
                    "        <th>Força</th>" +
                    "        <th>Constituição</th>" +
                    "        <th>Destreza</th>" +
                    "        <th>Agilidade</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>50</td>" +
                    "        <td>89</td>" +
                    "        <td>55</td>" +
                    "        <td>40</td>" +
                    "    </tr>" +
                    "</table>" +
                    "<table>" +
                    "    <h2>Atributos Mentais </h2>" +
                    "    <tr>" +
                    "        <th>Inteligência</th>" +
                    "        <th>Força de Vontade</th>" +
                    "        <th>Percepção</th>" +
                    "        <th>Carisma</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>40</td>" +
                    "        <td>80</td>" +
                    "        <td>40</td>" +
                    "        <td>60</td>" +
                    "    </tr>" +
                    "</table>";
            }

            break;
        case 'guerreiro':
            if (gen == 'masculino') {
                divTela.innerHTML = "<img src='./img/guerreiro/guerreiro.jpg' alt='guerreiro'>" +
                    "<h2>O PODER DE DEMACIA</h2>" +
                    "<p>Um guerreiro nobre e orgulhoso, Garen faz parte da Vanguarda Destemida. Popular entre seus" +
                    "    companheiros e respeitado o suficiente por seus inimigos, sua reputação é nada mais do que o" +
                    "    esperado de um herdeiro da prestigiosa família Stemmaguarda, encarregada de defender Demacia e seus" +
                    "    ideais. Vestido com uma armadura resistente à magia e empunhando uma poderosa espada, Garen está" +
                    "    sempre pronto para confrontar magos e feiticeiros no campo de batalha, em um verdadeiro furacão de" +
                    "    aço virtuoso.</p>" +

                    "<table>" +
                    "    <h2>Atributos Físicos</h2>" +
                    "    <tr>" +
                    "        <th>Força</th>" +
                    "        <th>Constituição</th>" +
                    "        <th>Destreza</th>" +
                    "        <th>Agilidade</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>80</td>" +
                    "        <td>80</td>" +
                    "        <td>55</td>" +
                    "        <td>30</td>" +
                    "    </tr>" +
                    "</table>" +
                    "<table>" +
                    "    <h2>Atributos Mentais </h2>" +
                    "    <tr>" +
                    "        <th>Inteligência</th>" +
                    "        <th>Força de Vontade</th>" +
                    "        <th>Percepção</th>" +
                    "        <th>Carisma</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>20</td>" +
                    "        <td>60</td>" +
                    "        <td>22</td>" +
                    "        <td>75</td>" +
                    "    </tr>" +
                    "</table>";

            } else {
                divTela.innerHTML =
                    "<img src='./img/guerreiro/guerreira.jpg' alt='guerreira'>" +
                    "<h2>A EXILADA</h2>" +
                    "<p>Outrora mestra das espadas nos esquadrões de Noxus, agora Riven é uma expatriada em uma terra que um dia já tentou conquistar. Depois de alcançar os altos escalões do exército usando a força de sua convicção e sua brutal eficiência, ela foi recompensada com uma lâmina rúnica lendária e sua própria milícia. No entanto, no fronte ioniano, a fé de Riven em sua terra natal foi testada e, no fim, quebrada. Tendo cortado todos os laços com o império, agora ela busca seu lugar em um mundo devastado, mesmo diante de rumores de que a própria Noxus passou por uma transformação...</p>" +

                    "<table>" +
                    "    <h2>Atributos Físicos</h2>" +
                    "    <tr>" +
                    "        <th>Força</th>" +
                    "        <th>Constituição</th>" +
                    "        <th>Destreza</th>" +
                    "        <th>Agilidade</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>99</td>" +
                    "        <td>40</td>" +
                    "        <td>70</td>" +
                    "        <td>80</td>" +
                    "    </tr>" +
                    "</table>" +
                    "<table>" +
                    "    <h2>Atributos Mentais </h2>" +
                    "    <tr>" +
                    "        <th>Inteligência</th>" +
                    "        <th>Força de Vontade</th>" +
                    "        <th>Percepção</th>" +
                    "        <th>Carisma</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>40</td>" +
                    "        <td>12</td>" +
                    "        <td>22</td>" +
                    "        <td>5</td>" +
                    "    </tr>" +
                    "</table>";
            }
            break;
        case 'lutador':
            if (gen == 'masculino') {
                divTela.innerHTML = "<img src='./img/lutador/lutador.jpg' alt='lutador'> " +
                    "<h2>O CHEFE</h2>" +
                    "<p>Líder de parte do próspero submundo do crime em Ionia, Sett deve todo o seu sucesso à guerra contra Noxus. Mesmo estreando como um simples desafiante nas arenas de combate em Navori, ele logo conquistou notoriedade com sua força bruta e capacidade de suportar dor contínua e extrema. Agora, após superar todos os combatentes locais, Sett chegou até o topo e reina sobre as arenas onde um dia lutara.</p>" +
                    "<table>" +
                    "    <h2>Atributos Físicos</h2>" +
                    "    <tr>" +
                    "        <th>Força</th>" +
                    "        <th>Constituição</th>" +
                    "        <th>Destreza</th>" +
                    "        <th>Agilidade</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>99</td>" +
                    "        <td>80</td>" +
                    "        <td>70</td>" +
                    "        <td>60</td>" +
                    "    </tr>" +
                    "</table>" +
                    "<table>" +
                    "    <h2>Atributos Mentais </h2>" +
                    "    <tr>" +
                    "        <th>Inteligência</th>" +
                    "        <th>Força de Vontade</th>" +
                    "        <th>Percepção</th>" +
                    "        <th>Carisma</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>10</td>" +
                    "        <td>80</td>" +
                    "        <td>10</td>" +
                    "        <td>10</td>" +
                    "    </tr>" +
                    "</table>";
            } else {
                divTela.innerHTML = "<img src='./img/lutador/lutadora.jpg' alt='lutadora'> " +
                    "<h2>A DEFENSORA DE PILTOVER</h2>" +
                    "<p>Antiga criminosa das ruas violentas de Zaun, Vi é uma mulher temível, impulsiva e explosiva que tem muito pouco respeito por autoridades. Após ter crescido completamente só, Vi desenvolveu instintos de sobrevivência extremamente certeiros e um senso de humor extremamente ácido. Agora trabalhando com os Vigias de Piltover para manter a paz, ela porta poderosas manoplas hextec capazes de esmagar paredes e suspeitos com a mesma facilidade.</p>" +
                    "<table>" +
                    "    <h2>Atributos Físicos</h2>" +
                    "    <tr>" +
                    "        <th>Força</th>" +
                    "        <th>Constituição</th>" +
                    "        <th>Destreza</th>" +
                    "        <th>Agilidade</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>99</td>" +
                    "        <td>70</td>" +
                    "        <td>75</td>" +
                    "        <td>65</td>" +
                    "    </tr>" +
                    "</table>" +
                    "<table>" +
                    "    <h2>Atributos Mentais </h2>" +
                    "    <tr>" +
                    "        <th>Inteligência</th>" +
                    "        <th>Força de Vontade</th>" +
                    "        <th>Percepção</th>" +
                    "        <th>Carisma</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>20</td>" +
                    "        <td>60</td>" +
                    "        <td>10</td>" +
                    "        <td>20</td>" +
                    "    </tr>" +
                    "</table>";
            }
            break;
        case 'mago':
            if (gen == 'masculino') {
                divTela.innerHTML = "<img src='./img/mago/mago.jpg' alt='mago'>" +
                    "<h2>O MAGO RÚNICO</h2>" +
                    "<p>Considerado pela grande maioria como o mago mais habilidoso de Runeterra, Ryze é um arquimago ancião e amargo que carrega um enorme peso. Dotado de um enorme poder arcano e de uma notável estrutura física, ele busca incansavelmente pelas Runas Globais, que são fragmentos de magia pura que um dia criaram o mundo a partir do nada. Ele deve recuperar esses artefatos antes que eles caiam em mãos erradas, pois Ryze conhece bem os horrores que eles podem infligir em Runeterra.</p>" +
                    "<table>" +
                    "    <h2>Atributos Físicos</h2>" +
                    "    <tr>" +
                    "        <th>Força</th>" +
                    "        <th>Constituição</th>" +
                    "        <th>Destreza</th>" +
                    "        <th>Agilidade</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>6</td>" +
                    "        <td>6</td>" +
                    "        <td>5</td>" +
                    "        <td>70</td>" +
                    "    </tr>" +
                    "</table>" +
                    "<table>" +
                    "    <h2>Atributos Mentais </h2>" +
                    "    <tr>" +
                    "        <th>Inteligência</th>" +
                    "        <th>Força de Vontade</th>" +
                    "        <th>Percepção</th>" +
                    "        <th>Carisma</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>99</td>" +
                    "        <td>75</td>" +
                    "        <td>98</td>" +
                    "        <td>50</td>" +
                    "    </tr>" +
                    "</table>";
            } else {
                divTela.innerHTML = "<img src='./img/mago/maga.jpg' alt='maga'>" +
                    "<h2>A DAMA DA LUZ</h2>" +
                    "<p>Luxanna Stemmaguarda nasceu em Demacia, um reino insular onde habilidades mágicas são vistas com medo e desconfiança. Capaz de dobrar a luz à sua vontade, ela cresceu temendo ser descoberta e exilada, e foi forçada a manter seus poderes em segredo a fim de preservar o status de nobreza de sua família. Apesar de tudo, o otimismo e resiliência de Lux a levaram a aceitar seus talentos únicos e agora ela os utiliza em segredo a serviço de sua terra natal.</p>" +
                    "<table>" +
                    "    <h2>Atributos Físicos</h2>" +
                    "    <tr>" +
                    "        <th>Força</th>" +
                    "        <th>Constituição</th>" +
                    "        <th>Destreza</th>" +
                    "        <th>Agilidade</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>6</td>" +
                    "        <td>6</td>" +
                    "        <td>5</td>" +
                    "        <td>70</td>" +
                    "    </tr>" +
                    "</table>" +
                    "<table>" +
                    "    <h2>Atributos Mentais </h2>" +
                    "    <tr>" +
                    "        <th>Inteligência</th>" +
                    "        <th>Força de Vontade</th>" +
                    "        <th>Percepção</th>" +
                    "        <th>Carisma</th>" +
                    "    </tr>" +
                    "    <tr>" +
                    "        <td>89</td>" +
                    "        <td>85</td>" +
                    "        <td>68</td>" +
                    "        <td>80</td>" +
                    "    </tr>" +
                    "</table>";
            }
            break;
    }
}, false);