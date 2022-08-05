function User({name,surname,age,isLoggedIn,friends}){
    
    return( 
        <>
        <h1>

            {isLoggedIn  ? `${name} ${surname} (${age})`:'giriş yapmadınız'}
        </h1>
        {
            friends.map((friend,index)=>(
            <div key={index}>
                {index}-{friend.name}
            </div>
            ))
        }
        </>
    );
}
export default User;