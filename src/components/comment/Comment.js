import { useEffect, useState } from "react";
import { useFireBase } from "../../firebase/useFireBase"
import Reply from "../reply/Reply";
import "./Comment.css"

const Comment = (props) => {
    const { data, updateData, addToData } = useFireBase("comment");
    const comments = data.filter((comment) => { return comment.postId === props.postId })
    const [text, setText] = useState("")
    const [placeholder, setPlaceholder] = useState("Add a comment...")
    const [replyStatus, setReplyStatus] = useState(false);
    const [commentObject, setCommentObject] = useState({
        like: 0,
        time: "now",
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/393113137_1508104089938894_4270763439881804321_n.png?stp=dst-png_s206x206&_nc_cat=103&ccb=1-7&_nc_sid=510075&_nc_ohc=bhXraFJRJ8MAX9ELzPk&_nc_oc=AQmKX9ISuI05larIs1JwVZoMtnf4HwrYZuAUZWrENeRFrzFF3KLAPtZBiod9K3X9xC5PGj_chOSCEm4Auru-aNIX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTnlCxIwX04T7r-M_kOlZLj0O4d7oxGPK6cRDXe-rV1wg&oe=65ABB306",
        owner: "Sama Lanson",
        forTo: props.name,
        text: text,
        postId: props.postId,
        commentId: data.length + 1,
        numberReply: 0
    })
    useEffect(() => {
        props.setNumberOfComment(comments.length)
        const commentObjectUpdate = { ...commentObject }
        commentObjectUpdate.commentId = data.length + 1
        commentObjectUpdate.text = text
        setCommentObject(commentObjectUpdate)
    }, [comments.length, data, text])

    const [commentAmount, setCommentAmount] = useState(1);
    const [showMore, setShowMore] = useState(true)

    const handelReplyStatus = () => {
        if (!replyStatus) {
            setReplyStatus(true);
            return true;
        }
        setReplyStatus(false);
        return true
    }

    const handelCommentAmount = () => {
        if (commentAmount < comments.length) {
            setCommentAmount(commentAmount + 1);
            setShowMore(true)
            if (commentAmount === comments.length - 1) {
                setShowMore(false)
            }
            return true;
        }
        setShowMore(false)
        return false;
    }
    const handelShowLess = () => {
        setShowMore(true)
        setCommentAmount(1);
    }

    const handelAddComment = (event) => {
        if (event.key === 'Enter') {
            addToData(event, commentObject)
            setPlaceholder("")
        }
    }

    if (props.isShow) {
        return (
            <div>
                <section className="gradient-custom">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col ">
                                <div className="card my-card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <div className="d-flex flex-start">
                                                    <img
                                                        className="rounded-circle shadow-1-strong me-3"
                                                        src={"https://scontent.xx.fbcdn.net/v/t1.15752-9/393113137_1508104089938894_4270763439881804321_n.png?stp=dst-png_s206x206&_nc_cat=103&ccb=1-7&_nc_sid=510075&_nc_ohc=bhXraFJRJ8MAX9ELzPk&_nc_oc=AQmKX9ISuI05larIs1JwVZoMtnf4HwrYZuAUZWrENeRFrzFF3KLAPtZBiod9K3X9xC5PGj_chOSCEm4Auru-aNIX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTnlCxIwX04T7r-M_kOlZLj0O4d7oxGPK6cRDXe-rV1wg&oe=65ABB306"}
                                                        alt="avatar"
                                                        width={30}
                                                        height={30}
                                                    />
                                                    <div className="mb-3">
                                                        <textarea className="form-control text-area" id="exampleFormControlTextarea1"
                                                            rows={1}
                                                            cols={55}
                                                            placeholder="Add a comment..."
                                                            value={placeholder}
                                                            onClick={() => setPlaceholder("")}
                                                            onChange={(e) => {
                                                                setPlaceholder(e.target.value)
                                                                setText(e.target.value)
                                                                setCommentObject({ ...commentObject, text: text })
                                                            }}
                                                            onKeyDown={handelAddComment}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                {
                                                    comments.slice(0, commentAmount).map((comment) => {
                                                        return (
                                                            <div className="d-flex flex-start" key={comment.id}>
                                                                <img
                                                                    className="rounded-circle shadow-1-strong me-3"
                                                                    src={comment.image}
                                                                    alt="avatar"
                                                                    width={35}
                                                                    height={35}
                                                                />
                                                                <div className="flex-grow-1 flex-shrink-1">
                                                                    <div className="comment-body">
                                                                        <div className="d-flex justify-content-between">
                                                                            <p className="mb-1 user-name">
                                                                                {comment.owner}
                                                                            </p>
                                                                            <span className="small comment-text">{comment.time}</span>
                                                                        </div>
                                                                        <p className="small comment-text">
                                                                            {comment.text}
                                                                        </p>
                                                                    </div>
                                                                    <div className="d-flex justify-content-start">
                                                                        <button className="btn action-btn" onClick={() => {
                                                                            updateData(comment.id, { like: comment.like + 1 })
                                                                        }}>Like({comment.like})</button>
                                                                        <i className="bi bi-dot my-1"></i>
                                                                        <button className="btn action-btn" onClick={() => handelReplyStatus()}>Reply</button>
                                                                        <i className="bi bi-dot my-1"></i>
                                                                        <button className="btn action-btn">view {comment.numberReply} replies</button>
                                                                    </div>
                                                                    <Reply name={comment.owner} profileImage={props.profileImage} commentId={comment.commentId} replyStatus={replyStatus} id={comment.id} updateData={updateData} />
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                {
                                                    showMore ? < div className="d-flex justify-content-start" >
                                                        <button className="btn load-more" onClick={handelCommentAmount}>
                                                            <i className="bi bi-three-dots three-dot"></i> Load more replies
                                                        </button>
                                                    </div> : <div className="d-flex justify-content-start">
                                                        <button className="btn load-more" onClick={handelShowLess}>
                                                            <i className="bi bi-three-dots three-dot"></i> Show less comment
                                                        </button></div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        )
    }

    return (
        <div>
        </div>
    )
}

export default Comment