const Services = () => {
    return (
        <>
            <h1>Services Import from Services.jsx...and name changed through Alias</h1>
        </>
    )
}
// export default Services    //default for single export
const Home = () => {
    return (
        <>
            <h1 style={{ backgroundColor: "greenyellow", }}>Home from name export</h1>
        </>
    )
}
export { Services, Home } 