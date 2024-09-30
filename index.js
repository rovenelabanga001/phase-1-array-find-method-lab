// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  const superbowlWin  = (array) => {
    const win = array.find(array => array.result === "W")
    return win ? win.year : undefined;
  }

  console.log(superbowlWin(record))