import Hero from '@/components/Hero';
import {
  Clients,
  Story,
  ServiceList,
  Process,
  WorksGrid,
  Priorities,
  Industries,
  CtaBand,
  SecHead,
} from '@/components/Sections';
import { Testimonials, Faq, ContactBlock } from '@/components/Interactions';
import { services, sections, works, ui } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />

      <Story />

      <section className="section" id="services">
        <div className="shell">
          <SecHead
            kicker={sections.services.kicker}
            title={sections.services.title}
            body={sections.services.body}
            cta={ui.allServices}
            ctaHref="/services"
          />
          <ServiceList items={services} />
        </div>
      </section>

      <Process />

      <section className="section" id="work">
        <div className="shell">
          <SecHead
            kicker={sections.works.kicker}
            title={sections.works.title}
            body={sections.works.body}
            cta={ui.seeAll}
            ctaHref="/works"
          />
          <WorksGrid items={works.slice(0, 6)} />
        </div>
      </section>

      <Priorities />
      <Industries />
      <Testimonials />
      <Faq />

      <section className="section" id="contact">
        <div className="shell">
          <SecHead
            kicker={sections.contact.kicker}
            title={sections.contact.title}
            body={sections.contact.body}
          />
          <ContactBlock />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
