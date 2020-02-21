import request from 'superagent';

export const getBeer = request.get(`http://agile-coast-09251.herokuapp.com/api/beers`);