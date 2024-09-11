import { List } from './types'

function Item(el: List, deleteTodos: (id: string) => void) {
    return (
        <>
            <div><li>{el.title}</li></div>
    
            <button type='button' 
                onClick={() => deleteTodos(el.id)}>
                Удалить
            </button>
         </>
    )

}

export default Item