import { useEffect, useState } from "react";
import { useFireBase } from "../../firebase/useFireBase";

const Reply = (props) => {
    const { data, updateData, addToData } = useFireBase("reply");
    const [replyText, setReplyText] = useState("")
    const replys = data.filter((reply) => { return reply.commentId === props.commentId })

    const [replyObject, setReplyObject] = useState({
        like: 0,
        time: "0s",
        image: props.profileImage,
        owner: props.name,
        forTo: props.name,
        text: replyText,
        commentId: props.commentId,
        replyId: data.length + 1
    })

    useEffect(() => {
        const replyObjectUpdate = { ...replyObject }
        replyObjectUpdate.replyId = data.length + 1
        replyObjectUpdate.text = replyText
        setReplyObject(replyObjectUpdate)
    }, [replys.length, data, replyText])

    const [replyAmount, setReplyAmount] = useState(1);
    const [showMore, setShowMore] = useState(true)
    const handelReplyAmount = () => {
        if (replyAmount < replys.length) {
            setReplyAmount(replyAmount + 1);
            setShowMore(true)
            if (replyAmount === replys.length - 1) {
                setShowMore(false)
            }
            return true;
        }
        setShowMore(false)
        return false;
    }
    const handelShowLess = () => {
        setShowMore(true)
        setReplyAmount(1);
    }

    const handelAddReply = (event) => {
        if (event.key === 'Enter') {
            addToData(event, replyObject)
            props.updateData(props.id, { numberReply: replys.length + 1 })
        }
    }

    return (
        <>
            {
                props.replyStatus ? <div className="mb-3">
                    <textarea className="form-control text-area" id="exampleFormControlTextarea1"
                        rows={1}
                        cols={55}
                        placeholder="Add reply..."
                        onChange={(e) => {
                            setReplyText(e.target.value)
                            setReplyObject({ ...replyObject, text: replyText })
                        }}
                        onKeyDown={handelAddReply}
                    ></textarea>
                </div> : <div></div>
            }
            {
                replys.slice(0, replyAmount).map((rply) => {
                    return (
                        <div key={rply.id}>
                            <div className="d-flex flex-start mt-4" >
                                <div className="me-3">
                                    <img
                                        className="rounded-circle shadow-1-strong"
                                        src={rply.image}
                                        alt="avatar"
                                        width={35}
                                        height={35}
                                    />
                                </div>
                                <div className="flex-grow-1 flex-shrink-1">
                                    <div className="comment-body">
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-1 user-name">
                                                {rply.owner}
                                            </p>
                                            <span className="small comment-text">{rply.time}</span>
                                        </div>
                                        <p className="small mb-0 comment-text">
                                            {rply.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start mx-5">
                                <button className="btn action-btn" onClick={() => {
                                    updateData(rply.id, { like: rply.like + 1 })
                                }}>Like({rply.like})</button>
                                <i className="bi bi-dot my-1"></i>
                                <button className="btn action-btn">Reply</button>
                            </div>
                        </div>
                    )
                })
            }
            {
                showMore ? < div className="d-flex justify-content-start" >
                    <button className="btn load-more" onClick={handelReplyAmount}>
                        <i className="bi bi-three-dots three-dot"></i> Load more replies
                    </button>
                </div> : <div className="d-flex justify-content-start">
                    <button className="btn load-more" onClick={handelShowLess}>
                        <i className="bi bi-three-dots three-dot"></i> Show less comment
                    </button></div>
            }
        </>
    )
}

export default Reply