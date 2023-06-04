const CityInfo = ({ cityName, country, yearEstablished, population, area, dayCity, climate, flagCountry, flagCity }) => {
    return (
        <div className="cityInfo">
            <h1 className="titleCity">{cityName}</h1>
            <img src={flagCity} alt={cityName} width="350" />
            <p className="titleCountry">Страна: <span>{country}</span></p>
            <img src={flagCountry} alt={country} width="100" />
            <p>Год основания: <span>{yearEstablished}</span></p>
            <p>Население: <span>{population}</span></p>
            <p>Площадь: <span>{area}</span></p>
            <p>Климат: <span>{climate}</span></p>
            <p>День Города: <span>{dayCity}</span></p>
        </div>
    );
};

export default CityInfo;