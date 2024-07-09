// iife imediately invoked function expressions.

(function chai(){
    console.log(`DB CONNECTED` )
})();



// WHILE RUNNING UNNAMED IIFE E HAVE TO PUT (;) SEMI-COLON AFTER FIRST IIFE DECLARATION.
(() => {
    console.log(`DB CONNECTED TWO`);
}) ()
