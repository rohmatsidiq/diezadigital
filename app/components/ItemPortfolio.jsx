"use client";

import { Button, Card } from "antd";

export default function ItemPortfolio({ image = "", title = "", link = "" }) {
  const handleViewWebsite = () => {
    window.location.href = link;
  };
  return (
    <Card
      className="border-none"
      title={<h3 className="text-center font-bold text-xl">{title}</h3>}
    >
      <img src={image} className="w-full rounded-3xl" />
      <div className="mt-5">
        <Button
          onClick={handleViewWebsite}
          type="primary"
          shape="round"
          size="large"
          className="w-full text-black"
        >
          LIHAT WEBSITE
        </Button>
      </div>
    </Card>
  );
}
