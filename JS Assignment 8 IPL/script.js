fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
  .then(response => response.json())
  .then(data => {
    const sortedData = data.sort((a, b) => a.NRR - b.NRR);
    const tableBody = document.getElementById('ipl-table-body');
    sortedData.forEach((team, index) => {
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.Team}</td>
        <td>${team.Matches}</td>
        <td>${team.Won}</td>
        <td>${team.Lost}</td>
        <td>${team.Tied}</td>
        <td>${team.NRR}</td>
        <td>${team.Points}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  })
  .catch(error => console.error('Error:', error));