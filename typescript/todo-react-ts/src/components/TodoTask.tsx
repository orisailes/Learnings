import React, { ReactElement } from 'react'
import { IState } from '../interface'

interface Props {
    note: IState['note']
}

function TodoTask({note}:Props): ReactElement {


    return (
        <div className="individual-task">
            <p>{note.task}</p>
            <p>{note.deadline}</p>
            <button>
                X
            </button>
        </div>
    )
}

export default TodoTask