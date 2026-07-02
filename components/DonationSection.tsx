'use client'

import { useState } from 'react'
import { useAccount, useSendTransaction, useBalance } from 'wagmi'
import { parseEther } from 'viem'
import { motion } from 'framer-motion'
import { 
  Wallet, 
  Copy, 
  Check, 
  Bitcoin, 
  Coins, 
  Heart,
  Shield,
  Zap,
  Globe
} from 'lucide-react'
import { formatAddress } from '@/lib/utils'

const CRYPTO_OPTIONS = [
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    icon: '◈',
    color: '#627EEA',
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb', // Replace with your ETH address
  },
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: '₿',
    color: '#F7931A',
    address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', // Replace with your BTC address
  },
  {
    id: 'usdc',
    name: 'USDC',
    symbol: 'USDC',
    icon: '◈',
    color: '#2775CA',
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb', // Replace with your USDC address
  },
  {
    id: 'usdt',
    name: 'USDT',
    symbol: 'USDT',
    icon: '◈',
    color: '#26A17B',
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb', // Replace with your USDT address
  },
]

const PRESET_AMOUNTS = [0.01, 0.05, 0.1, 0.5, 1, 5]

export default function DonationSection() {
  const { address, isConnected } = useAccount()
  const { sendTransaction, isPending } = useSendTransaction()
  const [selectedCrypto, setSelectedCrypto] = useState(CRYPTO_OPTIONS[0])
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [copied, setCopied] = useState(false)
  const [donationSuccess, setDonationSuccess] = useState(false)

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(selectedCrypto.address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDonate = async () => {
    if (!isConnected || !amount) return

    try {
      const value = parseEther(amount)
      await sendTransaction({
        to: selectedCrypto.address as `0x${string}`,
        value,
      })
      setDonationSuccess(true)
      setTimeout(() => setDonationSuccess(false), 5000)
    } catch (error) {
      console.error('Donation failed:', error)
    }
  }

  const handlePresetAmount = (preset: number) => {
    setAmount(preset.toString())
    setCustomAmount('')
  }

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value)
    setAmount(value)
  }

  return (
    <section id="donate" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 border border-accent-200 mb-6">
            <Heart className="w-4 h-4 text-accent-500" fill="currentColor" />
            <span className="text-sm font-medium text-accent-700">
              Make a Difference
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            Choose Your <span className="text-gradient">Donation</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Select your preferred cryptocurrency and amount. Every donation is 
            recorded on the blockchain for complete transparency.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
              {/* Crypto Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-4">
                  Select Cryptocurrency
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {CRYPTO_OPTIONS.map((crypto) => (
                    <button
                      key={crypto.id}
                      onClick={() => setSelectedCrypto(crypto)}
                      className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all ${
                        selectedCrypto.id === crypto.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: crypto.color }}
                      >
                        {crypto.icon}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-slate-800">
                          {crypto.name}
                        </div>
                        <div className="text-sm text-slate-500">
                          {crypto.symbol}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-4">
                  Select Amount ({selectedCrypto.symbol})
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {PRESET_AMOUNTS.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => handlePresetAmount(preset)}
                      className={`py-3 rounded-xl font-semibold transition-all ${
                        amount === preset.toString()
                          ? 'bg-gradient-primary text-white shadow-lg shadow-primary-500/30'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {preset} {selectedCrypto.symbol}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="number"
                    placeholder={`Custom amount in ${selectedCrypto.symbol}`}
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                    {selectedCrypto.symbol}
                  </span>
                </div>
              </div>

              {/* Wallet Status & Action */}
              <div className="space-y-4">
                {isConnected ? (
                  <>
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-green-700">
                        Connected: {formatAddress(address || '')}
                      </span>
                    </div>
                    <button
                      onClick={handleDonate}
                      disabled={isPending || !amount}
                      className="w-full py-4 bg-gradient-primary text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-primary-500/30 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isPending ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </span>
                      ) : (
                        `Donate ${amount || '0'} ${selectedCrypto.symbol}`
                      )}
                    </button>
                  </>
                ) : (
                  <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <Wallet className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                    <p className="text-slate-600 mb-4">
                      Connect your wallet to make a donation
                    </p>
                    <p className="text-sm text-slate-400">
                      Use the connect button in the navigation bar
                    </p>
                  </div>
                )}

                {donationSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 rounded-xl border border-green-200 text-center"
                  >
                    <Check className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-green-700 font-semibold">
                      Thank you for your donation!
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      Your transaction has been submitted.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* QR Code & Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* QR Code Card */}
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Direct Transfer
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Scan or copy the address to donate directly from your wallet
              </p>

              {/* QR Placeholder */}
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-primary-300">
                <div className="text-center">
                  <div 
                    className="w-32 h-32 mx-auto mb-2 rounded-xl flex items-center justify-center text-4xl"
                    style={{ backgroundColor: selectedCrypto.color + '20' }}
                  >
                    <span style={{ color: selectedCrypto.color }}>
                      {selectedCrypto.icon}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">QR Code Placeholder</span>
                </div>
              </div>

              {/* Address */}
              <div className="bg-slate-50 rounded-xl p-4 flex items-center justify-between gap-3">
                <code className="text-sm text-slate-600 truncate">
                  {selectedCrypto.address}
                </code>
                <button
                  onClick={handleCopyAddress}
                  className="p-2 hover:bg-white rounded-lg transition-colors flex-shrink-0"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-slate-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Shield, label: 'Secure', desc: 'Blockchain Verified' },
                { icon: Zap, label: 'Fast', desc: 'Instant Transfer' },
                { icon: Globe, label: 'Global', desc: 'No Borders' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-4 text-center border border-slate-100"
                >
                  <item.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                  <div className="font-semibold text-slate-800 text-sm">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
