import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./App.css";

const selectSound = new Audio("/sounds/mixkit-select-click-1109.wav");

const questions = [
  {
    "question": "The Department for Promotion of Industry and Internal Trade (DPIIT) recently revised the eligibility criteria for startups. What is the maximum annual turnover a startup can have in any financial year since incorporation to remain eligible for recognition?",
    "options": [
      "INR 25 Crores",
      "INR 50 Crores",
      "INR 100 Crores",
      "INR 250 Crores"
    ],
    "answer": "INR 100 Crores",
    "explanation": "According to DPIIT guidelines updated in January 2022, a startup's turnover must not exceed INR 100 crores in any financial year since its incorporation/registration.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "An entrepreneur who follows successful business models and focuses on improving the efficiency and scalability of existing ideas rather than generating entirely new ones is classified as:",
    "options": [
      "Innovative Entrepreneur",
      "Social Entrepreneur",
      "Imitative Entrepreneur",
      "Corporate Entrepreneur"
    ],
    "answer": "Imitative Entrepreneur",
    "explanation": "Imitative entrepreneurs follow successful models and strategies of other businesses, focusing on improving efficiency and scalability of existing concepts.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "Which Industrial Revolution is characterized by interconnected technologies, renewable energy, and the rise of data analytics and machine learning?",
    "options": [
      "First Industrial Revolution",
      "Second Industrial Revolution",
      "Third Industrial Revolution",
      "Fourth Industrial Revolution"
    ],
    "answer": "Fourth Industrial Revolution",
    "explanation": "The fourth industrial revolution is defined by connected devices, digital transformation, data analytics, AI, and machine learning, starting from 2000 onwards.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "In the context of entrepreneurial skills, 'Resilience' is best described as:",
    "options": [
      "The capacity to navigate a constantly changing business environment.",
      "The capacity to withstand setbacks, learn from failures, and persevere.",
      "The skill of guiding a team toward shared goals.",
      "The ability to objectively analyze information and draw rational conclusions."
    ],
    "answer": "The capacity to withstand setbacks, learn from failures, and persevere.",
    "explanation": "Resilience refers to an entrepreneur's ability to handle adversity, learn from mistakes, and continue moving forward.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "The 'Standup India' scheme, launched in 2016, specifically facilitates bank loans for which of the following categories of entrepreneurs?",
    "options": [
      "Tech-based startups only",
      "Women, Scheduled Castes (SCs), and Scheduled Tribes (STs)",
      "Entrepreneurs in the agricultural sector only",
      "Micro-enterprises in the non-corporate small business sector"
    ],
    "answer": "Women, Scheduled Castes (SCs), and Scheduled Tribes (STs)",
    "explanation": "Standup India focuses on promoting entrepreneurship among women, SCs, and STs by facilitating loans between INR 10 lakhs and INR 1 crore.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "Under the Pradhan Mantri Mudra Yojana (PMMY), a loan of INR 4.5 Lakhs would fall under which category?",
    "options": [
      "Shishu",
      "Kishor",
      "Tarun",
      "Vikas"
    ],
    "answer": "Kishor",
    "explanation": "Mudra loans are categorized as Shishu (up to 50,000), Kishor (50,000 to 5 lakhs), and Tarun (5 lakhs to 10 lakhs).",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "Succession planning in a family business is primarily aimed at:",
    "options": [
      "Maximizing short-term profits before an acquisition.",
      "Ensuring the smooth transition of wealth, leadership, and continuity across generations.",
      "Eliminating external advisors to keep control within the family.",
      "Ensuring that all family members receive an equal share of equity regardless of contribution."
    ],
    "answer": "Ensuring the smooth transition of wealth, leadership, and continuity across generations.",
    "explanation": "Succession planning is a strategic process for ensuring business continuity and leadership transition across generations in family-owned firms.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "Which government initiative, launched by NITI Aayog, aims to stimulate innovation through Atal Incubation Centers and Atal Tinkering Labs?",
    "options": [
      "Startup India",
      "Make in India",
      "Atal Innovation Mission (AIM)",
      "Digital India"
    ],
    "answer": "Atal Innovation Mission (AIM)",
    "explanation": "AIM was launched by NITI Aayog to foster a culture of innovation and entrepreneurship through infrastructure and school-level labs.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "DPIIT-recognized startups are eligible for income tax exemptions for how many consecutive assessment years?",
    "options": [
      "Three years out of the first five years",
      "Three years out of the first ten years",
      "Five years out of the first ten years",
      "Ten years from the date of incorporation"
    ],
    "answer": "Three years out of the first ten years",
    "explanation": "DPIIT-registered startups are eligible for income tax exemptions for three consecutive assessment years within their first ten years of existence.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "To be eligible for DPIIT recognition, a startup must be incorporated as which type of entity?",
    "options": [
      "Sole Proprietorship, LLP, or Private Limited Company",
      "Registered Partnership Firm, LLP, or Private Limited Company",
      "Public Limited Company, LLP, or Private Limited Company",
      "Any registered business entity including Section 8 companies"
    ],
    "answer": "Registered Partnership Firm, LLP, or Private Limited Company",
    "explanation": "Eligibility requires the startup to be a private limited company, a limited liability partnership (LLP), or a registered partnership firm.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "The term 'Entrepreneur' is thought to have originated from the French word 'entreprendre', which means:",
    "options": [
      "To take a risk",
      "To start something",
      "To manage a trade",
      "To innovate technology"
    ],
    "answer": "To start something",
    "explanation": "The term 'entrepreneur' likely comes from the French word 'entreprendre,' meaning to start something.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "Which of the following is NOT a core characteristic of a startup as mentioned in the theory?",
    "options": [
      "High growth potential",
      "Innovation and unique products",
      "Low-risk environment",
      "Technology focus"
    ],
    "answer": "Low-risk environment",
    "explanation": "Startups typically operate in a risky environment where failure is common, but success leads to rapid growth.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "Which city is frequently referred to as the 'Silicon Valley of India' due to its robust startup ecosystem?",
    "options": [
      "Mumbai",
      "Hyderabad",
      "Bangalore",
      "Delhi"
    ],
    "answer": "Bangalore",
    "explanation": "Bangalore is often referred to as the 'Silicon Valley of India' because of its high concentration of startups and tech companies.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "In the evolution of entrepreneurship, the invention of money was a response to the limitations of which system?",
    "options": [
      "The digital economy",
      "The barter system",
      "The gold standard",
      "The factory system"
    ],
    "answer": "The barter system",
    "explanation": "The limitations of direct exchange in the barter system prompted the invention of monetary systems.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "What is the age limit for a startup to be considered 'eligible' for DPIIT registration from its date of incorporation?",
    "options": [
      "Up to 5 years",
      "Up to 7 years",
      "Up to 10 years",
      "Up to 15 years"
    ],
    "answer": "Up to 10 years",
    "explanation": "A startup remains eligible for recognition for up to ten years from the date of its incorporation or registration.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "Which modern business model involves providing a basic version of a product for free while charging for more advanced, premium features?",
    "options": [
      "Subscription Based Model",
      "Marketplace Model",
      "Freemium Model",
      "D2C Model"
    ],
    "answer": "Freemium Model",
    "explanation": "In a freemium model, the basic service is free, and advanced features require payment (e.g., Zomato Gold).",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "In the Business Model Canvas (BMC), the block that identifies the critical assets required to deliver the value proposition is:",
    "options": [
      "Key Activities",
      "Key Resources",
      "Key Partnerships",
      "Value Propositions"
    ],
    "answer": "Key Resources",
    "explanation": "Key Resources are the assets—human, financial, physical, or intellectual—necessary to make the business model work.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "The 'Lean Startup' methodology emphasizes a feedback loop known as:",
    "options": [
      "Plan-Do-Check-Act",
      "Build-Measure-Learn",
      "Design-Develop-Deploy",
      "Think-Test-Transform"
    ],
    "answer": "Build-Measure-Learn",
    "explanation": "The core of Lean Startup is the Build-Measure-Learn feedback loop, focusing on continuous improvement based on data.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "A business pitch delivered in 30 seconds to two minutes, focusing on creating curiosity and interest, is called an:",
    "options": [
      "Investor Pitch",
      "Elevator Pitch",
      "Sales Pitch",
      "Product Pitch"
    ],
    "answer": "Elevator Pitch",
    "explanation": "An elevator pitch is a concise presentation designed to spark interest in the time it takes to ride an elevator.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "The Direct-to-Consumer (D2C) model is gaining prominence because it allows brands to:",
    "options": [
      "Rely on third-party retailers for distribution.",
      "Establish a more personalized connection with consumers and understand their preferences directly.",
      "Increase their dependency on e-commerce marketplaces like Amazon.",
      "Avoid the need for digital marketing and data collection."
    ],
    "answer": "Establish a more personalized connection with consumers and understand their preferences directly.",
    "explanation": "D2C enables brands to bypass intermediaries, giving them more control over the customer experience and data.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "Which component of the BMC outlines the costs associated with operating the business model, including fixed and variable costs?",
    "options": [
      "Revenue Streams",
      "Cost Structure",
      "Value Propositions",
      "Key Activities"
    ],
    "answer": "Cost Structure",
    "explanation": "Cost Structure describes all costs incurred to operate a business model.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "In a 'Marketplace' or 'Aggregator' business model, the platform primarily acts as:",
    "options": [
      "A manufacturer of unique goods.",
      "A single business selling directly to consumers.",
      "An intermediary connecting multiple sellers to various buyers.",
      "A provider of subscription-based software services."
    ],
    "answer": "An intermediary connecting multiple sellers to various buyers.",
    "explanation": "Marketplaces (like Ola, Swiggy, Uber) act as intermediaries connecting buyers and sellers on one platform.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "According to the theory, 'Bootstrapping' refers to developing a startup by:",
    "options": [
      "Raising large rounds of venture capital funding early on.",
      "Using personal resources and revenue generated by the business without external financing.",
      "Securing government grants as the primary source of capital.",
      "Merging with a larger company to share resources."
    ],
    "answer": "Using personal resources and revenue generated by the business without external financing.",
    "explanation": "Bootstrapping involves funding a company using personal savings and business revenue, maintaining founder autonomy.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "What is the primary objective of a business pitch?",
    "options": [
      "To provide a 100-page detailed report on financial history.",
      "To communicate the unique value proposition and generate interest or support.",
      "To list all competitors and their trade secrets.",
      "To hire new employees for the production line."
    ],
    "answer": "To communicate the unique value proposition and generate interest or support.",
    "explanation": "A business pitch is designed to persuade an audience (investors/partners) by communicating the unique value of an idea.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "Which block of the BMC describes the various ways a product or service will reach the target customers?",
    "options": [
      "Customer Relationships",
      "Channels",
      "Value Propositions",
      "Customer Segments"
    ],
    "answer": "Channels",
    "explanation": "Channels describe how a company communicates with and reaches its customer segments to deliver a value proposition.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "Which business model involves individuals sharing resources or services directly with one another through digital platforms (e.g., Airbnb)?",
    "options": [
      "B2B Model",
      "Sharing Economy Model",
      "Manufacturer Model",
      "E-Commerce Model"
    ],
    "answer": "Sharing Economy Model",
    "explanation": "The sharing (or collaborative) economy model involves individuals sharing services directly via digital platforms.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "A good 'Value Proposition' (USP) must have which three characteristics as per Chapter 2?",
    "options": [
      "Low price, high quantity, and bulk availability.",
      "Customer relevance, unique differentiation, and clear communication.",
      "Market saturation, easy replication, and complex language.",
      "Venture capital backing, government recognition, and high turnover."
    ],
    "answer": "Customer relevance, unique differentiation, and clear communication.",
    "explanation": "A good value proposition is relevant to what customers want, differentiates the startup, and is explained clearly.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "A 'Sales Pitch' is distinct from an 'Investor Pitch' because it is primarily tailored to:",
    "options": [
      "Showcase potential for return on investment (ROI).",
      "Emphasize the value of the product and address customer pain points.",
      "Highlight mutual benefits for strategic partners.",
      "Focus exclusively on technical features for engineers."
    ],
    "answer": "Emphasize the value of the product and address customer pain points.",
    "explanation": "Sales pitches are tailored to customers, focusing on how a product meets their specific needs and solves their problems.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "One common mistake to avoid while developing a business model is 'Overlooking Scalability'. This refers to:",
    "options": [
      "Failure to hire enough administrative staff.",
      "Difficulty in accommodating growth and long-term sustainability.",
      "Offering too many free products in the beginning.",
      "Using too much jargon in the pitch deck."
    ],
    "answer": "Difficulty in accommodating growth and long-term sustainability.",
    "explanation": "Without scalability, a business model that works for 10 customers may fail when trying to serve 10,000.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "In the BMC, 'Revenue Streams' identifies how a business earns money. Which of the following is an example of a revenue stream?",
    "options": [
      "Marketing campaigns",
      "Subscription fees",
      "Office rent",
      "Employee salaries"
    ],
    "answer": "Subscription fees",
    "explanation": "Revenue streams include one-time sales, subscription fees, or licensing.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "A Minimum Viable Product (MVP) is fundamental to product development in startups. What is its main purpose?",
    "options": [
      "To launch a fully-featured product to the entire mass market.",
      "To test concepts with minimal resources before full investment.",
      "To showcase the highest possible design fidelity to investors.",
      "To ensure that no competitors can copy the idea."
    ],
    "answer": "To test concepts with minimal resources before full investment.",
    "explanation": "An MVP is a scaled-down version that enables early testing and validation of concepts.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "Product-Market Fit (PMF) is achieved when a startup's product:",
    "options": [
      "Has the lowest price in the market.",
      "Is launched in multiple countries simultaneously.",
      "Satisfies a real market need and resonates deeply with the target audience.",
      "Includes every feature requested by potential users during beta testing."
    ],
    "answer": "Satisfies a real market need and resonates deeply with the target audience.",
    "explanation": "PMF occurs when a product meets a real need in a way that resonates with the audience, leading to adoption.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "Which development methodology allows entrepreneurs to respond effectively to changing market conditions and customer needs through iterative progress?",
    "options": [
      "Waterfall methodology",
      "Agile development",
      "Linear planning",
      "Monolithic development"
    ],
    "answer": "Agile development",
    "explanation": "Agile methodologies value iterative development and flexibility to respond to feedback and changes.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "A 'Prototype' in a tech startup acts as a:",
    "options": [
      "Final version of the software ready for the App Store.",
      "Visual and interactive blueprint to showcase key features and user experience.",
      "Legal document protecting the source code.",
      "Financial projection showing expected revenue from the product."
    ],
    "answer": "Visual and interactive blueprint to showcase key features and user experience.",
    "explanation": "A prototype is a tangible representation with limited functionality to provide a glimpse into the product experience.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "Investors analyze a startup's 'Go-to-Market (GTM) Strategy' to understand:",
    "options": [
      "The total amount of electricity used in the office.",
      "How the company will reach target customers and achieve competitive advantage.",
      "The specific coding language used by the developers.",
      "The names of all sub-suppliers in the second-tier supply chain."
    ],
    "answer": "How the company will reach target customers and achieve competitive advantage.",
    "explanation": "A GTM strategy is an action plan specifying how to reach customers and promote the product.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "In product offering, 'Comprehensive Support and Services' refers to:",
    "options": [
      "Hiring the most expensive legal counsel.",
      "Providing excellent after-sales support to build trust.",
      "Ensuring the product is available in every physical store.",
      "Offering the product for free for the first year."
    ],
    "answer": "Providing excellent after-sales support to build trust.",
    "explanation": "Providing post-purchase support (like Flipkart) is a key element of a strong product offering.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "What is the primary role of 'Procurement' in product development?",
    "options": [
      "Designing the brand logo.",
      "Securing quality materials and managing production costs.",
      "Writing the executive summary for the business plan.",
      "Conducting user interviews for the MVP."
    ],
    "answer": "Securing quality materials and managing production costs.",
    "explanation": "Procurement focuses on sourcing quality materials and managing costs to enhance competitive position.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "Scaling a product 'prematurely' is a common challenge. This often leads to:",
    "options": [
      "Increased market leadership and benchmark setting.",
      "Increased costs without proportional revenue growth and financial strain.",
      "Automatic achievement of Product-Market Fit.",
      "Reduction in total employee headcount."
    ],
    "answer": "Increased costs without proportional revenue growth and financial strain.",
    "explanation": "Scaling before the product is ready or before finding PMF causes financial depletion due to high costs without revenue.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "Which technology is mentioned as a way to enhance transparency and security in supply chain transactions?",
    "options": [
      "Cloud computing",
      "Blockchain",
      "Social media",
      "Virtual reality"
    ],
    "answer": "Blockchain",
    "explanation": "Blockchain technology can provide enhanced transparency, traceability, and security in the supply chain.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "To build a 'Strong Tech' foundation, startups should select technologies that are:",
    "options": [
      "The cheapest available in the market.",
      "Scalable to accommodate increased user loads and evolving requirements.",
      "Highly complex to prevent competitor understanding.",
      "Exclusive to only one specific operating system."
    ],
    "answer": "Scalable to accommodate increased user loads and evolving requirements.",
    "explanation": "Scalability in technology is essential for a product to grow along with the business needs.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "When building an MVP, first-time entrepreneurs should concentrate on:",
    "options": [
      "Including as many features as possible to impress users.",
      "Core functionality that addresses the primary problem.",
      "Extensive marketing before the product is even designed.",
      "Creating a 100% bug-free final production version."
    ],
    "answer": "Core functionality that addresses the primary problem.",
    "explanation": "MVP development should focus on essential features that solve the core problem for the user.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "Which framework should an entrepreneur use to understand the competitive advantage and industry dynamics when seeking PMF?",
    "options": [
      "SWOT Analysis",
      "Porter's Five Forces Model",
      "BCG Matrix",
      "PESTEL Analysis"
    ],
    "answer": "Porter's Five Forces Model",
    "explanation": "The text suggests using Porter's Five Forces to understand the competitive advantage surrounding an industry.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "Efficient supply chain management is not just logistics; for a startup, it is a:",
    "options": [
      "Minor administrative task.",
      "Strategic asset to drive operational excellence.",
      "Legal requirement for DPIIT registration.",
      "Marketing tool for brand recognition."
    ],
    "answer": "Strategic asset to drive operational excellence.",
    "explanation": "Supply chain is a strategic asset that entrepreneurs leverage to maintain a competitive advantage.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "In the context of 'Finding the Best Fit', measuring and analyzing metrics involves establishing:",
    "options": [
      "A dress code for all employees.",
      "Key Performance Indicators (KPIs) like user engagement and conversion rates.",
      "A fixed timeline for an IPO.",
      "A list of all previous failures of the founding team."
    ],
    "answer": "Key Performance Indicators (KPIs) like user engagement and conversion rates.",
    "explanation": "KPIs aligned with objectives help monitor metrics like engagement and satisfaction to ensure success.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "Agile development allows for 'Quick Releases' and user feedback collection. This is invaluable for:",
    "options": [
      "Increasing the initial selling price.",
      "Refining and improving the product based on real-world usage.",
      "Protecting the business from all legal liabilities.",
      "Replacing the need for a co-founder agreement."
    ],
    "answer": "Refining and improving the product based on real-world usage.",
    "explanation": "Feedback from early versions (MVP) is used to iteratively refine and enhance the product.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "The 'Executive Summary' of a business plan is best described as a:",
    "options": [
      "Detailed list of every employee's salary.",
      "Snapshot of the entire business plan, summarizing key aspects like concept and advantage.",
      "Legal contract signed between founders and investors.",
      "Technical manual for the product's operation."
    ],
    "answer": "Snapshot of the entire business plan, summarizing key aspects like concept and advantage.",
    "explanation": "The executive summary provides a high-level overview of the entire business plan.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "Which section of a business plan outlines strategies for acquiring and retaining customers?",
    "options": [
      "Operational Plan",
      "Financial Plan",
      "Marketing and Sales Strategy",
      "Company Description"
    ],
    "answer": "Marketing and Sales Strategy",
    "explanation": "This section details how the business will attract and keep its customer base.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "What does 'Burn Rate' represent in startup finance?",
    "options": [
      "The rate of customer loss (churn).",
      "The rate at which a startup is spending its available funds.",
      "The interest rate on venture debt.",
      "The percentage of equity given to co-founders."
    ],
    "answer": "The rate at which a startup is spending its available funds.",
    "explanation": "Burn rate is the monthly or annual rate at which a startup consumes its capital.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "In a pitch deck, 'Substance' (as opposed to Hype) is characterized by:",
    "options": [
      "Vague and evasive communication.",
      "A track record of achievement and demonstrated ability to execute.",
      "Downplaying potential drawbacks.",
      "Using only visually appealing slides with no data."
    ],
    "answer": "A track record of achievement and demonstrated ability to execute.",
    "explanation": "Substance in a pitch is shown through proven expertise, track records, and transparent communication.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "The percentage of customers who stop using a company's product over a certain period is called the:",
    "options": [
      "Burn Rate",
      "Churn Rate",
      "Conversion Rate",
      "Traction Rate"
    ],
    "answer": "Churn Rate",
    "explanation": "Churn rate helps investors assess customer retention and the quality of the offering.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "The 'Runway' of a startup is a metric that tells us:",
    "options": [
      "The time taken to reach an IPO.",
      "The amount of time a startup can operate before running out of funds.",
      "The speed of the product development cycle.",
      "The physical length of the production line."
    ],
    "answer": "The amount of time a startup can operate before running out of funds.",
    "explanation": "Runway is a crucial financial metric indicating how long the startup can survive given its current cash and burn rate.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "Which of the following is NOT one of the '3Cs' usually ready before an elevator pitch as per Chapter 4?",
    "options": [
      "Concise",
      "Compelling",
      "Curiosity",
      "Compliant"
    ],
    "answer": "Compliant",
    "explanation": "The text mentions building a strong pitch involves it being Concise, Compelling, and creating Curiosity (3Cs).",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "Making a pitch deck requires 'Content Development' skills. This specifically refers to the ability to:",
    "options": [
      "Use graphic design tools like Photoshop.",
      "Distill complex ideas into clear and compelling messages.",
      "Perform deep forensic auditing of financial records.",
      "Write code for the startup's mobile app."
    ],
    "answer": "Distill complex ideas into clear and compelling messages.",
    "explanation": "Content development is about summarizing the problem, solution, and projections clearly.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "In a standard pitch deck, 'Traction' or 'Proof' is used to:",
    "options": [
      "Explain the technical architecture of the product.",
      "Provide evidence to support claims and demonstrate credibility.",
      "Detail the daily administrative expenses.",
      "List the names of all family members of the founders."
    ],
    "answer": "Provide evidence to support claims and demonstrate credibility.",
    "explanation": "Traction shows milestones and progress, proving to investors that the idea is working.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "Which skill involves structuring a pitch deck to flow logically from problem to solution to traction?",
    "options": [
      "Data Analysis",
      "Storytelling",
      "Visual Design",
      "Content Development"
    ],
    "answer": "Storytelling",
    "explanation": "Storytelling ensures the pitch deck follows a narrative that keeps the audience engaged and informed.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "A business plan's 'Operational Plan' section details which of the following?",
    "options": [
      "The mission and vision of the company.",
      "Revenue forecasts and profit margins.",
      "Day-to-day operations, production processes, and supply chain.",
      "Demographics of the target market."
    ],
    "answer": "Day-to-day operations, production processes, and supply chain.",
    "explanation": "The operational plan focus on the mechanics of how the business functions daily.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "When pitching to 'Investors', which of the following should be a key focus point?",
    "options": [
      "Demographics of every individual employee.",
      "Highlighting market opportunity with compelling data and statistics.",
      "Listing all personal hobbies of the co-founders.",
      "A step-by-step guide on how to assemble the product."
    ],
    "answer": "Highlighting market opportunity with compelling data and statistics.",
    "explanation": "Investors look for market size, growth potential, and attractiveness of the target segment.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "Why is 'Persuasion' considered a useful skill for entrepreneurs in pitching?",
    "options": [
      "It helps in hiding financial losses.",
      "It helps in securing funding, attracting customers, and recruiting talent.",
      "It eliminates the need for a business plan.",
      "It allows for bypassing legal and regulatory compliance."
    ],
    "answer": "It helps in securing funding, attracting customers, and recruiting talent.",
    "explanation": "Persuasion is essential for convincing various stakeholders to support the venture.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "A 'Call to Action' at the end of a pitch should clearly communicate:",
    "options": [
      "The next steps you envision (e.g., seeking investment or partnership).",
      "A history of every business ever started by the founder.",
      "The personal bank account details of the CEO.",
      "The exact date the company expects to be acquired."
    ],
    "answer": "The next steps you envision (e.g., seeking investment or partnership).",
    "explanation": "A pitch must end with what you want from the audience, whether it is a follow-up meeting or capital.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "Which skill is required to analyze market research and financial projections to provide evidence-based support in a pitch?",
    "options": [
      "Communication",
      "Storytelling",
      "Data Analysis",
      "Visual Design"
    ],
    "answer": "Data Analysis",
    "explanation": "Data analysis provides the factual foundation for the claims made in a business case.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "One of the flagship programs of DPIIT, launched in 2016 to nurture startup growth, is:",
    "options": [
      "Make in India",
      "Startup India",
      "Digital India",
      "Smart Cities Mission"
    ],
    "answer": "Startup India",
    "explanation": "Startup India was launched by DPIIT in 2016 to accelerate the startup ecosystem in India.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "Which institution replaced the Planning Commission in 2015 and provides strategic inputs for sustainable development?",
    "options": [
      "SIDBI",
      "DPIIT",
      "NITI Aayog",
      "NRDC"
    ],
    "answer": "NITI Aayog",
    "explanation": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission in 2015.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "The Atal Innovation Mission (AIM) has established innovation labs in schools to nurture the spirit of entrepreneurship from a young age. These are called:",
    "options": [
      "Atal Incubation Centers (AICs)",
      "Atal Tinkering Labs (ATLs)",
      "Atal Community Innovation Centers (ACICs)",
      "Atal Skill Hubs"
    ],
    "answer": "Atal Tinkering Labs (ATLs)",
    "explanation": "ATLs are set up in schools to provide students access to tools for ideating and prototyping.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "Which financial institution in India is primarily focused on promoting, financing, and developing Micro, Small, and Medium Enterprises (MSMEs)?",
    "options": [
      "Reserve Bank of India (RBI)",
      "Small Industries Development Bank of India (SIDBI)",
      "Securities and Exchange Board of India (SEBI)",
      "National Stock Exchange (NSE)"
    ],
    "answer": "Small Industries Development Bank of India (SIDBI)",
    "explanation": "SIDBI (est. 1990) is the principal financial institution for MSMEs in India.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "The 'SIDBI Make in India Soft Loan Fund for MSMEs' (SMILE) provides which type of support to eligible startups?",
    "options": [
      "Equity-only financing.",
      "Collateral-free term loans at concessional interest rates.",
      "Free office space in government IT parks.",
      "Assistance in filing patent applications in foreign countries."
    ],
    "answer": "Collateral-free term loans at concessional interest rates.",
    "explanation": "SMILE scheme provides soft loans for project costs and capital expenditure to MSMEs.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "The National Research Development Corporation (NRDC) is mandated to:",
    "options": [
      "Regulate the Indian stock market.",
      "Promote, develop, and commercialize indigenous technologies from research institutions.",
      "Provide income tax exemptions to individual startups.",
      "Manage the Startup India Hub website."
    ],
    "answer": "Promote, develop, and commercialize indigenous technologies from research institutions.",
    "explanation": "NRDC commercializes technologies originating from labs and universities across India.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "Startups can avail themselves of a reimbursement of up to 80% of patent filing fees under which scheme?",
    "options": [
      "Standup India",
      "SIPP (Scheme for Facilitating Startups Intellectual Property Protection)",
      "Atal Innovation Mission",
      "SIDBI Startup Mitra"
    ],
    "answer": "SIPP (Scheme for Facilitating Startups Intellectual Property Protection)",
    "explanation": "Under SIPP, eligible startups receive a rebate/reimbursement on patent filing fees.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "The Indian Angel Network (IAN) is an example of an 'Angel Network'. These networks support startups by:",
    "options": [
      "Providing large-scale debt financing with high interest.",
      "Pooling resources to provide seed funding, mentorship, and guidance in exchange for equity.",
      "Regulating the intellectual property rights of startups.",
      "Giving grants that do not need to be repaid."
    ],
    "answer": "Pooling resources to provide seed funding, mentorship, and guidance in exchange for equity.",
    "explanation": "Angel networks involve high-net-worth individuals pooling funds and expertise to support early-stage ventures.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "Which online platform connects startups with investors and facilitates fundraising, angel investments, and advisory services?",
    "options": [
      "Kae Capital",
      "LetsVenture",
      "NRDC",
      "NITI Aayog"
    ],
    "answer": "LetsVenture",
    "explanation": "LetsVenture (est. 2013) is a leading online platform for connecting startups with angel investors.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "Startups drive 'Innovation and Technology Adoption'. How does this support the government?",
    "options": [
      "By reducing the overall tax revenue of the country.",
      "By improving productivity and efficiency across various sectors of the economy.",
      "By eliminating the need for any government-led research.",
      "By restricting the use of digital technology to only large cities."
    ],
    "answer": "By improving productivity and efficiency across various sectors of the economy.",
    "explanation": "Startup innovation helps modernize sectors and drives overall economic growth.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "The Startup India Hub is designed to assist entrepreneurs with which of the following?",
    "options": [
      "Manufacturing physical products in government factories.",
      "Business registration, funding opportunities, mentorship, and networking.",
      "Granting final approval for an IPO.",
      "Acting as the sole underwriter for equity deals."
    ],
    "answer": "Business registration, funding opportunities, mentorship, and networking.",
    "explanation": "The Startup India Hub is a centralized platform to support startups through various lifecycle stages.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "Which of the following is NOT an institution or scheme supporting small businesses in India as per Chapter 5?",
    "options": [
      "DPIIT",
      "SIDBI",
      "NRDC",
      "International Monetary Fund (IMF)"
    ],
    "answer": "International Monetary Fund (IMF)",
    "explanation": "While the IMF is a global institution, the chapter focuses on domestic Indian institutions like DPIIT, SIDBI, and NRDC.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "Which institution organizes startup conclaves and advocates for policy reforms to support the ecosystem in India?",
    "options": [
      "FICCI",
      "RBI",
      "NSSO",
      "SEBI"
    ],
    "answer": "FICCI",
    "explanation": "Industry associations like FICCI and ASSOCHAM actively engage in advocacy and networking events for startups.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "Venture Catalysts is known for being:",
    "options": [
      "A government-run bank.",
      "One of India's largest integrated incubators and early-stage investment networks.",
      "The primary regulator of patent filing in India.",
      "A global NGO focused on poverty alleviation."
    ],
    "answer": "One of India's largest integrated incubators and early-stage investment networks.",
    "explanation": "Venture Catalysts (est. 2015) focuses on investing in disruptive startups with scalable models.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "The Indian Patent Office (IPO) provides a 'Fast-Track' examination process specifically for which group?",
    "options": [
      "Large multinational corporations.",
      "Foreign universities.",
      "Startups recognized by DPIIT.",
      "Individual inventors with no business entity."
    ],
    "answer": "Startups recognized by DPIIT.",
    "explanation": "The IPO offers fast-track patent processing to startups to help them obtain protection more quickly.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "How does Equity Financing differ from Debt Financing regarding repayment?",
    "options": [
      "Equity must be repaid within 12 months.",
      "There is no component of repayment of the invested funds in equity.",
      "Debt financing gives the lender ownership in the company.",
      "Equity requires fixed monthly interest payments."
    ],
    "answer": "There is no component of repayment of the invested funds in equity.",
    "explanation": "Unlike debt which is a loan, equity represents ownership and doesn't require repayment with interest.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "At the 'Pre-Seed Stage' of funding, a startup typically has:",
    "options": [
      "A proven track record of consistent revenue growth.",
      "Just an idea or concept, requiring funds for market research or a prototype.",
      "A product ready for an Initial Public Offering (IPO).",
      "A large-scale manufacturing unit in operation."
    ],
    "answer": "Just an idea or concept, requiring funds for market research or a prototype.",
    "explanation": "Pre-seed is the earliest stage, where funds help lay the groundwork and build the initial prototype.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Which funding stage focuses on scaling operations, expanding the customer base, and typically involves Venture Capital firms as primary investors?",
    "options": [
      "Seed Stage",
      "Series A Stage",
      "Bootstrapping Stage",
      "Bridge Stage"
    ],
    "answer": "Series A Stage",
    "explanation": "Series A rounds focus on scaling and customer expansion after the initial seed validation.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "A 'Term Sheet' is described in Chapter 6 as a document that is:",
    "options": [
      "Legally binding from the moment of verbal agreement.",
      "A 'non-binding' list of propositions summarizing major deal points.",
      "Only required for government grants.",
      "Used to hire junior-level employees."
    ],
    "answer": "A 'non-binding' list of propositions summarizing major deal points.",
    "explanation": "A term sheet is a roadmap for negotiations and summarizes key engagement points before a definitive agreement.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "In startup valuation, what does 'Exit Opportunity' refer to?",
    "options": [
      "The ability of an employee to quit the company with notice.",
      "The point at which investors realize their returns through an IPO or acquisition.",
      "A backup plan if the product fails to work.",
      "The physical emergency exits in the production facility."
    ],
    "answer": "The point at which investors realize their returns through an IPO or acquisition.",
    "explanation": "Exit strategies like IPOs or mergers allow investors to cash out their equity stake for profit.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Which financial modeling basic involve predicting future income streams based on sales projections and pricing strategies?",
    "options": [
      "Expense Modeling",
      "Cash Flow Projection",
      "Revenue Forecasting",
      "Valuation Modeling"
    ],
    "answer": "Revenue Forecasting",
    "explanation": "Revenue forecasting predicts future income based on market and sales data.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Business Intelligence (BI) tools like Tableau or Power BI enable startups to:",
    "options": [
      "Write legal shareholder agreements.",
      "Visualize and analyze their financial and consumer data in real-time.",
      "File patent applications automatically.",
      "Replace the need for a CFO."
    ],
    "answer": "Visualize and analyze their financial and consumer data in real-time.",
    "explanation": "BI tools help in reporting and visualizing data to make informed business decisions.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "What is the primary risk for a startup in 'Debt Financing'?",
    "options": [
      "Giving up a portion of ownership to shareholders.",
      "The need to provide a business asset as collateral and adhere to a repayment timeline.",
      "Losing control over intellectual property immediately.",
      "There is no risk because debt doesn't need to be repaid if the company fails."
    ],
    "answer": "The need to provide a business asset as collateral and adhere to a repayment timeline.",
    "explanation": "Debt involves borrowing capital that must be repaid with interest, often requiring collateral.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "During the 'Seed Series' stage, startups typically have a prototype or MVP. Funding at this stage is primarily used to:",
    "options": [
      "Conduct initial market research on a blank idea.",
      "Validate the business idea and refine the product based on feedback.",
      "Prepare for a massive IPO listing on the NSE.",
      "Acquire major competitor companies."
    ],
    "answer": "Validate the business idea and refine the product based on feedback.",
    "explanation": "Seed funding helps refine the product and prove the business concept's viability.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "A 'Down-round' financing occurs when a startup raises capital at a valuation that is:",
    "options": [
      "Higher than its previous valuation.",
      "Exactly the same as its previous valuation.",
      "Lower than its previous valuation.",
      "Undetermined until the end of the fiscal year."
    ],
    "answer": "Lower than its previous valuation.",
    "explanation": "A down-round happens when the current valuation is less than the valuation during the previous funding round.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Which term describes the gradual granting of ownership to co-founders over a period to encourage long-term commitment?",
    "options": [
      "Equity Dilution",
      "Equity Vesting",
      "Secondary Sale",
      "Buyback"
    ],
    "answer": "Equity Vesting",
    "explanation": "Vesting ensures co-founders earn their equity over time, mitigating risks of early departures.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Startups should evaluate best-case, worst-case, and base-case scenarios to identify risks. This is known as:",
    "options": [
      "Revenue Forecasting",
      "Scenario Analysis",
      "Profitability Analysis",
      "Forecasting and Modeling"
    ],
    "answer": "Scenario Analysis",
    "explanation": "Scenario analysis helps in developing contingency plans by looking at various potential outcomes.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Which exit strategy involves the existing management team acquiring a controlling stake from current owners?",
    "options": [
      "Merger",
      "Initial Public Offering (IPO)",
      "Management Buyout (MBO)",
      "Secondary Sale"
    ],
    "answer": "Management Buyout (MBO)",
    "explanation": "In an MBO, management takes over ownership from venture capitalists or angel investors.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "In a term sheet, 'Liquidation Preferences' specify:",
    "options": [
      "The color of the product packaging.",
      "The order in which proceeds are distributed among shareholders during an acquisition or IPO.",
      "The daily working hours of the co-founders.",
      "The exact location of the startup's head office."
    ],
    "answer": "The order in which proceeds are distributed among shareholders during an acquisition or IPO.",
    "explanation": "Liquidation preferences ensure certain investors get paid before others during a liquidity event.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Which financial tool category helps startups track system performance and proactive response to challenges?",
    "options": [
      "Accounting Software",
      "Financial Dashboards",
      "Expense Management Software",
      "Venture Debt Funds"
    ],
    "answer": "Financial Dashboards",
    "explanation": "Dashboards provide a visual overview of key metrics for monitoring and quick decision-making.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "A 'Private Limited Company' in India requires a minimum of:",
    "options": [
      "1 Director and 1 Shareholder",
      "2 Directors and 2 Shareholders",
      "7 Directors and 7 Shareholders",
      "50 Directors and 50 Shareholders"
    ],
    "answer": "2 Directors and 2 Shareholders",
    "explanation": "A Private Limited Company is a separate legal entity requiring at least two directors and two shareholders.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "Which entity type, introduced in 2013, allows a single entrepreneur to operate a company with limited liability?",
    "options": [
      "Sole Proprietorship",
      "General Partnership",
      "One Person Company (OPC)",
      "Limited Liability Partnership (LLP)"
    ],
    "answer": "One Person Company (OPC)",
    "explanation": "An OPC combines the simplicity of a proprietorship with the limited liability of a company.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "A 'Patent' in India provides legal protection for inventions, preventing others from making or selling it for a limited period, usually:",
    "options": [
      "10 years from the filing date",
      "20 years from the filing date",
      "Lifetime of the inventor",
      "50 years from the date of grant"
    ],
    "answer": "20 years from the filing date",
    "explanation": "Patents generally provide protection for 20 years, provided they are maintained.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "A 'Trademark' is designed to protect which of the following?",
    "options": [
      "Literary and artistic works.",
      "Original inventions with industrial applicability.",
      "Brand names, logos, slogans, and symbols.",
      "The internal business model and revenue streams."
    ],
    "answer": "Brand names, logos, slogans, and symbols.",
    "explanation": "Trademarks distinguish products/services and protect brand identity from confusion.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "Which intellectual property right typically protects original works such as literary, artistic, or musical creations for the creator's lifetime plus 70 years?",
    "options": [
      "Patent",
      "Trademark",
      "Copyright",
      "Industrial Design"
    ],
    "answer": "Copyright",
    "explanation": "Copyright grants exclusive rights to reproduce and distribute creative works.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "Under the 'Sole Proprietorship' structure in India, the owner has:",
    "options": [
      "Limited liability restricted to the amount invested.",
      "Unlimited personal liability for all business debts.",
      "No liability because the business is a separate legal entity.",
      "Shared liability with at least two other partners."
    ],
    "answer": "Unlimited personal liability for all business debts.",
    "explanation": "In a proprietorship, there is no legal distinction between the owner and the business.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "What is the primary benefit of 'ESOPs' (Employee Stock Option Plans) for a startup founder?",
    "options": [
      "To avoid paying salaries to any employees.",
      "To attract, retain, and motivate top talent through equity incentives.",
      "To prevent employees from ever leaving the company.",
      "To bypass the need for a Board of Directors."
    ],
    "answer": "To attract, retain, and motivate top talent through equity incentives.",
    "explanation": "ESOPs allow employees to purchase shares, fostering a sense of ownership and commitment.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "A 'Co-founder Agreement' is critical for a startup because it:",
    "options": [
      "Is a mandatory legal requirement for DPIIT registration.",
      "Serves as a blueprint for the partnership, clarifying roles and mitigating conflicts.",
      "Automatically grants a patent to the co-founders.",
      "Ensures that the startup will never fail."
    ],
    "answer": "Serves as a blueprint for the partnership, clarifying roles and mitigating conflicts.",
    "explanation": "The agreement outlines terms, responsibilities, and expectations between founders.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "The first step in getting a technology patented in India should ideally be:",
    "options": [
      "Filing the final application immediately.",
      "Conducting a patent search to verify uniqueness.",
      "Paying the maintenance fees for the next 10 years.",
      "Publishing the invention on social media to prove authorship."
    ],
    "answer": "Conducting a patent search to verify uniqueness.",
    "explanation": "A search verifies that the invention is unique and not already patented by others.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "In a startup equity split, what is the 'Slicing Pie' model?",
    "options": [
      "A method of splitting revenue equally among all employees.",
      "A dynamic model that adjusts equity based on individual contributions over time.",
      "A legal contract used only for acquisitions.",
      "A fixed percentage split decided on day one that never changes."
    ],
    "answer": "A dynamic model that adjusts equity based on individual contributions over time.",
    "explanation": "It helps in reaching a fair distribution based on actual effort and resources provided.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "Which entity type is characterized by having 'pass-through' taxation in India, similar to a partnership, but offering limited liability?",
    "options": [
      "Private Limited Company",
      "Limited Liability Partnership (LLP)",
      "Sole Proprietorship",
      "Public Limited Company"
    ],
    "answer": "Limited Liability Partnership (LLP)",
    "explanation": "LLPs provide limited liability while being treated similarly to partnerships for tax purposes.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "What is the purpose of 'Equity Dilution' management strategies like 'Participation Rights'?",
    "options": [
      "To prevent founders from ever selling their shares.",
      "To minimize the dilutive effect on existing shareholders during future funding rounds.",
      "To increase the number of shares without changing the valuation.",
      "To automatically convert all debt into equity after one year."
    ],
    "answer": "To minimize the dilutive effect on existing shareholders during future funding rounds.",
    "explanation": "Participation rights allow existing shareholders to maintain their ownership percentage.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "Which registration allows a startup to be eligible for government tenders and faster processing of certain formalities?",
    "options": [
      "FSSAI Registration",
      "Professional Tax Registration",
      "Startup India Recognition",
      "ESI and EPF Registration"
    ],
    "answer": "Startup India Recognition",
    "explanation": "Recognition by DPIIT under Startup India opens doors to various government benefits and tenders.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "A 'Non-Compete' clause in a co-founder agreement prevents a founder from:",
    "options": [
      "Raising funds from more than one investor.",
      "Engaging in competing activities that may harm the startup.",
      "Hiring any employees who are not family members.",
      "Opening a bank account in a different city."
    ],
    "answer": "Engaging in competing activities that may harm the startup.",
    "explanation": "Non-compete and non-solicit clauses protect the interests of the business and its investors.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "What is 'DIN' in the context of company registration in India?",
    "options": [
      "Director's Income Notice",
      "Director Identification Number",
      "Digital Identification Node",
      "Daily Investment Network"
    ],
    "answer": "Director Identification Number",
    "explanation": "DIN is mandatory for anyone who intends to be a director of a company in India.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "What is the primary difference between a startup 'Incubator' and an 'Accelerator'?",
    "options": [
      "Incubators provide funding, while accelerators only provide office space.",
      "Incubators are long-term and support early stages; Accelerators are short-term, intensive, and focus on growth.",
      "Accelerators are run by the government, while incubators are always private.",
      "Incubators require equity, while accelerators never take equity."
    ],
    "answer": "Incubators are long-term and support early stages; Accelerators are short-term, intensive, and focus on growth.",
    "explanation": "Accelerators are cohort-based and focus on rapid scaling, whereas incubators offer flexible, long-term support.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "An incubator that prioritizes ventures aiming to create positive social or environmental change while also generating profit is an:",
    "options": [
      "Industry-Specific Incubator",
      "Impact Incubator",
      "Virtual Incubator",
      "Corporate Incubator"
    ],
    "answer": "Impact Incubator",
    "explanation": "Impact incubators focus on ventures with a social or environmental mission.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "What is the typical duration for an 'Accelerator' program?",
    "options": [
      "Several years",
      "A few months (Short-term)",
      "Indefinite, until the company goes public",
      "Exactly one week"
    ],
    "answer": "A few months (Short-term)",
    "explanation": "Accelerators are designed for rapid progress over a fixed, short period.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "In the comparison between incubators and accelerators, which one 'often provides seed funding in exchange for equity'?",
    "options": [
      "Incubators",
      "Accelerators",
      "Both equally",
      "Neither"
    ],
    "answer": "Accelerators",
    "explanation": "Accelerators often provide investment as part of their program, whereas many incubators focus only on infrastructure and support.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "Which type of incubator allows startups to access support and resources without the need for a physical presence?",
    "options": [
      "University Affiliated Incubator",
      "Virtual Incubator",
      "Corporate Incubator",
      "Industry-Specific Incubator"
    ],
    "answer": "Virtual Incubator",
    "explanation": "Virtual incubation offers flexibility and accessibility remotely.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "Founders participate in accelerator programs to gain expertise in which of the following areas?",
    "options": [
      "Only the technical coding of the product.",
      "Business strategy, sales, marketing, and leadership.",
      "How to avoid all forms of taxation.",
      "The history of every previous startup failure."
    ],
    "answer": "Business strategy, sales, marketing, and leadership.",
    "explanation": "Accelerators provide intensive education and mentorship across all critical business functions.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "A key outcome of a reputable incubator is providing 'Validation and Credibility'. This means:",
    "options": [
      "The startup is guaranteed to receive 100 crores in funding.",
      "The startup's legitimacy is enhanced in the eyes of investors and partners.",
      "The startup no longer needs to file any legal documents.",
      "The government automatically grants a patent to the startup."
    ],
    "answer": "The startup's legitimacy is enhanced in the eyes of investors and partners.",
    "explanation": "Being part of a known incubator serves as a 'seal of approval' for the venture.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "During an accelerator program, what is 'Demo Day'?",
    "options": [
      "The day the founders first meet each other.",
      "The final day where startups pitch their progress to a room of potential investors.",
      "A day dedicated to deleting old code from the system.",
      "A day where startups demonstrate their product to their competitors."
    ],
    "answer": "The final day where startups pitch their progress to a room of potential investors.",
    "explanation": "Demo Day marks the culmination of the program where growth and traction are showcased to the investment community.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "Which incubator type is established by large companies to foster innovation and explore new business opportunities related to their interests?",
    "options": [
      "University Incubator",
      "General Business Incubator",
      "Corporate Incubator",
      "Impact Incubator"
    ],
    "answer": "Corporate Incubator",
    "explanation": "Corporate incubators help large firms collaborate with and invest in startups aligned with their goals.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "Accelerator programs are 'Cohort-based'. What does this mean?",
    "options": [
      "Startups are accepted and progress through the program in groups at the same time.",
      "Each startup must have at least 5 co-founders.",
      "The program is only open to startups in the agricultural sector.",
      "All funding must be provided in the form of debt."
    ],
    "answer": "Startups are accepted and progress through the program in groups at the same time.",
    "explanation": "Startups start and finish the fixed-term program together as a group or 'batch'.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "What should a founder ideally take along to an accelerator to ensure productivity?",
    "options": [
      "Only a physical business plan printed on paper.",
      "A laptop, work tools, networking materials, and a resilient attitude.",
      "A complete list of every competitor's bank balance.",
      "A signed contract from a venture capital firm guaranteeing funding."
    ],
    "answer": "A laptop, work tools, networking materials, and a resilient attitude.",
    "explanation": "Practical tools and the right mindset are essential for the intensive accelerator journey.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "Which of the following is a criterion for selecting the best accelerator for a startup?",
    "options": [
      "The incubator must be located in a different country.",
      "Alignment of the incubator's mission and focus with the startup's vision.",
      "The incubator must provide a 100% guarantee of success.",
      "The program must last at least 10 years."
    ],
    "answer": "Alignment of the incubator's mission and focus with the startup's vision.",
    "explanation": "Founders should choose programs that resonate with their specific industry and growth needs.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "One of the learning areas in accelerators is 'Pitching and Communication'. Why is this emphasized?",
    "options": [
      "To help entrepreneurs hide technical flaws in their products.",
      "To help founders effectively communicate their ideas and value to stakeholders.",
      "To ensure founders can talk for at least 5 hours without stopping.",
      "To replace the need for any financial data in the pitch deck."
    ],
    "answer": "To help founders effectively communicate their ideas and value to stakeholders.",
    "explanation": "Clear communication is vital for attracting funding, partners, and customers.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "Incubators provide 'Mentorship and Guidance'. This usually comes from:",
    "options": [
      "Only the other co-founders in the same cohort.",
      "Experienced entrepreneurs, industry experts, and advisors.",
      "Government officials who have never run a business.",
      "Competitors who want to see the startup fail."
    ],
    "answer": "Experienced entrepreneurs, industry experts, and advisors.",
    "explanation": "Mentors provide the necessary wisdom and connections to navigate early-stage challenges.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "An accelerator program's intensity is described as:",
    "options": [
      "Less structured and flexible.",
      "Structured and intensive with focused support and milestones.",
      "Totally unstructured with no milestones.",
      "Intensive only on the first and last day."
    ],
    "answer": "Structured and intensive with focused support and milestones.",
    "explanation": "Accelerators push startups to achieve months of growth in a very short time through a rigorous schedule.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "Using personal savings or funds from friends and family to finance initial operations is called:",
    "options": [
      "Venture Capital",
      "Angel Investing",
      "Bootstrapping",
      "Crowdfunding"
    ],
    "answer": "Bootstrapping",
    "explanation": "Bootstrapping relies on internal resources rather than external institutional funding.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "High-net-worth individuals who provide capital in exchange for equity and often offer mentorship are:",
    "options": [
      "Venture Capitalists",
      "Angel Investors",
      "Bank Managers",
      "Underwriters"
    ],
    "answer": "Angel Investors",
    "explanation": "Angel investors are usually successful entrepreneurs themselves who support early-stage startups.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "What is the primary role of Public Relations (PR) in 'Founder's Grooming'?",
    "options": [
      "To write the source code for the mobile app.",
      "To help founders build a personal brand and establish credibility.",
      "To manage the daily logistics of product manufacturing.",
      "To audit the startup's annual tax returns."
    ],
    "answer": "To help founders build a personal brand and establish credibility.",
    "explanation": "PR helps shape the narrative around the founder and the startup to attract attention and trust.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "A startup community building provides which benefit to an individual entrepreneur?",
    "options": [
      "A guaranteed monthly salary from the community leader.",
      "A support system with emotional support and guidance from peers.",
      "Exemption from all industry-specific regulations.",
      "Automatic patent grant for any idea shared in the community."
    ],
    "answer": "A support system with emotional support and guidance from peers.",
    "explanation": "Communities boost morale and resilience by connecting like-minded entrepreneurs.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "Which 'Exit Strategy' involves a larger company purchasing a startup for cash or stock?",
    "options": [
      "Liquidation",
      "Acquisition",
      "Management Buyout (MBO)",
      "Bootstrapping"
    ],
    "answer": "Acquisition",
    "explanation": "An acquisition is a common exit where a bigger firm buys out the startup.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "In the IPO process, investment banks that manage the offering and assist in preparing documents are known as:",
    "options": [
      "Angel Investors",
      "Underwriters",
      "Incubators",
      "Venture Capitalists"
    ],
    "answer": "Underwriters",
    "explanation": "Underwriters manage the IPO process and help market the offering to investors.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "When building a team, 'Hiring for Culture Fit' means looking for candidates who:",
    "options": [
      "Have the most expensive university degrees.",
      "Resonate with the company's values, work ethic, and vision.",
      "Work for the lowest possible salary.",
      "Live in the same neighborhood as the founder."
    ],
    "answer": "Resonate with the company's values, work ethic, and vision.",
    "explanation": "Cultural fit ensures that new hires align with the dynamic and innovative environment of a startup.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "An 'MBO' stands for:",
    "options": [
      "Market Business Opportunity",
      "Management Buyout",
      "Micro Business Organization",
      "Managed Branding Office"
    ],
    "answer": "Management Buyout",
    "explanation": "MBO involves the existing management team buying out the company from current owners.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "Before joining a startup community, a founder should ideally prepare a concise summary of who they are and what they do. This is an:",
    "options": [
      "Investor Pitch",
      "Elevator Pitch",
      "Sales Pitch",
      "Financial Report"
    ],
    "answer": "Elevator Pitch",
    "explanation": "Founders use elevator pitches to network effectively within communities.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "Which funding source involves raising small amounts of money from a large number of individuals through online platforms?",
    "options": [
      "Venture Capital",
      "Crowdfunding",
      "Bank Loans",
      "Grants"
    ],
    "answer": "Crowdfunding",
    "explanation": "Crowdfunding (e.g., rewards-based, equity-based) aggregates funds from many people.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "The process of 'Founder's Grooming' involves honing which of the following?",
    "options": [
      "Only financial literacy.",
      "Vision, leadership, public image, and interaction skills.",
      "How to avoid meeting any investors.",
      "Manual labor skills for product assembly."
    ],
    "answer": "Vision, leadership, public image, and interaction skills.",
    "explanation": "Grooming prepares founders to be the face and leader of the organization.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "A 'Secondary Sale' involves selling shares of a startup to:",
    "options": [
      "The general public through a stock exchange.",
      "Another private investor or investment firm.",
      "The government for a grant.",
      "Customers in exchange for product discounts."
    ],
    "answer": "Another private investor or investment firm.",
    "explanation": "This allows existing shareholders to cash out without an IPO or acquisition.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "Startup communities foster a culture of 'Knowledge Sharing', which enables members to:",
    "options": [
      "Steal intellectual property from each other.",
      "Gain insights and best practices from experienced peers.",
      "Avoid paying any corporate taxes.",
      "Increase their personal debt."
    ],
    "answer": "Gain insights and best practices from experienced peers.",
    "explanation": "Sharing experience accelerates professional and personal development for all members.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "What does a 'Liquidation' exit strategy typically imply?",
    "options": [
      "Merging with a global competitor to scale up.",
      "Selling all assets and shutting down operations.",
      "Raising the largest round of venture capital ever.",
      "Going public on the stock exchange."
    ],
    "answer": "Selling all assets and shutting down operations.",
    "explanation": "Liquidation is the process of closing a business and distributing assets to creditors and owners.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "Which document assists in preparing for an IPO by providing info on business, financials, and intended use of proceeds?",
    "options": [
      "Term Sheet",
      "Prospectus",
      "Co-founder Agreement",
      "Pitch Deck"
    ],
    "answer": "Prospectus",
    "explanation": "The prospectus is a legal document filed with SEBI providing all relevant info to potential investors.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "Case Study: Startup 'Alpha' has been operating for 4 years with a turnover of 120 Crores in the current year. Is it still eligible for NEW DPIIT registration?",
    "options": [
      "Yes, because it is under 10 years old.",
      "No, because its turnover has exceeded 100 Crores.",
      "Yes, because it is an innovative tech startup.",
      "No, because it has been in existence for more than 3 years."
    ],
    "answer": "No, because its turnover has exceeded 100 Crores.",
    "explanation": "DPIIT eligibility requires that the annual turnover must NOT have exceeded INR 100 crores in ANY financial year since incorporation.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "Tricky Question: A founder holds 100% equity on Day 1. The startup enters into an agreement with a 4-year vesting schedule and a 1-year 'cliff'. If the founder leaves after 11 months, how much equity do they keep?",
    "options": [
      "0%",
      "25%",
      "22.9% (11/48 months)",
      "100%"
    ],
    "answer": "0%",
    "explanation": "A 'cliff' period means that if the individual leaves before that period (usually 1 year), no equity vests. Since 11 months is less than the 1-year cliff, they keep nothing.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "Case Study: 'Beta Foods' uses an e-commerce platform where only they sell their products directly. 'Gamma Delivery' uses a platform where hundreds of local grocery stores sell to users. What models are Beta and Gamma using respectively?",
    "options": [
      "Beta: Marketplace; Gamma: E-commerce",
      "Beta: D2C; Gamma: Marketplace",
      "Beta: B2B; Gamma: C2C",
      "Beta: Subscription; Gamma: Freemium"
    ],
    "answer": "Beta: D2C; Gamma: Marketplace",
    "explanation": "D2C (Beta) involves a single brand selling directly. Marketplace (Gamma/Aggregator) connects multiple sellers to buyers.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "Advanced Analysis: Why might a startup choose 'Equity Financing' over 'Debt Financing' despite having to give up ownership?",
    "options": [
      "Debt financing requires 100% control by the lender.",
      "Equity financing does not require repayment and brings investor expertise/mentorship.",
      "Equity financing is always cheaper than bank interest in the long run.",
      "Debt financing is only available for government-recognized startups."
    ],
    "answer": "Equity financing does not require repayment and brings investor expertise/mentorship.",
    "explanation": "Equity is 'risk-sharing' capital; there is no repayment pressure, which is critical for early-stage ventures with low cash flow.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Case Study: An entrepreneur is building a complex AI software. They decide to release a version with just the core search algorithm to a small group of users to gather data. This is an example of applying:",
    "options": [
      "Waterfall methodology",
      "The Lean Startup 'Build' phase for an MVP",
      "A Go-to-Market (GTM) Strategy",
      "Succession Planning"
    ],
    "answer": "The Lean Startup 'Build' phase for an MVP",
    "explanation": "Releasing a scaled-down version (MVP) to gather feedback is the core of Lean Startup's Build-Measure-Learn loop.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "ICAI Tricky Style: In the BMC, if a startup changes its 'Customer Segments', which other blocks are most likely to require immediate modification?",
    "options": [
      "Only the Cost Structure.",
      "Value Propositions and Channels.",
      "Only the Key Partnerships.",
      "No other blocks need to change."
    ],
    "answer": "Value Propositions and Channels.",
    "explanation": "Different customers require different value offerings and different ways to be reached.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "Case Study: Startup 'Z' is losing 10% of its customers every month but spending 5 Lakhs more than it earns monthly. What are the key metrics described here?",
    "options": [
      "Burn Rate: 5 Lakhs; Churn Rate: 10%",
      "Burn Rate: 10%; Churn Rate: 5 Lakhs",
      "LTV: 10%; CAC: 5 Lakhs",
      "Runway: 5 months; Retention: 10%"
    ],
    "answer": "Burn Rate: 5 Lakhs; Churn Rate: 10%",
    "explanation": "Burn rate is the excess spending rate (5L), and Churn rate is the customer loss percentage (10%).",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "Advanced Application: Which industrial revolution innovation most directly enabled the mass production of Model T cars?",
    "options": [
      "Steam engines from the first revolution.",
      "Electricity and mass production from the second revolution.",
      "Computers and electronics from the third revolution.",
      "AI and IoT from the fourth revolution."
    ],
    "answer": "Electricity and mass production from the second revolution.",
    "explanation": "The second industrial revolution (1870-1914) was defined by electricity and the advent of mass production of goods like automobiles.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "Analysis Question: If a startup has a high 'Burn Rate' but a low 'Runway', what is the most logical immediate action for the founders?",
    "options": [
      "Hire more senior management immediately.",
      "Raise more funds or drastically reduce expenses.",
      "Apply for a patent which takes 20 years to grant.",
      "Decrease the price of the product to increase churn."
    ],
    "answer": "Raise more funds or drastically reduce expenses.",
    "explanation": "Low runway means the startup is close to running out of cash; they must either increase cash (fundraise) or decrease burn.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "Tricky Question: A founder claims their startup is 'DPIIT recognized' and therefore exempt from all taxes for 10 years. Is this statement accurate?",
    "options": [
      "Yes, all recognition comes with total tax exemption for 10 years.",
      "No, exemptions are for 3 consecutive years within the first 10 years.",
      "No, exemption is only for the first year of incorporation.",
      "Yes, but only if they operate in the agricultural sector."
    ],
    "answer": "No, exemptions are for 3 consecutive years within the first 10 years.",
    "explanation": "Tax benefits are restricted to three consecutive assessment years out of the first ten years.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "Case-based: A startup wants to enter the 'Subscription' market. They need a tool to visualize their recurring revenue and user churn. Which tool group should they use?",
    "options": [
      "Accounting Software like Tally",
      "Business Intelligence (BI) Tools like Tableau",
      "Manufacturing Execution Systems (MES)",
      "Patent Facilitation Cells (PFC)"
    ],
    "answer": "Business Intelligence (BI) Tools like Tableau",
    "explanation": "BI tools enable startups to visualize and analyze financial/consumer data like revenue and churn in real-time.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "ICAI Tricky: Which of the following 'Term Sheet' provisions is typically NOT considered a management/governance structure provision?",
    "options": [
      "Board Representation",
      "Information Rights",
      "Valuation Cap",
      "Dispute Resolution"
    ],
    "answer": "Valuation Cap",
    "explanation": "Valuation cap is a structural provision related to 'Valuation', not 'Management Structure'.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Case Study: An entrepreneur is rejected by a VC firm because their startup is 'too early' as it only has a concept. Which funding stage and source should they target instead?",
    "options": [
      "Series B; Private Equity",
      "Pre-Seed; Bootstrapping or Friends & Family",
      "Exit Stage; IPO",
      "Seed Stage; Bank Loans"
    ],
    "answer": "Pre-Seed; Bootstrapping or Friends & Family",
    "explanation": "Pre-seed is for the idea/concept stage where self-financing or social networks are the common sources.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Advanced Analysis: Why is 'Procurement' significant for a startup aiming for 'Affordable Innovation'?",
    "options": [
      "It helps in designing the visual design of the pitch deck.",
      "It manages production costs and secures quality materials to maintain a competitive price.",
      "It ensures that the founder's personal brand is authorities.",
      "It helps in selecting the correct legal entity like an OPC."
    ],
    "answer": "It manages production costs and secures quality materials to maintain a competitive price.",
    "explanation": "Efficient procurement directly impacts the 'affordability' element of the product offering.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "ICAI Tricky Style: A startup is formed with 3 directors and 250 shareholders. Which entity type is this entity definitely NOT?",
    "options": [
      "Public Limited Company",
      "Private Limited Company",
      "Registered Partnership",
      "Limited Liability Partnership"
    ],
    "answer": "Private Limited Company",
    "explanation": "A Private Limited Company is restricted to a maximum of 200 shareholders.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "Case Study: 'Eco-Wash' is a startup with a mission to clean oceans. It has developed a unique filter. It joins a program for 6 months where it receives 50 Lakhs in funding and intense mentorship. This program is an:",
    "options": [
      "Incubator",
      "Accelerator",
      "University Lab",
      "Trade Fair"
    ],
    "answer": "Accelerator",
    "explanation": "The fixed-term (6 months), investment (50L), and intensity identify it as an accelerator.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "Analysis Question: Why does 'Substance' communicate transparently about risks, while 'Hype' downplays them?",
    "options": [
      "Hype is a better marketing strategy for long-term growth.",
      "Substance builds long-term trust and credibility with investors by showing execution ability.",
      "Substance is only required for government recognized startups.",
      "Hype is the primary goal of PR agencies."
    ],
    "answer": "Substance builds long-term trust and credibility with investors by showing execution ability.",
    "explanation": "Substance is characterized by transparent communication and a track record of being able to handle challenges.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "Case-based: 'Fin-Tech Alpha' wants to protect its unique software name and the company logo. Which IP should it register for?",
    "options": [
      "Patent",
      "Trademark",
      "Copyright",
      "Industrial Design"
    ],
    "answer": "Trademark",
    "explanation": "Trademarks protect brand names and logos to prevent consumer confusion.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "ICAI Tricky: In a co-founder agreement, 'Succession Planning' covers which scenario?",
    "options": [
      "The order in which customers are served.",
      "The orderly departure, retirement, or change in circumstances of a co-founder.",
      "The way raw materials are sourced from suppliers.",
      "The sequence of software updates in the product roadmap."
    ],
    "answer": "The orderly departure, retirement, or change in circumstances of a co-founder.",
    "explanation": "Succession planning ensures the partnership continues smoothly if a key founder leaves.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "Advanced Logic: Why is the 'Build-Measure-Learn' loop considered 'Lean'?",
    "options": [
      "Because it costs zero money to implement.",
      "Because it avoids wasting time and money on features users don't want through validated learning.",
      "Because it only requires one employee (the founder) to work.",
      "Because it is only used by startups with zero funding."
    ],
    "answer": "Because it avoids wasting time and money on features users don't want through validated learning.",
    "explanation": "Lean Startup methodology is based on resource efficiency and efficiency through learning.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "Case Study: A startup holds a 'Demo Day' to showcase its 10x user growth over the last 3 months. This is proof of which stage of funding goal?",
    "options": [
      "Idea validation stage",
      "Seed Stage",
      "Traction and scaling for Series A",
      "Liquidation stage"
    ],
    "answer": "Traction and scaling for Series A",
    "explanation": "High user growth/traction is the primary signal investors look for before a Series A round.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "ICAI Tricky: SIDBI's Startup Mitra portal is an example of which type of support?",
    "options": [
      "Direct financial grant with no return.",
      "Online platform for collaboration between startups, investors, and incubators.",
      "Physical factory space for manufacturing.",
      "Regulatory office for granting trademarks."
    ],
    "answer": "Online platform for collaboration between startups, investors, and incubators.",
    "explanation": "SIDBI Startup Mitra is an online platform to facilitate the startup ecosystem.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "Case-based: 'Tech-Pro' has developed a revolutionary new battery technology. They want to prevent others from copying it. Which institution is most relevant for them?",
    "options": [
      "NITI Aayog",
      "Indian Patent Office (IPO)",
      "FICCI",
      "ASSOCHAM"
    ],
    "answer": "Indian Patent Office (IPO)",
    "explanation": "The IPO is responsible for granting patents which protect inventions for 20 years.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "Analysis Question: How does a 'Management Buyout' (MBO) provide an exit for Venture Capitalists?",
    "options": [
      "The VC firm buys the shares of the employees.",
      "The existing management team buys the shares from the VC firm.",
      "The startup is shut down and assets are sold to the VC.",
      "The VC firm lists the company on the stock exchange."
    ],
    "answer": "The existing management team buys the shares from the VC firm.",
    "explanation": "MBO allows current management to take control by purchasing the stake from the investors.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "Tricky ICAI Style: Which of the following is NOT a central level institution supporting startups as per the source text?",
    "options": [
      "DPIIT",
      "NITI Aayog",
      "State Government Incubation Fund",
      "NRDC"
    ],
    "answer": "State Government Incubation Fund",
    "explanation": "Chapter 5 categorizes DPIIT, NITI Aayog, and NRDC as 'Central Level Institutions'.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "Case Study: An entrepreneur is creating a product and chooses to 'Hire for Culture Fit' over 'Technical Skill'. What is the risk involved here?",
    "options": [
      "The team may not have the technical competence to build the product correctly.",
      "The team will have too much diversity and innovation.",
      "The startup will automatically be disqualified from DPIIT recognition.",
      "The founder will lose all their equity to the new hires."
    ],
    "answer": "The team may not have the technical competence to build the product correctly.",
    "explanation": "While cultural fit is vital for startups, technical ability is still a fundamental requirement for building a functioning product.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "Analysis: Why is 'Financial Literacy' listed as a top skill for entrepreneurs in Chapter 1?",
    "options": [
      "To help them become chartered accountants themselves.",
      "To understand and manage the financial aspects (budgets, analysis) of their business.",
      "To avoid having to hire any professional financial advisors.",
      "To ensure they can personally audit every single company transaction."
    ],
    "answer": "To understand and manage the financial aspects (budgets, analysis) of their business.",
    "explanation": "Managing finances is crucial for planning, making informed decisions, and sustainability.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "ICAI Tricky: In 'Revenue Forecasting', if sales projections are over-optimistic, the most direct negative impact on a startup is:",
    "options": [
      "Immediate increase in churn rate.",
      "Budgetary issues and an unsustainable cost structure.",
      "Automatic loss of intellectual property rights.",
      "The founders being removed by the government."
    ],
    "answer": "Budgetary issues and an unsustainable cost structure.",
    "explanation": "Over-optimistic revenue leads to over-spending (burn), which shortens the startup's runway dangerously.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Case Study: A startup is based in a rural area and is working with local artisans to digitize their sales. Which NITI Aayog program is most likely to support them?",
    "options": [
      "Atal Tinkering Labs (ATLs)",
      "Atal Community Innovation Centers (ACICs)",
      "Atal Incubation Centers (AICs)",
      "Digital India Hub"
    ],
    "answer": "Atal Community Innovation Centers (ACICs)",
    "explanation": "ACICs focus on innovators and entrepreneurs from rural and semi-urban areas.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "Advanced Question: How does 'Design Thinking' help an entrepreneur achieve a 'Competitive Advantage'?",
    "options": [
      "By using the most expensive design software available.",
      "By positioning the business as an industry leader through user-centric innovation.",
      "By eliminating all competitors through legal patents.",
      "By ignoring user feedback and focusing only on the founder's vision."
    ],
    "answer": "By positioning the business as an industry leader through user-centric innovation.",
    "explanation": "User-centricity resonates with target audiences, attracting customers and position the business as a leader.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "ICAI Style: Which of the following 'uses of funds' would typically be categorized under 'Market Expansion'?",
    "options": [
      "Hiring software engineers to build new features.",
      "Investing in customer acquisition strategies and sales team expansion.",
      "Securing office space and equipment for a new branch.",
      "Paying fees for a fast-track patent examination."
    ],
    "answer": "Investing in customer acquisition strategies and sales team expansion.",
    "explanation": "Market expansion is about reaching new customers and growing the sales footprint.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  },
  {
    "question": "Tricky Logic: If a startup is 'Bootstrapped', it means it has 'Zero investment'. Is this true?",
    "options": [
      "Yes, there is no money involved.",
      "No, it uses 'personal' resources and savings of the founder.",
      "Yes, but only for the first month.",
      "No, it is a government-funded startup that doesn't use VC money."
    ],
    "answer": "No, it uses 'personal' resources and savings of the founder.",
    "explanation": "Bootstrapping is self-financing using one's own capital and business revenue.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "Case Study: 'Fin-Edge' is a startup with 50% equity held by Founder A and 50% by Founder B. They raise funding and the investor takes 20%. What is the new equity split?",
    "options": [
      "A: 50%, B: 50%, Inv: 20%",
      "A: 40%, B: 40%, Inv: 20%",
      "A: 30%, B: 50%, Inv: 20%",
      "A: 45%, B: 45%, Inv: 10%"
    ],
    "answer": "A: 40%, B: 40%, Inv: 20%",
    "explanation": "This is equity dilution. Both founders' stakes are reduced proportionally to accommodate the new investor (50 * 0.8 = 40).",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Analysis Question: Why is a 'Term Sheet' considered 'Non-binding'?",
    "options": [
      "Because it is not a legal document.",
      "Because it serves as a roadmap for negotiation rather than a final contract.",
      "Because it is only used during the elevator pitch.",
      "Because it is signed only after the startup shuts down."
    ],
    "answer": "Because it serves as a roadmap for negotiation rather than a final contract.",
    "explanation": "The term sheet outlines propositions to be finalized in a definitive agreement later.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "ICAI Tricky: Which tool helps startups perform 'Scenario Analysis' and budgeting?",
    "options": [
      "Accounting software like Tally.",
      "FP&A software such as Anaplan or Planful.",
      "MES for manufacturing.",
      "Social media scheduling tools."
    ],
    "answer": "FP&A software such as Anaplan or Planful.",
    "explanation": "Financial Planning and Analysis software is specifically designed for detailed modeling and forecasting.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Case-based: A startup founder is invited to a TV show to talk about their vision. Which agency should they consult to prepare their public image?",
    "options": [
      "A Venture Capital firm.",
      "A Public Relations (PR) agency.",
      "A Law firm for patent search.",
      "A Bank for a Mudra loan."
    ],
    "answer": "A Public Relations (PR) agency.",
    "explanation": "PR helps in building a personal brand and establishing credibility through media interactions.",
    "chapter": "Chapter 9: Miscellaneous"
  },
  {
    "question": "Tricky Question: A Private Limited Company must file 'Form SPICe' for incorporation. What does SPICe stand for?",
    "options": [
      "Simplified Proforma for Incorporating Company Electronically",
      "Special Partnership in Corporate Entities",
      "Standard Procedure for Incorporating Capital Enterprises",
      "Single Platform for Investing in Corporate Equity"
    ],
    "answer": "Simplified Proforma for Incorporating Company Electronically",
    "explanation": "SPICe is the integrated form for company registration at the MCA.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "Analysis Question: In the evolution of money, why were Precious Metals like Gold preferred over Rocks and Shells?",
    "options": [
      "Because they were lighter to carry.",
      "Because they provided a more objective way to value items.",
      "Because they were only used in the digital revolution.",
      "Because the government mandated it in the 4th Industrial Revolution."
    ],
    "answer": "Because they provided a more objective way to value items.",
    "explanation": "Monetary systems evolved to find objective measures of value as barter became insufficient.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "Case Study: An entrepreneur is choosing between a 'Sole Proprietorship' and 'Pvt Ltd'. They want to raise 10 Crores from external investors. Which one MUST they choose?",
    "options": [
      "Sole Proprietorship for simplicity.",
      "Pvt Ltd because it can issue different classes of stock and add new owners.",
      "Either one, investors don't care about entity type.",
      "Partnership with exactly 200 partners."
    ],
    "answer": "Pvt Ltd because it can issue different classes of stock and add new owners.",
    "explanation": "Companies are best suited for expansion and attracting outside investment.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "ICAI Tricky: Which of the following is NOT an advantage of joining a reputable Incubator?",
    "options": [
      "Access to shared office spaces.",
      "Networking with fellow founders and investors.",
      "A 100% guarantee that the startup will never experience a 'down-round'.",
      "Learning and development through workshops."
    ],
    "answer": "A 100% guarantee that the startup will never experience a 'down-round'.",
    "explanation": "Incubators provide support and validation, but they cannot guarantee financial outcomes or prevent market-driven down-rounds.",
    "chapter": "Chapter 8: Startup Incubators and Accelerators"
  },
  {
    "question": "Analysis: Why is 'Diverse Skill Sets' listed as an importance of having a co-founder?",
    "options": [
      "To ensure everyone in the company gets the same salary.",
      "To enable the startup to tackle a wide range of tasks (tech, marketing, finance) effectively.",
      "To increase the total number of shareholders beyond 200.",
      "To avoid the need for any external employees."
    ],
    "answer": "To enable the startup to tackle a wide range of tasks (tech, marketing, finance) effectively.",
    "explanation": "Startups need multiple competencies (technical, sales, admin) which are hard for one person to master entirely.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "Tricky ICAI style: Under Standup India, the bank loan is for setting up 'Greenfield Enterprises'. What does Greenfield mean?",
    "options": [
      "An enterprise in the agricultural sector only.",
      "The first-time venture of the beneficiary in the manufacturing or service sector.",
      "A venture that uses only green renewable energy.",
      "A company located in a rural forest area."
    ],
    "answer": "The first-time venture of the beneficiary in the manufacturing or service sector.",
    "explanation": "Greenfield refers to a new project or enterprise being set up from scratch.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "Case Study: Startup 'Omega' has reached PMF and has 1 Million users. It needs 100 Crores to go global. Which source and stage is most likely?",
    "options": [
      "Series B or C; Venture Capital or Private Equity",
      "Seed Stage; Friends & Family",
      "Pre-seed; Bootstrapping",
      "Bridge round; Mudra Loan"
    ],
    "answer": "Series B or C; Venture Capital or Private Equity",
    "explanation": "Later stage rounds (B, C, D) are for scaling and global expansion with large VC/PE institutional capital.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Analysis Question: Why is a 'Board Representation' right included in many term sheets?",
    "options": [
      "To give investors a voice in the strategic decisions affecting the company.",
      "To allow the investor to take over the daily coding of the product.",
      "To ensure that the co-founders never receive a salary.",
      "To bypass the need for any corporate tax filings."
    ],
    "answer": "To give investors a voice in the strategic decisions affecting the company.",
    "explanation": "Investors want to monitor their investment and provide strategic guidance at the board level.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Tricky Question: A founder registers a trademark but forgets to renew it after the initial period. Can they still prevent others from using the mark?",
    "options": [
      "Yes, trademarks are permanent like copyrights.",
      "No, registration must be maintained and renewed to keep the legal exclusive rights.",
      "Yes, if they have a DPIIT certificate.",
      "Only if they have a co-founder agreement in place."
    ],
    "answer": "No, registration must be maintained and renewed to keep the legal exclusive rights.",
    "explanation": "Just like patents require maintenance fees, trademarks require renewal to remain valid.",
    "chapter": "Chapter 7: Legal Consideration for Startup"
  },
  {
    "question": "Case Study: An investor wants to ensure that the co-founders do not leave the company immediately after receiving the funding. Which provision in the term sheet ensures this?",
    "options": [
      "Valuation Cap",
      "Founder Vesting / Equity Vesting",
      "Liquidation Preference",
      "Information Rights"
    ],
    "answer": "Founder Vesting / Equity Vesting",
    "explanation": "Vesting ensures that founders earn their ownership over time, encouraging them to stay committed to the company's success.",
    "chapter": "Chapter 6: Funding and Valuation"
  },
  {
    "question": "Advanced Analysis: Why is 'Agile Development with MVP' a recommended approach for startups?",
    "options": [
      "It allows for the longest possible development cycle.",
      "It enables quick releases and continuous improvement based on real-world usage.",
      "It requires zero technical talent to implement.",
      "It ensures that the first version released is the final version."
    ],
    "answer": "It enables quick releases and continuous improvement based on real-world usage.",
    "explanation": "Iterative progress based on feedback reduces the risk of building something nobody wants.",
    "chapter": "Chapter 3: Product Development"
  },
  {
    "question": "ICAI Tricky: Which of the following is NOT a 'Modern Business Model' according to Chapter 2?",
    "options": [
      "Freemium Model",
      "Direct to Customer Model",
      "Traditional Bulk Wholesaler Model",
      "Sharing Economy Model"
    ],
    "answer": "Traditional Bulk Wholesaler Model",
    "explanation": "The text lists Subscription, Freemium, Marketplace, D2C, E-Commerce, and Sharing Economy as modern models.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "Case Study: 'Eco-Solutions' is a social enterprise. It generates profit but its main goal is to provide clean water to villages. What type of entrepreneurship is this?",
    "options": [
      "Imitative Entrepreneurship",
      "Innovative Entrepreneurship",
      "Social Entrepreneurship",
      "Corporate Entrepreneurship"
    ],
    "answer": "Social Entrepreneurship",
    "explanation": "Social entrepreneurs focus on addressing pressing societal challenges and driving positive change.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "Analysis: Why should startups adopt 'Creative and Design Thinking'?",
    "options": [
      "To make their office look more artistic.",
      "To facilitate the generation of innovative solutions and foster user-centric approaches.",
      "To avoid having to follow any business model canvas.",
      "To ensure that their burn rate is as high as possible."
    ],
    "answer": "To facilitate the generation of innovative solutions and foster user-centric approaches.",
    "explanation": "Design thinking ensures that products truly resonate with end-users and solve real problems.",
    "chapter": "Chapter 1: Introduction to Entrepreneurship and Startup"
  },
  {
    "question": "Tricky ICAI style: In the 'Build-Measure-Learn' loop, what is the 'Learn' phase primarily about?",
    "options": [
      "Learning how to write better code.",
      "Gaining 'validated learning' from data and customer feedback to decide whether to pivot or persevere.",
      "Learning how to spend the investor's money faster.",
      "Learning the history of the 1st industrial revolution."
    ],
    "answer": "Gaining 'validated learning' from data and customer feedback to decide whether to pivot or persevere.",
    "explanation": "The purpose of the loop is to use real data to determine if the startup is on the right track.",
    "chapter": "Chapter 2: Crafting a Business Model and Lean Start-up"
  },
  {
    "question": "Case-based: A startup has developed a new drug and wants to commercialize it. They approach an institution for licensing indigenous technology. Which one should it be?",
    "options": [
      "SIDBI",
      "NRDC",
      "NITI Aayog",
      "Indian Patent Office"
    ],
    "answer": "NRDC",
    "explanation": "NRDC facilitates technology transfer and licensing agreements for indigenous innovations.",
    "chapter": "Chapter 5: Institutions Supporting Small Business Enterprises"
  },
  {
    "question": "Analysis Question: How does a 'Competitive Landscape' slide help an investor evaluate a pitch deck?",
    "options": [
      "It tells the investor how many employees the competitor has.",
      "It explains how the business differentiates itself from its rivals.",
      "It lists the personal phone numbers of the competitor's CEO.",
      "It proves that the startup has zero competition."
    ],
    "answer": "It explains how the business differentiates itself from its rivals.",
    "explanation": "Investors need to know why customers will choose this startup over existing options.",
    "chapter": "Chapter 4: Pitching the Idea and Presentation"
  }
];

export default function App() {
  const [mode, setMode] = useState('select'); // 'select', 'quiz', 'review', 'results'
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [fullSyllabus, setFullSyllabus] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [chapterScores, setChapterScores] = useState({});
  const [animationKey, setAnimationKey] = useState(0); // for animations
  const [showEndConfirm, setShowEndConfirm] = useState(false);
  const [reviewFlags, setReviewFlags] = useState({});

  function shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  const saveCurrentAnswer = React.useCallback((currentAnswer) => {
    if (currentAnswer === null || currentAnswer === undefined) return;
    setAnswers(prev => {
      const updated = [...prev];
      updated[currentIndex] = currentAnswer;
      return updated;
    });
  }, [currentIndex]);

  const goToNextQuestion = React.useCallback(() => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setTimeLeft(30);
      setAnimationKey(prev => prev + 1);
    } else {
      setMode('results');
    }
  }, [currentIndex, quizQuestions.length]);

  const handleAutoNext = React.useCallback(() => {
    const currentAnswer = selectedOption ?? answers[currentIndex];
    if (currentAnswer !== undefined && currentAnswer !== null) {
      saveCurrentAnswer(currentAnswer);
    }
    goToNextQuestion();
  }, [selectedOption, answers, currentIndex, goToNextQuestion, saveCurrentAnswer]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    saveCurrentAnswer(option);
    selectSound.currentTime = 0;
    selectSound.play();
  };

  const handleNext = React.useCallback(() => {
    const currentAnswer = answers[currentIndex] ?? selectedOption;
    if (!currentAnswer) return;
    saveCurrentAnswer(currentAnswer);
    goToNextQuestion();
  }, [selectedOption, answers, currentIndex, goToNextQuestion, saveCurrentAnswer]);

  useEffect(() => {
    setSelectedOption(answers[currentIndex] ?? null);
  }, [currentIndex, answers]);

  useEffect(() => {
    const newScore = answers.reduce((count, answer, index) => {
      if (answer !== undefined && quizQuestions[index]?.answer === answer) {
        return count + 1;
      }
      return count;
    }, 0);
    setScore(newScore);
  }, [answers, quizQuestions]);

  useEffect(() => {
    const updatedChapterScores = quizQuestions.reduce((totals, question, index) => {
      const answer = answers[index];
      const chapter = question.chapter;
      if (!totals[chapter]) {
        totals[chapter] = { correct: 0, total: 0 };
      }
      if (answer !== undefined) {
        totals[chapter].total += 1;
        if (answer === question.answer) {
          totals[chapter].correct += 1;
        }
      }
      return totals;
    }, {});
    setChapterScores(updatedChapterScores);
  }, [answers, quizQuestions]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (mode === 'quiz' && quizQuestions.length > 0) {
        if (e.key >= '1' && e.key <= '4') {
          const index = parseInt(e.key) - 1;
          if (quizQuestions[currentIndex].options[index]) {
            setSelectedOption(quizQuestions[currentIndex].options[index]);
          }
        } else if (e.key === 'Enter' && selectedOption) {
          handleNext();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, currentIndex, selectedOption, quizQuestions, handleNext]);

  // Timer effect
  React.useEffect(() => {
    if (mode !== 'quiz' || quizQuestions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleAutoNext();
          return 30;
        }
        return prev - 1;
      });
      setTotalTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [mode, currentIndex, selectedOption, quizQuestions, handleAutoNext]);

  const getUniqueChapters = () => {
    const chapters = [...new Set(questions.map(q => q.chapter))];
    return chapters.sort();
  };

  const getQuestionStatus = (index) => {
    if (reviewFlags[index]) return 'review';
    if (answers[index] === undefined) return 'unanswered';
    return 'answered';
  };

  const toggleReviewFlag = () => {
    setReviewFlags(prev => ({
      ...prev,
      [currentIndex]: !prev[currentIndex],
    }));
  };

  const startQuiz = () => {
    let selectedQuestions = [];
    if (fullSyllabus) {
      selectedQuestions = shuffleArray(questions).slice(0, 50);
    } else if (selectedChapter) {
      selectedQuestions = shuffleArray(questions.filter(q => q.chapter === selectedChapter));
    } else {
      return;
    }

    if (selectedQuestions.length === 0) return;

    setQuizQuestions(selectedQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setTimeLeft(30);
    setScore(0);
    setTotalTime(0);
    setChapterScores({});
    setMode('quiz');
    setAnimationKey(prev => prev + 1);
  };

  const handleChapterChange = (ch) => {
    setSelectedChapter(ch);
    setFullSyllabus(false);
  };

  const handleFullSyllabus = () => {
    setFullSyllabus(true);
    setSelectedChapter(null);
  };

  const endExam = () => {
    const currentAnswer = selectedOption ?? answers[currentIndex];
    if (currentAnswer !== undefined && currentAnswer !== null) {
      saveCurrentAnswer(currentAnswer);
    }
    setMode('results');
  };

  const restartQuiz = () => {
    setMode('select');
    setSelectedChapter(null);
    setFullSyllabus(false);
    setQuizQuestions([]);
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setTimeLeft(30);
    setScore(0);
    setTotalTime(0);
    setChapterScores({});
  };

  const startReview = () => {
    const wrongIndexes = quizQuestions.reduce((indexes, question, index) => {
      const answer = answers[index];
      if (answer !== undefined && answer !== question.answer) {
        indexes.push(index);
      }
      return indexes;
    }, []);

    if (wrongIndexes.length === 0) {
      setMode('results');
      return;
    }

    setQuizQuestions(wrongIndexes.map(i => quizQuestions[i]));
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setTimeLeft(30);
    setMode('review');
    setAnimationKey(prev => prev + 1);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getWeakChapters = () => {
    return Object.entries(chapterScores)
      .filter(([ch, scores]) => scores.total > 0 && (scores.correct / scores.total) < 0.6)
      .map(([ch]) => ch);
  };

  // Styles
  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '15px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    fontSize: '16px',
    padding: '12px 20px',
  };

  // Select Mode
  if (mode === 'select') {
    const chapters = getUniqueChapters();
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <style>
          {`
            @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes slideIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
            @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
            @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
          `}
        </style>
        <div className="hero-header">
          <h1>PAPER 3: ENTREPRENEURSHIP & START-UP ECOSYSTEM</h1>
          <p>
            ICAI Self-Paced Online Module (SPOM) Examination Portal
          </p>
        </div>
        <div style={{
          ...glassStyle,
          padding: '40px',
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center',
          animation: 'fadeIn 0.5s ease-in',
        }}>
          <h1 style={{ color: '#fff', marginBottom: '10px', fontSize: '2.5rem' }}>📚 ICAI Exam Simulator</h1>
          <p style={{ color: '#e0e0e0', marginBottom: '30px' }}>Select your study mode</p>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#fff', marginBottom: '20px' }}>Chapter-wise Practice</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
              {chapters.map((ch, idx) => (
                <button
                  key={ch}
                  onClick={() => handleChapterChange(ch)}
                  style={{
                    ...buttonStyle,
                    background: selectedChapter === ch ? '#4CAF50' : 'rgba(255,255,255,0.2)',
                    color: '#fff',
                    border: selectedChapter === ch ? '2px solid #fff' : '1px solid rgba(255,255,255,0.3)',
                    transform: selectedChapter === ch ? 'scale(1.05)' : 'scale(1)',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = selectedChapter === ch ? 'scale(1.05)' : 'scale(1)'}
                >
                  Chapter {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <button
              onClick={handleFullSyllabus}
              style={{
                ...buttonStyle,
                background: fullSyllabus ? '#FF9800' : 'rgba(255,255,255,0.2)',
                color: '#fff',
                border: fullSyllabus ? '2px solid #fff' : '1px solid rgba(255,255,255,0.3)',
                width: '100%',
                maxWidth: '300px',
                transform: fullSyllabus ? 'scale(1.05)' : 'scale(1)',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = fullSyllabus ? 'scale(1.05)' : 'scale(1)'}
            >
              📖 Full Syllabus Test (50 Questions)
            </button>
          </div>

          {(selectedChapter || fullSyllabus) && (
            <div style={{ marginBottom: '30px', color: '#fff' }}>
              <p>Questions: {fullSyllabus ? '50 (Random)' : questions.filter(q => q.chapter === selectedChapter).length}</p>
            </div>
          )}

          <button
            onClick={startQuiz}
            disabled={!selectedChapter && !fullSyllabus}
            style={{
              ...buttonStyle,
              background: '#4CAF50',
              color: '#fff',
              width: '100%',
              maxWidth: '200px',
              opacity: (selectedChapter || fullSyllabus) ? 1 : 0.5,
            }}
          >
            Start Exam
          </button>
        </div>
        <footer style={{ marginTop: '20px', color: '#e0e0e0', fontSize: '14px' }}>
          Developed by Manshu Deswal | Reviewed by Ritik Gupta
        </footer>
      </div>
    );
  }

  // Quiz Mode
  if (mode === 'quiz' || mode === 'review') {
    const currentQ = quizQuestions[currentIndex];
    if (!currentQ) return <div>Error</div>;

    const answeredCount = answers.filter(answer => answer !== undefined).length;
    const totalQuestions = quizQuestions.length;
    const progressWidth = totalQuestions ? ((answeredCount / totalQuestions) * 100) : 0;

    return (
      <div className="app-container quiz-screen">
        <div className="premium-header">
          <div className="header-content">
            <span className="eyebrow">SPOM Exam Portal</span>
            <h1>{mode === 'review' ? 'Review Session' : 'Entrepreneurship & Start-Up Ecosystem'}</h1>
            <p>Experience a premium exam interface with a smart question palette, live timer, and powerful review flow.</p>
          </div>

          <div className="status-grid">
            <div className="status-card status-highlight">
              <span>Live Timer</span>
              <strong className={timeLeft <= 10 ? 'urgent' : ''}>{formatTime(timeLeft)}</strong>
            </div>
            <div className="status-card">
              <span>Progress</span>
              <strong>{currentIndex + 1}/{totalQuestions}</strong>
            </div>
            <div className="status-card">
              <span>Correct</span>
              <strong>{score}</strong>
            </div>
            <button className="end-exam-button" onClick={() => setShowEndConfirm(true)}>
              End Exam
            </button>
          </div>
        </div>

        <div className="progress-box quiz-progress">
          <div className="progress-meta">
            <span>{answeredCount} answered</span>
            <span>{totalQuestions - answeredCount} remaining</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressWidth}%` }}></div>
          </div>
        </div>

        <div className="exam-layout">
          <section className="question-panel">
            <div className="question-card" key={animationKey}>
              <div className="question-card-header">
                <div>
                  <span className="question-pill">Question {currentIndex + 1}</span>
                  <p className="chapter-label">{currentQ.chapter}</p>
                </div>
                <button
                  className={`flag-button ${reviewFlags[currentIndex] ? 'active' : ''}`}
                  onClick={toggleReviewFlag}
                >
                  {reviewFlags[currentIndex] ? 'Marked for Review' : 'Mark for Review'}
                </button>
              </div>

              <h2 className="question-title">{currentQ.question}</h2>

              <div className="options-grid">
                {currentQ.options.map((option, idx) => {
                  const isSelected = answers[currentIndex] === option;
                  return (
                    <button
                      key={idx}
                      className={`option-button ${isSelected ? 'selected-option' : ''}`}
                      onClick={() => handleOptionSelect(option)}
                    >
                      <strong>{String.fromCharCode(65 + idx)}.</strong> {option}
                    </button>
                  );
                })}
              </div>

              <div className="question-actions">
                <button className="secondary-button" onClick={handlePrevious} disabled={currentIndex === 0}>
                  Previous
                </button>
                <button className="primary-button" onClick={handleNext} disabled={answers[currentIndex] === undefined}>
                  {currentIndex === totalQuestions - 1 ? 'Finish Exam' : 'Save & Next'}
                </button>
              </div>
            </div>

            <div className="motivation-banner">
              <div>
                <p>Study with confidence. Every answer is saved instantly and your exam flow stays smooth across chapters.</p>
              </div>
            </div>
          </section>

          <aside className="sidebar">
            <div className="palette-card">
              <div className="palette-title">
                <div>
                  <h3>Question Palette</h3>
                  <p>Quick access to every question</p>
                </div>
                <span className="palette-count">{totalQuestions}</span>
              </div>
              <div className="palette-grid">
                {quizQuestions.map((_, idx) => (
                  <button
                    key={idx}
                    className={`palette-item ${currentIndex === idx ? 'current' : ''} ${getQuestionStatus(idx)}`}
                    onClick={() => setCurrentIndex(idx)}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
              <div className="palette-legend">
                <div><span className="legend-dot answered" /> Answered</div>
                <div><span className="legend-dot unanswered" /> Unanswered</div>
                <div><span className="legend-dot review" /> Review</div>
                <div><span className="legend-dot current" /> Current</div>
              </div>
            </div>
          </aside>
        </div>

        <div className="social-section">
          <div className="developer-card">
            <h3>Developed by Manshu Deswal</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/manshu2036?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://www.instagram.com/manshu__deswal?igsh=MWt4bmc1aGxmbXgwbA==" target="_blank" rel="noreferrer">
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
          <div className="developer-card">
            <h3>Reviewed by Ritik Gupta</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ritik-gupta-a326b827a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://www.instagram.com/__ritik_gupta_?igsh=MWo0enZ3djJhMW8yYQ==" target="_blank" rel="noreferrer">
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>

        {showEndConfirm && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}>
            <div style={{
              background: '#0f172a',
              padding: '30px',
              borderRadius: '22px',
              maxWidth: '420px',
              width: '90%',
              textAlign: 'center',
              boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
              color: '#e2e8f0',
            }}>
              <h2 style={{ marginBottom: '20px' }}>Confirm End Exam</h2>
              <p style={{ color: '#94a3b8', marginBottom: '25px' }}>
                You have {totalQuestions - answeredCount} unanswered questions.
                Are you sure you want to submit?
              </p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    setShowEndConfirm(false);
                    endExam();
                  }}
                  style={{
                    border: 'none',
                    borderRadius: '16px',
                    padding: '14px 22px',
                    background: '#fb7185',
                    color: '#fff',
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                >
                  Yes, Submit
                </button>
                <button
                  onClick={() => setShowEndConfirm(false)}
                  style={{
                    border: '1px solid rgba(203,213,225,0.45)',
                    borderRadius: '16px',
                    padding: '14px 22px',
                    background: 'rgba(255,255,255,0.04)',
                    color: '#e2e8f0',
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <footer className="footer-note">Developed by Manshu Deswal | Reviewed by Ritik Gupta</footer>
      </div>
    );
  }

  if (mode === 'results') {
    const totalQuestions = quizQuestions.length;
    const correct = score;
    const attempted = answers.filter(a => a !== undefined).length;
    const incorrect = attempted - correct;
    const skipped = totalQuestions - attempted;
    const percentage = attempted > 0 ? ((correct / attempted) * 100).toFixed(2) : 0;
    const weakChapters = getWeakChapters();

    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{
          ...glassStyle,
          padding: '40px',
          maxWidth: '800px',
          width: '100%',
          animation: 'scaleIn 0.5s ease-in',
        }}>
          <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '30px' }}>📊 Exam Results</h1>

          {/* Score Overview */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '30px',
            borderRadius: '15px',
            marginBottom: '30px',
            textAlign: 'center',
          }}>
            <h2 style={{ color: '#4CAF50', margin: '10px 0', fontSize: '48px' }}>
              {correct} / {attempted}
            </h2>
            <p style={{ color: '#e0e0e0', fontSize: '18px' }}>Accuracy: {percentage}%</p>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
              <div>
                <p style={{ color: '#4CAF50', fontSize: '24px', margin: '0' }}>{correct}</p>
                <p style={{ color: '#e0e0e0' }}>Correct</p>
              </div>
              <div>
                <p style={{ color: '#FF5722', fontSize: '24px', margin: '0' }}>{incorrect}</p>
                <p style={{ color: '#e0e0e0' }}>Wrong</p>
              </div>
              <div>
                <p style={{ color: '#FFC107', fontSize: '24px', margin: '0' }}>{skipped}</p>
                <p style={{ color: '#e0e0e0' }}>Skipped</p>
              </div>
              <div>
                <p style={{ color: '#fff', fontSize: '24px', margin: '0' }}>{formatTime(totalTime)}</p>
                <p style={{ color: '#e0e0e0' }}>Time</p>
              </div>
            </div>
            <h3 style={{ color: '#fff', marginTop: '20px' }}>
              {percentage >= 50 ? "🔥 Great job! You are doing well. Keep improving!" : "💪 You can do better! Keep practicing and you will improve!"}
            </h3>
          </div>

          {/* Chapter Breakdown */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '15px',
            marginBottom: '30px',
          }}>
            <h3 style={{ color: '#fff', marginBottom: '15px' }}>Chapter-wise Performance</h3>
            {Object.entries(chapterScores).map(([ch, scores]) => (
              <div key={ch} style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff' }}>
                  <span>{ch}</span>
                  <span>{scores.correct}/{scores.total} ({((scores.correct/scores.total)*100).toFixed(0)}%)</span>
                </div>
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: '#ddd',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%',
                    background: (scores.correct/scores.total) >= 0.6 ? '#4CAF50' : '#FF5722',
                    width: `${(scores.correct/scores.total)*100}%`,
                  }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Weak Chapters */}
          {weakChapters.length > 0 && (
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '20px',
              borderRadius: '15px',
              marginBottom: '30px',
            }}>
              <h3 style={{ color: '#FF5722', marginBottom: '15px' }}>⚠️ Weak Chapters</h3>
              <ul style={{ color: '#e0e0e0' }}>
                {weakChapters.map(ch => <li key={ch}>{ch}</li>)}
              </ul>
            </div>
          )}

          {/* Full Attempt Review */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '15px',
            marginBottom: '30px',
          }}>
            <h3 style={{ color: '#fff', marginBottom: '15px' }}>📚 Full Attempt Review</h3>
            {quizQuestions.map((q, i) => {
              const selected = answers[i];
              const isAttempted = selected !== undefined;
              const isCorrect = selected === q.answer;
              return (
                <div key={i} style={{ marginBottom: '20px', padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                  <p style={{ color: '#fff', margin: '0 0 10px 0' }}><b>Q{i+1}:</b> {q.question}</p>
                  {q.options.map((option, idx) => {
                    const isSelected = option === selected;
                    const isCorrectOption = option === q.answer;
                    let bgColor = '#fff';
                    let label = '';
                    if (isCorrectOption) {
                      bgColor = '#c8f7c5';
                      label = ' ✅ Correct Answer';
                    } else if (isSelected && !isCorrect) {
                      bgColor = '#f7c5c5';
                      label = ' ❌ Your Choice';
                    }
                    return (
                      <div
                        key={idx}
                        style={{
                          padding: '10px',
                          marginBottom: '8px',
                          borderRadius: '6px',
                          border: '1px solid #ccc',
                          backgroundColor: bgColor,
                          color: '#000',
                        }}
                      >
                        {option}{label}
                      </div>
                    );
                  })}
                  {!isAttempted && <p style={{ color: '#FFC107', margin: '0' }}>⚠️ Not Attempted</p>}
                  <p style={{ color: '#e0e0e0', margin: '0' }}><b>Explanation:</b> {q.explanation || "No explanation available"}</p>
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="social-section">
            <h2>Connect With Us</h2>
            <div className="developer-card">
              <h3>Developed by Manshu Deswal</h3>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/manshu2036?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/manshu__deswal?igsh=MWt4bmc1aGxmbXgwbA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                  Instagram
                </a>
              </div>
            </div>
            <div className="developer-card">
              <h3>Reviewed & Suggested by Ritik Gupta</h3>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/ritik-gupta-a326b827a?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/__ritik_gupta_?igsh=MWo0enZ3djJhMW8yYQ=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={restartQuiz}
              style={{
                ...buttonStyle,
                background: '#4CAF50',
                color: '#fff',
              }}
            >
              Restart Exam
            </button>
            <button
              onClick={startReview}
              style={{
                ...buttonStyle,
                background: '#f59e0b',
                color: '#fff',
              }}
            >
              Review Incorrect Answers
            </button>
            <button
              onClick={() => setMode('select')}
              style={{
                ...buttonStyle,
                background: '#2196F3',
                color: '#fff',
              }}
            >
              New Exam
            </button>
          </div>
        </div>
        <footer style={{ marginTop: '20px', color: '#e0e0e0', fontSize: '14px' }}>
          Developed by Manshu Deswal | Reviewed by Ritik Gupta
        </footer>
      </div>
    );
  }

  return null;
}