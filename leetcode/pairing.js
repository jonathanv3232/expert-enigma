function longpress(name, typed) {
    if(typed.length < name.length) return false;
    
    var i = 0;
    var j = 0;

    while(i+j < name.length + typed.length) {
        var count1 = 0;
        var count2 = 0;    
        
        while(name[i] === typed[j]) {
            count2++;
            j++;
        }

        while(name[i] === typed[j-1]) {
            count1++;
            if(count1 > count2) return false;
            i++;
        }
        if(typed[j] != name[i]) return false;
    }
   
   return true;

}
let res = longpress('saeed', 'ssaaedd');
console.log(res);
