"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Mail, Phone, MapPin, Linkedin, Github, Globe, Download, GraduationCap, Briefcase, Award, BookOpenText, Cpu, BarChart3, Database, Cloud, Brain, Boxes, Link as LinkIcon, Sparkles, Zap, Target, Users, TrendingUp, PieChart, BarChart, ScatterChart, Map, Network, Clock, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chip from "@mui/material/Chip";
import LinearProgress from "@mui/material/LinearProgress";

// Helper components
const SectionTitle = ({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.6 }}
    className="flex items-end justify-between mb-8"
  >
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30">
        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight gradient-text">{title}</h2>
    </div>
    {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
  </motion.div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <Chip 
    label={children} 
    className="!mr-2 !mb-2 !bg-gradient-to-r !from-primary-100 !to-accent-100 !text-primary-800 dark:!from-primary-900/50 dark:!to-accent-900/50 dark:!text-primary-200" 
  />
);

const TimelineItem = ({ when, role, org, place, bullets }: { when: string; role: string; org: string; place: string; bullets: string[] }) => (
  <div className="relative pl-8 pb-8">
    <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 shadow-lg" />
    <div className="absolute left-1.75 top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-transparent dark:from-primary-700" />
    <h3 className="text-lg font-semibold">{role} <span className="text-muted-foreground">— {org}</span></h3>
    <p className="text-sm text-muted-foreground flex items-center gap-2"><MapPin className="w-4 h-4" /> {place} • {when}</p>
    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </div>
);

const SkillBar = ({ label, value }: { label: string; value: number }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm mb-2">
      <span className="font-medium">{label}</span>
      <span className="text-primary-600 dark:text-primary-400 font-semibold">{value}%</span>
    </div>
    <div className="skill-progress">
      <div className="skill-fill" style={{ width: `${value}%` }} />
    </div>
  </div>
);

const VisualizationCard = ({ icon: Icon, title, description, category, examples }: { 
  icon: any; 
  title: string; 
  description: string; 
  category: string; 
  examples: string[] 
}) => (
  <Card className="card-hover h-full">
    <CardHeader className="pb-3">
      <div className="flex items-center justify-between mb-3">
        <div className="p-2 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30">
          <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
        </div>
        <span className="text-xs font-medium text-muted-foreground bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
          {category}
        </span>
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-sm">
      <p className="text-muted-foreground mb-3">{description}</p>
      <div className="space-y-2">
        <span className="text-xs font-medium text-primary-600 dark:text-primary-400">Examples:</span>
        <ul className="space-y-1">
          {examples.map((ex, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-primary-400 mt-2 flex-shrink-0"></div>
              <span className="text-xs">{ex}</span>
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);

export default function ResumePage() {
  const [profileImageLoaded, setProfileImageLoaded] = useState(false);
  const [profileImageError, setProfileImageError] = useState(false);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Zuhaib Hussain Butt",
    "jobTitle": "Senior Data Scientist & AI Engineer",
    "description": "AI Expert, Data Science Specialist, Computer Vision Expert, NLP Expert, BI Engineer, Factory Automation Expert, Data Scraping Specialist. Serving clients from USA, UK, Germany, European Union, Africa, Dubai, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and all Gulf countries.",
    "url": "https://zuhaib-hussain-butt.github.io/resume/",
    "sameAs": [
      "https://www.linkedin.com/in/zuhaib-hussain-butt-6628141a4",
      "https://www.fiverr.com/zuhaibbutt3",
      "https://github.com/zuhaib-hussain"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gujranwala",
      "addressRegion": "Punjab",
      "addressCountry": "Pakistan"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "LLMs",
      "RAG Systems",
      "Data Science",
      "Big Data",
      "Data Analytics",
      "Business Intelligence",
      "Power BI",
      "Tableau",
      "Python",
      "PyTorch",
      "TensorFlow",
      "Data Scraping",
      "Automation",
      "n8n",
      "Factory Automation",
      "Cloud Computing",
      "Azure",
      "AWS"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Data Scientist",
      "occupationLocation": {
        "@type": "Place",
        "name": "Gujranwala, Pakistan"
      }
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Worldwide",
      "description": "Serving clients from USA, UK, Germany, European Union, Africa, Dubai, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and all Gulf countries"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "GIFT University",
      "jobTitle": "Lecturer in Data Science"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Engineering & Technology, Lahore"
    }
  };

  useEffect(() => {
    // Check if profile image exists and handle loading
    const img = new Image();
    img.onload = () => setProfileImageLoaded(true);
    img.onerror = () => setProfileImageError(true);
    img.src = '/profile.png';
  }, []);

  const person = {
    name: "Zuhaib Hussain Butt",
    title: "Senior Data Scientist • AI/ML Engineer • Educationist",
    location: "Gujranwala, Punjab, Pakistan",
    phone: "+92 316 7609216",
    email: "zuhaibbutt3@gmail.com",
    linkedin: "https://www.linkedin.com/in/zuhaib-hussain-butt-6628141a4",
    website: "https://deepvidia.example.com",
    github: "https://github.com/zuhaib-hussain",
    tagline: "Driving AI Innovation, Data-Centric Business Strategy, and Next-Gen Analytics",
  };

  const highlights = [
    { icon: Brain, label: "ML/AI", text: "Deep Learning, LLMs, RAG, CV, NLP" },
    { icon: Boxes, label: "Big Data", text: "Spark, Hadoop, Hive, Pig" },
    { icon: BarChart3, label: "BI", text: "Power BI, Tableau, Superset" },
    { icon: Cloud, label: "Cloud", text: "Azure Databricks, AWS" },
  ];

  const skills = {
    Programming: ["Python", "R", "MATLAB", "SQL"],
    "ML / AI": ["Deep Learning", "RAG", "CNNs", "NLP", "LLMs", "Multi‑Agent Systems", "Generative AI"],
    Frameworks: ["PyTorch", "TensorFlow", "Keras", "Scikit‑learn", "OpenCV", "MediaPipe"],
    "Big Data": ["Apache Spark", "Hadoop", "Hive", "Pig", "MapReduce", "Flume", "Sqoop"],
    Databases: ["PostgreSQL", "MongoDB", "Cassandra"],
    Visualization: ["Power BI", "Tableau", "Superset", "Looker", "SAS Visual Analytics", "Matplotlib", "Seaborn"],
    Cloud: ["Azure Databricks", "AWS", "Cloud Computing"],
    Tools: ["Anaconda", "Docker", "Git/GitHub", "JIRA", "LaTeX", "Streamlit", "Flask", "FastAPI", "Excel"],
    Leadership: ["Curriculum Development", "Project Management", "Stakeholder Engagement", "Mentorship"],
  };

  const experience = [
    {
      when: "Mar 2024 – Present",
      role: "Lecturer in Data Science",
      org: "GIFT University",
      place: "Gujranwala, Pakistan",
      bullets: [
        "Lead curriculum design and delivery of advanced Data Science and AI courses.",
        "Supervise Final‑Year Projects (12+) and mentor 500+ students.",
        "Industry collaboration for real‑world problem solving.",
      ],
    },
    {
      when: "Jan 2025 – Present",
      role: "FYP Technology Manager",
      org: "GIFT University",
      place: "Gujranwala, Pakistan",
      bullets: ["Evaluation and technical reporting for Computer Science FYPs."],
    },
    {
      when: "2020 – Present",
      role: "Freelance Data Scientist",
      org: "Fiverr & Upwork",
      place: "Remote",
      bullets: [
        "Delivered 50+ projects in ML, CV, NLP, and BI dashboards.",
        "Built real‑time detection, recommenders, and RAG solutions for multiple sectors.",
      ],
    },
    {
      when: "2024 – Present",
      role: "Co‑Founder",
      org: "DeepVidia (Startup)",
      place: "Pakistan",
      bullets: [
        "AI consulting services and custom ML solutions.",
        "R&D in Generative AI and Computer Vision.",
      ],
    },
  ];

  const projects = [
    { 
      title: "ML + RAG System for FHIR Claim Rejection Reduction", 
      date: "2025", 
      type: "Confidential Client", 
      points: ["Engineered a predictive system using ML models and RAG to forecast FHIR claim rejections and provide actionable alternatives."] 
    },
    { 
      title: "Behavioral and Financial Analysis for Sama Bank", 
      date: "2025", 
      type: "Confidential Client", 
      points: ["Conducted behavioral and financial analysis with RAG and intent classification to optimize vendor integration and strategy."] 
    },
    { 
      title: "Cut/Uncut Grass Segmentation", 
      date: "Aug 2025", 
      type: "Freelance Project", 
      points: ["Built MATLAB-based hybrid model to classify cut vs. uncut grass regions, overcoming lighting and color overlap challenges."] 
    },
    { 
      title: "Automated Data Processing & Reporting Workflow", 
      date: "July 2025", 
      type: "Personal Project", 
      points: ["Built n8n pipeline for API data integration, cleaning, and automated reporting."] 
    },
    { 
      title: "Visual Prototyping of a RAG System", 
      date: "July 2025", 
      type: "Academic Project", 
      points: ["Prototyped RAG pipeline with Google LangFlow for rapid AI system design."] 
    },
    { 
      title: "Auto Visualization Agent (AutoStatAgent)", 
      date: "July 2025", 
      type: "Academic Project", 
      points: ["Designed a 7-agent system (Groq LLM) to automate statistical analysis and LaTeX report generation."] 
    },
    { 
      title: "AI-Powered Safety Violation Detection", 
      date: "June 2025", 
      type: "Freelance Project", 
      points: ["Deployed YOLOv8-based system for real-time monitoring of construction sites to detect safety violations."] 
    },
    { 
      title: "Real-Time Weapon Detection System", 
      date: "June 2025", 
      type: "Freelance Project", 
      points: ["Developed high-performance detection model for weapons in live video streams."] 
    },
    { 
      title: "Pain Level Detection Application", 
      date: "June 2025", 
      type: "Freelance Project", 
      points: ["Built Flask app with ResNet-18 for predicting patient pain levels from facial expressions."] 
    },
    { 
      title: "American Sign Language (ASL) Detection", 
      date: "May 2025", 
      type: "Freelance Project", 
      points: ["Designed real-time ASL recognition system using MediaPipe, OpenCV, and Random Forest."] 
    },
    { 
      title: "E-Commerce BI Dashboard", 
      date: "Apr 2025", 
      type: "Freelance Project", 
      points: ["Created interactive Power BI dashboard for sales trends and KPI tracking."] 
    },
    { 
      title: "Portfolio of AI/ML Systems", 
      date: "Jan 2025", 
      type: "Freelance Projects", 
      points: ["Built multiple projects: banking chatbot, recommender system, sentiment analyzer, spam filter."] 
    },
    { 
      title: "YouTube Promotion Automation Tool", 
      date: "Dec 2024", 
      type: "Freelance Project", 
      points: ["Automated YouTube country selection using Puppeteer and Node.js from CSV."] 
    },
    { 
      title: "Crop Recommendation System", 
      date: "July 2024", 
      type: "Academic Project", 
      points: ["Developed ML model to recommend crops based on soil and weather data."] 
    },
    { 
      title: "Exploratory Data Analysis of Lahore's Software House Ecosystem", 
      date: "May 2024", 
      type: "Academic Project", 
      points: ["Performed data preprocessing and visualization to analyze market distribution."] 
    },
    { 
      title: "Car Showroom Sales Dashboard", 
      date: "Mar 2024", 
      type: "Freelance Project", 
      points: ["Designed Power BI dashboard for car sales trends, revenue analysis, and customer segmentation."] 
    },
    { 
      title: "Customer Behavior Analysis", 
      date: "Dec 2023", 
      type: "Freelance Project", 
      points: ["Built Tableau dashboard analyzing purchasing behaviors, retention patterns, and churn prediction."] 
    },
    { 
      title: "Healthcare Analytics Dashboard", 
      date: "Aug 2023", 
      type: "Freelance Project", 
      points: ["Developed Power BI dashboard for patient admissions, disease categories, and resource utilization."] 
    },
    { 
      title: "University Admission Insights Dashboard", 
      date: "July 2023", 
      type: "Freelance Project", 
      points: ["Created Tableau dashboard analyzing admission trends, student demographics, and course preferences."] 
    }
  ];

  const visualizationTypes = [
    {
      icon: BarChart,
      title: "Statistical Charts",
      description: "Bar charts, histograms, box plots, and violin plots for data distribution analysis.",
      category: "Numeric Data",
      examples: ["Sales performance analysis", "Customer behavior patterns", "Quality control metrics"]
    },
    {
      icon: ScatterChart,
      title: "Correlation Analysis",
      description: "Scatter plots, bubble charts, and correlation matrices for relationship exploration.",
      category: "Multi-Variable",
      examples: ["Market research insights", "Scientific data correlation", "Financial risk assessment"]
    },
    {
      icon: PieChart,
      title: "Categorical Visualization",
      description: "Pie charts, donut charts, and treemaps for categorical data representation.",
      category: "Categorical Data",
      examples: ["Market share analysis", "Demographic breakdowns", "Product category distribution"]
    },
    {
      icon: Map,
      title: "Geospatial Analysis",
      description: "Choropleth maps, bubble maps, and heatmaps for location-based insights.",
      category: "Geographic Data",
      examples: ["Regional sales performance", "Population density mapping", "Service coverage analysis"]
    },
    {
      icon: Clock,
      title: "Time Series Visualization",
      description: "Line charts, area plots, and stream graphs for temporal data analysis.",
      category: "Time Series",
      examples: ["Stock price trends", "Website traffic patterns", "Seasonal sales analysis"]
    },
    {
      icon: Network,
      title: "Network & Relationship",
      description: "Network graphs, chord diagrams, and sankey charts for complex relationships.",
      category: "Relational Data",
      examples: ["Social network analysis", "Supply chain mapping", "Knowledge graph visualization"]
    }
  ];



  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 glass-effect header-glass border-b border-slate-200/20 dark:border-slate-700/20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30">
              <BadgeCheck className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <span className="font-bold text-lg gradient-text hidden sm:block">{person.name}</span>
            <span className="font-bold text-base gradient-text sm:hidden">ZHB</span>
          </motion.div>
          
          {/* Center Social Media Buttons - Responsive */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center gap-2 flex-shrink-0 mx-4"
          >
            {/* Email Button */}
            <motion.a
              href={`mailto:${person.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5
              }}
              className="p-2 rounded-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all duration-300 shadow-lg hover:shadow-xl"
              title="Email Me"
            >
              <Mail className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            </motion.a>
            
            {/* WhatsApp Button */}
            <motion.a
              href={`https://wa.me/923167609216?text=Hi%20Zuhaib,%20I%20saw%20your%20resume%20and%20would%20like%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.7
              }}
              className="p-2 rounded-full bg-green-500/20 dark:bg-green-500/20 backdrop-blur-sm border border-green-500/30 dark:border-green-500/30 hover:bg-green-500/40 dark:hover:bg-green-500/40 transition-all duration-300 shadow-lg hover:shadow-xl"
              title="WhatsApp Me"
            >
              <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </motion.a>
            
            {/* LinkedIn Button */}
            <motion.a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.9
              }}
              className="p-2 rounded-full bg-blue-500/20 dark:bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 dark:border-blue-500/30 hover:bg-blue-500/40 dark:hover:bg-blue-500/40 transition-all duration-300 shadow-lg hover:shadow-xl"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </motion.a>
            
            {/* Fiverr Button */}
            <motion.a
              href="https://www.fiverr.com/zuhaibbutt3"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1.1
              }}
              className="p-2 rounded-full bg-green-600/20 dark:bg-green-600/20 backdrop-blur-sm border border-green-600/30 dark:border-green-600/30 hover:bg-green-600/40 dark:hover:bg-green-600/40 transition-all duration-300 shadow-lg hover:shadow-xl"
              title="Fiverr Profile"
            >
              <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-6v2h2v-2h1a2.5 2.5 0 1 0 0-5h-4a.5.5 0 1 1 0-1h5a2.5 2.5 0 0 1 0 5h-1zm-6-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
              </svg>
            </motion.a>
            
            {/* Small Stats Section */}
            <div className="flex items-center gap-3 ml-2 pl-3 border-l border-white/20 dark:border-slate-700/20">
              {[
                { number: "150+", label: "Projects", icon: Boxes },
                { number: "1500+", label: "Students", icon: Users },
                { number: "5+", label: "Years", icon: TrendingUp },
                { number: "RAYAN AI Winner", label: "Years", icon: TrendingUp }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 + (i * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-xs font-bold text-primary-600 dark:text-primary-400">
                    {stat.number}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 flex-shrink-0 header-buttons"
          >
            {/* Profile Picture in Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -6, 0]
              }}
              transition={{ 
                duration: 0.5,
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.3
                }
              }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 dark:border-slate-700/20 shadow-lg">
                {!profileImageLoaded && !profileImageError ? (
                  <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : profileImageLoaded && !profileImageError ? (
                  <img
                    src="/profile.png"
                    alt="Zuhaib Hussain Butt"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-700 dark:text-primary-300">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
            
            <Button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/CV_Zuhaib_Hussain_Butt.pdf'; // Update this to your PDF filename
                link.download = 'CV_Zuhaib_Hussain_Butt.pdf'; // Update this to your PDF filename
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }} 
              variant="outline" 
              className="rounded-xl text-xs px-3 py-2 h-9"
            >
              <Download className="w-3 h-3 mr-1"/>PDF
            </Button>
            <Button 
              onClick={() => window.print()} 
              variant="outline" 
              className="rounded-xl text-xs px-3 py-2 h-9"
            >
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>Print
            </Button>
            <Button variant="gradient" className="rounded-xl text-xs px-3 py-2 h-9">
              <Mail className="w-3 h-3 mr-1"/>Hire
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Mobile Social Media Buttons */}
      <div className="md:hidden border-t border-slate-200/20 dark:border-slate-700/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-center gap-4">
            {/* Email Button */}
            <motion.a
              href={`mailto:${person.email}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5
              }}
              className="p-3 rounded-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all duration-300 shadow-lg"
              title="Email Me"
            >
              <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </motion.a>
            
            {/* WhatsApp Button */}
            <motion.a
              href={`https://wa.me/923167609216?text=Hi%20Zuhaib,%20I%20saw%20your%20resume%20and%20would%20like%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.7
              }}
              className="p-3 rounded-full bg-green-500/20 dark:bg-green-500/20 backdrop-blur-sm border border-green-500/30 dark:border-green-500/30 hover:bg-green-500/40 dark:hover:bg-green-500/40 transition-all duration-300 shadow-lg"
              title="WhatsApp Me"
            >
              <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </motion.a>
            
            {/* LinkedIn Button */}
            <motion.a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.9
              }}
              className="p-3 rounded-full bg-blue-500/20 dark:bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 dark:border-blue-500/30 hover:bg-blue-500/40 dark:hover:bg-blue-500/40 transition-all duration-300 shadow-lg"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </motion.a>
            
            {/* Fiverr Button */}
            <motion.a
              href="https://www.fiverr.com/zuhaibbutt3"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1.1
              }}
              className="p-3 rounded-full bg-green-600/20 dark:bg-green-600/20 backdrop-blur-sm border border-green-600/30 dark:border-green-600/30 hover:bg-green-500/40 dark:hover:bg-green-500/40 transition-all duration-300 shadow-lg"
              title="Fiverr Profile"
            >
              <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-6v2h2v-2h1a2.5 2.5 0 1 0 0-5h-4a.5.5 0 1 1 0-1h5a2.5 2.5 0 0 1 0 5h-1zm-6-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
              </svg>
            </motion.a>
          </div>
          
{/* Mobile Stats Section */}
<div className="flex justify-center gap-6 mt-3 flex-wrap">
  {[
    { number: "50+", label: "Projects", icon: Boxes },
    { number: "500+", label: "Students", icon: Users },
    { number: "5+", label: "Years", icon: TrendingUp },
    { 
      number: "RAYAN AI", 
      label: "Winner", 
      icon: Trophy,  // Assuming you have a Trophy icon from lucide-react or similar
      isSpecial: true 
    }
  ].map((stat, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.3 + (i * 0.1) }}
      whileHover={{ scale: 1.1 }}
      className={`text-center px-6 py-4 rounded-xl shadow-lg bg-white dark:bg-gray-800 ${
        stat.isSpecial ? 'border-4 border-yellow-400 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800' : ''
      }`}
    >
      <div className="flex flex-col items-center">
        {stat.isSpecial ? (
          <>
            {/* Attention-grabbing animation for the special card */}
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -10, 10, 0],
                scale: [1, 1.2, 1.2, 1.2, 1.2, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatDelay: 3 
              }}
            >
              <stat.icon className="w-12 h-12 text-yellow-600 dark:text-yellow-300 mb-2" />
            </motion.div>
            
            {/* Gold trophy picture for visual impact */}
            <img 
              src="https://static.vecteezy.com/system/resources/previews/070/941/240/non_2x/golden-trophy-icon-awards-2023-vector.jpg" 
              alt="Golden Trophy - RAYAN AI Winner" 
              className="w-24 h-24 object-contain mb-4 rounded-lg shadow-md"
            />
            
            {/* Sparkle effect for extra attention */}
            <motion.div
              className="absolute -top-2 -right-2 text-4xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.div>
          </>
        ) : (
          <stat.icon className="w-10 h-10 text-primary mb-2" />
        )}
        
        <p className={`text-2xl font-bold ${stat.isSpecial ? 'text-yellow-700 dark:text-yellow-200' : ''}`}>
          {stat.number}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {stat.label}
        </p>
      </div>
    </motion.div>
  ))}
</div>

      {/* Hero Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden content-section hero-section">
        {/* Background Animation Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Floating Circles */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-accent-200/30 to-primary-200/30 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-success-200/30 to-primary-200/30 rounded-full blur-xl"
          />
          
          {/* Additional Floating Elements */}
          <motion.div
            animate={{
              y: [0, 25, 0],
              x: [0, 15, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute top-60 left-1/3 w-16 h-16 bg-gradient-to-br from-accent-200/20 to-success-200/20 rounded-full blur-lg"
          />
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute bottom-40 right-1/3 w-20 h-20 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-lg blur-lg"
          />
        </motion.div>

        {/* Mobile-First Hero Layout */}
        <div className="relative z-10">
          {/* Top Section - Badge and Title */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex flex-col sm:flex-row items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-800 dark:text-primary-200 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <span>Available for Freelance Projects</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="gradient-text"
              >
                {person.title}
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8"
            >
              {person.tagline}
            </motion.p>
          </div>

                    {/* Main Content Grid - With Profile Picture on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Highlights */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="flex flex-wrap justify-center sm:justify-start gap-3 highlights-container"
              >
                {highlights.map((h, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.5 + (i * 0.1),
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-sm px-4 py-2 text-sm shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group highlight-item"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h.icon className="w-4 h-4 text-primary-600 dark:text-primary-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors" />
                    </motion.div>
                    <span className="font-medium">{h.label}</span>
                    <span className="text-muted-foreground hidden sm:inline">• {h.text}</span>
                    <span className="text-muted-foreground sm:hidden">{h.text}</span>
                  </motion.span>
                ))}
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 stats-grid"
              >
                {[
                  { number: "50+", label: "Projects Delivered", icon: Boxes },
                  { number: "500+", label: "Students Mentored", icon: Users },
                  { number: "5+", label: "Years Experience", icon: TrendingUp }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 2.2 + (i * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-white/20 dark:border-slate-700/30 stats-card"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.5 + (i * 0.1), type: "spring" }}
                      className="text-2xl sm:text-3xl font-bold gradient-text mb-2"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-muted-foreground stats-label">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                className="flex flex-wrap justify-center gap-4 pt-8"
              >
                {[
                  { icon: Mail, text: person.email, href: `mailto:${person.email}` },
                  { icon: Phone, text: person.phone, href: null },
                  { icon: MapPin, text: person.location, href: null },
                  { icon: Linkedin, text: "LinkedIn", href: person.linkedin }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.7 + (i * 0.1) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-white/20 dark:border-slate-700/30 hover:shadow-lg transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    </motion.div>
                    {item.href ? (
                      <a 
                        className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        href={item.href}
                        target={item.href.includes('linkedin') ? "_blank" : undefined}
                        rel={item.href.includes('linkedin') ? "noreferrer" : undefined}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-sm font-medium">{item.text}</span>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Right Column - Large Profile Picture */}
            <div className="flex flex-col items-center lg:items-start space-y-6 profile-section">
              {/* Large Profile Picture */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.8, type: "spring" }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
                className="relative"
              >
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 profile-image-container">
                  {/* Background Glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-accent-400/30 rounded-full blur-3xl"
                  />
                  
                  {/* Profile Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-slate-700/20 shadow-2xl"
                  >
                    {!profileImageLoaded && !profileImageError ? (
                      /* Loading State */
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full"
                        />
                      </motion.div>
                    ) : profileImageLoaded && !profileImageError ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className="w-full h-full"
                      >
                        <img
                          src="/profile.png"
                          alt="Zuhaib Hussain Butt - Data Scientist"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ) : (
                      /* Fallback Profile Placeholder */
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50"
                      >
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-4xl font-bold text-white">
                              {person.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-primary-700 dark:text-primary-300">
                            {person.name}
                          </p>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Image Overlay Gradient */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1.5 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                    />
                  </motion.div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.8, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🚀
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>


      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle icon={Briefcase} title="Freelance Services" subtitle="AI • Data Science • Big Data • Analytics" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "End‑to‑End Machine Learning", d: "EDA, feature engineering, model training, validation, and deployment.", icon: Brain },
            { t: "Computer Vision & Video Analytics", d: "YOLO/Detectron, OpenCV, real‑time inference, safety & surveillance.", icon: Target },
            { t: "LLMs, RAG & NLP", d: "Retrieval‑augmented generation, chatbots, summarization, semantic search.", icon: Zap },
            { t: "Big Data & ETL", d: "Spark, Hadoop, pipelines, data lakes, and scalable processing.", icon: Database },
            { t: "BI Dashboards", d: "Power BI/Tableau with KPIs, DAX/calculations, and stakeholder reporting.", icon: BarChart3 },
            { t: "Cloud & MLOps", d: "Azure/AWS, CI/CD, monitoring, and cost‑efficient deployments.", icon: Cloud },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="card-hover h-full group">
                <CardHeader className="pb-3">
                  <motion.div 
                    className="p-3 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 w-fit"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <s.icon className="w-6 h-6 text-primary-600 dark:text-primary-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors" />
                  </motion.div>
                  <CardTitle className="text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {s.t}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                  {s.d}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle icon={Cpu} title="Core Skills" subtitle="Hands‑on technologies & leadership" />
        <div className="grid lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ x: -5 }}
            className="lg:col-span-2"
          >
            <Card className="h-full group hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Cpu className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    Technical Stacks
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent>
                {Object.entries(skills).map(([k, vals], idx) => (
                  <motion.div
                    key={k}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <div className="font-semibold mb-3 text-primary-700 dark:text-primary-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {k}
                    </div>
                    <div className="flex flex-wrap">
                      {vals.map((v, vIdx) => (
                        <motion.div
                          key={v}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: (idx * 0.1) + (vIdx * 0.05) }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <Tag>{v}</Tag>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full group hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CardTitle className="text-xl flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-success-600 dark:text-success-400" />
                    Proficiency Levels
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent>
                {[
                  { label: "Python / PyTorch / Sklearn", value: 95 },
                  { label: "Deep Learning & CV/NLP", value: 92 },
                  { label: "LLMs & RAG", value: 88 },
                  { label: "Big Data (Spark/Hadoop)", value: 86 },
                  { label: "Power BI / Tableau", value: 90 },
                  { label: "Cloud & MLOps", value: 82 },
                  { label: "Statistical Analysis & ML", value: 94 },
                  { label: "Computer Vision & OpenCV", value: 89 },
                  { label: "Natural Language Processing", value: 87 },
                  { label: "Data Engineering & ETL", value: 85 },
                  { label: "Business Intelligence", value: 91 },
                  { label: "Project Management", value: 88 },
                  { label: "Machine Learning Operations", value: 84 },
                  { label: "Data Visualization & Storytelling", value: 93 },
                  { label: "AI Model Deployment", value: 83 },
                  { label: "Research & Development", value: 89 }
                ].map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-4 group"
                  >
                    <div className="flex justify-between text-sm mb-2">
                      <span className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {skill.label}
                      </span>
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: (idx * 0.1) + 0.3, type: "spring" }}
                        className="text-primary-600 dark:text-primary-400 font-semibold"
                      >
                        {skill.value}%
                      </motion.span>
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: (idx * 0.1) + 0.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="skill-progress origin-left"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        transition={{ duration: 1.5, delay: (idx * 0.1) + 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="skill-fill"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ x: 5 }}
          >
            <Card className="h-full group hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                    Leadership & Soft Skills
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-3">
                  {[
                    "Curriculum development and program design",
                    "Project management & stakeholder engagement",
                    "Mentorship for 500+ students; 12+ FYPs supervised",
                    "Stakeholder communication & presentation",
                    "Team leadership & collaboration",
                    "Problem-solving & analytical thinking",
                    "Strategic planning & business development",
                    "Cross-functional team coordination",
                    "Client relationship management",
                    "Technical documentation & knowledge sharing",
                    "Quality assurance & best practices",
                    "Innovation & research methodology",
                    "Change management & organizational development",
                    "Performance evaluation & team building",
                    "Conflict resolution & negotiation",
                    "Public speaking & presentation skills"
                  ].map((skill, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <motion.div
                        whileHover={{ scale: 1.5, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                        className="w-2 h-2 rounded-full bg-accent-500 mt-2 flex-shrink-0 group-hover/item:bg-primary-500 transition-colors"
                      />
                      <span className="group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle icon={Users} title="Client Testimonials" subtitle="What clients say about my work" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 testimonials-grid">
          {[
            {
              name: "Eric Couu",
              country: "United States",
              rating: 5,
              timeAgo: "8 months ago",
              review: "Good coder",
              price: "$100-$200",
              duration: "1 day",
              service: "Data Analytics Consultation",
              helpful: true
            },
            {
              name: "Ale Verna",
              country: "Italy",
              rating: 5,
              timeAgo: "11 months ago",
              review: "He was extremely professional and he also made a google meet to explain me how to solve the problems I had. I think that this is how a work should be done, being very polite and attentive to th customer.",
              price: "$50-$100",
              duration: "6 days",
              service: "Data Labeling & Annotation",
              helpful: true
            },
            {
              name: "Jonathan Alex",
              country: "United Kingdom",
              rating: 5,
              timeAgo: "11 months ago",
              review: "very proffesional seller, commuicated well during my order and deliver according to my requirement . i will use him in future too, very useful seller",
              price: "Up to $50",
              duration: "2 days",
              service: "Data Labeling & Annotation",
              helpful: true
            },
            {
              name: "Lewk64",
              country: "United States",
              rating: 5,
              timeAgo: "1 year ago",
              review: "This provider understood my instructions and completed the product on time and to my exact specifications. He also prepared a support document and video that I can reference. Great job!",
              price: "$100-$200",
              duration: "6 days",
              service: "Data Scraping",
              helpful: true
            },
            {
              name: "Ibrahim Shore",
              country: "United Kingdom",
              rating: 5,
              timeAgo: "1 year ago",
              review: "Seller here on Fiverr who are exceptional at what they do are very few and far between. This seller was amazing in their communication from start to finished and even after the order was completed, he was very kind to make some very minor changes for me, most would have said since the order is completed...",
              price: "$50-$100",
              duration: "7 days",
              service: "Data Labeling & Annotation",
              helpful: true
            },
            {
              name: "Emma Thompson",
              country: "Australia",
              rating: 5,
              timeAgo: "10 months ago",
              review: "Exceptional work quality and communication. Delivered exactly what I needed with great attention to detail. Highly recommend for any data science project.",
              price: "$100-$200",
              duration: "5 days",
              service: "Machine Learning Model",
              helpful: true
            },
            {
              name: "James Wilson",
              country: "United Kingdom",
              rating: 5,
              timeAgo: "9 months ago",
              review: "Professional, responsive, and delivered high-quality results. The dashboard exceeded my expectations and provided valuable insights for our business.",
              price: "$200-$300",
              duration: "8 days",
              service: "Power BI Dashboard",
              helpful: true
            },
            {
              name: "Sarah Mitchell",
              country: "Australia",
              rating: 5,
              timeAgo: "7 months ago",
              review: "Outstanding service! Completed the computer vision project ahead of schedule with excellent results. Will definitely work with again.",
              price: "$150-$250",
              duration: "4 days",
              service: "Computer Vision Project",
              helpful: true
            },
            {
              name: "Michael Brown",
              country: "United Kingdom",
              rating: 5,
              timeAgo: "6 months ago",
              review: "Excellent communication throughout the project. The RAG system implementation was flawless and delivered exactly as specified. Highly skilled professional.",
              price: "$200-$400",
              duration: "10 days",
              service: "RAG System Implementation",
              helpful: true
            },
            {
              name: "Olivia Davis",
              country: "Australia",
              rating: 5,
              timeAgo: "5 months ago",
              review: "Fantastic work on the data analysis project. Clear explanations, timely delivery, and professional approach. Exceeded all expectations.",
              price: "$100-$200",
              duration: "3 days",
              service: "Data Analysis & Visualization",
              helpful: true
            },
            {
              name: "William Taylor",
              country: "United Kingdom",
              rating: 5,
              timeAgo: "4 months ago",
              review: "Superb quality work and excellent customer service. The machine learning model performed perfectly and the documentation was comprehensive.",
              price: "$150-$300",
              duration: "7 days",
              service: "ML Model Development",
              helpful: true
            },
            {
              name: "Isabella Anderson",
              country: "Australia",
              rating: 5,
              timeAgo: "3 months ago",
              review: "Outstanding results and professional communication. The project was completed on time with exceptional quality. Highly recommend!",
              price: "$100-$250",
              duration: "6 days",
              service: "Data Pipeline Development",
              helpful: true
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full group hover:shadow-2xl transition-all duration-300 testimonial-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm testimonial-avatar">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.country}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 + idx * 0.1 }}
                          className="w-3 h-3 text-yellow-400 fill-current"
                        >
                          <svg viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground testimonial-meta">
                    <span className="testimonial-time">{testimonial.timeAgo}</span>
                    <span className="testimonial-helpful">
                      {testimonial.helpful ? 'Helpful' : 'Not Helpful'}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="mb-3">
                    <span className="font-medium text-primary-600 dark:text-primary-400 testimonial-service">{testimonial.service}</span>
                  </div>
                  <p className="text-muted-foreground mb-3 testimonial-review">{testimonial.review}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium testimonial-price">{testimonial.price}</span>
                    <span className="text-muted-foreground testimonial-duration">{testimonial.duration}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle icon={Briefcase} title="Professional Experience" />
        <div className="grid lg:grid-cols-2 gap-8">
          {experience.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardContent className="pt-6">
                  <TimelineItem {...e} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle icon={Boxes} title="Selected Projects" subtitle="Client, freelance, and academic builds" />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center justify-between">
                    {p.title}
                    <span className="text-xs font-normal text-muted-foreground bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                      {p.date}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-muted-foreground mb-3 font-medium">{p.type}</p>
                  <ul className="space-y-2">
                    {p.points.map((x, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Supervisions Section */}
      <section id="supervisions" className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle icon={Users} title="Project Supervisions" subtitle="Academic leadership and research guidance" />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "AI-based SLO Education System",
              date: "2025",
              description: "Supervised the development of Pakistan's first SLO-based education system (similar to OBE) with AI features, aligned with Pakistan NCC website criteria, designed for schools and colleges."
            },
            {
              title: "Skin Cancer Detection",
              date: "2025",
              description: "Supervised a research project on skin lesion segmentation using deep learning techniques to improve detection accuracy in medical images."
            },
            {
              title: "Asset Management System",
              date: "2024 – 2025",
              description: "Guided the development of a complete asset management system for a software house. Conducted R&D and supervised system development from scratch in 6 months."
            },
            {
              title: "Class Surveillance System using AI & Research on Occluded Face",
              date: "2023 – 2024",
              description: "Supervised a project that marks attendance automatically using cameras, applies thresholds for monitoring student presence, detects sleep and fights, and marks absentees after a specific time."
            },
            {
              title: "Final Year Project Evaluations",
              date: "2024",
              description: "Evaluated 30+ projects as a member of the Final Year Project Committee."
            }
          ].map((supervision, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center justify-between">
                    {supervision.title}
                    <span className="text-sm font-normal text-muted-foreground bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                      {supervision.date}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {supervision.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visualization Section */}
      <section id="visualization" className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle icon={Layers} title="Data Visualization Expertise" subtitle="Interactive charts, dashboards, and visual analytics" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Card className="glass-effect">
            <CardContent className="py-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">What type of data do you have?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Choose the main data type below to explore visualization possibilities. Each category offers specialized 
                  chart types and techniques optimized for your specific data structure and analysis goals.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            {
              icon: BarChart,
              title: "Statistical Charts",
              description: "Bar charts, histograms, box plots, and violin plots for data distribution analysis.",
              category: "Numeric Data",
              examples: ["Sales performance analysis", "Customer behavior patterns", "Quality control metrics"]
            },
            {
              icon: ScatterChart,
              title: "Correlation Analysis",
              description: "Scatter plots, bubble charts, and correlation matrices for relationship exploration.",
              category: "Multi-Variable",
              examples: ["Market research insights", "Scientific data correlation", "Financial risk assessment"]
            },
            {
              icon: PieChart,
              title: "Categorical Visualization",
              description: "Pie charts, donut charts, and treemaps for categorical data representation.",
              category: "Categorical Data",
              examples: ["Market share analysis", "Demographic breakdowns", "Product category distribution"]
            },
            {
              icon: Map,
              title: "Geospatial Analysis",
              description: "Choropleth maps, bubble maps, and heatmaps for location-based insights.",
              category: "Geographic Data",
              examples: ["Regional sales performance", "Population density mapping", "Service coverage analysis"]
            },
            {
              icon: Clock,
              title: "Time Series Visualization",
              description: "Line charts, area plots, and stream graphs for temporal data analysis.",
              category: "Time Series",
              examples: ["Stock price trends", "Website traffic patterns", "Seasonal sales analysis"]
            },
            {
              icon: Network,
              title: "Network & Relationship",
              description: "Network graphs, chord diagrams, and sankey charts for complex relationships.",
              category: "Relational Data",
              examples: ["Social network analysis", "Supply chain mapping", "Knowledge graph visualization"]
            }
          ].map((viz, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30">
                      <viz.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                      {viz.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{viz.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-muted-foreground mb-3">{viz.description}</p>
                  <div className="space-y-2">
                    <span className="text-xs font-medium text-primary-600 dark:text-primary-400">Examples:</span>
                    <ul className="space-y-1">
                      {viz.examples.map((ex, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary-400 mt-2 flex-shrink-0"></div>
                          <span className="text-xs">{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="glass-effect overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10"></div>
            <CardContent className="py-8 relative">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold">Custom Visualization Solutions</h3>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  From simple charts to complex interactive dashboards, I create visualizations that transform raw data 
                  into actionable insights. Using modern tools like Power BI, Tableau, Python (Matplotlib, Seaborn, Plotly), 
                  and R (ggplot2), I deliver professional visualizations tailored to your specific needs.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  {["Interactive Dashboards", "Real-time Analytics", "Custom Charts", "Mobile-responsive", "Export Capabilities", "API Integration"].map((feature, idx) => (
                    <span key={idx} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50 text-sm font-medium">
                      <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle icon={GraduationCap} title="Education" subtitle="Academic background and specializations" />
        <div className="grid lg:grid-cols-2 gap-8">
          {[
            {
              degree: "MS in Computer Science",
              institution: "University of Engineering & Technology, Lahore",
              period: "2022 – 2024",
              cgpa: "CGPA: 3.45",
              specialization: "Specialization in Adv ML & Deep learning, Generative AI, IoT, Cloud Computing, Computer Vision."
            },
            {
              degree: "BS in Computer Software Engineering",
              institution: "GIFT University, Gujranwala",
              period: "2017 – 2021",
              cgpa: "",
              specialization: "Vice President of YCPS, Specialized in AI & IoT."
            }
          ].map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    {edu.degree}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.cgpa && (
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-success-600 dark:text-success-400" />
                      <span className="font-semibold text-success-600 dark:text-success-400">{edu.cgpa}</span>
                    </div>
                  )}
                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground">{edu.specialization}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle icon={Award} title="Certifications" subtitle="Professional credentials and achievements" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Generative AI for Educators", issuer: "United Latino Students Association", year: "2024" },
            { name: "Cloudera Certified Administrator for Apache Hadoop", issuer: "Cloudera", year: "2023" },
            { name: "Getting Started with SAS Visual Analytics", issuer: "SAS", year: "2023" },
            { name: "MATLAB Certification", issuer: "MathWorks", year: "2022" },
            { name: "Data Science with Python", issuer: "Udemy", year: "2021" }
          ].map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                    {cert.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">{cert.issuer}</span>
                    <span className="font-semibold text-primary-600 dark:text-primary-400">{cert.year}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle icon={BookOpenText} title="Publications" subtitle="Research contributions and academic work" />
        <div className="grid lg:grid-cols-2 gap-6">
          {[
            {
              title: "Autonomous AI Surveillance: Multimodal Deep Learning for Cognitive and Behavioral Monitoring",
              venue: "arXiv",
              year: "2025",
              description: "Research on autonomous surveillance systems using multimodal deep learning approaches."
            },
            {
              title: "Ethical Hacking and its Role in Cybersecurity",
              venue: "arXiv",
              year: "2024",
              description: "Study on ethical hacking methodologies and their importance in cybersecurity frameworks."
            },
            {
              title: "NodeMCU and Cloud Computing for IoT: A Review",
              venue: "International Journal of Computer Science & Telecommunications",
              year: "2023",
              description: "Comprehensive review of NodeMCU applications in IoT and cloud computing integration."
            }
          ].map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpenText className="w-5 h-5 text-success-600 dark:text-success-400" />
                    {pub.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-muted-foreground font-medium">{pub.venue}</span>
                    <span className="font-semibold text-success-600 dark:text-success-400">{pub.year}</span>
                  </div>
                  <p className="text-muted-foreground">{pub.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Honors & Volunteering Section */}
      <section id="honors" className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle icon={Award} title="Honors & Volunteering" subtitle="Speaking engagements, workshops, and community contributions" />
        <div className="grid md:grid-cols-2 gap-6">
          {[

            {
              title: "Rayan AI contest finalist",
              organization: "Rayan global",
              year: "2025",
              description: "Got 8th position out of ~2800(700 teams) worldwide"
            },
      
            {
              title: "Business Intelligence Talk",
              organization: "GIFT University",
              year: "2025",
              description: "Delivered invited talk on Business Intelligence (Power BI with AI features) at GIFT University."
            },
            {
              title: "Docker Workshop",
              organization: "Students and Professionals",
              year: "2024",
              description: "Conducted hands-on Docker workshop for students and professionals."
            },
            {
              title: "Cloud Computing & Data Science Guest Speaker",
              organization: "Hi-IT Initiative, Punjab",
              year: "2024",
              description: "Guest Speaker: Cloud Computing & Data Science (Hi-IT Initiative, Punjab)."
            },
            {
              title: "Executive Assistant",
              organization: "WWF - Pakistan",
              year: "2023",
              description: "Executive Assistant at WWF - Pakistan, promoting environmental awareness."
            }
          ].map((honor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                    {honor.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-muted-foreground font-medium">{honor.organization}</span>
                    <span className="font-semibold text-primary-600 dark:text-primary-400">{honor.year}</span>
                  </div>
                  <p className="text-muted-foreground">{honor.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass-effect overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10"></div>
            <CardContent className="py-12 relative">
              <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Let's build something data‑driven</h3>
                  <p className="text-lg text-muted-foreground">Available for freelance projects, consulting, and training. Based in Pakistan, working globally.</p>
                </div>
                <div className="flex md:justify-end gap-4">
                  <a href={`mailto:${person.email}`}>
                    <Button size="lg" variant="gradient" className="rounded-xl">
                      <Mail className="w-5 h-5 mr-2"/>Contact Me
                    </Button>
                  </a>
                  <a href={person.linkedin} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="lg" className="rounded-xl">
                      <Linkedin className="w-5 h-5 mr-2"/>LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-muted-foreground border-t border-slate-200/20 dark:border-slate-700/20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-base">© {new Date().getFullYear()} {person.name}. Freelance Data Scientist • AI/ML • Big Data • Data Analytics.</p>
          <p className="mt-2">Transforming data into actionable insights, one algorithm at a time.</p>
        </div>
      </footer>
    </div>
    </>
  );
}
