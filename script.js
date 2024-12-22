function toggleDetails() {
    const table = document.getElementById('details-table');
    // التأكد أن الجدول مرئي أولاً عند تحميل الصفحة
    if (table.style.display === 'none' || table.style.display === '') {
        table.style.display = 'table'; // إظهار الجدول
    } else {
        table.style.display = 'none'; // إخفاء الجدول
    }
}
