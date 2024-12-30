import React from "react";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-green-500/90 to-emerald-600/90 text-gray-10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">
                Green Axis Agro Solutions
              </span>
            </div>
            <p className="text-green-100">
              Leading the transformation to regenerative agriculture for a
              sustainable future.
            </p>
            <div className="flex space-x-4">
              <SocialLink Icon={Facebook} href="#" label="Facebook" />
              <SocialLink Icon={Twitter} href="#" label="Twitter" />
              <SocialLink Icon={Linkedin} href="#" label="LinkedIn" />
              <SocialLink Icon={Instagram} href="#" label="Instagram" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Our Services</FooterLink>
              <FooterLink href="/impact">Our Impact</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <nav className="space-y-3">
              <FooterLink href="/services#training">
                Training Programs
              </FooterLink>
              <FooterLink href="/services#soil-analysis">
                Soil Analysis
              </FooterLink>
              <FooterLink href="/services#carbon-credits">
                Carbon Credits
              </FooterLink>
              <FooterLink href="/services#consulting">Consulting</FooterLink>
            </nav>
          </div>

          {/* Contact Info */}
          <Card className="bg-gradient-to-r from-green-500/90 to-emerald-600/90 border-none p-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <ContactInfo
                Icon={Mail}
                content="info@greenaxis.com"
                href="mailto:info@greenaxis.com"
              />
              <ContactInfo
                Icon={Phone}
                content="+260 972 808 600"
                href="tel:+260 972 808 600"
              />
              <ContactInfo
                Icon={Phone}
                content="+260 774 149 320"
                href="tel:+260 774 149 320"
              />

              <ContactInfo
                Icon={MapPin}
                content=" Suites 232, 222 and 225, 2nd Floor Plot 58, Goldman Building - Opp. Mulungushi Conference Centre
                        - Great East Road, Lusaka
                          Zambia"
              />
            </div>
          </Card>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-100">
              © {currentYear} Green Axis. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/sitemap">Sitemap</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="block text-green-100 hover:text-white transition-colors"
  >
    {children}
  </a>
);

const SocialLink = ({ Icon, href, label }) => (
  <a
    href={href}
    aria-label={label}
    className="h-8 w-8 flex items-center justify-center rounded-full bg-green-800 hover:bg-green-700 transition-colors"
  >
    <Icon className="h-4 w-4" />
  </a>
);

const ContactInfo = ({ Icon, content, href }) => (
  <div className="flex items-start space-x-3">
    <Icon className="h-5 w-5 flex-shrink-0 mt-1" />
    {href ? (
      <a
        href={href}
        className="text-green-100 hover:text-white transition-colors"
      >
        {content}
      </a>
    ) : (
      <span className="text-green-100">{content}</span>
    )}
  </div>
);

export default Footer;
