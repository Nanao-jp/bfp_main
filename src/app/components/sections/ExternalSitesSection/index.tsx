import { GlobeAltIcon } from "@heroicons/react/24/solid";
import SectionTitle from "../../SectionTitle";
import ExternalSiteCard from "../../ui/ExternalSiteCard";
import Container from "../../ui/Container";
import { externalSites } from "../../../data/externalSites";

export default function ExternalSitesSection() {
  return (
    <section className="bg-dark-surface py-16">
      <Container>
        <SectionTitle icon={GlobeAltIcon}>External Sites</SectionTitle>
        <div className="mt-12 space-y-6">
          {externalSites.map((site) => (
            <ExternalSiteCard key={site.title} site={site} />
          ))}
        </div>
      </Container>
    </section>
  );
} 