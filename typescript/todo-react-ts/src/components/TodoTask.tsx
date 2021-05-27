import React, { ReactElement } from 'react'
import { IState } from '../interface'

interface Props {
    note: IState['note']
    removeTask(taskName: string): void
}

function TodoTask({ note, removeTask }: Props): ReactElement {


    return (
        <div className="individual-task">
            <p>{note.task}</p>
            <p>{note.deadline}</p>
            <button onClick={() => removeTask(note.task)}>
                X
            </button>
        </div>
    )
}

export default TodoTask