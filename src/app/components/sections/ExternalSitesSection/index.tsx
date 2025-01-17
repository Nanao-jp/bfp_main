import { GlobeAltIcon } from "@heroicons/react/24/solid";
import SectionTitle from "../../SectionTitle";
import ExternalSiteCard from "../../ui/ExternalSiteCard";
import Container from "../../ui/Container";
import { externalSites } from "../../../data/externalSites";
import { styles } from "../../../styles/constants";

export default function ExternalSitesSection() {
  return (
    <section className="bg-surface py-16">
      <Container>
        <SectionTitle icon={GlobeAltIcon}>External Sites</SectionTitle>
        <div className={styles.layout.section.spacing}>
          {externalSites.map((site) => (
            <ExternalSiteCard key={site.title} site={site} />
          ))}
        </div>
      </Container>
    </section>
  );
} 