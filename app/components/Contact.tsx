"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { personalInfo } from "../config";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="text-teal-400" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-teal-400" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="text-teal-400" />
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
                {personalInfo.linkedin}
              </a>
            </div>
          </div>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-teal-500 focus:outline-none"
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-teal-500 focus:outline-none"
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <textarea
              {...register("message")}
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-teal-500 focus:outline-none resize-none"
            />
            {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 hover:bg-teal-600 rounded-lg transition-colors"
          >
            Send Message
          </button>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center text-green-500"
            >
              Message sent successfully!
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
