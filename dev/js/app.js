window.onload = () => {
    
    // set up initial variables
    let initial = document.getElementById(`initial`);
    let final = document.getElementById(`final`);
    let content = ``;

    let input = parseInt(window.prompt(`What size should the matrix be?`));

    let mainArray = new Array(input);
    console.log(`Array size is ${input.length}`);

    let len = mainArray.length;     // ease of use with calculations


    // display initial matrix
    content = `<table>`;

    for (let i = 0; i < len; i++) {
        content += `<tr>`;

        for (let j = 0; j < len; j++) {
            content += `<td>${1 + j + (i*len)}</td>`;
        }

        content += `</tr>`;
    }

    content += `</table>`;

    initial.innerHTML = content;


    // display final (flipped) matrix
    content = `<table>`; 

    for (let i = 0; i < len; i++) {
        content += `<tr>`;

        for (let j = 0; j < len; j++) {

            let currNum = j + (i*len);  // set as default value for now

            if (!((len + ((len - 1) * i)))) {   // so the ones from northeast to southwest corners aren't affected
                
            }
            currNum = len*len - currNum;
            content += `<td>${currNum}</td>`;
        }

        content += `</tr>`;
    }

    content += `</table>`;

    final.innerHTML = content;

};
