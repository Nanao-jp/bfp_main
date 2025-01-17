import { GlobeAltIcon } from "@heroicons/react/24/solid";
import SectionTitle from "../../SectionTitle";
import ExternalSiteCard from "../../ui/ExternalSiteCard";
import { externalSites } from "../../../data/externalSites";

export default function ExternalSitesSection() {
  return (
    <section className="bg-[#1E1E1E] py-16">
      <div className="container mx-auto px-4">
        <SectionTitle icon={GlobeAltIcon}>External Sites</SectionTitle>
        <div className="space-y-6">
          {externalSites.map((site) => (
            <ExternalSiteCard key={site.title} site={site} />
          ))}
        </div>
      </div>
    </section>
  );
} 