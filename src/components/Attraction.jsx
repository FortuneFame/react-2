const Attraction = ({ name, imageUrl, description, address, addressUrl, openingHours }) => {
    return (
        <div className="attraction">
            <h3 className="titleName">{name}</h3>
            <img className="imgAttraction" src={imageUrl} alt={name} width="500" />
            <p className="description">{description}</p>
            <p>Часы работы: <span>{openingHours}</span></p>
            <a href={addressUrl} target="_blank" rel="noopener noreferrer">{address}</a>
        </div>
    );
};

export default Attraction;
