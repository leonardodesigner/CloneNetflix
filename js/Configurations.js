//Variaveis

var FilmeEscolhido = "UmaBatalhaDeFe";
let h3 = document.getElementsByClassName('TituloFilme');
let p = document.getElementsByClassName('Descricao');
let a = document.getElementsByClassName('CartazPromocional');
let Popup = document.getElementsByClassName('PopUpBox');
let Nota = document.getElementsByClassName('Nota');
let Genero = document.getElementsByClassName('Genero');
let Classificacao = document.getElementsByClassName('Classificacao');
let Produtor = document.getElementsByClassName('Produtor');
let Diretor = document.getElementsByClassName('Diretor');
let Escritor = document.getElementsByClassName('Escritor');
let Lancamento = document.getElementsByClassName('Lancamento');



//Lista de codigos para facilitar no desenvolvimento

//p[0].innerHTML ="Uma Batalha de Fé";    Codigo da Descrição

//nome das variaveis para copiar e colar com facilidade

/*-------------------------------------------------------------


--------------------------------------------------------------
Informaçoes dos filmes

Nota
Genero 
Classificacao
Produtor
Diretor
Escritor
Lancamento
--------------------------------------------------------------

-------------------------------------------------------------*/


//Funções

function EscolherFilme(N_Filme){

 var N_Filme;
 
 FilmeEscolhido = N_Filme;
 switch(N_Filme){

    case "UmaBatalhaDeFe" :
        
       h3[0].innerHTML ="Uma Batalha de Fé";
       p[0].innerHTML ="Hunter Wilde é o líder de um grupo de sobreviventes cristãos que está tentando viver o mais normal possível dois anos após um ataque eletromagnético que mudou os rumos da civilização. Em um mundo de caos, viver o dia a dia se tornou muito traiçoeiro, mas isso não é nada comparado a quando os portões do inferno são abertos e demônios surgem determinados a procurar e destruir os cristãos restantes na Terra, e Hunter está marcado por eles. Se as forças malignas puderem quebrá-lo, toda a cidade o seguirá e o mal vencerá.";
       a[0].style.backgroundImage= "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%) , url(/Resourses/capaUBF.jpg)";
       
       
    break;

    case "Loki":
        
        h3[0].innerHTML ="Loki";
        p[0].innerHTML ="Loki, Deus da Trapaça, sai da sombra de seu irmão para embarcar em uma aventura que ocorre após os eventos de Vingadores: Ultimato.";
        a[0].style.backgroundImage=" linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%) , url(/Resourses/CapaLoki.jpg)";

    break;

    case "ViuvaNegra":
            
        h3[0].innerHTML ="Viúva Negra";
        p[0].innerHTML ="Ao nascer, a Viúva Negra, então conhecida como Natasha Romanova, é entregue à KGB, que a prepara para se tornar sua agente suprema. Porém, o seu próprio governo tenta matá-la quando a União Soviética se desfaz.";
        a[0].style.backgroundImage=" linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%) , url(/Resourses/capaViuva.jpg)";

    break;

    case "Monstros":
        
        h3[0].innerHTML ="Monstros no Trabalho";
        p[0].innerHTML ="Monsters at Work é uma série do serviço de streaming Disney+. É um spin-off da franquia Monsters, Inc., bem como uma sequência direta de Monsters, Inc. É a segunda série de animação da Disney baseada em uma propriedade da Pixar depois de Buzz Lightyear, do Comando Estelar. ";
        a[0].style.backgroundImage=" linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%) , url(/Resourses/CapaMonstros.jpg)";

    break;

    case "ICarly":

        h3[0].innerHTML ="ICarly";
        p[0].innerHTML ="Carly, Spencer e Freddie exploram novas aventuras em seus vinte e poucos anos";
        a[0].style.backgroundImage=" linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%) , url(/Resourses/capaIcarly.jpg)";

    break;

    case "UmaNoiteDeTerror":

        h3[0].innerHTML ="Uma Noite de Crime: A Fronteira";
        p[0].innerHTML ="Adela e seu marido Juan vivem no Texas, onde Juan trabalha como ajudante de fazenda para a rica família Tucker. Juan impressiona o patriarca de Tucker, Caleb, mas isso alimenta a raiva ciumenta do filho de Caleb. Na manhã seguinte ao Expurgo, uma gangue mascarada de assassinos ataca a família Tucker, incluindo a esposa de Dylan e sua irmã, forçando as duas famílias a se unirem e lutarem enquanto o país se transforma em caos e os Estados Unidos começam a se desintegrar em torno deles.";
        a[0].style.backgroundImage=" linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%) , url(/Resourses/UmaNoiteDeTerrorCapa.jpg)";

    break;

    case "SpaceJam":
        
        h3[0].innerHTML ="Space Jam: Um Novo Legado";
        p[0].innerHTML ="O superastro do basquete LeBron James se junta à gangue Looney Tunes para derrotar o Goon Squad e salvar seu filho.";
        a[0].style.backgroundImage=" linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%) , url(/Resourses/SpaceJamCapa.jpg)";

    break;

      default:
        // code block
 
};
 
};

function AssistirFilme(){

    switch(FilmeEscolhido){

        case "UmaBatalhaDeFe" :
        
            window.open("https://www.youtube.com/watch?v=_1O6HJHW-PA");

         break;
     
         case "Loki":
             
            window.open("https://www.youtube.com/watch?v=nW948Va-l10");

          
         break;
     
         case "ViuvaNegra":
                 
            window.open("https://www.youtube.com/watch?v=uNAxHLp7wv8");

     
         break;
     
         case "Monstros":
             
            window.open("https://www.youtube.com/watch?v=sw5zp8817i4");

           
     
         break;
     
         case "ICarly":
  
            window.open("https://www.youtube.com/watch?v=aGAysU0KB74");

     
         break;
     
         case "UmaNoiteDeTerror":
     
            window.open("https://www.youtube.com/watch?v=9o3bT-BpoRY");

     
         break;
     
         case "SpaceJam":
             
            window.open("https://www.youtube.com/watch?v=81SeeIxEunw");

     
         break;
     
           default:

    };


};

function InformacoesFilme(){

    Popup[0].style.display="flex";

    switch(FilmeEscolhido){

        case "UmaBatalhaDeFe" :
        
            h3[1].innerHTML ="Uma Batalha de Fé";
            Nota[0].innerHTML ="80";
            Genero [0].innerHTML ="Drama;";
            Classificacao [0].innerHTML ="10 anos;";
            Produtor [0].innerHTML ="David Timmes;";
            Diretor[0].innerHTML ="David Timmes;";
            Escritor[0].innerHTML ="Zane Tabari , Kaci Hill;";
            Lancamento[0].innerHTML ="30/09/2019.";
            
            
         break;
     
         case "Loki":
             
            h3[1].innerHTML ="Loki"; 
         
            Nota[0].innerHTML ="82";
            Genero [0].innerHTML ="Drama, Sci-Fi & Fantasia;";
            Classificacao [0].innerHTML ="14 anos;";
            Produtor [0].innerHTML ="Disney;";
            Diretor[0].innerHTML ="Michael Waldron;";
            Escritor[0].innerHTML ="--------;";
            Lancamento[0].innerHTML ="09/07/2021.";
            
          
         break;
     
         case "ViuvaNegra":
                 
            h3[1].innerHTML ="Viúva Negra"; 
            Nota[0].innerHTML ="79";
            Genero [0].innerHTML ="Ação, Ficção Cientifica, Aventura;";
            Classificacao [0].innerHTML ="12 anos;";
            Produtor [0].innerHTML ="Marvel;";
            Diretor[0].innerHTML ="Cate Shortland;";
            Escritor[0].innerHTML ="Jac Schaeffer;";
            Lancamento[0].innerHTML ="08/07/2021.";

     
         break;
     
         case "Monstros":
             
            h3[1].innerHTML ="Monstros no Trabalho";
            Nota[0].innerHTML ="72";
            Genero [0].innerHTML ="Família, Comédia, Animação;";
            Classificacao [0].innerHTML ="Livre;";
            Produtor [0].innerHTML ="Disney";
            Diretor[0].innerHTML ="Roberts Gannaway;";
            Escritor[0].innerHTML ="--------;";
            Lancamento[0].innerHTML ="07/07/2021;";

        
         break;
     
         case "ICarly":
  
            h3[1].innerHTML ="ICarly";
            Nota[0].innerHTML ="78";
            Genero [0].innerHTML ="Comédia, Drama;";
            Classificacao [0].innerHTML ="12 anos;";
            Produtor [0].innerHTML ="Dan Schneider;";
            Diretor[0].innerHTML ="Dan Schneiders;";
            Escritor[0].innerHTML ="Dan Schneider;";
            Lancamento[0].innerHTML ="TBA 2021.";

         break;
     
         case "UmaNoiteDeTerror":
     
            h3[1].innerHTML ="Uma Noite de Crime: A Fronteira";
            Nota[0].innerHTML ="78";
            Genero [0].innerHTML ="Ação;";
            Classificacao [0].innerHTML ="14 anos;";
            Produtor [0].innerHTML ="Universal;";
            Diretor[0].innerHTML ="Everardo Gout;";
            Escritor[0].innerHTML ="James DeMonaco;";
            Lancamento[0].innerHTML ="26/08/2021.";

     
         break;
     
         case "SpaceJam":
             
            h3[1].innerHTML ="Space Jam: Um Novo Legado";
            Nota[0].innerHTML ="77";
            Genero [0].innerHTML ="Animação, Comédia;";
            Classificacao [0].innerHTML ="10 anos;";
            Produtor [0].innerHTML ="Wanner Bros;";
            Diretor[0].innerHTML ="Malcolm D. Lee;";
            Escritor[0].innerHTML ="Keenan Coogler, Terence Nance, Juel Taylor, Tony Rettenmaier;";
            Lancamento[0].innerHTML ="15/07/2021.";

     
         break;
     
           default:

    };



        


};

function FecharPopUp(){

    Popup[0].style.display="none";

};