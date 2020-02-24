import request from 'superagent';

export const getBeer = (beerId) => request.get(`https://agile-coast-09251.herokuapp.com/api/beer/${beerId}`);