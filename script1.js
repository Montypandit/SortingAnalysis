const arrayContainer = document.getElementById("array-container");
let array = [];
let arraySize = 50;

// Generate a random array of bars
function generateArray() {
  array = [];
  arrayContainer.innerHTML = "";
  
  for (let i = 0; i < arraySize; i++) {
    const barHeight = Math.floor(Math.random() * 300) + 10;
    const bar = document.createElement("div"); 
    bar.classList.add("bar");
    bar.style.height = `${barHeight}px`;
    array.push(bar);
    arrayContainer.appendChild(bar);
  }
}

async function bubbleSort() {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      array[j].style.backgroundColor = "red";
      array[j + 1].style.backgroundColor = "red";
      
      if (parseInt(array[j].style.height) > parseInt(array[j + 1].style.height)) {
        await swap(j, j + 1);
      }
      
      array[j].style.backgroundColor = "#3498db";
      array[j + 1].style.backgroundColor = "#3498db";
    }
    array[array.length - 1 - i].style.backgroundColor = "#2ecc71";
  }
}

async function insertionSort() {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && parseInt(array[j].style.height) < parseInt(array[j - 1].style.height)) {
      array[j].style.backgroundColor = "red";
      array[j - 1].style.backgroundColor = "red";
      
      await swap(j, j - 1);
      
      array[j].style.backgroundColor = "#3498db";
      array[j - 1].style.backgroundColor = "#3498db";
      array[i].style.backgroundColor = "#2ecc71";
      j--;
    }
    
  }
}

async function selectionSort() {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (parseInt(array[j].style.height) < parseInt(array[minIndex].style.height)) {
        minIndex = j;
      }
    }
    
    if (minIndex !== i) {
      await swap(i, minIndex);
    }
    array[i].classList.add("sorted");
  }
}

async function swap(i, j) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let tempHeight = array[i].style.height;
      array[i].style.height = array[j].style.height;
      array[j].style.height = tempHeight;
      resolve();
    }, 100);
  });
}

// Initial call to generate the array
//generateArray();
