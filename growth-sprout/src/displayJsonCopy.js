// import React, { Component } from "react";
const fetch = require("node-fetch");
//import raw from '../src/plantInfo.txt';


// function print() {
//     var id = document.getElementById("abc");
//     var printwindow = window.open('', 'PRINT', 'height=400,width=600');
//     printwindow.document.write('</head><body >');
//     printwindow.document.write("<pre>" + id.textContent + "</pre>");
//     printwindow.document.write('</body></html>');
//     printwindow.document.close(); // necessary for IE >= 10
//     printwindow.focus(); // necessary for IE >= 10
//     printwindow.print();
//     printwindow.close();
// }
// render() {
//     return (
//         <div>
//             <button onclick="load()">Load</button>
//             <button onclick="print()">Print</button>
//         </div>
//     );
// };

function readTextFile(filename) {
    // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest(); // XMLHttpRequest (often abbreviated as XHR) is a browser object accessible in JavaScript that provides data in XML, JSON, but also HTML format, or even a simple text using HTTP requests.
    // var rawFile = new XMLHttpRequest();
    // rawFile.open("GET", file, false); // open with method GET the file with the link file ,  false (synchronous)
    // rawFile.onreadystatechange = function () {
    //     if (rawFile.readyState === 4) // readyState = 4: request finished and response is ready
    //     {
    //         if (rawFile.status === 200) // status 200: "OK"
    //         {
    //             var allText = rawFile.responseText; //  Returns the response data as a string
    //             console.log(allText); // display text on the console
    //         }
    //     }
    // }
    // rawFile.send(null); //Sends the request to the server Used for GET requests with param null
    fetch('../src/test.json')
        .then(r => r.json())
        .then(t => console.log(t))

    console.log("i")
}
fetch('../src/test.json')
    .then(r => r.json())
    .then(t => console.log(t))


readTextFile(''); //<= Call function ===== don't need "file:///..." just the path 
export default readTextFile;
