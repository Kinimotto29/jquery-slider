$(document).ready(function(){
    console.log('test');
    
    var elementOne = document.getElementById('sectionFirst'); // vanilla JS
    
    var elementOneJQuery = $('#sectionFirst'); // JQuery
    
    console.log(elementOne);
    console.log(elementOneJQuery);
    
    /* Odwołania do elementów HTML w JQuery */
    
    var linki = $('.link');
    console.log(linki);
    
    var divy = $('div');
    console.log(divy);
    
    
    var firstChild = $('p:first-child');
    console.log(firstChild);
    
    var firstParInDiv = $('#parFirst > p');
    console.log(firstParInDiv);
    
    /* Pobieranie wartości i modyfikowanie w HTML */
    console.log(firstParInDiv.text());
    
    firstParInDiv.text('<h2>Zmieniony tekst w tym akapicie</h2>');
    
    console.log($('header').html());
    $('header').html('<h2>Zmieniony tekst w headerze</h2>')
    
    // Wewnątrz znacznika jako ostatnie dziecko
    $('header').append('<strong>Jestem na końcu nagłówka</strong>');
    
    // Wewnątrz znacznika jako pierwsze dziecko
    $('header').prepend('<strong>Jestem na początku nagłówka</strong>');
    
    $('header').after('<strong>Jestem za nagłówkiem</strong>');
    
    $('header').before('<strong>Jestem przed nagłówkiem</strong>');
    
    /* Dodaj przed każdym linkiem z klasą superlink tekst w znaczniku span - "Przejdź do strony: " */
    $('.superlink').before('<span>Przejdź do strony: </span>');
    
    /* Usuwanie zawartości elementu i elementu */
    $('#parSecond').empty(); // Usuwa zawartość znacznika w danym id
    $('#parSecond').remove(); // Usuwa cały znacznik wraz z zawartością
    
    
    /* Modyfikacja css w JQuery */
    linki.css('font-size', '2.5em');// Zmiana jednej właściwości
    linki.css({'color':'red', 'background-color':'yellow'}); // Zmiana kilku właściwości
    
    
    /* Każdy kolejny klik ma mieć wielkość czionki o 2px większą */
    
    var baseFontSize = 16;
    
    linki.each(function(){
        $(this).css({'font-size':baseFontSize + 'px'});
        baseFontSize += 2;
    });
    
    /* Dodawanie i usuwanie klas */
    $('header').addClass('blue-background');
    
    linki.removeClass('link');
    
    /* Iteracja po elementach - pętla each() */
    
    var listItems = $('.list-item');
    
    listItems.each(function(index){
        $(this).css({'margin-left': index * 10 + 'px'});
    });
    
    
    
    /* Zdarzenia w JQuery */
    $('h2').click(function(){
        console.log($(this).text());
    }); // pojedyncze zdarzenie
    
    
    /* Więcej niż jedno zdarzenie w elemencie */
    $('ul').on({
        'click': function() {
            $(this).css({'background-color':'green'})
        },
        'mouseover': function() {
            $(this).css({'font-size':'2em'});
        }
    });
    
   
    // Ćwiczenie
    $('#message').keypress(function(){
        $('#my-message').text($(this).val());
    });
    
    
    /* Obsługa animacji wbudowanych w JQuery */
    
//  eq() - dobranie się po indeksie do elementu, 
    /* $('.class').eq(0) to odpowiednik document.getElementByClassName('class')[0] */
    $('button').eq(0).click(function(){
//        $('.box').hide();
//      $('.box').show(); // Jeśli w css jest wpisana wartość display: none
        $('.box').show(1000, function(){
            animateSquare();
        });
    });
    
//    function animateSquare() {
//        $('.box').show(1000).hide(2000, animateSquare);
//    }
    
//    function animateSquare() {
//        $('.box').fadeIn(1000).fadeOut(2000, animateSquare);
//    }
    
    function animateSquare() {
//        $('.box').slideDown(200).slideUp(200, animateSquare);
        $('.box').toggle(1000);
    }
    
    /* Niestandardowa animacja */
    $('#blue-box-button').click(function(){
        $('.blue-box').animate({'width': '100%'}, 1000, animateSquare);
    });
    
    $('a').click(function(event){
        event.preventDefault();
        $(this).css('color','orange');
    });
    
    
    
    
    
    
    
    
    
});

