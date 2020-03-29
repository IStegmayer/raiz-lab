import React from 'react';

import { CustomButtonContainer } from "./styles/custom-button.styles";

const CustomButton = ({ children, ...props }) => {
    return  (
        <>
          <CustomButtonContainer {... props}>{children}</CustomButtonContainer>
        </>
    );
};

export default React.memo(CustomButton);