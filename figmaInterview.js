// Given an input string and a query, implement a function `highlight`
// that highlights all occurrences of the query with a bold tag:
//
// highlight("fig", "configure figma") => "con<b>fig</b>ure <b>fig</b>ma"
//
// Brute force solutions are welcome. Feel free to Google or use any helper
// methods/libraries (eg: `text.indexOf(query)` or `text.substring(i, j)`).
// highlight("fig", "configure figma") => "con<b>fig</b>ure <b>fig</b>ma"
//"fig", "confi"

function nicelyStyled(query) {
  return "<b>" + query + "</b>";
}

// a string for result
// checking if there is a match for the pattern in the text
// if they match add the query into the result
// otherwise modify result

function highlight(query, text) {
    let result = "";
    for(let i = 0; i < text.length; i++) {
        let matched = true;
        for(let j = 0; j < query.length; j++) {
          if(query[j] !== text[i + j]) {
            matched = false;
            break;
          }
        }
        
        if(matched) {
          result += nicelyStyled(query);
          i += query.length - 1;          
        } else {
          result += text[i];
        }
      
    }
  
    return result;
}

console.log(highlight("fig", "configure figma freely"));
console.log(highlight("fig", "configure figma fireely"));
