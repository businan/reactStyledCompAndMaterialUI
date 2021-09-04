import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Cards = () => {
    return (
        <Grid container justify="center" spacing={2}>
            {[0, 1, 2].map((value) => (
                <Grid key={value} item xs={3} sm={6} lg={12} >
                    <Paper
                        style={{ height: 80, marginBottom: 10 }}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default Cards;
