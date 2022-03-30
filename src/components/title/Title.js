import './Title.css'

export default function Title(props) {
    return (
        <div>
            <h1 className="latestNews">{props.newsTitle}</h1>
            <h2 className="news">{props.newsInfo}</h2>
        </div>
    )
}