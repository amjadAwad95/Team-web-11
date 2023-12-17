import { useFireBase } from "../firebase/useFireBase"
import FriendCard from "../friendcard/FriendCard"

const Card = () => {
    const { data } = useFireBase("friendcard")
    return (
        <>
            {
                data.map(info => {
                    return (
                        <div key={info.id}>
                            <FriendCard profilePicture={info.profilePicture}
                                name={info.name}
                                mutualConnections={info.mutualConnections}
                                hasStory={info.hasStory}
                                
                            />
                        </div>
                    )

                })
            }
        </>
    )
}

export default Card;