import React from "react";

const Fitur = () => {
  return (
    <div className="flex w-full flex-col items-start justify-center my-20 text-gray-900 px-6 sm:px-10 md:px-16 lg:px-48">
        <div className="absolute w-[270px] h-[190px] bg-blue-500 opacity-30 blur-3xl rounded-full bottom-1s right-5 md:w-[500px] md:h-[300px] md:right-72"></div>
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-6 text-left bg-blue-500 px-8 py-2 text-white">
        Fitur 404Game
      </h1>
      <div className="w-full text-left">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg sm:text-xl">
          <li>
            <strong className="text-blue-500">Dibuat Sendiri, Tanpa Iklan:</strong> 404Game adalah platform game Android yang saya buat sendiri, tanpa iklan yang mengganggu. Nikmati pengalaman bermain game yang nyaman dan bebas dari gangguan iklan.
          </li>
          <li>
            <strong className="text-blue-500">Hanya Tersedia di Android:</strong> 404Game dirancang khusus untuk pengguna Android. Temukan dan unduh game Android yang sudah saya kembangkan langsung ke perangkat Anda tanpa batasan.
          </li>
          <li>
            <strong className="text-blue-500">100% Aman, Tanpa Fitur Berbahaya:</strong> Semua game yang tersedia di 404Game tidak mengandung fitur berbahaya. Saya memastikan bahwa setiap game aman, bebas dari malware, dan nyaman dimainkan.
          </li>
          <li>
            <strong className="text-blue-500">100% Gratis dan Tanpa Iklan:</strong> 404Game menawarkan akses gratis tanpa biaya tersembunyi, tanpa iklan — hanya pengalaman bermain yang murni dan bebas gangguan.
          </li>
          <li>
            <strong className="text-blue-500">Download Mudah via Google Drive:</strong> Semua game tersedia untuk diunduh melalui Google Drive, membuat proses download lebih cepat, aman, dan nyaman tanpa antrian atau iklan.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Fitur;
