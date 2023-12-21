import { collection, getFirestore, addDoc } from "firebase/firestore";
import React from "react";
import { useFireBase } from "../../firebase/useFireBase";

export default function AddPost() {
    const [post, setPost] = React.useState("");
    const { addToData } = useFireBase("post");

    function handleSubmit(e) {
        addToData(e, { postText: post })
        setPost("")
    }

    return (
        <div className="rounded-4 shadow-sm">
            <form className="d-flex flex-column p-3" onSubmit={handleSubmit}>
                <div className="input-group d-flex justify-content-center align-items-center py-3">
                    <img
                        src="https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg"
                        width="40px"
                        height="40px"
                        alt="search"
                        className="bg-info rounded-circle"
                    />

                    <input
                        className="form-control  border-0 ms-3"
                        type="text"
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                        placeholder="Share your thoughts..."
                        aria-label="Post something"
                    />

                    <button
                        className="btn btn-primary rounded"
                        type="submit"
                        style={{
                            width: "100px",
                            cursor: "pointer",
                            height: "100%"
                        }}
                        disabled={!post}
                    >
                        Post
                    </button>
                </div>

                <div className="d-flex justify-content-between align-content-center">
                    <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                        <button
                            className="btn d-flex justify-content-center align-items-center gap-2"
                            style={{
                                backgroundColor: "#edeef0",
                            }}
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#3a786c"
                                className="bi bi-image-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                            </svg>
                            <span>Photos</span>
                        </button>

                        <button
                            className="btn d-flex justify-content-center align-items-center gap-2"
                            style={{
                                backgroundColor: "#edeef0",
                            }}
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#1383c8"
                                className="bi bi-camera-reels-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                            </svg>
                            <span>Videos</span>
                        </button>

                        <button
                            className="btn d-flex justify-content-center align-items-center gap-2"
                            style={{
                                backgroundColor: "#edeef0",
                            }}
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#bb1d49"
                                class="bi bi-calendar-event-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                            </svg>

                            <span>Events</span>
                        </button>

                        <button
                            className="btn d-flex justify-content-center align-items-center gap-2"
                            style={{
                                backgroundColor: "#edeef0",
                            }}
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#f0bb89"
                                class="bi bi-emoji-smile-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
                            </svg>
                            <span>Feeling/Activity</span>
                        </button>
                    </div>

                    <div>
                        <button
                            className="btn"
                            style={{
                                backgroundColor: "#edeef0"
                            }}
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#454545"
                                class="bi bi-three-dots"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                        </button>
                    </div>
                </div>

            </form>
        </div>
    );
}
