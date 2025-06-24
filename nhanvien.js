const employees = [
  ['NV001', 'Nguyễn', 'Văn An', '0901234567', '1990-05-12', 'an.nguyen@example.com', 'Sửa xe máy'],
  ['NV002', 'Trần', 'Thị Mai', '0912345678', '1992-08-23', 'mai.tran@example.com', 'Rửa xe'],
  ['NV003', 'Lê', 'Hoàng Phúc', '0923456789', '1988-03-19', 'phuc.le@example.com', 'Điện - máy'],
  ['NV004', 'Phạm', 'Minh Tuấn', '0934567890', '1995-11-05', 'tuan.pham@example.com', 'Sửa chữa chung'],
  ['NV005', 'Võ', 'Thị Hằng', '0945678901', '1993-07-30', 'hang.vo@example.com', 'Chăm sóc xe'],
  ['NV006', 'Đặng', 'Văn Duy', '0956789012', '1990-01-18', 'duy.dang@example.com', 'Bảo trì xe tải'],
  ['NV007', 'Bùi', 'Ngọc Lan', '0967890123', '1994-09-14', 'lan.bui@example.com', 'Sơn xe'],
  ['NV008', 'Cao', 'Tuấn Kiệt', '0978901234', '1996-06-07', 'kiet.cao@example.com', 'Lắp thiết bị phụ kiện'],
  ['NV009', 'Đỗ', 'Hồng Nhung', '0989012345', '1991-02-25', 'nhung.do@example.com', 'Rửa xe cao cấp'],
  ['NV010', 'Lý', 'Thanh Tùng', '0990123456', '1989-12-10', 'tung.ly@example.com', 'Chăm sóc nội thất'],
];

function renderTable(data) {
  const tableBody = document.getElementById("employeeTable");
  tableBody.innerHTML = "";
  data.forEach(emp => {
    const row = `<tr>
      <td>${emp[0]}</td>
      <td>${emp[1]}</td>
      <td>${emp[2]}</td>
      <td>${emp[3]}</td>
      <td>${emp[4]}</td>
      <td>${emp[5]}</td>
      <td>${emp[6]}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

document.getElementById("search").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = employees.filter(emp =>
    (emp[1] + ' ' + emp[2]).toLowerCase().includes(keyword)
  );
  renderTable(filtered);
});

renderTable(employees);
