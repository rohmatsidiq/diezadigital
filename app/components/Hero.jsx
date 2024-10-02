"use client";

import { ArrowDownOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

export default function Hero() {
  const scrollToPrice = () => {
    const priceElement = document.getElementById("price");
    if (priceElement) {
      priceElement.scrollIntoView({ behavior: "smooth" }); // Scroll dengan animasi smooth
    }
  };
  return (
    <div className="p-5 h-full w-full">
      <div className="w-full p-5 min-h-96 md:min-h-screen rounded-3xl bg-image text-center flex flex-col gap-9 justify-center items-center">
        <h3
          style={{ textShadow: "0px 5px 16px #404040" }}
          className={`font-bold text-4xl md:text-6xl text-white max-w-3xl`}
        >
          Jasa Pembuatan Webiste dan Aplikasi Web Terpercaya
        </h3>
        <p
          style={{ textShadow: "0px 5px 16px #404040" }}
          className="max-w-3xl text-white text-lg md:text-xl font-bold"
        >
          Jadikan bisnis Anda lebih mudah ditemukan dan lebih dipercaya dengan
          website yang dirancang khusus untuk kebutuhan Anda.
        </p>
        <Button
          icon={<ArrowDownOutlined />}
          onClick={scrollToPrice}
          type="primary"
          shape="round"
          size="large"
          className="text-black"
        >
          <b>Cek Harga</b>
        </Button>
      </div>
    </div>
  );
}
