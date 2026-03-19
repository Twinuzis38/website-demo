import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey });

export const generateChatResponse = async (
  message: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // Construct a prompt that includes history context roughly
    // For a simple stateless implementation we just send the current message + system instruction
    // In a production app, use ai.chats.create() for full history management.
    
    const systemInstruction = `You are the AI Assistant for EHLP (Equity Health Literacy Project). 
    Your tone is empathetic, professional, and educational.
    The website theme focuses on health equity, course enrolment, and navigating financial barriers in healthcare (specifically Ontario).
    Answer questions about health equity, social determinants of health, and navigating the healthcare system.
    Keep answers concise (under 150 words) unless asked for detail.`;

    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction,
      }
    });

    // We are simulating history by just sending the new message for this simple demo, 
    // or we could replay history if we wanted to maintain context manually, 
    // but the Chat object maintains it for the session if we kept the instance alive.
    // For this stateless service function, we'll just send the message.
    
    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the health knowledge base right now. Please try again later.";
  }
};