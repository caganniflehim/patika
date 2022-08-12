function index({hava}){
    return(
        <>
        {typeof hava.main !="undefined" && (
          <div className="sonuc">
            <div className="sehir">{console.log(hava.name)}</div>
                <div className="detay">
                 <div className="derece">{console.log(hava.main.temp)}c</div>
                 <div className="statu">{console.log(hava.weather.description)}</div>
            </div>
        </div>  
        )}
        

        </>
    );
}
export default index;