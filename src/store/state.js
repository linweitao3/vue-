let defaultCity = '上海';
try{
    if(localStorage.city) {
        defaultCity = localStorage.city;
    }
}catch (e) {/* continue regardless of error */}


export default{
    city:defaultCity
};