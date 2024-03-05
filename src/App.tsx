import { useState } from 'react'
import {Header} from '../src/components/Header'
import {Input} from '../src/components/Input'
import {Button} from '../src/components/Button'

import {Empty} from '../src/components/list/Empty'
import {ButtonOrderList} from '../src/components/list/ButtonOrderList'

import {Item, ItemProps} from '../src/components/list/Item'
import {ListHeader} from '../src/components/list/ListHeader'


import style from './App.module.css'



interface Task {
  content: ItemProps["content"];
  id: ItemProps["id"];
  checked: ItemProps["checked"];
}

function App() {

  const [inputText, setInputText] = useState<ItemProps['content']>('')

  const [idCounter, setIdCounter] = useState(1)

  const [itemTask, setItemTask] = useState<Task[]>([])

  const [countChecked, setCountChecked] = useState(0)


 function handleClickButton () {
    
    setItemTask([...itemTask, {id: idCounter, content: inputText, checked: false}])

    setIdCounter(idCounter + 1)
    setInputText('')
  }

  function deletedTask (deletedTask: Task) {

      if (confirm('Deseja realmente apagar?') === true) {
      const newListItask = itemTask.filter(task => {
          return task.id !== deletedTask.id
  
      })
      setItemTask(newListItask)
    } 
  }
 
 
  return (
    <main>
      <Header />
      <section className={style.content}>

      <div className={style.divButtonOrganiList}>
          <ButtonOrderList 
            itemTask={itemTask}
            setItemTask={setItemTask}          
          />
        </div>

        <div className={style.InputAndButon}>
            <Input            
                onChange={(e: { target: { value: ""} }) => setInputText(e.target.value)}
                value={inputText}
            />

              <Button
                  onClick={handleClickButton}
              />
    
        </div> 

        <div className={style.contents}>
        {itemTask ?  (
            <ListHeader 
                itemTask={itemTask}
                countChecked={countChecked} 
            /> 
          )
        : (
          <p>Sem</p>
        )
        }
          <div className={style.divItem}>  
            {itemTask.length > 0 ? (  // Verifica se há tarefas na lista
            itemTask.map((task) => ( // Se houver tarefas, exibe cada uma delas
              <Item
                key={task.id}
                content={task.content}
                checked={task.checked}
                id={task.id}
                deletedTask={() => deletedTask(task)}
                itemTask={itemTask}
                setItemTask={setItemTask}
                countChecked={countChecked}
                setCountChecked={setCountChecked}
              />
              
            ))
            ) : ( // Se não houver tarefas, mostra o componente Empty
              <Empty />
            )}
            <div className={style.spaceForResults}> </div>
          </div>
        </div>
      </section>
    </main> 
   
  )
}

export default App
