import style from './Empty.module.css'


export function Empty() {

    return (
        <div className={style.divTotalEmpty}>
            <span>
                <img className={style.img} src="../src/assets/empty.png" alt="" />
           

                <p className={style.textOneEmpty}>Você ainda não tem tarefas cadastradas</p>
                <p className={style.textTwoEmpty}>Crie tarefas e organize seus itens a fazer</p> 
            </span>
        </div>
    )
}
