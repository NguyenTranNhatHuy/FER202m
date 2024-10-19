import React from 'react';
import PropTypes from 'prop-types';

const AnimalCard = ({ name, scientificName, size, diet, img, additional }) => {
    const showAdditionalData = (additional) => {
        const dataPairs = Object.entries(additional);
        const additionalInfoString = dataPairs.map(([key, value]) => `${key}: ${value}`).join('\n');
        alert(additionalInfoString);
    };

    return (
        <div className=''>
            <div>

                <div className="card" >
                    <img src={`./img/${img}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                            {scientificName}
                        </p>
                        <p className="card-text">
                            {size}
                        </p>
                        <p className="card-text">
                            {diet.join(', ')}
                        </p>
                        <button onClick={() => showAdditionalData(additional)} className="btn btn-primary">
                            More Info
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};
AnimalCard.propTypes = {
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    }),
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
AnimalCard.defaultProps = {
    additional: {
        notes: 'No Additional Information'
    }
}



export default AnimalCard;
