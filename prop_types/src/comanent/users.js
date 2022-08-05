import propTypes from "prop-types";
function User({name,surname,age,isLoggedIn,friends,address}){
 
    if(!isLoggedIn){
        return<div>giriş yapmadınız</div>
    }
    return( 
        <>
        <h1>
          
            {`${name} ${surname} (${age})`}
        </h1>
        
        {address.title} {address.zip}
        <br />
        <br />
        
        {
            
            friends.map((friend)=>(
                <div key={friend.id}>{friend.name}</div>
            ))}
        
        </>
    );
}
//bir protype birden fazla veri göndermek için oneOfType kullanılır
User.propTypes={
    name:propTypes.string.isRequired,//zorunluluk katıyor isRequired
    surname:propTypes.string.isRequired,
    isLoggedIn:propTypes.bool.isRequired,
    //age:propTypes.number.isRequired, bu zorunlu ve proptypes konusunda kullandımız
    age:propTypes.oneOfType([propTypes.number,propTypes.string]),
    friends:propTypes.array,
    address:propTypes.shape({title:propTypes.string
    ,zip:propTypes.number}),
    
}
//herhangi bir tanım yapılmadan bir propa varsayılan bir değer veri bileriz  
User.defaultProps={// ataması yapılmamış propları atama yapabilir
   isLoggedIn:true  
} //burda app kısmında islong kısmını kapatırsınız burdak folse ve true çalışır
export default User;