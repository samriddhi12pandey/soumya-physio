import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQ_ITEMS } from '@/constants'
import SectionHeader from '@/components/ui/SectionHeader'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

function AccordionItem({ question, answer, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        isOpen
          ? 'border-primary-200 bg-primary-50/50 shadow-sm'
          : 'border-gray-100 bg-white hover:border-gray-200'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className={`font-display font-semibold text-sm md:text-base transition-colors ${
          isOpen ? 'text-primary-700' : 'text-heading'
        }`}>
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
            isOpen
              ? 'bg-primary-700 text-white'
              : 'bg-gray-100 text-body hover:bg-gray-200'
          }`}
        >
          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <p className="text-body text-sm leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const half = Math.ceil(FAQ_ITEMS.length / 2)
  const leftItems = FAQ_ITEMS.slice(0, half)
  const rightItems = FAQ_ITEMS.slice(half)

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="flex flex-col items-center mb-12">
          <SectionHeader
            tag="FAQ"
            title="Questions You"
            titleHighlight="Might Have"
            subtitle="Everything you need to know before your first appointment."
            centered
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Left column */}
          <div className="space-y-3">
            {leftItems.map((item, i) => (
              <AccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
                index={i}
              />
            ))}
          </div>
          {/* Right column */}
          <div className="space-y-3">
            {rightItems.map((item, i) => {
              const globalIndex = half + i
              return (
                <AccordionItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === globalIndex}
                  onToggle={() => toggle(globalIndex)}
                  index={i}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
