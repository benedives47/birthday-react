const base = import.meta.env.BASE_URL;

export const siteData = {
  name: "Eca",
  shortName: "ECA",

  heroImage: `${base}photos/hero.jpeg`,
  music: `${base}music/birthday.mp3`,

  hero: {
    eyebrow: "Happy Birthday",
    title: "ECA",
    subtitle: "Today is a little celebration of you.",
    note: "One more birthday before I get to call you my wife. ❤️",
  },

  story: [
    {
      date: "A Beautiful Memory",
      title: "My Favorite Person 💗",
      image: `${base}photos/01.jpeg`,
      description:
        "Maybe this wasn't the first moment of our story, but it is one of the moments I would always choose to remember. Every picture with you reminds me how lucky I am to have you in my life.",
      sticker: "my favorite",
    },

    {
      date: "Us, Together",
      title: "Little Moments, Big Memories ✨",
      image: `${base}photos/15.jpeg`,
      description:
        "Some memories don't need a special occasion. Just being together, laughing, talking, and enjoying the little things is already enough to make an ordinary day feel special.",
      sticker: "our moments",
    },

    {
      date: "Our Pre-Wedding Chapter",
      title: "Before You Become My Wife 💍",
      image: `${base}photos/hero.jpg`,
      description:
        "And here we are, standing right before one of the biggest chapters of our lives. These pictures are more than just memories. They are a little reminder of the beginning of our forever.",
      sticker: "almost forever",
    },
  ],

  gallery: [
    {
      image: `${base}photos/01.jpeg`,
      caption: "My favorite person",
      rotate: -2,
    },

    {
      image: `${base}photos/16.jpeg`,
      caption: "One of my favorite memories",
      rotate: 2,
    },

    {
      image: `${base}photos/12.jpg`,
      caption: "Just you and me",
      rotate: -1,
    },

    {
      image: `${base}photos/09.jpeg`,
      caption: "Our little story",
      rotate: 3,
    },

    {
      image: `${base}photos/02.jpeg`,
      caption: "That beautiful smile",
      rotate: -3,
    },

    {
      image: `${base}photos/hero.jpg`,
      caption: "Almost our forever",
      rotate: 2,
    },
  ],
video: {
  title: "A Little Birthday Surprise 🎥",
  subtitle: "I made this little video just for you. ❤️",
  src: `${base}videos/birthday.mp4`,
},
  letter: {
    greeting: "Dear Eca,",

    paragraphs: [
      "Happy birthday to the woman who makes my life feel a little warmer, a little happier, and so much more meaningful.",

      "I hope this year brings you everything your heart deserves. More reasons to smile, more dreams to chase, more places for us to explore, and more little moments that we can keep as our own.",

      "And somehow, this birthday feels different. Because next week, you won't just be the woman I love. You will officially become my wife. ❤️",

      "We've already shared so many beautiful memories together, and now we're standing right before the beginning of something even bigger. I can't wait to see where life takes us, as long as I get to walk through it with you.",

      "Thank you for choosing me, for staying beside me, and for being the person I get to call mine. This little website is just a small way of saying how much you mean to me.",

      "Happy birthday, my love. Enjoy your day, smile as much as you can, and remember that someone out there is incredibly grateful to have you in his life.",
    ],

    sign: "With all my love,",
    signature: "Dwi ❤️",
  },

  gift: {
    title: "A Little Surprise",
    closedText: "Tap the gift to open it",

    openedTitle: "For My Almost-Wife 🎁",

    openedText:
      "The biggest gift isn't inside this box. It's the life we're about to build together. ❤️",

    buttonText: "Close the gift",
  },

  ending: {
    title: "Happy Birthday",

    name: "Eca ❤️",

    message:
      "This birthday is extra special because it comes just before the beginning of our forever. Next week, you become my wife, and I get to call you my family. I can't wait to make more memories, more stories, and more beautiful little moments with you. Happy birthday, my love. ❤️",
  },
};

export const colors = {
  strawberry: "#e9829f",
  strawberryLight: "#f9d8e2",
  strawberrySoft: "#fff0f4",

  matcha: "#9bb878",
  matchaDark: "#6f8f55",
  matchaSoft: "#eaf3df",

  cream: "#fffaf5",
  paper: "#fffdf8",

  cocoa: "#634d43",
  cocoaSoft: "#8c7469",
  ink: "#4f403a",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "story", label: "Story" },
  { id: "gallery", label: "Gallery" },
  { id: "letter", label: "Letter" },
  { id: "gift", label: "Gift" },
  { id: "ending", label: "Ending" },
];