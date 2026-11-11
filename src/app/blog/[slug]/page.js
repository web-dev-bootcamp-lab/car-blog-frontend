import { ArrowLeft, ArrowRight, Clock3, Facebook, Linkedin, Twitter } from 'lucide-react';
import { navigate } from '../../router.js';
import { articles } from '../../articles.js';

function renderBodyBlock(block, index) {
  if (block.type === 'h2') return <h2 key={index}>{block.text}</h2>;
  if (block.type === 'quote') return <blockquote key={index}>{block.text}</blockquote>;
  return <p key={index}>{block.text}</p>;
}

export default function Article({ slug }) {
  const article = articles.find((a) => a.slug === slug) ?? articles[0];
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <main className="page-shell article-page">
      <div className="article-topbar content-width"><button className="back-button" type="button" onClick={() => navigate('/')}><ArrowLeft size={16} /> Back to all stories</button><div className="social-links"><span>Share</span><button type="button" aria-label="Share on Twitter"><Twitter size={15} /></button><button type="button" aria-label="Share on Facebook"><Facebook size={15} /></button><button type="button" aria-label="Share on LinkedIn"><Linkedin size={15} /></button></div></div>
      <article className="article-content content-width">
        <div className="article-kicker">{article.kicker}</div>
        <h1>{article.title}</h1>
        <p className="article-dek">{article.dek}</p>
        <div className="author-row"><div className="author-avatar">{article.author.charAt(0)}</div><div><strong>{article.author}</strong><p>{article.date} <span>•</span> {article.readTime}</p></div></div>
        <img className="article-image" src={article.image} alt={article.title} />
        <div className="article-body">{article.body.map(renderBodyBlock)}</div>
        <div className="article-meta"><span>Filed under <b>{article.category}</b></span><div className="social-links"><button type="button" aria-label="Share on Twitter"><Twitter size={15} /></button><button type="button" aria-label="Share on Facebook"><Facebook size={15} /></button><button type="button" aria-label="Share on LinkedIn"><Linkedin size={15} /></button></div></div>
      </article>
      <section className="related-section content-width"><div className="section-heading"><h2>More to explore</h2><span className="heading-line" /></div><div className="related-grid">{related.map((rel) => <button className="related-card" type="button" key={rel.slug} onClick={() => navigate(`/blog/${rel.slug}`)}><img src={rel.image} alt="" /><div className="story-meta">{rel.author} <span>•</span> {rel.readTime}</div><h3>{rel.title}</h3><span className="read-link">Read article <ArrowRight size={14} /></span></button>)}</div></section>
      <div className="article-note"><Clock3 size={16} /> New stories arrive every week.</div>
    </main>
  );
}
