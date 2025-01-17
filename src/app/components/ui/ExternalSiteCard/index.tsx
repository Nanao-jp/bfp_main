import Image from "next/image";
import { ExternalSite } from "../../../data/externalSites";
import { styles } from "../../../styles/constants";

interface ExternalSiteCardProps {
  site: ExternalSite;
}

export default function ExternalSiteCard({ site }: ExternalSiteCardProps) {
  return (
    <a href={site.href} className="block group">
      <div className={styles.card.wrapper}>
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-[600px] aspect-[3.36/1]">
            <Image
              src={site.imageUrl}
              alt={site.imageAlt}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 p-6 flex items-center">
            <div className="flex justify-between items-center w-full">
              <div>
                <h3 className={styles.card.title}>
                  {site.title}
                </h3>
              </div>
              <div className="ml-4">
                <div className="bg-accent-lime text-black rounded-full p-3 transform group-hover:translate-x-1 transition-transform duration-300">
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
  );
} 