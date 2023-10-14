let calcBtn = document.querySelector('#calculate')
calcBtn.addEventListener('click', () => {


  const width = Number(document.querySelector('#width').value)
  const depth = Number(document.querySelector('#depth').value)
  const height = Number(document.querySelector('#height').value)

  const paintType = document.querySelector('#quality').selectedOptions[0].text
  const paintQuality = document.querySelector('#quality').selectedOptions[0].value

  let carpet = Math.ceil((width * depth) / 9) // in yards
  let tackStrip = (width + depth) * 2 // in feet
  let walls = ((width * height) + (depth * height)) * 2 // in square feet
  walls = Math.ceil(walls / paintQuality) // in gallons (semi gloss)
  let ceiling = Math.ceil((width * depth) / paintQuality) // in gallons (flat paint)
  let primer = ceiling + walls // in gallons (primer)

  document.querySelector('#paint').innerHTML = ''
  document.querySelector('#carpet').innerHTML = ''

  addLi('#paint', `${primer} gallons of primer for walls and ceiling`)
  addLi('#paint', `${walls} gallons of semi-gloss paint for walls`)
  addLi('#paint', `${ceiling} gallons of flat paint for ceiling`)

  addLi('#carpet', `${carpet} yards of carpet`)
  addLi('#carpet', `${carpet} yards of carpet padding`)
  addLi('#carpet', `${tackStrip} feet of tack strip`)

})


const addLi = (list, message) => {
  let ul = document.querySelector(list)
  let li = document.createElement('li')
  li.textContent = message
  ul.appendChild(li)
}