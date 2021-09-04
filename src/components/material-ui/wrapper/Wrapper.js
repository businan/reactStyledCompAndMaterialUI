import Container from "@material-ui/core/Container";

const Wrapper = ({ children }) => {
    return <Container maxWidth="md"> {children} </Container>;
};

export default Wrapper;
