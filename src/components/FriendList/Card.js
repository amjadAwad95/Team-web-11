import { useFireBase } from "../firebase/useFireBase"
import FriendCard from "../friendcard/FriendCard"

const Card = () => {
    const { data } = useFireBase("Friends")
    return (
        <>
           
             
                    
                        <div >
                            
                            <FriendCard />
                                
                            
                        </div>
                     
               
            
     </>
    )
}

export default Card;
// profilePicture={info.profilePicture}
// name={info.name}
// mutualConnections={info.hasStory}
// hasStory={info.hasStory}