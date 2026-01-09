import CaseStudyHero from '@/app/components/case-study/CaseStudyHero';
import CaseStudySection, { SectionParagraph, SectionInsightList } from '@/app/components/case-study/CaseStudySection';
import MetricsCallout from '@/app/components/case-study/MetricsCallout';
import ImageGallery from '@/app/components/case-study/ImageGallery';
import AwardBadgeGrid from '@/app/components/case-study/AwardBadgeGrid';
import CaseStudyNavigation from '@/app/components/case-study/CaseStudyNavigation';
import { ArticleSchema, BreadcrumbSchema } from '@/components/StructuredData/StructuredData';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CEPRES Case Study - Private Market Investment Platform Design',
  description: 'Designing the world\'s leading private market investment platform. 6 Private Equity Wire Awards, $45T in assets, 6,000+ users. Learn how strategic design transformed complex financial data.',
  keywords: ['CEPRES', 'private equity', 'investment platform', 'enterprise design', 'data visualization', 'financial software design'],
  openGraph: {
    title: 'CEPRES Case Study - Private Market Investment Platform Design',
    description: 'Designing the world\'s leading private market investment platform. 6 Awards, $45T in assets, 6,000+ users.',
    url: 'https://martindrexler.com/work/cepres',
    siteName: 'Martin Drexler Design',
    images: [{
      url: '/images/og-cepres.jpg',
      width: 1200,
      height: 630,
      alt: 'CEPRES Platform Design',
    }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CEPRES Case Study - Private Market Investment Platform Design',
    description: 'Designing the world\'s leading private market investment platform. 6 Awards, $45T in assets, 6,000+ users.',
    images: ['/images/og-cepres.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://martindrexler.com/work/cepres',
  },
};

export default function CEPRESCaseStudy() {
  return (
    <>
      <ArticleSchema
        title="CEPRES Case Study - Private Market Investment Platform Design"
        description="Designing the world's leading private market investment platform. 6 Awards, $45T in assets, 6,000+ users."
        url="https://martindrexler.com/work/cepres"
        imageUrl="https://martindrexler.com/images/og-cepres.jpg"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://martindrexler.com' },
          { name: 'Work', url: 'https://martindrexler.com/work' },
          { name: 'CEPRES', url: 'https://martindrexler.com/work/cepres' },
        ]}
      />
      <main>
      <CaseStudyHero
        breadcrumb="CEPRES"
        title="CEPRES"
        description="The world's leading private market investment platform"
        metrics="6 Awards • $45T in Assets • 6,000+ Users"
        heroImage="https://placehold.co/1440x810/EAEEF1/626262?text=CEPRES+Dashboard"
        heroImageAlt="CEPRES platform dashboard interface showing investment data and analytics"
      />

      {/* Context Section */}
      <CaseStudySection label="01" heading="The Challenge" background="alt">
        <SectionParagraph>
          CEPRES offered unparalleled access to granular private market data but lacked an efficient way to filter, analyze, and output data relevant to specific users. The platform had evolved to serve 76 different user personas, resulting in over 125,000 filtering options. This complexity was making the product increasingly difficult to use, risking user churn and competitive pressure.
        </SectionParagraph>
        <SectionParagraph>
          The fundamental question became: How do you create an intuitive dashboard experience when there are 125,000 ways to filter the data? The platform needed to maintain its power and flexibility while dramatically reducing cognitive load for users who ranged from limited partners to general partners, fund managers to market analysts.
        </SectionParagraph>

        <SectionInsightList
          title="Key Challenges"
          items={[
            '76 distinct user personas with different needs and workflows',
            '125,000+ filtering options creating analysis paralysis',
            'Users spending more time configuring than analyzing',
            'High learning curve preventing adoption by new users',
            'Need to maintain power-user capabilities while improving accessibility',
          ]}
        />

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=User+Persona+Complexity',
              alt: 'Diagram showing the consolidation of 76 user personas into 7 use case scenarios',
            },
          ]}
          layout="full-width"
          caption="Persona consolidation: from 76 individual personas to 7 broader use case scenarios"
        />
      </CaseStudySection>

      {/* Approach Section */}
      <CaseStudySection label="02" heading="The Approach">
        <SectionParagraph>
          The breakthrough came from shifting our thinking from personas to use cases. Through extensive user research, stakeholder interviews, and analysis of existing usage patterns, we consolidated the 76 user personas into 7 broader use case scenarios. This wasn't about reducing functionality—it was about organizing complexity around what users were actually trying to accomplish.
        </SectionParagraph>
        <SectionParagraph>
          The design process was deeply iterative, spanning 7 complete platform iterations over 2+ years. Each iteration involved collaborative workshops with market experts, fund managers, and real users. We tested concepts with limited partners managing billions in assets and general partners running multi-billion dollar funds. The goal was to create user-generated, custom branded dashboards that felt both powerful and intuitive.
        </SectionParagraph>

        <SectionInsightList
          title="Strategic Decisions"
          items={[
            'Consolidated 76 personas into 7 use case scenarios based on actual workflows',
            'Pre-defined and pre-selected filters tailored to each use case',
            'User-generated custom dashboards with live data analysis',
            'Real-time collaboration features for team-based decision making',
            'Iterative validation with users managing billions in assets',
          ]}
        />

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Process+Diagram',
              alt: 'Design process showing research, synthesis, and iterative refinement phases',
            },
          ]}
          layout="full-width"
          caption="Iterative design process: 7 platform iterations refined through user testing and expert feedback"
        />
      </CaseStudySection>

      {/* Design Section */}
      <CaseStudySection label="03" heading="The Design" background="alt">
        <SectionParagraph>
          The final design centered on custom dashboard builder that put users in control. Each use case came with intelligent defaults—pre-configured filters and views optimized for specific workflows. Power users could customize everything, while new users could start working immediately with sensible defaults.
        </SectionParagraph>
        <SectionParagraph>
          The interface balanced density with clarity. Financial professionals need to see lots of data simultaneously, but that data needs to be scannable and actionable. We developed a component library that maintained consistency across the platform while adapting to the specific needs of each use case.
        </SectionParagraph>

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/F6FAFB/949494?text=Old+Dashboard',
              alt: 'Previous CEPRES dashboard interface before redesign',
              caption: 'Before: Complex interface with overwhelming options',
            },
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=New+Dashboard',
              alt: 'Redesigned CEPRES dashboard with streamlined interface',
              caption: 'After: Streamlined dashboard with intelligent defaults',
            },
          ]}
          layout="before-after"
        />

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Dashboard+View+1',
              alt: 'CEPRES dashboard showing portfolio overview',
            },
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Dashboard+View+2',
              alt: 'CEPRES dashboard showing market analysis',
            },
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Dashboard+View+3',
              alt: 'CEPRES dashboard showing fund performance metrics',
            },
          ]}
          layout="grid"
        />

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Data+Visualization',
              alt: 'Advanced data visualization components showing market trends and performance',
            },
          ]}
          layout="full-width"
          caption="Custom data visualization components designed for complex financial analysis"
        />
      </CaseStudySection>

      {/* Results Section */}
      <CaseStudySection label="04" heading="The Results">
        <MetricsCallout
          metrics={[
            { value: '6', label: 'Awards Won' },
            { value: '$45T', label: 'Assets on Platform' },
            { value: '6,000+', label: 'LPs and GPs' },
            { value: '15→120', label: 'Team Growth' },
          ]}
        />

        <SectionParagraph>
          The redesigned platform earned 6 Private Equity Wire Awards, including Best Data Management (2019, 2020), Best Portfolio Management (2018, 2019, 2020), and Best Risk Management (2019). It was also featured in Adobe's UI Design Excellence Showcase and became an ILPA best practice due diligence partner.
        </SectionParagraph>
        <SectionParagraph>
          Beyond awards, the business impact was substantial. CEPRES grew from 15 to 120+ employees and expanded from a single office in Munich to locations in New York, Singapore, Denver, and London. Today, the platform provides access to $45 trillion in asset value, serves 6,000 limited and general partners, covers 125,000 PE-backed companies, and manages data for 12,000 funds. The redesign transformed a complex but struggling product into the industry's leading platform.
        </SectionParagraph>

        <AwardBadgeGrid
          awards={[
            { name: 'Private Equity Wire', year: '2019' },
            { name: 'Private Equity Wire', year: '2020' },
            { name: 'Portfolio Management', year: '2018' },
            { name: 'Portfolio Management', year: '2019' },
            { name: 'Portfolio Management', year: '2020' },
            { name: 'Risk Management', year: '2019' },
            { name: 'Adobe UI Showcase', year: '2020' },
            { name: 'ILPA Best Practice', year: '2020' },
          ]}
        />
      </CaseStudySection>

      <CaseStudyNavigation
        nextProject={{
          title: 'Young Champion Ambassador',
          href: '/work/yca',
        }}
      />
      </main>
    </>
  );
}
