import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { https } from "../../services/config";
import { Rate } from "antd";

export default function DetailPage() {
  const [detail, setDetail] = useState({});
  let { idPhim } = useParams();
  useEffect(() => {
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idPhim}`)
      .then((res) => {
        console.log(res.data.content);
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container flex items-center">
      <img src={detail.hinhAnh} className="w-96" alt="" />
      <div className="text-center space-y-3 flex-grow">
        <h2 className="strong text-5xl">{detail.tenPhim}</h2>
        <Rate allowHalf count={10} value={detail.danhGia} />
      </div>
    </div>
  );
}
