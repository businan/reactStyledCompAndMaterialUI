import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NetworkCheckIcon from "@material-ui/icons/NetworkCheck"

const CheckBoxComp = () => {
    const [checked, setChecked] = React.useState(false)
    console.log("check", checked) 
    return (
        <FormControlLabel
            control={
                <Checkbox
                    icon={<NetworkCheckIcon/>}
                    checkedIcon={<NetworkCheckIcon/>}
                    checked={checked}
                    // onChange={() => setChecked(prev => !prev)}
                    onChange={(e) => setChecked(e.target.checked)}
                />
            }
            label="Network Check"
        >



            
      

        </FormControlLabel>
        
        
    )
}

export default CheckBoxComp
