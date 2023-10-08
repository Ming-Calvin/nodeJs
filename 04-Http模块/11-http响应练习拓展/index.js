let td = document.querySelectorAll('td')

td.forEach(item => item.onclick = function (){
  this.style.backgroundColor = '#fff'
})
