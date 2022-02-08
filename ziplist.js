function zipList(list1, list2){
  let newlist = [];
  for(let i = 0; i < list1.length; i++ ){
    newlist.push(list1[i]);
    newlist.push(list2[i]);
  }
  return newlist;
}


let a = [1,2,3];
let b = ["w", "o", "w"];

console.log(zipList(a,b));

function zipListTheSimpleWay(list1, list2){
    return _.flatten(_.zip(list1,list2));
}

console.log(zipListTheSimpleWay(a,b));

