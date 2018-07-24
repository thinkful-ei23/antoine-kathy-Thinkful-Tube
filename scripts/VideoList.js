/* global $ */
'use strict';

const videoList = (function(){
  
  const generateListItem = function(video) {
    return `<li data-video-id="${video.id}">
            <h3>${video.title}</h3>
            <img src="${video.thumbnail}"/>
            </li>`;
  };

  const render = function() {
    const html = store.videos.map(video => generateListItem(video));
    $('.results').html(html);
  };
  
  const handleFormSubmit = function() {
    $('form').on('submit', function(event) {
      event.preventDefault();
      let searchVideo = $('#search-term').val();
      $('#search-term').val('');
      api.fetchVideos(searchVideo, (function(response) {
        store.setVideos(api.decorateResponse(response));
        render();
      }));
    });
  };


  
  function bindEventListeners() {
    handleFormSubmit();
}

return {
  render,
  bindEventListeners
}

}())