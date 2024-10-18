"use client";

import Image from "next/image";

export default function Stack() {
  return (
    <div className="bg-black">
      <div className="max-w-6xl mx-auto mt-10 p-4 py-20">
        <h1
          data-aos="zoom-in"
          className="font-bold text-center text-3xl text-yellow-500"
        >
          Teknologi Yang Kami Gunakan
        </h1>
        <p
          data-aos="zoom-in"
          className="max-w-2xl text-center mx-auto mt-1 text-white"
        >
          Berikut ini beberapa teknologi yang kami gunakan untuk membuat website
          Anda
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          <div
            data-aos="zoom-in"
            className="bg-white flex gap-1 justify-center items-center rounded-3xl px-4 py-2"
          >
            <img
              className="h-[20px] w-auto"
              src={"/wordpress.png"}
              alt="wordpress"
              width={300}
            />
            <p>Wordpress</p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white flex gap-1 justify-center items-center rounded-3xl px-4 py-2"
          >
            <img
              className="h-[20px] w-auto"
              src={"/html.png"}
              alt="html"
              width={300}
            />
            <p>HTML</p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white flex gap-1 justify-center items-center rounded-3xl px-4 py-2"
          >
            <img
              className="h-[20px] w-auto"
              src={"/css.png"}
              alt="css"
              width={300}
            />
            <p>CSS</p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white flex gap-1 justify-center items-center rounded-3xl px-4 py-2"
          >
            <img
              className="h-[20px] w-auto"
              src={"/js.png"}
              alt="js"
              width={300}
            />
            <p>JavaScript</p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white flex gap-1 justify-center items-center rounded-3xl px-4 py-2"
          >
            <img
              className="h-[20px] w-auto"
              src={"/tailwind.png"}
              alt="tailwind"
              width={300}
            />
            <p>Tailwind</p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white flex gap-1 justify-center items-center rounded-3xl px-4 py-2"
          >
            <img
              className="h-[20px] w-auto"
              src={"/bootstrap.png"}
              alt="bootstrap"
              width={300}
            />
            <p>Bootstrap</p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white flex gap-1 justify-center items-center rounded-3xl px-4 py-2"
          >
            <img
              className="h-[20px] w-auto"
              src={"/react.png"}
              alt="react"
              width={300}
            />
            <p>React JS</p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white flex gap-1 justify-center items-center rounded-3xl px-4 py-2"
          >
            <img
              className="h-[20px] w-auto"
              src={"/php.png"}
              alt="php"
              width={300}
            />
            <p>PHP</p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white flex gap-1 justify-center items-center rounded-3xl px-4 py-2"
          >
            <img
              className="h-[20px] w-auto"
              src={"/laravel.png"}
              alt="laravel"
              width={300}
            />
            <p>Laravel</p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white flex gap-1 justify-center items-center rounded-3xl px-4 py-2"
          >
            <img
              className="h-[20px] w-auto"
              src={"/node.png"}
              alt="node"
              width={300}
            />
            <p>Node JS</p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white flex gap-1 justify-center items-center rounded-3xl px-4 py-2"
          >
            <img
              className="h-[20px] w-auto"
              src={"/express.png"}
              alt="express"
              width={300}
            />
            <p>Express JS</p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white flex gap-1 justify-center items-center rounded-3xl px-4 py-2"
          >
            <img
              className="h-[20px] w-auto"
              src={"/mysql.png"}
              alt="mysql"
              width={300}
            />
            <p>MySQL</p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white flex gap-1 justify-center items-center rounded-3xl px-4 py-2"
          >
            <img
              className="h-[20px] w-auto"
              src={"/postgre.png"}
              alt="postgre"
              width={300}
            />
            <p>PostgreSQL</p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white flex gap-1 justify-center items-center rounded-3xl px-4 py-2"
          >
            <img
              className="h-[20px] w-auto"
              src={"/mongo.svg"}
              alt="mongo"
              width={300}
            />
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
