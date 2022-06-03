import { useState } from "react"
import FormEdit from "./FormEdit"

const Todo = ({todo, settodos, todos}) => {

    const [isEdit, setisEdit] = useState(false)

    const handleUpdate = (id, value) => {
        const temp = [...todos]
        const item = temp.find(item => item.id === id)
        item.title = value
        settodos(temp)
    }

    const handleDelete = (id) => {
        const temp = todos.filter(item => item.id !== id)
        settodos(temp)
    }

  return (
    <>
        {
            isEdit ? (
                <FormEdit todo={todo} onUpdate={handleUpdate} setisEdit={setisEdit} />
            ): (
                <div className="card my-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                {todo.title}
                            </div>
                            <div className="col-4">
                                <button 
                                    onClick={() => setisEdit(true)}
                                    className='btn btn-warning me-3 rounded-pill'>
                                    Editar
                                </button>
                                <button 
                                    onClick={() => handleDelete(todo.id)}
                                    className='btn btn-danger rounded-pill'>
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default Todo