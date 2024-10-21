"use client";

import { WhatsAppOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Cta() {
  const sendWhatsAppMessage = () => {
    const phoneNumber = "6285227593225";
    const message = "Halo, saya mau konsultasi jasa pembuatan website";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url);
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
        <Button
          data-aos="zoom-in"
          icon={<WhatsAppOutlined />}
          onClick={sendWhatsAppMessage}
          type="primary"
          shape="round"
          size="large"
          className="mt-5 text-black text-bold"
        >
          KONSULTASI VIA WHATSAPP
        </Button>
      </div>
    </div>
  );
}
