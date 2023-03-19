import React from "react";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import HeroSection from "./../components/HeroSection";
import TechnologySection from "./../components/TechnologySection";
import ServicesDetails from "../components/TechnologyDetails";
import BudgetFriendly from "../components/BudgetFriendly";
import Footer from "../components/Footer";
import { Container } from "@mui/material";
export default function Index() {
  return (
    <React.Fragment>
      <Container>
        <Navbar />
        <HeroSection />
      </Container>
      <ServicesSection />
      <TechnologySection />
      <ServicesDetails />
      <BudgetFriendly />
      <Footer />
    </React.Fragment>
  );
}
