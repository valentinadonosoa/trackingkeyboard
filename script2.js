let textContainer = document.querySelector(".textContainer");
let deleteKey = document.querySelector(".delete");
let enterKey = document.querySelector(".enter");
let spaceKey = document.querySelector(".space");
let capsLock = document.querySelector(".capslock");
let allKey = document.querySelectorAll(".key");
let isCaps = false;

deleteKey.addEventListener("click", function () {
  let textContainerContent = textContainer.innerText;
  if (textContainerContent.length == 0) {
    return;
  }
  console.log(textContainerContent);
  let newContent = textContainerContent.slice(0, textContainerContent.length - 1);
  textContainer.innerText = newContent;
})

enterKey.addEventListener("click", function () {
  let content = textContainer.innerText;
  let newContent = content + "\n";
  textContainer.innerText = newContent;
})

spaceKey.addEventListener("click", function () {
  let content = textContainer.innerText;
  let newContent = content + '\u00A0';
  textContainer.innerText = newContent;
})

capsLock.addEventListener("click", function () {
  if (isCaps) {
    capsLock.classList.remove("active");
    for (let key of allKey) {
      if (key.classList.contains("delete") || key.classList.contains("enter") ||
        key.classList.contains("space") || key.classList.contains("capslock")) {
      } else
        key.innerText = key.innerText.toLowerCase();
    }
  } else {
    capsLock.classList.add("active");
    for (let key of allKey) {
      if (key.classList.contains("delete") || key.classList.contains("enter") ||
        key.classList.contains("space") || key.classList.contains("capslock")) {
      } else
        key.innerText = key.innerText.toUpperCase();
    }
  }
  isCaps = !isCaps
})

for (let key of allKey) {
  key.addEventListener("click", function () {
    if (key.classList.contains("delete") || key.classList.contains("enter") ||
      key.classList.contains("space") || key.classList.contains("capslock")) {
      return;
    }
    textContainer.innerText += key.innerText;
  })
}

var ce = document.querySelector('[contenteditable]')
ce.addEventListener('paste', function (e) {
  e.preventDefault()
  var text = e.clipboardData.getData('text/plain')
  document.execCommand('insertText', false, text)
})

let myWindSizeWidth;
let myWindSizeHeight;
let myTracking;

function customMap(value, start1, stop1, start2, stop2) {
  return start2 + (stop2 - start2) / ((value - start1) / (stop1 - start1))
}

window.addEventListener('resize', () => {
  console.log('Width:', window.innerWidth, 'Height:', window.innerHeight);
  myWindSizeWidth = window.innerWidth
  myWindSizeHeight = window.innerHeight

  myTracking = customMap(myWindSizeWidth, 1500, 500, 1, 8)

  console.log('tracking:' + myTracking)

  textContainer.style.letterSpacing = myTracking + 'px'

});

// document.getElementById('textcontainer').addEventListener("keydown", (event) => {
//   if (event.isComposing || event.key === 48) {
//     return;
//   }
//   if (event.isComposing || event.key === 49) {
//     return;
//   }
//   if (event.isComposing || event.key === 51) {
//     return;
//   }
//   if (event.isComposing || event.key === 52) {
//     return;
//   }
//   if (event.isComposing || event.key === 53) {
//     return;
//   }
//   if (event.isComposing || event.key === 54) {
//     return;
//   }
//   if (event.isComposing || event.key === 55) {
//     return;
//   }
//   if (event.isComposing || event.key === 56) {
//     return;
//   }
//   if (event.isComposing || event.key === 57) {
//     return;
//   }
//   if (event.isComposing || event.key === 65) {
//     return;
//   }
//   if (event.isComposing || event.key === 66) {
//     return;
//   }
//   if (event.isComposing || event.key === 67) {
//     return;
//   }
//   if (event.isComposing || event.key === 68) {
//     return;
//   }
//   if (event.isComposing || event.key === 69) {
//     return;
//   }
//   if (event.isComposing || event.key === 70) {
//     return;
//   }
//   if (event.isComposing || event.key === 71) {
//     return;
//   }
//   if (event.isComposing || event.key === 72) {
//     return;
//   }
//   if (event.isComposing || event.key === 73) {
//     return;
//   }
//   if (event.isComposing || event.key === 74) {
//     return;
//   }
//   if (event.isComposing || event.key === 75) {
//     return;
//   }
//   if (event.isComposing || event.key === 76) {
//     return;
//   }
//   if (event.isComposing || event.key === 77) {
//     return;
//   }
//   if (event.isComposing || event.key === 78) {
//     return;
//   }
//   if (event.isComposing || event.key === 79) {
//     return;
//   }
//   if (event.isComposing || event.key === 80) {
//     return;
//   }
//   if (event.isComposing || event.key === 90) {
//     return;
//   }
//   if (event.isComposing || event.key === 'Enter') {
//     return;
//   }
//   if (event.isComposing || event.key === '20') {
//     return;
//   }
//   if (event.isComposing || event.key === '8') {
//     return;
//   }
//   if (event.isComposing || event.key === '32') {
//     return;
//   }
// });

console.log("Hiiiiiiiii");

