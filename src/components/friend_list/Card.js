import { useFireBase } from "../firebase/useFireBase"
import FriendCard from "../friend_card/FriendCard"

const Card = () => {
    const { data } = useFireBase("Friends")
    return (
        <>
            <FriendCard />
        </>
    )
}

export default Card;
// profilePicture={info.profilePicture}
// name={info.name}
// mutualConnections={info.hasStory}
// hasStory={info.hasStory}