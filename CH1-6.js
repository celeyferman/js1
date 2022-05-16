A = {
    a: {
      aa: ""
    },
    b: {
      ba: "",
      bb: ""
    },
    c: {
      ca: "",
      cb: {
        cba: ""
      }
    }
}
  
function readProperties(obj) {
    for (const key of Object.keys(obj)) {
      const val = obj[key];
      console.log(val);
      readProperties(val);
    }
}
  
readProperties(A);
  