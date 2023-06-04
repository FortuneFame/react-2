import Attraction from "./Attraction";
import CityInfo from "./CityInfo";
import cityData from "../cityData.json";
import "../index.css";

const App = () => {

    const { cityName, country, yearEstablished, population, area, attractions, climate, dayCity, flagCity, flagCountry } = cityData;

    return (
        <div>
            {cityData &&
                <div className="cityInfoAll">
                    <CityInfo
                        cityName={cityName}
                        country={country}
                        yearEstablished={yearEstablished}
                        population={population}
                        area={area}
                        climate={climate}
                        dayCity={dayCity}
                        flagCity={flagCity}
                        flagCountry={flagCountry}
                    />
                    <h2>Достопримечательности:</h2>
                    {attractions && attractions.map(({ name, imageUrl, description, address, addressUrl, openingHours }) =>
                        <Attraction
                            key={name}
                            name={name}
                            imageUrl={imageUrl}
                            description={description}
                            address={address}
                            addressUrl={addressUrl}
                            openingHours={openingHours}
                        />
                    )}
                </div>
            }
        </div>
    );
};

export default App;
