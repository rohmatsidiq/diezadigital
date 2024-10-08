"use client";

import {
  MailOutlined,
  PushpinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="p-4 bg-yellow-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 text-xl text-center">
          <div className="flex gap-1 items-center justify-center">
            <WhatsAppOutlined />
            <p>085 227 593 225</p>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <MailOutlined />
            <p>rohmatsidiq9@gmail.com</p>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <PushpinOutlined />
            <p>Sukoharjo, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
