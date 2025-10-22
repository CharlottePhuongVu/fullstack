/*const App = () => {
  console.log('Charlotte testing so this print before the hello world thingy?')
  //nope, it print in the inspect/console, not on the webpage
  return (
    <div>
      <p>Hello, World!</p>
    </div>
  );
}

export default App;*/

/*const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

export default App;*/

/*const Hello = () => {
  return (
    <div>
      <p>Hello, Charlotte!</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Hello from the other side</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App;'*/

/*const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old </p>
    </div>
  )
}

const App = () => {
  const name = 'Molly'
  const age = 610

  return (
    <div>
      <h1>The same old Hello stuff here</h1>
      <Hello name='Char.' age={2+3} />
      <Hello name='random' age={3+4}/>
      <Hello name={name} age={age} />
    
    </div>
  )
}

export default App;*/

/*const footer = () => {
  return(
    <div>
      greeting app shw created by <a href='https://github.com/mluukkai'>mluukai</a>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Hello again</h1>
     
      <footer/>
    </div>
  )
}
export default App; wrong ver */

/*const Footer = () => {
  return(
    <div>
      greeting app shw created by <a href='https://github.com/mluukkai'>mluukai</a>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Hello again</h1>
     
      <Footer/>
    </div>
  )
}
export default App; */

/*const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you have existed for {props.age} years </p>
    </div>
  )
}

const App = () => {
  
  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Charlotte' age={2+1} />
      <Hello name='Molly' age={610} />
    </>
  )
}

export default App;*/

/*const App = () => {
  const friends = [
    {
      name: 'a', age: 1
    },
    {
      name: 'b', age: 2
    },
    {
      name: 'c', age: 3
    }
  ]

  return (
    <>
      <h1>Friends exercise of do not render objects</h1>
      <p>Friend num1 is {friends[0].name} and the age is {friends[0].age} </p>
      <p>{friends[1].name} {friends[1].age} </p>
      <p>{friends[2].name} {friends[2].age} </p>
    </>
  )
}

export default App;*/

/*const App = () => {
  const friends = [ 'a', 'b', 'c' ]
  console.log(friends)

  return (
    <>
      <h1>Friends exercise of render list</h1>
      <p>{friends}</p>
      
      
    </>
  )
}

export default App;*/
    