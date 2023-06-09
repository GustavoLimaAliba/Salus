// Função criada para filtrar os palvarões / palavras de baixo calão de uma cadeia de caracteres
function filtrarPalavroes(text){

    let palavrasNegadas = [
        /caralho/g,
        /karalho/g,
        /porra/g,
        /poha/g,
        /buceta/g,
        /puta/g,
        /puto/g,
        /capeta/g,
        /demonio/g,
        /vadia/g,
        /desgraçad/g,
        /vagabund/g,
        /piroc/g,
        /penis/g,
        /peniano/g,
        /pau/g,
        /giromba/g,
        /jéba/g,
        /jeba/g,
        /geba/g,
        /cacet/g,
        /piru/g,
        /bacanal/g,
        /pirok/g,
        /rapariga/g,
        /rampera/g,
        /rampeira/g,
        /macaco/g,
        /monkey/g,
        /pariu/g,
        /pererec/g,
        /bucetinh/g,
        /xota/g,
        /chota/g,
        /quenga/g,
        /kenga/g,
        /nazist/g,
        /racist/g,
        /pik/g,
        /pica/g,
        /picao/g,
        /picão/g,
        /nude/g,
        /fude/g,
        /fode/g,
        /xerec/g,
        /cherec/g,
        /cherek/g,
        /xerek/g,
        /piranh/g,
        /fodid/g,
        /prostitut/g,
        /cafagest/g,
        /cafajest/g,
        /cafetão/g,
        /cafetao/g,
        /pinto/g,
        /bilau/g,
        /bilal/g,
        /bilal/g,
        /piriquit/g,
        /pirikit/g,
        /xinbiu/g,
        /ximbiu/g,
        /chinbiu/g,
        /chimbiu/g,
        /morra/g,
        /morte/g,
        /disgraça/g,
        /desgraça/g,
        /boquete/g,
        /safad/g,
        /surub/g,
        /orgy/g,
        /orgia/g,
        /geromb/g,
        /jeromb/g,
        /transar/g,
        /tranza/g,
        /tranzar/g,
        /maconha/g,
        /crack/g,
        /lsd/g,
        /k9/g,
        /cocaína/g,
        /cocaina/g,
        /sex/g,
        /bunda/g,
        /gozo/g,
        /goso/g,
        /gosa/g,
        /bobo/g,
        /babaca/g,
        /babaka/g,
        /babaka/g,
        /rola/g,
        /buçanha/g,
        /piriquit/g,
        /bobão/g,
        /boba/g,
        /carai/g,
        /pirikit/g,
        /cuzinho/g,
        /cuzin/g,
        /putinh/g,
        /putinh/g,
        /goza/g,
        /cachorr/g,
        /patet/g,
        /capanga/g,
        /caçaralho/g,
        /orgasm/g,
        /xvideos/g,
        /porhub/g,
        /ladrão/g,
        /ladrao/g,
        /bandid/g,
        /ladra/g,
        /cafajest/g,
        /cafagest/g,
        /kafagest/g,
        /kafajest/g,
        /cu /g,
        /caralh/g,
        /jiromba/g,
        /peitud/g,
        /bumbum/g,
        /seu gordo/g,
        /rabetao/g,
        /ranbetão/g,
        /pintud/g,
        /bucetud/g,
        /rolud/g,
        /bucelandia/g,
        /garganta profunda/g,
        /raba/g,
        /otari/g,
        /trouxa/g,
        /idiot/g,
        /ramelão/g,
        /merda/g,
        /bosta/g,
        /bobalhão/g,
        /palhaço/g,
        /buxudo/g,
        /chupa meu/g,
        /chupa minha/g,
        /senta na minha/g,
        /senta nas minha/g,
        /sacanagem/g,
        /bb/g,
        /calcinha/g,
        /manda foto sem/g,
        /cueca/g,
        /sunga/g,
        /meter/g,
        /chuca/g,
        /chuka/g,
        /xuca/g,
        /rachada/g,
        /chita/g,
        /anel/g,
        /posso comer seu/g,
        /bundinh/g,
        /vou te deixar/g,
        /vou te comer/g,
        /vou te estourar/g,
        /vou te/g,
        /hemorroida/g,
        /tiro/g,
        /paulada/g,
        /pedrada/g,
        /esfaqueada/g,
        /porrada/g,
        /estupro/g,
        /estupr/g,
        /abuso/g,
        /abusar/g,
        /abuzar/g,
        /abuzada/g,
        /abusada/g,
        /lambus/g,
        /lambuz/g,
        /te jogar/g,
        /largatixa/g,
        /baleia/g,
        /jamanta/g,
        /kkk /g,
        /ku klux klan/g,
        /porcaria/g,
        /gay/g,
        /buneca/g,
        /viadinho/g,
        /bixa/g,
        /boiola/g,
        /biba/g,
        /pixe/g,
        /cabaço/g,
        /cabasso/g,
        /fimose/g,
        /vagina/g,
        /fimoze/g,
        /caveira/g,
        /assaltar/g,
        /ejacula/g,
        /bobba/g,
        /satanas/g,
        /satã/g,
        /gurila/g,
        /mono/g,
        /gorila/g,
        /ejacular/g,
        /molestar/g,
        /roubar/g,
        /cavera/g,
        /petrobras/g,
        /anta/g,
        /esfaque/g,
        /raxada/g,
        /monstro/g,
        /cabeção/g,
        /cabeçudo/g,
        /lingerie/g,
    ]


    for (var i = 0; i < palavrasNegadas.length; i++){
        if (palavrasNegadas[i].test(text)){
            return true;
        }
    }

    return false;
}

export default filtrarPalavroes;