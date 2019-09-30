# fedacheckout-react

> 
-The lib is inside "dist" folder  
-A test project is in "example" folder


## Usage

```tsx
import * as React from 'react'

import FedaCheckoutComponent from 'fedacheckout-react'

class Example extends React.Component {
  render () {
    return (
       <FedaCheckoutComponent
            data_public_key="pk_sandbox_any5haoJcTgH3ja2EkCbsfam"
            data_transaction_amount="5"
            data_transaction_description="Première transaction"
            data_currency_iso="XOF"
            data_button_class="btn btn-secondary"
          />
    )
  }
}