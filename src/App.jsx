

const App = () => {
  let x = 5;
  let y  = 6;
  const names = ['Brad', 'Mary', 'Joe', 'Sara'];

  return (
    <>
      <h1 className="text-3xl font-bold">Hello Coder!</h1>
      <p>X = {x} and y = {y}. And x + y = {x + y}</p>
      <p>Hello {names}</p>
    </>
  )
}

export default App