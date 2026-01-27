import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

const RegisterSuccess = () => {
  const navigate = useNavigate();
  const [eventTitle, setEventTitle] = useState("");

  useEffect(() => {
    const title = sessionStorage.getItem("registrationEventTitle");
    const eventId = sessionStorage.getItem("registrationEventId");

    if (title && eventId) {
      setEventTitle(title);

      // mark as registered
      const registered =
        JSON.parse(sessionStorage.getItem("registeredEvents") || "[]");

      if (!registered.includes(eventId)) {
        registered.push(eventId);
        sessionStorage.setItem(
          "registeredEvents",
          JSON.stringify(registered)
        );
      }
    }

    // 🎉 CONFETTI BLAST
    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 120,
        origin: { y: 0.4 },
      });
    }, 500);
  }, []);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="glass-card p-10 rounded-2xl max-w-md w-full text-center space-y-6 animate-fade-in">
          
          {/* Animated Tick */}
          <div className="flex justify-center">
            <CheckCircle
              size={90}
              className="text-green-500 animate-scale-in"
            />
          </div>

          <h1 className="font-samarkan text-3xl neon-green">
            Registration Successful!
          </h1>

          <p className="text-muted-foreground text-lg">
            You have successfully registered for
          </p>

          <p className="text-primary text-xl font-semibold">
            {eventTitle}
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => navigate("/day-1")}
            >
              Back to Events
            </Button>
          </div>

          <p className="text-xs text-muted-foreground pt-2">
            AAVISHKAAR 2026 • See you at the event 🚀
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterSuccess;
