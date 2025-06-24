const users = {
  "U021": { ho: "Minh", ten: "Nguyễn", gioiTinh: "Nam", namSinh: 1998, email: "minhnguyen@example.com", sdt: "0912345678", diaChi: "12 Trần Hưng Đạo, Hà Nội" },
  "U022": { ho: "Lan", ten: "Phạm", gioiTinh: "Nữ", namSinh: 1995, email: "lanpham@example.com", sdt: "0912345679", diaChi: "34 Lê Lợi, Đà Nẵng" },
  "U003": { ho: "Hùng", ten: "Lê", gioiTinh: "Nam", namSinh: 1990, email: "le.hung@example.com", sdt: "0912345680", diaChi: "56 Nguyễn Huệ, TP.HCM" },
  "U004": { ho: "Thảo", ten: "Võ", gioiTinh: "Nữ", namSinh: 1997, email: "thao.vo@example.com", sdt: "0912345681", diaChi: "78 Hai Bà Trưng, Cần Thơ" },
  "U005": { ho: "Duy", ten: "Trần", gioiTinh: "Nam", namSinh: 2000, email: "duytran@example.com", sdt: "0912345682", diaChi: "23 Pasteur, Hải Phòng" },
  "U006": { ho: "Linh", ten: "Ngô", gioiTinh: "Nữ", namSinh: 1996, email: "linhngo@example.com", sdt: "0912345683", diaChi: "89 Phạm Văn Đồng, Quảng Ninh" },
  "U007": { ho: "Tú", ten: "Bùi", gioiTinh: "Nam", namSinh: 1994, email: "tubui@example.com", sdt: "0912345684", diaChi: "123 Trường Chinh, Bình Dương" },
  "U008": { ho: "Trang", ten: "Đặng", gioiTinh: "Nữ", namSinh: 1999, email: "dangtrang@example.com", sdt: "0912345685", diaChi: "45 Nguyễn Văn Linh, Huế" },
  "U009": { ho: "Khoa", ten: "Phan", gioiTinh: "Nam", namSinh: 1993, email: "khoaphan@example.com", sdt: "0912345686", diaChi: "67 Lý Thường Kiệt, Bắc Ninh" },
  "U010": { ho: "My", ten: "Đinh", gioiTinh: "Nữ", namSinh: 1992, email: "mydinh@example.com", sdt: "0912345687", diaChi: "78 Hoàng Diệu, Nam Định" },
};
const phuongTien = {
  "PT001": { tenPT: "Air Blade", hangPT: "Honda", loaiPT: "Xe tay ga", bienSo: "29A-12345", mauPT: "Đen", dongXe: "2020", usesId: "U021" },
  "PT002": { tenPT: "Lead", hangPT: "Honda", loaiPT: "Xe tay ga", bienSo: "30B-67890", mauPT: "Đỏ", dongXe: "2021", usesId: "U022" },
  "PT003": { tenPT: "Wave", hangPT: "Honda", loaiPT: "Xe số", bienSo: "59C-34567", mauPT: "Trắng", dongXe: "2019", usesId: "U003" },
  "PT004": { tenPT: "Exciter", hangPT: "Yamaha", loaiPT: "Xe côn tay", bienSo: "65D-98765", mauPT: "Xanh", dongXe: "2018", usesId: "U004" },
  "PT005": { tenPT: "Sirius", hangPT: "Yamaha", loaiPT: "Xe số", bienSo: "72E-54321", mauPT: "Đen đỏ", dongXe: "2020", usesId: "U005" },
  "PT006": { tenPT: "SH Mode", hangPT: "Honda", loaiPT: "Xe tay ga", bienSo: "20F-13579", mauPT: "Trắng", dongXe: "2022", usesId: "U006" },
  "PT007": { tenPT: "Vision", hangPT: "Honda", loaiPT: "Xe tay ga", bienSo: "99G-24680", mauPT: "Hồng", dongXe: "2021", usesId: "U007" },
  "PT008": { tenPT: "Janus", hangPT: "Yamaha", loaiPT: "Xe tay ga", bienSo: "33H-11223", mauPT: "Vàng", dongXe: "2020", usesId: "U008" },
  "PT009": { tenPT: "Winner", hangPT: "Honda", loaiPT: "Xe côn tay", bienSo: "40K-44556", mauPT: "Đen xanh", dongXe: "2019", usesId: "U009" },
  "PT010": { tenPT: "Liberty", hangPT: "Piaggio", loaiPT: "Xe tay ga", bienSo: "27L-77889", mauPT: "Trắng đen", dongXe: "2018", usesId: "U010" },
};


// Lấy tham số từ URL
function getParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    usesId: params.get('usesId'),
    maPT: params.get('maPT')
  };
}

// Nếu đang ở trang chi tiết thì tự hiển thị thông tin
if (window.location.pathname.includes("chi_tiet.html")) {
  const { usesId, maPT } = getParams();
  if (usesId && maPT) {
    document.getElementById("usesId")?.remove();
    document.getElementById("maPT")?.remove();
    traCuu(usesId, maPT);
  } else {
    document.getElementById("ketQua").innerHTML = "❌ Không có dữ liệu hợp lệ trong URL.";
  }
}

function traCuu(inputUsesId, inputMaPT) {
  const usesId = inputUsesId || document.getElementById("usesId").value.trim();
  const maPT = inputMaPT || document.getElementById("maPT").value.trim();
  const ketQua = document.getElementById("ketQua");

  const user = users[usesId];
  const pt = phuongTien[maPT];

  if (!user) {
    ketQua.innerHTML = `<p style="color:red;">❌ Không tìm thấy người dùng với mã <b>${usesId}</b>.</p>`;
    return;
  }

  if (!pt || pt.usesId !== usesId) {
    ketQua.innerHTML = `<p style="color:red;">❌ Không tìm thấy phương tiện với mã <b>${maPT}</b> thuộc người dùng <b>${usesId}</b>.</p>`;
    return;
  }

  ketQua.innerHTML = `
    <h2>👤 Thông tin người dùng</h2>
    <p><strong>Họ tên:</strong> ${user.ho} ${user.ten}</p>
    <p><strong>Giới tính:</strong> ${user.gioiTinh}</p>
    <p><strong>Năm sinh:</strong> ${user.namSinh}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>SĐT:</strong> ${user.sdt}</p>
    <p><strong>Địa chỉ:</strong> ${user.diaChi}</p>

    <h2>🚗 Thông tin phương tiện</h2>
    <p><strong>Tên xe:</strong> ${pt.tenPT}</p>
    <p><strong>Hãng:</strong> ${pt.hangPT}</p>
    <p><strong>Loại:</strong> ${pt.loaiPT}</p>
    <p><strong>Biển số:</strong> ${pt.bienSo}</p>
    <p><strong>Màu:</strong> ${pt.mauPT}</p>
    <p><strong>Dòng xe:</strong> ${pt.dongXe}</p>
  `;
}
