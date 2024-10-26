"use client";

import { WhatsAppOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Cta() {
  const phoneNumber = "6285227593225";
  const message = "Halo, saya mau konsultasi jasa pembuatan website";
  const sendWhatsAppMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    // window.open(url);
    window.location.href = url;
  };
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <p
          data-aos="zoom-in"
          className="text-center max-w-3xl mx-auto md:text-xl"
        >
          Konsultasi langsung dengan kami untuk penjelasan lebih lengkap agar
          tidak salah memilih jenis website dan mendapatkan solusi yang terbaik!
        </p>
        <div data-aos="zoom-in" className="mt-5">
          <a
            className="bg-green-500 hover:bg-green-400 rounded-full px-4 py-2"
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
          >
            <WhatsAppOutlined /> HUBUNGI KAMI
          </a>
        </div>
      </div>
    </div>
  );
}
