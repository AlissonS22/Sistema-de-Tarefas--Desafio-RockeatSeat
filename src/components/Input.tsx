import style from '../components/Input.module.css'

export function Input({...props}) {

    return (
            <input 
                className={style.Input}
                type="text" 
                placeholder="Adicione uma nova tarefa"
                {...props}
            />
    )
}