export const LogoMark = ({ size = 32, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="SSK TI ANODE Engineering logo">
    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
    <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
    <ellipse cx="16" cy="16" rx="4" ry="10" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" transform="rotate(30 16 16)" />
    <ellipse cx="16" cy="16" rx="4" ry="10" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" transform="rotate(-30 16 16)" />
    <circle cx="16" cy="10" r="2.5" fill="currentColor" />
    <circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.6" />
  </svg>
);

export const ArrowRight = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

export const ArrowDown = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
);

export const ArrowUp = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
);

export const ChevronDown = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9l6 6 6-6"/></svg>
);

export const Hamburger = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
);

export const CloseX = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
);

export const WhatsAppIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

export const CheckCircle = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}><circle cx="12" cy="12" r="10" fill="#00C2A8"/><path d="M8 12l2.5 2.5L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export const AlertTriangle = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
);

export const FlameIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-15 0c0-1.723.525-3.358 1.42-4.748C5.16 11.363 6.14 10.77 7 10c.86.77 1.5 1.607 1.5 4.5z"/></svg>
);

export const BrokenWrench = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/><line x1="3" y1="21" x2="8" y2="16"/></svg>
);

export const SkinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 00-2-2v0a2 2 0 00-2 2v0"/><path d="M14 10V4a2 2 0 00-2-2v0a2 2 0 00-2 2v2"/><path d="M10 10.5V6a2 2 0 00-2-2v0a2 2 0 00-2 2v8"/><path d="M18 8a2 2 0 012 2v4a6 6 0 01-6 6h0c-2.4 0-4.4-1.4-5.4-3.4"/><path d="M9 16.5h.01"/><path d="M3 21l4-4"/><path d="M7 21l-4-4"/></svg>
);

export const InfinityCost = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4M12 16h.01"/><path d="M5 12c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7"/><text x="9" y="15" fontSize="8" fill="#F5A623" stroke="none" fontWeight="bold">&#x20B9;</text></svg>
);

export const ShieldCheck = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
);

export const FlaskNo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"/><path d="M14 2v7.31"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 11-4 0"/><line x1="7" y1="17" x2="17" y2="7"/></svg>
);

export const DashboardIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
);

export const EnergyIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
);

export const WaterHeart = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z"/><path d="M12 8v8"/><path d="M9 11l3-3 3 3"/></svg>
);

export const LeafEco = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 019.8 6.9C13.5 5.4 17 6 19 8c1.8 1.8 2.3 4.8 1.2 7.7"/><path d="M8 13c0 2.8 2.2 5 5 5"/><path d="M12 18V2"/><path d="M2 22l4-4"/><circle cx="16" cy="16" r="4"/><path d="M16 14v4M14 16h4"/></svg>
);

export const PhoneIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
);

export const EnvelopeIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);

export const MapPinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
);

export const ClockIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
);

export const FactoryIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M5 20V10l5 3V10l5 3V8l5 5v7"/><rect x="7" y="5" width="3" height="3"/><rect x="14" y="4" width="3" height="3"/></svg>
);

export const PoultryIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 12a5 5 0 0110 0c0 2.5-2 4-4 5h-2c-2-1-4-2.5-4-5z"/><circle cx="12" cy="9" r="1.5"/><path d="M9 17c-2 1-3 3-3 5h12c0-2-1-4-3-5"/></svg>
);

export const GearIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
);

export const HotelIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2H6a2 2 0 00-2 2v16h16V4a2 2 0 00-2-2z"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h4"/><path d="M18 20v-2h2v2"/><path d="M4 20v-2H2v2"/><path d="M12 2v-2"/><circle cx="12" cy="1" r="0.5" fill="currentColor"/></svg>
);

export const CheckSmall = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

export const CheckLarge = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="30" stroke="#00C2A8" strokeWidth="2"/><circle cx="32" cy="32" r="26" fill="#00C2A8" opacity="0.1"/><path d="M20 32l8 8 16-16" stroke="#00C2A8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export const ElectrodeSVG = ({ size = 120 }: { size?: number }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 120 90" fill="none"><rect x="20" y="10" width="8" height="60" rx="2" fill="#00C2A8" opacity="0.8"/><rect x="92" y="10" width="8" height="60" rx="2" fill="#00C2A8" opacity="0.8"/><path d="M40 35h8l-4 8z" fill="#00C2A8"/><path d="M55 45h8l-4 8z" fill="#00C2A8"/><path d="M70 30h8l-4 8z" fill="#00C2A8"/><text x="60" y="85" textAnchor="middle" fill="#00C2A8" fontSize="8" fontFamily="Inter">Electrolysis Chamber</text></svg>
);

export const IonConvertSVG = ({ size = 120 }: { size?: number }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 120 90" fill="none"><circle cx="25" cy="30" r="10" stroke="#00C2A8" strokeWidth="2"/><text x="25" y="34" textAnchor="middle" fill="#00C2A8" fontSize="10" fontWeight="bold">Ca²⁺</text><circle cx="25" cy="60" r="10" stroke="#00C2A8" strokeWidth="2"/><text x="25" y="64" textAnchor="middle" fill="#00C2A8" fontSize="10" fontWeight="bold">Mg²⁺</text><path d="M50 30h20" stroke="#00C2A8" strokeWidth="2" strokeDasharray="4 2"/><path d="M50 60h20" stroke="#00C2A8" strokeWidth="2" strokeDasharray="4 2"/><path d="M70 25l8 5-8 5" fill="#00C2A8"/><path d="M70 55l8 5-8 5" fill="#00C2A8"/><circle cx="95" cy="30" r="10" stroke="#00C2A8" strokeWidth="2" fill="#00C2A8" fillOpacity="0.1"/><text x="95" y="34" textAnchor="middle" fill="#00C2A8" fontSize="10" fontWeight="bold">Ca⁺</text><circle cx="95" cy="60" r="10" stroke="#00C2A8" strokeWidth="2" fill="#00C2A8" fillOpacity="0.1"/><text x="95" y="64" textAnchor="middle" fill="#00C2A8" fontSize="10" fontWeight="bold">Mg⁺</text></svg>
);

export const CleanPipeSVG = ({ size = 120 }: { size?: number }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 120 90" fill="none"><rect x="10" y="35" width="80" height="18" rx="9" stroke="#00C2A8" strokeWidth="2.5" fill="#00C2A8" fillOpacity="0.05"/><path d="M20 44h60" stroke="#00C2A8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5"/><circle cx="105" cy="44" r="12" stroke="#00C2A8" strokeWidth="2"/><path d="M99 44l4 4 8-8" stroke="#00C2A8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
