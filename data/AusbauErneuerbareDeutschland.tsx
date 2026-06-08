import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Zap, Activity, Info } from 'lucide-react';

const data = [
  { year: 1990, capacity: 4443, share: 3.5 },
  { year: 1995, capacity: 5969, share: 4.7 },
  { year: 2000, capacity: 12038, share: 6.25 },
  { year: 2005, capacity: 28453, share: 10.3 },
  { year: 2010, capacity: 56546, share: 17.2 },
  { year: 2012, capacity: 72900, share: null },
  { year: 2015, capacity: 97856, share: 31.6 },
  { year: 2016, capacity: null, share: 32.3 },
  { year: 2017, capacity: null, share: 35.0 },
  { year: 2020, capacity: 132355, share: 45.5 },
  { year: 2023, capacity: 168409, share: 52.5 },
];

const App = () => {
  const [activeMetric, setActiveMetric] = useState('capacity');

  const filteredData = useMemo(() => {
    return data.filter(d => d[activeMetric] !== null);
  }, [activeMetric]);

  const metrics = {
    capacity: {
      label: 'Installierte Kapazität (MW)',
      color: '#10b981',
      unit: ' MW',
      icon: <Zap size={18} />
    },
    share: {
      label: 'Anteil am Bruttostromverbrauch (%)',
      color: '#3b82f6',
      unit: '%',
      icon: <Activity size={18} />
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h1 className="text-2xl font-bold mb-2">Erneuerbare Energien in Deutschland</h1>
          <p className="text-slate-500">Zeitliche Entwicklung der Kapazität und des Stromverbrauchsanteils.</p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3">
          {Object.entries(metrics).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setActiveMetric(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                activeMetric === key 
                ? 'bg-slate-900 text-white shadow-md' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {config.icon}
              {config.label}
            </button>
          ))}
        </div>

        {/* Chart Container */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={metrics[activeMetric].color} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={metrics[activeMetric].color} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="year" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#64748b'}}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#64748b'}}
                tickFormatter={(value) => value.toLocaleString()}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: 'none', 
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                  padding: '12px'
                }}
                formatter={(value) => [`${value.toLocaleString()}${metrics[activeMetric].unit}`, metrics[activeMetric].label]}
              />
              <Area 
                type="monotone" 
                dataKey={activeMetric} 
                stroke={metrics[activeMetric].color} 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorMetric)" 
                animationDuration={1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend/Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
            <h3 className="text-emerald-800 font-semibold mb-1">Max. Kapazität (2023)</h3>
            <p className="text-2xl font-bold text-emerald-900">168.409 MW</p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
            <h3 className="text-blue-800 font-semibold mb-1">Anteil (2023)</h3>
            <p className="text-2xl font-bold text-blue-900">52,5 %</p>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-center gap-3">
            <Info className="text-amber-600" size={24} />
            <p className="text-sm text-amber-800">
              Seit 1990 stieg die installierte Kapazität um ca. <strong>3.700 %</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;