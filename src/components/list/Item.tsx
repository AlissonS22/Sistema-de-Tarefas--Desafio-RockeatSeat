import React from 'react';
import style from '../list/Item.module.css'

import { Trash } from '@phosphor-icons/react'


export interface ItemProps {
    id: number;
    content: string;
    checked: boolean;

}

export interface paramProps {
    content: ItemProps["content"];
    id: ItemProps["id"];
    checked: ItemProps["checked"];
    deletedTask: () => void;
    itemTask: ItemProps[];
    setItemTask: (updatedItems : ItemProps[]) => void;
    countChecked: number;
    setCountChecked: (countChecked: number) => void;
}
  

export function Item({content, id, deletedTask, checked, itemTask, setItemTask, countChecked, setCountChecked}: paramProps) {

   const [isChecked, setIsChecked] = React.useState(checked);

    const handleCheckboxClick = () => {
     
        if (isChecked === false) {
            setIsChecked(true);
            setCountChecked(countChecked + 1); // Incrementa o valor anterior
            moveItemToBottom();
        } else {
            moveItemToTop();
            setIsChecked(false);
            setCountChecked(countChecked - 1); // Decrementa o valor anterior
        }
    }


    const handleCheckboxClickDelete = () => {
        if (isChecked === true) {
            deletedTask();
            setCountChecked(countChecked - 1); 
        }

      else if (isChecked === false) {
        deletedTask();
      }

        
    }

    const moveItemToBottom = () => {
               // Encontra o índice do item na lista
        const index = itemTask.findIndex(item => item.id === id);

        // Remove o item da lista
        const updatedItems = [...itemTask.slice(0, index), ...itemTask.slice(index + 1)];

        // Insere o item no final da lista
        updatedItems.push({ id, content, checked: isChecked });

        // Atualiza o estado com a nova lista de itens
        setItemTask(updatedItems);
      };

      const moveItemToTop = () => {
        // Encontra o índice do item na lista
        const index = itemTask.findIndex(item => item.id === id);
  
        // Remove o item da lista
        const updatedItems = [
          { id, content, checked: isChecked }, // Adiciona o item no início da lista
          ...itemTask.slice(0, index),
          ...itemTask.slice(index + 1)
        ];
  
        // Atualiza o estado com a nova lista de itens
        setItemTask(updatedItems);
    
      };


    const textStyle = isChecked ? { color: '#808080' } : { color: '#FFF' }; // Define os estilos do texto


    return (
        <div>
            <label>
                <div className={style.divTotal}>
               
                        <label  key={id} className={style.label} htmlFor={`checkbox_${id}`}>
                            <div className={style.round} >
                                <input 
                                    className={style.checkbox} 
                                    type="checkbox"  
                                    id={`checkbox_${id}`}
                                    checked={isChecked}
                                    onChange={handleCheckboxClick}
                                />
                                <label className={style.inputLabel} htmlFor={`checkbox_${id}`}></label>
                            </div>
                         
                                <div className={style.divText}>
                                    <span id={`checkbox_${id}`} style={textStyle} className={`${style.Text} ${isChecked === true ? style.checked  : ""}`}>
                                        {content} 
                                    </span>
                                </div>
                        
                        </label>
                   
                  

                </div>
            </label>

                    <div className={style.divDelete}>
                        <span className={style.buttonDelete} onClick={handleCheckboxClickDelete}>
                            <Trash />
                        </span>
                    </div>
            <div className={style.spaceForResults}> </div>
        </div>
       
    )
}