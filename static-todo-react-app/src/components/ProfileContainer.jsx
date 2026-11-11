import { profiles } from '../assets/Data.js'
import ProfileCard from './ProfileCard.jsx'

function ProfileContainer () {


    return (
        <div>
            <p>{String(profiles[0]["name"])}</p>
            <ul>
                {profiles.map(pro => <ProfileCard key = {pro.id} name = {pro.name} age = {pro.age} bio = {pro.bio}/>)}
            </ul>
        </div>
    )
    
}


export default ProfileContainer;