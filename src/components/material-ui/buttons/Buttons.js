import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

const Buttons = () => {
    return (
        <ButtonGroup variant="contained" size="large">
            <Button color="secondary" startIcon={<SaveIcon />}>
                Save
            </Button>
            <Button
                // style={{ fontSize: "18px" }}
                color="primary"
                size="small"
                endIcon={<DeleteIcon />}
            >
                Delete
            </Button>
        </ButtonGroup>
    );
};

export default Buttons;
