document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('query');
    const serviceBoxes = document.querySelectorAll('.service-box');
    const servicesTitle = document.querySelector('.services-title');

    if (searchQuery) {
        // Update the title to reflect the search
        if (servicesTitle) {
            servicesTitle.textContent = `Kết quả tìm kiếm cho: "${searchQuery}"`;
        }

        const normalizedSearchQuery = searchQuery.toLowerCase();

        serviceBoxes.forEach(box => {
            const boxText = box.textContent.toLowerCase();
            if (boxText.includes(normalizedSearchQuery)) {
                box.style.display = 'block'; // Show the box
            } else {
                box.style.display = 'none'; // Hide the box
            }
        });

        // If no results, you might want to display a message
        const visibleBoxes = Array.from(serviceBoxes).filter(box => box.style.display !== 'none');
        if (visibleBoxes.length === 0) {
            const noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = 'Không tìm thấy dịch vụ phù hợp với từ khóa của bạn.';
            noResultsMessage.style.textAlign = 'center';
            noResultsMessage.style.marginTop = '20px';
            document.querySelector('.services').appendChild(noResultsMessage);
        }

    } else {
        // If no search query, show all services initially
        serviceBoxes.forEach(box => {
            box.style.display = 'block';
        });
        if (servicesTitle) {
            servicesTitle.textContent = 'Dịch Vụ & Bảng Giá Của Chúng Tôi'; // Or whatever default title you want
        }
    }
});