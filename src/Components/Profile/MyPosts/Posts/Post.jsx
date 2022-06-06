import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://lastfm.freetls.fastly.net/i/u/770x0/82de733ce83f5312b1f0849fc58769e3.jpg'/>
            <div>
                {props.countPost}
            </div>

            <div>
                {props.message}
            </div>

            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;