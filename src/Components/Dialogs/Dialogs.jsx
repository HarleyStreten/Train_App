import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink path to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem className={s.active} name="Flume" id="1"/>
                <DialogItem name="Martin Garrix" id="2"/>
                <DialogItem name="Arty" id="3"/>

            </div>
            <div className={s.messages}>
                <Message message="Hi man"/>
                <Message message="How are you?"/>
                <Message message="Nice music. I really like it"/>
            </div>
        </div>
    )
}

export default Dialogs;