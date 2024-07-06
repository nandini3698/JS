# JS

Javascript Execution Notes:

Web browsers execute instructions written in JS to make the websites interactive and dynamic
Every browser has a builtin program called JS Engine to interpret and execute JS code
Eg. 
Google Chrome’s V8
Mozilla Firefox's SpiderMonkey
Apple Safari's JavaScriptCore
JS can be embedded in a web page either by directly writing JS code within HTML or by creating separate JS files and then referencing them in HTML code. It can be done using script tags of HTML
When the browser encounters JS code while parsing the HTML, the JS engine takes over and executes the code before continuing to render the rest of the page
This can involve manipulating the web page's content, responding to user interactions (clicks, scrolls, etc.), or performing calculations behind the scenes
JS allows for dynamic features like interactive elements, animations, seamless user experiences
To execute standalone JS code, many environments are now available. Eg. Node JS is one such open source, cross-platform JS runtime environment, Deno JS
Original JS documentation is found at: tc39.es
Documentations easy to refer: MDN

Two Ways to print
console.log()
console.table([])
