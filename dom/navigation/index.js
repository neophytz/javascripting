// console.log("hello");

//parentNode
//childNodes[nodeNumber]
//nextSibling
//firstChild
//lastChild
//previousSibling


// var scriptRef = document.getElementById('script_tag');
// console.log(scriptRef.parentNode);

// var paraRef = document.getElementsByTagName('p')[0];
// console.log(paraRef.parentNode.parentNode)

var bodyRef = document.getElementsByTagName('body')[0];
// console.log(bodyRef.childNodes[1])

// console.log(bodyRef.firstChild);
// console.log(bodyRef.lastChild);

// console.log(bodyRef.firstChild.nextSibling.nextSibling)

console.log(bodyRef.lastChild.previousSibling)