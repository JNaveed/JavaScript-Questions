// Asynchronous Even and Odd Numbers Example
function printEvenOddAsync() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = [];
  const oddNumbers = [];
  let i = 0;
  document.getElementById("evenOutputAsync").textContent = "";
  document.getElementById("oddOutputAsync").textContent = "";
  function processNext() {
    if (i < numbers.length) {
      setTimeout(function () {
        if (numbers[i] % 2 === 0) {
          evenNumbers.push(numbers[i]);
          document.getElementById("evenOutputAsync").textContent =
            evenNumbers.join(", ");
        } else {
          oddNumbers.push(numbers[i]);
          document.getElementById("oddOutputAsync").textContent =
            oddNumbers.join(", ");
        }
        i++;
        processNext();
      }, 200);
    }
  }
  processNext();
}

// Synchronous Examples
function runSync1() {
  const output = document.getElementById("syncOutput1");
  output.textContent = "";
  output.textContent += "Start\n";
  for (let i = 1; i <= 3; i++) {
    output.textContent += `Sync step ${i}\n`;
  }
  output.textContent += "End";
}

function runSync2() {
  const output = document.getElementById("syncOutput2");
  output.textContent = "";
  output.textContent += "Calculating sum...\n";
  let sum = 0;
  for (let i = 1; i <= 5; i++) {
    sum += i;
    output.textContent += `Added ${i}, sum is now ${sum}\n`;
  }
  output.textContent += `Final sum: ${sum}`;
}

function runSync3() {
  const output = document.getElementById("syncOutput3");
  output.textContent = "";
  output.textContent += "Blocking loop...\n";
  let count = 0;
  for (let i = 0; i < 1e7; i++) {
    count++;
  }
  output.textContent += `Loop finished, count = ${count}`;
}

function runSync4() {
  const output = document.getElementById("syncOutput4");
  output.textContent = "";
  output.textContent += "String concatenation...\n";
  let str = "";
  for (let i = 0; i < 5; i++) {
    str += "A";
    output.textContent += `Step ${i + 1}: ${str}\n`;
  }
  output.textContent += `Result: ${str}`;
}

function runSync5() {
  const output = document.getElementById("syncOutput5");
  output.textContent = "";
  output.textContent += "Synchronous function call...\n";
  function greet(name) {
    return `Hello, ${name}!`;
  }
  output.textContent += greet("World");
}

function runAsync1() {
  const output = document.getElementById("asyncOutput1");
  output.textContent = "";
  output.textContent += "Start\n";
  setTimeout(function () {
    output.textContent += "Step 1 (after 0.5s)\n";
    setTimeout(function () {
      output.textContent += "Step 2 (after 1s)\n";
      setTimeout(function () {
        output.textContent += "Step 3 (after 1.5s)\nEnd";
      }, 500);
    }, 500);
  }, 500);
}

function runAsync2() {
  const output = document.getElementById("asyncOutput2");
  output.textContent = "";
  output.textContent += "Start\n";
  setTimeout(function () {
    output.textContent += "This message appears after 1 second!";
    setTimeout(function () {
      output.textContent += "\nEnd (after another 1 second)";
    }, 1000);
  }, 1000);
}

function runAsync3() {
  const output = document.getElementById("asyncOutput3");
  output.textContent = "";
  output.textContent += "Counting to 3 with delay...\n";
  setTimeout(function () {
    output.textContent += "1\n";
    setTimeout(function () {
      output.textContent += "2\n";
      setTimeout(function () {
        output.textContent += "3";
      }, 500);
    }, 500);
  }, 500);
}

function runAsync4() {
  const output = document.getElementById("asyncOutput4");
  output.textContent = "";
  output.textContent += "Hello\n";
  setTimeout(function () {
    output.textContent += "World! (after 0.7s)";
  }, 700);
}

function runAsync5() {
  const output = document.getElementById("asyncOutput5");
  output.textContent = "";
  output.textContent += "Async math: 2 + 2 = ?\n";
  setTimeout(function () {
    output.textContent += "Answer: 4";
  }, 800);
}

// Even and Odd Numbers Example
function printEvenOdd() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = [];
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    } else {
      oddNumbers.push(numbers[i]);
    }
  }
  document.getElementById("evenOutputSync").textContent =
    evenNumbers.join(", ");
  document.getElementById("oddOutputSync").textContent = oddNumbers.join(", ");
}

// Even and Odd Indeces Example

function separateNumbersByIndex(numbers) {
  const evenIndices = [];
  const oddIndices = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
      evenIndices.push(numbers[i]);
    } else {
      oddIndices.push(numbers[i]);
    }
  }
  return {
    evenIndices,
    oddIndices,
  };
}

function displaySeparatedNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const separatedArrays = separateNumbersByIndex(numbers);

  const evenOutputElement = document.getElementById("evenIndices");
  const oddOutputElement = document.getElementById("oddIndices");

  evenOutputElement.textContent = separatedArrays.evenIndices.join(", ");
  oddOutputElement.textContent = separatedArrays.oddIndices.join(", ");
}

////////////////////////////////////////////////////////////////////////

function separateNumbersByIndex(numbers) {
  const evenIndices = [];
  const oddIndices = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
      evenIndices.push(numbers[i]);
    } else {
      oddIndices.push(numbers[i]);
    }
  }
  return {
    evenIndices,
    oddIndices,
  };
}
function displaySeparatedNumbersAsync() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenOutputElement = document.getElementById("evenIndices");
  const oddOutputElement = document.getElementById("oddIndices");

  // Clear previous results
  evenOutputElement.textContent = "";
  oddOutputElement.textContent = "";

  const evenResults = [];
  const oddResults = [];

  // Use a loop with setTimeout to process each number asynchronously
  for (let i = 0; i < numbers.length; i++) {
    setTimeout(() => {
      if (i % 2 === 0) {
        evenResults.push(numbers[i]);
        evenOutputElement.textContent = evenResults.join(", ");
      } else {
        oddResults.push(numbers[i]);
        oddOutputElement.textContent = oddResults.join(", ");
      }
    }, i * 200); // 200ms delay for each number
  }
}
