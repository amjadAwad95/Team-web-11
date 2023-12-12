import "./Comment.css"

const Comment = (props) => {
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
                                                        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        alt="avatar"
                                                        width={30}
                                                        height={30}
                                                    />
                                                    <div className="mb-3">
                                                        <textarea className="form-control text-area" id="exampleFormControlTextarea1"
                                                            rows={1}
                                                            cols={55}
                                                            placeholder="Add a comment..."
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-start">
                                                    <img
                                                        className="rounded-circle shadow-1-strong me-3"
                                                        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        alt="avatar"
                                                        width={30}
                                                        height={30}
                                                    />
                                                    <div className="flex-grow-1 flex-shrink-1">
                                                        <div className="comment-body">
                                                            <div className="d-flex justify-content-between">
                                                                <p className="mb-1 user-name">
                                                                    Lori
                                                                </p>
                                                                <span className="small comment-text">2 hr</span>
                                                            </div>
                                                            <p className="small comment-text">
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                                                                quisquam recusandae eligendi dolore quod, et doloremque labore!
                                                                Adipisci quos perspiciatis debitis laborum eum! Incidunt, a voluptatum
                                                                magnam possimus nam quam?
                                                            </p>
                                                        </div>
                                                        <div className="d-flex justify-content-start">
                                                            <button className="btn action-btn">Like(3)</button>
                                                            <i className="bi bi-dot my-1"></i>
                                                            <button className="btn action-btn">Reply</button>
                                                            <i className="bi bi-dot my-1"></i>
                                                            <button className="btn action-btn">view 5 replies</button>
                                                        </div>
                                                        <div className="d-flex flex-start mt-4">
                                                            <div className="me-3">
                                                                <img
                                                                    className="rounded-circle shadow-1-strong"
                                                                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                                    alt="avatar"
                                                                    width={30}
                                                                    height={30}
                                                                />
                                                            </div>
                                                            <div className="flex-grow-1 flex-shrink-1">
                                                                <div className="comment-body">
                                                                    <div className="d-flex justify-content-between">
                                                                        <p className="mb-1 user-name">
                                                                            Billy
                                                                        </p>
                                                                        <span className="small comment-text">3hr</span>
                                                                    </div>
                                                                    <p className="small mb-0 comment-text">
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                        Eius quisquam recusandae eligendi dolore quod, et doloremque labore!
                                                                        Adipisci quos perspiciatis debitis laborum eum! Incidunt, a voluptatum magnam possimus nam quam?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-start mx-5">
                                                            <button className="btn action-btn">Like(3)</button>
                                                            <i className="bi bi-dot my-1"></i>
                                                            <button className="btn action-btn">Reply</button>
                                                        </div>
                                                        <div className="d-flex flex-start mt-4">
                                                            <div className="me-3">
                                                                <img
                                                                    className="rounded-circle shadow-1-strong"
                                                                    src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg"
                                                                    alt="avatar"
                                                                    width={30}
                                                                    height={30}
                                                                />
                                                            </div>
                                                            <div className="flex-grow-1 flex-shrink-1">
                                                                <div className="comment-body">
                                                                    <div className="d-flex justify-content-between">
                                                                        <p className="mb-1 user-name">
                                                                            Suliman
                                                                        </p>
                                                                        <span className="small comment-text">4 hr</span>
                                                                    </div>
                                                                    <p className="small mb-0 comment-text">
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam recusandae
                                                                        eligendi dolore quod, et doloremque labore! Adipisci quos perspiciatis
                                                                        debitis laborum eum! Incidunt, a voluptatum magnam possimus nam quam?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-start mx-5">
                                                            <button className="btn action-btn">Like(3)</button>
                                                            <i className="bi bi-dot my-1"></i>
                                                            <button className="btn action-btn">Reply</button>
                                                        </div>
                                                        <div className="d-flex justify-content-start">
                                                            <button className="btn load-more">
                                                                <i className="bi bi-three-dots three-dot"></i> Load more replies
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-start">
                                                    <img
                                                        className="rounded-circle shadow-1-strong me-3"
                                                        src="https://yt3.googleusercontent.com/05lhMeAH6tZrPIUsp2yHNz3DwzhKbDUQcxcY0_qeXVyZttR_pktBzw0FcLUSR6D4fVqsEgL3ZO0=s176-c-k-c0x00ffffff-no-rj"
                                                        alt="avatar"
                                                        width={30}
                                                        height={30}
                                                    />
                                                    <div className="flex-grow-1 flex-shrink-1">
                                                        <div className="comment-body">
                                                            <div className="d-flex justify-content-between">
                                                                <p className="mb-1 user-name">
                                                                    Apple
                                                                </p>
                                                                <span className="small comment-text">2 hr</span>
                                                            </div>
                                                            <p className="small comment-text">
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam recusandae eligendi dolore quod,
                                                                et doloremque labore! Adipisci quos perspiciatis debitis laborum eum! Incidunt, a
                                                                voluptatum magnam possimus nam quam?
                                                            </p>
                                                        </div>
                                                        <div className="d-flex justify-content-start">
                                                            <button className="btn action-btn">Like(3)</button>
                                                            <i className="bi bi-dot my-1"></i>
                                                            <button className="btn action-btn">Reply</button>
                                                            <i className="bi bi-dot my-1"></i>
                                                            <button className="btn action-btn">view 5 replies</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-start">
                                                    <button className="btn load-more">
                                                        <i className="bi bi-three-dots three-dot"></i> Load more replies
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
    return (
        <div>
        </div>
    )
}

export default Comment