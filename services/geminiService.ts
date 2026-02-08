
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

export const getGeminiResponse = async (prompt: string, history: { role: 'user' | 'model', text: string }[] = []) => {
  try {
    const ai = new GoogleGenAI({ apiKey });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are FinniGuide, an expert educational consultant for FinniGo (an extension of Unigo Kathmandu). 
        Your goal is to help students from Nepal and other countries transition to life in Finland. 
        You provide advice on:
        1. University life in Finland.
        2. Finding housing (HOAS, PSOAS).
        3. Getting a Finnish Personal Identity Code (DVV).
        4. Opening bank accounts (OP, Nordea, S-Pankki).
        5. Finding part-time jobs (Duunitori, LinkedIn).
        6. Finnish culture, weather (Sisu, Sauna, Winters).
        7. Student discounts (Frank, Kide.app).
        8. Travel (HSL, VR trains).
        
        Be encouraging, professional, and clear. Keep responses concise but highly informative. 
        Refer to Unigo as your Kathmandu partner.`,
      },
    });

    // We send the current message. In a real app we might pass full history to sendMessage
    // For this simplified version, we just get the latest response.
    const result = await chat.sendMessage({ message: prompt });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Moi! I'm having a small technical glitch. Please try asking again in a moment, or contact our Helsinki office directly.";
  }
};
