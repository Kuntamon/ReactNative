import { useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'helsinki'
            }
        });
        setResults (response.data.businesses);
    } catch (err) {
        setErrorMessage('Oop, Something went wrong!');
    }
    };

    useEffect(() => {
        searchApi('coffee');
    }, []);

    return [searchApi, results, errorMessage];
}