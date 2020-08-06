$(document).ready(function() {
  
// FULLPAGE --> scroll  
  
  ///////////////// mobile
  if ($(window).width() < 600) {
     // alert('mobile');
    $('#fullpage').fullpage({
      autoScrolling: false,     //scroll
      verticalCentered: false   //flex
    });
    
    // LINK --> smooth scroll to div in mobile
    var heroLink    = $('#link-hero');
    var hero        = $('#hero');
    var oneLink     = $('#link-one');
    var one         = $('#one');
    var twoLink     = $('#link-two');
    var two         = $('#two');
    var threeLink   = $('#link-three');
    var three       = $('#three');
    var fourLink   = $('#link-four');
    var four       = $('#four');
    var fiveLink   = $('#link-five');
    var five       = $('#five');
    var lastLink   = $('#link-last');
    var last       = $('#last');

    heroLink.on('click', function(){
        $('html, body').animate({
        scrollTop: hero.offset().top
      }, 1000)
    });
    oneLink.on('click', function(){
        $('html, body').animate({
        scrollTop: one.offset().top
      }, 1000)
    });
    twoLink.on('click', function(){
        $('html, body').animate({
        scrollTop: two.offset().top
      }, 1000)
    });
    threeLink.on('click', function(){
        $('html, body').animate({
        scrollTop: three.offset().top
      }, 1000)
    });
    fourLink.on('click', function(){
      $('html, body').animate({
      scrollTop: four.offset().top
    }, 1000)
  });
  fiveLink.on('click', function(){
    $('html, body').animate({
    scrollTop: five.offset().top
  }, 1000)
  lastLink.on('click', function(){
    $('html, body').animate({
    scrollTop: last.offset().top
  }, 1000)
});
});
    
  }  
  
  ///////////////// desktop
  else {
     //alert('desktop'); 
    $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
      autoScrolling: true,      //scroll
      verticalCentered: false   //flex
    });
  }
  
  
  
  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();
  // /////////////////////////////////////////////////////
  // ///////////////////////////////////////////////mobile
  // hero
  var mobileHero = new ScrollMagic.Scene({
    triggerElement: '#hero',
    duration: '100%',
    triggerHook: 0, //position trigger
    reverse: true, //animation always
  })
  .setClassToggle('#link-hero', 'link-active')
  // .addIndicators({
  //   colorTrigger: 'black',
  //   colorStart: '#000',
  // })
  .addTo(controller);
  // one
  var mobileOne = new ScrollMagic.Scene({
    triggerElement: '#one',
    duration: '100%',
    triggerHook: 0, //position trigger
    reverse: true, //animation always
  })
  .setClassToggle('#link-one', 'link-active')
  .addTo(controller);
  // two
  var mobileTwo = new ScrollMagic.Scene({
    triggerElement: '#two',
    duration: '100%',
    triggerHook: 0, //position trigger
    reverse: true, //animation always
  })
  .setClassToggle('#link-two', 'link-active')
  .addTo(controller);
  // three
  var mobileThree = new ScrollMagic.Scene({
    triggerElement: '#three',
    duration: '100%',
    triggerHook: 0, //position trigger
    reverse: true, //animation always
  })
  .setClassToggle('#link-three', 'link-active')
  .addTo(controller);
   // four
   var mobileFour = new ScrollMagic.Scene({
    triggerElement: '#four',
    duration: '100%',
    triggerHook: 0, //position trigger
    reverse: true, //animation always
  })
  .setClassToggle('#link-four', 'link-active')
  .addTo(controller);
   // five
   var mobileFive = new ScrollMagic.Scene({
    triggerElement: '#five',
    duration: '100%',
    triggerHook: 0, //position trigger
    reverse: true, //animation always
  })
  .setClassToggle('#link-five', 'link-active')
  .addTo(controller);
   // last
   var mobileLast = new ScrollMagic.Scene({
    triggerElement: '#last',
    duration: '100%',
    triggerHook: 0, //position trigger
    reverse: true, //animation always
  })
  .setClassToggle('#link-last', 'link-active')
  .addTo(controller);
  // /////////////////////////////////////////////////////
  // ///////////////////////////////////////////////desktop
  // hero
  var desktopHero = new ScrollMagic.Scene({
    triggerElement: '#hero',
    duration: '100%',
    triggerHook: 0, //position trigger
    reverse: true, //animation always
  })
  .setClassToggle('#menu-hero', 'link-active')
  .addTo(controller);
  // one
  var desktopOne = new ScrollMagic.Scene({
    triggerElement: '#one',
    duration: '100%',
    triggerHook: 0, //position trigger
    reverse: true, //animation always
  })
  .setClassToggle('#menu-one', 'link-active')
  .addTo(controller);
  // two
  var desktopTwo = new ScrollMagic.Scene({
    triggerElement: '#two',
    duration: '100%',
    triggerHook: 0, //position trigger
    reverse: true, //animation always
  })
  .setClassToggle('#menu-two', 'link-active')
  .addTo(controller);
  // three
  var desktopThree = new ScrollMagic.Scene({
    triggerElement: '#three',
    duration: '100%',
    triggerHook: 0, //position trigger
    reverse: true, //animation always
  })
  .setClassToggle('#menu-three', 'link-active')
  .addTo(controller);
  // four
  var desktopFour = new ScrollMagic.Scene({
    triggerElement: '#four',
    duration: '100%',
    triggerHook: 0, //position trigger
    reverse: true, //animation always
  })
  .setClassToggle('#menu-four', 'link-active')
  .addTo(controller);
  // five
  var desktopFive = new ScrollMagic.Scene({
    triggerElement: '#five',
    duration: '100%',
    triggerHook: 0, //position trigger
    reverse: true, //animation always
  })
  .setClassToggle('#menu-three', 'link-active')
  .addTo(controller);
  // three
  var desktopLast = new ScrollMagic.Scene({
    triggerElement: '#last',
    duration: '100%',
    triggerHook: 0, //position trigger
    reverse: true, //animation always
  })
  .setClassToggle('#menu-last', 'link-active')
  .addTo(controller);
  
  
  // /////////////////////////////////////////////////////
  // ///////////////////////////////////////////////animation icon
  var controller = new ScrollMagic.Controller();
    
    var icon = $('.icon');
    var icon01 = $('.icon01');
    var icon02 = $('.icon02');
    var icon03 = $('.icon03');
  
    var tl1 = new TimelineMax().add([
                     TweenMax.from(icon, 1, {y: 50, autoAlpha: 0, ease:Power1.easeOut})      
                     ]);
         
    new ScrollMagic.Scene({
            triggerElement: ('#one h1'),
            triggerHook: 0.5
          })
          .setTween(tl1)
          // .addIndicators({
          //   name: 'icon',
          //   colorTrigger: 'black',
          //   colorStart: 'cyan',
          //   colorEnd: 'purple'
          // })
          .addTo(controller);
  
});