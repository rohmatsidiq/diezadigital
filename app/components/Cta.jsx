"use client";

import { WhatsAppOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Cta() {
  const sendWhatsAppMessage = () => {
    const phoneNumber = "6285227593225";
    const message = "Halo, saya mau konsultasi jasa pembuatan website.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div className="bg-black p-4 text-white py-10 mt-10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-center max-w-3xl mx-auto">
          Konsultasi langsung dengan kami untuk penjelasan lebih lengkap agar
          tidak salah memilih jenis website dan mendapatkan solusi yang terbaik!
        </p>
        <Button
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
