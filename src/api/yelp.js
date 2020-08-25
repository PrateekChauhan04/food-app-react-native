import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer _LFlpYcimnKc8w-H5_svxf3gUR6B3dKehmjvLZ2QX84oFWGUchDo9G3SJo--IGxhrEK63RexwbZ-b24TbG5kBk4mHAMZTj7r9Puusy0AaZI79-TD8ifKCe4K6m1BX3Yx'
    }
});
