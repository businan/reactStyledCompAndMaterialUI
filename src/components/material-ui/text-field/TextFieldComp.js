import TextField from "@material-ui/core/TextField";

import React from "react";

const TextFieldComp = () => {
    return (
        <>
            <TextField
                variant="outlined"
                label="outlined"
                type="email"
                // placeholder="mui@mui.com placeholder"
                color="secondary"
            />
            {/* <TextField
                id="standard-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                    readOnly: true,
                }}
            /> */}
        </>
    );
};

export default TextFieldComp;
