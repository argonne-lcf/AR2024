(function() {


  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) {  
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  
        let item = store[results[i].ref];

        let metadata = results[i].matchData.metadata;
        let contentPositions = [];
        let titlePositions = [];
        let markedContent = [];
        let markedTitle = [];
        let firstMatch;
        

        if(metadata !== undefined) {

          for (term in metadata){
            for (field in metadata[term]){
              if (field == 'content') {
                for (posArray in metadata[term].content){
                  for (pos in metadata[term].content[posArray]){
                    contentPositions.push(metadata[term].content[posArray][pos]);
                  }
                } 
              } else if (field == 'title') {
                for (posArray in metadata[term].title){
                  for (pos in metadata[term].title[posArray]){
                    titlePositions.push(metadata[term].title[posArray][pos]);
                  }
                }
              }
            }
          }

          if (contentPositions.length != 0) {
            for (let i = 0; i < contentPositions.length; i++) {
              let start = contentPositions[i][0];
              let end = contentPositions[i][0] + contentPositions[i][1]; 
              if ( i == 0 ){ 
                markedContent.push(item.content.slice(0,start)); 
                firstMatch = start;
              }
              markedContent.push('<mark>');
              markedContent.push(item.content.slice(start, end));
              markedContent.push('</mark>');
              if ( i != contentPositions.length-1 ) {
                markedContent.push(item.content.slice(end, contentPositions[i+1][0]));
              } else {
                markedContent.push(item.content.slice(end));
              }
            }
            item.content = markedContent.join("");
          }

          if (titlePositions.length != 0) {
            for (let i = 0; i < titlePositions.length; i++) {
              let start = titlePositions[i][0];
              let end = titlePositions[i][0] + titlePositions[i][1]; 
              if ( i == 0 ){ markedTitle.push(item.title.slice(0,start)); }
              markedTitle.push('<mark>');
              markedTitle.push(item.title.slice(start, end));
              markedTitle.push('</mark>');
              if ( i != titlePositions.length-1 ) {
                markedTitle.push(item.title.slice(end, titlePositions[i+1][0]));
              } else {
                markedTitle.push(item.title.slice(end));
              }
            }
            item.title = markedTitle.join("");
          }

          appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
          appendString += '<p>&hellip;' + item.content.substring(firstMatch-25, firstMatch+125) + '&hellip;</p></li>';    
        }     
      } 

      searchResults.innerHTML = appendString;

    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    } 
  }  




  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');



  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      // this.field('id');
      this.field('title', { boost: 3 });
      this.field('content');
      this.metadataWhitelist = ['position'];

      for (var key in window.store) {
        this.add({
          'id': key,
          'title': window.store[key].title,
          'content': window.store[key].content,
          'position': window.store[key].position
        });
      };
    });

    searchTerm = '+'+searchTerm;
    searchTerm = searchTerm.replace(' ', ' +');
    // searchTerm = searchTerm.replace(" ", "\ ");
    // searchTerm = searchTerm.replace(" ", "*");

    var results = idx.search(searchTerm); // Get lunr to perform a search
    // var results = idx.query(function () {
    //   this.term(searchTerm)
    // });
    
    displaySearchResults(results, window.store); 

  }
})();
