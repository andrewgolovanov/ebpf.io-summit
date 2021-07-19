import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';

const Register = ({ title, description, button }) => (
  <section className="text-center">
    <Container className="pt-16 overflow-hidden bg-primary-1 pb-14">
      <img
        className="absolute top-0 left-0 lg:-left-20 md:hidden"
        src={shape1}
        alt=""
        aria-hidden
      />
      <img
        className="absolute top-0 right-0 lg:-right-20 md:hidden"
        src={shape2}
        alt=""
        aria-hidden
      />
      <Heading tag="h2" size="lg">
        {title}
      </Heading>
      <p className="mt-6 text-xl max-w-[656px] mx-auto md:text-lg">{description}</p>
      <Button className="mt-9" to={button.url} theme="black">
        {button.title}
      </Button>
    </Container>
  </section>
);

Register.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Register;