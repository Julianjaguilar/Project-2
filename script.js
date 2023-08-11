const { response } = require("express");

var apiKey = 'TE2ijqVVjWf7vbSiCOY5HV8NLRAqriKf';

function eventData() {
    var apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=' + apiKey;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    console.log(data._embedded.events[0]);
      var eventDate = data._embedded.events.dates.start.localDate;
      console.log(eventDate[0]);
    })};
eventData();
  /*
    fetch(apiUrl)
     .then(function(response){
        return response.JSON;
     }) 
     .then (function(data){
        console.log(data);
     })
      };

eventData()*/