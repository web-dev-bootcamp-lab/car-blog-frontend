import { ArrowRight, Clock3 } from 'lucide-react';
import { navigate } from './router.js';
import { articles, categories } from './articles.js';

const featuredArticle = articles.find((a) => a.featured) ?? articles[0];
const trending = articles.filter((a) => !a.featured).slice(0, 3);

export default function Home() {
  return (
    <main className="page-shell">
      <section className="blog-hero">
        <img className="hero-image" src="https://images.pexels.com/photos/94272/sports-car-pkw-auto-vehicle-94272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Black sports car in a dark studio" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-copy">
          <h1>Your Journey<br />Your Car<br />Ytour Way</h1>
          <p className="hero-text">Stories, ideas, and honest advice for people who believe the best journeys are the ones you remember. Discover the cars and experiences that make every drive matter.</p>
          <button className="coral-button" type="button" onClick={() => document.getElementById('latest')?.scrollIntoView({ behavior: 'smooth' })}>Subscribe <ArrowRight size={16} /></button>
        </div>
      </section>

      <section className="featured-layout content-width" id="latest">
        <article className="featured-story" onClick={() => navigate(`/blog/${featuredArticle.slug}`)}>
          <img src={featuredArticle.image} alt={featuredArticle.title} />
          <div className="story-meta">By <b>{featuredArticle.author}</b><span>•</span> {featuredArticle.date} <span>•</span> {featuredArticle.readTime}</div>
          <h2>{featuredArticle.title}</h2>
          <p>{featuredArticle.excerpt}</p>
          <button className="text-button" type="button">Read more <ArrowRight size={15} /></button>
        </article>
        <aside className="trending-panel">
          <div className="section-heading"><h2>Trending Blogs</h2><button type="button">See all</button></div>
          {trending.map((article, index) => (
            <button className={`trending-item ${index === 1 ? 'highlighted' : ''}`} key={article.slug} type="button" onClick={() => navigate(`/blog/${article.slug}`)}>
              <span className="trending-number">0{index + 1}</span><span>{article.title}</span>
            </button>
          ))}
        </aside>
      </section>

      <section className="section-block content-width">
        <div className="section-heading"><h2>All posts</h2><span className="heading-line" /></div>
        <div className="post-list">
          {articles.map((article) => (
            <article className="post-row" key={article.slug} onClick={() => navigate(`/blog/${article.slug}`)}>
              <img src={article.image} alt="" />
              <div><div className="story-meta"><b>{article.author}</b><span>•</span> {article.date} <span>•</span> {article.readTime}</div><h3>{article.title}</h3><p>{article.excerpt}</p><span className="read-link">Read full article <ArrowRight size={14} /></span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block content-width categories-section">
        <div className="section-heading"><h2>All Category</h2><span className="heading-line" /></div>
        <div className="category-grid">{categories.map((category) => <button className="category-card" type="button" key={category.name}><span className="category-icon"><Clock3 size={22} /></span><h3>{category.name}</h3><p>{category.detail}</p></button>)}</div>
      </section>

    </main>
  );
}
