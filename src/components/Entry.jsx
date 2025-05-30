import PropTypes from 'prop-types';

const Entry = (props) => {
    return (
        <a href="#" className="entry">
            <article className="entry-article">
                <div className="article_text">
                    <h2 className="article-title">{props.title}</h2>
                    <div className="article-info">
                        <p className='article-info__date'>
                            {new Date(props.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                        <p className='article-info__author'><span className='author'>Author:</span> {props.author}</p>
                        <p className='article-info__reading-time'><span className='reading-time'>Reading time:</span> {props.readingTime} minutes.</p>
                    </div>
                    <p className='article-excerpt'>{props.excerpt}</p>
                </div>
                <div className="article-img__container">
                    <img
                        className="article_img"
                        src={props.coverImage}
                        alt={props.title}
                        loading='lazy'
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
            </article>
        </a>
    )
}

Entry.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    excerpt: PropTypes.string,
    coverImage: PropTypes.string, // Ensure this is a string URL
    createdAt: PropTypes.string,
    readingTime: PropTypes.number,
  };
export default Entry
