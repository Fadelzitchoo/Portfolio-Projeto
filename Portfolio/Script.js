var Clicou = false;                                                     //Boolean global que controla qual sera a mudançã de classes da vez

function MudarStyle(){

    if(Clicou == false)
    {
        const Banner = document.querySelector(".Banner");               //Ao mudar a classe de objeto, deve-se especificar diferentes buscas para cada caso
        const BannerBackground = document.querySelector(".FundoBanner") //Assim podendo pegar as informações dessa classe de forma correta
        const Portfolio = document.querySelector(".Port")

        Banner.classList.add('BannerEvento');                           //Adiciona uma nova classe ao banner, no caso diminuindo o tamanho dele
        Banner.classList.remove('Banner');                              //Remove a antiga pra não ter conflito

        BannerBackground.classList.add('FundoBannerEvento');            //Adiciona uma nova classe ao fundo do banner, no caso dando tranparencia
        BannerBackground.classList.remove('FundoBanner');               //Remove a classe antiga

        Portfolio.classList.add('PortEvento');                          //Adiciona uma nova classe para o letreiro
        Portfolio.classList.remove('Port');                             //Remove a classe antiga

    }
    if(Clicou == true)
    {                                                                   //Troca as classes novamente, voltando a como tudo erra em seu inicio
        const Banner = document.querySelector(".BannerEvento");
        const BannerBackground = document.querySelector(".FundoBannerEvento")
        const Portfolio = document.querySelector(".PortEvento")

        Banner.classList.add('Banner');
        Banner.classList.remove('BannerEvento');

        BannerBackground.classList.add('FundoBanner');
        BannerBackground.classList.remove('FundoBannerEvento');

        Portfolio.classList.add('Port');
        Portfolio.classList.remove('PortEvento');
    }

    Clicou = !Clicou;                                                   //Essa Boolean sempre trocara seu estado ao final do uso da função
}