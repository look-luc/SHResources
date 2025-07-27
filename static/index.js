const STORAGE_KEY = 'myCheckboxes'; // A key for your localStorage data

// Function to save the current state of checkboxes to localStorage
function saveCheckboxes() {
    const container = document.getElementById('container');
    const checkboxes = container.querySelectorAll('.checkbox-wrapper');
    const checkboxData = [];

    checkboxes.forEach(wrapper => {
        const checkbox = wrapper.querySelector('input[type="checkbox"]');
        const label = wrapper.querySelector('label');
        checkboxData.push({
            id: checkbox.id,
            label: label.textContent,
            checked: checkbox.checked
        });
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkboxData));
}

// Function to load checkboxes from localStorage and re-create them
function loadCheckboxes() {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear existing checkboxes (if any, on initial load)

    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
        const checkboxData = JSON.parse(storedData);
        checkboxData.forEach(data => {
            const wrapper = document.createElement('div');
            wrapper.className = 'checkbox-wrapper';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = data.id;
            checkbox.checked = data.checked;
            checkbox.addEventListener('change', saveCheckboxes); // Add event listener for persistence

            const label = document.createElement('label');
            label.htmlFor = data.id;
            label.textContent = data.label;

            wrapper.appendChild(checkbox);
            wrapper.appendChild(label);
            container.appendChild(wrapper);
        });
    }
}

// Function to add a new checkbox
function addCheckbox() {
    const labelInput = document.getElementById('newCheckboxLabel');
    const labelValue = labelInput.value.trim();

    if (!labelValue) {
        alert("Please enter a label for the checkbox.");
        return;
    }

    const container = document.getElementById('container');

    // Generate a unique ID for the checkbox to avoid conflicts if labels are not unique
    const uniqueId = 'checkbox-' + Date.now(); 

    const wrapper = document.createElement('div');
    wrapper.className = 'checkbox-wrapper';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = uniqueId; // Use uniqueId
    checkbox.addEventListener('change', saveCheckboxes); // Save state on change

    const label = document.createElement('label');
    label.htmlFor = uniqueId; // Use uniqueId
    label.textContent = labelValue;

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    container.appendChild(wrapper);

    labelInput.value = ''; // Clear the input field

    saveCheckboxes(); // Save after adding a new checkbox
}

// Function to remove the last checkbox
function removeLastCheckbox() {
    const container = document.getElementById('container');
    const checkboxes = container.getElementsByClassName('checkbox-wrapper');
    if (checkboxes.length > 0) {
        container.removeChild(checkboxes[checkboxes.length - 1]);
        saveCheckboxes(); // Save after removing a checkbox
    }
}

document.addEventListener('DOMContentLoaded', loadCheckboxes);