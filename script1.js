document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const output = document.getElementById('out');

    input.addEventListener('input', () => {
        const inputValue = input.value; 
        output.textContent = inputValue;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const notificationDiv = document.getElementById('notificationDiv');

    submitButton.addEventListener('click', function() {
        
        notificationDiv.classList.add('active');

       
        setTimeout(function() {
            notificationDiv.classList.remove('active');
        }, 8000); 
    });
});

