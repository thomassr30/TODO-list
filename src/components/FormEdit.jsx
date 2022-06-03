import {useState} from 'react'

const FormEdit = ({todo, onUpdate, setisEdit}) => {

    const [newValue, setnewValue] = useState(todo.title)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleClickUpdateTodo = () => {
        onUpdate(todo.id, newValue)
        setisEdit(false)
    }

  return (
    <div className="card my-4">
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="row">
                        <div className="col-8">
                            <input type="text"
                            value={newValue}
                            onChange={(e) => setnewValue(e.target.value)}
                            className="form-control" />
                        </div>
                        <div className="col-3">
                            <button 
                            onClick={handleClickUpdateTodo}
                                className='btn btn-success rounded-pill'>
                                Actualizar
                            </button>
                        </div>
                </div>
            </form>
            
        </div>
    </div>
  )
}

export default FormEdit