import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
                <img src="https://cdn.dribbble.com/users/5374089/screenshots/14867094/dribble3_4x.jpg"/>
            </div>
            <div className={s.desciptionBlock}>
                Ava + Description
            </div>
        </div>
    )
}

export default ProfileInfo;