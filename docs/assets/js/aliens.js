const data = require('../../data/hireableUsers.json');

function createTable(jsonData) {
  for (let i = 0; i < jsonData.length; i++) {
    $('#table-aliens').find('tbody').append(`\
        <tr>\
           <td>${jsonData[i].id}</td>\
           <td>${jsonData[i].avatar_url}</td>\
           <td>${jsonData[i].name}</td>\
           <td>${jsonData[i].login}</td>\
           <td>${jsonData[i].location}</td>\
        </tr>\
        `);
  }
}

createTable(JSON.parse(data));

