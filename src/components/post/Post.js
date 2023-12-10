

const Post = () => {
    return (
        <>
            <div className="container" >
                <section className="mx-auto my-5" style={{ maxWidth: '50rem' }}>
                    <div className="card" style={{ borderRadius: "0", padding: "20px" }}>
                        <div className="card-head d-flex">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" className="rounded-circle me-3"
                                style={{ width: "40px", height: "40px" }}
                            />
                            <div style={{ lineHeight: "0" }}>
                                <h5 style={{ float: "left", clear: "both" }}>marcuse20
                                    <span style={{ color: "#a29b9e", fontSize: "15px", paddingLeft: "10px" }}> . 2h</span></h5>
                                <p style={{ float: "left", clear: "both", color: "#a29b9e" }}>web devlopmenthnmf</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p style={{ textAlign: "left", color: "#a29b9e" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam recusandae eligendi
                                dolore quod, et doloremque labore! Adipisci quos perspiciatis debitis laborum eum! Incidunt, a voluptatum magnam possimus nam quam?
                            </p>
                            <div className="bg-image">
                                <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg" alt="Card image cap" style={{ borderRadius: "7px" }} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Post;