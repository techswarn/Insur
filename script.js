// Create a class for insurance

class Insurance {
  constructor(pnumber, amount, user, date) {
    this.pnumber = pnumber;
    this.amount = amount;
    this.user = user;
    this.date = date;
  }
}

// Creating a UI class

class UI {
  static getData() {
    const insuranceData = [
      {
        pnumber: "7845622",
        amount: "23,000",
        user: "Swarn",
        date: "01/03/2020",
      },
      {
        pnumber: "7845622",
        amount: "23,000",
        user: "Swarn",
        date: "01/03/2020",
      },
    ];

    const insurance = insuranceData;

    insurance.forEach((insur) => {
      UI.addData(insur);
    });
  }

  static addData(insur) {
    const list = document.querySelector("#data-list");
    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${insur.pnumber}</td>
    <td>${insur.amount}</td>
    <td>${insur.user}</td>
    <td>${insur.date}</td>
    <td><button class="btn-delete">Delete</button></td> 
    `;
    list.appendChild(row);
  }

  //Delete Book
  static deleteData(el) {
    if (el.classList.contains("btn-delete")) {
      console.log("yes");
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    const flex = document.querySelector(".flex-column1");
    const form = document.querySelector("#insurance-form");
    flex.insertBefore(div, form);

    setTimeout(() => document.querySelector(".alert").remove(), 1000);
  }

  //Clear fields

  static clearFields() {
    document.querySelector("#pnumber").value = " ";
    document.querySelector("#amount").value = " ";
    document.querySelector("#user").value = " ";
    document.querySelector("#date").value = " ";
  }
}

// Event: Display Data
document.addEventListener("DOMContentLoaded", UI.getData);

//Event: Add to List

document.querySelector("#insurance-form").addEventListener("submit", (e) => {
  // Get form values
  e.preventDefault();
  const pnumber = document.querySelector("#pnumber").value;
  const amount = document.querySelector("#amount").value;
  const user = document.querySelector("#user").value;
  const date = document.querySelector("#date").value;

  //Valid fields
  if (pnumber === " " || amount === " " || user === " " || date === " ") {
    UI.showAlert("Please fill all data", "danger");
  } else {
    const insurance = new Insurance(pnumber, amount, user, date);
    console.log(insurance);
    //Add data
    UI.addData(insurance);
    UI.showAlert("Data successfully added", "success");
    //clear fields
    UI.clearFields();
  }
});

//Event remove data

document.querySelector("#data-list").addEventListener("click", (e) => {
  UI.deleteData(e.target);
  UI.showAlert("Entry deleted", "success");
});
