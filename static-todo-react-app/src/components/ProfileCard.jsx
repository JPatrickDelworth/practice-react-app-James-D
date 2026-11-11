

function ProfileCard ({key, name, age, bio}) {
    
    return (
            <li>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Bio: {bio}</p>
            </li>
    )


}

export default ProfileCard;