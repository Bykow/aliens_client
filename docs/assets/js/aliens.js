function createTable() {
  $.getJSON('data/hireableUsers.json', (jsonData) => {
    $('#header-aliens').append(`
          <p class="category"> They have more than ${jsonData.info.followers} followers
           and more than ${jsonData.info.repo} repos on GitHub !</p>
        `);

    // Sorting the devs by number of followers
    jsonData.values.sort((a, b) => parseFloat(b.followers) - parseFloat(a.followers));

    for (let i = 0; i < jsonData.values.length; i++) {
      $('#table-aliens').find('tbody').append(`
        <tr>
           <td>${jsonData.values[i].followers}</td>
           <td><img src='${jsonData.values[i].avatar_url}' width="50" height="50" /></td>
           <td>${jsonData.values[i].name}</td>
           <td>
            <a href='${jsonData.values[i].html_url}' target="_blank">
                ${jsonData.values[i].login}
            </a>
           </td>
           <td>${jsonData.values[i].location}</td>
           <td>${jsonData.values[i].bio}</td>
        </tr>
        `);
    }
  });
}

createTable();

