import Wrapper from '../layout/Wrapper';
import SEO from '../components/SEO';
import ContactMain from '../components/contact';

const Contact = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Contact Us'} />
      <ContactMain/>
    </Wrapper>
  );
};

export default Contact;