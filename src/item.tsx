import { List } from './types'

function Item({el,deleteTodos}: {el: List, deleteTodos: (id: number) => void}) {
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