import CaseStudyHero from '@/app/components/case-study/CaseStudyHero';
import CaseStudySection, { SectionParagraph, SectionInsightList, SectionPullQuote } from '@/app/components/case-study/CaseStudySection';
import MetricsCallout from '@/app/components/case-study/MetricsCallout';
import ImageGallery from '@/app/components/case-study/ImageGallery';
import CaseStudyNavigation from '@/app/components/case-study/CaseStudyNavigation';
import { ArticleSchema, BreadcrumbSchema } from '@/components/StructuredData/StructuredData';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YCA Case Study - Global Youth Leadership Program Design',
  description: 'Building a global youth leadership program from scratch. Now in 25+ cities worldwide, acquired by the International Olympic Academy. Strategic design and brand development.',
  keywords: ['YCA', 'youth leadership', 'Olympic program', 'brand systems', 'program design', 'nonprofit design'],
  openGraph: {
    title: 'YCA Case Study - Global Youth Leadership Program Design',
    description: 'Building a global youth leadership program from scratch. Now in 25+ cities, acquired by the International Olympic Academy.',
    url: 'https://martindrexler.com/work/yca',
    siteName: 'Martin Drexler Design',
    images: [{
      url: '/images/og-yca.jpg',
      width: 1200,
      height: 630,
      alt: 'Young Champion Ambassador Program',
    }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YCA Case Study - Global Youth Leadership Program Design',
    description: 'Building a global youth leadership program from scratch. Now in 25+ cities, acquired by IOA.',
    images: ['/images/og-yca.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://martindrexler.com/work/yca',
  },
};

export default function YCACaseStudy() {
  return (
    <>
      <ArticleSchema
        title="YCA Case Study - Global Youth Leadership Program Design"
        description="Building a global youth leadership program from scratch. Now in 25+ cities, acquired by the International Olympic Academy."
        url="https://martindrexler.com/work/yca"
        imageUrl="https://martindrexler.com/images/og-yca.jpg"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://martindrexler.com' },
          { name: 'Work', url: 'https://martindrexler.com/work' },
          { name: 'YCA', url: 'https://martindrexler.com/work/yca' },
        ]}
      />
      <main>
      <CaseStudyHero
        breadcrumb="Young Champion Ambassador"
        title="Young Champion Ambassador"
        description="A global youth leadership program built from scratch"
        metrics="25+ Cities • Acquired by IOA • 3 Years"
        heroImage="https://placehold.co/1440x810/EAEEF1/626262?text=YCA+Program+Launch"
        heroImageAlt="Young Champion Ambassador program participants at Olympic Museum event"
      />

      {/* Context Section */}
      <CaseStudySection label="01" heading="The Challenge" background="alt">
        <SectionParagraph>
          The Young Champion Ambassador program needed to activate high-performing students to become local ambassadors for the Olympic Movement. Starting from zero, we faced the challenge of creating something that students would see as a once-in-a-lifetime opportunity—not just another extracurricular activity.
        </SectionParagraph>
        <SectionParagraph>
          The program had to overcome significant skepticism. Students are bombarded with opportunities. Parents need to see real value. Schools require minimal burden on their schedules. Government and corporate sponsors need measurable outcomes. And all of this had to be designed to scale globally while remaining locally relevant. The question became: How do you position Olympic values for Gen Z in a way that feels authentic and genuinely transformative?
        </SectionParagraph>

        <SectionInsightList
          title="Key Challenges"
          items={[
            'Creating perceived exclusivity and value in a crowded youth program market',
            'Overcoming parent and school skepticism about time commitment',
            'Making Olympic values relevant to contemporary students',
            'Designing for global scale while maintaining local authenticity',
            'Securing sustainable funding and government support',
            'Building a program that delivers real personal transformation',
          ]}
        />

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Program+Vision',
              alt: 'Strategic framework showing program vision and stakeholder ecosystem',
            },
          ]}
          layout="full-width"
          caption="Program ecosystem: balancing needs of students, parents, schools, and Olympic stakeholders"
        />
      </CaseStudySection>

      {/* Approach Section */}
      <CaseStudySection label="02" heading="The Approach">
        <SectionParagraph>
          We started with elaborate user personas for three key audiences: students, parents, and government officials. Understanding their motivations, fears, and decision-making criteria was crucial. For students, we discovered that exclusivity and real-world impact mattered more than credentials. Parents wanted to see leadership development and networking opportunities. Officials needed measurable community outcomes.
        </SectionParagraph>
        <SectionParagraph>
          The curriculum was designed around experiential learning and design thinking methodologies. Rather than lectures about Olympic values, students worked on real community challenges. We brought in high-caliber experts from the UN, US Air Force, Olympic Athletes, and industry leaders. The capstone experience—an opportunity for highest performers to carry the Olympic Torch in Athens, Greece—created aspirational pull that elevated the entire program.
        </SectionParagraph>

        <SectionInsightList
          title="Strategic Decisions"
          items={[
            'Experiential learning curriculum based on design thinking principles',
            'Expert-led workshops featuring UN officials, Olympic Athletes, and industry leaders',
            'Olympic Torch Relay as capstone reward for highest performers',
            'Community impact projects as core program deliverable',
            'Selective application process to create perception of exclusivity',
            'Local ambassador model for sustainable global expansion',
          ]}
        />

        <SectionPullQuote>
          "The program needed to feel like a once-in-a-lifetime opportunity, not another checkbox on a college application."
        </SectionPullQuote>

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Curriculum+Design',
              alt: 'Program curriculum structure showing 12-month journey and experiential modules',
            },
          ]}
          layout="full-width"
          caption="12-month experiential curriculum: from leadership fundamentals to community impact projects"
        />
      </CaseStudySection>

      {/* Design Section */}
      <CaseStudySection label="03" heading="The Design" background="alt">
        <SectionParagraph>
          The brand identity needed to bridge Olympic heritage with contemporary youth culture. We created a visual system that felt premium and aspirational while remaining approachable. The identity worked across all touchpoints: program materials, merchandise, event spaces, digital platforms, and social media.
        </SectionParagraph>
        <SectionParagraph>
          Every element was designed to reinforce the program's value. Certificate designs looked like official Olympic documents. Event spaces were branded to feel like Olympic venues. Merchandise became status symbols that students wore with pride. The goal was to create a cohesive experience that made participants feel like they were part of something truly special.
        </SectionParagraph>

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Brand+Identity',
              alt: 'YCA brand identity showcase with logo, colors, and typography',
            },
          ]}
          layout="full-width"
          caption="Brand identity: bridging Olympic heritage with contemporary youth culture"
        />

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Program+Materials',
              alt: 'Program guide and curriculum materials',
            },
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Event+Space',
              alt: 'Branded event space and classroom environment',
            },
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Merchandise',
              alt: 'Program merchandise and certificates',
            },
          ]}
          layout="grid"
        />

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Athens+Torch+Relay',
              alt: 'Program participants at Olympic Torch Relay ceremony in Athens, Greece',
            },
          ]}
          layout="full-width"
          caption="Capstone experience: highest performers carry the Olympic Torch in Athens"
        />

        <ImageGallery
          images={[
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Workshop+1',
              alt: 'Students participating in leadership workshop',
            },
            {
              src: 'https://placehold.co/1440x900/EAEEF1/626262?text=Workshop+2',
              alt: 'Community impact project presentation',
            },
          ]}
          layout="half"
        />
      </CaseStudySection>

      {/* Results Section */}
      <CaseStudySection label="04" heading="The Results">
        <MetricsCallout
          metrics={[
            { value: '25+', label: 'Cities Worldwide' },
            { value: '3', label: 'Years to Scale' },
            { value: '1→IOA', label: 'Program Acquired' },
          ]}
        />

        <SectionParagraph>
          The program launched in Colorado Springs with a single cohort and expanded to 25+ cities across the United States, Europe, and Asia within three years. The success attracted the attention of the International Olympic Academy, which acquired the program and made it a permanent part of the Olympic Movement.
        </SectionParagraph>
        <SectionParagraph>
          Beyond the acquisition, the program delivered measurable impact. Students completed community projects that reached thousands of people. Parents reported significant leadership development in their children. Schools requested to host the program. Government officials used it as a model for youth engagement. The program proved that thoughtful design—of curriculum, experience, and brand—could create something that genuinely transforms lives while scaling globally.
        </SectionParagraph>

        <SectionPullQuote>
          "What started as an experiment in one city became a permanent program of the Olympic Movement, impacting thousands of students worldwide."
        </SectionPullQuote>
      </CaseStudySection>

      <CaseStudyNavigation
        nextProject={{
          title: 'Keller Sports',
          href: '/work/keller-sports',
        }}
      />
      </main>
    </>
  );
}
