import {
  GlobalOutlined,
  PicLeftOutlined,
  ShopOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

export default function Layanan() {
  return (
    <div className="p-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full flex gap-5 justify-center flex-col">
            <h3 data-aos="zoom-in" className="font-bold text-2xl">
              Layanan Kami
            </h3>
            <h1 data-aos="zoom-in" className="font-bold text-5xl">
              Kami Menciptakan Produk Digital Terbaik
            </h1>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-5">
              <Card data-aos="zoom-in" className="border-none shadow-xl mb-10">
                <div className="bg-[#ffd800]  p-3 rounded-full w-16 h-16">
                  <GlobalOutlined className="text-5xl -mt-5 -ml-2" />
                </div>
                <h3 className="font-bold text-2xl my-3">Website Bisnis</h3>
                <p className="md:text-lg">
                  Desain profesional yang siap mendukung pertumbuhan bisnis
                  Anda.
                </p>
              </Card>
              <Card data-aos="zoom-in" className="border-none shadow-xl mt-10">
                <div className="bg-[#ffd800]  p-3 rounded-full w-16 h-16">
                  <ShopOutlined className="text-5xl -mt-5 -ml-2" />
                </div>
                <h3 className="font-bold text-2xl my-3">Toko Online</h3>
                <p className="md:text-lg">
                  Solusi e-commerce lengkap, mudah digunakan, dan aman.
                </p>
              </Card>
              <Card data-aos="zoom-in" className="border-none shadow-xl mb-10">
                <div className="bg-[#ffd800]  p-3 rounded-full w-16 h-16">
                  <ShoppingOutlined className="text-5xl -mt-5 -ml-2" />
                </div>
                <h3 className="font-bold text-2xl my-3">Landing Page</h3>
                <p className="md:text-lg">
                  Halaman promosi yang menarik untuk meningkatkan konversi.
                </p>
              </Card>
              <Card data-aos="zoom-in" className="border-none shadow-xl mt-10">
                <div className="bg-[#ffd800]  p-3 rounded-full w-16 h-16">
                  <PicLeftOutlined className="text-5xl -mt-5 -ml-2" />
                </div>
                <h3 className="font-bold text-2xl my-3">Blog & Portofolio </h3>
                <p className="md:text-lg">
                  Tunjukkan karya atau tulisan Anda dengan website modern dan
                  user-friendly.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
