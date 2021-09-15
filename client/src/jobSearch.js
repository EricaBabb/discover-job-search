// import { getData } from './http';
// import queryStrings from './queryStrings';
// import qs from 'query-string';

// export default function jobSearch(url, publisherId) {
//     const endpoint = '/apisearch';
//     queryStrings.publisher = publisherId;

// this.query = function(keywords) {
//     queryStrings.q = keywords;
//     return this;
//   };

//   this.location = location => {
//     queryStrings.l = location;
//     return this;
//   };

//   this.sort = sort => {
//     queryStrings.sort = sort;
//     return this;
//   };

//   this.radius = radius => {
//     queryStrings.radius = radius;
//     return this;
//   },
  
//   this.siteType = st => {
//     queryStrings.st = st;
//     return this;
//   },
  
//   this.jobType = jt => {
//     queryStrings.jt = jt;
//     return this;
//   },
  
//   this.start = start => {
//     queryStrings.start = start;
//     return this;
//   },
  
//   this.limit = limit => {
//     queryStrings.limit = limit;
//     return this;
//   },
//   this.daysBack = days => {
//     queryStrings.fromage = days;
//     return this;
//   },
  
//   this.highlight = num => {
//     queryStrings.highlight = num;
//     return this;
//   },
  
//   this.filter = num => {
//     queryStrings.filter = num;
//     return this;
//   },
  
//   this.latlong = num => {
//     queryStrings.latlong = num;
//     return this;
//   },
  
//   this.country = country => {
//     queryStrings.co = country;
//     return this;
//   },
//   this.channel = channel => {
//     queryStrings.chnl = channel;
//     return this;
//   },
  
//   this.userIp = userIp => {
//     queryStrings.userip = userIp;
//     return this;
//   },
  
//   this.userAgent = userAgent => {
//     queryStrings.useragent = userAgent;
//     return this;
//   },
//   this.done = () => {
//     if (queryStrings.userip && queryStrings.useragent) {
//       let params = qs.stringify(queryStrings);
//       let fullURL = `${url}${endpoint}?${params}`;

//       return getData(fullURL).then(response => response);
//     } else {
//       throw Error('Missing user ip or user agent');
//     }
//   };
// }


