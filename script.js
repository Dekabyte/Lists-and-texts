$('body').append(
'<h1>Hello Wohhhhhhhhhhhhhhhhhhhhhhhhrld!</h1>'
);

let tomb = ['Laci', 'Viki', 'Andris', 'Vivien'];

tomb.forEach(nev => $( 'ul' ).append( '<li>' + nev + '</li>' ))

// if (nev = 'Laci') { nev = '<b>' + nev + '</b>' };

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$( 'h1' ).append( additionalBlock.title );
$( 'p' ).append( additionalBlock.text );

