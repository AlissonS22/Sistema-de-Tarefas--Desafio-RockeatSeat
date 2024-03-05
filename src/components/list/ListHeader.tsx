import style from '../list/ListHeader.module.css'
import { ItemProps } from '../list/Item'

interface countItem {
    itemTask: ItemProps[];
    countChecked: number;
}

export function ListHeader({itemTask, countChecked}: countItem) {
    

    return (
        <header className={style.ListHeader}>
            <aside className={style.asideOne}>
                <span className={style.lineListHeaderOne}>Tarefas Criadas</span>
                <span className={style.lineListHeaderTwo}>{itemTask.length}</span>
            </aside>


            <aside className={style.asideTwo}>
                <span className={style.lineListHeaderThree}>Concluídas</span>
                <span className={style.lineListHeaderFour}>{countChecked} de {itemTask.length}</span>
            </aside>
        </header>
        
    )
    
}