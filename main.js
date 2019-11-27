//disable buttons after they are clicked
//enable buttons after the comparisons have been made
light1 = document.getElementById('lt1')
light2 = document.getElementById('lt2')
light3 = document.getElementById('lt3')
light4 = document.getElementById('lt4')
button1 = document.getElementById('btn1')
button2 = document.getElementById('btn2')
button3 = document.getElementById('btn3')
button4 = document.getElementById('btn4')
displayed = document.getElementById('lightValues')

displayed.style.display = 'none'

allLights = [
  light1,
  light2,
  light3,
  light4
]

allButtons = [
  button1,
  button2,
  button3,
  button4
]


//main function
count = () => {
  let solutions = [
   1234,
   2341,
   3412,
   4123
  ]

  //use this to compare length
  let list = document.querySelectorAll('li')
  //building arrays to run solution comparisons
  let numbers = [];
  let convertedNumbers = [];
  let converted = Array.from(list);
  //converting data types from strings to integers
  converted.forEach(e => {
    item = e.innerText;
    numbers.push(item)
  });

  numbers.map(n => {
    let number = parseInt(n);
    convertedNumbers.push(number);
  });
  
  let thing = convertedNumbers.join('');
 
  
  //function that runs all comparisons, renders a result and clears
  //everything to be run until program is closed
  if (list.length == 4) {
    if(thing == solutions[0] || 
       thing == solutions[1] || 
       thing == solutions[2] || 
       thing == solutions[3]) {

      setTimeout(() => {
        right(allLights)
        clearList();
      }, 500);
      timer()

    } else {

      setTimeout(() => {
        wrong(allLights);
        clearList();
      }, 500);
      timer()
    }
    allButtons.map(b => {
      b.disabled = false;
    });
  }
}

//clears the unordered list from the html
clearList = () => {
  first = document.querySelectorAll('li')[0];
  second = document.querySelectorAll('li')[1];
  third = document.querySelectorAll('li')[2];
  fourth = document.querySelectorAll('li')[3];

  allElements = [
    first,
    second,
    third,
    fourth
  ];

  allElements.map(e => {
    e.parentNode.removeChild(e); 
  });

}

//what the light changes to when a button is clicked
glow = (l) => {
  l.style.background = '#00d9ff';
}

//the color the lights change to when the combination is correct
right = (alllight) => {
  alllight.map(l => {
    l.style.background = 'lime';
  });
}

//the color the lights change to when the combination is not correct
wrong = (alllight) => {
  alllight.map(l => {
    l.style.background = 'red';
  });
}

//setting the light color to its original state
revGlow = () => {
  allLights.map(l => {
    l.style.background = 'white';
  });
}

//waits before the light color changes back to its original state
timer = () => {
  setTimeout(() => {
    revGlow();
  }, 1200);
}

//creates the text values of the html from the light values
clicky = (light, button) => {
  value = light.getAttribute('value');
  let node = document.createElement('li');
  let textNode = document.createTextNode(value);
  node.appendChild(textNode);
  document.getElementById('lightValues').appendChild(node);
  glow(light);
  button.disabled = true;
  count();
}



button1.addEventListener('click', () => {
  clicky(allLights[0], button1)//pass variable to randomize light value it can be done
})

button2.addEventListener('click', () => {
  clicky(allLights[1], button2)
})

button3.addEventListener('click', () => {
  clicky(allLights[2], button3)
})

button4.addEventListener('click', () => {
  clicky(allLights[3], button4)
})

