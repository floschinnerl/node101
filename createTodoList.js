const fs = require('fs')
const moment = require('moment')

const todoList = [
      {
          text: 'brush teeth',
          date: moment('8.12.2020, 22:22', 'DD.MM.YYYY, hh:mm'),
          id: 1,
          done: true
      },
      {
          text: 'prepre human-cooperation presentation',
          date: moment('11.12.2020, 13:30', 'DD.MM.YYYY, hh:mm'),
          id: 2,
          done: false
      },
      {
          text: 'work on bandlogo',
          date: moment('13.12.2020, 17:30', 'DD.MM.YYYY, hh:mm'),
          id: 3,
          done: false
      }
]

const json = JSON.stringify(todoList);
fs.writeFileSync('todo.json', json);