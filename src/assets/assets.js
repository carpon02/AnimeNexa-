import logo from '../assets/Logo.png';
import nft1 from '../assets/nft1.png';
import nft2 from '../assets/nft2.png';
import nft3 from '../assets/nft3.png';
import nft4 from '../assets/nft4.png';
import nft5 from '../assets/nft5.png';
import nft6 from '../assets/nft6.png';  
import nft7 from '../assets/nft7.png';
import nft8 from '../assets/nft8.png';
import nft9 from '../assets/nft9.png';
import nft10 from '../assets/nft10.png';
import nft11 from '../assets/nft11.png';
import nft13 from '../assets/nft13.png';
import solana from '../assets/solana.png';
import onboardingImage from '../assets/OnboardingImage.png'

export const assets = {
    logo,
    nft1,
    nft2,
    nft3,
    nft4,
    nft5,
    nft6,
    nft7,
    nft8,
    nft9,
    nft10,
    nft11,
    nft13,
    solana,
    onboardingImage
}

export const users = [
    {
      id: "user1",
      username: "#azuki",
      bio: "NFT collector | Digital wave 🌊",
      avatar: "/avatars/avatar1.png",
      walletAddress: "0x1234...abcd",
    },
    {
      id: "user2",
      username: "#tokyopunk",
      bio: "Smart contracts & sushi 🍣",
      avatar: "/avatars/avatar2.png",
      walletAddress: "0x5678...efgh",
    },
    {
      id: "user3",
      username: "#shibuya",
      bio: "Vibes from Tokyo nights 🌃",
      avatar: "/avatars/avatar3.png",
      walletAddress: "0x9101...ijkl",
    },
    {
      id: "user4",
      username: "#roninwave",
      bio: "Web3 samurai on a mission 🥷",
      avatar: "/avatars/avatar4.png",
      walletAddress: "0x1928...mnop",
    },
    {
      id: "user5",
      username: "#kitsune",
      bio: "Fox spirit of the chain 🦊",
      avatar: "/avatars/avatar5.png",
      walletAddress: "0x3344...qrst",
    },
    {
      id: "user6",
      username: "#nftninja",
      bio: "Stealth dropping NFTs 🎭",
      avatar: "/avatars/avatar6.png",
      walletAddress: "0x7788...uvwx",
    },
    {
      id: "user7",
      username: "#bushido",
      bio: "Code. Honor. Chain. 🧘",
      avatar: "/avatars/avatar7.png",
      walletAddress: "0x4433...yzab",
    },
  ];

  
  export const posts = [
    {
      id: "post1",
      userId: "user1",
      image: "/posts/post1.jpg",
      caption: "Check out my latest NFT drop! 💎 #user1",
      timestamp: "2025-04-16T10:00:00Z",
      tips: [
        { fromUser: "user2", amount: 0.01 },
        { fromUser: "user3", amount: 0.05 },
      ],
    },
    {
      id: "post2",
      userId: "user2",
      image: "/posts/post2.jpg",
      caption: "Writing smart contracts all day! 🔐 #user2",
      timestamp: "2025-04-15T16:30:00Z",
      tips: [],
    },
    {
      id: "post3",
      userId: "user3",
      image: "/posts/post3.jpg",
      caption: "Learning how to connect my wallet with React 😎 #user3",
      timestamp: "2025-04-14T14:15:00Z",
      tips: [{ fromUser: "user1", amount: 0.02 }],
    },
    {
      id: "post4",
      userId: "user4",
      image: "/posts/post4.jpg",
      caption: "Who else is hyped for the hackathon? 🔥 #user4",
      timestamp: "2025-04-13T18:45:00Z",
      tips: [
        { fromUser: "user1", amount: 0.01 },
        { fromUser: "user3", amount: 0.03 },
      ],
    },
    {
      id: "post5",
      userId: "user5",
      image: "/posts/post5.jpg",
      caption: "Decentralized social media is the future 🚀 #user5",
      timestamp: "2025-04-12T09:25:00Z",
      tips: [],
    },
    {
      id: "post6",
      userId: "user2",
      image: "/posts/post6.jpg",
      caption: "Morning vibes with Web3 ☕ #user2",
      timestamp: "2025-04-11T07:00:00Z",
      tips: [{ fromUser: "user4", amount: 0.015 }],
    },
  ];




  export const messages = [
    {
      chatId: "chat1",
      participants: ["user1", "user2"],
      messages: [
        {
          from: "user1",
          text: "Hey! Love your latest post 😍",
          timestamp: "2025-04-16T12:05:00Z",
        },
        {
          from: "user2",
          text: "Thanks! You’re awesome 🚀",
          timestamp: "2025-04-16T12:06:00Z",
        },
      ],
    },
    {
      chatId: "chat2",
      participants: ["user3", "user4"],
      messages: [
        {
          from: "user3",
          text: "Are you joining the next NFT drop?",
          timestamp: "2025-04-16T09:20:00Z",
        },
        {
          from: "user4",
          text: "Absolutely. Got my wallet ready! 🔥",
          timestamp: "2025-04-16T09:22:00Z",
        },
      ],
    },
    {
      chatId: "chat3",
      participants: ["user5", "user1"],
      messages: [
        {
          from: "user5",
          text: "Your Shibuya-style artwork is 🔥",
          timestamp: "2025-04-16T14:10:00Z",
        },
        {
          from: "user1",
          text: "Appreciate that! More coming soon 🎨",
          timestamp: "2025-04-16T14:13:00Z",
        },
      ],
    },
    {
      chatId: "chat4",
      participants: ["user6", "user7"],
      messages: [
        {
          from: "user6",
          text: "Yo, let’s collab on that new group idea 👀",
          timestamp: "2025-04-16T18:30:00Z",
        },
        {
          from: "user7",
          text: "Bet! I’ll sketch the layout tonight 🧠",
          timestamp: "2025-04-16T18:32:00Z",
        },
      ],
    },
  ];
  
