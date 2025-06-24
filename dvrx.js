// This function will handle the search redirection
function setupGlobalSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function () {
            const keyword = searchInput.value.trim();

            if (keyword !== '') {
                window.location.href = 'tim_kiem.html?query=' + encodeURIComponent(keyword);
            } else {
                alert('Vui lòng nhập từ khóa để tìm kiếm.');
            }
        });
    }
}

// Call the setup function when the DOM is loaded
document.addEventListener('DOMContentLoaded', setupGlobalSearch);