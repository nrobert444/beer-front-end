import request from 'superagent';

export const getBeer = request.get(`https://agile-coast-09251.herokuapp.com/api/beers`);