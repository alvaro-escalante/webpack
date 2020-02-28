// Helper functions to manipulate DOM, format numbers, debounce, etc
export const
  // Select single element
  select     = el  => document.querySelector(el),
  // Select Nodelist array of elements
  selectAll  = els => document.querySelectorAll(els),
  // Select elements by id
  getId      = id  => document.getElementById(id),
  // Capitalise string
  caps       = str => str.charAt(0).toUpperCase() + str.slice(1),
  each       = (array, callback) => {
    for (let i = 0, j = array.length; i < j; i++) callback.call(i, array[i])
  },
  rect       = el => el.getBoundingClientRect(),
  getHeight = el => el.getBoundingClientRect().height,
  body      = document.body, 
  html      = document.documentElement,
  debounce  = (callback, ms) => {
    let timer = 0
    return function() {
      const self = this, args = arguments;
      clearTimeout(timer)
      timer = setTimeout(() => callback.apply(self, args), ms)
    }
  },
  // Multi addEventListener, takes multiple parameters ('click load change etc')
  listen     = (el, s, fn) => each(s.split(' '), e => el.addEventListener(e, fn, false))
