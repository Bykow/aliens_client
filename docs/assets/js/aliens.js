
function createTable() {
  $.getJSON('data/hireableUsers.json', (jsonData) => {
    for (let i = 0; i < jsonData.length; i++) {
      $('#table-aliens').find('tbody').append(`
        <tr>
           <td>${jsonData[i].id}</td>
           <td><img src='${jsonData[i].avatar_url}' width="50" height="50" /></td>
           <td>${jsonData[i].name}</td>
           <td>
            <a href='${jsonData[i].html_url}'>
                ${jsonData[i].login}
            </a>
           </td>
           <td>${jsonData[i].location}</td>
        </tr>
        `);
    }
  });
}

createTable();

