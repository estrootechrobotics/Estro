import marketAisle from '../../Market Aisle.png';
import industrialPipeline from '../../Industrial Pipeline.png';
import wetCity from '../../Wet City.png';
import robadRetail from '../assets/images/products/robad-main.webp';
import robadLiteRetail from '../assets/images/products/robad-lite-retail-context.jpg';
import { Link, useParams } from 'react-router-dom';
import './ResourcesContent.css';

const resourceCategories = [
  { title: 'Blogs', detail: 'Perspectives on robotics and in-store engagement.', to: '/resources/blogs', number: '01' },
  { title: 'News', detail: 'Our announcements and updates.', to: '/resources/news', number: '02' },
  { title: 'Case Studies', detail: 'Published outcomes and application areas.', to: '/resources/case-studies', number: '03' },
  { title: 'Press Releases', detail: 'Official announcements and media updates.', to: '/resources/press-releases', number: '04' },
];

const blogs = [
  {
    category: 'Retail robotics',
    date: '17 January 2025',
    title: 'Future of Retail Marketing: Embracing In-Store Robots',
    description: 'A look at how light, sound and motion can bring product stories to life in physical retail spaces.',
    slug: 'future-of-retail-marketing',
    image: marketAisle,
    imageAlt: 'Retail aisle illustrating in-store product engagement',
    section: 'blogs',
    body: [
      { heading: 'Visibility at the point of choice', text: 'In a busy store, products compete for attention at the shelf. Our article considers how an in-store robot can use motion, lighting and sound to bring a product message into that environment.' },
      { heading: 'A physical retail interaction', text: 'RobAd is described as responding to shopper presence and presenting a message near the product. The intended experience is to make a promotion more noticeable while keeping it in the context of the aisle.' },
      { heading: 'From attention to learning', text: 'The article also discusses engagement data as a way for brands and retailers to review how a campaign performs and make more informed decisions about future activity.' },
    ],
  },
  {
    category: 'Retail strategy',
    date: '5 December 2024',
    title: 'How Can Planograms & POS Strategies Boost Your Retail Sales?',
    description: 'Explore the relationship between product placement, point-of-sale strategy and interactive retail engagement.',
    slug: 'planograms-and-pos-strategies',
    image: robadLiteRetail,
    imageAlt: 'RobAd Lite shown in a retail setting',
    section: 'blogs',
    body: [
      { heading: 'Make the shelf work harder', text: 'A planogram gives products a deliberate place in the store. Product height, grouping and placement can influence what shoppers notice as they move through an aisle.' },
      { heading: 'Bring point-of-sale displays to life', text: 'Our article explores pairing shelf planning with RobAd’s light, sound and motion to make a selected product more visible in a physical retail setting.' },
      { heading: 'Connect placement and engagement', text: 'When an interactive display is aligned with a product’s position and promotion, the experience can be easier for shoppers to notice and for retail teams to review.' },
    ],
  },
];

const news = [
  {
    category: 'Company news',
    date: '5 June 2026',
    title: 'Genrobotics leads ₹1 crore seed round for Estro Tech Robotics',
    description: 'The announcement describes support for our robotics, AIoT and infrastructure technology plans.',
    slug: 'genrobotics-seed-round',
    section: 'news',
    visual: 'seed',
    body: [
      { heading: 'A robotics-focused investment', text: 'On 5 June 2026, Genrobotics announced a ₹1 crore seed investment in our company. The announcement describes the investment as support for our work in robotics, AIoT, automation and intelligent systems.' },
      { heading: 'Infrastructure technology plans', text: 'The announcement also outlines development plans for inspection robotics for underground utility networks and AI-powered sewer-line monitoring. These are described as areas of development, not completed deployments.' },
      { heading: 'Retail work continues', text: 'The same announcement says we plan to continue scaling our RobAd platform while strengthening our research and development work.' },
    ],
  },
  {
    category: 'Upcoming showcase',
    date: '12 November 2026',
    title: 'We announce a reveal at Huddle Global 2026',
    description: 'We announced an upcoming showcase at Huddle Global in Kovalam.',
    slug: 'huddle-global-2026-showcase',
    section: 'news',
    visual: 'huddle',
    body: [
      { heading: 'A scheduled showcase', text: 'We announced a new showcase at Huddle Global 2026 in Kovalam. Our post named 12 November 2026 as the showcase date and The Leela Raviz Kovalam as the venue.' },
      { heading: 'Robotics from Kerala', text: 'We presented the showcase as part of our robotics and technology work developed in India. Product details were not specified in the post.' },
    ],
  },
];

const useCases = [
  {
    category: 'Published case study · Retail',
    title: 'In-store product engagement',
    description: 'Our published RobAd case study describes an Indian FMCG product at a deployed store and reports a 300% sales increase and 60% shopper engagement at the targeted location.',
    slug: 'robad-in-store-engagement',
    image: robadRetail,
    imageAlt: 'Supermarket aisle representing the RobAd retail case study',
    section: 'case-studies',
    results: ['300% sales increase', '60% shopper engagement'],
    body: [
      { heading: 'The retail challenge', text: 'The published case study describes an Indian FMCG product competing for attention in a deployed store. The focus was to make the product more noticeable and invite shoppers to engage with it.' },
      { heading: 'The RobAd approach', text: 'RobAd uses shopper detection together with light, sound and movement to present a product message at the shelf. The case study describes the system being used as part of an in-store promotion.' },
      { heading: 'Reported outcome', text: 'Our original case study reports a 300% sales increase and engagement from 60% of shoppers at the targeted location. These figures refer to the specific case described.' },
    ],
  },
  {
    category: 'Development focus · Infrastructure',
    title: 'Underground utility inspection',
    description: 'We have outlined development plans for inspection robotics intended to support assessment of underground utility networks.',
    slug: 'underground-utility-inspection',
    image: industrialPipeline,
    imageAlt: 'Industrial pipeline representing underground utility inspection',
    section: 'case-studies',
    body: [
      { heading: 'A challenging environment', text: 'Underground utility networks can be difficult to inspect and maintain. We have identified inspection robotics for these networks as a development focus.' },
      { heading: 'Robotics for assessment', text: 'Our announced direction is to develop systems that can help operators assess underground assets and plan maintenance. This is an application focus described in our public announcement, not a claim of a completed deployment.' },
    ],
  },
  {
    category: 'Development focus · Public infrastructure',
    title: 'Sewer infrastructure monitoring',
    description: 'Our announced roadmap includes AI-powered sewer-line monitoring and predictive maintenance systems. These are development areas, not a claim of completed deployments.',
    slug: 'sewer-infrastructure-monitoring',
    image: wetCity,
    imageAlt: 'Urban infrastructure representing sewer monitoring',
    section: 'case-studies',
    body: [
      { heading: 'Monitoring public infrastructure', text: 'Our public roadmap describes AI-powered monitoring for sewer infrastructure, with connected information intended to help operators understand system conditions.' },
      { heading: 'A development focus', text: 'Predictive maintenance is listed as part of the announced direction. These capabilities are presented as development plans rather than confirmed customer deployments.' },
    ],
  },
];

function ResourceHero({ PageHero, title, copy, eyebrow }) {
  return <PageHero eyebrow={eyebrow} title={title} copy={copy} />;
}

function StoryCard({ story, index = 0 }) {
  return (
    <article className={`resource-story-card reveal${story.visual ? ` resource-story-card--${story.visual}` : ''}`}>
      {story.image ? (
        <div className="resource-story-card__image">
          <img src={story.image} alt={story.imageAlt} loading="lazy" decoding="async" />
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
      ) : (
        <div className="resource-story-card__visual" aria-hidden="true">
          <span>{story.visual === 'huddle' ? 'HUDDLE\nGLOBAL' : 'ESTRO\nTECH'}</span>
          <i>{story.date}</i>
        </div>
      )}
      <div className="resource-story-card__body">
        <div className="resource-story-card__meta"><span>{story.category}</span>{story.date && <time>{story.date}</time>}</div>
        <h3>{story.title}</h3>
        <p>{story.description}</p>
        {story.results && <div className="resource-story-card__results">{story.results.map((result) => <span key={result}>{result}</span>)}</div>}
        <Link to={`/resources/${story.section}/${story.slug}`}>
          Read {story.section === 'case-studies' ? 'use case' : story.section === 'blogs' ? 'blog' : 'news'} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}

function ResourceSection({ eyebrow, title, description, stories, to, index }) {
  return (
    <section className="resource-content-section" aria-labelledby={`resource-section-${index}`}>
      <div className="resource-content-section__heading page-shell reveal">
        <div>
          <span className="eyebrow"><i />{eyebrow}</span>
          <h2 className="section-heading" id={`resource-section-${index}`}>{title}</h2>
        </div>
        <div className="resource-content-section__aside">
          <p>{description}</p>
          <Link to={to} aria-label={`Explore ${eyebrow}`}>Explore section <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="resource-story-grid page-shell">
        {stories.map((story, storyIndex) => <StoryCard story={story} index={storyIndex} key={story.title} />)}
      </div>
    </section>
  );
}

export function ResourcesLanding({ PageHero }) {
  return (
    <main id="main-content" className="inner-page resources-hub">
      <ResourceHero
        PageHero={PageHero}
        eyebrow="ESTRO TECH / RESOURCES"
        title={<>Ideas, updates<br /><span>and applications.</span></>}
        copy="Explore our perspectives on retail robotics, company news and real-world applications of our systems."
      />
      <section className="inner-section page-shell resources-hub__categories">
        <div className="inner-section__heading reveal">
          <span className="eyebrow"><i /> EXPLORE / 04 CATEGORIES</span>
          <h2 className="section-heading">Knowledge for<br /><span>what comes next.</span></h2>
        </div>
        <div className="resource-category-grid">
          {resourceCategories.map((item) => (
            <Link className="resource-category" to={item.to} key={item.to}>
              <span>{item.number} / RESOURCES</span>
              <h3>{item.title === 'Case Studies' ? 'Use Cases' : item.title}</h3>
              <p>{item.detail}</p>
              <b aria-hidden="true">↗</b>
            </Link>
          ))}
        </div>
      </section>
      <ResourceSection
        index="blogs"
        eyebrow="01 / BLOGS"
        title="Ideas from the field."
        description="Perspectives on retail strategy and how robotics can shape in-store engagement."
        stories={blogs}
        to="/resources/blogs"
      />
      <ResourceSection
        index="news"
        eyebrow="02 / NEWS"
        title="What’s happening."
        description="Announcements and updates from our team and ecosystem."
        stories={news}
        to="/resources/news"
      />
      <ResourceSection
        index="use-cases"
        eyebrow="03 / USE CASES"
        title="Robotics in context."
        description="A published retail case study alongside infrastructure applications in our development plans."
        stories={useCases}
        to="/resources/case-studies"
      />
    </main>
  );
}

export function ResourceCategory({ PageHero, category }) {
  const normalized = category.toLowerCase();
  const isBlog = normalized === 'blogs';
  const isNews = normalized === 'news';
  const isCases = normalized === 'case studies' || normalized === 'use cases';
  const isPress = normalized === 'press releases';
  const title = isCases ? 'Use Cases' : isBlog ? 'Blogs' : isNews ? 'News' : 'Press Releases';
  const stories = isBlog ? blogs : isNews ? news : isCases ? useCases : [];
  const description = isBlog
    ? 'Our perspectives and ideas on robotics and retail engagement.'
    : isNews
      ? 'Our announcements, milestones and updates.'
      : isCases
        ? 'A published RobAd case study and application areas we have identified.'
        : 'Our official announcements and media updates.';

  return (
    <main id="main-content" className="inner-page resources-hub resources-hub--category">
      <ResourceHero
        PageHero={PageHero}
        eyebrow={`ESTRO TECH / ${title.toUpperCase()}`}
        title={<>{isCases ? 'Robotics in' : title + ' from'}<br /><span>{isCases ? 'real settings.' : 'our team.'}</span></>}
        copy={description}
      />
      <section className="resource-category-content page-shell">
        <div className="resource-category-content__heading reveal">
          <div>
            <span className="eyebrow"><i /> {isCases ? 'APPLICATIONS & CASE STUDIES' : `LATEST / ${title.toUpperCase()}`}</span>
            <h2 className="section-heading">{isCases ? <>Solutions in<br /><span>real-world context.</span></> : <>Latest {title.toLowerCase()}<br /><span>from our team.</span></>}</h2>
          </div>
          <Link to="/resources" className="resource-back-link">All resources <span aria-hidden="true">↗</span></Link>
        </div>
        {stories.length ? (
          <div className="resource-story-grid">
            {stories.map((story, index) => <StoryCard story={story} index={index} key={story.title} />)}
          </div>
        ) : (
          <div className="resource-press-note">
            <span className="resource-press-note__index">04</span>
            <div><h3>Press releases</h3><p>Our announcements are currently featured in the News section.</p></div>
            <Link to="/resources/news">View news <span aria-hidden="true">↗</span></Link>
          </div>
        )}
      </section>
    </main>
  );
}

export function ResourceDetailPage({ PageHero }) {
  const { section, slug } = useParams();
  const story = [...blogs, ...news, ...useCases].find((item) => item.section === section && item.slug === slug);

  if (!story) {
    return <ResourceCategory PageHero={PageHero} category="Blogs" />;
  }

  const sectionName = section === 'case-studies' ? 'USE CASES' : section.toUpperCase();
  return (
    <main id="main-content" className="inner-page resource-detail-page">
      <ResourceHero
        PageHero={PageHero}
        eyebrow={`ESTRO TECH / ${sectionName}`}
        title={<>{story.title}</>}
        copy={story.description}
      />
      <article className="resource-detail page-shell">
        <div className="resource-detail__hero-image">
          {story.image ? <img src={story.image} alt={story.imageAlt} /> : <div className={`resource-detail__visual resource-detail__visual--${story.visual}`} aria-hidden="true"><span>{story.visual === 'huddle' ? 'HUDDLE\nGLOBAL' : 'ESTRO\nTECH'}</span><i>{story.date}</i></div>}
        </div>
        <div className="resource-detail__layout">
          <aside className="resource-detail__metadata">
            <span>{story.category}</span>
            {story.date && <time>{story.date}</time>}
            <Link to={`/resources/${section}`}>Back to {section === 'case-studies' ? 'use cases' : section}</Link>
          </aside>
          <div className="resource-detail__body">
            <p className="resource-detail__intro">{story.description}</p>
            {story.body.map((paragraph) => (
              <section key={paragraph.heading}>
                <h2>{paragraph.heading}</h2>
                <p>{paragraph.text}</p>
              </section>
            ))}
            {story.results && <div className="resource-detail__results">{story.results.map((result) => <strong key={result}>{result}</strong>)}</div>}
            <Link className="resource-detail__all-link" to="/resources">Explore all resources <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </article>
    </main>
  );
}
