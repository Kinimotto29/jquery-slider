$(document).ready(function(){
    
    var slideShow = $('.slide-show');
    
    var slideCount = $('.slide-show').children().length;
    console.log(slideCount);
    
    var slideWidth = 100 / slideCount;
    console.log(slideWidth);
    
    var slideIndex = 0;
    console.log(slideIndex);
    
    
    /* Dynamicznie ustawiamy szerokość kontenera slide-show */
    slideShow.css({'width': slideCount * 100 + '%'});
    
    
    /* Ustawiamy dynamicznie wielkość pojedynczego slide i jego odległość od lewej krawedzi */
    $('.single-slide').each(function(index){
        $(this).css({
            'width': 100/slideCount + '%',
            'margin-left': index * slideWidth + '%'
        });
        
    });
    
    $('.slider-caption').eq(0).hide().fadeIn('slow');
    
    /* Funkcja obsługująca animacje w slide */
    function slide(newSlideIndex) {
        
        /* Przerwanie działania funkcji jeśli brakuje slidów z lewej lub prawej */
//        if( newSlideIndex < 0 || newSlideIndex >= slideCount) {
//            return;
//        }
        
        /* Zmień powyższy warunek w taki sposób, żeby po ostatnim slidzie wracał do 1go i po 1szym do ostatniego */
        if( newSlideIndex < 0 ) {
            newSlideIndex = slideCount - 1;
        } else if( newSlideIndex >= slideCount) {
            newSlideIndex = 0;
        }
        
        /* ukryj napis z kolejnego slidu */
        var nextSliderCaption = $('.slider-caption').eq(newSlideIndex);
        nextSliderCaption.hide();
        
        var marginLeft = (newSlideIndex * (-100) + '%');
        
        // wywoływanie animacji na elemencie slideShow, która przesunie go o lewy marines równy zmiennej marginLeft
        slideShow.animate({'margin-left': marginLeft}, 800, function(){
            slideIndex = newSlideIndex;
            nextSliderCaption.fadeIn('slow');
        });
        
    }
    
    /* Obsługa kliknięcia w strzałki */
    $('.slider-arrows a').click(function(){
        
        var direction = ($(this).hasClass('next-slide'))?1:-1;
        console.log(direction);
        slide(slideIndex + direction);
        
    });
    
    /* Obsługa przewijania slidera za pomocą przycisków na klawiaturze - strzałka w lewo i prawo */
    $(document).keydown(function(event){
        if(event.keyCode == 37) {
            console.log('strzałka w lewo');
        }
        console.log(event.keyCode);
        
         if(event.keyCode == 39) {
            console.log('strzałka w prawo');
        }
        
        switch(event.keyCode) {
            case 37:
                slide(slideIndex - 1);
                break;
            case 39:
                slide(slideIndex + 1);
                break;
        }

    });
    
    
    
    
    
    
    
    
    
    
    
    
    
});