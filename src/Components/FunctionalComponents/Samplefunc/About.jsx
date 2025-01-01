function About(props) {
    return (
        <section>
            <div>
                <h3 style={{ color: "black" }}>This is About page</h3>
                <h1 style={{ textAlign: "center", color: "black" }}>Learning props</h1>

                <h3 style={{ color: "black" }}>I am in {props.college} college</h3>
                <h3 style={{ color: "black" }}>Other Colleges are {props.clg}, {props.clg1}</h3>
            </div>
        </section>
    );
}

export default About;
