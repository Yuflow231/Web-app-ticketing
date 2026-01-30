const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('ticket-file');
const fileListDisplay = document.getElementById('file-list');
let selectedFiles = []; // Tab to stock selected files

// Open file explorer on click
dropZone.addEventListener('click', () => {
    fileInput.click();
});

// Update selected file list
fileInput.addEventListener('change', () => {
    Array.from(fileInput.files).forEach(file => {
        if (!selectedFiles.some(f => f.name === file.name)) {
            selectedFiles.push(file);
        }
    });
    renderFileList();
});

// Handle the drag&drop
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const files = e.dataTransfer.files;
    Array.from(files).forEach(file => {
        if (!selectedFiles.some(f => f.name === file.name)) {
            selectedFiles.push(file);
        }
    });
    renderFileList();
});

// Function to render file list
function renderFileList() {
    fileListDisplay.innerHTML = ''; // Reset list
    selectedFiles.forEach((file, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = file.name;

        // Add a button to remove a file
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.style.marginLeft = '10px';
        removeButton.addEventListener('click', () => {
            selectedFiles.splice(index, 1); // Delete file from list
            renderFileList(); // Update render
        });

        listItem.appendChild(removeButton);
        fileListDisplay.appendChild(listItem);
    });
}