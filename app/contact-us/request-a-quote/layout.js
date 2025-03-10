import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Request a Quote - Power Platform Experts | Microsoft Power Platform Solutions",
  description:
    "Submit your Power Platform project requirements for a detailed quote. Specialists in Power BI, Power Apps, Power Automate, and Power Pages custom development and consulting services.",

  // OpenGraph
  openGraph: {
    title:
      "Request a Quote - Power Platform Experts | Custom Solutions & Consulting",
    description:
      "Get a detailed quote for your Microsoft Power Platform project. Expert consulting and development services for Power BI, Power Apps, Power Automate, and Power Pages solutions.",
    url: "https://www.powerplatformexperts.com.au/contact-us/request-a-quote/",
  },

  // Additional metadata
  keywords: [
    // Quote-specific keywords
    "Power Platform consultation quote",
    "Power BI development cost estimate",
    "Power Apps custom solution pricing",
    "Power Automate implementation quote",
    "Power Pages development estimate",

    // Service-specific long tail
    "Power BI dashboard migration cost",
    "Power Apps business process automation quote",
    "Power Automate workflow optimization pricing",
    "Power Pages portal development estimate",
    "Power Platform system integration consultation",

    // Project-specific
    "Power BI financial dashboard quote",
    "Power Apps inventory system estimate",
    "Power Automate document workflow pricing",
    "Power Pages customer portal quote",
    "Power Platform enterprise solution cost",

    // Support-specific
    "Power BI technical support pricing",
    "Power Apps maintenance services quote",
    "Power Automate workflow support cost",
    "Power Pages hosting services estimate",
    "Power Platform ongoing support plans",

    // Location-specific
    "Power Platform consultants Sydney quote",
    "Power BI specialists Melbourne pricing",
    "Power Apps developers Brisbane estimate",
    "Power Platform experts Perth consultation",
    "Australian Power Platform services quote",
  ],

  canonical:
    "https://www.powerplatformexperts.com.au/contact-us/request-a-quote/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
