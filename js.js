"use strict";

function searchId() {
    let searchInput = document.getElementById("id").value;
    let inputText = searchInput.trim();

    if (!inputText) {
        return;
    }


    let filterResults = [];

    filterResults = customerData.filter(customer => {
        return customer.CustomerID.toString().startsWith(inputText);
    });

    displayResults(filterResults);
}

function searchLastName() {
    let searchInput = document.getElementById("lastName").value;
    let inputText = searchInput.trim();

    if (!inputText) {
        return;
    }


    let filterResults = [];

    filterResults = customerData.filter(customer => {
        return customer.LastName.toUpperCase().startsWith(inputText.toUpperCase());
    });

    displayResults(filterResults);
}

function searchCompanyName() {
    let searchInput = document.getElementById("companyName").value;
    let inputText = searchInput.trim();

    if (!inputText) {
        return;
    }


    let filterResults = [];

    filterResults = customerData.filter(customer => {
        return customer.CompanyName.toUpperCase().startsWith(inputText.toUpperCase());
    });

    displayResults(filterResults);
}

function searchPhone() {
    let searchInput = document.getElementById("phoneNumber").value;
    let inputText = searchInput.trim();

    if (!inputText) {
        return;
    }


    let filterResults = [];

    filterResults = customerData.filter(customer => {
        return customer.Phone.startsWith(inputText);
    });

    displayResults(filterResults);
}

function displayResults(filterResults) {
    let output = document.getElementById("result");
    output.innerHTML = "";

    if (filterResults.length != 0) {
        let firstRow = document.createElement("tr");
        let idHeader = document.createElement("td");
        let nodeId = document.createTextNode("ID");
        idHeader.appendChild(nodeId);
        firstRow.appendChild(idHeader);
        let nameHeader = document.createElement("td");
        let nodeName = document.createTextNode("Name");
        nameHeader.appendChild(nodeName);
        firstRow.appendChild(nameHeader);
        let cNameHeader = document.createElement("td");
        let nodeCName = document.createTextNode("Company Name");
        cNameHeader.appendChild(nodeCName);
        firstRow.appendChild(cNameHeader);
        let phoneHeader = document.createElement("td");
        let nodePhone = document.createTextNode("Phone Number");
        phoneHeader.appendChild(nodePhone);
        firstRow.appendChild(phoneHeader);
        output.appendChild(firstRow);
    } else {
        let firstRow = document.createElement("tr");
        let noHeader = document.createElement("td");
        let nodeNo = document.createTextNode("No Results.");
        noHeader.appendChild(nodeNo);
        firstRow.appendChild(noHeader);
        output.appendChild(firstRow);
    }

    for (let i = 0; i < filterResults.length; i++) {
        let row = document.createElement("tr");
        let data1 = document.createElement("td");
        let node1 = document.createTextNode((filterResults[i].CustomerID));
        data1.appendChild(node1);
        row.appendChild(data1);
        let data2 = document.createElement("td");
        let node2 = document.createTextNode((filterResults[i].Title + " " + filterResults[i].FirstName + " " +
            filterResults[i].LastName));
        data2.appendChild(node2);
        row.appendChild(data2);
        let data3 = document.createElement("td");
        let node3 = document.createTextNode((filterResults[i].CompanyName));
        data3.appendChild(node3);
        row.appendChild(data3);
        let data4 = document.createElement("td");
        let node4 = document.createTextNode((filterResults[i].Phone));
        data4.appendChild(node4);
        row.appendChild(data4);
        output.appendChild(row);
    }
}