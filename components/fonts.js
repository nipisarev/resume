import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
        @import url('https://fonts.googleapis.com/css2?family=Encode+Sans:wght@300;400;500;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Encode+Sans:wght@300;900&display=swap');
     `}
  />
)

export default Fonts
