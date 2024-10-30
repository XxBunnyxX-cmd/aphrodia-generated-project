import React, { useState } from 'react';
    import { Snackbar, Button } from '@mui/material';

    function CookieConsent() {
      const [open, setOpen] = useState(true);

      const handleAccept = () => {
        setOpen(false);
        // Here you can add logic to store the consent in local storage or cookies
      };

      return (
        <Snackbar
          open={open}
          message="We use cookies to improve your experience. By using our site, you agree to our cookie policy."
          action={
            <Button color="secondary" size="small" onClick={handleAccept}>
              Accept
            </Button>
          }
        />
      );
    }

    export default CookieConsent;
