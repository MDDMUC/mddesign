import CaseStudyHero from '@/app/components/case-study/CaseStudyHero';
import CaseStudySection, { SectionParagraph, SectionInsightList, SectionPullQuote } from '@/app/components/case-study/CaseStudySection';
import MetricsCallout from '@/app/components/case-study/MetricsCallout';
import ImageGallery from '@/app/components/case-study/ImageGallery';
import AwardBadgeGrid from '@/app/components/case-study/AwardBadgeGrid';
import CaseStudyNavigation from '@/app/components/case-study/CaseStudyNavigation';
import { ArticleSchema, BreadcrumbSchema } from '@/components/StructuredData/StructuredData';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keller Sports Case Study - Premium E-Commerce Design Transformation',
  description: 'Transformed a premium sports e-commerce platform as Head of Design. 13 international awards including German Brand Award Gold. 3 full relaunches in 2 years.',
  keywords: ['Keller Sports', 'e-commerce design', 'Head of Design', 'German Brand Award', 'premium retail', 'sports e-commerce'],
  openGraph: {
    title: 'Keller Sports Case Study - Premium E-Commerce Design Transformation',
    description: 'Transformed a premium sports e-commerce platform as Head of Design. 13 international awards, 3 full relaunches in 2 years.',
    url: 'https://martindrexler.com/work/keller-sports',
    siteName: 'Martin Drexler Design',
    images: [{
      url: '/images/og-keller-sports.jpg',
      width: 1200,
      height: 630,
      alt: 'Keller Sports Design Transformation',
    }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keller Sports Case Study - Premium E-Commerce Design Transformation',
    description: 'Transformed a premium sports e-commerce platform as Head of Design. 13 international awards.',
    images: ['/images/og-keller-sports.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://martindrexler.com/work/keller-sports',
  },
};

export default function KellerSportsCaseStudy() {
  return (
    <>
      <ArticleSchema
        title="Keller Sports Case Study - Premium E-Commerce Design Transformation"
        description="Transformed a premium sports e-commerce platform as Head of Design. 13 international awards."
        url="https://martindrexler.com/work/keller-sports"
        imageUrl="https://martindrexler.com/images/og-keller-sports.jpg"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://martindrexler.com' },
          { name: 'Work', url: 'https://martindrexler.com/work' },
          { name: 'Keller Sports', url: 'https://martindrexler.com/work/keller-sports' },
        ]}
      />
      <main>
      <CaseStudyHero
        breadcrumb="Keller Sports"
        title="Keller Sports"
        description="Transformed a premium sports e-commerce platform as Head of Design"
        metrics="13 Awards • 3 Relaunches • 2 Years"
        heroImage="https://placehold.co/1440x810/EAEEF1/626262?text=Keller+Sports+Homepage"
        heroImageAlt="Keller Sports redesigned homepage with premium product photography"
      />

      {/* Context Section */}
      <CaseStudySection label="01" heading="The Challenge" background="alt">
        <SectionParagraph>
          When I started at Keller Sports as Head of Design, the company had just secured new investment and was ready for fundamental transformation. Keller Sports needed to be visually positioned as the best advisor and curator for premium sports products and experiences—not just another e-commerce site using templates and stock photography.
        </SectionParagraph>
        <SectionParagraph>
          The UI and UX had never been addressed in a focused, iterative manner. The mobile experience was poorly optimized and converting below industry benchmarks. The visual identity felt generic, indistinguishable from competitors with larger marketing budgets. The challenge was clear: How do you create a premium brand experience when every other sports retailer is using the same templates and vendor photography? And how do you do it while maintaining business continuity and delivering three complete relaunches in two years?
        </SectionParagraph>

        <SectionInsightList
          title="Key Challenges"
          items={[
            'Differentiate from template-based competitors with larger budgets',
            'Transform entire product experience while maintaining business operations',
            'Optimize mobile experience to improve conversion rates',
            'Create premium positioning through design and content',
            'Build internal design capability from scratch',
            'Balance speed (3 relaunches in 2 years) with award-winning quality',
          ]}
        />

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/F6FAFB/949494?text=Old+Homepage',
              alt: 'Previous Keller Sports homepage before redesign',
              caption: 'Before: Generic template aesthetic with vendor photography',
            },
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=New+Homepage',
              alt: 'Redesigned Keller Sports homepage with custom photography',
              caption: 'After: Premium brand experience with custom content and photography',
            },
          ]}
          layout="before-after"
        />
      </CaseStudySection>

      {/* Approach Section */}
      <CaseStudySection label="02" heading="The Approach">
        <SectionParagraph>
          The strategy centered on content as differentiation. We built a strong internal culture of sport-loving enthusiasts who were genuinely proud of their work. I established an in-house photography studio to control visual quality and brand consistency—this became the key to avoiding the template look that plagued our competitors.
        </SectionParagraph>
        <SectionParagraph>
          Working closely with the CEO and Head of Product, we adopted a rapid iteration cycle. We completed three full shop relaunches in two years, each time switching to responsive layouts and changing backend and CMS infrastructure from scratch. We emphasized social media and community athletes (Keller Sports Pros) to create authentic content that resonated with our target audience. The approach required building the team, building the systems, and building the product—all simultaneously.
        </SectionParagraph>

        <SectionInsightList
          title="Strategic Decisions"
          items={[
            'Built in-house photography studio for brand control and premium content',
            'Created Keller Sports Pros program featuring community athletes',
            'Adopted content-first strategy emphasizing authenticity over polish',
            'Rapid iteration: 3 complete platform relaunches in 2 years',
            'Built design team focused on sport enthusiasts passionate about quality',
            'Close collaboration with CEO and product team on strategic direction',
          ]}
        />

        <SectionPullQuote>
          "Custom content became our differentiator. While competitors used vendor photography, we created a visual language that was unmistakably Keller Sports."
        </SectionPullQuote>

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Photography+Studio',
              alt: 'Behind the scenes at Keller Sports in-house photography studio',
            },
          ]}
          layout="full-width"
          caption="In-house photography studio: the key to premium brand differentiation"
        />
      </CaseStudySection>

      {/* Design Section */}
      <CaseStudySection label="03" heading="The Design" background="alt">
        <SectionParagraph>
          The design work spanned brand refinement, complete UI/UX redesign across desktop and mobile, custom photography system, video content, marketing campaigns, and packaging design. Each relaunch improved on the previous iteration based on user feedback and performance data.
        </SectionParagraph>
        <SectionParagraph>
          The visual language balanced premium aesthetics with functional clarity. Product pages showcased our custom photography prominently. Navigation was simplified and optimized for conversion. Mobile layouts were redesigned from the ground up to feel native, not responsive-as-an-afterthought. The photography style became so distinctive that Adidas eventually changed their global product photography based on processes we developed at Keller Sports.
        </SectionParagraph>

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Desktop+Homepage',
              alt: 'Desktop homepage design with hero imagery and featured products',
            },
          ]}
          layout="full-width"
          caption="Desktop experience: premium product presentation with custom photography"
        />

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/600x900/EAEEF1/626262?text=Mobile+Homepage',
              alt: 'Mobile homepage optimized for conversion',
            },
            {
              src: 'https://placehold.co/600x900/EAEEF1/626262?text=Mobile+Product',
              alt: 'Mobile product page with streamlined checkout',
            },
          ]}
          layout="half"
        />

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Product+Photo+1',
              alt: 'Custom product photography showcasing premium sports equipment',
            },
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Product+Photo+2',
              alt: 'Lifestyle product photography featuring Keller Sports Pros',
            },
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Product+Photo+3',
              alt: 'Action photography showing products in real-world sports environments',
            },
          ]}
          layout="grid"
        />

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Campaign+Design',
              alt: 'Marketing campaign featuring Keller Sports Pros community athletes',
            },
          ]}
          layout="full-width"
          caption="Keller Sports Pros: authentic content from real athletes in the community"
        />
      </CaseStudySection>

      {/* Results Section */}
      <CaseStudySection label="04" heading="The Results">
        <MetricsCallout
          metrics={[
            { value: '13', label: 'Design Awards' },
            { value: '3', label: 'Full Relaunches' },
            { value: '2', label: 'Years as Head' },
          ]}
        />

        <SectionParagraph>
          The transformation earned 13 international design awards, including the prestigious German Brand Award Gold. Awards included German Design Award (2x), Anton Award, Shop Usability Award (5x), Internet World Business Shop Award (2x), Swiss eCommerce Award (2x), Adobe UI Design Excellence Showcase, and Adobe XD Showcase.
        </SectionParagraph>
        <SectionParagraph>
          Beyond recognition, the work had measurable business and industry impact. Conversion rates improved significantly, particularly on mobile. The custom photography system became so effective that Adidas changed their global product photography processes based on what we developed. The company was eventually acquired, with the design transformation playing a key role in its valuation. Most importantly, we proved that speed and quality aren't mutually exclusive—three complete relaunches in two years, each better than the last, each award-winning.
        </SectionParagraph>

        <AwardBadgeGrid
          awards={[
            { name: 'German Brand Award Gold', year: '2016' },
            { name: 'German Design Award', year: '2016' },
            { name: 'German Design Award', year: '2015' },
            { name: 'Anton Award', year: '2016' },
            { name: 'Shop Usability Award', year: '2016' },
            { name: 'Shop Usability Award', year: '2015' },
            { name: 'Shop Usability Award', year: '2014' },
            { name: 'Internet World Business', year: '2016' },
            { name: 'Internet World Business', year: '2015' },
            { name: 'Swiss eCommerce Award', year: '2016' },
            { name: 'Swiss eCommerce Award', year: '2015' },
            { name: 'Adobe UI Showcase', year: '2016' },
            { name: 'Adobe XD Showcase', year: '2015' },
          ]}
        />

        <SectionPullQuote>
          "Adidas changed their global product photography based on processes we developed at Keller Sports. That's when you know you've created something special."
        </SectionPullQuote>
      </CaseStudySection>

      <CaseStudyNavigation
        nextProject={{
          title: 'CEPRES',
          href: '/work/cepres',
        }}
      />
      </main>
    </>
  );
}
