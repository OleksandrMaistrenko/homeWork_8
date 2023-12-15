// Створити масив чисел, елементи якого задає користувач. Вивести суму цих чисел.

// За основу взяти задачку з урока, де користувач вводить всі елементи одним рядком.

// cancel має припиняти виконання програми, а порожній рядок не повинен сприйматися як 0

const lengthInput = prompt("Enter an array length");

const length = +lengthInput;

if (lengthInput === null) {
  alert("Goodbye");
} else if (!lengthInput.trim() || length <= 0 || !Number.isInteger(length)) {
  alert("Error: invalid array length");
} else {
  const userArray = [];
  for (let i = 0; i < length; i++) {
    userArray[i] = prompt(`Enter ${i + 1} element of array`);
    if (userArray[i] === null) {
      userArray.length--;
      alert("Goodbye");
      break;
    }
  }
  let sumArray = 0;
  for (let i = 0; i < userArray.length; i++) {
    sumArray += +userArray[i];
  }
  alert(`Sum of array elements: ${sumArray}`);
}
