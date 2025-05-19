import React, { useState } from "react";
import axios from "axios";
import "./BookingForm.css";

const BookingForm = () => {
  const [form, setForm] = useState({
    tenKhachHang: "",
    tenTaiKhoan: "",
    soCCCD: "",
    maPhieu: "",
    loaiPhong: "Thường gia",
    soPhong: "",
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/book", form);
      alert("Đặt phòng thành công!");
      setForm({
        tenKhachHang: "",
        tenTaiKhoan: "",
        soCCCD: "",
        maPhieu: "",
        loaiPhong: "Thường gia",
        soPhong: "",
        checkIn: "",
        checkOut: "",
      });
    } catch (error) {
      alert("Lỗi khi đặt phòng");
      console.error(error);
    }
  };

  return (
    <div className="booking-container">
      <h2>Đặt phòng Online</h2>

      <h4>Thông tin khách hàng</h4>
      <input
        name="tenKhachHang"
        placeholder="Tên khách hàng"
        value={form.tenKhachHang}
        onChange={handleChange}
      />
      <input
        name="tenTaiKhoan"
        placeholder="Tên tài khoản"
        value={form.tenTaiKhoan}
        onChange={handleChange}
      />
      <input
        name="soCCCD"
        placeholder="Số CCCD"
        type="password"
        value={form.soCCCD}
        onChange={handleChange}
      />

      <h4>Thông tin thuê phòng</h4>
      <input
        name="maPhieu"
        placeholder="Mã phiếu thuê"
        value={form.maPhieu}
        onChange={handleChange}
      />
      <select name="loaiPhong" value={form.loaiPhong} onChange={handleChange}>
        <option value="Thường gia">Thương gia</option>
        <option value="Cao cấp">Cao cấp</option>
        <option value="VIP">VIP</option>
      </select>
      <input
        name="soPhong"
        placeholder="Số phòng"
        value={form.soPhong}
        onChange={handleChange}
      />
      <input
        type="date"
        name="checkIn"
        value={form.checkIn}
        onChange={handleChange}
      />
      <input
        type="date"
        name="checkOut"
        value={form.checkOut}
        onChange={handleChange}
      />

      <div className="booking-buttons">
        <button onClick={handleSubmit}>Xác nhận</button>
        <button onClick={() => window.location.reload()}>Huỷ</button>
      </div>
    </div>
  );
};

export default BookingForm;
