function Post(props) {
    const handleClick = (e) => {
        alert("You clicked " + props.post)
    }
    return (
        <div className="container">
            <div className="box">
                <h3>
                    {props.post}
                </h3>
                <p>
                    {props.body}
                </p>
                <button onClick={handleClick} style={{ textAlign: 'center' }}>Click Me</button>
            </div>
        </div>
    )
}

export default Post;