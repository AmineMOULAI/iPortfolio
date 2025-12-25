import { useState } from "react";
import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!name.trim() || !message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Letter Sent", description: "Thank you for your message." });
    setName("");
    setMessage("");
  };

  return (
    <PageLayout pageNumber={20} sectionName="Letters">
      <div className="max-w-2xl mx-auto">
        <div className="border-b-2 border-foreground pb-2 mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-black uppercase">Letters to the Editor</h1>
        </div>

        {/* Letter Paper */}
        <div className="letter-paper border border-border p-8 relative min-h-[500px]">
          <p className="font-body text-lg mb-6">Dear Amine,</p>
          
          <p className="font-body mb-4">I came across your work and wanted to reach out.</p>
          
          <p className="font-body mb-4">My name is 
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b border-foreground bg-transparent mx-2 px-2 py-1 font-body w-48 focus:outline-none"
              placeholder="_______________"
            />
            and I am writing to say:
          </p>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-transparent font-body text-lg leading-relaxed resize-none focus:outline-none min-h-[200px] border-b border-border-light"
            placeholder="Write your message here..."
          />

          <p className="font-body mt-6">With regards,</p>
          <p className="font-body italic">{name || "Your Name"}</p>

          {/* Stamp */}
          <button 
            onClick={handleSubmit}
            className="absolute bottom-8 right-8 stamp w-20 h-24 flex items-center justify-center bg-background hover:bg-accent"
          >
            <span className="font-display text-xs uppercase tracking-wider text-center leading-tight">
              Send<br/>Letter
            </span>
          </button>
        </div>

        <div className="mt-8 pt-4 border-t border-border">
          <PageLink to="/" className="text-sm uppercase tracking-widest">← Front Page</PageLink>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
