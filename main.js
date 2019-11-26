
light1 = document.getElementById('lt1')
light2 = document.getElementById('lt2')
light3 = document.getElementById('lt3')
light4 = document.getElementById('lt4')
button1 = document.getElementById('btn1')
button2 = document.getElementById('btn2')
button3 = document.getElementById('btn3')
button4 = document.getElementById('btn4')
displayed = document.getElementById('lightValues')
//displayed.style.display = 'none'

allLights = [
  light1,
  light2,
  light3,
  light4
]


button1.addEventListener('click', () => {
  //randomize array in here pass popped value
  clicky(allLights[0])//pass variable to randomize light value it can be done
})

button2.addEventListener('click', () => {
  clicky(allLights[1])
})

button3.addEventListener('click', () => {
  clicky(allLights[2])
})

button4.addEventListener('click', () => {
  clicky(allLights[3])
})

clicky = (light) => {
  value = light.getAttribute('value');
  let node = document.createElement('li');
  let textNode = document.createTextNode(value)
  node.appendChild(textNode)
  document.getElementById('lightValues').appendChild(node)
  glow(light)
  count()
}

count = () => {
  let solutions = [
    [1, 2, 3, 4],
    [2, 3, 4, 1],
    [3, 4, 1, 2],
    [4, 1, 2, 3]
  ]

  //use this to compare length
  let list = document.querySelectorAll('li')
  //building arrays to run solution comparisons
  let numbers = [];
  let convertedNumbers = [];
  let converted = Array.from(list);
  //converting data types from strings to integers
  converted.forEach(element => {
    item = element.innerText;
    numbers.push(item)
  });

  numbers.map(n => {
    let number = parseInt(n);
    convertedNumbers.push(number);
  });

  console.log(convertedNumbers);
  //function that runs all comparisons, renders a result and clears
  //everything to be run until program is closed
  if (list.length == 4 && solutions[0] == convertedNumbers) {
    setTimeout(() => {
      revGlow();
      i = 0;
      while (list.length != 0) {
        more = document.getElementsByTagName('li')[0];
        more.parentNode.removeChild(more);
        i++;
        console.log(more)
      }
    }, 500);
  }
}

glow = (light) => {
  light.style.background = 'lime'
}

revGlow = () => {
  allLights.map(l => {
    l.style.background = 'white'
  })
}

