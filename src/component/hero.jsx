import React, { useState } from "react";
import { motion } from "framer-motion";
import passport from "../assets/passport-photograph.jpg";
import { fadeIn, textVariant } from "../ultils/motion";
import emailjs from "emailjs-com";
import coloradoSmallBusBadge from "../assets/colorado_smallbusiness_badge.png";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email!");
      return;
    }

    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(
        "service_4grklhy",
        "template_ufvkrai",
        templateParams,
        "fQumWAVplS6YHb3Dv",
      )
      .then(() => {
        setMessage("Email sent successfully!");
        setEmail("");
      })
      .catch(() => {
        setMessage("Failed to send email. Try again.");
      });
  };

  return (
    <section
      id="home"
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8"
    >
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* Badge */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className="flex items-center gap-10 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
            <span className="text-black group-hover:text-amber-400 group-hover:scale-110 transition-transform">
              ★
            </span>
            <span className="text-sm font-medium">
              Grow your business today!
            </span>
            <span className="text-black group-hover:text-amber-400 group-hover:scale-110 transition-transform">
            <a
              className="text-black"
              href="https://www.coloradosmallbusiness.org/"
              aria-label="Verified on ColoradoSmallBusiness.org"
              title="Verified on ColoradoSmallBusiness.org"
            >
              <img
                src={coloradoSmallBusBadge}
                alt="Trusted Local Business — Verified by ColoradoSmallBusiness.org"
                width="200"
                height="50"
              />
            </a>
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight"
        >
          Kartiqo Tech delivers expert services in Data Analysis
          <span className="text-black relative inline-block">
            {" "}
            Frontend Development, Virtual Assistance
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-200/60"></span>{" "}
          and Python Development.
          <motion.span
            className="inline-block ml-2"
            animate={{ rotate: [0, 20, 0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          >
            👋
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          Get the right services for your business, at a fraction of the cost
          today - all within a few clicks!
        </motion.p>

        {/* Email Input */}
        <motion.form
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-600 focus:ring-blue-100 transition-all"
          />
          <button className="bg-gray-600 text-white px-8 py-4 rounded-xl hover:bg-amber-300 cursor-pointer transition-all hover:shadow-lg">
            →
          </button>
          {message && <p className="text-center mt-2 text-sm">{message}</p>}
        </motion.form>
      </div>

      {/* Right Column */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12 flex items-center"
      >
        <div className="relative">
          <img
            src={passport}
            alt="passport-photograph"
            className="rounded-lg relative z-10 hover:scale-105 transition-transform duration-300 object-cover"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,20), rgba(0,0,0,0))",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0))",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
