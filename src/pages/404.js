import React from 'react'
import Layout from "../components/Layout" 
import Strippers from "../components/strippers"
import useApp from '../functions/useApp'
export default () => {
    const { isHalfShown } = useApp() 
    return (
      <Layout title="Error" footerOnScreen={isHalfShown[1]}>
        <h1 className="glow">page not found</h1>
        <p>
          Use the menu above to get out of here, or checkout the man candy
          below!!!
        </p>
        <Strippers onScreen={isHalfShown[0]} />
      </Layout>
    )
}
