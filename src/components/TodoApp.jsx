import React, {useState} from 'react'

const TodoApp = () => {

    const [title, settitle] = useState('')
    const [todos, settodos] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        settodos([...todos, newTodo])
        settitle('')
    }


  return (
      <div>
           <div className='container mt-5'>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-8">
                            <input 
                                type="text" 
                                className='form-control' 
                                value={title} 
                                onChange={(e) => settitle(e.target.value)}
                                />
                        </div>
                        <div className="col-4">
                            <button 
                            onClick={handleSubmit}
                            className='btn btn-success'
                            >
                                Ingresar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="container mt-5">
                        
                        {
                            todos.map(todo => (
                                <div key={todo.id} className="card my-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-8">
                                                {todo.title}
                                            </div>
                                            <div className="col-4">
                                                <button className='btn btn-warning me-3 rounded-pill'>
                                                    Editar
                                                </button>
                                                <button className='btn btn-danger rounded-pill'>
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            )
                        }
                </div>
           
      </div>
   
  )
}

export default TodoApp