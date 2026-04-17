"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
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
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto border-t border-white/10 font-mono mb-20 relative">
      {/* Background glitch line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5 -z-10" />

      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mix-blend-difference mb-2">Encrypted <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Handshake</span></h2>
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase border border-white/20 px-2 py-1 bg-white/5 inline-block">Secure_Ping_Request</span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div>
            <h3 className="text-[10px] text-white/50 uppercase tracking-[0.4em] mb-8 border-b border-white/10 pb-2">Direct_Node_Access</h3>
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-white/30">Email_Protocol</span>
                <span className="text-sm font-bold text-white tracking-wider">{personalInfo.email}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-white/30">Voice_Protocol</span>
                <span className="text-sm font-bold text-white tracking-wider">{personalInfo.phone}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-white/30">Link_Protocol</span>
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white tracking-wider hover:text-white/50 transition-colors uppercase">
                  Sys.Profile.LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0 p-4 border border-white/10 bg-white/5 text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
            &gt; Notice: All transmissions are end-to-end encrypted. Standard reply latency: 24_HOURS.
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-black border-[0.5px] border-white/20 p-6 md:p-8 flex flex-col gap-6 shadow-[0_0_30px_rgba(255,255,255,0.02)] relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md z-10 flex flex-col items-center justify-center border border-white/30"
            >
              <div className="w-12 h-12 border-y-2 border-white rounded-full animate-spin mb-4" />
              <span className="text-white text-xs uppercase tracking-widest font-mono">Transmission Sent.</span>
            </motion.div>
          )}

          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-white animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-white/50">Compose Payload</span>
          </div>

          <div>
            <input
              {...register("name")}
              type="text"
              placeholder="Ident_String (Name)"
              className="w-full p-4 bg-transparent border-b border-white/20 focus:border-white focus:outline-none text-xs text-white placeholder:text-white/20 tracking-widest uppercase transition-colors"
            />
            {errors.name && <p className="text-red-500 mt-2 text-[10px] uppercase tracking-widest">{errors.name.message}</p>}
          </div>
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Return_Vector (Email)"
              className="w-full p-4 bg-transparent border-b border-white/20 focus:border-white focus:outline-none text-xs text-white placeholder:text-white/20 tracking-widest uppercase transition-colors"
            />
            {errors.email && <p className="text-red-500 mt-2 text-[10px] uppercase tracking-widest">{errors.email.message}</p>}
          </div>
          <div>
            <textarea
              {...register("message")}
              placeholder="Enter Data Payload..."
              rows={4}
              className="w-full p-4 bg-transparent border-b border-white/20 focus:border-white focus:outline-none text-xs text-white placeholder:text-white/20 tracking-widest uppercase transition-colors resize-none"
            />
            {errors.message && <p className="text-red-500 mt-2 text-[10px] uppercase tracking-widest">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-4 mt-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#222] hover:text-white hover:border-white border border-transparent transition-all"
          >
            Transmit Data
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
