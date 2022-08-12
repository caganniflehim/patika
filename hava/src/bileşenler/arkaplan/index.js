import yagmurlu from '../../resim/rainy.jpg'
function index(){
    return(
        <div className="arkaplan">
            <div className="overlay"></div>
            <img className="arkaplan-resim" src={yagmurlu}></img>
        </div>
    )
}export default index