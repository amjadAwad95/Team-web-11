import { useState } from "react";
import PostAction from "../post_action/PostAction";
import Comment from "../comment/Comment";


const Post = (props) => {
    const [commentShow, setCommentShow] = useState(false);
    const onClickComment = () => {
        if (!commentShow) {
            setCommentShow(true);
            return true;
        }
        setCommentShow(false);
        return true;
    }
    return (
        <>
            <div className="container mx-4">
                <div className="row justify-content-start">
                    <div className="col-md-6" >
                        <section className="mx-auto my-5 mb-1" style={{ maxWidth: '50rem' }}>
                            <div className="card" style={{ borderRadius: "0" }}>
                                <div className="card-head d-flex my-3 mx-3">
                                    <div className="d-flex align-items-center">
                                        <img src={props.profileImage} className="rounded-circle me-3"
                                            style={{ width: "40px", height: "40px" }}
                                        />
                                    </div>
                                    <div style={{ lineHeight: "0" }}>
                                        <h5 style={{ float: "left", clear: "both" }}>{props.name}
                                            <span style={{ color: "#a29b9e", fontSize: "15px" }}>
                                                <i className="bi bi-dot m-1" style={{ fontSize: "18px" }}></i>
                                                {props.time}</span></h5>
                                        <p style={{ float: "left", clear: "both", color: "#a29b9e" }}>{props.desc}</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p style={{ textAlign: "left", color: "#a29b9e" }}>
                                        {props.postText}
                                    </p>
                                    <div className="bg-image">
                                        <img className="img-fluid" src={props.image} style={{ borderRadius: "7px" }} />
                                    </div>
                                </div>
                                <div className="card-footer bg-white" style={{ border: "0" }}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <PostAction color="#677e92" icon="bi bi-hand-thumbs-up-fill" action="Like" counter={props.like} id={props.id} />
                                            <a href="#!" className="btn" style={{ color: "#677e92 " }} onClick={onClickComment}>
                                                <i className="bi bi-chat-fill" style={{ paddingRight: "5px", fontSize: "14px" }}></i>
                                                Comments({props.numberComment})
                                            </a>
                                        </div>
                                        <PostAction color="#677e92" icon="bi bi-share-fill" action="Share" counter={props.share} id={props.id} />
                                    </div>
                                    <Comment isShow={commentShow} />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;