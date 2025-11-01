function Card({ title, description, image }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px",
            borderRadius: "10px",
            width: "250px",
            textAlign: "center"
        }}>
            <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px" }} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}
export default Card; 