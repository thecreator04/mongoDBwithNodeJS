

  // vai ser executada assim que a página ser carregada.
  window.onload = function () {

    //fun�ao que � executada quando o script � carregado
      var datafestival = moment('2020-12-15 00:00:00');
      var atual = moment();
      var duracao = moment.duration(datafestival - atual);
      setInterval(function() {
        duracao = moment.duration(duracao - 1000);
        document.getElementById('contador').innerHTML = '<p id="p">'+arruma(duracao.years())+':'+arruma(duracao.months())+':'+arruma(duracao.days())+':'+arruma(duracao.hours())+':'+arruma(duracao.minutes())+':'+arruma(duracao.seconds())+'</p>';
      }, 1000);
    
    function arruma(a) {
      return (a < 10) ? '0' + a.toString() : a.toString();
    }
  
    
    
    var now = moment(new Date()); //todays date
    var end = moment("2015-12-1"); // another date
    var duration = moment.duration(now.diff(end));

    // botões "redicionadores" kkk
    var button = document.getElementById("cadastroButton");
    button.addEventListener("click", function () {
      location.href = '/cadastro';
    });


   

    /*var buttonsDelete = document.getElementsByClassName('buttonDelete')
    buttonsDelete = addEventListener('click', function(){
      

      console.log('pa')
    });
    */




    const divAnimated = document.querySelectorAll('[data-anime]')

    const animationClass = 'animate';

  function animeScroll(){
        const windowTop = window.pageYOffset + (window.innerHeight * 2) / 4;
        
        divAnimated.forEach(function(element){

          if((windowTop)>element.offsetTop){
            element.classList.add(animationClass);
          }
          else{
            element.classList.remove(animationClass);

          }
          console.log(element.offsetTop)

        })
    }

    window.addEventListener('scroll', function() {

      animeScroll();
    })
};

function test(nome){

  location.href = '/delete/'+nome;

  
}



/**/ 