const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-wide text-charcoal/40 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-charcoal/50">
          &copy; 2025 Sukhwinder Singh. All rights reserved.
        </p>
        <p className="text-xs text-charcoal/30">Website by Gagan</p>
      </div>
    </footer>
  );
}
