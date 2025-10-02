import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, MoreHorizontal, User, Clock, CheckCircle2, Circle, AlertCircle, ArrowRight, GitBranch, Calendar, TrendingUp, Users, Target, Zap, MessageSquare, Filter, Search, Brain, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('board');
  const [selectedCard, setSelectedCard] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const projects = [
    {
      id: 'RATP-1',
      title: 'Refonte UX App RATP',
      type: 'Service Design',
      status: 'done',
      priority: 'high',
      assignee: 'Amine Djeghali',
      sprint: 'Sprint Q2 2023',
      storyPoints: 13,
      company: 'Projet Académique - Hetic',
      labels: ['UX Research', 'Service Design', 'Figma'],
      description: 'Comment faire rentrer l\'appli Bonjour RATP dans le quotidien des usagers du réseau ?',
      metrics: {
        interviews: 30,
        surveys: 32,
        personas: 5,
        testSuccess: '100%'
      },
      tasks: [
        { name: 'Framing & analyse concurrentielle', completed: true },
        { name: 'User Research (30+ entretiens)', completed: true },
        { name: 'Questionnaire quantitatif', completed: true },
        { name: 'Design Scope & Benchmarking', completed: true },
        { name: 'Prototypage Figma', completed: true },
        { name: 'Tests utilisateurs', completed: true }
      ],
      results: [
        'Redéfinition problématique post-research',
        '100% tests utilisateurs validés (GO)',
        'Prototype Figma fonctionnel livré',
        'Features prioritaires identifiées'
      ],
      link: 'https://www.figma.com/proto/2bEqHYrblu8f9wF877s3T0/RATP?page-id=205%3A52&type=design&node-id=762-5654&viewport=188%2C-3%2C0.02&t=nvSoEwQrZi5R3rqV-1&scaling=scale-down-width&starting-point-node-id=722%3A5357&mode=design'
    },
    {
      id: 'SEC-2',
      title: 'UNAVERSE - Plateforme Sécurité',
      type: 'Product Owner',
      status: 'done',
      priority: 'highest',
      assignee: 'Amine Djeghali',
      sprint: 'Oct 2021 - Sept 2023',
      storyPoints: 21,
      company: 'Securitas Technology',
      labels: ['B2B', 'Backlog', 'Scrum'],
      description: 'Plateforme web/mobile de pilotage sécurité pour gérer sites, agents, alarmes et événements de sécurité en temps réel',
      metrics: {
        users: '15k',
        stories: '250+',
        nps: '+56%',
        churn: '-20%'
      },
      tasks: [
        { name: 'Gestion backlog produit (Jira)', completed: true },
        { name: '250+ user stories rédigées', completed: true },
        { name: 'Priorisation features monitoring', completed: true },
        { name: 'Sprints avec équipe dev/design', completed: true },
        { name: 'Amélioration workflows principaux', completed: true },
        { name: 'Suivi KPIs (NPS, Churn)', completed: true }
      ],
      results: [
        'NPS amélioré : 32 → 50 (+56%)',
        'Churn client réduit de 20%',
        '15k professionnels utilisateurs',
        'Workflows de sécurité optimisés'
      ]
    },
    {
      id: 'MIN-3',
      title: 'Plateforme Agents Ministère',
      type: 'Product Manager',
      status: 'done',
      priority: 'high',
      assignee: 'Amine Djeghali',
      sprint: 'Sept 2022 - Oct 2024',
      storyPoints: 8,
      company: 'Ministère Écologie Énergie',
      labels: ['User Research', 'Workshops', 'Gov'],
      description: 'Améliorer l\'expérience des agents du ministère sur leur plateforme de travail quotidienne',
      metrics: {
        interviews: 30,
        workshops: 5,
        delivery: '-2 semaines',
        satisfaction: 'High'
      },
      tasks: [
        { name: '30 entretiens agents terrain', completed: true },
        { name: 'Identification pain points', completed: true },
        { name: '5 ateliers cross-fonctionnels', completed: true },
        { name: 'Transformation insights → features', completed: true },
        { name: 'Roadmap produit validée', completed: true },
        { name: 'Livraison itérative', completed: true }
      ],
      results: [
        'Livraison 2 semaines en avance',
        'Roadmap validée par utilisateurs',
        'Collaboration métier/design/dev efficace',
        'Pain points résolus'
      ]
    },
    {
      id: 'YOURZ-4',
      title: 'YOURZ - App Personnalisation',
      type: 'Developer & PM',
      status: 'done',
      priority: 'medium',
      assignee: 'Amine Djeghali',
      sprint: 'Juil 2020 - Juil 2021',
      storyPoints: 5,
      company: 'IOTA SYSTEM',
      labels: ['React Native', 'E-commerce', 'Mobile'],
      description: 'Application mobile de personnalisation de produits photo/déco - Transformez vos photos en objets personnalisés',
      metrics: {
        users: '2000+',
        resolution: '-25%',
        features: 'Multiple',
        platform: 'iOS/Android'
      },
      tasks: [
        { name: 'Développement React Native', completed: true },
        { name: 'UX personnalisation produits', completed: true },
        { name: 'Intégrations e-commerce', completed: true },
        { name: 'Système de paiement', completed: true },
        { name: 'Maintenance production', completed: true }
      ],
      results: [
        '2000+ utilisateurs actifs',
        'Temps résolution incidents -25%',
        'Plateforme e-commerce complète',
        'Personnalisation photo/déco réussie'
      ],
      link: 'https://yourz.me/'
    },
    {
      id: 'OLLIE-5',
      title: 'Ollie - App TDAH & IA',
      type: 'Product Manager',
      status: 'done',
      priority: 'highest',
      assignee: 'Amine Djeghali',
      sprint: 'Q1 2024',
      storyPoints: 13,
      company: 'Projet Startup',
      labels: ['IA', 'HealthTech', 'React Native'],
      description: 'Application mobile pour accompagner les parents d\'enfants atteints de TDAH - Reformulation et illustration de devoirs via IA',
      metrics: {
        mvp: 'React Native',
        ai: 'ChatGPT',
        stack: 'Node.js + AWS',
        users: 'Beta'
      },
      tasks: [
        { name: 'Stack technique définie (React Native + Node.js)', completed: true },
        { name: 'Intégration ChatGPT pour reformulation', completed: true },
        { name: 'Architecture AWS + Docker', completed: true },
        { name: 'Base de données Supabase', completed: true },
        { name: 'Analytics (MixPanel + Hotjar)', completed: true },
        { name: 'MVP déployé', completed: true }
      ],
      results: [
        'MVP fonctionnel avec IA intégrée',
        'Reformulation automatique de devoirs',
        'Architecture scalable (AWS + Docker)',
        'Stack complète : React Native, Node.js, ChatGPT'
      ],
      link: 'https://www.figma.com/design/uancUy5yyVBdK7YNnxEcq6/parcours-utilisateur-Ollie'
    }
  ];

  const statusConfig = {
    todo: { label: 'À FAIRE', icon: Circle, color: 'gray' },
    inprogress: { label: 'EN COURS', icon: AlertCircle, color: 'blue' },
    done: { label: 'TERMINÉ', icon: CheckCircle2, color: 'green' }
  };

  const priorityConfig = {
    highest: { label: 'Très haute', color: 'red', icon: '🔴' },
    high: { label: 'Haute', color: 'orange', icon: '🟠' },
    medium: { label: 'Moyenne', color: 'yellow', icon: '🟡' },
    low: { label: 'Basse', color: 'gray', icon: '⚪' }
  };

  const filteredProjects = filterStatus === 'all' 
    ? projects 
    : projects.filter(p => p.status === filterStatus);

  const ProjectCard = ({ project, onClick }) => {
    const StatusIcon = statusConfig[project.status].icon;
    return (
      <div 
        onClick={() => onClick(project)}
        className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-200 hover:border-blue-400"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500">{project.id}</span>
            <span className="text-lg">{priorityConfig[project.priority].icon}</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
          {project.title}
        </h3>
        
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.labels.map((label, idx) => (
            <span key={idx} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded">
              {label}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <StatusIcon className={`w-4 h-4 text-${statusConfig[project.status].color}-600`} />
            <span>{project.storyPoints} SP</span>
          </div>
          <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
            AD
          </div>
        </div>
      </div>
    );
  };

  const ProjectDetail = ({ project, onClose }) => {
    const StatusIcon = statusConfig[project.status].icon;
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div 
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                    {project.type}
                  </span>
                  <span className="text-gray-500 text-sm">{project.id}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <StatusIcon className={`w-4 h-4 text-${statusConfig[project.status].color}-600`} />
                <span className="font-medium">Statut:</span>
                <span className={`text-${statusConfig[project.status].color}-600`}>
                  {statusConfig[project.status].label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Priorité:</span>
                <span className={`text-${priorityConfig[project.priority].color}-600`}>
                  {priorityConfig[project.priority].icon} {priorityConfig[project.priority].label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Story Points:</span>
                <span>{project.storyPoints}</span>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Description
              </h3>
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{project.description}</p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Entreprise:</strong> {project.company} • <strong>Période:</strong> {project.sprint}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Métriques Clés
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-900">{value}</div>
                    <div className="text-xs text-gray-600 mt-1 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-purple-600" />
                Tâches ({project.tasks.filter(t => t.completed).length}/{project.tasks.length})
              </h3>
              <div className="space-y-2">
                {project.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle2 className={`w-5 h-5 ${task.completed ? 'text-green-600' : 'text-gray-300'}`} />
                    <span className={task.completed ? 'text-gray-700' : 'text-gray-400'}>
                      {task.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-600" />
                Résultats & Impact
              </h3>
              <div className="space-y-2">
                {project.results.map((result, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {project.link && (
              <div className="pt-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  {project.id === 'RATP-1' ? 'Voir le prototype Figma' : 
                   project.id === 'YOURZ-4' ? 'Visiter YOURZ' :
                   project.id === 'OLLIE-5' ? 'Voir les parcours Figma' : 'Voir le projet'}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Jira-style Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold text-gray-900">Portfolio • Amine Djeghali</h1>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                Product Owner
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:adjeghali@gmail.com" className="text-gray-600 hover:text-blue-600">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/amine-djeghali" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                AD
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('board')}
              className={`px-4 py-2 text-sm font-medium rounded ${
                activeTab === 'board'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📋 Board
            </button>
            <button
              onClick={() => setActiveTab('backlog')}
              className={`px-4 py-2 text-sm font-medium rounded ${
                activeTab === 'backlog'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📝 Backlog
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 py-2 text-sm font-medium rounded ${
                activeTab === 'about'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              👤 À propos
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Board View */}
        {activeTab === 'board' && (
          <>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Mes Projets ({projects.length})</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFilterStatus('all')}
                    className={`px-3 py-1 text-sm rounded ${
                      filterStatus === 'all' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Tous ({projects.length})
                  </button>
                  {Object.entries(statusConfig).map(([key, config]) => (
                    <button
                      key={key}
                      onClick={() => setFilterStatus(key)}
                      className={`px-3 py-1 text-sm rounded flex items-center gap-1 ${
                        filterStatus === key ? `bg-${config.color}-100 text-${config.color}-700` : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <config.icon className="w-3 h-3" />
                      {config.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Kanban Board */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(statusConfig).map(([status, config]) => {
                const StatusIcon = config.icon;
                const statusProjects = projects.filter(p => p.status === status);
                
                return (
                  <div key={status} className="bg-gray-100 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <StatusIcon className={`w-5 h-5 text-${config.color}-600`} />
                        <h3 className="font-semibold text-gray-900">{config.label}</h3>
                        <span className="text-sm text-gray-500">({statusProjects.length})</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {statusProjects.map(project => (
                        <ProjectCard 
                          key={project.id} 
                          project={project}
                          onClick={setSelectedCard}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Backlog View */}
        {activeTab === 'backlog' && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Liste de Projets</h2>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
                <div className="col-span-1">Type</div>
                <div className="col-span-4">Projet</div>
                <div className="col-span-2">Statut</div>
                <div className="col-span-2">Priorité</div>
                <div className="col-span-2">Entreprise</div>
                <div className="col-span-1">SP</div>
              </div>
              
              {/* Table Rows */}
              {filteredProjects.map(project => {
                const StatusIcon = statusConfig[project.status].icon;
                return (
                  <div 
                    key={project.id}
                    onClick={() => setSelectedCard(project)}
                    className="px-4 py-4 grid grid-cols-12 gap-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer items-center"
                  >
                    <div className="col-span-1">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                        {project.type.split(' ')[0]}
                      </span>
                    </div>
                    <div className="col-span-4">
                      <div className="font-medium text-gray-900">{project.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{project.id}</div>
                    </div>
                    <div className="col-span-2 flex items-center gap-2">
                      <StatusIcon className={`w-4 h-4 text-${statusConfig[project.status].color}-600`} />
                      <span className="text-sm text-gray-700">{statusConfig[project.status].label}</span>
                    </div>
                    <div className="col-span-2 flex items-center gap-2">
                      <span>{priorityConfig[project.priority].icon}</span>
                      <span className="text-sm text-gray-700">{priorityConfig[project.priority].label}</span>
                    </div>
                    <div className="col-span-2 text-sm text-gray-600">
                      {project.company.split(' ')[0]}
                    </div>
                    <div className="col-span-1 text-sm font-medium text-gray-900">
                      {project.storyPoints}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* About View */}
        {activeTab === 'about' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  AD
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Amine Djeghali</h2>
                  <p className="text-lg text-gray-600 mb-4">Product Owner • Product Manager</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Certifié PSM I</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">React Native</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Scrum</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">IA & ChatGPT</span>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Montreuil, France</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:adjeghali@gmail.com" className="text-blue-600 hover:underline">
                        adjeghali@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>06 15 39 20 17</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">À propos</h3>
                <p className="text-gray-700 mb-4">
                  Product Owner avec 3 ans d'expérience et un background développeur. Je transforme les problèmes utilisateurs en produits B2B performants avec des résultats mesurables.
                </p>
                <p className="text-gray-700">
                  Ma double compétence technique et produit me permet de collaborer efficacement avec les équipes dev/design/business pour livrer des fonctionnalités à forte valeur ajoutée. Spécialisé dans les produits B2B, l'intégration d'IA et les méthodologies agiles.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { value: '5', label: 'Projets livrés', icon: Briefcase },
                { value: '15k', label: 'Utilisateurs gérés', icon: Users },
                { value: '+56%', label: 'NPS amélioré', icon: TrendingUp },
                { value: '250+', label: 'User Stories', icon: MessageSquare }
              ].map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                    <StatIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Skills */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Compétences</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Product Management</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• Backlog Management (Jira)</div>
                    <div>• User Research & Interviews</div>
                    <div>• Analytics Produit (Amplitude, Mixpanel)</div>
                    <div>• A/B Testing</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Technique</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• React Native, Node.js</div>
                    <div>• REST / GraphQL</div>
                    <div>• SQL, Python</div>
                    <div>• AWS, Docker, Supabase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Project Detail Modal */}
      {selectedCard && (
        <ProjectDetail project={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
};

export default Portfolio;