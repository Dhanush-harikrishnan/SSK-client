import { Link } from "react-router-dom";

export const TechnologyTeaser = () => {
  return (
    <section className="bg-[#0A1628] w-full">
      <div className="container-main mx-auto px-4 lg:px-8 py-4 lg:h-[80px] flex flex-col lg:flex-row items-center justify-between gap-4">

        <div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left">
          <span className="text-[1.8rem] leading-none" role="img" aria-label="gear">
            ⚙️
          </span>
          <div>
            <h3 className="text-white font-bold text-base m-0">How Our Electrodes Work</h3>
            <p className="text-[#C0C0C0] text-[0.8rem] m-0 mt-1">
              MMO coating, ion conversion, electrode chemistry — explained for engineers and procurement teams.
            </p>
          </div>
        </div>

        <Link
          to="/technology"
          className="whitespace-nowrap px-6 py-2 rounded-md border border-[#0070F3] text-white text-sm font-medium hover:bg-[#0070F3] transition-colors duration-300"
        >
          Read the Technology →
        </Link>

      </div>
    </section>
  );
};
