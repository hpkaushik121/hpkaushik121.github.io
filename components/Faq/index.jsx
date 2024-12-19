import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import Faq from "react-faq-component"
import styled from 'styled-components';

const Index = ({ faq }) => {
    const [mounted, setMounted] = useState(false)
    
const styles = {
    bgColor: 'transparent',
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: 'gray',
     arrowColor: "white"
};
const FAQSection = styled.div`
padding: 0em 5em;
`;

const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
};

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
   <>
 
 <FAQSection >
            <Faq
                data={faq}
                styles={styles}
                config={config}
            />
        </FAQSection>
   </>



    
  )
}

export default Index
