const fs = require('fs');

const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>SSK TI ANODE ENGINEERING | MMO Titanium Anode Manufacturer Chennai | Scale Remover | Electrochlorinator</title>
  <meta name="description" content="SSK TI ANODE ENGINEERING — India's MMO coated titanium anode manufacturer. Chemical-free electrolysis scale removers, electrochlorinators, E-STP, E-ETP systems. OEM anode supply to manufacturers in India, Sri Lanka, Kenya, Nigeria, Saudi Arabia." />
  <meta name="keywords" content="MMO titanium anode manufacturer India, titanium electrode manufacturer Chennai, electrolysis scale remover, electrochlorinator system, OEM anode supply, E-STP plant, E-ETP plant, titanium anode OEM, scale remover anode, water treatment manufacturer Chennai" />
  
  <meta property="og:title" content="SSK TI ANODE ENGINEERING | MMO Titanium Anode Manufacturer" />
  <meta property="og:description" content="Manufacturer of MMO titanium anodes, scale removers, electrochlorinators, and ETP/STP systems. OEM anode supply available." />
  <meta property="og:url" content="https://www.ssktianode.com/" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
          colors: {
            navy: '#0A1628',
            accent: '#0070F3',
            teal: '#00C2A8'
          }
        }
      }
    }
  </script>
  <style>
    body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
    .pill {
      font-size: 0.75rem; padding: 3px 10px; border-radius: 9999px;
      border: 1px solid #0070F3; color: #0A1628; display: inline-block; background: transparent;
      margin-bottom: 4px;
    }
    .hover-expand { width: 58px; transition: width 0.3s ease; white-space: nowrap; overflow: hidden; }
    .hover-expand:hover { width: 220px; }
    @media(max-width: 768px) {
      .hover-expand:hover { width: 58px; }
      .hover-expand span { display: none; }
    }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); }
    th { font-weight: 600; color: #fff; }
    td { color: #cbd5e1; }
    
    .tech-strip {
        background: #0A1628;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;
        flex-wrap: wrap;
        gap: 1rem;
    }
    
    .tech-strip-content {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
    
    .tech-icon {
        font-size: 2.5rem;
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-900 antialiased overflow-x-hidden">

  <!-- Top Bar -->
  <div id="top-bar" class="bg-accent text-white text-[0.75rem] text-center py-2 relative flex justify-center items-center px-4 z-[60]">
    <span>🏭 OEM Anode Supply Available — Exporting to India, Sri Lanka, Kenya, Nigeria & Saudi Arabia</span>
    <button onclick="document.getElementById('top-bar').style.display='none'" class="absolute right-4 top-1/2 -translate-y-1/2 hover:text-gray-200">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
  </div>

  <!-- Navbar -->
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-navy tracking-tight"><a href="/">SSK TI ANODE ENGINEERING</a></h1>
        <p class="text-[0.65rem] text-gray-500 tracking-[0.08em] uppercase mt-1">Titanium Anode Manufacturer & Exporter | Chennai, India</p>
      </div>
      <div class="hidden md:flex space-x-6 items-center">
        <a href="#products" class="text-sm font-medium text-gray-600 hover:text-accent">Products</a>
        <a href="#oem" class="text-sm font-medium text-gray-600 hover:text-accent">OEM Supply</a>
        <a href="#countries" class="text-sm font-medium text-gray-600 hover:text-accent">Export</a>
        <a href="technology.html" class="text-sm font-medium text-gray-600 hover:text-accent">Technology</a>
        <a href="#contact" class="bg-accent text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition">Contact Us</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="bg-navy text-white py-24 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">India's Premier MMO Titanium Anode Manufacturer</h1>
      <h2 class="text-xl md:text-2xl text-teal mb-6 font-medium">Electrolysis Scale Removers · Electrochlorinators · E-STP/E-ETP Systems</h2>
      <p class="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">We manufacture MMO-coated titanium anodes and complete water treatment systems for industrial buyers, OEM companies, and system integrators across India and globally.</p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="#contact" class="bg-accent text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition shadow-lg w-full sm:w-auto">Request a Quote</a>
        <a href="#oem" class="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white hover:text-navy transition w-full sm:w-auto">OEM Anode Supply &rarr;</a>
      </div>
    </div>
  </section>

  <!-- Stats Bar -->
  <div class="bg-gray-900 border-y border-gray-800 py-8 px-4">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
      <div>
        <div class="text-3xl font-bold text-accent mb-1">500+</div>
        <div class="text-xs text-white uppercase tracking-wider">Systems Installed</div>
      </div>
      <div>
        <div class="text-3xl font-bold text-accent mb-1">5</div>
        <div class="text-xs text-white uppercase tracking-wider">Countries Served</div>
      </div>
      <div>
        <div class="text-3xl font-bold text-accent mb-1">15+</div>
        <div class="text-xs text-white uppercase tracking-wider">Industry Sectors</div>
      </div>
      <div>
        <div class="text-3xl font-bold text-accent mb-1">100%</div>
        <div class="text-xs text-white uppercase tracking-wider">In-House Manufactured</div>
      </div>
      <div class="col-span-2 md:col-span-1">
        <div class="text-3xl font-bold text-accent mb-1">10+</div>
        <div class="text-xs text-white uppercase tracking-wider">Years Exp in Titanium</div>
      </div>
    </div>
  </div>

  <!-- TECHNOLOGY TEASER STRIP -->
  <div class="tech-strip">
    <div class="tech-strip-content">
        <div class="tech-icon">⚙️</div>
        <div>
            <h3 class="text-white text-xl font-bold">How Our Electrodes Work</h3>
            <p class="text-gray-400 text-sm">MMO coating, ion conversion, electrode chemistry — explained for engineers and procurement teams.</p>
        </div>
    </div>
    <a href="technology.html" class="bg-transparent border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-navy transition font-medium whitespace-nowrap">Read the Technology &rarr;</a>
  </div>

  <!-- Products Section -->
  <section id="products" class="py-20 px-4 max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-navy mb-4">Our Products & Systems</h2>
      <div class="w-24 h-1 bg-accent mx-auto"></div>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Card 1 -->
      <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col relative pt-10">
        <span class="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">⭐ BEST SELLER</span>
        <h3 class="text-xl font-bold text-navy mb-3">Electrolysis Scale Remover</h3>
        <p class="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">Chemical-free hard water treatment using MMO titanium electrodes. Converts calcium/magnesium ions permanently. No salt, no chemicals.</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          <span class="pill">&#9989; Complete System</span>
          <span class="pill">&#9989; Anode Only — OEM</span>
        </div>
        <a href="#contact" class="mt-6 text-center text-sm font-semibold text-accent hover:text-blue-800">Request Quote &rarr;</a>
      </div>
      
      <!-- Card 2 -->
      <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col pt-10">
        <h3 class="text-xl font-bold text-navy mb-3">Electrochlorinator System</h3>
        <p class="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">On-site chlorine generation system (scrubber type) with energiser unit. Ideal for swimming pools, cooling towers, and water disinfection.</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          <span class="pill">&#9989; Full Set + Energiser</span>
          <span class="pill">&#9989; Anode Only — OEM</span>
        </div>
        <a href="#contact" class="mt-6 text-center text-sm font-semibold text-accent hover:text-blue-800">View Specifications &rarr;</a>
      </div>

      <!-- Card 3 -->
      <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col pt-10">
        <h3 class="text-xl font-bold text-navy mb-3">E-STP &mdash; Electrolytic Sewage Treatment</h3>
        <p class="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">Chemical-free electrolytic sewage treatment using titanium electrodes. Compact, low-maintenance, and suitable for residential/commercial complexes.</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          <span class="pill">&#9989; Full System</span>
        </div>
        <a href="#contact" class="mt-6 text-center text-sm font-semibold text-accent hover:text-blue-800">Enquire Now &rarr;</a>
      </div>

      <!-- Card 4 -->
      <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col pt-10">
        <h3 class="text-xl font-bold text-navy mb-3">E-ETP &mdash; Industrial Effluent Treatment</h3>
        <p class="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">Electrolytic effluent treatment plants for industrial wastewater. Handles heavy metals, BOD, COD reduction without chemical dosing.</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          <span class="pill">&#9989; Full System</span>
        </div>
         <a href="#contact" class="mt-6 text-center text-sm font-semibold text-accent hover:text-blue-800">Enquire Now &rarr;</a>
      </div>

      <!-- Card 5 -->
      <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col relative pt-10">
        <span class="absolute top-0 right-0 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">🏭 OEM / B2B</span>
        <h3 class="text-xl font-bold text-navy mb-3">Titanium Anode Manufacturing (OEM)</h3>
        <p class="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">MMO-coated titanium anodes manufactured to specification. Supplied to water treatment companies, system integrators, and plant builders globally.</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          <span class="pill">&#9989; Standard Shapes</span>
          <span class="pill">&#9989; Custom Fabrication</span>
        </div>
         <a href="#contact" class="mt-6 text-center text-sm font-semibold text-accent hover:text-blue-800">Request Quote &rarr;</a>
      </div>

      <!-- Card 6 -->
      <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col pt-10">
        <h3 class="text-xl font-bold text-navy mb-3">Automatic Scale Removal Anode</h3>
        <p class="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">Standalone titanium anode for integration into existing water systems or OEM assemblies. Suitable for boilers, chillers, and cooling towers.</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          <span class="pill">&#9989; Full System</span>
        </div>
         <a href="#contact" class="mt-6 text-center text-sm font-semibold text-accent hover:text-blue-800">View Specifications &rarr;</a>
      </div>
    </div>
  </section>

  <!-- Problem-Solution Section -->
  <section class="py-20 px-4 bg-white border-y border-gray-200">
    <div class="max-w-7xl mx-auto">
       <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-navy mb-4">Precision Solutions for Industry Problems</h2>
          <div class="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p class="text-gray-600 max-w-2xl mx-auto">Converting traditional, high-maintenance water treatment pain points into efficient, automated electrolytic solutions.</p>
       </div>

       <div class="grid md:grid-cols-2 gap-8">
          <!-- Pair 1 -->
          <div class="bg-gray-50 rounded-xl p-6 border-l-4 border-accent shadow-sm">
             <div class="mb-4">
                 <div class="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded inline-flex items-center mb-2"><span class="mr-1">❌</span> Problem</div>
                 <p class="text-gray-800 font-medium">Scale deposits blocking heat exchangers in cooling towers</p>
             </div>
             <div class="mb-4">
                 <div class="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded inline-flex items-center mb-2"><span class="mr-1">✅</span> Solution</div>
                 <p class="text-gray-700 text-sm">MMO titanium anode-based electrolysis system — no chemicals, no salt</p>
             </div>
             <div>
                 <div class="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded inline-flex items-center mb-2"><span class="mr-1">📊</span> Business Impact</div>
                 <p class="text-gray-600 text-sm">Reduced heat exchanger maintenance frequency. Lower OPEX. Eliminates chemical storage compliance cost.</p>
             </div>
          </div>

          <!-- Pair 2 -->
          <div class="bg-gray-50 rounded-xl p-6 border-l-4 border-accent shadow-sm">
             <div class="mb-4">
                 <div class="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded inline-flex items-center mb-2"><span class="mr-1">❌</span> Problem</div>
                 <p class="text-gray-800 font-medium">Sourcing consistent, high-quality MMO anodes from unreliable suppliers causes delays and quality failures in your product line</p>
             </div>
             <div class="mb-4">
                 <div class="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded inline-flex items-center mb-2"><span class="mr-1">✅</span> Solution</div>
                 <p class="text-gray-700 text-sm">Direct anode supply from in-house manufacturer — custom spec, repeat orders, technical support included</p>
             </div>
             <div>
                 <div class="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded inline-flex items-center mb-2"><span class="mr-1">📊</span> Business Impact</div>
                 <p class="text-gray-600 text-sm">Reliable supply chain. Reduced rejection rate. Single-source accountability.</p>
             </div>
          </div>

          <!-- Pair 3 -->
          <div class="bg-gray-50 rounded-xl p-6 border-l-4 border-accent shadow-sm">
             <div class="mb-4">
                 <div class="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded inline-flex items-center mb-2"><span class="mr-1">❌</span> Problem</div>
                 <p class="text-gray-800 font-medium">Industrial effluent discharge failing TNPCB / CPCB norms, risking shutdown notices</p>
             </div>
             <div class="mb-4">
                 <div class="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded inline-flex items-center mb-2"><span class="mr-1">✅</span> Solution</div>
                 <p class="text-gray-700 text-sm">Electrolytic ETP (E-ETP) — chemical-free, compact, low-maintenance effluent treatment</p>
             </div>
             <div>
                 <div class="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded inline-flex items-center mb-2"><span class="mr-1">📊</span> Business Impact</div>
                 <p class="text-gray-600 text-sm">Achieves discharge compliance. Avoids penalty and operational interruption.</p>
             </div>
          </div>

          <!-- Pair 4 -->
          <div class="bg-gray-50 rounded-xl p-6 border-l-4 border-accent shadow-sm">
             <div class="mb-4">
                 <div class="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded inline-flex items-center mb-2"><span class="mr-1">❌</span> Problem</div>
                 <p class="text-gray-800 font-medium">Heating elements lose efficiency rapidly — energy bills rise 20–30% due to scale</p>
             </div>
             <div class="mb-4">
                 <div class="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded inline-flex items-center mb-2"><span class="mr-1">✅</span> Solution</div>
                 <p class="text-gray-700 text-sm">Automated scale removal converting scale-forming ions to benign forms permanently</p>
             </div>
             <div>
                 <div class="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded inline-flex items-center mb-2"><span class="mr-1">📊</span> Business Impact</div>
                 <p class="text-gray-600 text-sm">Extend equipment lifespan and reduce maintenance downtime. Energy OPEX recovered rapidly.</p>
             </div>
          </div>
       </div>
    </div>
  </section>

  <!-- OEM Section -->
  <section id="oem" class="bg-navy py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column -->
        <div class="text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">We Supply Anodes to Manufacturers</h2>
          <div class="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>Are you a water treatment company, system integrator, or OEM manufacturer? SSK TI ANODE ENGINEERING supplies precision MMO-coated titanium anodes as components for integration into your own systems.</p>
            <p>We supply to companies building:</p>
            <ul class="list-disc pl-6 space-y-2 text-white font-medium">
              <li>Electrolysis scale removal units</li>
              <li>Electrochlorinators and disinfection systems</li>
              <li>Electrolytic ETP/STP plants</li>
              <li>Custom electrolysis equipment</li>
            </ul>
            <p>All anodes are manufactured in-house at our Chennai facility. Custom sizes, shapes, and MMO coating thickness available on request.</p>
          </div>
          <a href="#contact" class="inline-block mt-8 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-md font-semibold transition">Discuss Anode Requirements &rarr;</a>
        </div>
        
        <!-- Right Column -->
        <div class="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          <table>
            <thead>
              <tr class="bg-gray-900">
                <th class="py-4 px-6 border-b border-gray-700">Specification</th>
                <th class="py-4 px-6 border-b border-gray-700">Details</th>
              </tr>
            </thead>
            <tbody class="text-sm md:text-base">
              <tr>
                <td class="font-medium text-white px-6">Base Material</td>
                <td class="px-6">Grade 1 / Grade 2 Titanium</td>
              </tr>
              <tr>
                <td class="font-medium text-white px-6">Coating</td>
                <td class="px-6">Mixed Metal Oxide (MMO)</td>
              </tr>
              <tr>
                <td class="font-medium text-white px-6">Coating Types</td>
                <td class="px-6">RuO₂-IrO₂, IrO₂-Ta₂O₅</td>
              </tr>
              <tr>
                <td class="font-medium text-white px-6">Forms Available</td>
                <td class="px-6">Mesh, Plate, Rod, Tube, Custom</td>
              </tr>
              <tr>
                <td class="font-medium text-white px-6">Applications</td>
                <td class="px-6">Chlorination, Scale, ETP, STP</td>
              </tr>
              <tr>
                <td class="font-medium text-white px-6">Supply Mode</td>
                <td class="px-6">Bulk / Project / Ongoing</td>
              </tr>
              <tr>
                <td class="font-medium text-white px-6 border-none">Min. Order</td>
                <td class="px-6 border-none">Discuss per requirement</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects / Case Studies -->
  <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
         <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-navy mb-4">Projects & Industry Applications</h2>
            <div class="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p class="text-gray-600 font-medium">Real installations. Real results. Across industries and geographies.</p>
         </div>

         <div class="grid md:grid-cols-2 gap-6 mb-12">
            <!-- Card 1 -->
            <div class="bg-white rounded-xl shadow p-6 border-l-[4px] border-accent relative">
                <div class="absolute top-4 right-4 text-2xl">🇮🇳</div>
                <div class="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded inline-block mb-4">Cooling Tower Scale</div>
                <p class="text-[0.85rem] font-bold text-navy mb-3 pb-3 border-b border-gray-100">Calcium scale buildup choking chiller loops every 3 months</p>
                <div class="text-[0.8rem] text-gray-500 mb-4 space-y-1">
                   <p><strong class="text-gray-600">Solution:</strong> Electrolysis Scale Remover — Anode Unit integrated into existing system</p>
                   <p><strong class="text-gray-600">Result:</strong> Zero scale reported in 14 months. Chemical dosing cost eliminated.</p>
                </div>
                <div class="text-xs text-gray-400 flex items-center gap-2"><span>🏭</span> Industrial — Pharma Plant, Tamil Nadu</div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white rounded-xl shadow p-6 border-l-[4px] border-accent relative">
                <div class="absolute top-4 right-4 text-2xl">🇱🇰</div>
                <div class="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded inline-block mb-4">Electrochlorination</div>
                <p class="text-[0.85rem] font-bold text-navy mb-3 pb-3 border-b border-gray-100">Inconsistent chlorine dosing causing failed water quality compliance</p>
                <div class="text-[0.8rem] text-gray-500 mb-4 space-y-1">
                   <p><strong class="text-gray-600">Solution:</strong> Electrochlorinator Full Set (scrubber type) with energiser</p>
                   <p><strong class="text-gray-600">Result:</strong> On-site chlorine generation — stable 0.5 ppm output. No chemical procurement.</p>
                </div>
                <div class="text-xs text-gray-400 flex items-center gap-2"><span>🏊</span> Commercial — Water Park, Colombo</div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white rounded-xl shadow p-6 border-l-[4px] border-accent relative">
                <div class="absolute top-4 right-4 text-2xl">🇳🇬</div>
                <div class="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded inline-block mb-4">OEM Anode Supply</div>
                <p class="text-[0.85rem] font-bold text-navy mb-3 pb-3 border-b border-gray-100">Water treatment company needed reliable MMO anode source for their own product line</p>
                <div class="text-[0.8rem] text-gray-500 mb-4 space-y-1">
                   <p><strong class="text-gray-600">Solution:</strong> Custom MMO titanium anodes — mesh type, RuO₂-IrO₂ coating, bulk supply</p>
                   <p><strong class="text-gray-600">Result:</strong> Ongoing anode supply contract. 3 product batches delivered.</p>
                </div>
                <div class="text-xs text-gray-400 flex items-center gap-2"><span>🔧</span> OEM Manufacturer — Water Treatment Equipment Company</div>
            </div>

            <!-- Card 4 -->
            <div class="bg-white rounded-xl shadow p-6 border-l-[4px] border-accent relative">
                <div class="absolute top-4 right-4 text-2xl">🇮🇳</div>
                <div class="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded inline-block mb-4">Effluent Treatment</div>
                <p class="text-[0.85rem] font-bold text-navy mb-3 pb-3 border-b border-gray-100">Textile unit facing PCB violations for heavy metal effluent discharge</p>
                <div class="text-[0.8rem] text-gray-500 mb-4 space-y-1">
                   <p><strong class="text-gray-600">Solution:</strong> E-ETP (Electrolytic Effluent Treatment Plant) — full system</p>
                   <p><strong class="text-gray-600">Result:</strong> Achieved TNPCB discharge norms within 60 days of commissioning.</p>
                </div>
                <div class="text-xs text-gray-400 flex items-center gap-2"><span>🏗️</span> Industrial — Textile Unit, Tirupur</div>
            </div>
         </div>

         <div class="bg-navy rounded-xl p-8 text-center text-white">
             <p class="mb-4 text-lg font-medium text-gray-200">These are representative project types. Each installation is customised.</p>
             <a href="#contact" class="inline-block bg-accent hover:bg-blue-600 transition px-8 py-3 rounded-md font-bold">Discuss Your Requirement &rarr;</a>
         </div>
      </div>
  </section>

  <!-- Who We Sell To -->
  <section class="py-20 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-navy mb-4">Who Works With Us</h2>
            <div class="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p class="text-gray-600 font-medium">We serve two types of buyers — both are equally welcome.</p>
         </div>

         <div class="grid md:grid-cols-2 gap-8">
             <!-- Card A -->
             <div class="bg-[#F0F7FF] rounded-2xl p-10 relative overflow-hidden">
                 <div class="text-5xl mb-6">🏭</div>
                 <h3 class="text-2xl font-bold text-navy mb-4">Industrial Buyers & Plant Operators</h3>
                 <p class="text-gray-700 leading-relaxed mb-6">You operate a manufacturing plant, hotel, hospital, housing complex, or commercial facility and need a complete, installed water treatment or electrochlorination system.<br><br>We supply, install, and commission the full system. After-sales support included.</p>
                 <div class="mb-8">
                     <p class="font-bold text-navy text-sm mb-3">WHO THIS IS FOR:</p>
                     <ul class="text-sm text-gray-600 space-y-2">
                         <li>• Cooling tower operators</li>
                         <li>• Hotel & hospitality facilities</li>
                         <li>• Residential complexes & townships</li>
                         <li>• Hospitals & pharma plants</li>
                         <li>• Textile & industrial units</li>
                         <li>• Municipal water utilities</li>
                     </ul>
                 </div>
                 <a href="#contact" class="inline-block text-accent font-bold hover:underline">Get a System Quote &rarr;</a>
             </div>

             <!-- Card B -->
             <div class="bg-navy rounded-2xl p-10 relative overflow-hidden shadow-xl">
                 <div class="text-5xl mb-6">🔧</div>
                 <h3 class="text-2xl font-bold text-white mb-4">OEM Companies & System Integrators</h3>
                 <p class="text-gray-300 leading-relaxed mb-6">You build water treatment equipment and need a reliable, high-quality source for MMO titanium anodes as components.<br><br>We manufacture anodes to your specification — any shape, coating type, or quantity. Ongoing supply contracts available.</p>
                 <div class="mb-8">
                     <p class="font-bold text-white text-sm mb-3">WHO THIS IS FOR:</p>
                     <ul class="text-sm text-gray-400 space-y-2">
                         <li>• Water treatment equipment manufacturers</li>
                         <li>• Electrochlorinator system builders</li>
                         <li>• ETP/STP plant integrators</li>
                         <li>• Engineering procurement companies</li>
                         <li>• Export distributors</li>
                     </ul>
                 </div>
                 <a href="#oem" class="inline-block text-teal font-bold hover:underline">Discuss OEM Supply &rarr;</a>
             </div>
         </div>
      </div>
  </section>

  <!-- Countries Section -->
  <section id="countries" class="py-20 px-4 bg-gray-50 max-w-7xl mx-auto border-t border-gray-200">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-navy mb-4">Export Destinations</h2>
      <div class="w-24 h-1 bg-accent mx-auto"></div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300">
        <div class="text-[2rem] mb-3">🇮🇳</div>
        <h4 class="font-bold text-navy mb-2">India</h4>
        <p class="text-xs text-gray-500">Scale removers, ETP/STP systems, electrochlorinators</p>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300">
        <div class="text-[2rem] mb-3">🇱🇰</div>
        <h4 class="font-bold text-navy mb-2">Sri Lanka</h4>
        <p class="text-xs text-gray-500">Hard water treatment for industries</p>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300">
        <div class="text-[2rem] mb-3">🇰🇪</div>
        <h4 class="font-bold text-navy mb-2">Kenya</h4>
        <p class="text-xs text-gray-500">Industrial water treatment systems</p>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300">
        <div class="text-[2rem] mb-3">🇳🇬</div>
        <h4 class="font-bold text-navy mb-2">Nigeria</h4>
        <p class="text-xs text-gray-500">Electrochlorination & water disinfection</p>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300">
        <div class="text-[2rem] mb-3">🇸🇦</div>
        <h4 class="font-bold text-navy mb-2">Saudi Arabia</h4>
        <p class="text-xs text-gray-500">Cooling tower & industrial scale removal</p>
      </div>
    </div>
    
    <p class="text-center mt-12 text-gray-600 font-medium pb-8 border-b border-gray-200">Enquiries welcome from all countries — contact us for export pricing.</p>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-20 px-4 bg-gray-50 relative -mt-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-navy mb-4">Request a Quote</h2>
        <p class="text-gray-600">Provide your details and requirements for a tailored proposal.</p>
      </div>
      
      <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-8 w-full">
        <form class="space-y-6" onsubmit="event.preventDefault(); alert('Form submitted successfully!');">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" placeholder="Jane Doe">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Company / Organisation Name *</label>
              <input type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" placeholder="Acme Water Tech">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Designation / Role</label>
              <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" placeholder="Procurement Manager, Engineer">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Country *</label>
              <select required class="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-accent focus:border-accent">
                <option value="">Select Country</option>
                <option>India</option>
                <option>Sri Lanka</option>
                <option>Kenya</option>
                <option>Nigeria</option>
                <option>Saudi Arabia</option>
                <option>UAE</option>
                <option>Qatar</option>
                <option>Oman</option>
                <option>Bangladesh</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp Number *</label>
              <input type="tel" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" placeholder="+91 98765 43210">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input type="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" placeholder="jane@company.com">
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Product Interested In *</label>
            <select required class="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-accent focus:border-accent">
               <option value="">Select a Product</option>
               <option>Electrolysis Scale Remover (Full System)</option>
               <option>Electrolysis Scale Remover (Anode Only — OEM)</option>
               <option>Electrochlorinator (Full Set)</option>
               <option>Electrochlorinator (Anode Only — OEM)</option>
               <option>E-STP (Electrolytic Sewage Treatment Plant)</option>
               <option>E-ETP (Electrolytic Effluent Treatment Plant)</option>
               <option>Custom Titanium Anode Fabrication</option>
               <option>Not Sure / General Enquiry</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-3">Requirement Type *</label>
            <div class="flex flex-wrap gap-6">
              <label class="flex items-center gap-2 cursor-pointer text-sm">
                <input type="radio" name="req_type" value="complete" required class="text-accent focus:ring-accent w-4 h-4"> Complete System
              </label>
              <label class="flex items-center gap-2 cursor-pointer text-sm">
                <input type="radio" name="req_type" value="anode" required class="text-accent focus:ring-accent w-4 h-4"> Anode / Component Only
              </label>
              <label class="flex items-center gap-2 cursor-pointer text-sm">
                <input type="radio" name="req_type" value="both" required class="text-accent focus:ring-accent w-4 h-4"> Both
              </label>
              <label class="flex items-center gap-2 cursor-pointer text-sm">
                <input type="radio" name="req_type" value="consultation" required class="text-accent focus:ring-accent w-4 h-4"> Technical Consultation
              </label>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Approximate Quantity or Capacity</label>
            <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" placeholder="e.g. 50 LPH system or 10 anode plates">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Message / Project Details</label>
            <textarea rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" placeholder="Please provide technical requirements or context..."></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
            <select class="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-accent focus:border-accent">
               <option value="">Select Option</option>
               <option>Google Search</option>
               <option>Referral</option>
               <option>Trade Fair</option>
               <option>LinkedIn</option>
               <option>Other</option>
            </select>
          </div>

          <div class="pt-4 text-center">
            <button type="submit" class="bg-navy text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-accent transition w-full md:w-auto shadow-md">Send Enquiry &rarr;</button>
            <p class="text-xs text-gray-500 mt-3">We respond within 24 hours. WhatsApp: +91 63696 58869</p>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-[#050B14] text-gray-300 pt-16 pb-8 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <!-- Col 1 -->
        <div>
          <h2 class="text-xl font-bold text-white mb-4">SSK TI ANODE ENGINEERING</h2>
          <p class="text-sm text-gray-400 mb-6">Precision Titanium Anodes.<br>Proven Water Treatment.</p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://wa.me/916369658869" class="text-gray-400 hover:text-[#25D366]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.395 0 .157 5.318.154 11.95c0 2.062.535 4.102 1.554 5.908L.048 24l6.326-1.654a11.912 11.912 0 005.654 1.43h.005c6.633 0 11.89-5.319 11.893-11.954C23.923 8.91 21.408 6.007 19.123 3.492 17.25 1.458 14.735 0 12.031 0zm.006 19.658c-1.724 0-3.415-.46-4.896-1.33l-.35-.2-3.633.953.97-3.541-.22-.348a9.814 9.814 0 01-1.498-5.242c.002-5.405 4.41-9.814 9.822-9.814 2.62 0 5.088 1.02 6.942 2.873a9.826 9.826 0 012.875 6.945c-.003 5.404-4.412 9.813-9.825 9.813h-.005zm5.35-7.305c-.292-.146-1.73-.85-2-1-.27-.15-.466-.2-.663.093-.195.292-.756.953-.926 1.15-.17.195-.34.22-.634.073-.292-.146-1.238-.456-2.357-1.45-.873-.778-1.463-1.74-1.635-2.032-.17-.293-.018-.45.127-.597.13-.13.29-.34.437-.512.146-.17.195-.292.29-.488.098-.195.05-.366-.023-.513-.073-.146-.663-1.597-.908-2.185-.24-.57-.482-.493-.663-.502-.17-.01-.366-.01-.56-.01s-.51.074-.78.366c-.27.293-1.025 1-1.025 2.44 0 1.44 1.05 2.83 1.196 3.025.146.195 2.062 3.143 4.996 4.407.7.3 1.246.48 1.67.616.703.224 1.343.192 1.847.116.565-.085 1.73-.71 1.976-1.396.244-.684.244-1.27.17-1.395-.072-.122-.267-.195-.56-.34z"/></svg>
            </a>
          </div>
        </div>
        
        <!-- Col 2 -->
        <div>
          <h3 class="text-white font-semibold mb-4 border-b border-gray-800 pb-2 inline-block">Products</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="#products" class="hover:text-accent font-medium">Electrolysis Scale Remover</a></li>
            <li><a href="#products" class="hover:text-accent font-medium">Electrochlorinator</a></li>
            <li><a href="#products" class="hover:text-accent font-medium">E-STP Systems</a></li>
            <li><a href="#products" class="hover:text-accent font-medium">E-ETP Systems</a></li>
            <li><a href="#oem" class="hover:text-accent font-medium">Titanium Anode OEM Supply</a></li>
          </ul>
        </div>
        
        <!-- Col 3 -->
        <div>
          <h3 class="text-white font-semibold mb-4 border-b border-gray-800 pb-2 inline-block">Contact</h3>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start gap-2">
              <span class="mt-0.5" aria-hidden="true">&#128222;</span>
              <a href="tel:+916369658869" class="hover:text-white font-medium">+91 63696 58869</a>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-0.5" aria-hidden="true">&#128231;</span>
              <a href="mailto:info@ssktianode.com" class="hover:text-white font-medium">info@ssktianode.com</a>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-0.5" aria-hidden="true">&#128205;</span>
              <span>Gowrivakkam, Chennai — 600073<br>Tamil Nadu, India</span>
            </li>
          </ul>
        </div>

        <!-- Col 4 -->
        <div>
          <h3 class="text-white font-semibold mb-4 border-b border-gray-800 pb-2 inline-block">Export Markets</h3>
          <div class="grid grid-cols-2 gap-2 text-sm text-gray-400">
            <div class="flex items-center gap-1"><span>🇮🇳</span> <span class="font-medium">India</span></div>
            <div class="flex items-center gap-1"><span>🇱🇰</span> <span class="font-medium">Sri Lanka</span></div>
            <div class="flex items-center gap-1"><span>🇰🇪</span> <span class="font-medium">Kenya</span></div>
            <div class="flex items-center gap-1"><span>🇳🇬</span> <span class="font-medium">Nigeria</span></div>
            <div class="flex items-center gap-1 col-span-2"><span>🇸🇦</span> <span class="font-medium">Saudi Arabia</span></div>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-800 pt-6 text-center text-xs text-gray-500 font-medium">
        <p>&copy; 2026 SSK TI ANODE ENGINEERING. All Rights Reserved. | Manufacturer & Exporter of MMO Titanium Anodes — Chennai, India</p>
      </div>
    </div>
  </footer>

  <!-- WhatsApp Floating Button -->
  <a href="https://wa.me/916369658869?text=Hello%20SSK%20TI%20ANODE%2C%20I%20am%20interested%20in%20your%20products" 
     target="_blank" rel="noopener noreferrer" 
     class="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white rounded-full h-[58px] flex items-center shadow-2xl hover:bg-[#20BE59] transform hover:-translate-y-1 transition-all duration-300 hover-expand overflow-hidden" 
     aria-label="Chat on WhatsApp">
    <div class="flex-shrink-0 w-[58px] h-[58px] flex items-center justify-center">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.395 0 .157 5.318.154 11.95c0 2.062.535 4.102 1.554 5.908L.048 24l6.326-1.654a11.912 11.912 0 005.654 1.43h.005c6.633 0 11.89-5.319 11.893-11.954C23.923 8.91 21.408 6.007 19.123 3.492 17.25 1.458 14.735 0 12.031 0zm.006 19.658c-1.724 0-3.415-.46-4.896-1.33l-.35-.2-3.633.953.97-3.541-.22-.348a9.814 9.814 0 01-1.498-5.242c.002-5.405 4.41-9.814 9.822-9.814 2.62 0 5.088 1.02 6.942 2.873a9.826 9.826 0 012.875 6.945c-.003 5.404-4.412 9.813-9.825 9.813h-.005zm5.35-7.305c-.292-.146-1.73-.85-2-1-.27-.15-.466-.2-.663.093-.195.292-.756.953-.926 1.15-.17.195-.34.22-.634.073-.292-.146-1.238-.456-2.357-1.45-.873-.778-1.463-1.74-1.635-2.032-.17-.293-.018-.45.127-.597.13-.13.29-.34.437-.512.146-.17.195-.292.29-.488.098-.195.05-.366-.023-.513-.073-.146-.663-1.597-.908-2.185-.24-.57-.482-.493-.663-.502-.17-.01-.366-.01-.56-.01s-.51.074-.78.366c-.27.293-1.025 1-1.025 2.44 0 1.44 1.05 2.83 1.196 3.025.146.195 2.062 3.143 4.996 4.407.7.3 1.246.48 1.67.616.703.224 1.343.192 1.847.116.565-.085 1.73-.71 1.976-1.396.244-.684.244-1.27.17-1.395-.072-.122-.267-.195-.56-.34z"/></svg>
    </div>
    <span class="font-semibold px-4 pt-1">Chat on WhatsApp</span>
  </a>

  <script>
    // JavaScript logic for smooth scrolling or dynamic actions
    console.log("SSK TI ANODE ENGINEERING B2B portal loaded.");
  </script>
</body>
</html>`;

const technologyHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Electrode Technology | SSK TI ANODE ENGINEERING</title>
  <meta name="description" content="Technical specifications and working principles of MMO-coated titanium anodes, electrolysis scale removers, and electrochlorinators." />
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
          colors: {
            navy: '#0A1628',
            accent: '#0070F3',
            teal: '#00C2A8'
          }
        }
      }
    }
  </script>
  <style>
    body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
    .pill {
      font-size: 0.75rem; padding: 3px 10px; border-radius: 9999px;
      border: 1px solid #0070F3; color: #0A1628; display: inline-block; background: transparent;
      margin-bottom: 4px;
    }
    .hover-expand { width: 58px; transition: width 0.3s ease; white-space: nowrap; overflow: hidden; }
    .hover-expand:hover { width: 220px; }
    @media(max-width: 768px) {
      .hover-expand:hover { width: 58px; }
      .hover-expand span { display: none; }
    }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid rgba(0,0,0,0.1); }
    th { font-weight: 600; color: #1f2937; }
    td { color: #4b5563; }
    
    /* FAQ Accordion Styles */
    details > summary {
      list-style: none;
    }
    details > summary::-webkit-details-marker {
      display: none;
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-900 antialiased overflow-x-hidden">

  <!-- Navbar -->
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-navy tracking-tight"><a href="index.html">SSK TI ANODE ENGINEERING</a></h1>
        <p class="text-[0.65rem] text-gray-500 tracking-[0.08em] uppercase mt-1">Titanium Anode Manufacturer & Exporter | Chennai, India</p>
      </div>
      <div class="hidden md:flex space-x-6 items-center">
        <a href="index.html#products" class="text-sm font-medium text-gray-600 hover:text-accent">Products</a>
        <a href="index.html#oem" class="text-sm font-medium text-gray-600 hover:text-accent">OEM Supply</a>
        <a href="index.html#countries" class="text-sm font-medium text-gray-600 hover:text-accent">Export</a>
        <a href="technology.html" class="text-sm font-medium text-accent">Technology</a>
        <a href="index.html#contact" class="bg-accent text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition">Contact Us</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="bg-navy text-white pt-16 pb-20 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">The Technology Behind Our Electrodes</h1>
      <p class="text-lg md:text-xl text-teal mb-2 font-medium max-w-2xl mx-auto leading-relaxed">For engineers, procurement teams, and OEM integrators who need to understand what they're buying.</p>
    </div>
  </section>

  <!-- How MMO works -->
  <section class="py-16 px-4 max-w-4xl mx-auto border-b border-gray-200">
    <h2 class="text-2xl font-bold text-navy mb-6">MMO Coating — The Core of Every Product We Make</h2>
    <div class="space-y-4 text-gray-700 leading-relaxed">
       <p><strong class="text-navy">Titanium is the substrate:</strong> We use high-grade titanium (typically Grade 1 or Grade 2) because it is highly corrosion-resistant and dimensionally stable. The titanium acts as a current distributor but does not participate in the electrochemical reaction.</p>
       <p><strong class="text-navy">Mixed Metal Oxide (MMO) coating</strong> is applied to the titanium via thermal decomposition. This precious metal coating is what makes the electrode catalytically active.</p>
       <p><strong class="text-navy">Common coating compositions:</strong> We use <span class="font-mono text-xs bg-gray-100 p-1 rounded">RuO₂-IrO₂</span> (Ruthenium-Iridium) for chlorine evolution applications like electrochlorinators, and <span class="font-mono text-xs bg-gray-100 p-1 rounded">IrO₂-Ta₂O₅</span> (Iridium-Tantalum) for oxygen evolution and scale removal where high durability in non-chloride environments is required.</p>
       <p>When direct current passes through the anode in water, intense electrochemical reactions occur at the surface. In scale removers, this forces dissolved divalent calcium and magnesium ions into a bulk precipitation reaction, converting them to soft, non-scaling monovalent forms (aragonite) locally, preventing hard calcite scale down the line. <strong class="text-navy">No chemicals are consumed — only electrical energy.</strong></p>
    </div>
  </section>

  <!-- Spec Table -->
  <section class="py-16 px-4 max-w-4xl mx-auto border-b border-gray-200">
     <h2 class="text-2xl font-bold text-navy mb-6">Standard Electrode Specifications</h2>
     <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table>
            <thead>
              <tr class="bg-gray-100">
                <th class="py-4 px-6 border-b border-gray-200 text-navy font-bold">Parameter</th>
                <th class="py-4 px-6 border-b border-gray-200 text-navy font-bold">Details</th>
              </tr>
            </thead>
            <tbody class="text-sm md:text-base">
              <tr>
                <td class="font-medium text-navy px-6">Base Material</td>
                <td class="px-6">Grade 1 / Grade 2 Titanium (ASTM B265)</td>
              </tr>
              <tr>
                <td class="font-medium text-navy px-6">Coating</td>
                <td class="px-6">Mixed Metal Oxide (MMO)</td>
              </tr>
              <tr>
                <td class="font-medium text-navy px-6">Coating Compositions</td>
                <td class="px-6">RuO₂-IrO₂ · IrO₂-Ta₂O₅ · Custom</td>
              </tr>
              <tr>
                <td class="font-medium text-navy px-6">Application per Coating</td>
                <td class="px-6">Chlorination · Scale Removal · OER</td>
              </tr>
              <tr>
                <td class="font-medium text-navy px-6">Available Forms</td>
                <td class="px-6">Mesh · Plate · Rod · Tube · Expanded</td>
              </tr>
              <tr>
                <td class="font-medium text-navy px-6">Operating Temperature</td>
                <td class="px-6">Up to 80°C</td>
              </tr>
              <tr>
                <td class="font-medium text-navy px-6">Operating pH Range</td>
                <td class="px-6">2 – 12</td>
              </tr>
              <tr>
                <td class="font-medium text-navy px-6">Coating Thickness</td>
                <td class="px-6">8–20 microns (customisable)</td>
              </tr>
              <tr>
                <td class="font-medium text-navy px-6">Expected Service Life</td>
                <td class="px-6">5–10 years (application-dependent)</td>
              </tr>
              <tr>
                <td class="font-medium text-navy px-6 border-none">Current Density Range</td>
                <td class="px-6 border-none">100–2000 A/m²</td>
              </tr>
            </tbody>
        </table>
     </div>
  </section>

  <!-- Technical Summary Tabs -->
  <section class="py-16 px-4 max-w-4xl mx-auto border-b border-gray-200">
     <h2 class="text-2xl font-bold text-navy mb-6">Product-Wise Technical Summary</h2>
     
     <div class="space-y-4">
        <details class="bg-white rounded-lg border border-gray-200 group" open>
            <summary class="flex justify-between items-center font-bold cursor-pointer p-5 bg-gray-50 rounded-t-lg group-open:border-b border-gray-200 text-navy">
                Scale Remover Technology
                <span class="text-accent group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="p-5 text-gray-700 text-sm leading-relaxed">
               <p><strong class="block text-navy mb-1">Mechanism:</strong> Uses low-voltage DC to induce electrolytic precipitation. Temporary high pH is generated near the cathode causing calcium/magnesium to safely crystallize as aragonite, preventing hard calcite buildup in downstream heat exchangers and pipes.</p>
               <p><strong class="block text-navy mb-1 mt-3">Electrode & Power:</strong> Uses IrO₂-Ta₂O₅ (OER) MMO coated titanium plates or mesh. Powered by a constant-current SMPS or thyristor control panel.</p>
               <p><strong class="block text-navy mb-1 mt-3">Flow:</strong> Sized dynamically. From 1000 LPH to massive cooling tower recirculation lines up to 500+ M³/hr.</p>
            </div>
        </details>

        <details class="bg-white rounded-lg border border-gray-200 group">
            <summary class="flex justify-between items-center font-bold cursor-pointer p-5 bg-gray-50 rounded-lg group-open:rounded-b-none group-open:border-b border-gray-200 text-navy">
                Electrochlorinator Technology
                <span class="text-accent group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="p-5 text-gray-700 text-sm leading-relaxed">
               <p><strong class="block text-navy mb-1">Mechanism:</strong> On-site sodium hypochlorite (NaOCl) generation via direct electrolysis of brine (NaCl + H₂O) or naturally salty water. Eliminates hazardous chlorine gas handling.</p>
               <p><strong class="block text-navy mb-1 mt-3">Electrode & Output:</strong> Uses RuO₂-IrO₂ (CER) coating. Typically achieves 0.5 to 2.0 ppm active free chlorine depending on flow rate, cell geometry, and brine concentration.</p>
            </div>
        </details>

        <details class="bg-white rounded-lg border border-gray-200 group">
            <summary class="flex justify-between items-center font-bold cursor-pointer p-5 bg-gray-50 rounded-lg group-open:rounded-b-none group-open:border-b border-gray-200 text-navy">
                E-STP / E-ETP Technology
                <span class="text-accent group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="p-5 text-gray-700 text-sm leading-relaxed">
               <p><strong class="block text-navy mb-1">Mechanism:</strong> Employs electrocoagulation and electro-oxidation. The titanium electrodes drive advanced oxidation processes (AOPs), producing hydroxyl radicals that aggressively break down complex organic compounds and heavy metals.</p>
               <p><strong class="block text-navy mb-1 mt-3">Results:</strong> Drives rapid reduction of Biochemical Oxygen Demand (BOD) and Chemical Oxygen Demand (COD) without requiring heavy chemical flocculants or extensive settling time.</p>
            </div>
        </details>
     </div>
  </section>

  <!-- FAQ for Engineers -->
  <section class="py-16 px-4 max-w-4xl mx-auto border-b border-gray-200">
    <h2 class="text-2xl font-bold text-navy mb-6">FAQ for Technical Buyers</h2>
    <div class="space-y-6 text-sm">
        <div>
            <h4 class="font-bold text-navy mb-1">Q: What coating do I need for a cooling tower scale removal application?</h4>
            <p class="text-gray-600">A: IrO₂-Ta₂O₅ (Iridium-Tantalum) coating is preferred for Oxygen Evolution Reactions (OER) used in scale prevention to heavily resist passivation.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy mb-1">Q: Can you supply anodes to fit our existing OEM electrode holders?</h4>
            <p class="text-gray-600">A: Yes. Provide us with the dimensional drawings, hole pattern, and required current density, and we will manufacture precisely to spec.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy mb-1">Q: What is the expected anode life in a chlorination system?</h4>
            <p class="text-gray-600">A: When operated at suggested current densities in typical brine or seawater applications, life is generally 5–8 years.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy mb-1">Q: Do you provide test reports or coating certifications?</h4>
            <p class="text-gray-600">A: Yes. We can provide coating composition test reports and dimensional inspection certificates against PO specifications.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy mb-1">Q: Do you export electrodes?</h4>
            <p class="text-gray-600">A: Yes. We currently supply ongoing projects to India, Sri Lanka, Kenya, Nigeria, and Saudi Arabia.</p>
        </div>
    </div>
  </section>

  <!-- Bottom CTA -->
  <section class="py-12 px-4 text-center">
     <p class="text-navy font-bold text-xl mb-6">Need a technical datasheet or custom anode specification?</p>
     <a href="index.html#contact" class="inline-block bg-accent hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-md transition shadow-md">Send Technical Enquiry &rarr;</a>
  </section>

  <!-- Footer -->
  <footer class="bg-[#050B14] text-gray-300 pt-16 pb-8 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <!-- Col 1 -->
        <div>
          <h2 class="text-xl font-bold text-white mb-4">SSK TI ANODE ENGINEERING</h2>
          <p class="text-sm text-gray-400 mb-6">Precision Titanium Anodes.<br>Proven Water Treatment.</p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://wa.me/916369658869" class="text-gray-400 hover:text-[#25D366]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.395 0 .157 5.318.154 11.95c0 2.062.535 4.102 1.554 5.908L.048 24l6.326-1.654a11.912 11.912 0 005.654 1.43h.005c6.633 0 11.89-5.319 11.893-11.954C23.923 8.91 21.408 6.007 19.123 3.492 17.25 1.458 14.735 0 12.031 0zm.006 19.658c-1.724 0-3.415-.46-4.896-1.33l-.35-.2-3.633.953.97-3.541-.22-.348a9.814 9.814 0 01-1.498-5.242c.002-5.405 4.41-9.814 9.822-9.814 2.62 0 5.088 1.02 6.942 2.873a9.826 9.826 0 012.875 6.945c-.003 5.404-4.412 9.813-9.825 9.813h-.005zm5.35-7.305c-.292-.146-1.73-.85-2-1-.27-.15-.466-.2-.663.093-.195.292-.756.953-.926 1.15-.17.195-.34.22-.634.073-.292-.146-1.238-.456-2.357-1.45-.873-.778-1.463-1.74-1.635-2.032-.17-.293-.018-.45.127-.597.13-.13.29-.34.437-.512.146-.17.195-.292.29-.488.098-.195.05-.366-.023-.513-.073-.146-.663-1.597-.908-2.185-.24-.57-.482-.493-.663-.502-.17-.01-.366-.01-.56-.01s-.51.074-.78.366c-.27.293-1.025 1-1.025 2.44 0 1.44 1.05 2.83 1.196 3.025.146.195 2.062 3.143 4.996 4.407.7.3 1.246.48 1.67.616.703.224 1.343.192 1.847.116.565-.085 1.73-.71 1.976-1.396.244-.684.244-1.27.17-1.395-.072-.122-.267-.195-.56-.34z"/></svg>
            </a>
          </div>
        </div>
        
        <!-- Col 2 -->
        <div>
          <h3 class="text-white font-semibold mb-4 border-b border-gray-800 pb-2 inline-block">Products</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="index.html#products" class="hover:text-accent font-medium">Electrolysis Scale Remover</a></li>
            <li><a href="index.html#products" class="hover:text-accent font-medium">Electrochlorinator</a></li>
            <li><a href="index.html#products" class="hover:text-accent font-medium">E-STP Systems</a></li>
            <li><a href="index.html#products" class="hover:text-accent font-medium">E-ETP Systems</a></li>
            <li><a href="index.html#oem" class="hover:text-accent font-medium">Titanium Anode OEM Supply</a></li>
          </ul>
        </div>
        
        <!-- Col 3 -->
        <div>
          <h3 class="text-white font-semibold mb-4 border-b border-gray-800 pb-2 inline-block">Contact</h3>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start gap-2">
              <span class="mt-0.5" aria-hidden="true">&#128222;</span>
              <a href="tel:+916369658869" class="hover:text-white font-medium">+91 63696 58869</a>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-0.5" aria-hidden="true">&#128231;</span>
              <a href="mailto:info@ssktianode.com" class="hover:text-white font-medium">info@ssktianode.com</a>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-0.5" aria-hidden="true">&#128205;</span>
              <span>Gowrivakkam, Chennai — 600073<br>Tamil Nadu, India</span>
            </li>
          </ul>
        </div>

        <!-- Col 4 -->
        <div>
          <h3 class="text-white font-semibold mb-4 border-b border-gray-800 pb-2 inline-block">Export Markets</h3>
          <div class="grid grid-cols-2 gap-2 text-sm text-gray-400">
            <div class="flex items-center gap-1"><span>🇮🇳</span> <span class="font-medium">India</span></div>
            <div class="flex items-center gap-1"><span>🇱🇰</span> <span class="font-medium">Sri Lanka</span></div>
            <div class="flex items-center gap-1"><span>🇰🇪</span> <span class="font-medium">Kenya</span></div>
            <div class="flex items-center gap-1"><span>🇳🇬</span> <span class="font-medium">Nigeria</span></div>
            <div class="flex items-center gap-1 col-span-2"><span>🇸🇦</span> <span class="font-medium">Saudi Arabia</span></div>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-800 pt-6 text-center text-xs text-gray-500 font-medium">
        <p>&copy; 2026 SSK TI ANODE ENGINEERING. All Rights Reserved. | Manufacturer & Exporter of MMO Titanium Anodes — Chennai, India</p>
      </div>
    </div>
  </footer>

  <!-- WhatsApp Floating Button -->
  <a href="https://wa.me/916369658869?text=Hello%20SSK%20TI%20ANODE%2C%20I%20am%20interested%20in%20your%20products" 
     target="_blank" rel="noopener noreferrer" 
     class="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white rounded-full h-[58px] flex items-center shadow-2xl hover:bg-[#20BE59] transform hover:-translate-y-1 transition-all duration-300 hover-expand overflow-hidden" 
     aria-label="Chat on WhatsApp">
    <div class="flex-shrink-0 w-[58px] h-[58px] flex items-center justify-center">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.395 0 .157 5.318.154 11.95c0 2.062.535 4.102 1.554 5.908L.048 24l6.326-1.654a11.912 11.912 0 005.654 1.43h.005c6.633 0 11.89-5.319 11.893-11.954C23.923 8.91 21.408 6.007 19.123 3.492 17.25 1.458 14.735 0 12.031 0zm.006 19.658c-1.724 0-3.415-.46-4.896-1.33l-.35-.2-3.633.953.97-3.541-.22-.348a9.814 9.814 0 01-1.498-5.242c.002-5.405 4.41-9.814 9.822-9.814 2.62 0 5.088 1.02 6.942 2.873a9.826 9.826 0 012.875 6.945c-.003 5.404-4.412 9.813-9.825 9.813h-.005zm5.35-7.305c-.292-.146-1.73-.85-2-1-.27-.15-.466-.2-.663.093-.195.292-.756.953-.926 1.15-.17.195-.34.22-.634.073-.292-.146-1.238-.456-2.357-1.45-.873-.778-1.463-1.74-1.635-2.032-.17-.293-.018-.45.127-.597.13-.13.29-.34.437-.512.146-.17.195-.292.29-.488.098-.195.05-.366-.023-.513-.073-.146-.663-1.597-.908-2.185-.24-.57-.482-.493-.663-.502-.17-.01-.366-.01-.56-.01s-.51.074-.78.366c-.27.293-1.025 1-1.025 2.44 0 1.44 1.05 2.83 1.196 3.025.146.195 2.062 3.143 4.996 4.407.7.3 1.246.48 1.67.616.703.224 1.343.192 1.847.116.565-.085 1.73-.71 1.976-1.396.244-.684.244-1.27.17-1.395-.072-.122-.267-.195-.56-.34z"/></svg>
    </div>
    <span class="font-semibold px-4 pt-1">Chat on WhatsApp</span>
  </a>

</body>
</html>`;

fs.writeFileSync('index.html', indexHtml);
fs.writeFileSync('technology.html', technologyHtml);
console.log('Successfully generated index.html and technology.html');
