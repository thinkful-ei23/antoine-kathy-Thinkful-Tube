/* global $ */
'use strict';

const api = (function () {
  const API_KEY = 'AIzaSyCg6x00s-dGYOptkvgVMBwepjRlsqXBfCI';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  

  const fetchVideos = function (searchTerm, callback) {
    const query = {
      part: 'snippet',
      q: `${searchTerm}`,
      key: API_KEY
    };
    $.getJSON(BASE_URL, query, callback);
  };


  const decorateResponse = function(response) {
    console.log(response)
    return response.items.map(function(item) {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url
      };
    });
  };

  return {
    fetchVideos,
    decorateResponse
  };

}());