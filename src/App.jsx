import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [num,setNum] = useState(1);

  return <>
  <button onClick={() => setNum(1)}>1</button>
  <button onClick={() => setNum(2)}>2</button>
  <button onClick={() => setNum(3)}>3</button>
  <button onClick={() => setNum(4)}>4</button>
  <Todo id={num} />
  </>

  // return <div>
  //   {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  // </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({}) 

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async function(res) {
        const json = await res.json();
        setTodo(json.todo);
      })
  }, [id])

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;