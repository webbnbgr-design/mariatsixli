/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Scale, 
  Briefcase, 
  Users, 
  HeartPulse, 
  ShieldCheck, 
  Menu, 
  X,
  Map as MapIcon,
  Quote
} from 'lucide-react';

const COLORS = {
  royalBlue: '#002366',
  offWhite: '#f8fafc',
  slateGray: '#708090',
};

const NAV_LINKS = [
  { name: 'Αρχική', href: '#home' },
  { name: 'Η Δικηγόρος', href: '#profile' },
  { name: 'Εξειδίκευση', href: '#expertise' },
  { name: 'Μαρτυρίες', href: '#testimonials' },
  { name: 'Επικοινωνία', href: '#contact' },
];

const EXPERTISE = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Εργατικό Δίκαιο & Συντάξεις',
    description: 'Εξειδικευμένη υποστήριξη σε εργασιακά δικαιώματα, διεκδικήσεις δεδουλευμένων και πλήρη καθοδήγηση για τη διαδικασία συνταξιοδότησης.',
    highlight: true,
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Αστικό & Οικογενειακό Δίκαιο',
    description: 'Διαχείριση υποθέσεων διαζυγίου, επιμέλειας τέκνων, κληρονομικών ζητημάτων και διαφορών ακινήτων.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Προστασία από Κατασχέσεις',
    description: 'Νομική θωράκιση της κύριας κατοικίας, ρυθμίσεις οφειλών και διαπραγματεύσεις με τραπεζικά ιδρύματα.',
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: 'Ιατρική Αμέλεια',
    description: 'Εκπροσώπηση σε περιπτώσεις ιατρικών σφαλμάτων και διεκδίκηση αποζημιώσεων για σωματική βλάβη ή ηθική βλάβη.',
  },
];

const TESTIMONIALS = [
  {
    text: "Η κα Τσίχλη είναι υπόδειγμα επαγγελματία. Με βοήθησε σε μια δύσκολη υπόθεση συνταξιοδότησης με απόλυτη επιτυχία. Η ευγένειά της και η κατάρτισή της είναι αξιοσημείωτες.",
    author: "Γιώργος Π.",
    rating: 5,
  },
  {
    text: "Άμεση ανταπόκριση και ειλικρίνεια. Αισθάνθηκα ασφάλεια από την πρώτη στιγμή που επισκέφθηκα το γραφείο της.",
    author: "Μαρία Κ.",
    rating: 5,
  },
  {
    text: "Εξαιρετική δικηγόρος με βαθιά γνώση του εργατικού δικαίου. Την προτείνω ανεπιφύλακτα για οποιοδήποτε νομικό ζήτημα.",
    author: "Κώστας Α.",
    rating: 5,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('#home')}>
            <Scale className={`w-8 h-8 ${scrolled ? 'text-royal-blue' : 'text-royal-blue'}`} />
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-xl leading-none ${scrolled ? 'text-royal-blue' : 'text-royal-blue'}`}>
                Μαίρη Αντ. Τσίχλη
              </span>
              <span className={`text-[10px] uppercase tracking-widest font-medium ${scrolled ? 'text-slate-gray' : 'text-slate-gray'}`}>
                Δικηγόρος Καλαμάτα
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium hover:text-royal-blue transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-royal-blue transition-all group-hover:w-full" />
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="btn-primary py-2 px-5 text-sm"
            >
              Επικοινωνία
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-royal-blue" /> : <Menu className="text-royal-blue" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-b border-gray-100 py-6 md:hidden shadow-xl"
            >
              <div className="flex flex-col items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-lg font-medium"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden bg-off-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-royal-blue/5 -skew-x-12 transform translate-x-20" />
        
        <div className="section-container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-blue/10 text-royal-blue text-xs font-bold uppercase tracking-wider">
              <Scale className="w-3 h-3" />
              Νομική Υποστήριξη Υψηλού Επιπέδου
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-royal-blue leading-tight mb-6">
              Συνέπεια στην πράξη, <br />
              <span className="italic font-normal">αποτελεσματικότητα</span> στο δίκαιο.
            </h1>
            <p className="text-lg text-slate-gray mb-10 max-w-lg leading-relaxed">
              Εξειδικευμένο δικηγορικό γραφείο στην Καλαμάτα, με πολυετή εμπειρία και προσωπική προσέγγιση σε κάθε υπόθεση. Δεσμευόμαστε για τη λεπτομερή προστασία των δικαιωμάτων σας.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-primary text-lg"
              >
                Προγραμματίστε μια διαβούλευση
              </button>
              <button 
                onClick={() => scrollToSection('#expertise')}
                className="px-6 py-3 border border-royal-blue text-royal-blue font-medium rounded-sm hover:bg-royal-blue hover:text-white transition-all flex items-center gap-2"
              >
                Οι Τομείς μας <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5] bg-royal-blue/10 rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
               <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Scale className="w-64 h-64 text-royal-blue" />
               </div>
               <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-royal-blue/20 to-transparent">
                  <div className="p-6 bg-white shadow-lg rounded-xl">
                    <p className="text-sm font-medium text-slate-gray italic mb-2">"Κάθε υπόθεση είναι μοναδική. Η επιτυχία κρύβεται στη λεπτομέρεια και την απόλυτη συνέπεια."</p>
                    <p className="font-serif font-bold text-royal-blue">— Μαίρη Αντ. Τσίχλη</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialization Highlight (Recent News/Active Status) */}
      <section className="bg-white border-y border-gray-100">
         <div className="max-w-7xl mx-auto px-4 py-12 flex flex-wrap justify-around items-center gap-8">
            <div className="group text-center basis-full md:basis-auto">
               <div className="text-3xl font-bold text-royal-blue mb-1">15+</div>
               <div className="text-xs uppercase tracking-widest text-slate-gray font-semibold">Έτη Εμπειρίας</div>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block" />
            <div className="group text-center basis-full md:basis-auto">
               <div className="text-3xl font-bold text-royal-blue mb-1">1000+</div>
               <div className="text-xs uppercase tracking-widest text-slate-gray font-semibold">Υποθέσεις</div>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block" />
            <div className="group text-center basis-full md:basis-auto">
               <div className="text-3xl font-bold text-royal-blue mb-1">5/5</div>
               <div className="text-xs uppercase tracking-widest text-slate-gray font-semibold">Αξιολογήσεις</div>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block" />
            <div className="group text-center basis-full md:basis-auto">
               <div className="text-3xl font-bold text-royal-blue mb-1">24/7</div>
               <div className="text-xs uppercase tracking-widest text-slate-gray font-semibold">Υποστήριξη</div>
            </div>
         </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="bg-off-white py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-royal-blue mb-4">Τομείς Εξειδίκευσης</h2>
            <div className="w-20 h-1.5 bg-royal-blue mx-auto mb-6" />
            <p className="text-slate-gray max-w-2xl mx-auto">
              Παρέχουμε ολοκληρωμένες νομικές υπηρεσίες με έμφαση στην αποτελεσματικότητα και τη δικαιοσύνη.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {EXPERTISE.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`p-8 bg-white border border-gray-100 shadow-sm transition-all hover:shadow-xl ${item.highlight ? 'border-t-4 border-t-royal-blue' : ''}`}
              >
                <div className="text-royal-blue mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-royal-blue mb-4 leading-tight">{item.title}</h3>
                <p className="text-slate-gray text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="bg-white py-24">
        <div className="section-container grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-royal-blue" />
             <div className="p-4 bg-gray-50 rounded-sm">
                <div className="aspect-[3/4] bg-royal-blue/5 rounded-sm flex items-center justify-center">
                   {/* This is a placeholder for a photo, using an icon as requested 'not a lot of photos' */}
                   <Scale className="w-32 h-32 text-royal-blue opacity-20" />
                </div>
             </div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-royal-blue" />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-royal-blue mb-6">Μαίρη Αντ. Τσίχλη</h2>
            <h4 className="text-lg font-medium text-slate-gray mb-8 italic uppercase tracking-wider">Μάχιμη Δικηγόρος</h4>
            
            <div className="space-y-6 text-slate-gray leading-relaxed">
              <p>
                Απόφοιτος της Νομικής Σχολής του Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών (ΕΚΠΑ), η Μαίρη Τσίχλη διαγράφει μια επιτυχημένη πορεία στον νομικό χώρο της Μεσσηνίας.
              </p>
              <p>
                Με έδρα την <span className="font-bold text-royal-blue">Καλαμάτα</span>, έχει χειριστεί πλήθος υποθέσεων με έμφαση στο <span className="font-bold">Εργατικό Δίκαιο και τις Συντάξεις</span>, τομείς που απαιτούν υψηλή εξειδίκευση και συνεχή ενημέρωση των νομοθετικών αλλαγών.
              </p>
              <p>
                Η φιλοσοφία της βασίζεται στην προσωπική επαφή με τον πελάτη. Κάθε υπόθεση δεν είναι απλώς ένας αριθμός, αλλά μια ανθρώπινη ιστορία που απαιτεί σεβασμό, ειλικρίνεια και μαχητικότητα για την επίτευξη του βέλτιστου αποτελέσματος.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-royal-blue py-24 text-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Είπαν για εμάς</h2>
            <div className="w-20 h-1.5 bg-white/30 mx-auto mb-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 p-8 rounded-sm backdrop-blur-sm border border-white/10"
              >
                <Quote className="w-10 h-10 text-white/20 mb-6" />
                <p className="italic mb-8 text-lg leading-relaxed">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold tracking-wider">{t.author}</span>
                  <div className="flex text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-off-white py-24">
        <div className="section-container grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-royal-blue mb-8">Επικοινωνία</h2>
            <p className="text-slate-gray mb-12">
              Βρισκόμαστε στη διάθεσή σας για οποιαδήποτε νομική συμβουλή ή εκπροσώπηση. Μη διστάσετε να επικοινωνήσετε μαζί μας.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-royal-blue rounded-sm text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-royal-blue uppercase text-xs tracking-widest mb-1">Τηλέφωνο</h4>
                  <p className="text-xl font-medium tracking-tighter">2721 092502</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-royal-blue rounded-sm text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-royal-blue uppercase text-xs tracking-widest mb-1">Email</h4>
                  <p className="text-xl font-medium">mairy_tsichli@yahoo.gr</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-royal-blue rounded-sm text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-royal-blue uppercase text-xs tracking-widest mb-1">Διεύθυνση</h4>
                  <p className="text-xl font-medium">Ανδρέα Σκιά 21, Καλαμάτα</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
               <a 
                href="tel:2721092502"
                className="btn-primary flex items-center gap-2"
               >
                 <Phone className="w-4 h-4" /> Κλήση Τώρα
               </a>
               <a 
                href="https://www.google.com/maps/search/?api=1&query=Ανδρέα+Σκιά+21,+Καλαμάτα"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border border-royal-blue text-royal-blue font-medium rounded-sm hover:shadow-lg transition-all flex items-center gap-2"
               >
                 <MapIcon className="w-4 h-4" /> Οδηγίες Χάρτη
               </a>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto min-h-[400px] bg-gray-200 shadow-inner rounded-sm overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
             {/* Map Placeholder - Normally iframe but keeping it clean with an interactive CTA overlay */}
             <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <MapPin className="w-16 h-16 text-royal-blue mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-royal-blue mb-4">Βρείτε μας στον Χάρτη</h3>
                <p className="text-slate-gray mb-8 max-w-xs">Ανδρέα Σκιά 21, Καλαμάτα (Κέντρο)</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Ανδρέα+Σκιά+21,+Καλαμάτα"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Άνοιγμα στο Google Maps
                </a>
             </div>
             <div className="w-full h-full bg-slate-100 opacity-50 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/22.1105,37.0391,15,0/600x600?access_token=none')] bg-cover bg-center"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-royal-blue" />
            <span className="font-serif font-bold text-lg text-royal-blue">Μαίρη Αντ. Τσίχλη</span>
          </div>
          
          <p className="text-slate-gray text-xs uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} Δικηγορικό Γραφείο Μαίρη Αντ. Τσίχλη. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
