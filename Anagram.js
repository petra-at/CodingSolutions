/**Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams.
 * Any characters can be deleted from either of the strings.
*/

function makeAnagram(a, b) {
    let sorted_s1=(a.split("")).sort();
    let sorted_s2=(b.split("")).sort(); 

    if(sorted_s1==sorted_s2)
        return 0; 
    else
    {
       const s1=sorted_s1.length;
       const s2=sorted_s2.length; 
       let totalLength  = s1 + s2; 
       let matches = 0; 
       
       sorted_s1.forEach(element => {
           for(let i =0;i<sorted_s2.length;i++)
           {if(sorted_s2[i]==element){ 
           matches++;
           sorted_s2.splice(i,1);
           break;
           }
           }
           })
       if(matches == 0)
        return totalLength;
        else 
        return totalLength - (matches *2);
    }

}