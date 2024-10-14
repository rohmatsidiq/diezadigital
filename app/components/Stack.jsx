"use client";

import Image from "next/image";

export default function Stack() {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 py-10">
      <h1 data-aos="zoom-in" className="font-bold text-center text-3xl">
        Teknologi Yang Kami Gunakan
      </h1>
      <p data-aos="zoom-in" className="max-w-2xl text-center mx-auto mt-1">
        Berikut ini beberapa teknologi yang kami gunakan untuk membuat website
        Anda
      </p>
      <div className="mt-8 grid md:grid-cols-7 grid-cols-4 gap-3">
        <div
          data-aos="zoom-in"
          className="bg-white h-[150px] flex justify-center items-center rounded-3xl p-3 hover:shadow-2xl"
        >
          <img
            className="w-[60px] h-auto"
            src={"/wordpress.png"}
            alt="wordpress"
            width={300}
          />
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white h-[150px] flex justify-center items-center rounded-3xl p-3 hover:shadow-2xl"
        >
          <img
            className="w-[60px] h-auto"
            src={"/html.png"}
            alt="html"
            width={300}
          />
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white h-[150px] flex justify-center items-center rounded-3xl p-3 hover:shadow-2xl"
        >
          <img
            className="w-[60px] h-auto"
            src={"/css.png"}
            alt="css"
            width={300}
          />
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white h-[150px] flex justify-center items-center rounded-3xl p-3 hover:shadow-2xl"
        >
          <img
            className="w-[60px] h-auto"
            src={"/js.png"}
            alt="js"
            width={300}
          />
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white h-[150px] flex justify-center items-center rounded-3xl p-3 hover:shadow-2xl"
        >
          <img
            className="w-[60px] h-auto"
            src={"/tailwind.png"}
            alt="tailwind"
            width={300}
          />
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white h-[150px] flex justify-center items-center rounded-3xl p-3 hover:shadow-2xl"
        >
          <img
            className="w-[60px] h-auto"
            src={"/bootstrap.png"}
            alt="bootstrap"
            width={300}
          />
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white h-[150px] flex justify-center items-center rounded-3xl p-3 hover:shadow-2xl"
        >
          <img
            className="w-[60px] h-auto"
            src={"/react.png"}
            alt="react"
            width={300}
          />
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white h-[150px] flex justify-center items-center rounded-3xl p-3 hover:shadow-2xl"
        >
          <img
            className="w-[60px] h-auto"
            src={"/php.png"}
            alt="php"
            width={300}
          />
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white h-[150px] flex justify-center items-center rounded-3xl p-3 hover:shadow-2xl"
        >
          <img
            className="w-[60px] h-auto"
            src={"/laravel.png"}
            alt="laravel"
            width={300}
          />
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white h-[150px] flex justify-center items-center rounded-3xl p-3 hover:shadow-2xl"
        >
          <img
            className="w-[60px] h-auto"
            src={"/node.png"}
            alt="node"
            width={300}
          />
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white h-[150px] flex justify-center items-center rounded-3xl p-3 hover:shadow-2xl"
        >
          <img
            className="w-[60px] h-auto"
            src={"/express.png"}
            alt="express"
            width={300}
          />
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white h-[150px] flex justify-center items-center rounded-3xl p-3 hover:shadow-2xl"
        >
          <img
            className="w-[60px] h-auto"
            src={"/mysql.png"}
            alt="mysql"
            width={300}
          />
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white h-[150px] flex justify-center items-center rounded-3xl p-3 hover:shadow-2xl"
        >
          <img
            className="w-[60px] h-auto"
            src={"/postgre.png"}
            alt="postgre"
            width={300}
          />
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white h-[150px] flex justify-center items-center rounded-3xl p-3 hover:shadow-2xl"
        >
          <img
            className="w-[60px] h-auto"
            src={"/mongo.png"}
            alt="mongo"
            width={300}
          />
        </div>
      </div>
    </div>
  );
}
