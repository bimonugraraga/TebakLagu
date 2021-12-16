function splitTodos(todos){
  // console.log(todos)
  let output = []

  for (let i = 0; i < todos.length; i++){
    let tempArray = []
    let temp = ""

    for (let j = 0; j < todos[i].length; j++){
      if (todos[i][j] === "|"){
        tempArray.push(temp)
        temp = ""
      } else {
        temp += todos[i][j]
      }

      if (j === todos[i].length-1){
        tempArray.push(temp)
        // tempArray.push("")
      }
    }
    output.push(tempArray)

    for (let j = 0; j < output.length; j++){
      if (output[j].length === 1){
        output[j].push("")
      }
    }
  }
  return output

}

function filterTodos(todos){
  // console.log(todos)
  let output = []

  for (let i = 0; i < todos.length; i++){
    // console.log(todos[i])

    if (todos[i][1] === ""){
      continue
    } else {
      output.push(todos[i])
    }
  }

  return output
  
}

function todoStatus(todos, date){
  // console.log(todos)

  for (let i = 0; i < todos.length; i++){
    let tgl = todos[i][1][0] + todos[i][1][1]
    if (Number(tgl) > date){
      todos[i].push("pending")
    } else if (Number(tgl) < date){
      todos[i].push("done")
    } else {
      todos[i].push("ongoing")
    }
  }

  return todos

}

function todoStatistic(todos){
  // console.log(todos)

  let objTodo ={}

  for (let i = 0; i < todos.length; i++){
    let doing = todos[i][2]

    if (!objTodo[doing]){
      objTodo[doing] = 0
    }

    objTodo[doing]++
  }
  
  return objTodo
}

function generateTodo(todos, date){
  // console.log(todos)

  let splitted = splitTodos(todos)
  // console.log(splitted)
  let filtered = filterTodos(splitted)
  // console.log(filtered)
  let status = todoStatus(filtered, date)
  // console.log(status)
  let statistic = todoStatistic(status)
  // console.log(statistic)

  let output = {
    statistic: statistic,
    todos: [],
  }

  for (let i = 0; i < status.length; i++){
    // console.log(status[i])
    let obj = {
      name: status[i][0],
      dueDate: status[i][1],
      status: status[i][2]
    }

    output.todos.push(obj)
  }

  return output
  
}

const todos = [
  'Buy car signal light|16/1/2021',
  'Return bycycle brake|17/1/2021',
  'Buy A4 Paper|',
  'Install Garage Shed|18/1/2021',
  'Service PC|18/1/2021',
  'Fix rooftops|19/1/2021',
  'Watching TV series|19/1/2021',
  'Buy new toys|19/1/2021',
  'Playing Mobile Legends|'
]
console.log(generateTodo(todos, 18))
