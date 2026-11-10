import { profiles } from '../assets/Data.js'
import ProfileCard from './ProfileCard.jsx'

function ProfileContainer () {


    return (
        <div>
            
            <ul>
                <ProfileCard key = "123" name = "Patricia Heaton" age = "54" bio = "blah blah" />
                <ProfileCard key = "124" name = "Ray Romano" age = "64" bio = "blah blah" />
                <ProfileCard key = "125" name = "Peter Boyle" age = "112" bio = "blah blah" />

            </ul>
        </div>
    )
    
}


export default ProfileContainer;