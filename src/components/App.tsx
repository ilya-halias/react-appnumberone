import { Input, Button, Checkbox } from './common';

const tasks = [{ id: 1, label: 'Выучить JS', isDone: true }, { id: 2, label: 'Выучить React', isDone: false }]

export const App = () => {
    return (<div>
        <Input value='Добавьте задачу'/>
        <Button onClick={() => alert('Чуть-чуть осталось')} children='Добавить задачу'></Button>

        <ul>
            {tasks.map((task) =>
                (<li key={ task.id }>
                    <Checkbox checked={ task.isDone }/>
                    { task.label }
                    { task.isDone && <Button onClick={ () => alert('Скоро удалю') } children='Удалить задачу' type='submit'></Button> }
                </li>))}
        </ul>
    </div>)
}

