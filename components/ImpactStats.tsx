'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Building, GraduationCap, Heart, Shield } from 'lucide-react'

const impactData = [
  {
    icon: Users,
    value: '12,500+',
    label: 'Children Supported',
    description: 'Directly impacted through our programs',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Building,
    value: '45',
    label: 'Schools Built',
    description: 'Educational facilities constructed',
    color: 'from-purple-500 to-pink-400',
  },
  {
    icon: GraduationCap,
    value: '3,200+',
    label: 'Scholarships',
    description: 'Students receiving education support',
    color: 'from-orange-500 to-yellow-400',
  },
  {
    icon: Heart,
    value: '98%',
    label: 'Funds to Cause',
    description: 'Directly reaches children in need',
    color: 'from-green-500 to-emerald-400',
  },
]

const recentDonations = [
  { address: '0x7a2...9f3e', amount: '2.5 ETH', time: '2 min ago', usd: '$6,125' },
  { address: '0x3b1...a2c4', amount: '1.0 ETH', time: '15 min ago', usd: '$2,450' },
  { address: '0x9d4...7b1a', amount: '5,000 USDC', time: '1 hour ago', usd: '$5,000' },
  { address: '0x2f8...6e9d', amount: '0.5 BTC', time: '3 hours ago', usd: '$15,200' },
  { address: '0x5c3...1f7b', amount: '10,000 USDT', time: '5 hours ago', usd: '$10,000' },
]

export default function ImpactStats() {
  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-6">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-700">
              Real-Time Impact
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            Our <span className="text-gradient">Impact</span> in Numbers
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every donation creates a measurable impact. Track our progress in real-time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-slate-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-slate-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-800">
                Recent Donations
              </h3>
              <div className="flex items-center gap-2 text-green-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Live</span>
              </div>
            </div>
            <div className="space-y-4">
              {recentDonations.map((donation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-bold">
                      {donation.address.slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-mono text-sm text-slate-700">
                        {donation.address}
                      </div>
                      <div className="text-xs text-slate-400">
                        {donation.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-slate-800">
                      {donation.amount}
                    </div>
                    <div className="text-sm text-green-600">
                      {donation.usd}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-primary rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8" />
              <h3 className="text-2xl font-bold">100% Transparent</h3>
            </div>
            <p className="text-white/90 mb-8 leading-relaxed">
              Every transaction is recorded on the blockchain. You can verify 
              exactly how your donation is used. We publish monthly reports 
              showing fund allocation and impact metrics.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                { label: 'Education', value: 45 },
                { label: 'Healthcare', value: 30 },
                { label: 'Nutrition', value: 15 },
                { label: 'Operations', value: 10 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{item.label}</span>
                    <span className="font-semibold">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-white/90 transition-colors"
            >
              View All Transactions
              <TrendingUp className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
