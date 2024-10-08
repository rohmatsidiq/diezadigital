"use client";

import ItemPortfolio from "./ItemPortfolio";

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 py-10">
      <h1 className="font-bold text-center text-3xl">Portfolio</h1>
      <p className="max-w-2xl text-center mx-auto mt-1">
        Berikut ini beberapa website yang telah kami kerjakan, bisa juga sebagai
        inspirasi/referensi desain website Anda.
      </p>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ItemPortfolio
            title="Penerbit Buku"
            link="http://muslimafiyahpublishing.com/"
            image="buku.png"
          />
          <ItemPortfolio
            title="Aplikasi Al-Qur'an"
            link="https://myquran-peach.vercel.app/"
            image="/quran.png"
          />
          <ItemPortfolio
            title="LP Souvenir"
            link="http://souvenir.muslimafiyahpublishing.com/"
            image="/souvenir.png"
          />
          <ItemPortfolio
            title="Toko Komputer"
            link="https://maju-jaya-abadi.vercel.app/"
            image="/komputer.png"
          />
          <ItemPortfolio
            title="Solo Rent Car"
            link="https://solo-rent-car.vercel.app/"
            image="/solo.png"
          />
        </div>
      </div>
    </div>
  );
}
