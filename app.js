// Function to handle adding posts
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    // Create a new post element
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    
    const postTitle = document.createElement('h3');
    postTitle.textContent = title;
    
    const postContent = document.createElement('p');
    postContent.textContent = content;

    // Append title and content to the postDiv
    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);

    // Add the new post to the posts list
    document.getElementById('posts-list').appendChild(postDiv);

    // Clear the input fields
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
});

// Function to change the background color or theme
let isDarkMode = false;
function changeTheme() {
    const body = document.body;

    if (isDarkMode) {
        body.style.backgroundColor = '#f9f9f9';
        body.style.color = '#333';
        isDarkMode = false;
    } else {
        body.style.backgroundColor = '#34495e';
        body.style.color = '#ecf0f1';
        isDarkMode = true;
    }
}
