import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('お問い合わせありがとうございます！')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-blue-400' },
  ]

  const contactInfo = [
    { icon: FaEnvelope, text: 'example@email.com', href: 'mailto:example@email.com' },
    { icon: FaPhone, text: '+81 90-1234-5678', href: 'tel:+819012345678' },
    { icon: FaMapMarkerAlt, text: '東京都, 日本', href: '#' },
  ]

  return (
    <section id="contact" className="section-container bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, primary-600 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <AnimatedSection animation="fade-in">
        <h2 className="section-title relative z-10">お問い合わせ</h2>
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <AnimatedSection animation="slide-right" delay={200}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                お気軽にお問い合わせください
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                プロジェクトのご相談やお仕事のご依頼など、お気軽にご連絡ください。
                できるだけ早く返信いたします。
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="group flex items-center p-4 glass-strong rounded-lg hover:bg-white/30 transition-all duration-300 hover-lift"
                    >
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors duration-300">
                        <IconComponent className="text-primary-600" size={20} />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-primary-600 transition-colors">
                        {info.text}
                      </span>
                    </a>
                  )
                })}
              </div>

              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-14 h-14 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full flex items-center justify-center hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl ${social.color}`}
                      aria-label={social.label}
                    >
                      <IconComponent size={22} className="transition-transform duration-300 group-hover:rotate-12" />
                    </a>
                  )
                })}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={400}>
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 shadow-glass-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  お名前
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-white/50 backdrop-blur-sm border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                      focusedField === 'name'
                        ? 'border-primary-500 shadow-lg scale-[1.02]'
                        : 'border-white/30'
                    }`}
                    placeholder="山田 太郎"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  メールアドレス
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-white/50 backdrop-blur-sm border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                      focusedField === 'email'
                        ? 'border-primary-500 shadow-lg scale-[1.02]'
                        : 'border-white/30'
                    }`}
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 bg-white/50 backdrop-blur-sm border-2 rounded-lg focus:outline-none transition-all duration-300 resize-none ${
                    focusedField === 'message'
                      ? 'border-primary-500 shadow-lg scale-[1.02]'
                      : 'border-white/30'
                  }`}
                  placeholder="メッセージを入力してください..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] transform"
              >
                送信
              </button>
            </form>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </section>
  )
}

export default Contact

