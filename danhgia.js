document.getElementById('reviewForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const uses_id = document.getElementById('uses_id').value.trim();
  const ma_dh = document.getElementById('ma_dh').value.trim();
  const diem = parseInt(document.getElementById('diem').value);
  const nhan_xet = document.getElementById('nhan_xet').value.trim();
  const ngayDanhgia = new Date().toISOString();

  const fakeID = "DG" + Math.floor(Math.random() * 10000);

  const reviewData = {
    maDG: fakeID,
    uses_id,
    maDH: ma_dh,
    diem,
    nhanXet: nhan_xet,
    ngayDanhgia
  };

  console.log("Dữ liệu đánh giá:", reviewData);

  document.getElementById('result').innerHTML =
    `<p style="color: green;">🎉 Đánh giá đã được gửi! Cảm ơn bạn.</p>`;

  this.reset(); 
});
