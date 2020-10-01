import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as QuoteIconBase } from "images/quotes-l.svg"
import "slick-carousel/slick/slick.css";
import Apply from "components/job/apply.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/footers.js";

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-primary-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`
const QuoteContainer = tw.div`relative`
const QuoteIcon = tw(QuoteIconBase)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`
export default ({
  subheading = "WE'RE HIRING A FULL-TIME ",
  heading = "Back-End Developer",
  description = " ",
  testimonials = [
    {
     quote:
        "We're looking for an experienced Back-End Developer to help lead diverse and challenging digital projects for some exciting clients. This is a leadership position with a necessary focus on design, excellence, innovation and passion. Our workflow is extremely collaborative while every project is different and tailored to the personality of the brand. We are tackling complex brand challenges with digital answers that differ from our last success -- less 'rinse and repeat', more 'rethink and revolutionize.' Our work environment is laid back but serious about results. We are a lean, growing agency so all of our work must exhibit a high level of conceptual thought and aesthetic value. Story is king. Attention to detail isn't optional. Work hard. Play hard. We always make sure we're laughing. We always make sure we're getting better. This position is reomte. Can you dig it?"
    }
  ],
  testimonials1 = [
  {
    quote:
    ""
  }],
  testimonials2 = [
  {
    quote:
    ""
  }],
  testimonials3 = [
  {
    quote:
    ""
  }]
}) => {

  return (
    <>
    <AnimationRevealPage>
      <Header />
      <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial.quote}
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
        <br />
        <br />
        {subheading && <Subheading>THE MUST-HAVES</Subheading>}
        <Heading>Qualifications</Heading>
          {testimonials1.map((testimonial1, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial1.quote}
                  <ul>1. Basic understanding of front-end technologies and platforms, such as JavaScript, HTML5, and CSS3</ul>
                  <ul>2. Good understanding of server-side CSS preprocessors, such as LESS and SASS</ul>
                  <ul>3. Understanding accessibility and security compliance.</ul>
                  <ul>4. User authentication and authorization between multiple systems, servers, and environments.</ul>
                  <ul>5. Integration of multiple data sources and databases into one system.</ul>
                  <ul>6. Management of hosting environment, including database administration and scaling an application to support load changes.</ul>
                  <ul>7. Data migration, transformation, and scripting.</ul>
                  <ul>8.Creating database schemas that represent and support business processes.</ul>
                  <ul>9. Proficient knowledge of a back-end programming language.</ul>
                  <ul>10. Proficient understanding of code versioning tools, such as Git.</ul>
                  <ul>11. Proficient understanding of OWASP security principles.</ul>
                  <ul>12. Understanding of “session management” in a distributed server environment.</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
         <br />
        <br />
        <HeadingContainer>
          {subheading && <Subheading>THE DAILY TO-DOS</Subheading>}
          <Heading>Responsibilities</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
          {testimonials2.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial.quote}
                  <ul>1. Integration of user-facing elements developed by a front-end developers with server side logic.</ul>
                  <ul>2. Building reusable code and libraries for future use.</ul>
                  <ul>3. Optimization of the application for maximum speed and scalability.</ul>
                  <ul>4. Implementation of security and data protection.</ul>
                  <ul>5. Design and implementation of data storage solutions.</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
         <br />
        <br />
          <HeadingContainer>
          {subheading && <Subheading>THE EXTRA STUFF</Subheading>}
          <Heading>Bonus skills</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
          {testimonials3.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial.quote}
                  <ul>1. Basic knowledge of react.js.</ul>
                  <ul>2. Comfortable working in the command line.</ul>
                  <ul>3. Prior experience as a UI Designer.</ul>
                </Quote>
              </QuoteContainer>
            </Testimonial>
          ))}
      </ContentWithPaddingXl>
      </Container>
      <Apply />
      <Footer />
    </AnimationRevealPage>
    </>
  );
};
