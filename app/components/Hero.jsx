"use client";

import { ArrowDownOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

export default function Hero() {
  const phoneNumber = "6285227593225";
  const message = "Halo, saya tertarik untuk konsultasi pembuatan website";
  const sendWhatsAppMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url);
  };
  return (
    <div className="p-5 py-20 h-full w-full flex gap-20 md:gap-5 md:flex-row flex-col bg-white">
      <div className="w-full flex flex-col gap-8 justify-center">
        <h3
          data-aos="zoom-in"
          className={`font-bold text-4xl md:text-6xl max-w-3xl`}
        >
          Siap Tingkatkan Bisnis Anda?
        </h3>
        <p
          data-aos="zoom-in"
          className="max-w-3xl text-lg md:text-xl font-bold"
        >
          Mulailah sekarang dan wujudkan website impian Anda! <br /> Klik tombol
          di bawah untuk konsultasi GRATIS dengan tim ahli kami.
        </p>

        <div>
          {/* <Button
            data-aos="zoom-in"
            onClick={sendWhatsAppMessage}
            icon={<WhatsAppOutlined />}
            type="primary"
            shape="round"
            size="large"
            className="text-black text-bold"
          >
            <b>HUBUNGI KAMI</b>
          </Button> */}

          <div data-aos="zoom-in">
            <a
              className="bg-green-500 hover:bg-green-400 rounded-full px-4 py-2"
              href={`https://wa.me/${phoneNumber}`}
            >
              <WhatsAppOutlined /> HUBUNGI KAMI
            </a>
          </div>
        </div>
      </div>

      <div className="w-full p-5">
        <img
          data-aos="zoom-in"
          src="/man.png"
          alt="hero image"
          className="w-full"
        />
      </div>
    </div>
  );
}
