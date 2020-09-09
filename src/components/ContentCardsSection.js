import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import ContentCards from "./ContentCards";

function ContentCardsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        ></SectionHeader>
        <ContentCards
          items={[
            {
              image:
                "https://miro.medium.com/max/700/1*-QnCh603gbVipMpq2-QxaQ.png",
              title: "10 Tips and Tricks to Boost Your React App’s Performance in 2020",
              body:
                "Faster apps, happier users",
              url:
                "https://medium.com/better-programming/10-tips-and-tricks-to-boost-your-react-apps-performance-in-2020-9388159f6ebf",
            },
            {
              image:
                "https://miro.medium.com/max/800/1*YG3-T77xGBfKDn5SfE6P8w.jpeg",
              title: "Why React16 is a blessing to React developers",
              body:
                "Just like how people are excited about updating their mobile apps and OS...",
              url:
                "https://medium.com/free-code-camp/why-react16-is-a-blessing-to-react-developers-31433bfc210a",
            },
            {
              image:
                "https://miro.medium.com/max/512/1*k4hiuaBtPRxcD2czVreyvA.png",
              title: "Improving the UX of React apps with Skeleton/Content Loader",
              body:
                "Get rid of loading mask as some places in your apps and replace it....",
              url:
                "https://medium.com/javascript-in-plain-english/improving-the-ux-of-react-apps-with-skeleton-content-loader-f094e7ada4b6",
            },
            {
              image:
                "https://miro.medium.com/max/2000/1*HuXW8lSzyaOyK95Mgu6oJQ.png",
              title: "Managing States with Recoil in React Applications",
              body:
                "Recoil is an experimental state management library for React apps",
              url:
                "https://blog.bitsrc.io/manging-state-with-recoil-in-react-application-aecdbfd371b7",
            },
            {
              image:
                "https://miro.medium.com/max/1400/1*bsk4y_rRxmX_Qtol3H3caw.png",
              title: "Replacing Lifecycle methods with React Hooks",
              body: "Why use class component when you have hooks",
              url:
                "https://medium.com/javascript-in-plain-english/lifecycle-methods-substitute-with-react-hooks-b173073052a",
            },
            {
              image:
                "https://miro.medium.com/max/1298/1*C--vxGhLUtVAIsOUt4VuKA.png",
              title: "Tips to Level Up Your JavaScript and React Skills",
              body: "Clean up your code and follow some best practices",
              url:
                "https://medium.com/better-programming/tips-to-level-up-your-javascript-and-react-skills-62bfbbb9b4d",
            },
            {
              image:
                "https://miro.medium.com/max/1400/1*dahHaMDlEHzN_oXTam7Ibw.jpeg",
              title: "Mastering JS console.log like a Pro",
              body:
                "Still, using only console.log( ) to debug? Well, there’s a lot more which can help.",
              url:
                "https://medium.com/javascript-in-plain-english/mastering-js-console-log-like-a-pro-1c634e6393f9",
            },
            {
              image:
                "https://miro.medium.com/max/2000/1*LdeitDJOoCxAmTQwHmXubw.png",
              title: "A Quick Walkthrough of SuspenseList in React",
              body:
                "wait for some code to load and declaratively specify a loading state ",
              url:
                "https://blog.bitsrc.io/quick-walkthrough-to-suspenselist-in-react-b930d1ece892",
            },
            {
              image:
                "https://miro.medium.com/max/1400/1*7fOjnGrHXIwWXvaFzz7AFA.jpeg",
              title: "Making API Calls with React Hooks",
              body:
                "This article will help you take the baby steps in using React Hooks",
              url:
                "https://blog.bitsrc.io/making-api-calls-with-react-hooks-748ebfc7de8c",
            },
            {
              image:
                "https://miro.medium.com/max/2000/1*I3-_thuPDL1bfAuLCBntPQ.png",
              title: "How RPA helped to automate the inbound Leads",
              body:
                "RPA is the use of software with AI and Machine Learning capabilities",
              url:
                "https://medium.com/datadriveninvestor/how-robotics-process-automation-rpa-helped-to-automate-the-inbound-leads-9c459f781dc0",
            },
            {
              image:
                "https://miro.medium.com/max/1400/1*2NRK1h-ltqf4a5hQH4iCcw.png",
              title:
                "How React Context can come to the rescue if you don’t know Redux",
              body: "Redux is an open-source JavaScript...",
              url:
                "https://medium.com/free-code-camp/how-react-context-can-come-to-the-rescue-if-you-dont-know-redux-5452464642ee",
            },
            {
              image:
                "https://miro.medium.com/max/2000/1*ooFBMFLQ8E3t_vcXgPBnoA.png",
              title:
                "Deploy React Application with Docker and Google Cloud Platform",
              body: "Deploy React app with Docker on GCP",
              url:
                "https://medium.com/hackernoon/deploy-react-application-using-docker-and-google-cloud-platform-4bc03f9ee1f",
            },
            {
              image:
                "https://miro.medium.com/max/1272/1*lTaYmnmt1NdkNFh7u6zzkw.png",
              title: "An introduction to React Hooks",
              body:
                "As the ReactJs library gets new updates, there are a lot of things being added.",
              url:
                "https://medium.com/free-code-camp/an-introduction-to-react-hooks-12843fcd2fd9",
            },
            {
              image:
                "https://miro.medium.com/max/1400/1*Ni106ItQRUND0va98Kg5dQ.jpeg",
              title: "Meet Azure Logic Apps to know of their amazing benefits",
              body:
                "Wondering what are Azure Logic Apps? No worries I’ve got your back covered!",
              url:
                "https://medium.com/datadriveninvestor/meet-azure-logic-apps-to-know-its-amazing-benefits-e2a622b06907",
            },
            {
              image:
                "https://miro.medium.com/max/1400/1*WewJcRb59DjFpOCwxxY0Dg.png",
              title: "Machine Learning basics — It’s your cup of tea!",
              body:
                "I’m sure every one you must have heard of this buzzword Machine Learning",
              url:
                "https://medium.com/hackernoon/machine-learning-basics-its-your-cup-of-tea-af4baf060ace",
            },
            {
              image:
                "https://miro.medium.com/max/1104/1*F-zh8fqvH2Xmt6vZmzeklg.jpeg",
              title: "Welcome to the Bots Era!",
              body:
                "Application of chatbots rages wide from being your sales rep, booking a restaurant or your favourite movie running ...",
              url:
                "https://blog.cloudboost.io/welcome-to-the-bots-era-3a7eb7b01798",
            },
            {
              image:
                "https://miro.medium.com/max/2000/1*ha7eLVyYX5b9mmXqPR0puA.jpeg",
              title:
                "Get Started with RPA — Robotics Process Automation and it’s Tools",
              body: "RPA evolved from key technologies screen scraping, workflow automation...",
              url:
                "https://medium.com/datadriveninvestor/get-started-with-rpa-robotics-process-automation-and-its-tools-e5bfa03044ff",
            },
            {
              image:
                "https://miro.medium.com/max/1400/1*4qJJIQHpIzi2P0_VtSqVHA.jpeg",
              title: "Alertly — An easier way to use JIRA with Slack",
              body:
                "Make your work fun again! When it comes to people working together to build great..",
              url:
                "https://medium.com/@MakadiaHarsh/alertly-an-easier-way-to-use-jira-with-slack-8272b6334e6f",
            },
            {
              image:
                "https://miro.medium.com/max/1400/1*X6ishTqTuljQ76RxajGr3A.png",
              title:
                "Quick walkthrough to the new ES6 syntax making developer’s job easy",
              body: "Here’s the list of the commonly used ES6 that you can use in your project",
              url:
                "https://blog.cloudboost.io/quick-walkthrough-to-the-new-es6-syntax-making-developers-job-easy-5be504511d0f",
            },
            {
              image:
                "https://miro.medium.com/max/1984/1*MtHX2OZYlQxjYP_VGJzhgg.jpeg",
              title:
                "Create and deploy chatbots in minutes with Google Sheets using WotNot!",
              body: "Deploy bots using WotNot.io, No coding Required!",
              url:
                "https://blog.cloudboost.io/create-and-deploy-chatbots-in-minutes-with-google-sheets-using-wotnot-50a77b98dfbe",
            },
          ]}
        ></ContentCards>
      </Container>
    </Section>
  );
}

export default ContentCardsSection;
