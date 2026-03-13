import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, Layout, ExternalLink, 
  Code2, Sparkles, ArrowLeft, Download, MapPin, Plane, 
  Camera, Map, Coffee, Heart, TreePine, Mountain 
} from 'lucide-react';

import boogyImg from './assets/boogy.jpg';
import quickLivraisonImg from './assets/quick-livraison.jpg';
import carefleet from './assets/carefleet.png'
import peintureImg from './assets/peintureImg.jpg';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const personalInfo = {
    name: "Youssef El Mohammady",
    title: "Software Engineering Student | 3rd Year IIR @ EMSI",
    tagline: "Strong analytical and problem-solving abilities with attention to detail.",
    aboutMe: "Passionné par l'informatique et le développement, je transforme les défis techniques en solutions innovantes et performantes. Doté d'un fort esprit d'analyse, j'excelle dans la résolution de problèmes (problem-solving) et j'adore explorer de nouvelles technologies pour élargir mes compétences. Actuellement à la recherche d'un stage, je suis impatient de mettre ma passion, ma soif d'apprendre et mon esprit d'équipe au service d'une entreprise dynamique.",
    email: "elmohammady.dev@gmail.com",
    githubUrl: "https://github.com/ELMOHAMMADY-YOUSSEF",
    linkedinUrl: "https://www.linkedin.com/in/youssef-el-mohammady/",
    profileImage: "./photoprf.jpg"
  };

  const skills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, 
    { name: "Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PL/SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "UML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg" },
    { name: "Agile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "n8n", icon: "https://cdn.worldvectorlogo.com/logos/n8n.svg" }
  ];

  const projects = [
    {
      id: 1,
      title: "Boogy - E-commerce",
      description: "Plateforme e-commerce spécialisée dans la vente de pièces électroniques et gadgets.",
      longDescription: "Boogy est une application web moderne de type E-commerce. Elle offre une expérience utilisateur fluide avec un catalogue dynamique, une page 'Coming Soon' attractive, et une gestion de panier. L'interface est conçue pour mettre en avant les offres premium et les nouveautés.",
      tags: ["React","Laravel", "API"], 
      videoUrl: "https://www.youtube.com/embed/RYKKaCJcdrY", 
      image: boogyImg,
      github: null
    },
    {
      id: 2,
      title: "Quick Livraison - EMS",
      description: "Système complet de gestion des employés (Employee Management System).",
      longDescription: "Une plateforme d'administration robuste pour gérer les effectifs. Elle permet aux administrateurs de gérer les équipes, suivre les progrès et le temps de travail. Le système inclut une authentification sécurisée pour les admins et les employés.",
      tags: ["Laravel", "MySQL", "Bootstrap"],
      videoUrl: "https://www.youtube.com/embed/AcPudU0jV6Y", 
      image: quickLivraisonImg,
      github: "https://github.com/ELMOHAMMADY-YOUSSEF/Gestion_Employes_quicklivraison.git"
    },
    {
      id: 3,
      title: "Carefleet",
      description: "Application de location de voitures et suivi de maintenance, développé avec JavaScript, LocalStorage, Vite et Chart.js.",
      longDescription: "Carefleet est une plateforme dédiée à la location de véhicules et au suivi de leur maintenance. Il a été entièrement développé en utilisant JavaScript, LocalStorage et Vite. J'y ai également intégré la bibliothèque Chart.js pour la gestion et l'affichage des données.",
      videoUrl: "https://www.youtube.com/embed/kDMraZt8DEs", 
      image: carefleet,
      github: "https://github.com/ELMOHAMMADY-YOUSSEF/care_fleet.git" 
    },
    {
      id: 4,
      title: "Gestion Peintures",
      description: "Application CRUD pour la gestion d'inventaire de peintures avec Symfony.",
      longDescription: "Un projet backend réalisé avec le framework Symfony pour maîtriser les opérations fondamentales CRUD (Create, Read, Update, Delete). L'application permet de gérer une base de données de peintures, d'ajouter des œuvres, de modifier leurs détails et de les supprimer, avec une interface générée via Twig.",
      tags: ["Symfony", "MySQL", "Twig"], 
      videoUrl: "https://www.youtube.com/embed/hKMRog1qxDY?si=Nsq5dnO5OJhOwKME", 
      image: peintureImg,
      github: "https://github.com/ELMOHAMMADY-YOUSSEF/gestion_peintures_symfony.git"
    }
  ];

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-white animate-fadeIn">
        <nav className="p-6 max-w-6xl mx-auto flex items-center">
          <button onClick={() => setSelectedProject(null)} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors">
            <ArrowLeft size={20} /> Retour au portfolio
          </button>
        </nav>
        <main className="max-w-6xl mx-auto px-6 py-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900">{selectedProject.title}</h1>
          
          <div className="aspect-video w-full rounded-[30px] overflow-hidden bg-slate-900 shadow-2xl mb-12 border border-slate-200">
             <iframe 
               className="w-full h-full" 
               src={selectedProject.videoUrl} 
               title="Démonstration" 
               allowFullScreen
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             ></iframe>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">À propos du projet</h2>
                <p className="text-slate-600 text-lg leading-relaxed">{selectedProject.longDescription}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="font-bold mb-4 text-slate-900">Stack Technique</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm">{tag}</span>
                  ))}
                </div>
              </div>
              
              {selectedProject.github ? (
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <Github size={20} /> Voir sur GitHub
                </a>
              ) : (
                <div className="flex items-center justify-center gap-2 w-full py-4 bg-slate-100 text-slate-400 rounded-xl font-bold cursor-not-allowed">
                  <Github size={20} /> Code Privé
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 shadow-sm py-4'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="font-bold text-2xl text-blue-700 cursor-pointer">YM<span className="text-blue-500">.</span></div>
            
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#home" className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm">Accueil</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm">Compétences</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm">Projets</a>
              <a href="#cv" className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm">Mon CV</a>
              <a href="#hobbies" className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm">Loisirs</a>
              <a href="#contact" className="px-5 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg text-sm">Contact</a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg py-4 px-4 flex flex-col space-y-4 animate-fadeIn">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium">Accueil</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium">Compétences</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium">Projets</a>
            <a href="#cv" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium">Mon CV</a>
            <a href="#hobbies" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium">Loisirs</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-blue-600 font-bold">Contact</a>
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fadeInLeft">
          <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
            <Sparkles size={16} /> Portfolio 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Hello, I am <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              {personalInfo.name}
            </span>
          </h1>
          <h2 className="text-xl font-semibold text-slate-700">
            {personalInfo.title}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 text-justify">
            {personalInfo.aboutMe}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <a href="#projects" className="px-8 py-3.5 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all hover:-translate-y-1 font-medium">Voir mes projets</a>
            <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" className="px-8 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all hover:-translate-y-1 font-medium flex items-center justify-center gap-2">
              <Github size={20} /> GitHub
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fadeInRight">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-[8px] border-white shadow-2xl ring-1 ring-slate-100 transition-all duration-500 ease-out hover:scale-105 hover:-rotate-2 hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:border-blue-50 cursor-pointer group">
               <img 
                   src={personalInfo.profileImage}
                   alt="Profile" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Compétences Techniques</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 group cursor-default hover:-translate-y-1">
                <img src={skill.icon} alt={skill.name} className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-slate-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Projets Sélectionnés</h2>
            <p className="mt-4 text-slate-500 text-lg">Une sélection de mes travaux récents en développement web.</p>
          </div>
          <div className="space-y-20">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white rounded-[40px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row h-auto md:h-[500px]">
                <div className="md:w-1/2 bg-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                  <div className="absolute top-8 right-8 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <div className="bg-slate-100 p-3 rounded-full text-slate-900">
                       <ExternalLink size={24} />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{project.title}</h3>
                  <p className="text-slate-500 text-lg mb-8 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30"
                    >
                      Open Project
                      <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cv" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[30px] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Vous voulez voir le détail ?</h2>
              <p className="text-slate-400 text-lg">Téléchargez mon CV complet au format PDF.</p>
            </div>

            <a 
              href="./CV_Youssef_ElMohammady.pdf"
              download 
              className="relative z-10 flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-white/20 hover:-translate-y-1"
            >
              <Download size={20} className="text-blue-600" />
              Télécharger CV
            </a>
          </div>
        </div>
      </section>

      <section id="hobbies" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Loisirs & Inspiration</h2>
            <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative group">
               <div className="absolute inset-0 bg-green-100 rounded-[40px] rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
               
               <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white h-[500px]">
                 <img 
                   src="./ph2.jpeg" 
                   alt="Voyage et Nature" 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />
                 
                 <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/80 to-transparent text-white">
                    <div className="flex items-center gap-2 mb-2 text-green-300 font-medium">
                      <MapPin size={20} />
                      <span>Nature & Découverte</span>
                    </div>
                    <p className="italic text-lg opacity-90">"La nature est la meilleure source d'inspiration."</p>
                 </div>
               </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">La Nature, mon échappatoire</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  J'aime voyager dans des endroits où la nature est reine. C'est en m'éloignant du bruit de la ville et en explorant des paysages naturels que je trouve mon **inspiration**.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Ces moments de déconnexion sont essentiels pour moi : ils me permettent de recharger mes batteries et de revenir avec un esprit clair et créatif, prêt à relever de nouveaux défis techniques.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="bg-green-50 p-3 rounded-xl text-green-600">
                    <TreePine size={24} />
                  </div>
                  <span className="font-bold text-slate-700">Nature</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <Mountain size={24} />
                  </div>
                  <span className="font-bold text-slate-700">Randonnée</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="bg-orange-50 p-3 rounded-xl text-orange-600">
                    <Plane size={24} />
                  </div>
                  <span className="font-bold text-slate-700">Voyage</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="bg-purple-50 p-3 rounded-xl text-purple-600">
                    <Camera size={24} />
                  </div>
                  <span className="font-bold text-slate-700">Souvenirs</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Prêt à collaborer ?</h2>
          <p className="text-slate-400 mb-10 text-lg">Je suis actuellement disponible pour des opportunités de stage.</p>
          <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-blue-50 transition-all hover:scale-105">
            <Mail size={20} />
            {personalInfo.email}
          </a>
        </div>
      </section>

      <style>{`
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out; }
        .animate-fadeInRight { animation: fadeInRight 0.8s ease-out; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
      `}</style>
    </div>
  );
};

export default App;