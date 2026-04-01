import React, { useState } from 'react';
import { 
  Briefcase,
  BarChart,
  Settings2,
  PieChart,
  FileBarChart,
  LayoutDashboard, 
  Users, 
  Settings, 
  Building2, 
  BrainCircuit, 
  Network, 
  Bell, 
  HelpCircle, 
  Info, 
  ShieldCheck, 
  LogOut, 
  Search, 
  ChevronRight, 
  TrendingUp, 
  Handshake, 
  Zap, 
  UserSearch, 
  PlusCircle, 
  History, 
  AlertTriangle,
  Mail,
  Lock,
  Eye,
  ArrowRight,
  Shield,
  CheckCircle2,
  MoreVertical,
  Trash2,
  Home,
  GraduationCap,
  Stethoscope,
  ChevronLeft,
  Filter,
  RefreshCw,
  Smartphone,
  BarChart3,
  Code2,
  Terminal,
  Database,
  FileText,
  Activity,
  Globe,
  Download,
  Chrome,
  Monitor,
  DollarSign,
  Plus,
  Edit,
  Clock,
  ShieldCheck as ShieldCheckIcon,
  MoreHorizontal,
  Copy,
  CheckCircle,
  AlertCircle,
  Key,
  LogIn,
  ChevronDown,
  X,
  ArrowLeft,
  Code,
  Brain,
  GripVertical,
  Scale,
  Fingerprint,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast, Toaster } from 'sonner';

// --- Types ---
type View = 
  | 'login' 
  | 'dashboard' 
  | 'deals'
  | 'reports'
  | 'loan-purposes' 
  | 'profile' 
  | 'scored-users' 
  | 'psychometric' 
  | 'score-variables' 
  | 'api-analytics' 
  | 'api-reference'
  | 'asset-requirements'
  | 'audit-logs'
  | 'company-config'
  | 'create-company'
  | 'system-health'
  | 'user-management'
  | 'settings'
  | 'scored-user-detail'
  | 'score-scheme-config'
  | 'variable-config'
  | 'variable-category-config'
  | 'variable-group-config'
  | 'variable-hierarchy';

// --- Components ---

const Sidebar = ({ currentView, setView, branding, isOpen, onClose }: { currentView: View, setView: (v: View) => void, branding: string, isOpen: boolean, onClose: () => void }) => {
  const sections = [
    {
      title: 'Management',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'deals', label: 'Deals', icon: Briefcase },
        { id: 'reports', label: 'Reports', icon: BarChart },
        { id: 'scored-users', label: 'Scored Users', icon: Users },
        { id: 'loan-purposes', label: 'Loan Purposes', icon: FileText },
        { id: 'psychometric', label: 'Psychometric Setup', icon: BrainCircuit },
        { id: 'score-variables', label: 'Score Variables', icon: Network },
        { id: 'asset-requirements', label: 'Asset Registry', icon: Database },
        { id: 'company-config', label: 'Entities', icon: Building2 },
        { id: 'user-management', label: 'Admin Users', icon: Shield },
      ]
    },
    {
      title: 'Scoring Engine',
      items: [
        { id: 'score-scheme-config', label: 'Score Scheme', icon: Settings2 },
        { id: 'variable-config', label: 'Variable Config', icon: Code2 },
        { id: 'variable-category-config', label: 'Categories', icon: Layers },
        { id: 'variable-group-config', label: 'Groups', icon: Building2 },
        { id: 'variable-hierarchy', label: 'Hierarchy', icon: Network },
      ]
    },
    {
      title: 'Developer Hub',
      items: [
        { id: 'api-analytics', label: 'API Analytics', icon: BarChart3 },
        { id: 'api-reference', label: 'API Reference', icon: Code2 },
        { id: 'audit-logs', label: 'Audit Logs', icon: History },
        { id: 'system-health', label: 'System Health', icon: Activity },
      ]
    },
    {
      title: 'Account',
      items: [
        { id: 'profile', label: 'User Profile', icon: UserSearch },
        { id: 'settings', label: 'Global Settings', icon: Settings2 },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[45] lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={`fixed left-0 top-0 h-full w-64 bg-slate-50 border-r border-slate-200/50 flex flex-col z-50 transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-primary tracking-tight">{branding}</h1>
            <p className="text-[9px] uppercase tracking-widest text-slate-400 mt-0.5">Enterprise Admin</p>
          </div>
          <button onClick={onClose} className="lg:hidden p-2 text-slate-400 hover:text-primary transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex-1 px-3 space-y-4 overflow-y-auto custom-scrollbar pb-10">
          {sections.map((section) => (
            <div key={section.title}>
              <p className="px-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                {section.title}
              </p>
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setView(item.id as View);
                      if (window.innerWidth < 1024) onClose();
                    }}
                    className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg transition-all text-left ${
                      currentView === item.id 
                        ? 'text-primary font-semibold border-r-2 border-primary bg-white shadow-sm' 
                        : 'text-slate-500 hover:text-primary hover:bg-slate-100'
                    }`}
                  >
                    <item.icon size={16} />
                    <span className="text-xs">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <button 
          onClick={() => {
            setView('profile');
            if (window.innerWidth < 1024) onClose();
          }}
          className="p-4 border-t border-slate-100 bg-slate-50 w-full text-left hover:bg-slate-100 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-full bg-primary-container flex items-center justify-center text-white font-bold text-[10px]">AR</div>
            <div>
              <p className="font-medium text-on-surface text-xs">Alex Rivera</p>
              <p className="text-[9px] text-on-surface-variant">System Admin</p>
            </div>
          </div>
        </button>
      </aside>
    </>
  );
};

const TopBar = ({ title, breadcrumbs, setView, onOpenSidebar }: { title: string, breadcrumbs: string[], setView: (v: View) => void, onOpenSidebar: () => void }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  
  const notifications = [
    { id: 1, title: 'Security Alert', message: 'New login detected from IP 192.168.1.104', time: '2 mins ago', type: 'error', icon: Shield },
    { id: 2, title: 'System Update', message: 'Maintenance scheduled for Oct 28, 02:00 AM UTC', time: '1 hour ago', type: 'info', icon: Clock },
    { id: 3, title: 'New Deal Created', message: 'Partner Alpha initialized a new MSME deal', time: '3 hours ago', type: 'success', icon: Handshake },
  ];

  const searchResults = searchQuery.length > 1 ? [
    { id: 1, title: 'Alex Rivera', category: 'Admin Users', icon: Shield },
    { id: 2, title: 'Commercial Real Estate v2', category: 'Deals', icon: Briefcase },
    { id: 3, title: 'API Key Rotation', category: 'Audit Logs', icon: History },
    { id: 4, title: 'Psychometric v4', category: 'Setup', icon: BrainCircuit },
  ].filter(r => r.title.toLowerCase().includes(searchQuery.toLowerCase())) : [];

  return (
    <header className="flex justify-between items-center w-full px-4 sm:px-8 h-14 bg-white/80 backdrop-blur-md sticky top-0 border-b border-slate-100 z-40">
      <div className="flex items-center space-x-3 sm:space-x-6">
        <button 
          onClick={onOpenSidebar}
          className="lg:hidden p-2 text-slate-400 hover:text-primary transition-colors"
        >
          <GripVertical size={20} />
        </button>
        
        <div className="relative hidden sm:block">
          <div className="flex items-center bg-surface-container-low px-3 py-1 rounded-lg group border border-transparent focus-within:border-primary/20 transition-all">
            <Search size={14} className="text-slate-400" />
            <input 
              className="bg-transparent border-none focus:ring-0 text-xs w-48 md:w-64 placeholder:text-slate-400 outline-none" 
              placeholder="Global Search..." 
              type="text" 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearch(true);
              }}
              onFocus={() => setShowSearch(true)}
            />
          </div>
          <AnimatePresence>
            {showSearch && searchQuery.length > 0 && (
              <>
                <div className="fixed inset-0 z-[-1]" onClick={() => setShowSearch(false)}></div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50"
                >
                  <div className="p-4 border-b border-slate-50 bg-slate-50/50">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Search Results</p>
                  </div>
                  <div className="max-h-80 overflow-y-auto p-2">
                    {searchResults.length > 0 ? searchResults.map((result) => (
                      <button 
                        key={result.id} 
                        onClick={() => {
                          toast.success(`Navigating to ${result.title}`);
                          setShowSearch(false);
                        }}
                        className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-all text-left group"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                          <result.icon size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-700">{result.title}</p>
                          <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{result.category}</p>
                        </div>
                      </button>
                    )) : (
                      <div className="p-8 text-center">
                        <Search size={32} className="text-slate-200 mx-auto mb-3" />
                        <p className="text-sm text-slate-400">No results found for "{searchQuery}"</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        <nav className="flex items-center space-x-2 text-[10px] font-medium uppercase tracking-wider text-slate-400">
          {breadcrumbs.map((crumb, i) => (
            <React.Fragment key={crumb}>
              <span className={i === breadcrumbs.length - 1 ? 'text-primary' : 'hover:text-primary cursor-pointer'}>
                {crumb}
              </span>
              {i < breadcrumbs.length - 1 && <ChevronRight size={12} />}
            </React.Fragment>
          ))}
        </nav>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={`p-2 transition-all relative rounded-lg ${showNotifications ? 'bg-primary/10 text-primary' : 'text-slate-400 hover:text-primary'}`}
          >
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
          </button>

          <AnimatePresence>
            {showNotifications && (
              <>
                <div 
                  className="fixed inset-0 z-[-1]" 
                  onClick={() => setShowNotifications(false)}
                ></div>
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50"
                >
                  <div className="p-4 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                    <h4 className="text-sm font-bold text-on-surface uppercase tracking-widest">Notifications</h4>
                    <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded-full">3 New</span>
                  </div>
                  <div className="max-h-96 overflow-y-auto custom-scrollbar">
                    {notifications.map((n) => (
                      <div key={n.id} className="p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer group">
                        <div className="flex gap-3">
                          <div className={`p-2 rounded-lg shrink-0 ${
                            n.type === 'error' ? 'bg-red-50 text-red-500' : 
                            n.type === 'success' ? 'bg-emerald-50 text-emerald-500' : 
                            'bg-blue-50 text-blue-500'
                          }`}>
                            <n.icon size={16} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">{n.title}</p>
                            <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{n.message}</p>
                            <p className="text-[10px] text-slate-400 font-medium mt-2 uppercase tracking-tighter">{n.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => toast.info('Redirecting to notification center...')}
                    className="w-full py-3 text-xs font-bold text-primary hover:bg-primary/5 transition-colors border-t border-slate-50"
                  >
                    View All Notifications
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        <button 
          onClick={() => toast.info('Opening help center...')}
          className="p-2 text-slate-400 hover:text-primary transition-all"
        >
          <HelpCircle size={20} />
        </button>
        <div className="h-6 w-px bg-slate-100 mx-2"></div>
        <button 
          onClick={() => setView('profile')}
          className="flex items-center space-x-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-all"
        >
          <span>Profile Settings</span>
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-200">
            <img 
              alt="User Avatar" 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/admin/100/100" 
            />
          </div>
        </button>
      </div>
    </header>
  );
};

// --- Views ---

const LoginView = ({ onLogin }: { onLogin: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col atmospheric-bg">
      {/* TopAppBar */}
      <header className="bg-[#f7f9fb]/80 backdrop-blur-md flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 w-full fixed top-0 z-50 border-b border-slate-100">
        <div className="text-lg sm:text-xl font-bold tracking-tighter text-primary">Azure Horizon</div>
        <div className="flex items-center space-x-2 sm:space-x-6">
          <button 
            onClick={() => toast.info('Support portal is currently being updated.')}
            className="flex items-center space-x-2 cursor-pointer hover:bg-slate-100 transition-colors px-2 sm:px-3 py-1 rounded-full group"
          >
            <HelpCircle size={14} className="text-slate-500" />
            <span className="font-medium text-xs sm:text-sm tracking-wide text-slate-600 hidden sm:inline">Support</span>
          </button>
          <button 
            onClick={() => toast.info('System status: All systems operational.')}
            className="flex items-center space-x-2 cursor-pointer hover:bg-slate-100 transition-colors px-2 py-1 rounded-full"
          >
            <Info size={14} className="text-slate-500" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center pt-14 sm:pt-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 py-8 sm:py-12 gap-8 lg:gap-24">
          {/* Visual Editorial Column */}
          <div className="hidden lg:flex flex-col max-w-md space-y-6 text-left">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2 block">System Access</span>
              <h1 className="text-4xl xl:text-5xl font-bold leading-tight text-on-surface tracking-tight">
                Secure Gateway <br/>to Enterprise Intelligence.
              </h1>
            </div>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed opacity-80">
              Access the SSL-ACS Admin Portal to manage secure protocols, coordinate atmospheric data, and architect cloud infrastructure for the global horizon.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-sm border border-white/50">
                <ShieldCheck size={20} className="text-primary mb-2" />
                <div className="text-sm font-bold block mb-0.5 text-on-surface">Multi-Factor</div>
                <span className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">Active Protection</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-sm border border-white/50">
                <Network size={20} className="text-primary mb-2" />
                <div className="text-sm font-bold block mb-0.5 text-on-surface">SSO Ready</div>
                <span className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">Enterprise Login</span>
              </div>
            </div>
          </div>

          {/* Login Card Column */}
          <div className="w-full max-w-md">
            <div className="glass-panel p-6 sm:p-10 rounded-2xl ambient-shadow border border-outline-variant/20 relative overflow-hidden">
              {/* Subtle decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <div className="relative z-10">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight mb-2">Welcome Back</h2>
                  <p className="text-xs sm:text-sm text-on-surface-variant font-medium">Please enter your credentials to access the portal.</p>
                </div>
                <form className="space-y-4 sm:space-y-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                  {/* Email Field */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-[10px] sm:text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1" htmlFor="email">Email Address</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail size={16} className="text-slate-400 group-focus-within:text-primary transition-colors" />
                      </div>
                      <input 
                        className="w-full pl-11 pr-4 py-2.5 sm:py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-300 text-xs sm:text-sm" 
                        id="email" 
                        placeholder="admin@azurehorizon.com" 
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  {/* Password Field */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex justify-between items-center ml-1">
                      <label className="text-[10px] sm:text-xs font-bold text-on-surface-variant uppercase tracking-widest" htmlFor="password">Password</label>
                      <button 
                        type="button"
                        onClick={() => toast.info('Password reset link sent to your email.')}
                        className="text-[10px] sm:text-xs font-bold text-primary hover:underline transition-all"
                      >
                        Forgot?
                      </button>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock size={16} className="text-slate-400 group-focus-within:text-primary transition-colors" />
                      </div>
                      <input 
                        className="w-full pl-11 pr-12 py-2.5 sm:py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-300 text-xs sm:text-sm" 
                        id="password" 
                        placeholder="••••••••" 
                        type="password"
                        required
                      />
                      <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-primary transition-colors" type="button">
                        <Eye size={16} />
                      </button>
                    </div>
                  </div>
                  {/* Remember Me */}
                  <div className="flex items-center justify-between py-1 sm:py-2">
                    <label className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group ml-1">
                      <input className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-slate-300 text-primary focus:ring-primary/20" type="checkbox"/>
                      <span className="text-[10px] sm:text-xs text-on-surface-variant font-medium group-hover:text-on-surface transition-colors">Remember this session</span>
                    </label>
                  </div>
                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 sm:py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center space-x-2 group active:scale-[0.98]"
                  >
                    <span className="text-sm">Sign In to Portal</span>
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-100">
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Or connect with</span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        aria-label="Continue with Google"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:text-primary hover:shadow-md"
                      >
                        <Chrome size={18} />
                      </button>
                      <button
                        type="button"
                        aria-label="Continue with Microsoft"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:text-primary hover:shadow-md"
                      >
                        <Monitor size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Shared UI Components ---

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-200/50"
      >
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <h3 className="font-semibold text-slate-800">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <Plus className="rotate-45" size={20} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

// --- Views ---



const DashboardView = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {[
          { label: 'Total Scored Users', value: '15,240', trend: '+12.5% from last month', icon: UserSearch, color: 'primary' },
          { label: 'Active Deals', value: '12', trend: 'Currently processing MSME/Retail', icon: Handshake, color: 'secondary' },
          { label: 'Scored Today', value: '342', trend: 'Real-time engine performance: Optimal', icon: Zap, color: 'tertiary' },
        ].map((stat, i) => (
          <div key={i} className="bg-surface-container-lowest p-4 sm:p-5 rounded-xl ambient-shadow border border-slate-100/50 group hover:translate-y-[-2px] transition-all">
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">{stat.label}</span>
              <div className={`p-1.5 bg-primary/5 text-primary rounded-lg`}>
                <stat.icon size={18} />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">{stat.value}</div>
            <div className={`mt-1.5 flex items-center text-[10px] sm:text-xs ${i === 0 ? 'text-emerald-600' : 'text-on-surface-variant'} font-medium`}>
              {i === 0 && <TrendingUp size={12} className="mr-1" />}
              {stat.trend}
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        <div className="lg:col-span-8 bg-surface-container-lowest p-4 sm:p-6 lg:p-8 rounded-xl ambient-shadow border border-slate-100/50">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 sm:mb-8 gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-on-surface">Scoring Velocity</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant">Daily scored users over the last 30 days</p>
            </div>
            <div className="flex space-x-1.5">
              <button className="px-3 py-1 text-[10px] font-medium rounded-full bg-primary text-white">30D</button>
              <button className="px-3 py-1 text-[10px] font-medium rounded-full text-on-surface-variant hover:bg-slate-100 transition-colors">90D</button>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between space-x-2 relative">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
              {[1, 2, 3, 4].map(i => <div key={i} className="border-b border-on-surface w-full"></div>)}
            </div>
            {[40, 55, 45, 70, 65, 85, 60, 50, 40, 55, 75].map((h, i) => (
              <div 
                key={i} 
                className={`w-full ${i === 5 ? 'bg-primary' : 'bg-secondary-container/30'} rounded-t-sm transition-all cursor-pointer hover:bg-primary relative group`}
                style={{ height: `${h}%` }}
              >
                {i === 5 && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    342 Users (Today)
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-on-surface-variant font-medium uppercase tracking-tighter">
            <span>1 Oct</span>
            <span>8 Oct</span>
            <span>15 Oct</span>
            <span>22 Oct</span>
            <span>Today</span>
          </div>
        </div>

        <div className="lg:col-span-4 bg-surface-container-lowest p-8 rounded-xl ambient-shadow border border-slate-100/50 flex flex-col">
          <h3 className="text-lg font-semibold text-on-surface mb-2">Score Distribution</h3>
          <p className="text-sm text-on-surface-variant mb-8">Portfolio risk segmentation</p>
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="relative w-48 h-48 rounded-full border-[18px] border-slate-100 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="50%" cy="50%" fill="transparent" r="42%" stroke="#0056b5" strokeDasharray="282" strokeDashoffset="155" strokeWidth="18"></circle>
                <circle cx="50%" cy="50%" fill="transparent" r="42%" stroke="#505f76" strokeDasharray="282" strokeDashoffset="183" strokeWidth="18"></circle>
              </svg>
              <div className="text-center">
                <span className="text-2xl font-bold text-on-surface">15.2k</span>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Total</p>
              </div>
            </div>
            <div className="mt-8 w-full space-y-3">
              {[
                { label: 'High Credit', value: '45%', color: 'bg-primary' },
                { label: 'Medium Credit', value: '35%', color: 'bg-secondary' },
                { label: 'Low Credit', value: 'bg-surface-container-highest', color: 'bg-slate-300' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-sm text-on-surface-variant">{item.label}</span>
                  </div>
                  <span className="text-sm font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-surface-container-lowest rounded-xl ambient-shadow border border-slate-100/50 overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-on-surface">Recent Scoring Actions</h3>
            <p className="text-sm text-on-surface-variant">Audit log of system events and computations</p>
          </div>
          <button className="text-primary text-sm font-semibold hover:underline">View All Logs</button>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { title: 'Rahim Khan scored - ', highlight: 'Score: 780', sub: 'Engine: Retail_V4.2 • Verification Successful', time: '2 mins ago', status: 'Approved', icon: UserSearch, iconColor: 'bg-primary/10 text-primary', statusColor: 'bg-emerald-100 text-emerald-700' },
            { title: 'New Deal created: ', highlight: 'MSME Default', sub: 'Originated by: Corporate_Partner_Alpha', time: '14 mins ago', status: 'System Event', icon: Building2, iconColor: 'bg-blue-100 text-blue-700', statusColor: 'bg-slate-100 text-slate-500' },
            { title: 'Parameter Update: Threshold Adjusted', highlight: '', sub: 'User: SystemAdmin • Change: Risk_Ceiling (+0.5%)', time: '1 hour ago', status: 'Configuration', icon: RefreshCw, iconColor: 'bg-tertiary-fixed text-tertiary', statusColor: 'bg-blue-100 text-blue-700' },
            { title: 'Scoring Timeout Exception', highlight: '', sub: 'API Endpoint: /v1/score • Request Retried', time: '3 hours ago', status: 'Error', icon: AlertTriangle, iconColor: 'bg-error/10 text-error', statusColor: 'bg-error-container text-error' },
          ].map((action, i) => (
            <div key={i} className="p-6 flex items-center justify-between hover:bg-surface-container-low transition-colors group">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full ${action.iconColor} flex items-center justify-center`}>
                  <action.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{action.title} <span className="text-primary">{action.highlight}</span></p>
                  <p className="text-xs text-on-surface-variant">{action.sub}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium text-on-surface">{action.time}</p>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-tight ${action.statusColor}`}>{action.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ScoredUsersView = ({ setView }: { setView: (view: string) => void }) => {
  const users = [
    { id: '#UA-89210', name: 'Eleanor Maxwell', deal: 'Azure Horizon Q4', score: 94.5, status: 'Scored', date: 'Oct 24, 2023', initial: 'EM' },
    { id: '#UA-89211', name: 'Julian Blackwood', deal: 'Sky Peak Ventures', score: null, status: 'Pending', date: 'Oct 25, 2023', initial: 'JB' },
    { id: '#UA-89212', name: 'Sarah Chen', deal: 'Azure Horizon Q4', score: 0, status: 'Error', date: 'Oct 25, 2023', initial: 'SC' },
    { id: '#UA-89213', name: 'Marcus Reed', deal: 'North Star Capital', score: 71.2, status: 'Scored', date: 'Oct 23, 2023', initial: 'MR' },
    { id: '#UA-89214', name: 'Katherine Price', deal: 'Sky Peak Ventures', score: 88.9, status: 'Scored', date: 'Oct 22, 2023', initial: 'KP' },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-on-surface tracking-tight">Scored User Profiles</h2>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-1 sm:mt-2 max-w-lg">Manage and evaluate scoring metrics across all active deals and user applications.</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-secondary-container text-on-secondary-container rounded-xl font-semibold text-xs sm:text-sm hover:brightness-95 transition-all">
            <Download size={16} />
            Export Data
          </button>
          <button className="flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-primary text-white rounded-xl font-semibold text-xs sm:text-sm shadow-lg shadow-primary/20 hover:shadow-xl transition-all">
            <PlusCircle size={16} />
            New Assessment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: 'Total Scored Users', value: '2,841', change: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Average Score', value: '84.2', change: '88%', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Pending Review', value: '154', change: 'Active', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: 'Processing Errors', value: '23', change: '-4%', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-surface-container-lowest p-4 sm:p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 ${stat.bg} ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon size={18} />
              </div>
              <span className={`text-[9px] sm:text-[10px] font-bold ${stat.color} ${stat.bg} px-2 py-0.5 sm:py-1 rounded-full`}>{stat.change}</span>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-on-surface leading-none mb-1">{stat.value}</p>
              <p className="text-[10px] font-medium text-on-surface-variant uppercase tracking-widest">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-container-low p-1.5 sm:p-2 rounded-2xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {['All Users', 'Scored', 'Pending', 'Error'].map((tab, i) => (
            <button key={tab} className={`whitespace-nowrap px-3 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm rounded-xl transition-all ${i === 0 ? 'bg-white shadow-sm text-primary font-bold' : 'text-on-surface-variant font-medium hover:bg-white/50'}`}>
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative flex-1 sm:flex-none">
            <select className="w-full sm:w-auto appearance-none bg-white border border-slate-200 rounded-xl px-4 py-2 sm:px-5 sm:py-2.5 pr-10 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-primary/10 outline-none cursor-pointer">
              <option>Deal: All Entities</option>
              <option>Deal: Azure Horizon</option>
              <option>Deal: Sky Peak Ventures</option>
            </select>
            <ChevronRight size={14} className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 pointer-events-none" />
          </div>
          <button className="p-2 sm:p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-slate-100 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-slate-50">
              {['User ID', 'Full Name', 'Deal Name', 'Score', 'Status', 'Date', 'Actions'].map(head => (
                <th key={head} className="px-4 py-3 sm:px-6 sm:py-4 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {users.map((user, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors group">
                <td className="px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-mono text-primary font-semibold">{user.id}</td>
                <td className="px-4 py-3 sm:px-6 sm:py-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-[10px] sm:text-xs">{user.initial}</div>
                    <span className="text-xs sm:text-sm font-semibold text-on-surface">{user.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-on-surface-variant">{user.deal}</td>
                <td className="px-4 py-3 sm:px-6 sm:py-4">
                  {user.score !== null ? (
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-bold text-on-surface">{user.score || '--'}</span>
                      {user.score > 0 && (
                        <div className="hidden sm:block w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${user.score}%` }}></div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-xs italic text-slate-400">Processing...</span>
                  )}
                </td>
                <td className="px-4 py-3 sm:px-6 sm:py-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase ${
                    user.status === 'Scored' ? 'bg-green-50 text-green-700' :
                    user.status === 'Pending' ? 'bg-orange-50 text-orange-700' :
                    'bg-red-50 text-red-700'
                  }`}>
                    <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${
                      user.status === 'Scored' ? 'bg-green-500' :
                      user.status === 'Pending' ? 'bg-orange-500' :
                      'bg-red-500'
                    }`}></span>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-on-surface-variant">{user.date}</td>
                <td className="px-4 py-3 sm:px-6 sm:py-4">
                  <button 
                    onClick={() => setView('scored-user-detail')}
                    className="p-1.5 sm:p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                  >
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs font-medium text-slate-400">Showing <span className="text-on-surface font-bold">1-10</span> of 2,841 profiles</p>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white"><ChevronLeft size={16} /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white text-xs font-bold">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white text-xs font-bold">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PsychometricSetupView = () => {
  return (
    <div className="p-4 sm:p-8 lg:p-12 max-w-5xl mx-auto space-y-6 sm:space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-on-surface mb-1 sm:mb-2">Add Psychometric Question</h1>
          <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant">Define a new assessment metric to evaluate psychological markers in the credit risk profile.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100 rounded-xl transition-colors">Cancel</button>
          <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">Save Question</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        <div className="lg:col-span-8 space-y-6 sm:space-y-8">
          <section className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-1 h-5 sm:w-1.5 sm:h-6 bg-primary rounded-full"></div>
              <h3 className="text-lg sm:text-xl font-bold text-on-surface">Question Content</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-1.5 sm:space-y-2">
                <label className="block text-[10px] sm:text-[0.75rem] font-bold text-slate-400 uppercase tracking-widest">Question Title (English)</label>
                <input className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="e.g., How do you prioritize tasks under pressure?" />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label className="block text-[10px] sm:text-[0.75rem] font-bold text-slate-400 uppercase tracking-widest">Question Title (Bengali)</label>
                <input className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="উদাঃ চাপের মুখে আপনি কীভাবে কাজকে অগ্রাধিকার দেন?" />
              </div>
            </div>
          </section>

          <section className="bg-slate-50 p-5 sm:p-8 rounded-2xl border border-slate-100">
            <div className="flex justify-between items-center mb-6 sm:mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 sm:w-1.5 sm:h-6 bg-primary rounded-full"></div>
                <h3 className="text-lg sm:text-xl font-bold text-on-surface">Response Options</h3>
              </div>
              <button className="flex items-center gap-1.5 text-primary font-bold text-xs sm:text-sm hover:underline">
                <PlusCircle size={16} />
                Add Option
              </button>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {[
                { id: 1, text: 'I handle it with extreme calm', score: 10 },
                { id: 2, text: 'I occasionally feel stressed but manage', score: 5 },
              ].map((opt) => (
                <div key={opt.id} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm flex items-center gap-3 sm:gap-4 group">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-blue-50 rounded-full flex items-center justify-center font-bold text-primary text-xs sm:text-sm">{opt.id}</div>
                  <div className="flex-grow grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4">
                    <div className="sm:col-span-8">
                      <input className="w-full bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 px-0 py-1.5 sm:py-2 text-xs sm:text-sm" defaultValue={opt.text} />
                    </div>
                    <div className="sm:col-span-4">
                      <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-lg">
                        <label className="text-[9px] sm:text-[0.65rem] font-bold text-slate-400 uppercase tracking-tighter px-2">Score</label>
                        <input className="w-full bg-white border-0 rounded-md py-1 text-center font-bold text-primary focus:ring-1 focus:ring-primary text-xs sm:text-sm" type="number" defaultValue={opt.score} />
                      </div>
                    </div>
                  </div>
                  <button className="text-slate-300 hover:text-red-500 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <div className="bg-white/50 border-2 border-dashed border-slate-200 p-4 sm:p-6 rounded-xl flex items-center justify-center gap-2 text-slate-400 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <PlusCircle size={16} />
                <span className="text-xs sm:text-sm font-bold">Add another option...</span>
              </div>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4 space-y-6 sm:space-y-8">
          <section className="bg-slate-100 p-5 sm:p-8 rounded-2xl space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-5 sm:w-1.5 sm:h-6 bg-primary rounded-full"></div>
              <h3 className="text-lg sm:text-xl font-bold text-on-surface">Classification</h3>
            </div>
            <div className="space-y-5 sm:space-y-6">
              <div className="space-y-1.5 sm:space-y-2">
                <label className="block text-[10px] sm:text-[0.75rem] font-bold text-slate-400 uppercase tracking-widest">Target Feature</label>
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none">
                  <option>Conscientiousness</option>
                  <option>Emotional Stability</option>
                  <option>Integrity/Honesty</option>
                </select>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label className="block text-[10px] sm:text-[0.75rem] font-bold text-slate-400 uppercase tracking-widest">Score Weight (Impact)</label>
                <div className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200">
                  <input className="w-full h-1.5 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-primary" type="range" min="1" max="10" defaultValue="5" />
                  <div className="flex justify-between mt-2 text-[9px] sm:text-[0.7rem] font-bold text-slate-400">
                    <span>LOW (1)</span>
                    <span className="text-primary font-black">X5.0</span>
                    <span>CRITICAL (10)</span>
                  </div>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-2 italic leading-relaxed">Multiplier applied to the total psychometric score.</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="relative space-y-4">
              <h4 className="text-sm font-bold text-primary uppercase tracking-widest">Visibility</h4>
              <div className="flex items-center gap-3 py-3 px-4 bg-slate-50 rounded-lg">
                <CheckCircle size={20} className="text-green-600" />
                <span className="text-sm font-semibold">Active in Pool</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">Questions are immediately available for inclusion in the adaptive assessment engine upon saving.</p>
            </div>
          </section>

          <div className="sticky bottom-8 flex flex-col gap-3 pt-8">
            <button className="w-full bg-primary text-white py-4 px-6 rounded-xl font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98] transition-all">
              <ShieldCheck size={20} />
              Save Question
            </button>
            <button className="w-full bg-slate-200 text-slate-600 py-4 px-6 rounded-xl font-bold hover:bg-slate-300 transition-colors">
              Cancel
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

const ScoreVariablesView = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-6 sm:space-y-8">
      <header>
        <div className="flex items-center gap-2 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2 sm:mb-3">
          <span className="w-6 sm:w-8 h-[2px] bg-primary"></span>
          Configuration Module
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight mb-2 sm:mb-4">Amount Eligibility Form</h1>
        <p className="text-xs sm:text-sm lg:text-base text-on-surface-variant leading-relaxed max-w-2xl font-medium">Define capital allocation thresholds by mapping credit score brackets to maximum eligible financing amounts.</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        <div className="lg:col-span-8 space-y-6 sm:space-y-8">
          <div className="bg-slate-50 p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <div className="space-y-0.5 sm:space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-on-surface">Eligibility Matrix</h3>
                <p className="text-[10px] sm:text-xs text-on-surface-variant font-medium">Configure amount tiers per credit score range.</p>
              </div>
              <div className="w-full sm:w-64">
                <label className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1 px-1">Active Deal Type</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-bold focus:ring-2 focus:ring-primary/10 outline-none">
                    <option>Commercial Real Estate v2</option>
                    <option>SMB Growth Capital</option>
                  </select>
                  <ChevronRight size={14} className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="hidden sm:grid grid-cols-12 gap-4 px-4 pb-2">
                <div className="col-span-3 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-slate-400">Min Score</div>
                <div className="col-span-3 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-slate-400">Max Score</div>
                <div className="col-span-5 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-slate-400">Max Amount ($)</div>
                <div className="col-span-1"></div>
              </div>
              {[
                { min: 300, max: 580, amount: '25,000' },
                { min: 581, max: 669, amount: '150,000' },
                { min: 670, max: 739, amount: '500,000' },
              ].map((tier, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-transparent hover:border-primary/20 transition-all">
                  <div className="col-span-1 sm:col-span-3">
                    <label className="sm:hidden text-[9px] uppercase tracking-widest font-bold text-slate-400 block mb-1">Min Score</label>
                    <input className="w-full bg-slate-50 border-0 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-bold text-primary focus:ring-2 focus:ring-primary/20" type="number" defaultValue={tier.min} />
                  </div>
                  <div className="col-span-1 sm:col-span-3">
                    <label className="sm:hidden text-[9px] uppercase tracking-widest font-bold text-slate-400 block mb-1">Max Score</label>
                    <input className="w-full bg-slate-50 border-0 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-bold text-primary focus:ring-2 focus:ring-primary/20" type="number" defaultValue={tier.max} />
                  </div>
                  <div className="col-span-1 sm:col-span-5">
                    <label className="sm:hidden text-[9px] uppercase tracking-widest font-bold text-slate-400 block mb-1">Max Amount ($)</label>
                    <div className="relative">
                      <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs sm:text-sm">$</span>
                      <input className="w-full bg-slate-50 border-0 rounded-lg pl-7 sm:pl-8 pr-3 sm:pr-4 py-2 sm:py-3 text-xs sm:text-sm font-bold text-primary focus:ring-2 focus:ring-primary/20" type="text" defaultValue={tier.amount} />
                    </div>
                  </div>
                  <div className="col-span-1 sm:col-span-1 flex justify-end">
                    <button 
                      onClick={() => toast.error('Deleting tier range...')}
                      className="p-1.5 sm:p-2 text-slate-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
              <button 
                onClick={() => toast.success('Adding new tier range...')}
                className="w-full py-3 sm:py-4 border-2 border-dashed border-slate-200 rounded-xl text-primary font-bold text-xs sm:text-sm hover:bg-primary/5 hover:border-primary/50 transition-all flex items-center justify-center gap-2 mt-4 group"
              >
                <PlusCircle size={16} className="group-hover:rotate-90 transition-transform" />
                Add Tier Range
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6 sm:space-y-8">
          <div className="bg-slate-100 p-5 sm:p-6 rounded-2xl border border-slate-200">
            <h4 className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-on-surface mb-3 sm:mb-4">Architecture Insight</h4>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Info size={16} className="text-blue-700" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-blue-900 mb-0.5 sm:mb-1">Gap Coverage</p>
                  <p className="text-[10px] sm:text-xs text-on-surface-variant leading-relaxed font-medium">Ensure there are no gaps between score ranges (e.g., 580 to 581) to maintain continuous eligibility coverage.</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-blue-900 mb-0.5 sm:mb-1">Audit Trail</p>
                  <p className="text-[10px] sm:text-xs text-on-surface-variant leading-relaxed font-medium">Changes to amount tiers require senior manager approval before going live in the production engine.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ApiAnalyticsView = () => {
  return (
    <div className="p-8 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-[2.75rem] font-semibold tracking-tight text-on-surface leading-tight">API Analytics</h1>
          <p className="text-on-surface-variant mt-1">Real-time performance monitoring and traffic insights for CreditEngine.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button 
              onClick={() => toast.info('Showing analytics for the last 24 hours.')}
              className="px-4 py-2 text-[0.75rem] font-semibold text-slate-500 hover:text-on-surface transition-colors"
            >24h</button>
            <button 
              onClick={() => toast.info('Showing analytics for the last 7 days.')}
              className="px-4 py-2 text-[0.75rem] font-semibold bg-white text-primary rounded-lg shadow-sm"
            >7 Days</button>
            <button 
              onClick={() => toast.info('Showing analytics for the last 30 days.')}
              className="px-4 py-2 text-[0.75rem] font-semibold text-slate-500 hover:text-on-surface transition-colors"
            >30 Days</button>
          </div>
          <button 
            onClick={() => toast.success('Exporting analytics report...') }
            className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-[0.875rem] font-medium shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
          >
            <Download size={18} />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total API Calls', value: '1.24M', trend: '+12%', icon: Activity, color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Error Rate (%)', value: '0.82%', trend: '0.2%', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
          { label: 'Avg Latency (ms)', value: '184ms', trend: '45ms', icon: Zap, color: 'text-slate-600', bg: 'bg-slate-100' },
          { label: 'Active Keys', value: '842', trend: '+3 today', icon: Shield, color: 'text-slate-600', bg: 'bg-slate-100' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <div className={`p-2 ${stat.bg} ${stat.color} rounded-lg`}>
                <stat.icon size={20} />
              </div>
              <span className={`text-[0.75rem] font-bold ${i === 1 ? 'text-red-600' : 'text-emerald-600'} flex items-center gap-1`}>
                {i < 3 && <TrendingUp size={14} className={i === 2 ? 'rotate-180' : ''} />} {stat.trend}
              </span>
            </div>
            <div>
              <p className="text-[0.75rem] font-semibold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className="text-[2rem] font-bold text-on-surface leading-none">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="text-lg font-bold text-on-surface">API Traffic Flow</h4>
              <p className="text-sm text-on-surface-variant">Requests per hour over the last 7 days</p>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between space-x-2 relative">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
              {[1, 2, 3, 4].map(i => <div key={i} className="border-b border-on-surface w-full"></div>)}
            </div>
            {[40, 55, 45, 70, 65, 85, 60].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/20 rounded-t-sm relative group cursor-pointer hover:bg-primary/40 transition-all" style={{ height: `${h}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {h * 100} reqs
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <h4 className="text-lg font-bold text-on-surface mb-6">Error Distribution</h4>
          <div className="space-y-6">
            {[
              { code: '401 Unauthorized', count: '4,210', pct: 45, color: 'bg-red-500' },
              { code: '404 Not Found', count: '2,840', pct: 30, color: 'bg-orange-500' },
              { code: '500 Internal Error', count: '1,420', pct: 15, color: 'bg-slate-400' },
              { code: 'Other', count: '940', pct: 10, color: 'bg-slate-200' },
            ].map((err, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-on-surface">{err.code}</span>
                  <span className="text-slate-400">{err.count}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${err.color}`} style={{ width: `${err.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ApiReferenceView = () => {
  return (
    <div className="p-12 max-w-6xl mx-auto flex gap-12">
      <aside className="w-64 shrink-0 space-y-8 sticky top-28 h-fit">
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Introduction</h4>
          <nav className="space-y-1">
            <a href="#" className="block text-sm font-semibold text-primary">Getting Started</a>
            <a href="#" className="block text-sm font-medium text-slate-500 hover:text-primary transition-colors">Authentication</a>
            <a href="#" className="block text-sm font-medium text-slate-500 hover:text-primary transition-colors">Error Codes</a>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Endpoints</h4>
          <nav className="space-y-1">
            <a href="#" className="block text-sm font-medium text-slate-500 hover:text-primary transition-colors">POST /v1/score</a>
            <a href="#" className="block text-sm font-medium text-slate-500 hover:text-primary transition-colors">GET /v1/users</a>
            <a href="#" className="block text-sm font-medium text-slate-500 hover:text-primary transition-colors">GET /v1/deals</a>
          </nav>
        </div>
      </aside>

      <main className="flex-1 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-on-surface tracking-tight">API Reference</h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">The CreditEngine API allows you to programmatically access scoring data, manage user profiles, and integrate credit intelligence into your own applications.</p>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded">POST</span>
            <h2 className="text-2xl font-bold text-on-surface">Calculate Credit Score</h2>
            <code className="text-sm font-mono text-slate-400 ml-auto">/v1/score</code>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-sm text-on-surface-variant leading-relaxed">Submit user data to the engine to receive a real-time credit score based on the active deal's configuration.</p>
              
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Request Body</h4>
                <div className="space-y-4">
                  {[
                    { name: 'user_id', type: 'string', desc: 'Unique identifier for the user profile.' },
                    { name: 'deal_id', type: 'string', desc: 'The ID of the deal to score against.' },
                    { name: 'metadata', type: 'object', desc: 'Additional key-value pairs for custom scoring variables.' },
                  ].map((param, i) => (
                    <div key={i} className="flex gap-4 py-3 border-b border-slate-50 last:border-0">
                      <div className="w-24 shrink-0">
                        <code className="text-xs font-bold text-primary">{param.name}</code>
                        <p className="text-[10px] text-slate-400 font-mono mt-1">{param.type}</p>
                      </div>
                      <p className="text-xs text-on-surface-variant">{param.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 overflow-hidden relative">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Example Request</span>
            <button 
              onClick={() => toast.success('Code snippet copied to clipboard!')}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Copy size={14} />
            </button>
              </div>
              <pre className="text-xs font-mono text-emerald-400 leading-relaxed overflow-x-auto">
{`curl -X POST https://api.creditengine.com/v1/score \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "UA-89210",
    "deal_id": "DEAL_442",
    "metadata": {
      "income_verified": true,
      "region": "APAC"
    }
  }'`}
              </pre>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const LoanPurposesView = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <div className="p-8 bg-surface">
      <div className="max-w-6xl mx-auto space-y-12">
        <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-1">
            <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-[0.2em]">Configuration Engine</span>
            <h1 className="text-4xl font-semibold text-on-surface tracking-tight">Loan Purposes</h1>
            <p className="text-on-surface-variant max-w-xl text-sm">Manage the taxonomy of valid loan applications. Define titles in multiple languages to support localized credit processing.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-surface-container-low p-1.5 rounded-full border border-outline-variant/10">
              <div className="relative group">
                <Filter size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <select className="pl-10 pr-8 py-2 bg-transparent border-none focus:ring-0 text-sm font-medium text-on-surface-variant cursor-pointer outline-none">
                  <option>Retail Banking</option>
                  <option>SME Loans</option>
                  <option>Corporate Credit</option>
                  <option>Microfinance</option>
                </select>
              </div>
            </div>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              <Plus size={18} />
              <span className="text-sm font-medium">Add Purpose</span>
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-container-low p-6 rounded-xl space-y-4">
              <h3 className="text-sm font-semibold text-on-surface uppercase tracking-wider">Module Overview</h3>
              <div className="flex justify-between items-center py-3 border-b border-outline-variant/20">
                <span className="text-sm text-on-surface-variant">Active Purposes</span>
                <span className="text-xl font-semibold text-primary">12</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-outline-variant/20">
                <span className="text-sm text-on-surface-variant">Translations Missing</span>
                <span className="text-xl font-semibold text-error">2</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-sm text-on-surface-variant">Last Revision</span>
                <span className="text-xs font-medium text-on-surface">Oct 24, 14:20</span>
              </div>
            </div>
            <div className="relative overflow-hidden group rounded-xl aspect-[4/3]">
              <img className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:scale-105 transition-transform duration-700" src="https://picsum.photos/seed/blueprint/400/300" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              <div className="relative h-full p-6 flex flex-col justify-end">
                <p className="text-xs font-bold text-primary-container mb-1">PRO TIP</p>
                <p className="text-sm font-medium text-on-surface-variant">Use concise titles for mobile UI clarity. Max 24 characters recommended for English titles.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="flex justify-between items-center px-2">
              <h3 className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Purpose Registry</h3>
              <button 
                onClick={() => setIsAddModalOpen(true)}
                className="flex items-center gap-1.5 text-xs font-bold text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors"
              >
                <PlusCircle size={16} />
                Add New Purpose
              </button>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Home Renovation', id: 'PRP_00129', icon: Home, en: 'Home Improvement & Renovation', bn: 'বাড়ি সংস্কার' },
                { title: 'Education Loan', id: 'PRP_00130', icon: GraduationCap, en: 'Higher Education & Tuition', bn: 'উচ্চ শিক্ষা ঋণ' },
              ].map((item, i) => (
                <div key={i} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-transparent hover:border-primary/10 transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary-container flex items-center justify-center rounded-lg text-primary">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-on-surface">{item.title}</h4>
                        <p className="text-[11px] text-on-surface-variant/60 font-mono">ID: {item.id}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => toast.info('Opening options for ' + item.title)}
                        className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors"
                      >
                        <MoreVertical size={18} />
                      </button>
                      <button 
                        onClick={() => toast.error('Deleting purpose: ' + item.title)}
                        className="p-2 text-error hover:bg-error-container/20 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">English Title</label>
                      <input className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 rounded-lg px-4 py-3 text-sm text-on-surface outline-none" defaultValue={item.en} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">Bengali Title</label>
                      <input className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 rounded-lg px-4 py-3 text-sm text-on-surface outline-none" defaultValue={item.bn} />
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-2 border-dashed border-primary/20 relative group">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-surface-container flex items-center justify-center rounded-lg text-slate-400">
                      <Stethoscope size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-on-surface opacity-50 italic">Draft Purpose...</h4>
                      <p className="text-[11px] text-on-surface-variant/40 font-mono">ID: NEW_UUID_...</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => toast.success('Purpose draft approved!')}
                      className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors"
                    >
                      <CheckCircle2 size={18} />
                    </button>
                    <button 
                      onClick={() => toast.error('Discarding purpose draft...')}
                      className="p-2 text-error hover:bg-error-container/20 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">English Title</label>
                    <input className="w-full bg-transparent border border-outline-variant/30 focus:border-primary focus:ring-3 focus:ring-primary/10 rounded-lg px-4 py-3 text-sm outline-none" placeholder="e.g. Medical Expenses" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-error uppercase tracking-wider ml-1">Bengali Title Required</label>
                    <input className="w-full bg-error-container/10 border border-error/20 focus:ring-2 focus:ring-error/10 rounded-lg px-4 py-3 text-sm outline-none" placeholder="বাংলা নাম লিখুন" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-8">
              <span className="text-xs text-on-surface-variant">Showing 1-10 of 42 loan purposes</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => toast.info('Navigating to previous page')}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-low transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  onClick={() => toast.info('Navigating to page 1')}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold"
                >1</button>
                <button 
                  onClick={() => toast.info('Navigating to page 2')}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-low transition-colors text-xs font-bold"
                >2</button>
                <button 
                  onClick={() => toast.info('Navigating to next page')}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-low transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        title="Add New Loan Purpose"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Purpose Name</label>
            <input type="text" placeholder="e.g. Agricultural Equipment" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Category</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
              <option>Business Growth</option>
              <option>Personal Finance</option>
              <option>Education</option>
              <option>Healthcare</option>
            </select>
          </div>
          <div className="pt-4 flex space-x-3">
            <button onClick={() => setIsAddModalOpen(false)} className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 transition-all">Cancel</button>
            <button onClick={() => setIsAddModalOpen(false)} className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold bg-primary text-white shadow-lg shadow-primary/20">Create Purpose</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const AssetRequirementsView = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <nav className="flex items-center gap-2 text-xs font-medium text-on-surface-variant mb-2">
            <span>Registry</span>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-primary">Requirement Configuration</span>
          </nav>
          <h1 className="text-4xl font-semibold text-on-surface tracking-tight">Asset Requirements Form</h1>
          <p className="text-on-surface-variant mt-2 max-w-xl">Configure mandatory documentation and data validation for Deal #AF-9201.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => toast.success('Draft saved successfully!')}
            className="px-6 py-2.5 text-sm font-semibold text-primary bg-secondary-container hover:bg-blue-200 transition-colors rounded-xl"
          >Save Draft</button>
          <button 
            onClick={() => toast.success('Template finalized and published!')}
            className="px-6 py-2.5 text-sm font-semibold text-white primary-gradient rounded-xl shadow-lg shadow-primary/20"
          >Finalize Template</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <section className="space-y-6">
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                <Users size={24} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-blue-900 leading-none">PROFILE Requirements</h2>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Standard Entity KYC</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-1">Label Name</label>
                  <input className="w-full text-base font-semibold border-none p-0 focus:ring-0 text-on-surface bg-transparent" type="text" defaultValue="Articles of Incorporation"/>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Required</span>
                  <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
                    <input defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-primary appearance-none cursor-pointer focus:outline-none translate-x-5 transition-transform duration-200" type="checkbox"/>
                    <label className="toggle-label block overflow-hidden h-5 rounded-full bg-primary cursor-pointer"></label>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-50">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-2">File Type</label>
                  <select className="w-full text-xs bg-surface-container-low border-none rounded-lg focus:ring-primary/20">
                    <option>PDF Document</option>
                    <option>Image (JPG/PNG)</option>
                    <option>Spreadsheet (XLSX)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-2">Retention</label>
                  <select className="w-full text-xs bg-surface-container-low border-none rounded-lg focus:ring-primary/20">
                    <option>7 Years</option>
                    <option>Indefinite</option>
                    <option>Project Duration</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-2">Description / Instructions</label>
                <textarea className="w-full text-xs bg-surface-container-low border-none rounded-lg focus:ring-primary/20" placeholder="Provide instructions for the applicant..." rows={2}></textarea>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-1">Label Name</label>
                  <input className="w-full text-base font-semibold border-none p-0 focus:ring-0 text-on-surface bg-transparent" type="text" defaultValue="Proof of Address"/>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Required</span>
                  <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
                    <input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer focus:outline-none transition-transform duration-200" type="checkbox"/>
                    <label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-200 cursor-pointer"></label>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-50">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-2">File Type</label>
                  <select className="w-full text-xs bg-surface-container-low border-none rounded-lg focus:ring-primary/20">
                    <option>Image (JPG/PNG)</option>
                    <option>PDF Document</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-2">Max Size</label>
                  <select className="w-full text-xs bg-surface-container-low border-none rounded-lg focus:ring-primary/20">
                    <option>10 MB</option>
                    <option>25 MB</option>
                  </select>
                </div>
              </div>
            </div>

            <button 
              onClick={() => toast.success('Adding new profile requirement...')}
              className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 hover:border-primary/40 hover:text-primary transition-all flex items-center justify-center gap-2 text-sm font-semibold"
            >
              <PlusCircle size={18} />
              Add Profile Requirement
            </button>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                <Network size={24} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-blue-900 leading-none">LOAN Requirements</h2>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Transaction Specific</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-1">Label Name</label>
                  <input className="w-full text-base font-semibold border-none p-0 focus:ring-0 text-on-surface bg-transparent" type="text" defaultValue="3-Year Tax Returns"/>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Required</span>
                  <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
                    <input defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-primary appearance-none cursor-pointer focus:outline-none translate-x-5 transition-transform duration-200" type="checkbox"/>
                    <label className="toggle-label block overflow-hidden h-5 rounded-full bg-primary cursor-pointer"></label>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-50">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-2">File Type</label>
                  <select className="w-full text-xs bg-surface-container-low border-none rounded-lg focus:ring-primary/20">
                    <option>PDF Document</option>
                    <option>Spreadsheet</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-2">Category</label>
                  <div className="px-3 py-1.5 bg-secondary-container text-primary text-[10px] font-bold rounded-lg inline-block uppercase">Financial</div>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-2">Description / Instructions</label>
                <textarea className="w-full text-xs bg-surface-container-low border-none rounded-lg focus:ring-primary/20" placeholder="e.g. Please provide signed copies only." rows={2}></textarea>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-1">Label Name</label>
                  <input className="w-full text-base font-semibold border-none p-0 focus:ring-0 text-on-surface bg-transparent" type="text" defaultValue="Property Appraisal"/>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Required</span>
                  <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
                    <input defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-primary appearance-none cursor-pointer focus:outline-none translate-x-5 transition-transform duration-200" type="checkbox"/>
                    <label className="toggle-label block overflow-hidden h-5 rounded-full bg-primary cursor-pointer"></label>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-6 pt-6 border-t border-slate-50">
                <div className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                  <Info size={18} className="text-primary" />
                  <p className="text-xs text-blue-900/70 font-medium">This requirement triggers an automated request to verified third-party surveyors.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => toast.success('Adding new loan requirement...')}
              className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 hover:border-primary/40 hover:text-primary transition-all flex items-center justify-center gap-2 text-sm font-semibold"
            >
              <PlusCircle size={18} />
              Add Loan Requirement
            </button>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm sticky top-24">
            <h3 className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-4">Template Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Total Requirements</span>
                <span className="font-semibold text-on-surface">14</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Mandatory</span>
                <span className="font-semibold text-primary">09</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Validation Rules</span>
                <span className="font-semibold text-on-surface">22</span>
              </div>
              <div className="pt-4 border-t border-slate-50">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
                  <div className="h-full bg-primary w-[65%]"></div>
                  <div className="h-full bg-secondary-container w-[35%]"></div>
                </div>
                <div className="flex justify-between mt-2 text-[10px] font-bold uppercase tracking-tighter">
                  <span className="text-primary">Profile (65%)</span>
                  <span className="text-slate-400">Loan (35%)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary-gradient rounded-xl text-white">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">Configuration Insight</h3>
              <p className="text-sm font-medium leading-relaxed mb-4">Adding Article of Incorporation as a "Required" field has improved document completion rates by 24% in similar deals.</p>
              <button 
                onClick={() => toast.info('Opening best practices documentation...')}
                className="text-xs font-bold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors w-full"
              >View Best Practices</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuditLogsView = () => {
  const [selectedLog, setSelectedLog] = useState<any>(null);

  const logs = [
    { id: 'EVT-9921-XQ-2024', type: 'SECURITY_RESET', action: 'Company Key Regenerated', user: 'Jordan Davies', userInit: 'JD', time: 'Oct 24, 2024 • 14:22:09', ip: '192.168.1.104', severity: 'High', module: 'Company Keys', status: 'Verified', statusColor: 'text-primary' },
    { id: 'EVT-9922-XQ-2024', type: 'DEAL_UPDATE', action: 'MSME Deal Modified', user: 'Elena Martinez', userInit: 'EM', time: 'Oct 24, 2024 • 13:10:22', ip: '10.0.4.52', severity: 'Medium', module: 'Deals', status: 'Committed', statusColor: 'text-secondary' },
    { id: 'EVT-9923-XQ-2024', type: 'KEY_REVEAL', action: 'Production Key Revealed', user: 'Sarah Chen', userInit: 'SC', time: 'Oct 23, 2024 • 23:55:01', ip: '44.2.19.1', severity: 'High', module: 'Company Keys', status: 'MFA Success', statusColor: 'text-primary' },
    { id: 'EVT-9924-XQ-2024', type: 'AUTO_SYNC', action: 'Auto-Sync Core Engine', user: 'System Service', userInit: 'SYS', time: 'Oct 23, 2024 • 21:14:12', ip: 'local.vpc', severity: 'Low', module: 'System Rules', status: 'Completed', statusColor: 'text-secondary' },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 text-primary font-medium mb-2">
            <History size={16} />
            <span className="text-xs uppercase tracking-widest font-bold">Audit Logs</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-on-surface leading-tight">System Activity</h1>
          <p className="text-on-surface-variant mt-2 max-w-xl">Comprehensive immutable ledger of system mutations, security authorization events, and administrative overrides.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => toast.success('Exporting audit log dataset...') }
            className="px-6 py-3 bg-secondary-container text-on-secondary-container rounded-xl font-semibold text-sm hover:brightness-95 transition-all flex items-center gap-2"
          >
            <Download size={18} />
            Export Dataset
          </button>
          <button 
            onClick={() => toast.success('Refreshing audit logs...')}
            className="px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-xl transition-all flex items-center gap-2"
          >
            <RefreshCw size={18} />
            Refresh Logs
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Security Mutants', value: '124', sub: 'Past 24 hours', color: 'text-primary' },
          { label: 'Sensitive Actions', value: '12', sub: 'Requires review', color: 'text-error' },
          { label: 'Avg. Response', value: '42ms', sub: 'Audit propagation', color: 'text-on-surface' },
          { label: 'Integrity Hash', value: 'SHA-256: 8f2b...', sub: 'Verified Ledger', color: 'text-primary', icon: ShieldCheck },
        ].map((stat, i) => (
          <div key={i} className="bg-surface-container-lowest p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between h-40">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</span>
            <div className="mt-4">
              <div className={`text-4xl font-semibold ${stat.color} truncate`}>{stat.value}</div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-on-surface-variant mt-1 uppercase tracking-tighter">
                {stat.icon && <stat.icon size={12} className="text-primary" />}
                {stat.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className={`${selectedLog ? 'col-span-7' : 'col-span-12'} transition-all duration-300 space-y-4`}>
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Timestamp</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">User</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Action Type</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Module</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {logs.map((log) => (
                  <tr 
                    key={log.id} 
                    onClick={() => setSelectedLog(log)}
                    className={`hover:bg-slate-50 transition-colors cursor-pointer group ${selectedLog?.id === log.id ? 'bg-blue-50/50' : ''}`}
                  >
                    <td className="px-6 py-5">
                      <div className="text-on-surface font-medium text-sm">{log.time.split(' • ')[0]}</div>
                      <div className="text-on-surface-variant text-[11px]">{log.time.split(' • ')[1]}</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold text-on-secondary-container">{log.userInit}</div>
                        <div>
                          <div className="text-on-surface font-semibold text-sm">{log.user}</div>
                          <div className="text-[11px] text-on-surface-variant">{log.ip}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-on-surface font-medium text-sm">
                        <Key size={16} className="text-slate-400" />
                        {log.action}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-2 py-1 bg-surface text-on-surface-variant rounded-md border border-slate-100 text-[11px] font-semibold uppercase tracking-tighter">{log.module}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className={`flex items-center gap-1.5 ${log.statusColor} text-xs font-bold`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${log.statusColor.replace('text-', 'bg-')}`}></div>
                        {log.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <AnimatePresence>
          {selectedLog && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="col-span-5 space-y-6"
            >
              <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm border border-slate-100 relative overflow-hidden">
                <button 
                  onClick={() => setSelectedLog(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-on-surface transition-colors"
                >
                  <Plus size={20} className="rotate-45" />
                </button>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary">
                    <Key size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">{selectedLog.action}</h2>
                    <p className="text-sm text-on-surface-variant">Event ID: <span className="font-mono text-xs">{selectedLog.id}</span></p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-1">Timestamp</label>
                      <div className="text-sm font-medium">{selectedLog.time}</div>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-1">Performed By</label>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">{selectedLog.userInit}</div>
                        <span className="text-sm font-medium">{selectedLog.user}</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-1">IP Address</label>
                      <div className="text-sm font-mono text-primary">{selectedLog.ip}</div>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-1">Action Type</label>
                      <div className="text-sm font-medium">{selectedLog.type}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-100">
                  <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                    <Info size={16} />
                    Event Description
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    A manual regeneration of the production environment API keys was triggered for "Global Logistics Corp". This action invalidates all existing integrations for this company profile immediately.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">After State</span>
                    <button 
                      onClick={() => toast.success('State data copied to clipboard!')}
                      className="text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 hover:underline"
                    >
                      <Copy size={12} /> Copy
                    </button>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs leading-relaxed overflow-x-auto text-blue-900 border-l-4 border-primary">
                    <pre>{`{
  "company_id": "GLC-9980",
  "api_key_id": "pk_live_72Kn8Wp",
  "key_status": "active",
  "last_rotated": "2024-10-24T14:22:09Z"
}`}</pre>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const CompanyConfigView = ({ setView }: { setView: (v: View) => void }) => {
  return (
    <div className="p-12 max-w-6xl mx-auto space-y-12">
      <header className="flex justify-between items-end">
        <div>
          <span className="text-[10px] font-bold text-on-surface-variant tracking-[0.2em] uppercase">Global Settings</span>
          <h1 className="text-4xl font-semibold text-on-surface mt-2 tracking-tight">Company Configuration</h1>
          <p className="text-on-surface-variant text-lg mt-1">Manage your organization's core profile and programmatic access keys.</p>
        </div>
        <button 
          onClick={() => setView('create-company')}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
        >
          <Plus size={18} />
          Add New Entity
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-7 space-y-8">
          <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-primary">
                <Building2 size={24} />
              </div>
              <h2 className="text-xl font-semibold text-on-surface">Organization Profile</h2>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider px-1">Organization Name</label>
                  <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm font-medium" defaultValue="Horizon Global Ventures"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider px-1">Industry Vertical</label>
                  <select className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm font-medium appearance-none">
                    <option>Investment Banking</option>
                    <option>Venture Capital</option>
                    <option>Fintech Infrastructure</option>
                    <option>Commercial Credit</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider px-1">Primary Contact Email</label>
                <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm font-medium" defaultValue="ops@horizonglobal.com"/>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider px-1">Physical Headquarters</label>
                <textarea className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm font-medium resize-none" rows={3} defaultValue="1125 Avenue of the Americas, Suite 400, New York, NY 10036, United States"></textarea>
              </div>
              <div className="flex justify-end pt-4">
                <button 
                  onClick={(e) => { e.preventDefault(); toast.success('Organization profile updated successfully!'); }}
                  className="bg-primary-gradient text-white px-8 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all active:scale-95" 
                  type="submit"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 border border-slate-100">
            <div className="flex-1">
              <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest mb-2">Workspace Utilization</h3>
              <p className="text-on-surface-variant text-sm mb-4">Your organization is currently using 64% of allocated compute resources for risk modeling.</p>
              <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[64%]"></div>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">12</p>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Active Users</p>
              </div>
              <div className="h-12 w-px bg-slate-200"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">4.2k</p>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">API Calls</p>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:col-span-5 space-y-6">
          <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-primary">
                  <Key size={24} />
                </div>
                <h2 className="text-xl font-semibold text-on-surface">Company Keys</h2>
              </div>
              <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full border border-green-100 uppercase tracking-widest">Encrypted</span>
            </div>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
              Use these keys to authenticate requests from your external systems to the <span className="font-semibold text-primary">CreditArchitect API</span>.
            </p>
            <div className="space-y-6">
              {[
                { label: 'Production Key (Live)', created: '4 months ago' },
                { label: 'Sandbox Key (Test)', created: '2 days ago' },
              ].map((key, i) => (
                <div key={i} className="p-4 rounded-xl bg-surface-container-low space-y-3 border border-slate-100">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{key.label}</span>
                    <span className="text-[10px] text-on-surface-variant italic">{key.created}</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-white rounded-lg px-4 py-2 font-mono text-sm border border-slate-100 flex items-center overflow-hidden">
                      <span className="text-slate-300">••••••••••••••••••••••••••••••••</span>
                    </div>
                    <button 
                      onClick={() => toast.info('Revealing ' + key.label + '...')}
                      className="bg-secondary-container hover:bg-primary/10 text-on-secondary-container p-2 rounded-lg transition-colors"
                    >
                      <Eye size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
              <button 
                onClick={() => toast.error('Regenerating company keys...')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary/5 transition-all"
              >
                <RefreshCw size={18} />
                Regenerate Keys
              </button>
              <p className="text-[10px] text-center text-error font-bold px-4 uppercase tracking-tighter">
                Regenerating keys will immediately revoke all current programmatic access. Use with extreme caution.
              </p>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
            <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Recent Access Log</h3>
            <div className="space-y-4">
              {[
                { action: 'API Request: /v1/scoring', time: '2 minutes ago', ip: '192.168.1.42' },
                { action: 'Key Revealed: Sandbox', time: '45 minutes ago', user: 'd.miller' },
              ].map((log, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-on-surface">{log.action}</p>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">{log.time} • {log.ip || `Admin: ${log.user}`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const CreateCompanyView = ({ setView }: { setView: (v: View) => void }) => {
  return (
    <div className="p-12 max-w-2xl mx-auto min-h-[calc(100vh-64px)] flex items-center">
      <div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-100">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-12 w-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-primary">
              <Building2 size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-on-surface tracking-tight">Create Company</h1>
              <p className="text-on-surface-variant text-sm">Initialize a new partner organization within the registry.</p>
            </div>
          </div>
        </div>

        <form className="p-8 space-y-8" onSubmit={(e) => { e.preventDefault(); setView('company-config'); }}>
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Organization Profile</span>
              <div className="flex-1 h-[1px] bg-slate-100"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block px-1">Organization Name</label>
                <input className="w-full h-12 px-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-sm font-medium outline-none" placeholder="e.g. Nexus Dynamics" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block px-1">Industry Vertical</label>
                <select className="w-full h-12 px-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-sm font-medium outline-none appearance-none" required>
                  <option disabled selected value="">Select Industry</option>
                  <option>Aerospace & Defense</option>
                  <option>Financial Services</option>
                  <option>Healthcare Technology</option>
                  <option>Logistics & Supply Chain</option>
                  <option>Manufacturing</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block px-1">Primary Contact Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-sm font-medium outline-none" placeholder="partnership@company.com" type="email" required />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Headquarters</span>
              <div className="flex-1 h-[1px] bg-slate-100"></div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block px-1">Physical Headquarters Address</label>
              <div className="relative">
                <Globe size={18} className="absolute left-4 top-4 text-slate-400" />
                <textarea className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-sm font-medium outline-none resize-none" placeholder="Street Address, Suite, City, State, Zip Code" rows={3} required></textarea>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Partner Admin Details</span>
              <div className="flex-1 h-[1px] bg-slate-100"></div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl border border-slate-100 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block px-1">Full Name</label>
                  <input className="w-full h-11 px-4 bg-white border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium outline-none" placeholder="Admin Name" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block px-1">Admin Role</label>
                  <input className="w-full h-11 px-4 bg-white border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium outline-none" placeholder="Director of IT" required />
                </div>
              </div>
              <p className="text-[11px] text-slate-400 font-medium italic">This user will be invited to manage the company portal via email once the record is created.</p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 gap-4">
            <button 
              type="button"
              onClick={() => { toast.info('Discarding company draft.'); setView('company-config'); }}
              className="px-8 h-14 text-sm font-bold text-on-surface-variant hover:bg-slate-100 rounded-2xl transition-all"
            >
              Discard Draft
            </button>
            <button 
              className="primary-gradient px-12 h-14 text-sm font-bold text-white rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2" 
              type="submit"
            >
              <CheckCircle size={18} />
              Create Company
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const SystemHealthView = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 text-primary font-medium mb-2">
            <Activity size={16} />
            <span className="text-xs uppercase tracking-widest font-bold">System Monitoring</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-on-surface leading-tight">System Health</h1>
          <p className="text-on-surface-variant mt-2 max-w-xl">Real-time status of the CreditEngine infrastructure, including compute resources, database latency, and service availability.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => toast.success('Forcing system synchronization...')}
            className="px-6 py-3 bg-secondary-container text-on-secondary-container rounded-xl font-semibold text-sm hover:brightness-95 transition-all flex items-center gap-2"
          >
            <RefreshCw size={18} />
            Force Sync
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Core Engine Status', value: 'Operational', sub: 'Uptime: 99.99%', color: 'text-emerald-600', bg: 'bg-emerald-50', icon: CheckCircle2 },
          { label: 'Database Latency', value: '12ms', sub: 'Region: US-East-1', color: 'text-primary', bg: 'bg-primary/5', icon: Database },
          { label: 'Active Connections', value: '1,240', sub: 'Peak: 2.5k (Today)', color: 'text-on-surface', bg: 'bg-slate-50', icon: Network },
        ].map((stat, i) => (
          <div key={i} className="bg-surface-container-lowest p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</span>
              <div className={`p-2 ${stat.bg} ${stat.color} rounded-lg`}>
                <stat.icon size={18} />
              </div>
            </div>
            <div className="mt-4">
              <div className={`text-3xl font-semibold ${stat.color}`}>{stat.value}</div>
              <div className="text-[10px] font-bold text-on-surface-variant mt-1 uppercase tracking-tighter">
                {stat.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-on-surface mb-6 flex items-center gap-2">
              <BarChart3 size={20} className="text-primary" />
              Resource Utilization
            </h3>
            <div className="space-y-8">
              {[
                { label: 'CPU Usage', value: '42%', color: 'bg-primary', sub: '8 Cores / 16 Threads' },
                { label: 'Memory Allocation', value: '68%', color: 'bg-secondary', sub: '10.8GB / 16GB' },
                { label: 'Disk I/O', value: '15%', color: 'bg-tertiary', sub: 'NVMe Storage' },
                { label: 'Network Bandwidth', value: '24%', color: 'bg-emerald-500', sub: '10Gbps Uplink' },
              ].map((res, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm font-bold text-on-surface">{res.label}</p>
                      <p className="text-[10px] text-on-surface-variant uppercase font-medium">{res.sub}</p>
                    </div>
                    <span className="text-sm font-bold text-primary">{res.value}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${res.color} transition-all duration-1000`} style={{ width: res.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-on-surface mb-6 flex items-center gap-2">
              <Terminal size={20} className="text-primary" />
              Live System Logs
            </h3>
            <div className="bg-slate-900 rounded-xl p-6 font-mono text-xs text-emerald-400 space-y-2 overflow-hidden relative">
              <div className="absolute top-2 right-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <p className="opacity-50">[2024-10-24 14:22:09] INFO: Core engine heartbeat detected.</p>
              <p className="opacity-70">[2024-10-24 14:22:15] DEBUG: Processing deal #AF-9201 requirements.</p>
              <p className="text-white font-bold">[2024-10-24 14:22:20] SUCCESS: Scoring computation completed for UA-89210.</p>
              <p className="text-yellow-400">[2024-10-24 14:22:25] WARN: Database latency spike detected (45ms).</p>
              <p className="opacity-50">[2024-10-24 14:22:30] INFO: Cache cleared for partner_alpha_keys.</p>
              <p className="opacity-70">[2024-10-24 14:22:35] DEBUG: Initializing psychometric engine v4.2.</p>
              <div className="flex items-center gap-2 animate-pulse">
                <span className="w-1.5 h-3 bg-emerald-400"></span>
                <span className="opacity-50 italic">Listening for system events...</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-4">Service Status</h3>
            <div className="space-y-4">
              {[
                { name: 'Auth Service', status: 'Online', color: 'text-emerald-500' },
                { name: 'Scoring Engine', status: 'Online', color: 'text-emerald-500' },
                { name: 'Psychometric API', status: 'Online', color: 'text-emerald-500' },
                { name: 'Audit Ledger', status: 'Online', color: 'text-emerald-500' },
                { name: 'Notification Hub', status: 'Degraded', color: 'text-yellow-500' },
                { name: 'Backup Service', status: 'Online', color: 'text-emerald-500' },
              ].map((svc, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                  <span className="text-sm font-medium text-slate-600">{svc.name}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-tighter ${svc.color}`}>{svc.status}</span>
                    <div className={`w-2 h-2 rounded-full ${svc.color.replace('text-', 'bg-')} animate-pulse`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary-gradient p-6 rounded-xl text-white shadow-lg shadow-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={24} className="opacity-80" />
              <h4 className="text-sm font-bold uppercase tracking-widest">Security Integrity</h4>
            </div>
            <p className="text-sm font-medium leading-relaxed mb-6 opacity-90">All system components are currently operating under AES-256 encryption protocols with active MFA enforcement.</p>
            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Last Security Audit</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Passed</span>
              </div>
              <p className="text-xs font-bold">Oct 20, 2024 • 09:00 AM</p>
            </div>
          </div>

          <div className="bg-surface-container-low p-6 rounded-xl border border-slate-100">
            <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Maintenance Window</h3>
            <div className="flex gap-4 items-start">
              <Clock size={20} className="text-primary shrink-0" />
              <div>
                <p className="text-sm font-bold text-on-surface">Scheduled Update</p>
                <p className="text-xs text-on-surface-variant mt-1">Oct 28, 2024 • 02:00 AM - 04:00 AM UTC</p>
                <p className="text-[10px] text-slate-400 mt-2 italic">Expected downtime: 15 minutes for scoring engine migration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserManagementView = () => {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const admins = [
    { id: 'ADM-001', name: 'Alex Rivera', email: 'alex.rivera@azurehorizon.com', role: 'System Admin', status: 'Active', lastLogin: '2 mins ago', initial: 'AR' },
    { id: 'ADM-002', name: 'Alexander Dumont', email: 'alexander.dumont@creditengine.com', role: 'Super Admin', status: 'Active', lastLogin: '1 hour ago', initial: 'AD' },
    { id: 'ADM-003', name: 'Sarah Chen', email: 'sarah.chen@devhub.io', role: 'Developer Admin', status: 'Active', lastLogin: '3 hours ago', initial: 'SC' },
    { id: 'ADM-004', name: 'Jordan Davies', email: 'jordan.davies@security.com', role: 'Security Auditor', status: 'Inactive', lastLogin: '2 days ago', initial: 'JD' },
    { id: 'ADM-005', name: 'Elena Martinez', email: 'elena.martinez@ops.net', role: 'Operations Admin', status: 'Active', lastLogin: '5 mins ago', initial: 'EM' },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">Admin User Management</h2>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-1 sm:mt-2 max-w-lg font-medium">Manage administrative accounts, assign roles, and monitor access across the enterprise ecosystem.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsInviteModalOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-primary text-white rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-primary/20 hover:shadow-xl transition-all active:scale-[0.98]"
          >
            <PlusCircle size={16} />
            Invite Admin
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {[
          { label: 'Total Admins', value: '12', icon: Shield, color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Active Now', value: '4', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Pending Invites', value: '2', icon: Mail, color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: 'Role Changes', value: '5', icon: RefreshCw, color: 'text-blue-600', bg: 'bg-blue-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-surface-container-lowest p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-28 sm:h-36">
            <div className="flex items-center justify-between">
              <div className={`p-1.5 sm:p-2 ${stat.bg} ${stat.color} rounded-lg`}>
                <stat.icon size={16} />
              </div>
            </div>
            <div>
              <p className="text-xl sm:text-3xl font-bold text-on-surface leading-none mb-1">{stat.value}</p>
              <p className="text-[8px] sm:text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center bg-slate-50 px-3 py-2 sm:px-4 sm:py-2 rounded-xl border border-slate-100 w-full sm:w-80 lg:w-96">
            <Search size={14} className="text-slate-400 mr-2" />
            <input className="bg-transparent border-none focus:ring-0 text-xs sm:text-sm w-full outline-none" placeholder="Search admins by name or email..." />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button 
              onClick={() => toast.info('Opening user filter options...')}
              className="p-2 text-slate-400 hover:text-primary transition-colors border border-slate-100 rounded-lg"
            >
              <Filter size={16} />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50">
                {['Admin ID', 'Full Name', 'Role', 'Status', 'Last Active', 'Actions'].map(head => (
                  <th key={head} className="px-4 py-3 sm:px-6 sm:py-4 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {admins.map((admin, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-[10px] sm:text-xs font-mono text-primary font-bold">{admin.id}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px] sm:text-xs">{admin.initial}</div>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-on-surface block">{admin.name}</span>
                        <span className="text-[9px] sm:text-[10px] text-on-surface-variant">{admin.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <span className="px-2 py-0.5 sm:py-1 bg-surface text-on-surface-variant rounded-md border border-slate-100 text-[9px] sm:text-[10px] font-bold uppercase tracking-tighter">{admin.role}</span>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase ${
                      admin.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${
                        admin.status === 'Active' ? 'bg-green-500' : 'bg-slate-400'
                      }`}></span>
                      {admin.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-[10px] sm:text-xs text-on-surface-variant font-medium">{admin.lastLogin}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <button 
                        onClick={() => toast.info('Editing admin: ' + admin.name)}
                        className="p-1.5 sm:p-2 text-slate-400 hover:text-primary transition-colors"
                      >
                        <Edit size={14} />
                      </button>
                      <button 
                        onClick={() => toast.error('Deleting admin: ' + admin.name)}
                        className="p-1.5 sm:p-2 text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal 
        isOpen={isInviteModalOpen} 
        onClose={() => setIsInviteModalOpen(false)} 
        title="Invite New Administrator"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
            <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Access Level</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
              <option>Super Admin</option>
              <option>System Admin</option>
              <option>Developer Admin</option>
              <option>Security Auditor</option>
            </select>
          </div>
          <div className="pt-4 flex space-x-3">
            <button onClick={() => { setIsInviteModalOpen(false); toast.info('Invitation cancelled.'); }} className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 transition-all">Cancel</button>
            <button onClick={() => { setIsInviteModalOpen(false); toast.success('Invitation sent successfully!'); }} className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold bg-primary text-white shadow-lg shadow-primary/20">Send Invitation</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const DealsView = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-semibold text-on-surface tracking-tight">Deals & Facilities</h1>
          <p className="text-on-surface-variant mt-2 max-w-xl">Monitor active credit facilities, partnership agreements, and capital deployment across the ecosystem.</p>
        </div>
        <button 
          onClick={() => toast.success('Opening new deal creation wizard...')}
          className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
        >
          New Deal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Active Facilities', value: '24', icon: Briefcase, color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Total Committed', value: '$142.5M', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Avg. Utilization', value: '68.2%', icon: Activity, color: 'text-blue-600', bg: 'bg-blue-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon size={20} />
            </div>
            <p className="text-2xl font-bold text-on-surface">{stat.value}</p>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
          <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">Active Portfolio</h3>
          <div className="flex gap-2">
            <button 
              onClick={() => toast.info('Filtering active portfolio...')}
              className="p-2 text-slate-400 hover:text-primary transition-colors"
            >
              <Filter size={18} />
            </button>
            <button 
              onClick={() => toast.success('Downloading portfolio report...')}
              className="p-2 text-slate-400 hover:text-primary transition-colors"
            >
              <Download size={18} />
            </button>
          </div>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              {['Deal ID', 'Partner Entity', 'Facility Type', 'Amount', 'Status', 'Expiry'].map(head => (
                <th key={head} className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {[
              { id: 'DL-8821', partner: 'Global FinTech Corp', type: 'Revolving Credit', amount: '$25.0M', status: 'Active', expiry: 'Dec 2025' },
              { id: 'DL-8822', partner: 'Apex Capital Partners', type: 'Term Loan', amount: '$12.5M', status: 'Pending', expiry: 'Oct 2026' },
              { id: 'DL-8823', partner: 'Horizon Ventures', type: 'Equity Line', amount: '$50.0M', status: 'Active', expiry: 'Jan 2027' },
              { id: 'DL-8824', partner: 'Nexus Microfinance', type: 'Securitization', amount: '$15.0M', status: 'Review', expiry: 'Aug 2025' },
              { id: 'DL-8825', partner: 'Stellar Bank Group', type: 'Syndicated Loan', amount: '$40.0M', status: 'Active', expiry: 'Mar 2026' },
            ].map((deal, i) => (
              <tr 
                key={i} 
                onClick={() => toast.info('Viewing details for deal: ' + deal.id)}
                className="hover:bg-slate-50 transition-colors group cursor-pointer"
              >
                <td className="px-6 py-4 text-xs font-mono text-primary font-bold">{deal.id}</td>
                <td className="px-6 py-4 text-sm font-semibold text-on-surface">{deal.partner}</td>
                <td className="px-6 py-4 text-xs text-on-surface-variant font-medium">{deal.type}</td>
                <td className="px-6 py-4 text-sm font-bold text-on-surface">{deal.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                    deal.status === 'Active' ? 'bg-green-50 text-green-700 border border-green-100' : 
                    deal.status === 'Pending' ? 'bg-orange-50 text-orange-700 border border-orange-100' :
                    'bg-slate-100 text-slate-500 border border-slate-200'
                  }`}>
                    {deal.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs text-on-surface-variant">{deal.expiry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ReportsView = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-semibold text-on-surface tracking-tight">Intelligence Reports</h1>
          <p className="text-on-surface-variant mt-2 max-w-xl">Generate and analyze system-wide performance metrics, risk assessments, and compliance audits.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => toast.info('Opening report scheduler...')}
            className="px-4 py-2 bg-surface border border-slate-200 rounded-xl text-sm font-bold text-on-surface-variant hover:bg-slate-50 transition-all"
          >
            Schedule Report
          </button>
          <button 
            onClick={() => toast.success('Generating new intelligence report...')}
            className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2"
          >
            <PieChart size={18} />
            Generate New
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-slate-100 p-8">
            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-8">Recent Generated Reports</h3>
            <div className="space-y-4">
              {[
                { title: 'Q3 Risk Exposure Analysis', date: 'Oct 24, 2024', size: '4.2 MB', type: 'PDF', author: 'System AI' },
                { title: 'Monthly Compliance Audit', date: 'Oct 20, 2024', size: '1.8 MB', type: 'XLSX', author: 'Sarah Chen' },
                { title: 'Portfolio Performance Metrics', date: 'Oct 15, 2024', size: '12.5 MB', type: 'PDF', author: 'Alex Rivera' },
                { title: 'User Access & Security Log', date: 'Oct 10, 2024', size: '840 KB', type: 'CSV', author: 'Security Bot' },
                { title: 'Regional Credit Scoring Trends', date: 'Oct 05, 2024', size: '2.1 MB', type: 'PDF', author: 'System AI' },
              ].map((report, i) => (
                <div 
                  key={i} 
                  onClick={() => toast.info('Opening report: ' + report.title)}
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-50 hover:bg-slate-50 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-on-surface">{report.title}</p>
                      <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter mt-0.5">
                        {report.date} • {report.size} • {report.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-slate-400 italic">By {report.author}</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); toast.success('Downloading ' + report.title + '...'); }}
                      className="p-2 text-slate-400 hover:text-primary transition-colors"
                    >
                      <Download size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-slate-100 p-8">
            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-6">Report Templates</h3>
            <div className="space-y-3">
              {['Credit Risk Model', 'Operational Efficiency', 'Regulatory Compliance', 'Market Trends', 'User Behavior'].map((temp, i) => (
                <button 
                  key={i} 
                  onClick={() => toast.info('Loading template: ' + temp)}
                  className="w-full text-left p-4 rounded-xl border border-slate-50 hover:border-primary/30 hover:bg-primary/5 transition-all flex items-center justify-between group"
                >
                  <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface">{temp}</span>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-primary" />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-white shadow-xl shadow-primary/30 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-2">Automated Insights</h4>
              <p className="text-primary-container/80 text-sm leading-relaxed">Our AI engine analyzes your data patterns to suggest custom reports that might be useful for your specific role.</p>
              <button 
                onClick={() => toast.success('AI Insights enabled!')}
                className="mt-6 bg-white text-primary px-4 py-2 rounded-lg text-xs font-bold hover:bg-primary-container transition-colors"
              >
                Enable AI Suggestions
              </button>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsView = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-on-surface tracking-tight">Global System Settings</h1>
        <p className="text-on-surface-variant mt-2 text-lg">Configure core system parameters, security protocols, and global environment variables.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-slate-100 p-8">
            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-8">Environment Configuration</h3>
            <div className="space-y-6">
              {[
                { label: 'System Mode', desc: 'Current operational state of the enterprise engine', value: 'Production', action: 'Switch to Maintenance' },
                { label: 'API Versioning', desc: 'Global default version for all outgoing API responses', value: 'v2.4.0', action: 'Update Version' },
                { label: 'Data Retention', desc: 'How long to store historical credit application data', value: '7 Years', action: 'Modify Policy' },
                { label: 'Encryption Level', desc: 'AES standard used for database field encryption', value: 'AES-256-GCM', action: 'Rotate Keys' },
              ].map((setting, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0">
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{setting.label}</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">{setting.desc}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono font-bold text-primary">{setting.value}</span>
                    <button 
                      onClick={() => toast.info('Initiating: ' + setting.action)}
                      className="text-xs font-bold text-on-surface-variant/60 hover:text-primary transition-colors underline underline-offset-4"
                    >
                      {setting.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-slate-100 p-8">
            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-8">Security & Access Control</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex gap-4 items-center">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">Multi-Factor Authentication</p>
                    <p className="text-xs text-on-surface-variant">Enforce MFA for all administrative accounts</p>
                  </div>
                </div>
                <div 
                  onClick={() => toast.info('Toggling Multi-Factor Authentication...')}
                  className="w-12 h-6 bg-primary rounded-full relative cursor-pointer"
                >
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex gap-4 items-center">
                  <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                    <Lock size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">IP Whitelisting</p>
                    <p className="text-xs text-on-surface-variant">Restrict access to known corporate IP ranges</p>
                  </div>
                </div>
                <div 
                  onClick={() => toast.info('Toggling IP Whitelisting...')}
                  className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer"
                >
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-slate-100 p-8">
            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-6">System Health Summary</h3>
            <div className="space-y-4">
              {[
                { label: 'Uptime', value: '99.998%', color: 'text-emerald-600' },
                { label: 'Latency', value: '42ms', color: 'text-primary' },
                { label: 'Error Rate', value: '0.001%', color: 'text-emerald-600' },
                { label: 'Memory', value: '4.2GB / 16GB', color: 'text-blue-600' },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-xs font-medium text-on-surface-variant">{stat.label}</span>
                  <span className={`text-sm font-bold ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => toast.info('Navigating to detailed metrics...')}
              className="w-full mt-8 py-3 bg-slate-50 text-on-surface-variant text-xs font-bold rounded-xl hover:bg-slate-100 transition-all"
            >
              View Detailed Metrics
            </button>
          </div>

          <div className="bg-error-container/10 border border-error/10 rounded-2xl p-8">
            <h4 className="text-sm font-bold text-error uppercase tracking-widest mb-4">Danger Zone</h4>
            <p className="text-xs text-error/70 mb-6 leading-relaxed">Actions here are irreversible and can impact the entire enterprise ecosystem. Proceed with extreme caution.</p>
            <button 
              onClick={() => toast.error('Flushing system cache...')}
              className="w-full py-3 bg-error text-white text-xs font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-error/20"
            >
              Flush System Cache
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const VariableHierarchyView = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto w-full">
      <header className="mb-12">
        <div className="flex items-center gap-2 text-[10px] font-bold text-primary tracking-[0.2em] uppercase mb-2">
          <Network size={14} />
          <span>Dependency Mapping</span>
        </div>
        <h2 className="text-4xl font-semibold text-on-background tracking-tight">Variable Hierarchy</h2>
        <p className="text-on-surface-variant mt-3 max-w-2xl leading-relaxed">
          Visualize the architectural relationship between raw data points, derived variables, and high-level scoring groups.
        </p>
      </header>

      <div className="bg-surface-container-lowest p-12 rounded-3xl border border-outline-variant/20 shadow-sm overflow-x-auto">
        <div className="min-w-[800px] flex flex-col items-center gap-16">
          {/* Level 1: Final Score */}
          <div className="relative">
            <div className="px-12 py-6 bg-primary text-white rounded-2xl shadow-xl border-4 border-white relative z-10">
              <span className="block text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Root Output</span>
              <h3 className="text-xl font-bold">Credit Risk Score</h3>
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-primary to-outline-variant/30"></div>
          </div>

          {/* Level 2: Groups */}
          <div className="flex justify-center gap-12 w-full relative">
            {[
              { name: 'Behavioral', color: 'bg-blue-600' },
              { name: 'Financial', color: 'bg-cyan-600' },
              { name: 'Identity', color: 'bg-indigo-600' },
            ].map((group, i) => (
              <div key={i} className="relative group">
                <div className={`px-8 py-4 ${group.color} text-white rounded-xl shadow-lg relative z-10`}>
                  <h4 className="font-semibold text-sm">{group.name} Group</h4>
                </div>
                {/* Connecting Lines to Children */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-outline-variant/30"></div>
                
                {/* Level 3: Categories */}
                <div className="absolute top-[100px] left-1/2 -translate-x-1/2 flex flex-col gap-4 items-center">
                  {[1, 2].map(n => (
                    <div key={n} className="px-4 py-2 bg-surface-container-high border border-outline-variant/20 rounded-lg text-[10px] font-bold text-on-surface-variant uppercase tracking-wider whitespace-nowrap">
                      Sub-Category {i + 1}.{n}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {/* Horizontal Connector Line */}
            <div className="absolute top-0 left-[15%] right-[15%] h-0.5 bg-outline-variant/30 -translate-y-8"></div>
          </div>

          {/* Level 4: Raw Variables (Bottom Row) */}
          <div className="mt-48 grid grid-cols-6 gap-4 w-full">
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i} 
                onClick={() => toast.info('Inspecting raw variable: Raw_Var_' + (i + 100))}
                className="p-4 bg-surface-container-low border border-outline-variant/10 rounded-xl flex flex-col items-center gap-2 hover:bg-white transition-all cursor-help group"
              >
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                  <Code2 size={16} />
                </div>
                <span className="text-[9px] font-bold text-on-surface-variant uppercase text-center">Raw_Var_{i + 100}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend & Stats */}
      <footer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10">
          <h5 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Hierarchy Stats</h5>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl font-bold text-on-surface">4</p>
              <p className="text-[10px] text-on-surface-variant uppercase">Levels</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-on-surface">142</p>
              <p className="text-[10px] text-on-surface-variant uppercase">Nodes</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 col-span-2">
          <h5 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Structural Integrity</h5>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[98%]"></div>
            </div>
            <span className="text-xs font-bold text-emerald-600">98% Valid</span>
          </div>
          <p className="text-[10px] text-on-surface-variant mt-2">All leaf nodes are correctly mapped to active data sources.</p>
        </div>
      </footer>
    </div>
  );
};

const VariableGroupConfigView = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto w-full">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-primary tracking-[0.2em] uppercase mb-2">
            <Building2 size={14} />
            <span>Structural Logic</span>
          </div>
          <h2 className="text-4xl font-semibold text-on-background tracking-tight">Variable Group Config</h2>
          <p className="text-on-surface-variant mt-3 max-w-2xl leading-relaxed">
            Manage logical clusters of variables. Groups define how individual data points are weighted and combined before being passed to the scoring engine.
          </p>
        </div>
        <button 
          onClick={() => toast.success('Opening new variable group wizard...')}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-all"
        >
          <Plus size={18} />
          Create New Group
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Identity Verification', vars: 8, weight: '25%', status: 'Active', icon: Shield, color: 'text-blue-600', bg: 'bg-blue-50' },
          { name: 'Device Fingerprinting', vars: 15, weight: '15%', status: 'Active', icon: Smartphone, color: 'text-sky-600', bg: 'bg-sky-50' },
          { name: 'Behavioral Biometrics', vars: 12, weight: '20%', status: 'Draft', icon: BrainCircuit, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { name: 'Financial History', vars: 24, weight: '30%', status: 'Active', icon: BarChart3, color: 'text-cyan-600', bg: 'bg-cyan-50' },
          { name: 'Social Graph', vars: 6, weight: '10%', status: 'Deprecated', icon: UserSearch, color: 'text-slate-600', bg: 'bg-slate-50' },
        ].map((group, i) => (
          <div 
            key={i} 
            onClick={() => toast.info('Configuring group: ' + group.name)}
            className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-12 h-12 rounded-xl ${group.bg} ${group.color} flex items-center justify-center`}>
                <group.icon size={24} />
              </div>
              <div className="flex flex-col items-end">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                  group.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 
                  group.status === 'Draft' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'
                }`}>
                  {group.status}
                </span>
                <span className="text-2xl font-bold text-on-surface mt-1">{group.weight}</span>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-on-surface mb-1">{group.name}</h3>
            <p className="text-sm text-on-surface-variant mb-6">{group.vars} Variables linked to this group</p>
            
            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(n => (
                  <div key={n} className="w-6 h-6 rounded-full border-2 border-white bg-surface-container-high flex items-center justify-center text-[8px] font-bold text-on-surface-variant">
                    {n}
                  </div>
                ))}
                <div className="w-6 h-6 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[8px] font-bold text-white">
                  +{group.vars - 3}
                </div>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); toast.info('Opening settings for ' + group.name + '...'); }}
                className="p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                <Settings2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Group Logic Preview Section */}
      <section className="mt-12 bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1 h-8 bg-primary rounded-full"></div>
          <h3 className="text-xl font-semibold text-on-surface tracking-tight">Weighting Distribution Matrix</h3>
        </div>
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-6">
              {[
                { label: 'Financial History', val: 30, color: 'bg-cyan-600' },
                { label: 'Identity Verification', val: 25, color: 'bg-blue-600' },
                { label: 'Behavioral Biometrics', val: 20, color: 'bg-indigo-600' },
                { label: 'Device Fingerprinting', val: 15, color: 'bg-sky-600' },
                { label: 'Social Graph', val: 10, color: 'bg-slate-400' },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    <span>{item.label}</span>
                    <span>{item.val}%</span>
                  </div>
                  <div className="h-3 bg-surface-container-high rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.val}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64">
              {/* Simple SVG Donut Chart Placeholder */}
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E2E8F0" strokeWidth="12" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#2563EB" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="62.8" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0891B2" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="188.4" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-on-surface tracking-tighter">100%</span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Allocated</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const VariableCategoryConfigView = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto w-full">
      <header className="mb-12">
        <div className="flex items-center gap-2 text-[10px] font-bold text-primary tracking-[0.2em] uppercase mb-2">
          <Layers size={14} />
          <span>Taxonomy Engine</span>
        </div>
        <h2 className="text-4xl font-semibold text-on-background tracking-tight">Variable Category Configuration</h2>
        <p className="text-on-surface-variant mt-3 max-w-2xl leading-relaxed">
          Classify scoring variables into functional domains to optimize multi-dimensional risk assessment and reporting granularity.
        </p>
      </header>

      <div className="grid grid-cols-12 gap-8">
        {/* Category List & Creation */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20 shadow-sm">
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-6">Active Categories</h3>
            <div className="space-y-3">
              {[
                { name: 'Behavioral Integrity', count: 12, color: 'bg-blue-600', active: true },
                { name: 'Financial Footprint', count: 8, color: 'bg-indigo-600', active: false },
                { name: 'Network Connectivity', count: 5, color: 'bg-cyan-600', active: false },
                { name: 'Device Metadata', count: 15, color: 'bg-sky-600', active: false },
                { name: 'Psychometric Signals', count: 4, color: 'bg-violet-600', active: false },
              ].map((cat, i) => (
                <button 
                  key={i} 
                  onClick={() => toast.info('Switching to category: ' + cat.name)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${cat.active ? 'bg-primary text-white shadow-md' : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${cat.active ? 'bg-white' : cat.color}`}></div>
                    <span className="text-sm font-semibold">{cat.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${cat.active ? 'bg-white/20' : 'bg-surface-container-high text-on-surface-variant'}`}>{cat.count} Vars</span>
                    <ChevronRight size={16} className={cat.active ? 'text-white' : 'text-outline-variant'} />
                  </div>
                </button>
              ))}
              <button 
                onClick={() => toast.success('Opening new category creation wizard...')}
                className="w-full py-4 flex items-center justify-center gap-2 border-2 border-dashed border-outline-variant/30 text-on-surface-variant text-xs font-bold uppercase rounded-xl hover:bg-slate-50 transition-all mt-4"
              >
                <Plus size={18} />
                New Category
              </button>
            </div>
          </div>
        </div>

        {/* Category Details Editor */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/20 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Layers size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-on-surface">Behavioral Integrity</h3>
                  <p className="text-xs text-on-surface-variant mt-1 font-mono uppercase tracking-widest">ID: CAT_BEH_INT_001</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => toast.error('Deleting category: Behavioral Integrity')}
                    className="p-2 hover:bg-surface-container-high rounded-lg transition-colors text-on-surface-variant"
                  >
                    <Trash2 size={18} />
                  </button>
                  <button 
                    onClick={() => toast.info('Duplicating category: Behavioral Integrity')}
                    className="p-2 hover:bg-surface-container-high rounded-lg transition-colors text-on-surface-variant"
                  >
                    <Copy size={18} />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Description</label>
                  <textarea className="w-full bg-surface-container-low border-0 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 min-h-[100px] leading-relaxed" defaultValue="Assessment of user interaction patterns, application stability, and digital trustworthiness signals derived from real-time device telemetry." />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Aggregation Logic</label>
                    <select className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 appearance-none">
                      <option>Weighted Average</option>
                      <option>Sum of Points</option>
                      <option>Max Risk Signal</option>
                      <option>Boolean Gate</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Display Color</label>
                    <div className="flex gap-2">
                      {['bg-blue-600', 'bg-indigo-600', 'bg-cyan-600', 'bg-sky-600', 'bg-violet-600'].map((c, i) => (
                        <button 
                          key={i} 
                          onClick={() => toast.info('Color selected: ' + c)}
                          className={`w-10 h-10 rounded-lg ${c} ${i === 0 ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                        ></button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-outline-variant/10">
                  <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Linked Variables (12)</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['Device_Age', 'App_Stability', 'Network_Reliability', 'Input_Speed_Variance'].map((v, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-outline-variant/10">
                        <span className="text-xs font-medium text-on-surface">{v}</span>
                        <button 
                          onClick={() => toast.error('Unlinking variable: ' + v)}
                          className="text-on-surface-variant/40 hover:text-error"
                        >
                          <Plus size={14} className="rotate-45" />
                        </button>
                      </div>
                    ))}
                    <button 
                      onClick={() => toast.info('Opening variable selection modal...')}
                      className="flex items-center justify-center p-3 border border-dashed border-outline-variant/30 rounded-lg text-[10px] font-bold text-primary uppercase hover:bg-primary/5 transition-all"
                    >
                      Link Variable
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button 
              onClick={() => toast.success('Category changes saved successfully!')}
              className="px-8 py-3 rounded-xl text-sm font-bold text-white bg-primary shadow-lg shadow-primary/20 hover:bg-primary-container transition-all"
            >
              Save Category Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const VariableConfigView = () => {
  return (
    <main className="flex-1 p-8 bg-surface">
      {/* Header Section */}
      <div className="mb-12 flex justify-between items-end">
        <div>
          <nav className="flex items-center gap-2 text-xs text-on-surface-variant font-medium mb-2 uppercase tracking-widest">
            <span>Configurations</span>
            <ChevronRight size={14} />
            <span>Score Models</span>
            <ChevronRight size={14} />
            <span className="text-primary">Variable Config</span>
          </nav>
          <h1 className="text-2xl font-semibold text-on-surface tracking-tight">Score Variable Configuration</h1>
          <p className="text-on-surface-variant text-sm mt-1">Define extraction logic, weighting, and data source mappings for credit assessment.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => toast.info('Discarding variable changes...')}
            className="px-6 py-2.5 text-sm font-semibold text-on-secondary-container bg-secondary-container rounded-xl hover:bg-opacity-80 transition-all"
          >
            Discard Changes
          </button>
          <button 
            onClick={() => toast.success('Deploying variable to production engine...')}
            className="px-8 py-2.5 text-sm font-semibold text-white bg-gradient-to-br from-primary to-primary-container rounded-xl shadow-lg active:scale-95 transition-all"
          >
            Deploy Variable
          </button>
        </div>
      </div>

      {/* Bento Layout Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Section 1: Core Configuration (Left Column) */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <section className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/20 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-primary">
                <Settings2 size={20} />
              </div>
              <h2 className="text-lg font-semibold text-on-surface">Primary Attributes</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-[0.75rem] font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Variable Name</label>
                <input className="w-full px-4 py-3 bg-surface-container-low border-0 rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary text-sm transition-all outline-variant/20 outline" placeholder="e.g. Device_Age_Stability_Index" type="text" />
              </div>
              <div>
                <label className="block text-[0.75rem] font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Variable Group</label>
                <select className="w-full px-4 py-3 bg-surface-container-low border-0 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-sm transition-all outline-variant/20 outline">
                  <option>Behavioral Integrity</option>
                  <option>Financial Footprint</option>
                  <option>Network Connectivity</option>
                  <option>Device Metadata</option>
                </select>
              </div>
              <div>
                <label className="block text-[0.75rem] font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Data Source</label>
                <div className="flex gap-2">
                  <button 
                    onClick={() => toast.info('Data source set to API')}
                    className="flex-1 py-3 px-2 flex flex-col items-center justify-center gap-1 bg-primary text-white rounded-xl text-[10px] font-bold uppercase transition-all shadow-sm"
                  >
                    <Zap size={18} />
                    API
                  </button>
                  <button 
                    onClick={() => toast.info('Data source set to Device')}
                    className="flex-1 py-3 px-2 flex flex-col items-center justify-center gap-1 bg-surface-container-low text-on-surface-variant hover:bg-slate-200 rounded-xl text-[10px] font-bold uppercase transition-all"
                  >
                    <Smartphone size={18} />
                    Device
                  </button>
                  <button 
                    onClick={() => toast.info('Data source set to SMS')}
                    className="flex-1 py-3 px-2 flex flex-col items-center justify-center gap-1 bg-surface-container-low text-on-surface-variant hover:bg-slate-200 rounded-xl text-[10px] font-bold uppercase transition-all"
                  >
                    <Mail size={18} />
                    SMS
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Logic Breakdown Editor */}
          <section className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/20 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-primary">
                  <Terminal size={20} />
                </div>
                <h2 className="text-lg font-semibold text-on-surface">Logic Breakdown</h2>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => toast.info('Copying logic breakdown...')}
                  className="p-2 bg-surface-container-low text-on-surface-variant rounded-lg hover:bg-slate-200 transition-colors"
                >
                  <Copy size={14} />
                </button>
                <button 
                  onClick={() => toast.info('Viewing raw logic code...')}
                  className="p-2 bg-surface-container-low text-on-surface-variant rounded-lg hover:bg-slate-200 transition-colors"
                >
                  <Code size={14} />
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute top-4 left-4 flex gap-1 z-10">
                <div className="w-2 h-2 rounded-full bg-red-400/50"></div>
                <div className="w-2 h-2 rounded-full bg-amber-400/50"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-400/50"></div>
              </div>
              <div className="w-full bg-slate-900 rounded-xl p-8 pt-10 font-mono text-sm overflow-hidden min-h-[320px]">
                <div className="flex gap-4">
                  <div className="text-slate-600 select-none text-right">
                    1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11
                  </div>
                  <div className="text-slate-300">
                    <span className="text-blue-400">function</span> <span className="text-amber-300">calculateRiskWeight</span>(payload) {'{'}<br />
                    &nbsp;&nbsp;<span className="text-slate-500">// Initialize baseline</span><br />
                    &nbsp;&nbsp;<span className="text-blue-400">const</span> deviceAge = payload.device.age_months;<br />
                    <br />
                    &nbsp;&nbsp;<span className="text-purple-400">if</span> (deviceAge &gt; <span className="text-emerald-400">24</span>) {'{'}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-emerald-400">1.25</span>; <span className="text-slate-500">// High Stability</span><br />
                    &nbsp;&nbsp;{'}'} <span className="text-purple-400">else if</span> (deviceAge &lt; <span className="text-emerald-400">6</span>) {'{'}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-emerald-400">0.85</span>; <span className="text-slate-500">// Recent Change</span><br />
                    &nbsp;&nbsp;{'}'}<br />
                    &nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-emerald-400">1.0</span>;<br />
                    {'}'}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-[10px] text-slate-500 font-mono uppercase tracking-widest">
                JavaScript Runtime v1.4
              </div>
            </div>
          </section>
        </div>

        {/* Section 3: Parameters & Ranges (Right Column) */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          {/* Weighting Card */}
          <section className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/20 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-primary">
                  <Scale size={20} />
                </div>
                <h2 className="text-lg font-semibold text-on-surface">Weighting</h2>
              </div>
              <span className="text-2xl font-bold text-primary tracking-tighter">18.5%</span>
            </div>
            <div className="space-y-6">
              <input className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" defaultValue="18.5" />
              <div className="flex justify-between text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                <span>Low Impact</span>
                <span>Critical Signal</span>
              </div>
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                <p className="text-[0.75rem] text-blue-800 leading-relaxed font-medium flex gap-2">
                  <Info size={14} className="shrink-0" />
                  This variable accounts for nearly <span className="font-bold">1/5th</span> of the total Behavioral Score segment. Ensure the source API has &gt;99% uptime.
                </p>
              </div>
            </div>
          </section>

          {/* Category Management */}
          <section className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/20 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-primary">
                <Layers size={20} />
              </div>
              <h2 className="text-lg font-semibold text-on-surface">Category Management</h2>
            </div>
            <div className="flex gap-2 mb-6 p-1 bg-surface-container-low rounded-xl">
              <button className="flex-1 py-2 text-xs font-bold rounded-lg bg-white shadow-sm text-primary">Numerical Ranges</button>
              <button className="flex-1 py-2 text-xs font-bold rounded-lg text-on-surface-variant hover:bg-white/50 transition-all">Categorical Tags</button>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Elite Tier', sub: 'Value > 24.0', pts: '+125 pts', color: 'border-emerald-400', ptsColor: 'text-emerald-600' },
                { label: 'Standard', sub: '6.0 to 24.0', pts: '+45 pts', color: 'border-blue-400', ptsColor: 'text-blue-600' },
                { label: 'High Risk', sub: 'Value < 6.0', pts: '-110 pts', color: 'border-red-400', ptsColor: 'text-red-600' },
              ].map((cat, i) => (
                <div key={i} className={`flex items-center justify-between p-4 rounded-xl bg-surface-container-low border-l-4 ${cat.color}`}>
                  <div>
                    <p className="text-xs font-bold text-on-surface tracking-wide uppercase">{cat.label}</p>
                    <p className="text-[0.65rem] text-on-surface-variant uppercase">{cat.sub}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold ${cat.ptsColor}`}>{cat.pts}</p>
                  </div>
                </div>
              ))}
              <button 
                onClick={() => toast.success('Opening value range configuration...')}
                className="w-full py-3 mt-2 flex items-center justify-center gap-2 border-2 border-dashed border-outline-variant/30 text-on-surface-variant text-xs font-bold uppercase rounded-xl hover:bg-slate-50 transition-all"
              >
                <Plus size={18} />
                Add Value Range
              </button>
            </div>
          </section>

          {/* Preview Card */}
          <div className="relative overflow-hidden h-48 rounded-xl border border-outline-variant/20 group">
            <img alt="Abstract data visualization" className="w-full h-full object-cover" src="https://picsum.photos/seed/dataviz/800/400" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
              <p className="text-white/80 text-[10px] uppercase font-bold tracking-widest mb-1">Expected Distribution</p>
              <h3 className="text-white font-semibold">Population Analysis Preview</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const ScoreSchemeConfigView = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto w-full">
      <header className="mb-12">
        <p className="text-[11px] font-bold text-primary tracking-[0.2em] uppercase mb-2">Algorithm Orchestration</p>
        <h2 className="text-4xl font-semibold text-on-background tracking-tight">Score Scheme Configuration</h2>
        <p className="text-on-surface-variant mt-3 max-w-2xl leading-relaxed">
          Define the architectural thresholds for credit risk assessment. These bands calibrate the automated decision engine for real-time portfolio analysis.
        </p>
      </header>

      {/* Asymmetric Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Main Form Section */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          {/* Deal Context Filter */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-semibold text-on-surface flex items-center gap-2">
                <Filter size={18} className="text-primary" />
                Contextual Applicability
              </h3>
              <span className="text-[10px] text-on-surface-variant font-medium bg-surface-container-high px-2 py-0.5 rounded uppercase">Required</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Loan Product Type</label>
                <select className="w-full bg-surface-container-low border-0 rounded-lg text-sm py-2.5 px-4 focus:ring-2 focus:ring-primary/20 appearance-none">
                  <option>Commercial Real Estate</option>
                  <option>SME Working Capital</option>
                  <option>Bridge Financing</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Geographic Region</label>
                <select className="w-full bg-surface-container-low border-0 rounded-lg text-sm py-2.5 px-4 focus:ring-2 focus:ring-primary/20 appearance-none">
                  <option>North America (EMEA Compliant)</option>
                  <option>European Union (GDPR Tier 1)</option>
                  <option>APAC Standard</option>
                </select>
              </div>
            </div>
          </div>

          {/* Scoring Band Inputs */}
          <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm">
            <div className="bg-surface-container-high px-6 py-4 flex justify-between items-center">
              <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Active Thresholds</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => toast.info('Threshold documentation loading...')}
                  className="p-1.5 hover:bg-white/50 rounded transition-colors"
                >
                  <Info size={14} />
                </button>
                <button 
                  onClick={() => toast.success('Adding new scoring threshold...')}
                  className="p-1.5 hover:bg-white/50 rounded transition-colors text-primary"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
            <div className="divide-y divide-surface-container-high">
              {[
                { label: 'Poor', sub: 'High Risk', min: 0, max: 580, color: 'bg-blue-900', pct: 30 },
                { label: 'Fair', sub: 'Moderate Risk', min: 581, max: 669, color: 'bg-blue-600', pct: 50 },
                { label: 'Good', sub: 'Standard Grade', min: 670, max: 739, color: 'bg-blue-400', pct: 75 },
                { label: 'Excellent', sub: 'Premium Asset', min: 740, max: 850, color: 'bg-blue-200', pct: 100 },
              ].map((band, i) => (
                <div key={i} className="p-6 grid grid-cols-12 gap-6 items-center bg-white">
                  <div className="col-span-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-1.5 h-10 ${band.color} rounded-full`}></div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">{band.label}</p>
                        <p className="text-[10px] text-on-surface-variant">{band.sub}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 flex items-center gap-2">
                    <input className="w-full text-sm bg-surface-container-low border-0 rounded-lg py-2 focus:ring-1 focus:ring-primary/40 text-center font-semibold" type="number" defaultValue={band.min} />
                    <span className="text-outline-variant font-light">—</span>
                    <input className="w-full text-sm bg-surface-container-low border-0 rounded-lg py-2 focus:ring-1 focus:ring-primary/40 text-center font-semibold" type="number" defaultValue={band.max} />
                  </div>
                  <div className="col-span-4 flex items-center gap-3">
                    <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                      <div className={`h-full ${band.color}`} style={{ width: `${band.pct}%` }}></div>
                    </div>
                    <div className={`w-8 h-8 rounded-lg ${band.color} shadow-sm border-2 border-white`}></div>
                  </div>
                  <div className="col-span-1 text-right">
                    <button 
                      onClick={() => toast.error('Deleting threshold: ' + band.label)}
                      className="text-on-surface-variant/40 hover:text-error transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Color Palette & Visualization Sidebar */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          {/* Azure Horizon Color Picker */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/20">
            <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Azure Spectrum Picker</h4>
            <div className="space-y-6">
              <div className="relative h-48 rounded-xl bg-gradient-to-tr from-blue-900 via-blue-500 to-blue-50 overflow-hidden cursor-crosshair">
                <div className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full border-2 border-white shadow-md"></div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['bg-blue-900', 'bg-blue-700', 'bg-blue-500', 'bg-blue-300', 'bg-blue-200', 'bg-blue-100', 'bg-slate-100', 'bg-white'].map((c, i) => (
                  <button 
                    key={i} 
                    onClick={() => toast.info('Azure spectrum color selected: ' + c)}
                    className={`aspect-square ${c} rounded-lg hover:ring-2 ring-primary ring-offset-2 transition-all ${i === 3 ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                  ></button>
                ))}
              </div>
              <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg">
                <div className="w-8 h-8 rounded bg-blue-300"></div>
                <div className="flex-1">
                  <span className="block text-[10px] text-on-surface-variant font-bold uppercase">Hex Code</span>
                  <span className="text-sm font-mono text-on-surface">#93C5FD</span>
                </div>
                <button 
                  onClick={() => toast.success('Hex code copied to clipboard!')}
                  className="text-primary hover:text-primary-container"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Visual Summary Card */}
          <div className="bg-primary overflow-hidden rounded-xl shadow-lg relative group">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.4),transparent)]"></div>
            <div className="p-6 relative z-10">
              <h4 className="text-white font-semibold text-sm mb-6 flex items-center justify-between">
                Live Visualization
                <Activity size={16} className="opacity-60" />
              </h4>
              <div className="space-y-4">
                <div className="flex items-end gap-1 h-32">
                  {[20, 45, 80, 100, 65, 30].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/40 rounded-t" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center text-white/80 text-[10px] font-medium tracking-wider uppercase">
                    <span>Avg. Portfolio Score</span>
                    <span className="text-lg font-bold text-white tracking-normal">642.5</span>
                  </div>
                  <p className="text-white/60 text-[10px] mt-1 italic">Based on active deal flow for 'Commercial RE'</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Action Bar */}
      <footer className="mt-12 flex justify-end items-center gap-4 pt-8 border-t border-outline-variant/10">
        <button 
          onClick={() => toast.info('Discarding scheme draft...')}
          className="px-6 py-2.5 rounded-xl text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high transition-colors"
        >
          Discard Draft
        </button>
        <button 
          onClick={() => toast.success('Scheme saved to library!')}
          className="px-6 py-2.5 rounded-xl text-sm font-semibold text-primary border border-primary hover:bg-primary/5 transition-colors"
        >
          Save to Library
        </button>
        <button 
          onClick={() => toast.success('Applying scoring scheme across portfolio...')}
          className="px-10 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-br from-primary to-primary-container shadow-lg shadow-primary/20 active:scale-98 transition-all"
        >
          Apply Scheme
        </button>
      </footer>
    </div>
  );
};

const ScoredUserDetailView = ({ setView }: { setView: (v: View) => void }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 sm:space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1 sm:mb-2">
            <button 
              onClick={() => setView('scored-users')}
              className="text-primary flex items-center gap-1 text-[10px] sm:text-[0.75rem] font-bold uppercase tracking-widest hover:underline"
            >
              <ArrowLeft size={14} />
              Back to Applications
            </button>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-on-surface tracking-tight">
            Score Breakdown: <span className="text-primary">Jonathan Sterling</span>
          </h1>
          <p className="text-[10px] sm:text-xs text-on-surface-variant mt-0.5 font-medium">Application ID: #CA-8921-X • Last Updated: Oct 24, 2023</p>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <button 
            onClick={() => toast.success('Generating PDF report for Jonathan Sterling...')}
            className="flex-1 sm:flex-none px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl bg-surface-container-low text-on-secondary-container font-bold text-xs sm:text-sm hover:bg-surface-container-high transition-colors"
          >
            Download PDF
          </button>
          <button 
            onClick={() => toast.success('Credit application approved!')}
            className="flex-1 sm:flex-none px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl bg-primary text-white font-bold text-xs sm:text-sm shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-[0.98]"
          >
            Approve Credit
          </button>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8">
        {/* Left Column: Radial Score & Risk Flags */}
        <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-8">
          {/* Score Composition */}
          <section className="bg-surface-container-lowest p-5 sm:p-8 rounded-2xl shadow-sm relative overflow-hidden flex flex-col items-center border border-slate-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h3 className="text-[10px] sm:text-[0.75rem] font-bold text-on-surface-variant uppercase tracking-[0.1em] mb-6 sm:mb-8 w-full">Score Composition</h3>
            
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle className="text-surface-container-low" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="10"></circle>
                <circle className="text-primary" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="50.24" strokeLinecap="round" strokeWidth="10"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl sm:text-[2.75rem] font-bold text-on-surface leading-none">782</span>
                <span className="text-[9px] sm:text-[0.75rem] font-bold text-primary uppercase tracking-widest mt-1">Excellent</span>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 w-full grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-surface-container-low rounded-xl text-center">
                <span className="block text-[8px] sm:text-[0.65rem] font-bold text-on-surface-variant uppercase tracking-wider">Percentile</span>
                <span className="text-base sm:text-lg font-bold text-on-surface">92nd</span>
              </div>
              <div className="p-2 sm:p-3 bg-surface-container-low rounded-xl text-center">
                <span className="block text-[8px] sm:text-[0.65rem] font-bold text-on-surface-variant uppercase tracking-wider">Trend</span>
                <span className="text-base sm:text-lg font-bold text-emerald-600">+14 pts</span>
              </div>
            </div>
          </section>

          {/* Risk Analysis */}
          <section className="bg-surface-container-lowest p-5 sm:p-8 rounded-2xl shadow-sm border-l-4 border-primary border border-slate-100">
            <h3 className="text-[10px] sm:text-[0.75rem] font-bold text-on-surface-variant uppercase tracking-[0.1em] mb-4 sm:mb-6 flex items-center gap-2">
              <Shield size={16} className="text-primary" />
              Risk Analysis
            </h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-emerald-50 rounded-xl">
                <CheckCircle size={16} className="text-emerald-600 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-emerald-900">Stable Identity</p>
                  <p className="text-[10px] sm:text-xs text-emerald-700/80 leading-relaxed">Physical address verified through three external sources.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-red-50 rounded-xl">
                <AlertTriangle size={16} className="text-red-600 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-red-900">Inquiry Peak</p>
                  <p className="text-[10px] sm:text-xs text-red-700/80 leading-relaxed">3 credit inquiries detected in the last 14 days.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Variable Breakdown & Psychometrics */}
        <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-8">
          {/* Variable-Level Breakdown */}
          <section className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-slate-100">
            <div className="p-5 sm:p-8 pb-3 sm:pb-4">
              <h3 className="text-[10px] sm:text-[0.75rem] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Variable-Level Breakdown</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-5 py-3 sm:px-8 sm:py-4 text-[9px] sm:text-[0.75rem] font-bold text-on-surface-variant uppercase tracking-wider">Variable Name</th>
                    <th className="px-3 py-3 sm:px-4 sm:py-4 text-[9px] sm:text-[0.75rem] font-bold text-on-surface-variant uppercase tracking-wider">Weight</th>
                    <th className="px-3 py-3 sm:px-4 sm:py-4 text-[9px] sm:text-[0.75rem] font-bold text-on-surface-variant uppercase tracking-wider">Raw Data</th>
                    <th className="px-5 py-3 sm:px-8 sm:py-4 text-right text-[9px] sm:text-[0.75rem] font-bold text-on-surface-variant uppercase tracking-wider">Contribution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { name: 'Payment Punctuality', sub: 'Last 24 months history', weight: '35%', data: '100% On-Time', contrib: '273.7', type: 'success' },
                    { name: 'Credit Utilization', sub: 'Revolving balances', weight: '30%', data: '12.4% / $50k', contrib: '234.6', type: 'primary' },
                    { name: 'Length of Credit', sub: 'Earliest open account', weight: '15%', data: '14.2 Years', contrib: '117.3', type: 'primary' },
                    { name: 'Inquiry Frequency', sub: 'Hard pulls (6 months)', weight: '10%', data: '3 Instances', contrib: '78.2', type: 'error' },
                    { name: 'Psychometric Offset', sub: 'OCEAN calibration', weight: '10%', data: 'Pos. Sentiment', contrib: '78.2', type: 'success' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-5 py-3 sm:px-8 sm:py-5">
                        <p className="text-xs sm:text-sm font-bold text-on-surface">{row.name}</p>
                        <p className="text-[10px] sm:text-xs text-on-surface-variant">{row.sub}</p>
                      </td>
                      <td className="px-3 py-3 sm:px-4 sm:py-5 text-xs sm:text-sm font-bold text-slate-600">{row.weight}</td>
                      <td className="px-3 py-3 sm:px-4 sm:py-5">
                        <span className={`px-2.5 py-1 rounded-md text-[9px] sm:text-[0.7rem] font-bold uppercase ${
                          row.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 
                          row.type === 'error' ? 'bg-red-50 text-red-700' : 
                          'bg-blue-50 text-primary'
                        }`}>
                          {row.data}
                        </span>
                      </td>
                      <td className="px-5 py-3 sm:px-8 sm:py-5 text-right text-xs sm:text-sm font-bold text-on-surface">{row.contrib}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Psychometric Insight */}
          <section className="bg-surface-container-lowest p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-[0.75rem] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Psychometric Insight</h3>
                <p className="text-xs text-on-surface-variant mt-1">Machine Learning Analysis of behavioral patterns</p>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary text-[0.65rem] font-black uppercase tracking-widest rounded-full">OCEAN Model v3</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { label: 'Open', val: 64, color: 'bg-primary-container' },
                { label: 'Cons', val: 92, color: 'bg-primary' },
                { label: 'Extr', val: 41, color: 'bg-primary-container/60' },
                { label: 'Agre', val: 78, color: 'bg-primary-container' },
                { label: 'Neur', val: 12, color: 'bg-primary-container/30' },
              ].map((trait, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[0.7rem] font-bold text-on-surface-variant uppercase">{trait.label}</span>
                    <span className="text-sm font-bold text-primary">{trait.val}%</span>
                  </div>
                  <div className="h-24 w-full bg-surface-container-low rounded-full relative overflow-hidden flex flex-col justify-end">
                    <div className={`w-full ${trait.color} rounded-full`} style={{ height: `${trait.val}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-4 bg-blue-50/50 rounded-xl flex items-center gap-4">
              <Info size={20} className="text-blue-700" />
              <p className="text-sm text-blue-900 leading-relaxed italic">
                "The applicant demonstrates exceptionally high conscientiousness scores, which historically correlates with a 42% lower default rate regardless of current income level."
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Recommendation Footer Area */}
      <div className="mt-12 p-8 bg-surface-container-low rounded-xl border-t border-white flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h4 className="text-lg font-bold text-on-surface">Architect Recommendation</h4>
          <p className="text-on-surface-variant text-sm">Model version 'Elite-Alpha' suggests a Credit Limit of <strong className="text-primary">$25,000</strong> at 14.2% APR.</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => toast.info('Generating internal review link...')}
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-semibold text-sm"
          >
            <Copy size={18} />
            Share Internal Review
          </button>
          <button 
            onClick={() => toast.error('Manual audit request sent to compliance team.')}
            className="flex items-center gap-2 text-on-surface-variant hover:text-error transition-colors font-semibold text-sm"
          >
            <AlertTriangle size={18} />
            Request Manual Audit
          </button>
        </div>
      </div>
    </div>
  );
};

const UserProfileView = () => {
  return (
    <div className="p-12 max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold text-on-surface tracking-tight">User Profile</h1>
        <p className="text-on-surface-variant mt-2 text-lg">Manage your identity and account security settings.</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7 space-y-8">
          <div className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow relative overflow-hidden">
            <div className="flex items-start justify-between relative z-10">
              <div className="flex gap-6 items-center">
                <div className="w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center text-primary overflow-hidden">
                  <img alt="Admin Avatar" className="w-full h-full object-cover" src="https://picsum.photos/seed/alexander/200/200" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-on-surface">Alexander Dumont</h3>
                  <p className="text-on-surface-variant">alexander.dumont@creditengine.com</p>
                  <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider">
                    SUPER_ADMIN
                  </div>
                </div>
              </div>
              <button 
                onClick={() => toast.info('Opening profile editor...')}
                className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-200 transition-colors"
              >
                Edit Profile
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow">
            <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-6">Personal Details</h4>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'Full Name', value: 'Alexander Dumont' },
                { label: 'Professional Role', value: 'Chief Security Officer' },
                { label: 'Email Address', value: 'alexander.dumont@creditengine.com' },
                { label: 'Phone Number', value: '+1 (555) 902-3481' },
              ].map((detail, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">{detail.label}</p>
                  <p className="text-on-surface font-medium">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow">
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Notification Preferences</h4>
              <span className="text-xs text-primary font-semibold">Saved automatically</span>
            </div>
            <div className="space-y-6">
              {[
                { label: 'Email Notifications', sub: 'Daily digest of system alerts and audits', icon: Mail, color: 'bg-tertiary-fixed text-on-tertiary-fixed-variant' },
                { label: 'Security Alerts', sub: 'Immediate notifications for critical failures', icon: ShieldCheck, color: 'bg-secondary-fixed text-on-secondary-fixed-variant' },
              ].map((pref, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-surface rounded-xl hover:bg-surface-container-low transition-colors group">
                  <div className="flex gap-4 items-center">
                    <div className={`p-2 rounded-lg ${pref.color}`}>
                      <pref.icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-on-surface">{pref.label}</p>
                      <p className="text-xs text-on-surface-variant">{pref.sub}</p>
                    </div>
                  </div>
                  <div className="relative inline-block w-10 h-6 align-middle select-none transition duration-200 ease-in">
                    <input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-primary appearance-none cursor-pointer focus:outline-none translate-x-4 transition-transform duration-200" type="checkbox"/>
                    <label className="toggle-label block overflow-hidden h-6 rounded-full bg-primary cursor-pointer"></label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 space-y-8">
          <div className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck size={20} className="text-primary" />
              <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Security Settings</h4>
            </div>
            <div className="space-y-8">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">Update Password</label>
                <div className="space-y-4">
                  <input className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400 outline-none" placeholder="Current Password" type="password" />
                  <input className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400 outline-none" placeholder="New Password" type="password" />
                  <button 
                    onClick={() => toast.success('Password updated successfully!')}
                    className="w-full bg-surface text-primary border border-primary/20 py-3 rounded-xl text-sm font-bold hover:bg-primary hover:text-white transition-all"
                  >
                    Update Password
                  </button>
                </div>
              </div>
              <hr className="border-slate-100"/>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold text-on-surface">Two-Factor Authentication</p>
                  <p className="text-xs text-on-surface-variant mt-1">Multi-factor security is currently active.</p>
                </div>
                <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded border border-green-100 uppercase tracking-tighter">Active</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone size={18} className="text-on-surface-variant" />
                  <span className="text-sm text-on-surface font-medium">Authenticator App</span>
                </div>
                <button 
                  onClick={() => toast.info('Opening 2FA management...')}
                  className="text-xs text-primary font-bold hover:underline"
                >
                  Manage
                </button>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow">
            <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-6">Recent Active Sessions</h4>
            <div className="space-y-4">
              {[
                { loc: 'London, GB • Chrome on macOS', time: 'Current Session', active: true },
                { loc: 'Paris, FR • Safari on iPhone', time: '2 hours ago', active: false },
                { loc: 'New York, US • Edge on Windows', time: '3 days ago', active: false },
              ].map((session, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{session.loc}</p>
                    <p className="text-[10px] text-on-surface-variant uppercase font-bold mt-0.5">{session.time}</p>
                  </div>
                  {session.active ? <span className="w-2 h-2 rounded-full bg-green-500"></span> : <button onClick={() => toast.error('Session revoked: ' + session.loc)} className="text-error text-xs font-bold hover:underline">Revoke</button>}
                </div>
              ))}
            </div>
            <button 
              onClick={() => toast.error('All other active sessions have been terminated.')}
              className="w-full mt-4 text-xs font-bold text-on-surface-variant/60 hover:text-on-surface transition-colors"
            >
              Terminate all other sessions
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 p-8 bg-error-container/30 rounded-xl border border-error/10 flex items-center justify-between">
        <div>
          <h5 className="font-bold text-error">Deactivate Account</h5>
          <p className="text-sm text-error/80">Immediately suspend access to your administrative profile and all associated logs.</p>
        </div>
        <button 
          onClick={() => toast.error('Account deactivation request initiated. Please confirm via email.')}
          className="bg-error text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-red-700 shadow-md transition-all active:scale-95"
        >
          Deactivate Account
        </button>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<View>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setView('login');
  };

  if (view === 'login') {
    return <LoginView onLogin={handleLogin} />;
  }

  const getBranding = () => {
    if (view === 'dashboard' || view === 'deals' || view === 'reports') return 'CreditEngine';
    if (view === 'loan-purposes') return 'CreditArchitect';
    if (view === 'scored-users') return 'CreditEngine';
    if (view === 'psychometric') return 'CreditArchitect';
    if (view === 'score-variables') return 'CreditArchitect';
    if (view === 'asset-requirements') return 'CreditArchitect';
    if (view === 'audit-logs') return 'CreditArchitect';
    if (view === 'company-config') return 'CreditArchitect';
    if (view === 'create-company') return 'CreditArchitect';
    if (view === 'score-scheme-config' || view === 'variable-config' || view === 'variable-category-config' || view === 'variable-group-config' || view === 'variable-hierarchy') return 'CreditArchitect';
    if (view === 'user-management' || view === 'settings') return 'Azure Horizon';
    if (view === 'api-analytics' || view === 'api-reference' || view === 'system-health') return 'DevHub';
    if (view === 'profile') return 'Azure Horizon';
    return 'Azure Horizon';
  };

  const getBreadcrumbs = () => {
    if (view === 'dashboard') return ['Admin', 'Dashboard'];
    if (view === 'deals') return ['Admin', 'Management', 'Deals'];
    if (view === 'reports') return ['Admin', 'Management', 'Reports'];
    if (view === 'loan-purposes') return ['Admin', 'Scorecard Settings', 'Loan Purposes'];
    if (view === 'scored-users') return ['Admin', 'Management', 'Scored Users'];
    if (view === 'psychometric') return ['Admin', 'Management', 'Psychometric Setup'];
    if (view === 'score-variables') return ['Admin', 'Management', 'Score Variables'];
    if (view === 'asset-requirements') return ['Admin', 'Management', 'Asset Registry'];
    if (view === 'audit-logs') return ['Admin', 'Developer Hub', 'Audit Logs'];
    if (view === 'company-config') return ['Admin', 'Management', 'Entities'];
    if (view === 'create-company') return ['Admin', 'Management', 'Entities', 'Create Company'];
    if (view === 'user-management') return ['Admin', 'Management', 'Admin Users'];
    if (view === 'api-analytics') return ['Admin', 'Developer Hub', 'API Analytics'];
    if (view === 'api-reference') return ['Admin', 'Developer Hub', 'API Reference'];
    if (view === 'system-health') return ['Admin', 'Developer Hub', 'System Health'];
    if (view === 'score-scheme-config') return ['Admin', 'Scoring Engine', 'Score Scheme'];
    if (view === 'variable-config') return ['Admin', 'Scoring Engine', 'Variable Config'];
    if (view === 'variable-category-config') return ['Admin', 'Scoring Engine', 'Categories'];
    if (view === 'variable-group-config') return ['Admin', 'Scoring Engine', 'Groups'];
    if (view === 'variable-hierarchy') return ['Admin', 'Scoring Engine', 'Hierarchy'];
    if (view === 'profile') return ['Admin', 'Security', 'Profile'];
    if (view === 'settings') return ['Admin', 'System', 'Global Settings'];
    return ['Admin', view.replace('-', ' ')];
  };

  return (
    <div className="min-h-screen bg-surface">
      <Toaster position="top-right" richColors />
      <Sidebar 
        currentView={view} 
        setView={setView} 
        branding={getBranding()} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <main className={`min-h-screen transition-all duration-300 ${view !== 'login' ? 'lg:ml-64' : ''}`}>
        {view !== 'login' && (
          <TopBar 
            title={view.replace('-', ' ')} 
            breadcrumbs={getBreadcrumbs()} 
            setView={setView} 
            onOpenSidebar={() => setIsSidebarOpen(true)}
          />
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {view === 'dashboard' && <DashboardView />}
            {view === 'deals' && <DealsView />}
            {view === 'reports' && <ReportsView />}
            {view === 'loan-purposes' && <LoanPurposesView />}
            {view === 'profile' && <UserProfileView />}
            {view === 'scored-users' && <ScoredUsersView setView={setView} />}
            {view === 'psychometric' && <PsychometricSetupView />}
            {view === 'score-variables' && <ScoreVariablesView />}
            {view === 'api-analytics' && <ApiAnalyticsView />}
            {view === 'api-reference' && <ApiReferenceView />}
            {view === 'asset-requirements' && <AssetRequirementsView />}
            {view === 'audit-logs' && <AuditLogsView />}
            {view === 'company-config' && <CompanyConfigView setView={setView} />}
            {view === 'create-company' && <CreateCompanyView setView={setView} />}
            {view === 'system-health' && <SystemHealthView />}
            {view === 'user-management' && <UserManagementView />}
            {view === 'settings' && <SettingsView />}
            {view === 'scored-user-detail' && <ScoredUserDetailView setView={setView} />}
            {view === 'score-scheme-config' && <ScoreSchemeConfigView />}
            {view === 'variable-config' && <VariableConfigView />}
            {view === 'variable-category-config' && <VariableCategoryConfigView />}
            {view === 'variable-group-config' && <VariableGroupConfigView />}
            {view === 'variable-hierarchy' && <VariableHierarchyView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Logout Button for Demo */}
      <button 
        onClick={handleLogout}
        className="fixed bottom-6 left-6 z-[60] p-3 bg-white border border-slate-200 rounded-full shadow-lg hover:bg-slate-50 text-slate-500 hover:text-error transition-all"
        title="Logout"
      >
        <LogOut size={20} />
      </button>
    </div>
  );
}
