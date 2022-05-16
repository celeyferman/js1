function countLength(entry) {
    let length;
    if (!isNaN(entry)) {
      length = Math.log(entry) * Math.LOG10E + 1 | 0;
    } else {
      if (typeof(entry)==="string") {
        length = entry.match(/[aeiou]/gi).length;
      } else {
        return "I can only receive numbers or strings";
      }
    }
    return length;
}
  
console.log(countLength(58679375)); //8
console.log(countLength("Hello, world!")); //3
  