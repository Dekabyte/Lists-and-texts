$('body').append(
'<h1>Hello Wohhhhhhhhhhhhhhhhhhhhhhhhrld!</h1>'
);

let tomb = ['Pisti', 'Laci', 'Viki', 'Andris', 'Vivien'];

// Ez a jó, de még bold nélkül: tomb.forEach(nev => $( 'ul' ).append( '<li>' + nev + '</li>' ))

tomb.forEach(nev => {
if (nev != 'Laci') {
    $( 'ul' ).append( '<li>' + nev + '</li>' );
        } else {
    $( 'ul' ).append( '<li>' + '<b>' + nev + '</b>' + '</li>' );
}});


// Teljes megoldás, de for ciklussal:
//for (let I = 0; I < tomb.length; I++) {
//    if (tomb[I] != 'Laci') {
//        $( 'ul' ).append( '<li>' + tomb[I] + '</li>' );
//         } else {
//        $( 'ul' ).append( '<li>' + '<b>' + tomb[I] + '</b>' + '</li>' );
//    }
//}

let additionalBlock = {
title: "Added with javascript",
text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$( 'h1' ).append( additionalBlock.title );
$( 'p' ).append( additionalBlock.text );

