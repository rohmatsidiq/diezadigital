"use client";

import { WhatsAppOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Warning() {
  const sendWhatsAppMessage = () => {
    const phoneNumber = "6285227593225";
    const message = "Halo, saya mau konsultasi website coding.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div
      data-aos="zoom-in"
      className="mt-10 text-center p-5 border-2 max-w-2xl mx-auto rounded-3xl bg-yellow-400 flex gap-3 flex-col"
    >
      <h3 data-aos="zoom-in" className="font-bold text-2xl">
        PERHATIAN
      </h3>
      <hr />
      <p data-aos="zoom-in">
        Pricelist diatas untuk website yang dibangun menggunakan Wordpress
        dengan beberapa kekurangannya{" "}
        <small>(Silahkan seaching kekurangan Wordpress).</small>
      </p>
      <p data-aos="zoom-in">
        Jika Anda ingin konsultasi website custom yang dibangun dengan coding,
        silahkan klik tombol dibawah ini..
      </p>

      <div>
        <Button
          data-aos="zoom-in"
          onClick={sendWhatsAppMessage}
          icon={<WhatsAppOutlined />}
          // type="primary"
          shape="round"
          size="large"
          className="text-black text-bold"
        >
          <b>KONSULTASI WEBSITE CODING</b>
        </Button>
      </div>
    </div>
  );
}
