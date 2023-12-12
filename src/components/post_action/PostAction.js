import { useState } from "react";
import { useFireBase } from "../../firebase/useFireBase";


const PostAction = (props) => {
    let [counter, setCounter] = useState(props.counter);
    const [color, setColor] = useState(props.color);
    const { updateData } = useFireBase("post");
    const changeOnClick = () => {
        if (color === props.color) {
            setCounter(++counter);
            setColor("#1f7cd3")
        }
        else {
            setCounter(--counter);
            setColor(props.color)
        }
        if (props.action === "Like") {
            updateData(props.id, { like: counter })
        }
        if (props.action === "Share") {
            updateData(props.id, { share: counter })
        }

    }
    return (
        <a href="#!" className="btn mt-auto" style={{ color: color }} onClick={changeOnClick}>
            <i className={props.icon} style={{ paddingRight: "5px" }}></i>
            {props.action}({props.counter})
        </a>
    )
}

export default PostAction;