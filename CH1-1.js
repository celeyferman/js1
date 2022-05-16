function sortingData(dataArray, parameter, flag) {
    dataArray.sort();
    if (parameter === "length") {
        dataArray.sort(function (a,b) {
          return a.length - b.length;
        });
    }
    if (parameter === "consonants") {
      dataArray.sort(function (a,b) {
        const acons = a.match(/[^aeiou]/gi);
        const bcons = b.match(/[^aeiou]/gi);
        if (acons > bcons) {
          return 1;
        }
        if (acons < bcons) {
          return -1;
        }
        return 0;
      });
    }
    if (flag) {
      dataArray.reverse();
    }
    return dataArray;
}
  
const array = ["water", "fire", "earth", "wind"];
console.log(sortingData(array, "consonants", true));  