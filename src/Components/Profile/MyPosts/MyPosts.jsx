import s from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi This is Flume' countPost='#1'/>
                <Post message='Hi This is me again' countPost='#2'/>
            </div>
        </div>
    )
}

export default MyPosts;