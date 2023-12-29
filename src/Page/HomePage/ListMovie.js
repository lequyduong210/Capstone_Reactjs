import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Tooltip } from "antd";
import Meta from "antd/es/card/Meta";
import { NavLink } from "react-router-dom";

export default function ListMovie() {
  const [movieArr, setmovieArr] = useState([]);
  useEffect(() => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NCIsIkhldEhhblN0cmluZyI6IjE0LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTY0NDgwMDAwMCIsIm5iZiI6MTY4NzcxMjQwMCwiZXhwIjoxNzE1NzkyNDAwfQ.cy8EAM6hrKh2o6c9THZW5lrKeOEmQXIDgFVyIf7K_rU",
      },
    })
      .then((res) => {
        console.log(res.data.content);
        setmovieArr(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="grid grid-cols-5 gap-5 container">
      {movieArr.map(({ hinhAnh, tenPhim, moTa, maPhim }) => {
        return (
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={hinhAnh} />}
          >
            <Meta
              title={tenPhim}
              description={
                <Tooltip trigger={"hover"} title={moTa}>
                  <span className="line-clamp-2">{moTa}</span>
                </Tooltip>
              }
            />
            <NavLink
              to={`/detail/${maPhim}`}
              className="rounded px-5 py-2 block bg-sky-400 text-center text-white mt-3"
            >
              Xem chi tiết
            </NavLink>
          </Card>
        );
      })}
    </div>
  );
}
