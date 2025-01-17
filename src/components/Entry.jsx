const Entry = (props) => {
    console.log(props)
    return (
        <a href="#" className="entries">
            <article>
                <div className="article_text">
                    <h2>{props.title}</h2>
                    <div className="article_info">
                        <p>
                            {new Date(props.createdAt).toISOString().split('T')[0]}
                        </p>
                        <p>Author: {props.author}</p>
                        <p>Reading time: {props.readingTime} minutes.</p>
                    </div>
                    <p>{props.excerpt}</p>
                </div>
                <div className="article-img__container">
                    <img className="article_img" src={props.coverImage}/>
                </div>
            </article>
        </a>
    )
}

export default Entry