var isDate = function (input) {
  // If input is a Date object
  if (input instanceof Date && !isNaN(input.getTime())) {
    return true;
  }

  // If input is not a Date object, try parsing it
  const parsedDate = new Date(input);
  return !isNaN(parsedDate.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
     