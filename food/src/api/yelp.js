import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Rq0cnbTK10dibD6F1YChMuV4KXb4F1CoqCixT1cHb46AcpXF0RHiTVI4C1HNdM5pF7r-6i6tK1EsHgXWj6JKmrt-CoK2mgpvV4SHHmhKNT05Zj6A18Fib9R7OknlXXYx'
    }
});

