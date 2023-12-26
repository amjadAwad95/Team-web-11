import { useFireBase } from "../../firebase/useFireBase"
import Post from "../post/Post"

const Posts = () => {
    const { data } = useFireBase("post")
    return (
        <>
            {
                data.map(info => {
                    return (
                        <div key={info.id}>
                            <Post profileImage={info.profileImage}
                                name={info.name}
                                time={info.time}
                                desc={info.desc}
                                postText={info.postText}
                                image={info.image}
                                like={info.like}
                                numberComment={info.numberComment}
                                share={info.share}
                                id={info.id}
                                postId={info.postId}
                            />
                        </div>
                    )

                })
            }
        </>
    )
}

export default Posts;