import React, { useEffect, useState } from 'react';
import { db } from '../../Firebase/Database';
import { collection, getDocs } from 'firebase/firestore';

const ProdukKami = () => {
  const [produkList, setProdukList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProduk = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'galeri'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProdukList(data);
    } catch (error) {
      console.error("Gagal mengambil data produk:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduk();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Produk Kami</h2>

      {loading ? (
        <p className="text-center text-gray-500">Memuat data produk...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {produkList.map((produk) => (
            <div
              key={produk.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={produk.gambar}
                alt={produk.judul}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{produk.judul}</h3>
                <p className="text-gray-600 text-sm mt-1">{produk.deskripsi}</p>
                <p className="text-sm mt-2 font-medium text-green-600">Stok: {produk.stok}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProdukKami;
