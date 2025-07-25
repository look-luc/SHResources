function addCheckbox() {
    const labelValue = document.getElementById('newCheckboxLabel').value.trim();
    if (!labelValue) return;

    const container = document.getElementById('container');

    const wrapper = document.createElement('div');
    wrapper.className = 'checkbox-wrapper';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = labelValue;

    const label = document.createElement('label');
    label.htmlFor = labelValue;
    label.textContent = labelValue;

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    container.appendChild(wrapper);

    document.getElementById('newCheckboxLabel').value = '';
  }

  // Optional: remove the last checkbox if "Remove" button clicked
  function removeCheckbox() {
    const container = document.getElementById('container');
    const checkboxes = container.getElementsByClassName('checkbox-wrapper');
    if (checkboxes.length > 0) {
      container.removeChild(checkboxes[checkboxes.length - 1]);
    }
  }