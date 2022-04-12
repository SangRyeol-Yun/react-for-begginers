import { useState, useEffect } from "react";

function App() {
    const [toDo, setTodo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos((currentArray) => [...currentArray, toDo]);
        setTodo("");
    };

    useEffect(() => {
        console.log(toDos);
    }, [toDos]);

    return (
        <div>
            <h2>My ToDo List ({toDos.length})</h2>
            <form onSubmit={onSubmit}>
                <input value={toDo} onChange={onChange} type="text" />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
