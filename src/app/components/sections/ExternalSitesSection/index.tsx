import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import SectionTitle from "../../SectionTitle";

export default function ExternalSitesSection() {
  return (
    <section className="bg-[#1E1E1E] py-16">
      <div className="container mx-auto px-4">
        <SectionTitle icon={GlobeAltIcon}>External Sites</SectionTitle>
        <div className="space-y-6">
          <a href="#" className="block group">
            <div className="bg-[#2D2D2D] rounded-xl overflow-hidden hover:bg-[#353535] transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-[600px] aspect-[3.36/1]">
                  <Image
                    src="/images/BBB.jpg"
                    alt="Big Bang Box"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-6 flex items-center">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[var(--accent-lime)] transition-colors duration-300">
                        Big Bang Box
                      </h3>
                    </div>
                    <div className="ml-4">
                      <div className="bg-[var(--accent-lime)] text-black rounded-full p-3 transform group-hover:translate-x-1 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="#" className="block group">
            <div className="bg-[#2D2D2D] rounded-xl overflow-hidden hover:bg-[#353535] transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-[600px] aspect-[3.36/1]">
                  <Image
                    src="/images/MAWS.jpg"
                    alt="MAWS"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-6 flex items-center">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[var(--accent-lime)] transition-colors duration-300">
                        MAWS
                      </h3>
                    </div>
                    <div className="ml-4">
                      <div className="bg-[var(--accent-lime)] text-black rounded-full p-3 transform group-hover:translate-x-1 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="#" className="block group">
            <div className="bg-[#2D2D2D] rounded-xl overflow-hidden hover:bg-[#353535] transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-[600px] aspect-[3.36/1]">
                  <Image
                    src="/images/youtube.jpg"
                    alt="YouTube"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-6 flex items-center">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[var(--accent-lime)] transition-colors duration-300">
                        YouTube
                      </h3>
                    </div>
                    <div className="ml-4">
                      <div className="bg-[var(--accent-lime)] text-black rounded-full p-3 transform group-hover:translate-x-1 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
} 