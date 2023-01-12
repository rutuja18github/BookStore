const student=[{'name':'Rutuja','Department':'HR'},
    {'name':'Ritika','Department':'IT'},
    {'name':'Shiv','Department':'HR'}
]
let modified=student.filter(item => item.Department =='HR')
modified.forEach(a =>console.log(a.name))
console.log(modified)