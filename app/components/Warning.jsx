"use client";

import { WhatsAppOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Warning() {
  const phoneNumber = "6285227593225";
  const message = "Halo, saya mau konsultasi website coding";
  const sendWhatsAppMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    // window.open(url);
    window.location.href = url;
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
        Harga diatas untuk website yang dibangun menggunakan Wordpress dengan
        beberapa kekurangannya{" "}
        <small>(Silahkan seaching kekurangan Wordpress).</small>
      </p>
      <p data-aos="zoom-in">
        Jika Anda ingin konsultasi website custom yang dibangun dengan coding,
        silahkan klik tombol dibawah ini..
      </p>

      <div data-aos="zoom-in">
        <a
          className="bg-white rounded-full px-4 py-2"
          href={`https://wa.me/${phoneNumber}`}
        >
          <WhatsAppOutlined /> HUBUNGI KAMI
        </a>
      </div>
    </div>
  );
}
