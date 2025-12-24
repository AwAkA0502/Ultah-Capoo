import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [isVoucherOpen, setIsVoucherOpen] = useState(false);

  const boxImages = [
    "capoo1.png",
    "capoo5.png",
    "capoo3.png",
    "capoo4.png",
    "capoo2.png",
  ];
  return (
    <>
      <div className="overflow-x-hidden">
      {/* Section 1: Hero */}
      <section id="hero" className="flex flex-col px-6 md:px-20 pt-10 pb-20 md:pb-32 bg-linear-to-b from-[#FA32A7] to-[#1D1D1D] min-h-screen">
        <nav className="flex flex-col md:flex-row justify-between items-center text-white font-erica gap-6 md:gap-0">
          <h1 className="text-[28px] md:text-[32px]">Capoo</h1>
          <ul className="flex flex-row items-center justify-center font-sans gap-4 md:gap-6 text-[16px] md:text-[18px]">
            <li className="cursor-pointer hover:text-[#F590B7]"><a href="#hero">Hero</a></li>
            <li className="cursor-pointer hover:text-[#F590B7]"><a href="#letter">Letter</a></li>
            <li className="cursor-pointer hover:text-[#F590B7]"><a href="#gift">Gift</a></li>
          </ul>
        </nav>

        <div className="flex flex-col md:flex-row items-center md:items-end justify-center mt-10 md:mt-20 gap-8 md:gap-0">
          <img src="kuromi2.png" className="w-40 md:w-53.75 h-auto md:hiddenflex" alt="kuromi left" />
          
          <div className="flex flex-col items-center justify-center gap-8 md:gap-11">
            <div className="flex flex-col pt-10 md:pt-32 gap-3 items-center justify-center text-center">
              <p className="font-bold text-white text-sm md:text-base">25 December</p>
              <img src="hbdcapoo.png" alt="HBD Capoo" className="w-full max-w-[300px] md:max-w-[500px]" />
              <button className="flex px-10 md:px-16 py-3 rounded-[14px] border-2 border-black font-bold text-lg md:text-xl bg-[#F590B7] shadow-[4px_4px_0px_black] md:shadow-[6px_6px_0px_black] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                Letter
              </button>
            </div>

            <div className="grid grid-cols-3 md:flex md:flex-row gap-3 md:gap-4 justify-center">
              {boxImages.map((imgSrc, i) => (
                <div key={i} className="w-16 h-16 md:w-20 md:h-20 bg-[#F590B7] rounded-xl border-2 border-black shadow-[3px_3px_0px_black] overflow-hidden">
                  <img src={imgSrc} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          <img src="kuromi1.png" className="w-40 md:w-53.75 h-auto" alt="kuromi right" />
          <img src="kuromi2.png" className="w-40 md:w-53.75 h-auto flex md:hidden" alt="kuromi left" />
        </div>
      </section>

      {/* Section 2: Letter */}
      <section id="letter" className="flex items-center justify-center flex-col px-6 md:px-20 bg-[#1D1D1D] py-10 md:py-20">
        <img src="Kuromi Ngumpet.png" alt="" className="w-64 md:w-133.25 mb-[-20px] md:mb-[-30px] z-10" />
        <div className="w-full max-w-6xl px-6 py-10 md:px-22.5 md:py-20.5 bg-[url('/Background_Letter.png')] bg-cover bg-center bg-no-repeat border-2 border-black rounded-2xl">
          <p className="font-emblema leading-relaxed md:leading-9 text-[14px] md:text-[18px]">
            {/* Isi teks Anda */}
            Gak kerasa yaa udah mau setahun yaa wkwkwk, pasti udah banyak hal yang dilewatin sama kamu, tapi sayang banget aku gak ada di tahun 2025 kamu. Jadi gimana ca tahun 2025 kamu? bagus atau serukah? atau bisa aja? aku harap si jelek atau sedih yaa. Keknya banyak hal / kabar yang mau aku tau dari kamu. bentar deh ini jadinya kek bukan ucapan ultah gak si? tapi yaudahlah mumpung ada kesempatan buat ngomong biar gak kek kemarin wkwkwk. haduh kenapa jadi sedih banget, oke sekarang wishnya semoga kamu bahagia selalu yaa dan sehat selalu aku mau pen liat versi terbaik kamu dan aku juga lagi ngejar itu juga, tapi kalo sehat dan bahagia udah lebih dari cukup kok. soalnya aku dapet kabar dari teman aku kamu bikin sg banyak rambut kamu yang rontok yaa?karena stress kah atau dari sakit kamu? kalo emang iyaa get well soon yaa dan kalo kamu stress dan menurutmu aku bisa bantuin redain stress kamu bisa bilang aja. owh iyaa tahun ini kamu udah kuliah juga kan pasti banyak banget kesibukan kamu yaa? jadi semakin padet aja jadwalnya si cantik, semangat yaa and you can do it, paling itu aja wish dari aku dan semangat yang dulu menurut kamu mungkin cuma jadi template chat aja yaa wkwkw. owh mungkin ada satu hal lagi kamu masih inget yang kamu bilang “kalau mau merubah diri atau punya tujuan jangan buat orang lain yang nantinya kalau orang yang kamu jadiin alasan hilang, tujuannya jadi gak jelas, hilang semangat, dll” kurang lebih begitu, dan yaap aku tetep alasan awal yang tetap sama wkwkwk, yaa soalnya aku yang sekarang itu karena lihat kamu yang kerja keras dan aku cuma mamasiswa pengangguran yang cuma nunggu lulus aja dan saat itu aku gak tega aja liat kamu kerja sekeras itu dan aku sebagai cowok disaat itu gak bisa apa apa, itu si yang buat aku jadi seperti sekarang wkwkwk ikut sibuk juga sii tapi komunikasinya dari aku jadi rusak dan yaap satu tahun ini dengan tujuan yang mungkin agak ilang arah tapi aku tetep jalaninnya wkwkwk. dah si paling ini aja yang pen aku omongin dan mungkin gift dari aku gak seberapa yang nanti bisa kamu buka di bawah. sorry banget yaa ini websitenya sistem kebut soalnya baru selesai ngerjain tugas akhir wkwkwk.
          </p>
        </div>
      </section>

      {/* Section 3: Voucher Gift */}
      <section id="gift" className="flex flex-col items-center justify-center py-40 md:py-72 bg-[#1D1D1D] overflow-hidden px-6">
        <h2 className="font-emblema text-2xl md:text-4xl mb-16 md:mb-20 text-white">
          Grab Your Gift! 🎁
        </h2>

        <div className="relative cursor-pointer w-full flex justify-center" onClick={() => setIsVoucherOpen(!isVoucherOpen)}>
          <AnimatePresence>
            {isVoucherOpen && (
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -180, opacity: 1 }}
                exit={{ y: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="absolute inset-0 z-0 flex justify-center"
              >
                <a href="Voucher-Coding.png" download className="w-[280px] md:w-[558px] h-auto">
                  <img src="Voucher-Coding.png" alt="Voucher" className="w-full h-auto" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative z-10 w-full max-w-[320px] md:max-w-[350px] h-[180px] md:h-[220px] bg-[#F590B7] border-4 border-black rounded-2xl shadow-[8px_8px_0px_black] flex flex-col items-center justify-center"
          >
            <div className="font-emblema text-white text-xl md:text-2xl uppercase">
              {isVoucherOpen ? "Open" : "Click Me!"}
            </div>
            <div className="text-4xl md:text-5xl mt-2">🎀</div>
            <div className="absolute inset-3 border-2 border-dashed border-white/50 rounded-lg pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      <section className="flex justify-center items-center w-full bg-[#1D1D1D] py-10">
        <p className="text-white font-sans text-xl md:text-3xl opacity-50">AwAkA</p>
      </section>
    </div>
    </>
  );
}

export default App;
