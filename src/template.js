// HTML template for manager card
function managerHTML(managerData) {
  return `
      <div class="card m-2 shadow w-25">
        <div class="card-header bg-primary text-white">
          <h2 class="card-title">${managerData.name}</h2>
          <h3 class="card-title"><i class="fa-solid fa-mug-hot mr-1"></i>Manager</h3>
        </div>
        <div class="card-body bg-light">
          <ul class="list-group my-3">
            <li class="list-group-item">ID: ${managerData.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${managerData.email}">${managerData.email}</a></li>
            <li class="list-group-item">Office Number: ${managerData.officeNumber}</li>
          </ul>
        </div>
      </div>`;
}

// HTML template for engineer card
function engineerHTML(engineerData) {
  return `
      <div class="card m-2 shadow w-25">
        <div class="card-header bg-primary text-white">
          <h2 class="card-title">${engineerData.name}</h2>
          <h3 class="card-title"><i class="fa-solid fa-glasses mr-1"></i>Engineer</h3>
        </div>
        <div class="card-body bg-light">
          <ul class="list-group my-3">
            <li class="list-group-item">ID: ${engineerData.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineerData.email}">${engineerData.email}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${engineerData.github}">${engineerData.github}</a></li>
          </ul>
        </div>
      </div>`;
}

// HTML template for intern card
function internHTML(internData) {
  return `
      <div class="card m-2 shadow w-25">
        <div class="card-header bg-primary text-white">
          <h2 class="card-title">${internData.name}</h2>
          <h3 class="card-title"><i class="fa-solid fa-user-graduate mr-1"></i>Intern</h3>
        </div>
        <div class="card-body bg-light">
          <ul class="list-group my-3">
            <li class="list-group-item">ID: ${internData.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${internData.email}">${internData.email}</a></li>
            <li class="list-group-item">School: ${internData.school}</li>
          </ul>
        </div>
      </div>`;
}

// Parses employee array and concatenates HTML cards
function employeesHTML(employeesArr) {
  let employeeCards = "";
  for(let i of employeesArr) {
    console.log(i.getRole());
    switch(i.getRole()) {
      case "Manager":
        employeeCards += managerHTML(i);
        break;
      case "Engineer":
        employeeCards += engineerHTML(i);
        break;
      case "Intern":
        employeeCards += internHTML(i);
        break;
    }
  }
  return employeeCards;
}

// HTML template for full page
function template(employeesArr) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/17c65a2959.js" crossorigin="anonymous"></script>
  <title>My Team</title>
</head>
<body>
  <header class="jumbotron jumbotron-fluid text-center bg-danger text-white">
    <h1>My Team</h1>
  </header>

  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      
      ${employeesHTML(employeesArr)}

    </div>
  </div>
  
</body>
</html>`;
}

module.exports = template;