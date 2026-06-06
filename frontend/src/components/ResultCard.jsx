function ResultCard({ title, content}) {
    return (
        <div className="result-card">
            <h3>{title}</h3>
            <pre>{content}</pre>
        </div>          
    );
}
export default ResultCard;