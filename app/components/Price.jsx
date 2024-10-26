"use client";

import { CheckOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React from "react";
import Warning from "./Warning";

export default function Price() {
  const phoneNumber = "6285227593225";
  const message = "Halo, saya mau order jasa pembuatan website";
  const sendWhatsAppMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    // window.open(url);
    window.location.href = url;
  };
  return (
    <div id="price" className="p-4 py-20 bg-white">
      <div className="text-center">
        <h1 data-aos="zoom-in" className="font-bold text-4xl mb-3">
          Solusi Terbaik untuk Klien Kami
        </h1>
        <p data-aos="zoom-in" className="max-w-3xl mx-auto leading-relaxed">
          Setiap biaya pembuatan website berikut memiliki spesifikasi yang
          berbeda. Konsultasikan ke kami sesuatu yang belum anda pahami.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto mt-10">
        <Card data-aos="zoom-in" className="border-2 shadow-xl">
          <h3 className="text-center font-bold text-2xl">BASIC</h3>
          <h1 className="text-center font-bold text-4xl mt-3 mb-5">980.000</h1>
          <div className="flex gap-3 flex-col text-gray-500">
            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>Domain .com</p>
              </div>
            </div>

            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>Wordpress</p>
              </div>
            </div>

            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>Aktif 1 Tahun</p>
              </div>
            </div>

            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>Kapasitas 750MB</p>
              </div>
            </div>

            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>Unlimited Bandwidth</p>
              </div>
            </div>

            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>1 Halaman Utama</p>
              </div>
            </div>
          </div>
          <div className="mt-6 w-full">
            <div data-aos="zoom-in" className="w-full flex">
              <a
                className="bg-green-500 hover:bg-green-400 rounded-full px-4 py-2 w-full text-center hover:text-black"
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`}
              >
                <WhatsAppOutlined /> HUBUNGI KAMI
              </a>
            </div>
          </div>
        </Card>

        <Card
          data-aos="zoom-in"
          className="shadow-xl"
          style={{ border: "3px solid #ffd800" }}
        >
          <h3 className="text-center font-bold text-2xl">REGULER</h3>
          <h1 className="text-center font-bold text-4xl mt-3 mb-5">
            1.980.000
          </h1>
          <div className="flex gap-3 flex-col text-gray-500">
            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>Domain .com</p>
              </div>
            </div>

            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>Wordpress</p>
              </div>
            </div>

            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>Aktif 1 Tahun</p>
              </div>
            </div>

            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>Kapasitas 2GB</p>
              </div>
            </div>

            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>Unlimited Bandwidth</p>
              </div>
            </div>

            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>3 Halaman Utama</p>
              </div>
            </div>
          </div>
          <div className="mt-6 w-full">
            <div data-aos="zoom-in" className="w-full flex">
              <a
                className="bg-green-500 hover:bg-green-400 rounded-full px-4 py-2 w-full text-center hover:text-black"
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`}
              >
                <WhatsAppOutlined /> HUBUNGI KAMI
              </a>
            </div>
          </div>
        </Card>

        <Card data-aos="zoom-in" className="border-2 shadow-xl">
          <h3 className="text-center font-bold text-2xl">PRO</h3>
          <h1 className="text-center font-bold text-4xl mt-3 mb-5">
            2.800.000
          </h1>
          <div className="flex gap-3 flex-col text-gray-500">
            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>Domain .com</p>
              </div>
            </div>

            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>Wordpress</p>
              </div>
            </div>

            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>Aktif 1 Tahun</p>
              </div>
            </div>

            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>Kapasitas 2GB</p>
              </div>
            </div>

            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>Unlimited Bandwidth</p>
              </div>
            </div>

            <div className="flex gap-2 text-lg">
              <div>
                <CheckOutlined className="text-xl" />
              </div>
              <div>
                <p>5 Halaman Utama</p>
              </div>
            </div>
          </div>
          <div className="mt-6 w-full">
            <div data-aos="zoom-in" className="w-full flex">
              <a
                className="bg-green-500 hover:bg-green-400 rounded-full px-4 py-2 w-full text-center hover:text-black"
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`}
              >
                <WhatsAppOutlined /> HUBUNGI KAMI
              </a>
            </div>
          </div>
        </Card>
      </div>

      <Warning />
    </div>
  );
}
