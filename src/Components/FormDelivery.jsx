import { useState } from 'react';
import PropTypes from 'prop-types';

const CitySelector = (props) => {
    const cityList = props.data.map((city) => {
        return <option key={city.codeCommune} value={city.nomCommune}>{city.nomCommune}</option>
    })
    return (
        <>
            <label htmlFor="city">Ville </label>
            <select>
                {cityList}
            </select>
        </>
    )

}

CitySelector.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        codePostal: PropTypes.string,
        codeCommune: PropTypes.string,
        nomCommune: PropTypes.string,
        libelleAcheminement: PropTypes.string,
    })).isRequired
}

export const FormDelivery = (props) => {
    const [cityList, setCityList] = useState('');
    const [zipCode, setZipCode] = useState(0);
    const [error, setError] = useState(false);



    const handleZipChange = (e) => {
        setZipCode(e.target.value);
        if (!isNaN(e.target.value) && e.target.value.length === 5) {
            fetch(`https://apicarto.ign.fr/api/codes-postaux/communes/${e.target.value}`)
                .then(response => {
                    if (response.ok) {
                        response.json()
                            .then(res => {
                                setCityList(res);
                            })

                    } else {
                        setError(`Aucune ville trouvée pour le code postal ${e.target.value}`);
                        setCityList('');
                    }
                })
                .catch(err => {
                setError(`Erreur lors de l'appel à l'API : ${error}`);
                console.error(err);
            })
        }
        return setZipCode(e.target.value);

    }

    return (

        <form className='form'>
            <div>
                {error ? <p>{error}</p> : null}
                <label htmlFor="zipCode">Code postal </label>
                <input type="number" id="zipCode" name="zipCode" value={zipCode} onChange={handleZipChange} />
            </div>
            <div>

                {cityList ? <CitySelector data={cityList} /> : null
                }
            </div>


            <button className='button'>Envoyer</button>
        </form>

    )
}