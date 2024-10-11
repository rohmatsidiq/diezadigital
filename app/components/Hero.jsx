"use client";

import { ArrowDownOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

export default function Hero() {
  const sendWhatsAppMessage = () => {
    const phoneNumber = "6285227593225";
    const message = "Halo, saya tertarik untuk konsultasi pembuatan website.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div className="p-5 h-full w-full">
      <div className="w-full p-5 min-h-96 md:min-h-screen rounded-3xl bg-image text-center flex flex-col gap-9 justify-center items-center">
        <h3 data-aos="zoom-in"
          style={{ textShadow: "0px 5px 16px #404040" }}
          className={`font-bold text-4xl md:text-6xl text-white max-w-3xl`}
        >
          Siap Tingkatkan Bisnis Anda?
        </h3>
        <p data-aos="zoom-in"
          style={{ textShadow: "0px 5px 16px #404040" }}
          className="max-w-3xl text-white text-lg md:text-xl font-bold"
        >
          Mulailah sekarang dan wujudkan website impian Anda! <br /> Klik tombol
          di bawah untuk konsultasi GRATIS dengan tim ahli kami.
        </p>

        <Button data-aos="zoom-in"
          onClick={sendWhatsAppMessage}
          icon={<WhatsAppOutlined />}
          type="primary"
          shape="round"
          size="large"
          className="text-black text-bold"
        >
          <b>HUBUNGI KAMI</b>
        </Button>
      </div>
    </div>
  );
}
