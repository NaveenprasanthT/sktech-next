import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import TermsConditions from '@/components/TermsConditions/TermsConditions';
import React from 'react'

const termsconditions = () => {
  return (
    <div>
        <Navbar />
        <TermsConditions />
        <Footer />
    </div>
  )
}

export default termsconditions;