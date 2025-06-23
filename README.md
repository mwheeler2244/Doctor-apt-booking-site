# Doctor With You - Medical Appointment Booking Platform

A modern, responsive healthcare platform that connects patients with medical professionals through an intuitive appointment booking system.

## 🌐 Live Demo

**Deployed on Vercel:** [Add your Vercel URL here]

## ✨ Features

### 🏥 Core Functionality

- **Doctor Profiles**: Browse detailed profiles of medical specialists with ratings, specialties, and bio information
- **Smart Appointment Booking**: Intuitive date and time selection with conflict detection
- **Real-time Messaging**: Direct communication system between patients and doctors
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

### 🎨 User Experience

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Notifications**: Real-time toast notifications for user feedback
- **Mobile-First Design**: Seamless experience across all device sizes
- **Accessibility**: Built with accessibility best practices

### 🔧 Technical Features

- **Component Architecture**: Well-organized, reusable React components
- **TypeScript**: Full type safety throughout the application
- **State Management**: Custom hooks for centralized state management
- **Animation**: Smooth Framer Motion animations for enhanced user experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Font**: Lato (Google Fonts)
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mwheeler2244/Doctor-apt-booking-site.git
   cd Doctor-apt-booking-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application

## 📱 Application Structure

```
app/
├── components/           # Reusable UI components
│   ├── Navigation.tsx    # Header and navigation
│   ├── HeroSection.tsx   # Landing section
│   ├── FeaturesSection.tsx
│   ├── SpecialistsSection.tsx
│   ├── AppointmentModal.tsx
│   ├── MessageModal.tsx
│   └── ...
├── hooks/               # Custom React hooks
│   └── useAppState.ts   # Centralized state management
├── types/               # TypeScript type definitions
│   └── index.ts
└── page.tsx            # Main application component
```

## 🎯 Key Components

### State Management

- **useAppState Hook**: Centralized state management for doctors, appointments, messages, and UI state
- **Custom Hooks**: Reusable logic for form handling and data management

### UI Components

- **Responsive Navigation**: Mobile-friendly header with dropdown notifications
- **Interactive Modals**: Appointment booking and messaging interfaces
- **Animated Sections**: Smooth page transitions and hover effects

## 📸 Screenshots

_Add screenshots of your application here_

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Payment integration
- [ ] Video consultation features
- [ ] Prescription management
- [ ] Electronic health records integration
- [ ] Multi-language support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@mwheeler2244](https://github.com/mwheeler2244)
- Project Link: [https://github.com/mwheeler2244/Doctor-apt-booking-site](https://github.com/mwheeler2244/Doctor-apt-booking-site)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Unsplash for placeholder images

---

**Built with ❤️ using Next.js and TypeScript**
