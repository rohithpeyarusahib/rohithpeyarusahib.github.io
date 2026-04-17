"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../../config";

interface Message {
  sender: "ai" | "user";
  text: string;
}

const RESPONSES = {
  greetings: [
    "SYS.AI ONLINE. I am the infrastructure daemon for Database Engineer Rohith. State your query.",
    "Connection established. Awaiting input parameters regarding DBA capabilities."
  ],
  skills: [
    "Rohith masters high-availability (HA), disaster recovery (DR), and index tuning across MySQL, MongoDB, PostgreSQL, SQL Server, and Oracle.",
    "His tech stack centers on scalable Database Architecture, active-passive cross-cloud topologies, and advanced query optimization."
  ],
  experience: [
    "He operates as a seasoned Database Engineer managing massive clustered environments and zero-downtime replication networks.",
    "Years of operational telemetry indicate he is an expert in reducing query latency and architecting 99.999% uptime databases."
  ],
  contact: [
    `Direct Auth Handshake available. Email: ${personalInfo.email}. Phone_Vector: ${personalInfo.phone}.`,
    "Ping the admin directly via the Secure Handshake terminal at the bottom of the grid."
  ],
  identity: [
    "Rohith is the Database Engineer managing this node. He constructs high-end DBA portfolios.",
    "He is the Master Data Architect defining the rules of this WebGL infrastructure."
  ],
  specialty: [
    "Rohith brings unmatched architectural vision, optimizing raw query speed by over 400% on high-load data shards.",
    "Unlike standard DBAs, he bridges deeply analytical backend infrastructure with high-fidelity frontend topology architectures."
  ],
  training_ack: [
    "Neural weights updated. Information stored in local access memory.",
    "Training protocol accepted. Synthesizing new data vectors."
  ],
  fallback: [
    "Input string unparsed. I am restricted to telemetry regarding Database Engineering, Skills, Contact, or Experience. Please refine query.",
    "Query parameters out of bounds. Ask me about Rohith's DBA skills, tech stack, or operational history.",
    "Error 422: Unprocessable Entity. I only hold records of sys-admin capabilities and project architectures."
  ]
};

const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "ai", text: "SYS.AI ONLINE. State your inquiry regarding the Database Engineer. (Tip: You can teach me by typing 'train: question = answer')" }
  ]);
  const [input, setInput] = useState("");
  const [neuralMemory, setNeuralMemory] = useState<Record<string, string>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load local neural training memory
    const existingMem = localStorage.getItem("sys_bot_memory");
    if (existingMem) {
      setNeuralMemory(JSON.parse(existingMem));
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");

    // Advanced Regex / Fuzzy Matcher / Local Memory Link
    setTimeout(() => {
      const lowerInput = userMsg.toLowerCase();
      let response = "";

      // 1. Check for Training Protocol Phase
      if (lowerInput.startsWith("train:")) {
        const trainData = userMsg.substring(6).split("=");
        if (trainData.length === 2) {
           const trigger = trainData[0].trim().toLowerCase();
           const answer = trainData[1].trim();
           
           const newMemory = { ...neuralMemory, [trigger]: answer };
           setNeuralMemory(newMemory);
           localStorage.setItem("sys_bot_memory", JSON.stringify(newMemory));
           
           response = getRandom(RESPONSES.training_ack);
        } else {
           response = "Training syntax error. Please use format: 'train: <question> = <answer>'.";
        }
      } 
      // 2. Deep Local Memory Match
      else if (Object.keys(neuralMemory).some(key => lowerInput.includes(key))) {
        const matchedKey = Object.keys(neuralMemory).find(key => lowerInput.includes(key));
        response = neuralMemory[matchedKey!];
      }
      // 3. Regex Hardcoded Taxonomy
      else if (/\b(hi|hello|hey|start|greetings|wake|up)\b/.test(lowerInput)) {
        response = getRandom(RESPONSES.greetings);
      } else if (/\b(why|special|prefer|hire|choose|reason|unique|standout|different)\b/.test(lowerInput)) {
        response = getRandom(RESPONSES.specialty);  
      } else if (/\b(skill|skills|tech|stack|know|database|language|tool|software|proficiency)\b/.test(lowerInput)) {
        response = getRandom(RESPONSES.skills);
      } else if (/\b(experience|year|years|long|work|job|role|career)\b/.test(lowerInput)) {
        response = getRandom(RESPONSES.experience);
      } else if (/\b(contact|email|reach|hire|phone|call|message|number)\b/.test(lowerInput)) {
        response = getRandom(RESPONSES.contact);
      } else if (/\b(who|name|rohith|about|self|admin)\b/.test(lowerInput)) {
        response = getRandom(RESPONSES.identity);
      } else {
        response = getRandom(RESPONSES.fallback);
      }

      setMessages((prev) => [...prev, { sender: "ai", text: response }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9900] w-14 h-14 bg-white border-2 border-black flex items-center justify-center rounded-none shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:bg-[#111] hover:border-white transition-colors group mix-blend-difference"
      >
        <span className="text-black font-mono font-bold text-xs group-hover:text-white">&gt;_</span>
      </button>

      {/* Terminal Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-24 right-6 md:right-10 z-[9900] w-[90vw] md:w-[400px] h-[500px] bg-black border-[0.5px] border-white/30 flex flex-col shadow-[0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-3 text-[10px] font-mono text-white/50 uppercase tracking-widest border-b border-white/10 bg-[#050505]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> 
                Terminal_Assistant v2.0
              </span>
              <button onClick={() => setIsOpen(false)} className="hover:text-white hover:bg-white/10 px-2 py-1 transition-colors border border-transparent hover:border-white/20">Terminate(X)</button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 font-mono text-xs">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 border-[0.5px] ${msg.sender === "user" ? "bg-white text-black border-transparent" : "bg-transparent text-white border-white/20"} leading-relaxed tracking-wide`}>
                    {msg.sender === "ai" && <span className="text-white/40 block mb-1 text-[8px] uppercase tracking-widest">SYS.AI &gt;</span>}
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */ }
            <form onSubmit={handleSend} className="p-3 border-t border-white/10 flex bg-[#020202]">
              <span className="text-white/50 font-mono py-2 pr-2">&gt;_</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Query database..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs placeholder:text-white/20"
              />
              <button type="submit" className="px-4 py-2 border border-white/20 text-white font-mono text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors">Execute</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
