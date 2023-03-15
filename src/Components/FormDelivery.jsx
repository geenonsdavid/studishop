import { useEffect, useState } from 'react';
import propsTypes from 'prop-types';
import { stateTypes } from '../functions/stateTypes';
import { Button } from 'antd';


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
    data: propsTypes.arrayOf(
        propsTypes.shape({
            codeCommune: propsTypes.string,
            nomCommune: propsTypes.string,
            codePostal: propsTypes.string,
            libelleAcheminement: propsTypes.string
        }
        )
    )
}


export const FormDelivery = (props) => {

    const [cityList, setCityList] = useState('');
    const [zipCode, setZipCode] = useState(0);
    const [error, setError] = useState(false);

    console.log(typeof zipCode)
    
    useEffect(() => {

        if (!stateTypes.number(zipCode)) {
           return setError('Mauvais code postal');
        }
    }, [zipCode])






    const handleZipChange = (e) => {
        if (!isNaN(e.target.value)) {
            if (e.target.value.length === 5) {
            
            fetch(`https://apicarto.ign.fr/api/codes-postaux/communes/${e.target.value}`)
                .then(response => {
                    if (response.ok) {
                        response.json()
                            .then(res => {
                                if (res.length > 0) {
                                    setCityList(res);
                                    setError(false);
                                } else {
                                    setCityList(false);
                                }
                            })

                    } else {
                        setError(`Aucune ville trouvée pour le code postal ${e.target.value}`);
                        setCityList(false);
                    }
                })
                .catch(err => {
                    setError(`Erreur lors de l'appel à l'API , veuillez réessayer ultérieurement`);
                    console.error(err);
                })


            }
        }
        return setZipCode(e.target.value);

    }

    return (

        <form className='form'>
            <div>
                
                <label htmlFor="zipCode">Code postal </label>
                
                <input id="zipCode" name="zipCode" value={zipCode} type="number" onChange={handleZipChange} />
                {error ? <p>{error}</p> : null}
            </div>
            <div>

                {cityList ? <CitySelector data={cityList} /> : null
                }
            </div>

            <Button type="primary" size='small'>Validez</Button>
            
        </form>

    )
}