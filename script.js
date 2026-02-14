const form = document.getElementById("registrationForm");
const tableBody = document.querySelector("#studentTable tbody");
const filterInput = document.getElementById("filterInput");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const gender = document.getElementById("gender").value;
    const faculty = document.getElementById("faculty").value;
    const department = document.getElementById("department").value;
    const promotion = document.getElementById("promotion").value;

    if (fullname && gender && faculty && department && promotion) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${fullname}</td>
            <td>${gender}</td>
            <td>${faculty}</td>
            <td>${department}</td>
            <td>${promotion}</td>
        `;
        tableBody.appendChild(row);
        form.reset();
    }
});

// Filtrage du tableau
filterInput.addEventListener("keyup", function() {
    const filter = filterInput.value.toLowerCase();
    const rows = tableBody.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const rowText = rows[i].textContent.toLowerCase();
        rows[i].style.display = rowText.includes(filter) ? "" : "none";
    }
});
