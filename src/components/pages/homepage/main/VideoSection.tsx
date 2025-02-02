export default function VideoSection({
  thumbnail,
  avatar,
}: {
  thumbnail: string;
  avatar: string;
}) {
  return (
    <section className="w-full max-w-6xl">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        Koleksi Video Pembelajaran Unggulan
      </h2>
      <p className="text-gray-600 mb-8">
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </p>

      {/* Tabs */}
      <div className="flex gap-8 mb-12 overflow-x-auto">
        {[
          "Semua Kelas",
          "Pemasaran",
          "Desain",
          "Pengembangan Diri",
          "Bisnis",
        ].map((tab, index) => (
          <div
            key={tab}
            className={`pb-2 cursor-pointer hover:border-b-4 hover:border-red-400 ${
              index === 0 ? "border-b-4 border-[#F64920]" : ""
            }`}
          >
            <button
              className={`truncate font-medium cursor-pointer text-start ${
                index === 0 ? "text-[#F64920]" : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          </div>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer active:shadow-xl hover:shadow-xl transition-shadow"
          >
            <img
              src={thumbnail}
              className="w-full h-48 object-cover"
              alt="Course"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Big 4 Auditor Financial Analyst
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Mulai transformasi dengan instruktur profesional, harga yang
                terjangkau, dan kurikulum terbaik
              </p>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src={avatar}
                  className="w-10 h-10 rounded-lg"
                  alt="Instructor"
                />
                <div>
                  <p className="font-medium text-gray-900">Jenna Ortega</p>
                  <p className="text-sm text-gray-500">
                    Senior Accountant di Gojek
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#FFBD3A]">
                    {[...Array(3)].map((_, i) => (
                      <span key={i} className="fa fa-star checked" />
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <span key={i} className="fa fa-star text-gray-300" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">3.5 (86)</span>
                </div>
                <span className="text-lg font-semibold text-[#3ECF4C]">
                  Rp 300K
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
