const objA = {
    firstName: "John",
    lastName: "Smith",
    age: 28,
    profession: "Teacher",
    subject: "Mathematics"
}
let objB = {
    
}
  
function copyProp(obj1, obj2, selectProperties) {
    if (selectProperties && Array.isArray(selectProperties)) {
      for (const x of selectProperties) {
        obj2[x] = obj1[x];
      }
    }
    else {
      Object.assign(obj2, obj1)
    }
    return obj2;
}
  
console.log(objB);
objB = copyProp(objA,objB, ["firstName", "lastName"]);
console.log(objB);
  