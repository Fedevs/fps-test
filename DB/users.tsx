export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  transcript: string;
}

export const userList: User[] = [
  {
    id: 1,
    name: 'John Doe',
    age: 25,
    email: 'johndoe@email.com',
    transcript: `Speaker 0: Hello? Hi. This is Jane. I was hoping to speak with Trisha. 
        Speaker 1: Yes. This is her. 
        Speaker 0: Yes, ma'am. We just wanted to reach out to you. I'm not sure if you're aware, but you got nominated for the business innovation program from Y by Z. And we sent out some stuff in the mail. We wanted to know if you received it. 
        Speaker 1: Yes: I received it, this week. 
        Speaker 0: Oh, great. Great. Have you watched the Star Wars: Revenge of the Sith?
        Speaker 1: Yes.
        Speaker 0: Thank you for your time.`,
  },
  {
    id: 2,
    name: 'Jane Doe',
    age: 28,
    email: 'janedoe@email.com',
    transcript: `Speaker 0: Hello, this is Emily from BBB. I'm calling about your recent order. It looks like there may have been a delay with the delivery. Would you like me to check on the package's status?
        Speaker 1: Yes, please. I was expecting it yesterday and it hasn't arrived yet. 
        Speaker 0: Absolutely. Let me look into that... It appears the package is stuck at a sorting facility. I can try to expedite the delivery or issue a refund if you prefer. 
        Speaker 1: If you can get it here by tomorrow, that would be great. Otherwise, a refund would be fine. 
        Speaker 0: I'll do my best to have it delivered tomorrow. Thanks for your patience.`,
  },
  {
    id: 3,
    name: 'John Smith',
    age: 30,
    email: 'johnsmith@email.com',
    transcript: `Speaker 0: Hello, this is John from ZZZ's tech support. How can I help you?
        Speaker 1: Hi, my computer has been running very slowly and I'm getting some strange error messages. 
        Speaker 0: Okay, let's troubleshoot. Can you describe one of the error messages?
        Speaker 1: It says something about 'memory allocation error.'  
        Speaker 0: Got it. We may need to run some diagnostics and free up memory. Can I guide you through a few steps? 
        Speaker 1: Sure, that would be great.`,
  },
];
