import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledContactPage = styled.main`
  max-width: 700px;
  margin: 0 auto;
  padding: 120px 0 40px;

  h1 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 30px;
    max-width: 620px;
  }

  form {
    display: grid;
    gap: 16px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid var(--lightest-navy);
    border-radius: var(--border-radius);
    background: var(--light-navy);
    color: var(--lightest-slate);
    padding: 12px 14px;
    font-size: var(--fz-md);
  }

  textarea {
    min-height: 160px;
    resize: vertical;
  }

  button {
    ${({ theme }) => theme.mixins.button};
    width: max-content;
    margin-top: 8px;
  }
`;

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <StyledContactPage>
      <Helmet title="Contact" />
      <h1 className="big-heading">Get in touch</h1>
      <p>
        Share your project details and IzarAi will contact you with the right approach for your
        business goals.
      </p>

      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="name">
          Name
          <input id="name" name="name" type="text" required />
        </label>

        <label htmlFor="email">
          Email
          <input id="email" name="email" type="email" required />
        </label>

        <label htmlFor="company">
          Company
          <input id="company" name="company" type="text" />
        </label>

        <label htmlFor="message">
          Project details
          <textarea id="message" name="message" required />
        </label>

        <button type="submit">Send message</button>
      </form>
    </StyledContactPage>
  </Layout>
);

ContactPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ContactPage;
