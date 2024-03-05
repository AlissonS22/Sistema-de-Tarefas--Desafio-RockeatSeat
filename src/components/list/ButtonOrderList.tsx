import {paramProps} from './Item'
import { ArrowUp   } from '@phosphor-icons/react'

import style from '../list/ButtonOrderList.module.css'

interface PropsItems {
    itemTask: paramProps["itemTask"];
    setItemTask: paramProps["setItemTask"];
}


export function ButtonOrderList ({itemTask, setItemTask}: PropsItems): JSX.Element {

    
    function ordenarList() {
        reorderItemsById()
    }

    const reorderItemsById = () => {
        // Verifica se o item está marcado e se há mais de um item na list 
            // Ordena os itens com base no ID
            const sortedItems = [...itemTask].sort((a, b) => a.id - b.id);
            // Atualiza o estado com os itens reordenados
            setItemTask(sortedItems);
    
    };

    return (
        <div>
            <button title='Ordenar por ordem de Criação' onClick={ordenarList} className={style.ButtonIconSeta}>
                <span  ><ArrowUp  className={style.iconSeta}/></span>
            </button>
        </div>
    )
}