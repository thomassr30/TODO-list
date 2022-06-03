import React from 'react'

const Todo = ({todo}) => {
  return (
    <div className="card my-4">
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
}

export default Todo